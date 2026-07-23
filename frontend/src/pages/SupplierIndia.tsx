import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import SEOHead from '@/components/SEOHead';
import FAQSection, { buildFaqSchema } from '@/components/FAQSection';
import Breadcrumbs, { buildBreadcrumbSchema, type Crumb } from '@/components/Breadcrumbs';
import { products } from '@/data/products';
import { industries } from '@/data/industries';

const crumbs: Crumb[] = [
    { name: 'Home', href: '/' },
    { name: 'Silica Sand Supplier in India', href: '/silica-sand-supplier-india' },
];

const faqs = [
    { question: 'Who is a good silica sand supplier in India?', answer: 'Look for a supplier that mines and grades its own sand, documents purity (SiO₂ and iron), offers multiple grades and can supply consistently. Shiv Mines and Minerals has operated its own silica mine in Karauli, Rajasthan since 2006 and supplies across India and for export.' },
    { question: 'Do you supply silica sand across India?', answer: 'Yes. We supply silica sand and silica powder for domestic customers across India and for export. Share your grade, quantity and delivery location for a quote.' },
    { question: 'Do you export silica sand?', answer: 'Yes, we supply for both domestic and export markets. Contact us with your specification and destination.' },
];

const whyUs = [
    'Own silica mine in Karauli, Rajasthan — operating since 2006',
    'Independent laboratory-tested quality (SiO₂ ~96–97%, low iron, high whiteness)',
    'Nine grades — construction, industrial, glass, foundry, frac, custom, powder, polishing and tile compound',
    'Domestic supply across India and export',
    'Grading to your specification (SiO₂, Fe₂O₃, mesh, AFS)',
];

export default function SupplierIndia() {
    return (
        <div className="min-h-screen bg-white">
            <SEOHead
                title="Silica Sand Supplier in India — Manufacturer & Exporter | Shiv Mines and Minerals"
                description="Shiv Mines and Minerals is a silica sand supplier, manufacturer and exporter in India — own mine in Karauli, Rajasthan since 2006. Construction, industrial, glass, foundry, frac, custom grades & silica powder. Lab-tested. Request a quote."
                canonical="/silica-sand-supplier-india"
                keywords="silica sand supplier india, silica sand manufacturer india, silica sand exporter india, silica sand company india, silica sand supplier, quartz powder supplier india"
                schemaMarkup={[buildBreadcrumbSchema(crumbs), buildFaqSchema(faqs)]}
            />
            <Header />

            <section className="relative h-[300px] md:h-[400px] flex items-center justify-center">
                <div className="absolute inset-0">
                    <img src="/images/hero-quarry.webp" alt="Silica sand supplier in India — Shiv Mines and Minerals, Karauli, Rajasthan" className="w-full h-full object-cover" width={1600} height={400} />
                    <div className="absolute inset-0 bg-black/55" />
                </div>
                <h1 className="relative z-10 text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center px-4">
                    Silica Sand Supplier in India
                </h1>
            </section>

            <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 pt-6">
                <Breadcrumbs items={crumbs} />
            </div>

            <section className="py-12 md:py-16">
                <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
                    <p className="text-lg md:text-xl text-slate-800 font-medium leading-relaxed max-w-3xl mb-6 border-l-4 border-accent pl-5">
                        Shiv Mines and Minerals is a silica sand supplier, manufacturer and exporter in India, operating its
                        own mine in Karauli, Rajasthan since 2006. We supply construction, industrial, glass, foundry, frac,
                        custom-grade silica sand and silica powder for customers across India and for export.
                    </p>
                    <p className="text-slate-600 max-w-3xl mb-10">
                        New to sourcing? See our guide to{' '}
                        <Link to="/guides/silica-sand-mines-in-rajasthan-india" className="text-accent font-semibold hover:underline">
                            silica sand mines in Rajasthan &amp; India
                        </Link>{' '}
                        for locations, districts and how to buy.
                    </p>

                    <div className="grid lg:grid-cols-2 gap-12">
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">Why choose us as your supplier</h2>
                            <ul className="space-y-4">
                                {whyUs.map((w) => (
                                    <li key={w} className="flex gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" aria-hidden="true" />
                                        <span className="text-slate-700">{w}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-8 flex flex-wrap gap-4">
                                <Link to="/contact" className="inline-flex items-center gap-2 bg-copper hover:bg-copper/90 text-white font-semibold px-6 py-3 rounded-lg transition-colors">
                                    Request a Quote <ArrowRight className="w-5 h-5" />
                                </Link>
                                <Link to="/quality" className="inline-flex items-center gap-2 border-2 border-stone-300 hover:border-accent text-slate-700 hover:text-accent font-semibold px-6 py-3 rounded-lg transition-colors">
                                    View Lab Analysis
                                </Link>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">Grades we supply</h2>
                            <div className="grid sm:grid-cols-2 gap-3">
                                {products.map((p) => (
                                    <Link key={p.slug} to={`/products/${p.slug}`} className="group flex items-center justify-between gap-2 rounded-lg border border-stone-200 px-4 py-3 hover:border-accent hover:shadow-sm transition-all">
                                        <span className="text-sm font-medium text-slate-800 group-hover:text-accent">{p.name}</span>
                                        <ArrowRight className="w-4 h-4 text-accent flex-shrink-0" />
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="mt-16">
                        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">Industries we supply</h2>
                        <div className="flex flex-wrap gap-3">
                            {industries.map((ind) => (
                                <Link key={ind.slug} to={`/industries/${ind.slug}`} className="inline-flex items-center rounded-full border border-stone-300 px-4 py-2 text-sm font-medium text-slate-700 hover:border-accent hover:text-accent transition-colors">
                                    {ind.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <div className="bg-stone-50">
                <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
                    <FAQSection faqs={faqs} heading="Silica Sand Supplier — FAQs" />
                </div>
            </div>

            <Footer />
            <WhatsAppButton />
        </div>
    );
}
