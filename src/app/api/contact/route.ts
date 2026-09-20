import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import { Resend } from 'resend';
import nodemailer from 'nodemailer';

const NOTIFICATION_EMAIL = 'halil.pekn@gmail.com';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, projectType, surface, message } = body;

    // 1. Préparation du message structuré
    const fullMessage = `Type de projet: ${projectType || 'Non spécifié'}
Surface: ${surface ? `${surface} m²` : 'Non spécifiée'}

Message:
${message || 'Aucun message supplémentaire'}`;

    // 2. Enregistrement dans Supabase (Table contact_submissions)
    let savedToDb = false;
    try {
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
          <td class="value"><strong>${name || 'Non spécifié'}</strong></td>
        </tr>
        <tr>
          <td class="label">📞 Téléphone</td>
          <td class="value">
            ${phone ? `<a href="tel:${phone}" style="color: #09090b; font-weight: 700; text-decoration: none;">${phone}</a>` : 'Non renseigné'}
          </td>
        </tr>
        <tr>
          <td class="label">✉️ Email</td>
          <td class="value">
            ${email ? `<a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a>` : 'Non renseigné'}
          </td>
        </tr>
        <tr>
          <td class="label">🛠️ Type de projet</td>
          <td class="value"><strong>${projectType || 'Général'}</strong></td>
        </tr>
        <tr>
          <td class="label">📐 Surface estimée</td>
          <td class="value">${surface ? `${surface} m²` : 'Non précisée'}</td>
        </tr>
        <tr>
          <td class="label">📅 Date de réception</td>
          <td class="value">${dateFormatted}</td>
        </tr>
      </table>

      <div style="font-weight: 600; margin-bottom: 8px; font-size: 13px; text-transform: uppercase; color: #71717a;">Détail de la demande :</div>
      <div class="message-box">${message || 'Le client n’a pas laissé de message spécifique.'}</div>

      <div class="cta-container">
        ${phone ? `<a href="tel:${phone}" class="btn-call">📞 Rappeler le client (${phone})</a>` : ''}
        ${email ? `<a href="mailto:${email}?subject=Votre demande de devis MP Carrelage" class="btn-email">✉️ Répondre par email</a>` : ''}
      </div>
    </div>
    <div class="footer">
      Notification automatique envoyée à ${NOTIFICATION_EMAIL} • MP Carrelage Mulhouse
    </div>
  </div>
</body>
</html>`;

    let emailSent = false;

    // 4. Envoi via Resend (si clé configurée)
    if (process.env.RESEND_API_KEY) {
      try {
        const resend = new Resend(process.env.RESEND_API_KEY);
        await resend.emails.send({
          from: process.env.RESEND_FROM_EMAIL || 'MP Carrelage <onboarding@resend.dev>',
          to: NOTIFICATION_EMAIL,
          replyTo: email || undefined,
          subject: emailSubject,
          html: emailHtml,
        });
        emailSent = true;
        console.log('✅ Email envoyé avec succès via Resend à', NOTIFICATION_EMAIL);
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
          secure: Boolean(process.env.SMTP_SECURE ?? true),
          auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
          },
        });

        await transporter.sendMail({
          from: `"MP Carrelage" <${process.env.SMTP_USER}>`,
          to: NOTIFICATION_EMAIL,
          replyTo: email || undefined,
          subject: emailSubject,
          html: emailHtml,
        });
        emailSent = true;
        console.log('✅ Email envoyé avec succès via SMTP à', NOTIFICATION_EMAIL);
      } catch (smtpError) {
        console.error('Erreur d’envoi SMTP:', smtpError);
      }
    }

    return NextResponse.json({
      success: true,
      savedToDb,
      emailSent,
    });
  } catch (err: any) {
    console.error('Erreur traitement formulaire contact:', err);
    return NextResponse.json(
      { success: false, error: err.message || 'Erreur serveur' },
      { status: 500 }
    );
  }
}
