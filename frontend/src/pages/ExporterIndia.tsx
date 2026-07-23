import { Link } from 'react-router-dom';
import { ArrowRight, Ship, Package, FileCheck2, Globe2 } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import SEOHead from '@/components/SEOHead';
import FAQSection, { buildFaqSchema } from '@/components/FAQSection';
import Breadcrumbs, { buildBreadcrumbSchema, type Crumb } from '@/components/Breadcrumbs';
import { products } from '@/data/products';

const crumbs: Crumb[] = [
    { name: 'Home', href: '/' },
    { name: 'Silica Sand Exporter', href: '/silica-sand-exporter-india' },
];

const faqs = [
    { question: 'Do you export silica sand from India?', answer: 'Yes. Shiv Mines and Minerals supplies silica sand and silica powder for export as well as domestic customers, from our mine in Karauli, Rajasthan. Share your destination port, grade and quantity for a quote.' },
    { question: 'What grades can you export?', answer: 'We export construction, industrial, glass, foundry, frac and custom-grade silica sand, plus silica powder (100/200 mesh), graded to your specification.' },
    { question: 'How is silica sand packaged for export?', answer: 'Silica sand is supplied in bulk, jumbo bags or as required for the shipment. Tell us your packaging preference and destination and we will advise.' },
    { question: 'Can you provide test certificates for export orders?', answer: 'Yes. Independent laboratory analysis is available, and a test certificate for the supplied material can be provided on request.' },
];

const steps = [
    { icon: FileCheck2, title: 'Share your specification', desc: 'Grade, target SiO₂/Fe₂O₃, particle size, quantity and destination port.' },
    { icon: Package, title: 'We grade & quote', desc: 'We mine, wash and grade to your spec and send a quote with packaging options.' },
    { icon: Ship, title: 'Dispatch & documents', desc: 'We arrange dispatch with the required documentation and test certificate.' },
];

export default function ExporterIndia() {
    return (
        <div className="min-h-screen bg-white">
            <SEOHead
                title="Silica Sand Exporter from India — Bulk Export Supplier | Shiv Mines and Minerals"
                description="Silica sand exporter from India — Shiv Mines and Minerals exports construction, industrial, glass (99.5% SiO₂), foundry, frac & custom silica sand and silica powder worldwide from Karauli, Rajasthan. Lab-tested. Request an export quote."
                canonical="/silica-sand-exporter-india"
                keywords="silica sand exporter india, silica sand export, buy silica sand india, silica sand exporter, indian silica sand supplier, silica sand export price, quartz sand exporter india"
                schemaMarkup={[buildBreadcrumbSchema(crumbs), buildFaqSchema(faqs)]}
            />
            <Header />

            <section className="relative h-[300px] md:h-[400px] flex items-center justify-center">
                <div className="absolute inset-0">
                    <img src="/images/hero-quarry.webp" alt="Silica sand exporter from India — Shiv Mines and Minerals, Karauli, Rajasthan" className="w-full h-full object-cover" width={1600} height={400} />
                    <div className="absolute inset-0 bg-black/55" />
                </div>
                <h1 className="relative z-10 text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center px-4">
                    Silica Sand Exporter from India
                </h1>
            </section>

            <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 pt-6">
                <Breadcrumbs items={crumbs} />
            </div>

            <section className="py-12 md:py-16">
                <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
                    <p className="text-lg md:text-xl text-slate-800 font-medium leading-relaxed max-w-3xl mb-10 border-l-4 border-accent pl-5">
                        Shiv Mines and Minerals is a silica sand exporter from India, supplying construction, industrial,
                        glass, foundry, frac and custom-grade silica sand and silica powder to overseas buyers from our mine
                        in Karauli, Rajasthan. Every grade is lab-tested and graded to your specification.
                    </p>

                    <div className="grid md:grid-cols-2 gap-12 items-start">
                        <div>
                            <div className="flex items-start gap-3 mb-6">
                                <Globe2 className="w-7 h-7 text-accent flex-shrink-0" aria-hidden="true" />
                                <div>
                                    <h2 className="text-2xl font-bold text-slate-900 mb-2">Export-ready silica from Rajasthan</h2>
                                    <p className="text-slate-600">High-purity silica (SiO₂ ~96–99.5% depending on grade), low iron and consistent grading — the quality overseas glass, foundry and industrial buyers require.</p>
                                </div>
                            </div>

                            <h3 className="text-lg font-bold text-slate-900 mb-4 mt-8">How exporting works</h3>
                            <ol className="space-y-5">
                                {steps.map((s, i) => (
                                    <li key={i} className="flex gap-4">
                                        <s.icon className="w-6 h-6 text-copper flex-shrink-0 mt-0.5" aria-hidden="true" />
                                        <div>
                                            <p className="font-semibold text-slate-900">{i + 1}. {s.title}</p>
                                            <p className="text-sm text-slate-600">{s.desc}</p>
                                        </div>
                                    </li>
                                ))}
                            </ol>

                            <Link to="/contact" className="inline-flex items-center gap-2 bg-copper hover:bg-copper/90 text-white font-semibold px-6 py-3 rounded-lg transition-colors mt-8">
                                Request an Export Quote <ArrowRight className="w-5 h-5" />
                            </Link>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-slate-900 mb-6">Grades available for export</h2>
                            <div className="grid gap-3">
                                {products.map((p) => (
                                    <Link key={p.slug} to={`/products/${p.slug}`} className="group flex items-center justify-between gap-3 rounded-lg border border-stone-200 px-4 py-3 hover:border-accent hover:shadow-sm transition-all">
                                        <div>
                                            <span className="text-sm font-semibold text-slate-800 group-hover:text-accent">{p.name}</span>
                                            <p className="text-xs text-slate-500">{p.shortDescription}</p>
                                        </div>
                                        <ArrowRight className="w-4 h-4 text-accent flex-shrink-0" />
                                    </Link>
                                ))}
                            </div>
                            <p className="text-sm text-slate-500 mt-6">
                                See our <Link to="/quality" className="text-accent font-semibold hover:underline">independent lab analysis</Link> and
                                the <Link to="/silica-sand-supplier-india" className="text-accent font-semibold hover:underline">India supplier page</Link> for more.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <div className="bg-stone-50">
                <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
                    <FAQSection faqs={faqs} heading="Silica Sand Export — FAQs" />
                </div>
            </div>

            <Footer />
            <WhatsAppButton />
        </div>
    );
}
