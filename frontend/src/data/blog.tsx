// Blog — industry insight and company perspective posts (distinct from the evergreen /guides).
import type { GuideSection } from './guides';

export interface BlogPost {
    slug: string;
    title: string;
    seoTitle: string;
    seoDescription: string;
    intro: string;
    published: string; // ISO
    readingTime: string;
    sections: GuideSection[];
    faqs: { question: string; answer: string }[];
    related: { label: string; href: string }[];
}

export const blogPosts: BlogPost[] = [
    {
        slug: 'silica-sand-market-india-2026',
        title: 'Silica Sand in India: Market Outlook for 2026',
        seoTitle: 'Silica Sand Market in India 2026 — Demand, Drivers & Outlook | Shiv Mines',
        seoDescription: 'India\'s silica sand market outlook for 2026: size, growth, and the demand drivers — glass, solar, construction, foundry and fracturing — from a Rajasthan producer.',
        intro: 'India\'s silica sand market is growing steadily, driven mainly by the glass industry (including solar glass), construction, foundry casting and oil & gas. Industry estimates put the market in the hundreds of millions of US dollars in 2025 with continued growth through the early 2030s.',
        published: '2026-07-23',
        readingTime: '5 min read',
        sections: [
            { heading: 'What is driving demand', paragraphs: ['Glass is the single largest end use of silica sand, and demand is being reinforced by solar-glass manufacturing as India expands renewable energy. Construction, foundry/metal casting, water treatment and chemicals add steady industrial demand.'] },
            { heading: 'Why Rajasthan matters', paragraphs: ['Rajasthan is one of India\'s most important sources of high-purity silica sand. Producers in districts such as Karauli supply domestic manufacturers and export markets, benefiting from established mining infrastructure and quality deposits.'] },
            { heading: 'What buyers should expect', paragraphs: ['As specifications tighten (especially for glass and solar), buyers increasingly ask for documented purity, iron content and particle size. Working with a producer that can grade to specification and supply consistently is becoming more important than headline price alone.'] },
        ],
        faqs: [
            { question: 'Is the silica sand market in India growing?', answer: 'Yes. Industry estimates show steady growth, led by glass (including solar glass), construction, foundry and oil & gas demand.' },
            { question: 'Which industry uses the most silica sand in India?', answer: 'The glass industry is typically the largest consumer, followed by construction and foundry.' },
        ],
        related: [
            { label: 'Silica Sand for the Glass Industry', href: '/industries/glass-manufacturing' },
            { label: 'Glass Grade Silica Sand', href: '/products/glass-sand' },
            { label: 'Silica Sand Grades Explained', href: '/guides/silica-sand-grades-explained' },
        ],
    },
    {
        slug: 'how-silica-sand-is-mined-washed-graded',
        title: 'How Silica Sand Is Mined, Washed and Graded',
        seoTitle: 'How Silica Sand Is Mined, Washed and Graded | Shiv Mines and Minerals',
        seoDescription: 'A look at how silica sand is produced — extraction, washing to remove clay and impurities, drying, and grading to a target particle size — from a working Rajasthan mine.',
        intro: 'Silica sand is produced by extracting it from a deposit, washing it to remove clay and impurities, drying it, and grading it to a target particle size. At Shiv Mines and Minerals in Karauli, Rajasthan, this on-site process is what lets us supply consistent, clean, well-graded sand.',
        published: '2026-07-23',
        readingTime: '5 min read',
        sections: [
            { heading: 'Extraction', paragraphs: ['Silica sand is extracted from our deposit under Mining Lease M.L. No. 34/2006 in Karauli, Rajasthan. Selecting the right material at the source is the first control on final quality.'] },
            { heading: 'Washing and processing', paragraphs: ['The sand is washed on site to remove clay and other adulterants — essential for construction strength and for the purity glass and industrial buyers need. Higher grades also go through further separation and sizing.'] },
            { heading: 'Grading to specification', paragraphs: ['Finally the sand is graded to a target particle size (and, for foundry, to an AFS grain fineness). This is what lets us supply different grades — construction, industrial, glass, foundry, frac and custom — from the same operation.'] },
        ],
        faqs: [
            { question: 'How is silica sand processed?', answer: 'It is extracted, washed to remove clay and impurities, dried, and graded to a target particle size (and AFS fineness for foundry grades).' },
            { question: 'Why is washing important?', answer: 'Washing removes clay and impurities that would weaken concrete or reduce the purity glass and industrial applications require.' },
        ],
        related: [
            { label: 'Quality & Lab Analysis', href: '/quality' },
            { label: 'About Shiv Mines and Minerals', href: '/about' },
            { label: 'All Silica Sand Products', href: '/products' },
        ],
    },
    {
        slug: 'how-to-choose-silica-sand-supplier-india',
        title: 'How to Choose a Silica Sand Supplier in India',
        seoTitle: 'How to Choose a Silica Sand Supplier in India | Shiv Mines and Minerals',
        seoDescription: 'What to check when choosing a silica sand supplier in India — purity documentation, grade range, consistency, export capability and experience.',
        intro: 'To choose a silica sand supplier in India, check five things: documented purity (SiO₂ and iron), the range of grades they offer, consistency of supply, export capability, and years of experience. A supplier that mines and grades its own sand can usually give you more consistent quality.',
        published: '2026-07-23',
        readingTime: '4 min read',
        sections: [
            { heading: 'What to check', paragraphs: ['A good silica sand supplier should be able to prove and repeat quality. Look for:'], bullets: ['Documented purity — SiO₂ % and Fe₂O₃, ideally with a test report.', 'Grade range — can they supply the grade your application needs?', 'Consistency — can they hold specification order to order?', 'Capacity and logistics — bulk supply and delivery to your location.', 'Export capability — if you need overseas shipment.', 'Experience — years of operation and industries served.'] },
            { heading: 'Why a producer beats a trader', paragraphs: ['A supplier that mines and processes its own sand controls quality at the source and can grade to your specification, rather than reselling whatever is available. Shiv Mines and Minerals has mined and supplied silica sand from Karauli, Rajasthan since 2006.'] },
        ],
        faqs: [
            { question: 'How do I choose a silica sand supplier?', answer: 'Check documented purity, grade range, consistency, capacity, export capability and experience — and prefer a producer that mines and grades its own sand.' },
            { question: 'Should I buy from a producer or a trader?', answer: 'A producer that mines and processes its own sand generally offers more consistent quality and can grade to your exact specification.' },
        ],
        related: [
            { label: 'Quality & Lab Analysis', href: '/quality' },
            { label: 'All Silica Sand Products', href: '/products' },
            { label: 'Contact / Request a Quote', href: '/contact' },
        ],
    },
];

export const getBlogPost = (slug: string): BlogPost | undefined => blogPosts.find((p) => p.slug === slug);
