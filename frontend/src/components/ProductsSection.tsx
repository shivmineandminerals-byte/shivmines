import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { products } from "@/data/products";

const fadeIn = { hidden: { opacity: 0 }, visible: { opacity: 1 } };

const ProductsSection = () => {
    return (
        <section className="section-padding bg-secondary/50" id="products" aria-labelledby="products-heading">
            <div className="container-wide">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.4 }}
                        variants={fadeIn}
                    >
                        <p className="label-sm mb-4">Silica Sand Products</p>
                        <h2 id="products-heading" className="heading-section">
                            Premium Silica from Our Mine
                            <br className="hidden md:block" />
                            <span className="text-accent"> for Every Industrial Application</span>
                        </h2>
                        <p className="text-body-lg mt-4 max-w-2xl">
                            Our <strong className="text-foreground">silica mine</strong> produces a complete range of high-purity silica sand
                            products and powders, each engineered to meet specific industry requirements.
                        </p>
                    </motion.div>
                    <Link
                        to="/products"
                        className="btn-accent whitespace-nowrap"
                        aria-label="View all silica sand products"
                    >
                        View All Products
                        <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </Link>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" role="list" aria-label="Silica sand product catalog">
                    {products.map((product, index) => (
                        <motion.article
                            key={product.slug}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.4, delay: (index % 3) * 0.08 }}
                            variants={fadeIn}
                            className="group bg-card overflow-hidden border border-border hover:border-accent/30 transition-colors duration-300 shadow-sm hover:shadow-md"
                            role="listitem"
                            itemScope
                            itemType="https://schema.org/Product"
                        >
                            <Link to={`/products/${product.slug}`} className="block h-full">
                                <figure className="relative aspect-[16/10] overflow-hidden">
                                    <img
                                        src={product.image}
                                        alt={`${product.name} — silica sand from Shiv Mines and Minerals`}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                                        loading="lazy"
                                        width={600}
                                        height={375}
                                        itemProp="image"
                                    />
                                </figure>

                                <div className="p-5 sm:p-6">
                                    <h3 className="text-lg font-bold text-foreground leading-snug mb-2" itemProp="name">{product.name}</h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed mb-4" itemProp="description">{product.shortDescription}</p>

                                    <link itemProp="url" href={`https://shivmines.in/products/${product.slug}`} />
                                    <div itemProp="brand" itemScope itemType="https://schema.org/Brand" className="hidden">
                                        <meta itemProp="name" content="Shiv Mines and Minerals" />
                                    </div>

                                    <span className="inline-flex items-center gap-1 text-accent font-semibold text-sm">
                                        View Details <ArrowRight className="w-4 h-4" aria-hidden="true" />
                                    </span>
                                </div>
                            </Link>
                        </motion.article>
                    ))}
                </div>

                {/* Custom Specifications */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.4 }}
                    variants={fadeIn}
                    className="mt-14 pt-10 border-t border-border"
                >
                    <h3 className="heading-card text-foreground mb-4">Custom Silica Sand Specifications</h3>
                    <p className="text-body max-w-3xl mb-6">
                        Beyond our standard silica sand products, our <strong className="text-foreground">silica mine</strong> can produce
                        custom specifications to meet your unique requirements — specific mesh sizes, purity levels, or specialized processing.
                    </p>
                    <Link
                        to="/products/custom-specification"
                        className="btn-primary"
                        aria-label="Learn about custom silica sand specifications"
                    >
                        Discuss Custom Requirements
                        <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default ProductsSection;
