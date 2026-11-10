"""Read-only HTTP regression checks. Contact failure checks run only on localhost."""
import concurrent.futures
import html.parser
import json
import sys
import urllib.error
import urllib.parse
import urllib.request
import xml.etree.ElementTree as ET

BASE = sys.argv[1].rstrip('/') if len(sys.argv) > 1 else 'http://127.0.0.1:3012'
CANONICAL = 'https://www.mp-carrelage.com'

class Page(html.parser.HTMLParser):
    def __init__(self, html):
        super().__init__()
        self.canonical = []
        self.robots = []
        self.links = []
        self.images = []
        self.ids = set()
        self.feed(html)
    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if attrs.get('id'): self.ids.add(attrs['id'])
        if tag == 'link' and attrs.get('rel') == 'canonical': self.canonical.append(attrs.get('href'))
        if tag == 'meta' and attrs.get('name') in ['robots', 'googlebot']: self.robots.append(attrs.get('content', ''))
        if tag == 'a' and attrs.get('href'): self.links.append(attrs['href'])
        if tag == 'img' and attrs.get('src'): self.images.append(attrs['src'])

def fetch(path, data=None, headers=None):
    request = urllib.request.Request(BASE + path, data=data, headers=headers or {})
    try: response = urllib.request.urlopen(request, timeout=30)
    except urllib.error.HTTPError as error: response = error
    return response.status, response.url, response.headers, response.read().decode('utf8', 'replace')

status, _, _, sitemap = fetch('/sitemap.xml')
assert status == 200
locations = [node.text for node in ET.fromstring(sitemap).iter('{http://www.sitemaps.org/schemas/sitemap/0.9}loc')]
assert len(locations) == 13, locations
assert all('?' not in url and 'confidentialite' not in url and 'mentions-legales' not in url for url in locations)

def check_page(url):
    path = url.removeprefix(CANONICAL) or '/'
    status, final, _, body = fetch(path)
    assert status == 200, (path, status)
    page = Page(body)
    assert len(page.canonical) == 1 and page.canonical[0].rstrip('/') == url.rstrip('/'), (path, page.canonical)
    assert all('noindex' not in directive for directive in page.robots), (path, page.robots)
    assert 'Article non trouvé' not in body
    return path, page

with concurrent.futures.ThreadPoolExecutor(max_workers=4) as pool:
    pages = dict(pool.map(check_page, locations))

for path in ['/mentions-legales', '/confidentialite', '/?lang=de', '/?lang=en', '/?lang=tr', '/blog?lang=tr', '/blog/mosaique-douche-italienne-mulhouse-expert?lang=tr']:
    status, _, _, body = fetch(path)
    assert status == 200, (path, status)
    assert all('noindex' in directive for directive in Page(body).robots), (path, Page(body).robots)

for path in ['/blog/article-inexistant-test', '/page-inexistante-test']:
    status, _, _, body = fetch(path)
    assert status == 404, (path, status)

redirects = {
    '/blog/renover-salle-de-bain-kingersheim-guide?lang=de': '/blog/badezimmer-renovieren-kingersheim?lang=de',
    '/blog/kingersheim-banyo-yenileme': '/blog/kingersheim-banyo-yenileme?lang=tr',
    '/blog/terrace-tiles-alsace': '/blog/terrace-tiles-alsace?lang=en',
    '/?lang=fr': '/',
    '/?lang=invalid': '/',
    '/?lang=tr&lang=de': '/',
    '/carrelage-interieur?lang=de': '/carrelage-interieur',
}
for path, expected in redirects.items():
    status, final, _, _ = fetch(path)
    assert status == 200 and final == BASE + expected, (path, status, final)

status, _, _, robots = fetch('/robots.txt')
assert status == 200 and 'Disallow: /*?lang=' not in robots
assert f'Sitemap: {CANONICAL}/sitemap.xml' in robots

# Check all internal destinations and section anchors in the French page graph.
links = set()
for source, page in pages.items():
    for link in page.links:
        target = urllib.parse.urlparse(urllib.parse.urljoin(BASE + source, link))
        if target.netloc not in [urllib.parse.urlparse(BASE).netloc, 'www.mp-carrelage.com']: continue
        path = target.path or '/'
        if not target.query and path in pages and target.fragment:
            assert urllib.parse.unquote(target.fragment) in pages[path].ids, (source, link, 'missing anchor')
        links.add(path + ('?' + target.query if target.query else ''))
with concurrent.futures.ThreadPoolExecutor(max_workers=4) as pool:
    results = list(pool.map(lambda path: (path, fetch(path)[0]), links))
assert all(status == 200 for _, status in results), results

if urllib.parse.urlparse(BASE).hostname in ['127.0.0.1', 'localhost']:
    headers = {'Content-Type': 'application/json', 'Origin': BASE}
    for body, expected in [(b'{}', 400), (b'not json', 400), (json.dumps({'name': 'x' * 33000}).encode(), 413)]:
        status, _, _, result = fetch('/api/contact', body, headers)
        assert status == expected and json.loads(result)['success'] is False, (status, result)
    status, _, _, _ = fetch('/api/contact', b'{}', {**headers, 'Origin': 'https://untrusted.example'})
    assert status == 403
    # This server is intentionally started without secrets; no real mail or database write is performed.
    payload = dict(name='Test local', email='local@example.com', phone='', projectType='Rénovation', surface='25', message='Vérification locale')
    status, _, _, result = fetch('/api/contact', json.dumps(payload).encode(), headers)
    assert status == 503 and json.loads(result)['success'] is False, (status, result)

print(json.dumps({'base': BASE, 'indexable_pages': len(locations), 'internal_destinations': len(links), 'redirect_cases': len(redirects), 'result': 'PASS'}, ensure_ascii=False))
