import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import SEOHead from '@/components/SEOHead';
import Breadcrumbs, { buildBreadcrumbSchema, type Crumb } from '@/components/Breadcrumbs';
import { products } from '@/data/products';
import { industries } from '@/data/industries';
import { guides } from '@/data/guides';
import { blogPosts } from '@/data/blog';

const crumbs: Crumb[] = [
    { name: 'Home', href: '/' },
    { name: 'Sitemap', href: '/sitemap-page' },
];

const groups: { title: string; links: { label: string; href: string }[] }[] = [
    {
        title: 'Main',
        links: [
            { label: 'Home', href: '/' },
            { label: 'About', href: '/about' },
            { label: 'Silica Sand Supplier in India', href: '/silica-sand-supplier-india' },
            { label: 'Quality & Lab Analysis', href: '/quality' },
            { label: 'Contact', href: '/contact' },
        ],
    },
    { title: 'Products', links: [{ label: 'All Products', href: '/products' }, ...products.map((p) => ({ label: p.name, href: `/products/${p.slug}` }))] },
    { title: 'Industries', links: [{ label: 'All Industries', href: '/industries' }, ...industries.map((i) => ({ label: i.name, href: `/industries/${i.slug}` }))] },
    { title: 'Guides', links: [{ label: 'All Guides', href: '/guides' }, ...guides.map((g) => ({ label: g.title, href: `/guides/${g.slug}` }))] },
    { title: 'Blog', links: [{ label: 'All Posts', href: '/blog' }, ...blogPosts.map((b) => ({ label: b.title, href: `/blog/${b.slug}` }))] },
];

export default function SiteMapPage() {
    return (
        <div className="min-h-screen bg-white">
            <SEOHead
                title="Sitemap — All Pages | Shiv Mines and Minerals"
                description="Browse all pages on the Shiv Mines and Minerals website — silica sand products, industries served, guides, blog and company pages."
                canonical="/sitemap-page"
                schemaMarkup={[buildBreadcrumbSchema(crumbs)]}
            />
            <Header />

            <section className="pt-28 pb-8 bg-secondary/30">
                <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
                    <Breadcrumbs items={crumbs} className="mb-6" />
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Sitemap</h1>
                    <p className="text-lg text-slate-700 max-w-3xl">Every page on our site, in one place.</p>
                </div>
            </section>

            <section className="py-14">
                <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
                        {groups.map((group) => (
                            <nav key={group.title} aria-label={group.title}>
                                <h2 className="text-lg font-bold text-slate-900 mb-4">{group.title}</h2>
                                <ul className="space-y-2">
                                    {group.links.map((l) => (
                                        <li key={l.href}>
                                            <Link to={l.href} className="text-slate-600 hover:text-accent transition-colors">{l.label}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
            <WhatsAppButton />
        </div>
    );
}
