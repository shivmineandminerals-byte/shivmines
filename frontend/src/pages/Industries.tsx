import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import SEOHead from '@/components/SEOHead';
import Breadcrumbs, { buildBreadcrumbSchema, type Crumb } from '@/components/Breadcrumbs';
import { industries } from '@/data/industries';

const crumbs: Crumb[] = [
    { name: 'Home', href: '/' },
    { name: 'Industries', href: '/industries' },
];

const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Silica Sand by Industry — Shiv Mines and Minerals',
    numberOfItems: industries.length,
    itemListElement: industries.map((it, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: it.h1,
        url: `https://shivmines.in/industries/${it.slug}`,
    })),
};

export default function Industries() {
    return (
        <div className="min-h-screen bg-white">
            <SEOHead
                title="Silica Sand by Industry — Glass, Foundry, Filtration, Construction & More | Shiv Mines"
                description="Silica sand for every industry: glass, foundry & metal casting, water filtration, construction, oil & gas, paints, ceramics and sports turf. Grades and specs from Karauli, Rajasthan."
                canonical="/industries"
                keywords="silica sand for glass, silica sand for foundry, silica sand for water filtration, silica sand for construction, silica sand applications, silica sand industries"
                schemaMarkup={[buildBreadcrumbSchema(crumbs), itemListSchema]}
            />
            <Header />

            <section className="pt-28 pb-8 bg-secondary/30">
                <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
                    <Breadcrumbs items={crumbs} className="mb-6" />
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Silica Sand by Industry</h1>
                    <p className="text-lg text-slate-700 max-w-3xl">
                        Silica sand is used across many industries — each needs a specific grade. Find the right silica
                        sand for your application, with the grades and specifications we supply from our Karauli, Rajasthan mines.
                    </p>
                </div>
            </section>

            <section className="py-14 md:py-20">
                <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {industries.map((it) => (
                            <Link
                                key={it.slug}
                                to={`/industries/${it.slug}`}
                                className="group flex flex-col h-full bg-white rounded-lg overflow-hidden shadow-sm border border-stone-200 hover:shadow-lg transition-shadow"
                            >
                                <div className="aspect-[16/10] overflow-hidden">
                                    <img src={it.image} alt={it.h1} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" width={400} height={250} />
                                </div>
                                <div className="p-6 flex flex-col flex-grow">
                                    <h2 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-accent transition-colors">{it.h1}</h2>
                                    <p className="text-slate-600 text-sm leading-relaxed flex-grow">{it.intro.slice(0, 130)}…</p>
                                    <span className="inline-flex items-center gap-1 text-accent font-semibold text-sm mt-4">
                                        Learn more <ArrowRight className="w-4 h-4" />
                                    </span>
                                </div>
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
