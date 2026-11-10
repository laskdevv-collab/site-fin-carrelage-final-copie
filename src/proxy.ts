import { NextResponse, type NextRequest } from 'next/server';
import { getLanguage } from '@/lib/i18n/routing';

export function proxy(request: NextRequest) {
    const url = request.nextUrl.clone();
    const values = url.searchParams.getAll('lang');
    const language = getLanguage(values.length === 1 ? values[0] : undefined);
    const frenchOnly = ['/salle-de-bain', '/carrelage-interieur', '/carrelage-exterieur'].includes(url.pathname);
    if (values.length && (language === 'fr' || frenchOnly)) {
        url.searchParams.delete('lang');
        return NextResponse.redirect(url, 308);
    }
    const response = NextResponse.next();
    response.headers.set('Content-Language', frenchOnly ? 'fr' : language);
    if (language !== 'fr') response.headers.set('X-Robots-Tag', 'noindex, follow');
    return response;
}

export const config = { matcher: ['/((?!api|_next|.*\\..*).*)'] };
