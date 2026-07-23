import { useParams, Navigate, Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import SEOHead from '@/components/SEOHead';
import FAQSection, { buildFaqSchema } from '@/components/FAQSection';
import Breadcrumbs, { buildBreadcrumbSchema, type Crumb } from '@/components/Breadcrumbs';
import { getIndustry } from '@/data/industries';
import { getProduct } from '@/data/products';

export default function IndustryDetail() {
    const { slug } = useParams<{ slug: string }>();
    if (!slug || !getIndustry(slug)) return <Navigate to="/industries" replace />;
    const industry = getIndustry(slug)!;

    const crumbs: Crumb[] = [
        { name: 'Home', href: '/' },
        { name: 'Industries', href: '/industries' },
        { name: industry.name, href: `/industries/${slug}` },
    ];

    const related = industry.relatedProducts.map(getProduct).filter(Boolean);

    return (
        <div className="min-h-screen bg-white">
            <SEOHead
                title={industry.seoTitle}
                description={industry.seoDescription}
                canonical={`/industries/${slug}`}
                ogImage={`https://shivmines.in${industry.image}`}
                schemaMarkup={[buildBreadcrumbSchema(crumbs), buildFaqSchema(industry.faqs)]}
            />
            <Header />

            <section className="relative h-[280px] md:h-[360px] flex items-center justify-center">
                <div className="absolute inset-0">
                    <img src={industry.image} alt={industry.h1} className="w-full h-full object-cover" width={1600} height={360} />
                    <div className="absolute inset-0 bg-black/55" />
                </div>
                <h1 className="relative z-10 text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center px-4">{industry.h1}</h1>
            </section>

            <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 pt-6">
                <Breadcrumbs items={crumbs} />
            </div>

            <article className="py-12 md:py-16">
                <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 max-w-3xl">
                    <p className="text-lg md:text-xl text-slate-800 font-medium leading-relaxed mb-10 border-l-4 border-accent pl-5">
                        {industry.intro}
                    </p>

                    {industry.sections.map((section, i) => (
                        <section key={i} className="mb-10">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">{section.heading}</h2>
                            {section.paragraphs.map((p, j) => (
                                <p key={j} className="text-slate-700 leading-relaxed mb-4">{p}</p>
                            ))}
                            {section.bullets && (
                                <ul className="list-disc pl-6 space-y-2 text-slate-700 mb-4">
                                    {section.bullets.map((b, k) => <li key={k}>{b}</li>)}
                                </ul>
                            )}
                        </section>
                    ))}

                    {related.length > 0 && (
                        <div className="mt-12 p-6 bg-stone-50 rounded-lg border border-stone-200">
                            <h2 className="text-xl font-bold text-slate-900 mb-4">Recommended grades</h2>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {related.map((p) => p && (
                                    <Link key={p.slug} to={`/products/${p.slug}`} className="group flex items-center justify-between gap-3 bg-white rounded-lg border border-stone-200 p-4 hover:shadow-md transition-shadow">
                                        <div>
                                            <h3 className="font-semibold text-slate-900 group-hover:text-accent transition-colors">{p.name}</h3>
                                            <p className="text-xs text-slate-500">{p.shortDescription}</p>
                                        </div>
                                        <ArrowRight className="w-4 h-4 text-accent flex-shrink-0" />
                                    </Link>
                                ))}
                            </div>
                            <Link to="/contact" className="inline-flex items-center gap-2 bg-copper hover:bg-copper/90 text-white font-semibold px-6 py-3 rounded-lg transition-colors mt-6">
                                Request a Quote <ArrowRight className="w-5 h-5" />
                            </Link>
                        </div>
                    )}
                </div>
            </article>

            <div className="bg-stone-50">
                <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 max-w-3xl">
                    <FAQSection faqs={industry.faqs} />
                </div>
            </div>

            <Footer />
            <WhatsAppButton />
        </div>
    );
}
