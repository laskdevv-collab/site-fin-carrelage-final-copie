'use client';

import { useSyncExternalStore } from 'react';
import Script from 'next/script';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';

function subscribe(callback: () => void) {
    window.addEventListener('cookie-consent-change', callback);
    window.addEventListener('storage', callback);
    return () => {
        window.removeEventListener('cookie-consent-change', callback);
        window.removeEventListener('storage', callback);
    };
}

function hasConsent() {
    try { return localStorage.getItem('cookie-consent') === 'accepted'; }
    catch { return false; }
}

export function AnalyticsConsent() {
    const accepted = useSyncExternalStore(subscribe, hasConsent, () => false);
    if (!accepted) return null;
    return <>
        <Script id="gtm" strategy="afterInteractive">{`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('consent', 'update', {analytics_storage: 'granted', ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied'});
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});
            var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
            j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-5PRC6ZJP');
        `}</Script>
        <Analytics />
        <SpeedInsights />
    </>;
}
