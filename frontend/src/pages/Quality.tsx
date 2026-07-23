import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import SEOHead from '@/components/SEOHead';
import FAQSection, { buildFaqSchema } from '@/components/FAQSection';
import Breadcrumbs, { buildBreadcrumbSchema, type Crumb } from '@/components/Breadcrumbs';

const crumbs: Crumb[] = [
    { name: 'Home', href: '/' },
    { name: 'Quality & Lab Analysis', href: '/quality' },
];

// Transcribed from independent laboratory analysis certificates
// (Gujrati Minerals Laboratory, Beawar, Rajasthan — 21 Dec 2024).
const samples = [
    {
        name: 'Silica / Quartz (mine sample)',
        ref: 'Ref. 5709/24/O',
        rows: [
            ['SiO₂', '97.324%'], ['Al₂O₃', '2.745%'], ['Fe₂O₃', '0.173%'], ['CaO', '0.195%'],
            ['MgO', '0.095%'], ['LOI', '0.615%'], ['K₂O', '0.031%'], ['Na₂O', '0.055%'],
            ['Whiteness', '87.300%'], ['Water absorption', '3.590%'], ['Expansion @1200°C', '0.255%'],
        ],
    },
    {
        name: 'Silica Powder (ground / pisai powder)',
        ref: 'Ref. 5710/24/O',
        rows: [
            ['SiO₂', '96.224%'], ['Al₂O₃', '4.265%'], ['Fe₂O₃', '0.076%'], ['CaO', '0.190%'],
            ['MgO', '1.885%'], ['LOI', '0.630%'], ['K₂O', '0.030%'], ['Na₂O', '0.055%'],
            ['Whiteness', '84.300%'], ['Water absorption', '2.590%'], ['Expansion @1200°C', '0.250%'],
        ],
    },
];

const certificates = [
    {
        src: '/images/lab-certificate-silica-5709.webp',
        alt: 'Gujrati Minerals Laboratory analysis certificate for Shiv Mines and Minerals silica (Ref. 5709/24/O) showing SiO₂ 97.324%, Fe₂O₃ 0.173%, whiteness 87.3%',
        caption: 'Analysis certificate — silica sample (Ref. 5709/24/O, 21 Dec 2024)',
    },
    {
        src: '/images/lab-certificate-silica-powder-5710.webp',
        alt: 'Gujrati Minerals Laboratory analysis certificate for Shiv Mines and Minerals silica powder (Ref. 5710/24/O) showing SiO₂ 96.224%, Fe₂O₃ 0.076%, whiteness 84.3%',
        caption: 'Analysis certificate — silica powder / pisai powder (Ref. 5710/24/O, 21 Dec 2024)',
    },
];

const certificateSchema = certificates.map((c) => ({
    '@context': 'https://schema.org',
    '@type': 'ImageObject',
    contentUrl: `https://shivmines.in${c.src}`,
    caption: c.caption,
    description: c.alt,
    creator: { '@type': 'Organization', name: 'Gujrati Minerals Laboratory' },
    about: { '@type': 'Organization', name: 'Shiv Mines and Minerals' },
}));

const faqs = [
    { question: 'Is your silica sand lab tested?', answer: 'Yes. Our silica is analysed by an independent laboratory. Representative results show SiO₂ of about 96–97%, low iron (Fe₂O₃ from 0.076%) and high whiteness (84–87%).' },
    { question: 'Can I get a test certificate for my order?', answer: 'Yes. We can provide a laboratory analysis certificate for supplied material on request. Contact us with your requirement.' },
    { question: 'What iron content does your silica have?', answer: 'Independent analysis shows Fe₂O₃ (iron oxide) from 0.076% to 0.173% depending on the sample and grade.' },
];

export default function Quality() {
    return (
        <div className="min-h-screen bg-white">
            <SEOHead
                title="Quality & Lab Analysis — Silica Sand Test Report | Shiv Mines and Minerals"
                description="Independent laboratory analysis of Shiv Mines and Minerals silica: SiO₂ ~96–97%, Fe₂O₃ from 0.076%, whiteness 84–87%. Test certificates available on request."
                canonical="/quality"
                keywords="silica sand lab test report, silica sand chemical analysis, silica sand SiO2 Fe2O3, silica sand quality certificate, silica sand whiteness"
                schemaMarkup={[buildBreadcrumbSchema(crumbs), buildFaqSchema(faqs), ...certificateSchema]}
            />
            <Header />

            <section className="pt-28 pb-8 bg-secondary/30">
                <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
                    <Breadcrumbs items={crumbs} className="mb-6" />
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Quality &amp; Lab Analysis</h1>
                    <p className="text-lg text-slate-700 max-w-3xl">
                        Our silica is tested by an independent laboratory. The representative results below show high silica
                        content, low iron and high whiteness — the specifications glass, foundry, adhesive and coating buyers ask for.
                    </p>
                </div>
            </section>

            <section className="py-12 md:py-16">
                <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
                    {/* Answer-first summary */}
                    <p className="text-lg md:text-xl text-slate-800 font-medium leading-relaxed max-w-3xl mb-10 border-l-4 border-accent pl-5">
                        Independent laboratory analysis of Shiv Mines and Minerals silica shows SiO₂ of about 96–97%,
                        iron (Fe₂O₃) from 0.076%, and whiteness of 84–87%.
                    </p>

                    <div className="grid md:grid-cols-2 gap-8">
                        {samples.map((s) => (
                            <div key={s.ref} className="rounded-lg border border-stone-200 overflow-hidden">
                                <div className="bg-slate-900 text-white px-5 py-4">
                                    <h2 className="font-bold">{s.name}</h2>
                                    <p className="text-xs text-white/70">{s.ref}</p>
                                </div>
                                <table className="w-full text-sm">
                                    <tbody>
                                        {s.rows.map((r, i) => (
                                            <tr key={i} className={i % 2 ? 'bg-stone-50' : 'bg-white'}>
                                                <td className="px-5 py-2.5 text-slate-600">{r[0]}</td>
                                                <td className="px-5 py-2.5 font-semibold text-slate-900 text-right">{r[1]}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        ))}
                    </div>

                    <p className="text-sm text-slate-500 mt-6 max-w-3xl">
                        Source: independent analysis certificates from Gujrati Minerals Laboratory, Beawar, Rajasthan
                        (dated 21 December 2024). Values are representative of tested samples; results vary by grade and batch.
                        A test certificate for your supplied material is available on request.
                    </p>

                    {/* Scanned certificates (visual proof) */}
                    <div className="mt-12">
                        <h2 className="text-2xl font-bold text-slate-900 mb-6">Laboratory analysis certificates</h2>
                        <div className="grid sm:grid-cols-2 gap-8">
                            {certificates.map((c) => (
                                <figure key={c.src} className="rounded-lg border border-stone-200 overflow-hidden bg-white">
                                    <img
                                        src={c.src}
                                        alt={c.alt}
                                        loading="lazy"
                                        width={852}
                                        height={1280}
                                        className="w-full h-auto"
                                    />
                                    <figcaption className="px-4 py-3 text-sm text-slate-500 border-t border-stone-100">{c.caption}</figcaption>
                                </figure>
                            ))}
                        </div>
                    </div>

                    <Link to="/contact" className="inline-flex items-center gap-2 bg-copper hover:bg-copper/90 text-white font-semibold px-8 py-4 rounded-lg transition-colors mt-8">
                        Request a Test Certificate <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </section>

            <div className="bg-stone-50">
                <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
                    <FAQSection faqs={faqs} heading="Quality — FAQs" />
                </div>
            </div>

            <Footer />
            <WhatsAppButton />
        </div>
    );
}
