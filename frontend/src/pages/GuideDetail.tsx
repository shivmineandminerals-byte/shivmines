import { useParams, Navigate, Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import SEOHead from '@/components/SEOHead';
import FAQSection, { buildFaqSchema } from '@/components/FAQSection';
import Breadcrumbs, { buildBreadcrumbSchema, type Crumb } from '@/components/Breadcrumbs';
import { getGuide } from '@/data/guides';
import { getProduct } from '@/data/products';

export default function GuideDetail() {
    const { slug } = useParams<{ slug: string }>();

    if (!slug || !getGuide(slug)) {
        return <Navigate to="/guides" replace />;
    }

    const guide = getGuide(slug)!;

    const crumbs: Crumb[] = [
        { name: 'Home', href: '/' },
        { name: 'Guides', href: '/guides' },
        { name: guide.title, href: `/guides/${slug}` },
    ];

    const articleSchema = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: guide.title,
        description: guide.intro,
        datePublished: guide.updated,
        dateModified: guide.updated,
        author: { '@type': 'Organization', name: 'Shiv Mines and Minerals', url: 'https://shivmines.in' },
        publisher: {
            '@type': 'Organization',
            name: 'Shiv Mines and Minerals',
            logo: { '@type': 'ImageObject', url: 'https://shivmines.in/logo.png' },
        },
        mainEntityOfPage: { '@type': 'WebPage', '@id': `https://shivmines.in/guides/${slug}` },
    };

    const related = guide.relatedProducts.map(getProduct).filter(Boolean);

    return (
        <div className="min-h-screen bg-white">
            <SEOHead
                title={guide.seoTitle}
                description={guide.seoDescription}
                canonical={`/guides/${slug}`}
                ogType="article"
                schemaMarkup={[articleSchema, buildBreadcrumbSchema(crumbs), buildFaqSchema(guide.faqs)]}
            />
            <Header />

            <article className="pt-28 pb-16">
                <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 max-w-3xl">
                    <Breadcrumbs items={crumbs} className="mb-6" />
                    <p className="text-xs uppercase tracking-wider text-accent font-semibold mb-3">
                        {guide.readingTime} · Updated {new Date(guide.updated).toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </p>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">{guide.title}</h1>

                    {/* Answer-first intro for AI Overviews / featured snippets */}
                    <p className="text-lg md:text-xl text-slate-800 font-medium leading-relaxed mb-10 border-l-4 border-accent pl-5">
                        {guide.intro}
                    </p>

                    {guide.sections.map((section, i) => (
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
                            {section.table && (
                                <div className="overflow-x-auto my-6">
                                    <table className="w-full text-sm border-collapse">
                                        <thead>
                                            <tr className="bg-slate-900 text-white text-left">
                                                {section.table[0].map((h, k) => <th key={k} className="px-4 py-3 font-semibold">{h}</th>)}
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {section.table.slice(1).map((row, r) => (
                                                <tr key={r} className={r % 2 ? 'bg-stone-50' : 'bg-white'}>
                                                    {row.map((cell, c) => <td key={c} className="px-4 py-3 border-b border-stone-100 text-slate-700">{cell}</td>)}
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            )}
                        </section>
                    ))}
                </div>
            </article>

            <div className="bg-stone-50">
                <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 max-w-3xl">
                    <FAQSection faqs={guide.faqs} />
                </div>
            </div>

            {related.length > 0 && (
                <section className="py-16">
                    <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 max-w-3xl">
                        <h2 className="text-2xl font-bold text-slate-900 mb-6">Related products</h2>
                        <div className="grid sm:grid-cols-3 gap-6">
                            {related.map((p) => p && (
                                <Link key={p.slug} to={`/products/${p.slug}`} className="group bg-white rounded-lg border border-stone-200 p-5 hover:shadow-lg transition-shadow">
                                    <h3 className="font-semibold text-slate-900 group-hover:text-accent transition-colors mb-1">{p.name}</h3>
                                    <p className="text-sm text-slate-600">{p.shortDescription}</p>
                                    <span className="inline-flex items-center gap-1 text-accent text-sm font-semibold mt-3">View product <ArrowRight className="w-4 h-4" /></span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            <Footer />
            <WhatsAppButton />
        </div>
    );
}
