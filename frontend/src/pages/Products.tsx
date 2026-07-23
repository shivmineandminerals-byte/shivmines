import { Link } from 'react-router-dom';
import { motion, type Transition } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import SEOHead from '@/components/SEOHead';
import Breadcrumbs, { buildBreadcrumbSchema, type Crumb } from '@/components/Breadcrumbs';
import { products } from '@/data/products';

const smoothTransition: Transition = { duration: 0.4, ease: [0.4, 0, 0.2, 1] };

const crumbs: Crumb[] = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
];

const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Silica Sand Products from Shiv Mines and Minerals',
    description: 'Premium silica sand products mined in Karauli, Rajasthan, India',
    numberOfItems: products.length,
    itemListElement: products.map((p, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: p.name,
        url: `https://shivmines.in/products/${p.slug}`,
    })),
};

export default function Products() {
    return (
        <div className="min-h-screen bg-white">
            <SEOHead
                title="Silica Sand Products — Construction, Industrial, Glass, Foundry & Frac | Shiv Mines and Minerals"
                description="Buy silica sand from Shiv Mines and Minerals, Karauli, Rajasthan: construction, industrial (99%+ SiO₂), glass (99.5%+ SiO₂), foundry, frac and custom-grade sand. Lab-tested, export-ready. Request a quote."
                canonical="/products"
                keywords="silica sand products, construction sand, industrial silica sand, glass grade silica sand, foundry sand, frac sand, custom silica sand, silica sand supplier rajasthan"
                schemaMarkup={[buildBreadcrumbSchema(crumbs), itemListSchema]}
            />
            <Header />

            {/* Hero */}
            <section className="relative h-[300px] md:h-[400px] flex items-center justify-center">
                <div className="absolute inset-0">
                    <img src="/images/hero-quarry.webp" alt="Silica sand products from Shiv Mines and Minerals" className="w-full h-full object-cover" width={1600} height={400} />
                    <div className="absolute inset-0 bg-black/50" />
                </div>
                <motion.h1
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={smoothTransition}
                    className="relative z-10 text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center"
                >
                    Silica Sand Products
                </motion.h1>
            </section>

            <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 pt-6">
                <Breadcrumbs items={crumbs} />
            </div>

            {/* Products Grid */}
            <section className="py-12 md:py-20">
                <div className="container mx-auto px-4 md:px-8 lg:px-16">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={smoothTransition}
                        className="mb-12"
                    >
                        <p className="label-sm mb-4">Silica Sand Products</p>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                            Premium Silica for Every Application
                        </h2>
                        <p className="text-slate-700 max-w-3xl text-lg leading-relaxed">
                            Shiv Mines and Minerals produces six grades of silica sand at its Karauli, Rajasthan mines —
                            construction, industrial, glass, foundry, frac and custom-specification — each washed and graded to
                            meet specific industry requirements. Every grade is available for domestic supply and export.
                        </p>
                    </motion.div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {products.map((product, i) => (
                            <motion.div
                                key={product.slug}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-50px' }}
                                transition={{ ...smoothTransition, delay: (i % 3) * 0.1 }}
                            >
                                <Link
                                    to={`/products/${product.slug}`}
                                    className="group block h-full bg-white rounded-lg overflow-hidden shadow-sm border border-stone-200 hover:shadow-lg transition-shadow"
                                >
                                    <div className="aspect-[16/10] overflow-hidden">
                                        <img
                                            src={product.image}
                                            alt={`${product.name} — silica sand from Rajasthan`}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                            loading="lazy"
                                            width={400}
                                            height={250}
                                        />
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-accent transition-colors">
                                            {product.name}
                                        </h3>
                                        <p className="text-slate-600 text-sm mb-4">{product.shortDescription}</p>
                                        <span className="inline-flex items-center gap-1 text-accent font-semibold text-sm">
                                            View Details <ArrowRight className="w-4 h-4" />
                                        </span>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
            <WhatsAppButton />
        </div>
    );
}
