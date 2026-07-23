import { useParams, Navigate, Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import SEOHead from '@/components/SEOHead';
import FAQSection, { buildFaqSchema } from '@/components/FAQSection';
import Breadcrumbs, { buildBreadcrumbSchema, type Crumb } from '@/components/Breadcrumbs';
import { getBlogPost } from '@/data/blog';

export default function BlogDetail() {
    const { slug } = useParams<{ slug: string }>();
    if (!slug || !getBlogPost(slug)) return <Navigate to="/blog" replace />;
    const post = getBlogPost(slug)!;

    const crumbs: Crumb[] = [
        { name: 'Home', href: '/' },
        { name: 'Blog', href: '/blog' },
        { name: post.title, href: `/blog/${slug}` },
    ];

    const articleSchema = {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: post.title,
        description: post.intro,
        datePublished: post.published,
        dateModified: post.published,
        author: { '@type': 'Organization', name: 'Shiv Mines and Minerals', url: 'https://shivmines.in' },
        publisher: {
            '@type': 'Organization',
            name: 'Shiv Mines and Minerals',
            logo: { '@type': 'ImageObject', url: 'https://shivmines.in/logo.png' },
        },
        mainEntityOfPage: { '@type': 'WebPage', '@id': `https://shivmines.in/blog/${slug}` },
    };

    return (
        <div className="min-h-screen bg-white">
            <SEOHead
                title={post.seoTitle}
                description={post.seoDescription}
                canonical={`/blog/${slug}`}
                ogType="article"
                schemaMarkup={[articleSchema, buildBreadcrumbSchema(crumbs), buildFaqSchema(post.faqs)]}
            />
            <Header />

            <article className="pt-28 pb-16">
                <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 max-w-3xl">
                    <Breadcrumbs items={crumbs} className="mb-6" />
                    <p className="text-xs uppercase tracking-wider text-accent font-semibold mb-3">
                        {post.readingTime} · {new Date(post.published).toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </p>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">{post.title}</h1>

                    <p className="text-lg md:text-xl text-slate-800 font-medium leading-relaxed mb-10 border-l-4 border-accent pl-5">
                        {post.intro}
                    </p>

                    {post.sections.map((section, i) => (
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
                </div>
            </article>

            <div className="bg-stone-50">
                <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 max-w-3xl">
                    <FAQSection faqs={post.faqs} />
                </div>
            </div>

            {post.related.length > 0 && (
                <section className="py-14">
                    <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 max-w-3xl">
                        <h2 className="text-xl font-bold text-slate-900 mb-5">Related</h2>
                        <ul className="space-y-3">
                            {post.related.map((r) => (
                                <li key={r.href}>
                                    <Link to={r.href} className="group inline-flex items-center gap-2 text-accent font-semibold hover:underline">
                                        {r.label} <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>
            )}

            <Footer />
            <WhatsAppButton />
        </div>
    );
}
