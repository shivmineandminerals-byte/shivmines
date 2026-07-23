import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import SEOHead from '@/components/SEOHead';
import Breadcrumbs, { buildBreadcrumbSchema, type Crumb } from '@/components/Breadcrumbs';
import { blogPosts } from '@/data/blog';

const crumbs: Crumb[] = [
    { name: 'Home', href: '/' },
    { name: 'Blog', href: '/blog' },
];

const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Shiv Mines and Minerals — Blog',
    numberOfItems: blogPosts.length,
    itemListElement: blogPosts.map((p, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: p.title,
        url: `https://shivmines.in/blog/${p.slug}`,
    })),
};

export default function Blog() {
    return (
        <div className="min-h-screen bg-white">
            <SEOHead
                title="Silica Sand Blog — Market, Process & Buying Insights | Shiv Mines and Minerals"
                description="Insights on silica sand from Shiv Mines and Minerals: India market outlook, how silica sand is mined and graded, and how to choose a supplier."
                canonical="/blog"
                keywords="silica sand blog, silica sand market india, silica sand processing, silica sand supplier india"
                schemaMarkup={[buildBreadcrumbSchema(crumbs), itemListSchema]}
            />
            <Header />

            <section className="pt-28 pb-8 bg-secondary/30">
                <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
                    <Breadcrumbs items={crumbs} className="mb-6" />
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Blog</h1>
                    <p className="text-lg text-slate-700 max-w-3xl">
                        Insights on the silica sand industry, our mining and processing, and practical advice for buyers.
                    </p>
                </div>
            </section>

            <section className="py-14 md:py-20">
                <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
                    <div className="grid md:grid-cols-3 gap-8">
                        {blogPosts.map((p) => (
                            <Link key={p.slug} to={`/blog/${p.slug}`} className="group flex flex-col h-full bg-white rounded-lg p-6 shadow-sm border border-stone-200 hover:shadow-lg transition-shadow">
                                <div className="flex-grow">
                                    <p className="text-xs uppercase tracking-wider text-accent font-semibold mb-3">{p.readingTime}</p>
                                    <h2 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-accent transition-colors">{p.title}</h2>
                                    <p className="text-slate-600 text-sm leading-relaxed">{p.intro.slice(0, 150)}…</p>
                                </div>
                                <span className="inline-flex items-center gap-1 text-accent font-semibold text-sm mt-5">Read post <ArrowRight className="w-4 h-4" /></span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
            <WhatsAppButton />
        </div>
    );
}
