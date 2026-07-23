// Lightweight GA4 wrapper. Set VITE_GA_ID (e.g. "G-XXXXXXXXXX") in the environment to enable.
// Until then everything is a safe no-op, so nothing breaks and no bad data is sent.
// TODO(owner): create a GA4 property, put its Measurement ID in VITE_GA_ID (Vercel env var).

export const GA_ID: string | undefined = import.meta.env.VITE_GA_ID;

declare global {
    interface Window {
        dataLayer?: unknown[];
        gtag?: (...args: unknown[]) => void;
    }
}

/** Inject the GA4 script once (client only). Called from the Analytics component. */
export function initGA(): void {
    if (typeof window === 'undefined' || !GA_ID || window.gtag) return;
    const s = document.createElement('script');
    s.async = true;
    s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    document.head.appendChild(s);
    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag(...args: unknown[]) {
        window.dataLayer!.push(args);
    };
    window.gtag('js', new Date());
    window.gtag('config', GA_ID);
}

/** Record a page view (call on route change). */
export function trackPageView(path: string): void {
    if (typeof window === 'undefined' || !GA_ID || !window.gtag) return;
    window.gtag('event', 'page_view', { page_path: path });
}

/** Record a custom conversion event (WhatsApp click, quote request, phone/email click...). */
export function trackEvent(name: string, params: Record<string, unknown> = {}): void {
    if (typeof window === 'undefined' || !GA_ID || !window.gtag) return;
    window.gtag('event', name, params);
}
