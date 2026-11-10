import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { validateContact, escapeHtml } from '@/lib/contact-validation';
import { Resend } from 'resend';
import nodemailer from 'nodemailer';

const NOTIFICATION_EMAILS = [
  'halil.pekn@gmail.com',
  'canan.pekcan@icloud.com',
];

export async function POST(request: Request) {
  try {
    const origin = request.headers.get('origin');
    // Next's internal URL can use localhost behind the production server.
    // Compare the browser origin with the actual request host as well.
    if (origin && origin !== new URL(request.url).origin && new URL(origin).host !== request.headers.get('host')) {
      return NextResponse.json({ success: false, error: 'Origine de la demande non autorisée.' }, { status: 403 });
    }
    const rawBody = await request.text();
    if (new TextEncoder().encode(rawBody).length > 32768) {
      return NextResponse.json({ success: false, error: 'Demande trop volumineuse.' }, { status: 413 });
    }
    let input: unknown;
    try { input = JSON.parse(rawBody); }
    catch { return NextResponse.json({ success: false, error: 'Demande invalide.' }, { status: 400 }); }
    const data = validateContact(input);
    if (!data) return NextResponse.json({ success: false, error: 'Vérifiez vos coordonnées, le type de projet et la surface.' }, { status: 400 });
    if (data.website) return NextResponse.json({ success: false, error: 'Demande non acceptée.' }, { status: 400 });
    const { name, email, phone, projectType, surface, message } = data;
    const safe = { name: escapeHtml(name), email: escapeHtml(email), phone: escapeHtml(phone), projectType: escapeHtml(projectType), surface: escapeHtml(surface), message: escapeHtml(message) };

    // 1. Préparation du message structuré
    const fullMessage = `Type de projet: ${projectType || 'Non spécifié'}
Surface: ${surface ? `${surface} m²` : 'Non spécifiée'}

Message:
${message || 'Aucun message supplémentaire'}`;

    // 2. Enregistrement dans Supabase (Table contact_submissions)
    let savedToDb = false;
    try {
      const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
      const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
      if (!url || !key || url.includes('placeholder') || url.includes('your-')) throw new Error('Database not configured');
      const supabase = createClient(url, key, {
        auth: { persistSession: false, autoRefreshToken: false },
        global: { fetch: (resource, options) => fetch(resource, { ...options, signal: AbortSignal.timeout(7000) }) },
      });
      const { error: supabaseError } = await supabase
        .from('contact_submissions')
        .insert([
          {
            name: name || 'Non renseigné',
            email: email || 'Non renseigné',
            phone: phone || '',
            message: fullMessage,
            status: 'new',
          },
        ]);

      if (!supabaseError) {
        savedToDb = true;
      } else {
        console.warn('Erreur Supabase insert:', supabaseError.message);
      }
    } catch (dbErr) {
      console.warn('Erreur lors de l’enregistrement Supabase:', dbErr);
    }

    // 3. Préparation du contenu de l'e-mail
    const dateFormatted = new Intl.DateTimeFormat('fr-FR', {
      dateStyle: 'full',
      timeStyle: 'short',
      timeZone: 'Europe/Paris',
    }).format(new Date());

    const emailSubject = `🚨 Nouveau Devis MP Carrelage — ${name || 'Client'} (${projectType || 'Prestation'})`;

    const emailHtml = `<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif; background-color: #f4f4f5; color: #18181b; margin: 0; padding: 24px; }
    .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 14px rgba(0,0,0,0.08); border: 1px solid #e4e4e7; }
    .header { background: #1B1B1D; color: #ffffff; padding: 24px 32px; border-bottom: 3px solid #D4C7B3; }
    .header h1 { margin: 0; font-size: 20px; font-weight: 700; color: #ffffff; }
    .badge { display: inline-block; background: #D4C7B3; color: #1B1B1D; font-size: 11px; font-weight: 700; text-transform: uppercase; padding: 4px 10px; border-radius: 20px; margin-top: 8px; }
    .content { padding: 32px; }
    .info-table { width: 100%; border-collapse: collapse; margin-bottom: 24px; }
    .info-table td { padding: 12px 14px; border-bottom: 1px solid #f4f4f5; font-size: 14px; }
    .info-table td.label { font-weight: 600; color: #71717a; width: 35%; }
    .info-table td.value { font-weight: 500; color: #09090b; }
    .message-box { background: #fafafa; border-left: 4px solid #D4C7B3; padding: 16px; border-radius: 4px; margin-bottom: 24px; font-size: 14px; line-height: 1.6; color: #27272a; white-space: pre-wrap; }
    .cta-container { text-align: center; margin-top: 24px; }
    .btn-call { display: inline-block; background: #1B1B1D; color: #D4C7B3 !important; text-decoration: none; padding: 14px 24px; border-radius: 8px; font-weight: 700; font-size: 14px; margin: 6px; }
    .btn-email { display: inline-block; background: #f4f4f5; color: #18181b !important; text-decoration: none; padding: 14px 24px; border-radius: 8px; font-weight: 600; font-size: 14px; margin: 6px; border: 1px solid #e4e4e7; }
    .footer { background: #fafafa; padding: 16px 32px; text-align: center; font-size: 12px; color: #a1a1aa; border-top: 1px solid #f4f4f5; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>MP CARRELAGE — Nouveau Devis Reçu</h1>
      <span class="badge">Notification Prioritaire</span>
    </div>
    <div class="content">
      <table class="info-table">
        <tr>
          <td class="label">👤 Nom du client</td>
          <td class="value"><strong>${safe.name || 'Non spécifié'}</strong></td>
        </tr>
        <tr>
          <td class="label">📞 Téléphone</td>
          <td class="value">
            ${safe.phone ? `<a href="tel:${safe.phone}" style="color: #09090b; font-weight: 700; text-decoration: none;">${safe.phone}</a>` : 'Non renseigné'}
          </td>
        </tr>
        <tr>
          <td class="label">✉️ Email</td>
          <td class="value">
            ${safe.email ? `<a href="mailto:${safe.email}" style="color: #2563eb; text-decoration: none;">${safe.email}</a>` : 'Non renseigné'}
          </td>
        </tr>
        <tr>
          <td class="label">🛠️ Type de projet</td>
          <td class="value"><strong>${safe.projectType || 'Général'}</strong></td>
        </tr>
        <tr>
          <td class="label">📐 Surface estimée</td>
          <td class="value">${safe.surface ? `${safe.surface} m²` : 'Non précisée'}</td>
        </tr>
        <tr>
          <td class="label">📅 Date de réception</td>
          <td class="value">${dateFormatted}</td>
        </tr>
      </table>

      <div style="font-weight: 600; margin-bottom: 8px; font-size: 13px; text-transform: uppercase; color: #71717a;">Détail de la demande :</div>
      <div class="message-box">${safe.message || 'Le client n’a pas laissé de message spécifique.'}</div>

      <div class="cta-container">
        ${safe.phone ? `<a href="tel:${safe.phone}" class="btn-call">📞 Rappeler le client (${safe.phone})</a>` : ''}
        ${safe.email ? `<a href="mailto:${safe.email}?subject=Votre demande de devis MP Carrelage" class="btn-email">✉️ Répondre par email</a>` : ''}
      </div>
    </div>
    <div class="footer">
      Notification automatique envoyée à ${NOTIFICATION_EMAILS.join(' &amp; ')} • MP Carrelage Mulhouse
    </div>
  </div>
</body>
</html>`;

    let emailSent = false;

    // 4. Envoi via Resend (si clé configurée)
    if (process.env.RESEND_API_KEY) {
      try {
        const resend = new Resend(process.env.RESEND_API_KEY);
        const res = await resend.emails.send({
          from: process.env.RESEND_FROM_EMAIL || 'MP Carrelage <devis@mp-carrelage.com>',
          to: NOTIFICATION_EMAILS,
          replyTo: email || undefined,
          subject: emailSubject,
          html: emailHtml,
        });

        if (!res.error) {
          emailSent = true;
          console.log('✅ Email envoyé avec succès via Resend à', NOTIFICATION_EMAILS.join(', '));
        } else {
          console.warn('Tentative Resend groupée:', res.error, '— repli sur envois individuels');
          let anySent = false;
          for (const recipient of NOTIFICATION_EMAILS) {
            try {
              const singleRes = await resend.emails.send({
                from: process.env.RESEND_FROM_EMAIL || 'MP Carrelage <devis@mp-carrelage.com>',
                to: recipient,
                replyTo: email || undefined,
                subject: emailSubject,
                html: emailHtml,
              });
              if (!singleRes.error) {
                anySent = true;
                console.log(`✅ Email Resend envoyé à ${recipient}`);
              }
            } catch (singleErr) {
              console.warn(`Erreur Resend pour ${recipient}:`, singleErr);
            }
          }
          if (anySent) emailSent = true;
        }
      } catch (resendError) {
        console.error('Erreur d’envoi Resend:', resendError);
      }
    }

    // 5. Envoi via SMTP / Nodemailer (si variables SMTP configurées)
    if (!emailSent && process.env.SMTP_USER && process.env.SMTP_PASS) {
      try {
        const transporter = nodemailer.createTransport({
          host: process.env.SMTP_HOST || 'smtp.gmail.com',
          port: Number(process.env.SMTP_PORT) || 465,
          secure: process.env.SMTP_SECURE ? process.env.SMTP_SECURE === 'true' : (Number(process.env.SMTP_PORT) || 465) === 465,
          connectionTimeout: 7000,
          socketTimeout: 10000,
          auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
          },
        });

        await transporter.sendMail({
          from: `"MP Carrelage" <${process.env.SMTP_USER}>`,
          to: NOTIFICATION_EMAILS.join(', '),
          replyTo: email || undefined,
          subject: emailSubject,
          html: emailHtml,
        });
        emailSent = true;
        console.log('✅ Email envoyé avec succès via SMTP à', NOTIFICATION_EMAILS.join(', '));
      } catch (smtpError) {
        console.error('Erreur d’envoi SMTP:', smtpError);
      }
    }

    if (!savedToDb && !emailSent) {
      return NextResponse.json({ success: false, error: 'Votre demande n’a pas pu être transmise. Réessayez ou contactez-nous au 06 67 67 40 60.' }, { status: 503 });
    }
    return NextResponse.json({
      success: true,
      savedToDb,
      emailSent,
    });
  } catch (err: unknown) {
    console.error('Erreur traitement formulaire contact:', err);
    return NextResponse.json(
      { success: false, error: 'Une erreur empêche l’envoi. Réessayez ou contactez-nous par téléphone.' },
      { status: 500 }
    );
  }
}
