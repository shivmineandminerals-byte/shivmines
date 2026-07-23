import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import SEOHead from '@/components/SEOHead';
import Breadcrumbs, { buildBreadcrumbSchema, type Crumb } from '@/components/Breadcrumbs';
import { guides } from '@/data/guides';

const crumbs: Crumb[] = [
    { name: 'Home', href: '/' },
    { name: 'Guides', href: '/guides' },
];

const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Silica Sand Guides — Shiv Mines and Minerals',
    numberOfItems: guides.length,
    itemListElement: guides.map((g, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: g.title,
        url: `https://shivmines.in/guides/${g.slug}`,
    })),
};

export default function Guides() {
    return (
        <div className="min-h-screen bg-white">
            <SEOHead
                title="Silica Sand Guides — Grades, Specifications & Buying Advice | Shiv Mines and Minerals"
                description="Practical guides to silica sand: grades explained, specifications to check before buying, and how glass and foundry grades differ. From Shiv Mines and Minerals, Rajasthan."
                canonical="/guides"
                keywords="silica sand guide, silica sand grades, silica sand specifications, glass vs foundry sand, silica sand buying guide"
                schemaMarkup={[buildBreadcrumbSchema(crumbs), itemListSchema]}
            />
            <Header />

            <section className="pt-28 pb-8 bg-secondary/30">
                <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
                    <Breadcrumbs items={crumbs} className="mb-6" />
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Silica Sand Guides</h1>
                    <p className="text-lg text-slate-700 max-w-3xl">
                        Clear, practical answers about silica sand grades, specifications and how to choose the right
                        product — written by the team at Shiv Mines and Minerals.
                    </p>
                </div>
            </section>

            <section className="py-14 md:py-20">
                <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {guides.map((g) => (
                            <Link
                                key={g.slug}
                                to={`/guides/${g.slug}`}
                                className="group flex flex-col justify-between h-full bg-white rounded-lg p-6 shadow-sm border border-stone-200 hover:shadow-lg transition-shadow"
                            >
                                <div>
                                    <p className="text-xs uppercase tracking-wider text-accent font-semibold mb-3">{g.readingTime}</p>
                                    <h2 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-accent transition-colors">{g.title}</h2>
                                    <p className="text-slate-600 text-sm leading-relaxed">{g.intro.slice(0, 160)}…</p>
                                </div>
                                <span className="inline-flex items-center gap-1 text-accent font-semibold text-sm mt-5">
                                    Read guide <ArrowRight className="w-4 h-4" />
                                </span>
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
