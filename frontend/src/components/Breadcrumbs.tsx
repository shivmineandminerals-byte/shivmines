import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export interface Crumb {
    name: string;
    /** Absolute path on the site, e.g. "/products". Omit for the current (last) page. */
    href?: string;
}

/** Visible breadcrumb trail. Render the matching BreadcrumbList JSON-LD separately (via SEOHead). */
export default function Breadcrumbs({ items, className = '' }: { items: Crumb[]; className?: string }) {
    return (
        <nav aria-label="Breadcrumb" className={className}>
            <ol className="flex flex-wrap items-center gap-1.5 text-sm text-slate-500">
                {items.map((item, i) => {
                    const isLast = i === items.length - 1;
                    return (
                        <li key={i} className="flex items-center gap-1.5">
                            {item.href && !isLast ? (
                                <Link to={item.href} className="hover:text-accent transition-colors">
                                    {item.name}
                                </Link>
                            ) : (
                                <span className={isLast ? 'text-slate-900 font-medium' : ''} aria-current={isLast ? 'page' : undefined}>
                                    {item.name}
                                </span>
                            )}
                            {!isLast && <ChevronRight className="w-3.5 h-3.5 text-slate-300" aria-hidden="true" />}
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
}

/** Build BreadcrumbList JSON-LD from crumbs (absolute URLs). */
export function buildBreadcrumbSchema(items: Crumb[], siteUrl = 'https://shivmines.in') {
    return {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            name: item.name,
            ...(item.href ? { item: `${siteUrl}${item.href}` } : {}),
        })),
    };
}
