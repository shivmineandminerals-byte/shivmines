import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Factory, FlaskConical, BookOpen, Newspaper } from "lucide-react";

const cards = [
    { href: "/industries", icon: Factory, title: "Silica Sand by Industry", desc: "Glass, foundry, filtration, construction, oil & gas, paints, ceramics and more — with the grade each needs." },
    { href: "/quality", icon: FlaskConical, title: "Quality & Lab Analysis", desc: "Independent lab results — SiO₂ ~96–97%, low iron, high whiteness. Test certificates on request." },
    { href: "/guides", icon: BookOpen, title: "Silica Sand Guides", desc: "Grades explained, specifications to check, and how to choose the right silica sand." },
    { href: "/blog", icon: Newspaper, title: "Blog", desc: "Market outlook, how we mine and grade our sand, and buyer advice." },
];

const ExploreSection = () => {
    return (
        <section className="section-padding bg-background" aria-labelledby="explore-heading">
            <div className="container-wide">
                <div className="mb-12">
                    <p className="label-sm mb-4">Explore</p>
                    <h2 id="explore-heading" className="heading-section">Learn more about our silica</h2>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {cards.map((c, i) => (
                        <motion.div
                            key={c.href}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.4, delay: i * 0.08 }}
                        >
                            <Link
                                to={c.href}
                                className="group flex flex-col h-full bg-card border border-border rounded-lg p-6 hover:border-accent/40 hover:shadow-md transition-all"
                            >
                                <c.icon className="w-8 h-8 text-accent mb-4" aria-hidden="true" />
                                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-colors">{c.title}</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed flex-grow">{c.desc}</p>
                                <span className="inline-flex items-center gap-1 text-accent font-semibold text-sm mt-4">
                                    Explore <ArrowRight className="w-4 h-4" />
                                </span>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ExploreSection;
