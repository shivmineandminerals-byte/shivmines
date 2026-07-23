import { useParams, Navigate, Link } from 'react-router-dom';
import { motion, type Transition } from 'framer-motion';
import { ArrowRight, CheckCircle2, ShieldCheck, PhoneCall } from 'lucide-react';
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
    viewport: { once: true, margin: '-50px' },
    transition: smoothTransition,
};

const fadeInRight = {
    initial: { opacity: 0, x: 20 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true, margin: '-50px' },
    transition: smoothTransition,
};

export default function ProductDetail() {
    const { slug } = useParams<{ slug: string }>();

    if (!slug || !getProduct(slug)) {
        return <Navigate to="/products" replace />;
    }

    const product = getProduct(slug)!;

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
        <div className="min-h-screen bg-white pt-16 md:pt-20">
            <SEOHead
                title={product.seoTitle}
                description={product.seoDescription}
                canonical={`/products/${slug}`}
                ogImage={`https://shivmines.in${product.image}`}
                keywords={`${product.name}, ${product.name} supplier India, ${product.name} Rajasthan, silica sand, Shiv Mines and Minerals`}
                schemaMarkup={[productSchema, buildBreadcrumbSchema(crumbs), buildFaqSchema(product.faqs)]}
            />
            <Header />

            {/* Page Header / Hero Title */}
            <section className="relative h-[220px] md:h-[300px] flex items-center justify-center">
                <div className="absolute inset-0">
                    <img src="/images/hero-quarry.webp" alt={`${product.name} from Shiv Mines and Minerals`} className="w-full h-full object-cover" width={1600} height={400} />
                    <div className="absolute inset-0 bg-black/60" />
                </div>
                <motion.h1
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={smoothTransition}
                    className="relative z-10 text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center px-4"
                >
                    {product.name}
                </motion.h1>
            </section>

            <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 pt-6">
                <Breadcrumbs items={crumbs} />
            </div>

            {/* Top Overview Grid: Image (Left) + Core Details & CTA (Right) */}
            <section className="py-8 md:py-12">
                <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                        {/* Left: Product Image */}
                        <motion.div {...fadeInLeft}>
                            <div className="rounded-xl overflow-hidden shadow-md border border-stone-200 bg-stone-50">
                                <img
                                    src={product.image}
                                    alt={`${product.name} — silica sand from Karauli, Rajasthan`}
                                    className="w-full h-72 sm:h-88 lg:h-[400px] object-cover"
                                    loading="lazy"
                                    width={800}
                                    height={600}
                                />
                            </div>
                        </motion.div>

                        {/* Right: Title, Summary, Description & Direct CTA */}
                        <motion.div {...fadeInRight} className="flex flex-col justify-center">
                            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
                                Premium {product.name}
                            </h2>
                            
                            {/* Key Summary Highlight */}
                            <div className="bg-stone-50 border-l-4 border-accent p-4 rounded-r-lg mb-4">
                                <p className="text-slate-800 font-medium text-sm sm:text-base leading-relaxed">
                                    {product.answerSnippet}
                                </p>
                            </div>

                            <p className="text-slate-600 leading-relaxed mb-6 text-sm sm:text-base">
                                {product.description}
                            </p>

                            {/* Direct Actions */}
                            <div className="flex flex-wrap gap-4 pt-1">
                                <Link
                                    to="/contact"
                                    className="inline-flex items-center justify-center gap-2 bg-copper hover:bg-copper/90 text-white font-semibold px-6 py-3 rounded-lg transition-colors shadow-sm text-sm sm:text-base"
                                >
                                    Request Bulk Quote <ArrowRight className="w-4 h-4" />
                                </Link>
                                <a
                                    href="tel:+919116758641"
                                    className="inline-flex items-center justify-center gap-2 border border-slate-300 hover:border-slate-400 text-slate-700 font-semibold px-5 py-3 rounded-lg transition-colors text-sm sm:text-base bg-white"
                                >
                                    <PhoneCall className="w-4 h-4 text-copper" /> Call Sales Team
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Technical Specifications Section */}
            <section className="py-12 bg-stone-50 border-y border-stone-200/80">
                <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
                    <div className="max-w-3xl mb-8">
                        <p className="text-xs uppercase tracking-wider text-copper font-bold mb-1">Technical Data Sheet</p>
                        <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
                            Typical Specifications & Parameters
                        </h2>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {product.specs.map((s, i) => (
                            <div key={i} className="bg-white p-5 rounded-lg border border-stone-200/80 shadow-sm flex flex-col justify-between">
                                <dt className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">{s.label}</dt>
                                <dd className="text-base sm:text-lg font-bold text-slate-900">{s.value}</dd>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Applications & Salient Features (Balanced 2-Column Grid) */}
            <section className="py-12 md:py-16 bg-white">
                <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
                    <div className="grid lg:grid-cols-2 gap-10 lg:gap-14">
                        {/* Applications */}
                        <motion.div {...fadeInLeft} className="bg-stone-50/70 p-6 sm:p-8 rounded-xl border border-stone-200/80">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-2.5 bg-copper/10 rounded-lg text-copper">
                                    <CheckCircle2 className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl sm:text-2xl font-bold text-slate-900">Primary Applications</h3>
                            </div>
                            <ul className="space-y-4">
                                {product.applications.map((app, i) => (
                                    <li key={i} className="border-b border-stone-200/60 pb-3.5 last:border-b-0 last:pb-0">
                                        <h4 className="font-bold text-slate-900 text-base mb-1">{app.title}</h4>
                                        <p className="text-slate-600 text-sm leading-relaxed">{app.description}</p>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Salient Features */}
                        <motion.div {...fadeInRight} className="bg-stone-50/70 p-6 sm:p-8 rounded-xl border border-stone-200/80">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-2.5 bg-copper/10 rounded-lg text-copper">
                                    <ShieldCheck className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl sm:text-2xl font-bold text-slate-900">Salient Features & Advantages</h3>
                            </div>
                            <ul className="space-y-4">
                                {product.features.map((f, i) => (
                                    <li key={i} className="border-b border-stone-200/60 pb-3.5 last:border-b-0 last:pb-0">
                                        <h4 className="font-bold text-slate-900 text-base mb-1">{f.title}</h4>
                                        <p className="text-slate-600 text-sm leading-relaxed">{f.description}</p>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>

                    {/* Bottom CTA Banner */}
                    <div className="mt-12 bg-gradient-to-r from-slate-900 to-slate-800 text-white rounded-xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
                        <div>
                            <h3 className="text-lg sm:text-xl font-bold mb-1.5">Need Custom Specifications for {product.name}?</h3>
                            <p className="text-slate-300 text-xs sm:text-sm max-w-xl">
                                We offer custom grain sizing, washing, mesh screening, and bulk jumbo bag packaging tailored to your manufacturing process.
                            </p>
                        </div>
                        <Link
                            to="/contact"
                            className="flex-shrink-0 bg-copper hover:bg-copper/90 text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm sm:text-base whitespace-nowrap"
                        >
                            Get Custom Quote
                        </Link>
                    </div>
                </div>
            </section>

            {/* Used in these industries */}
            {usedInIndustries.length > 0 && (
                <section className="py-10 border-t border-stone-200 bg-stone-50">
                    <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
                        <h2 className="text-lg font-bold text-slate-900 mb-4">Industries Using {product.name}</h2>
                        <div className="flex flex-wrap gap-2.5">
                            {usedInIndustries.map((ind) => (
                                <Link
                                    key={ind.slug}
                                    to={`/industries/${ind.slug}`}
                                    className="inline-flex items-center gap-1.5 rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:border-copper hover:text-copper transition-colors shadow-xs"
                                >
                                    {ind.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Visible FAQ */}
            <div className="bg-white">
                <FAQSection faqs={product.faqs} heading={`${product.name} — FAQs`} />
            </div>

            {/* Related Products */}
            <section className="py-14 bg-stone-50 border-t border-stone-200">
                <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 text-center mb-10">Explore Other Silica Grades</h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {relatedProducts.map((prod) => (
                            <Link key={prod.slug} to={`/products/${prod.slug}`} className="group bg-white rounded-lg overflow-hidden shadow-sm border border-stone-200 hover:shadow-md transition-all">
                                <div className="h-44 overflow-hidden">
                                    <img src={prod.image} alt={prod.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" width={400} height={300} />
                                </div>
                                <div className="p-4">
                                    <h3 className="font-bold text-slate-900 group-hover:text-copper transition-colors text-base">{prod.name}</h3>
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
