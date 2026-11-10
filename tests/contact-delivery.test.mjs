import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import vm from 'node:vm';
import ts from 'typescript';
import * as validation from '../src/lib/contact-validation.ts';

const compiled = ts.transpileModule(readFileSync(new URL('../src/app/api/contact/route.ts', import.meta.url), 'utf8'), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022, esModuleInterop: true },
}).outputText;

async function submit({ database = false, resend = false, smtp = false, payload = {}, environment = {} } = {}) {
    const deliveries = [];
    let smtpOptions;
    const fakeModule = { exports: {} };
    const mocks = {
        'next/server': { NextResponse: { json: (data, options) => new Response(JSON.stringify(data), { status: options?.status ?? 200 }) } },
        '@/lib/contact-validation': validation,
        '@supabase/supabase-js': { createClient: () => ({ from: () => ({ insert: async () => ({ error: database ? null : { message: 'simulated failure' } }) }) }) },
        resend: { Resend: class { emails = { send: async data => { deliveries.push(data); return { error: resend ? null : { message: 'simulated failure' } }; } }; } },
        nodemailer: { createTransport: options => { smtpOptions = options; return { sendMail: async data => { if (!smtp) throw new Error('simulated failure'); deliveries.push(data); } }; } },
    };
    vm.runInNewContext(compiled, {
        exports: fakeModule.exports, module: fakeModule,
        require: id => { assert.ok(id in mocks, `Unexpected dependency: ${id}`); return mocks[id]; },
        process: { env: { NEXT_PUBLIC_SUPABASE_URL: 'https://test.supabase.co', NEXT_PUBLIC_SUPABASE_ANON_KEY: 'mock', ...environment } },
        console: { log() {}, warn() {}, error() {} },
        TextEncoder, AbortSignal, URL, Intl, Date,
    });
    const response = await fakeModule.exports.POST(new Request('https://www.mp-carrelage.com/api/contact', {
        method: 'POST', headers: { 'Content-Type': 'application/json', Origin: 'https://www.mp-carrelage.com' },
        body: JSON.stringify({ name: 'Test technique', email: 'local@example.com', phone: '', projectType: 'Rénovation', surface: '25', message: '<img src=x onerror=alert(1)>', ...payload }),
    }));
    return { status: response.status, body: await response.json(), deliveries, smtpOptions };
}

test('database delivery is sufficient and both failures return an honest error', async () => {
    assert.deepEqual((await submit({ database: true })).body, { success: true, savedToDb: true, emailSent: false });
    const failure = await submit();
    assert.equal(failure.status, 503);
    assert.equal(failure.body.success, false);
});

test('Resend delivery succeeds without the database and escapes the email HTML', async () => {
    const result = await submit({ resend: true, environment: { RESEND_API_KEY: 'mock' } });
    assert.equal(result.body.success, true);
    assert.equal(result.body.savedToDb, false);
    assert.equal(result.body.emailSent, true);
    assert.ok(result.deliveries[0].html.includes('&lt;img src=x onerror=alert(1)&gt;'));
    assert.ok(!result.deliveries[0].html.includes('<img src=x'));
    assert.equal(result.deliveries[0].replyTo, 'local@example.com');
});

test('SMTP fallback respects the explicit false secure option', async () => {
    const result = await submit({ smtp: true, environment: { SMTP_USER: 'local@example.com', SMTP_PASS: 'mock', SMTP_PORT: '587', SMTP_SECURE: 'false' } });
    assert.equal(result.body.emailSent, true);
    assert.equal(result.smtpOptions.secure, false);
    assert.equal(result.smtpOptions.port, 587);
});

test('invalid and honeypot requests never trigger email delivery', async () => {
    for (const payload of [{ email: 'invalid' }, { website: 'spam' }]) {
        const result = await submit({ resend: true, environment: { RESEND_API_KEY: 'mock' }, payload });
        assert.equal(result.status, 400);
        assert.equal(result.deliveries.length, 0);
    }
});
