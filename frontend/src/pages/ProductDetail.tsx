import { useParams, Navigate, Link } from 'react-router-dom';
import { motion, type Transition } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import SEOHead from '@/components/SEOHead';
import FAQSection, { buildFaqSchema } from '@/components/FAQSection';
import Breadcrumbs, { buildBreadcrumbSchema, type Crumb } from '@/components/Breadcrumbs';
import { products, getProduct } from '@/data/products';
import { getIndustriesForProduct } from '@/data/industries';

const smoothTransition: Transition = { duration: 0.4, ease: [0.4, 0, 0.2, 1] };

const fadeInLeft = {
    initial: { opacity: 0, x: -20 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true, margin: '-100px' },
    transition: smoothTransition,
};

const fadeInRight = {
    initial: { opacity: 0, x: 20 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true, margin: '-100px' },
    transition: smoothTransition,
};

export default function ProductDetail() {
    const { slug } = useParams<{ slug: string }>();

    if (!slug || !getProduct(slug)) {
        return <Navigate to="/products" replace />;
    }

    const product = getProduct(slug)!;

    // Product schema — NO fake aggregateRating, NO fake price:0.
    // B2B quote model: describe availability and manufacturer, let buyers request a quote.
    const productSchema = {
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: product.name,
        description: product.answerSnippet,
        image: `https://shivmines.in${product.image}`,
        category: 'Silica Sand',
        brand: { '@type': 'Brand', name: 'Shiv Mines and Minerals' },
        manufacturer: {
            '@type': 'Organization',
            name: 'Shiv Mines and Minerals',
            url: 'https://shivmines.in',
        },
        // No numeric price (quote-based). AvailableAtOrFrom + a quote action instead of a fake Offer price.
        offers: {
            '@type': 'Offer',
            url: `https://shivmines.in/products/${slug}`,
            availability: 'https://schema.org/InStock',
            priceCurrency: 'INR',
            priceSpecification: {
                '@type': 'PriceSpecification',
                priceCurrency: 'INR',
                valueAddedTaxIncluded: false,
            },
            seller: { '@type': 'Organization', name: 'Shiv Mines and Minerals' },
        },
    };

    const crumbs: Crumb[] = [
        { name: 'Home', href: '/' },
        { name: 'Products', href: '/products' },
        { name: product.name, href: `/products/${slug}` },
    ];

    const relatedProducts = products.filter((p) => p.slug !== slug).slice(0, 4);
    const usedInIndustries = getIndustriesForProduct(slug);

    return (
        <div className="min-h-screen bg-white">
            <SEOHead
                title={product.seoTitle}
                description={product.seoDescription}
                canonical={`/products/${slug}`}
                ogImage={`https://shivmines.in${product.image}`}
                keywords={`${product.name}, ${product.name} supplier India, ${product.name} Rajasthan, silica sand, Shiv Mines and Minerals`}
                schemaMarkup={[productSchema, buildBreadcrumbSchema(crumbs), buildFaqSchema(product.faqs)]}
            />
            <Header />

            <section className="relative h-[300px] md:h-[400px] flex items-center justify-center">
                <div className="absolute inset-0">
                    <img src="/images/hero-quarry.webp" alt={`${product.name} from Shiv Mines and Minerals`} className="w-full h-full object-cover" width={1600} height={400} />
                    <div className="absolute inset-0 bg-black/50" />
                </div>
                <motion.h1
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={smoothTransition}
                    className="relative z-10 text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center px-4"
                >
                    {product.name}
                </motion.h1>
            </section>

            <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 pt-6">
                <Breadcrumbs items={crumbs} />
            </div>

            <section className="py-12 md:py-20">
                <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                        <motion.div {...fadeInLeft} className="lg:sticky lg:top-32">
                            <div className="rounded-lg overflow-hidden shadow-lg border border-stone-200">
                                <img src={product.image} alt={`${product.name} — silica sand from Karauli, Rajasthan`} className="w-full h-auto object-cover" loading="lazy" width={800} height={600} />
                            </div>
                        </motion.div>

                        <motion.div {...fadeInRight}>
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">About {product.name}</h2>
                            
                            {/* Summary Lead Highlight */}
                            <div className="bg-stone-50 border-l-4 border-accent p-4 rounded-r-lg mb-6">
                                <p className="text-slate-800 font-medium leading-relaxed">
                                    {product.answerSnippet}
                                </p>
                            </div>

                            <p className="text-slate-600 leading-relaxed mb-8">{product.description}</p>

                            <div className="mb-10">
                                <h3 className="text-xl font-bold text-slate-900 mb-4">Typical Specifications</h3>
                                <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 bg-stone-50/50 p-5 rounded-lg border border-stone-100">
                                    {product.specs.map((s, i) => (
                                        <div key={i} className="flex justify-between border-b border-stone-200/60 py-2 last:border-b-0">
                                            <dt className="text-slate-500 text-sm">{s.label}</dt>
                                            <dd className="font-semibold text-slate-900 text-sm text-right">{s.value}</dd>
                                        </div>
                                    ))}
                                </dl>
                            </div>

                            <div className="mb-10">
                                <h3 className="text-xl font-bold text-slate-900 mb-4">Applications</h3>
                                <ul className="space-y-3">
                                    {product.applications.map((app, i) => (
                                        <li key={i} className="flex gap-3">
                                            <span className="w-2 h-2 bg-copper rounded-full mt-2 flex-shrink-0" />
                                            <div><span className="font-semibold text-slate-900">{app.title}:</span> <span className="text-slate-600">{app.description}</span></div>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="mb-10">
                                <h3 className="text-xl font-bold text-slate-900 mb-4">Salient Features</h3>
                                <ul className="space-y-3">
                                    {product.features.map((f, i) => (
                                        <li key={i} className="flex gap-3">
                                            <span className="w-2 h-2 bg-copper rounded-full mt-2 flex-shrink-0" />
                                            <div><span className="font-semibold text-slate-900">{f.title}:</span> <span className="text-slate-600">{f.description}</span></div>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <Link to="/contact" className="inline-flex items-center gap-2 bg-copper hover:bg-copper/90 text-white font-semibold px-8 py-4 rounded-lg transition-colors shadow-sm">
                                Request a Quote <ArrowRight className="w-5 h-5" />
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Cross-link into the industry silo (completes product ↔ industry loop) */}
            {usedInIndustries.length > 0 && (
                <section className="py-12 border-t border-stone-100">
                    <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
                        <h2 className="text-2xl font-bold text-slate-900 mb-6">Used in these industries</h2>
                        <div className="flex flex-wrap gap-3">
                            {usedInIndustries.map((ind) => (
                                <Link
                                    key={ind.slug}
                                    to={`/industries/${ind.slug}`}
                                    className="inline-flex items-center gap-1 rounded-full border border-stone-300 px-4 py-2 text-sm font-medium text-slate-700 hover:border-accent hover:text-accent transition-colors"
                                >
                                    {ind.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Visible FAQ — matches the FAQPage schema above */}
            <div className="bg-stone-50">
                <FAQSection faqs={product.faqs} heading={`${product.name} — FAQs`} />
            </div>

            <section className="py-16">
                <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 text-center mb-12">Explore Other Products</h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {relatedProducts.map((prod) => (
                            <Link key={prod.slug} to={`/products/${prod.slug}`} className="group bg-white rounded-lg overflow-hidden shadow-sm border border-stone-200 hover:shadow-lg transition-shadow">
                                <div className="h-48 overflow-hidden">
                                    <img src={prod.image} alt={prod.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" width={400} height={300} />
                                </div>
                                <div className="p-4">
                                    <h3 className="font-semibold text-slate-900 group-hover:text-copper transition-colors">{prod.name}</h3>
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
