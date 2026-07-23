// Visible FAQ section. Pair it with FAQPage JSON-LD on the same page so the schema
// always matches on-page content (Google requires the answer to be visible).

interface FAQ {
    question: string;
    answer: string;
}

interface FAQSectionProps {
    faqs: FAQ[];
    heading?: string;
    className?: string;
}

export default function FAQSection({ faqs, heading = 'Frequently Asked Questions', className = '' }: FAQSectionProps) {
    if (!faqs || faqs.length === 0) return null;

    return (
        <section className={`py-12 md:py-16 ${className}`} aria-labelledby="faq-heading">
            <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
                <h2 id="faq-heading" className="text-2xl md:text-3xl font-bold text-slate-900 mb-8">
                    {heading}
                </h2>
                <div className="max-w-3xl divide-y divide-stone-200">
                    {faqs.map((faq, i) => (
                        <details key={i} className="group py-5" {...(i === 0 ? { open: true } : {})}>
                            <summary className="flex cursor-pointer items-center justify-between gap-4 text-lg font-semibold text-slate-900 list-none">
                                {faq.question}
                                <span className="text-accent transition-transform duration-200 group-open:rotate-45" aria-hidden="true">+</span>
                            </summary>
                            <p className="mt-3 text-slate-600 leading-relaxed">{faq.answer}</p>
                        </details>
                    ))}
                </div>
            </div>
        </section>
    );
}

/** Build FAQPage JSON-LD from the same FAQ array shown on the page. */
export function buildFaqSchema(faqs: FAQ[]) {
    return {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map((f) => ({
            '@type': 'Question',
            name: f.question,
            acceptedAnswer: { '@type': 'Answer', text: f.answer },
        })),
    };
}
