import test from 'node:test';
import assert from 'node:assert/strict';
import { getLanguage, articleHref, articleTranslations, languageSwitchHref, localizedHref } from '../src/lib/i18n/routing.ts';
import { validateContact, escapeHtml } from '../src/lib/contact-validation.ts';
import { blogData } from '../src/data/blog-data.ts';

test('unsupported, repeated and prototype-like language values safely use French', () => {
    for (const value of [undefined, 'xx', '__proto__', 'constructor', ['tr', 'de']]) assert.equal(getLanguage(value), 'fr');
    assert.equal(getLanguage('tr'), 'tr');
});

test('every known article has an explicit valid translation relationship', () => {
    for (const [language, posts] of Object.entries(blogData)) {
        for (const post of posts) {
            const group = articleTranslations.find(group => group[language] === post.slug);
            assert.ok(group, `${language}/${post.slug}`);
            for (const [translationLanguage, slug] of Object.entries(group)) {
                assert.ok(blogData[translationLanguage].some(post => post.slug === slug), `${translationLanguage}/${slug}`);
            }
        }
    }
});

test('switching languages selects the actual article slug and preserves section anchors', () => {
    assert.equal(articleHref('renover-salle-de-bain-kingersheim-guide', 'de'), '/blog/badezimmer-renovieren-kingersheim?lang=de');
    assert.equal(articleHref('kingersheim-banyo-yenileme', 'fr'), '/blog/renover-salle-de-bain-kingersheim-guide');
    assert.equal(articleHref('renovation-salle-de-bain-mulhouse-prix', 'fr'), '/blog');
    assert.equal(languageSwitchHref('/salle-de-bain', 'tr'), '/?lang=tr#expertises');
    assert.equal(localizedHref('/#contact', 'en'), '/?lang=en#contact');
});

const valid = { name: 'Client de test', email: 'test@example.com', phone: '+33 6 12 34 56 78', projectType: 'Rénovation', surface: '25', message: 'Demande de devis' };

test('contact validation rejects malformed payloads, invalid coordinates and excessive input', () => {
    assert.ok(validateContact(valid));
    for (const value of [null, [], {}, { ...valid, email: 'invalid' }, { ...valid, name: 'A' }, { ...valid, name: 'Nom\r\nBcc: victim@example.com' }, { ...valid, surface: '-1' }, { ...valid, surface: 'NaN' }, { ...valid, surface: '' }, { ...valid, phone: '<script>' }, { ...valid, message: 'x'.repeat(5001) }, { ...valid, name: {} }, { ...valid, website: [] }]) assert.equal(validateContact(value), null);
});

test('email HTML escapes user-supplied markup and quotes', () => {
    assert.equal(escapeHtml('<a href="x">Tom & Jerry\'s</a>'), '&lt;a href=&quot;x&quot;&gt;Tom &amp; Jerry&#39;s&lt;/a&gt;');
});
