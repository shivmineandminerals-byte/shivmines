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
    {
        slug: 'silica-sand-vs-river-sand-vs-m-sand',
        title: 'Silica Sand vs River Sand vs M-Sand: What\'s the Difference?',
        seoTitle: 'Silica Sand vs River Sand vs M-Sand — Differences & Uses | Shiv Mines',
        seoDescription: 'Silica sand vs river sand vs M-sand (manufactured sand): how they differ in composition, purity and use, and when to choose each for construction or industry.',
        intro: 'Silica sand is a high-purity quartz sand (mostly SiO₂) used in glass, foundry and industry as well as construction; river sand is natural sand dug from riverbeds; and M-sand (manufactured sand) is crushed rock made for concrete. Silica sand is chosen for purity, river sand for general construction, and M-sand as a controlled, sustainable concrete sand.',
        published: '2026-07-23',
        readingTime: '5 min read',
        sections: [
            { heading: 'What each sand is', paragraphs: ['These three are often confused but are used differently:'], bullets: ['Silica sand — high-purity quartz sand (SiO₂), washed and graded, used in glass, foundry, filtration and industry, and in construction where clean sand is needed.', 'River sand — natural sand collected from riverbeds; widely used in construction but variable in quality and increasingly restricted.', 'M-sand (manufactured sand) — crushed hard rock screened to a controlled size, engineered as a river-sand substitute for concrete.'] },
            { heading: 'When to use which', paragraphs: ['Choose based on the job:'], bullets: ['Glass, foundry, filtration, industrial → silica sand (purity matters).', 'General construction → river sand or M-sand.', 'Concrete where consistency and supply matter → M-sand.'] },
            { heading: 'Where silica sand fits', paragraphs: ['For construction, our washed construction-grade silica sand gives clean, well-graded material free of clay. For industrial and glass work, higher-purity grades are used. We grade to your requirement.'] },
        ],
        faqs: [
            { question: 'Is silica sand better than river sand?', answer: 'For glass, foundry and industrial use, yes — silica sand is far purer. For general construction, washed silica sand, river sand or M-sand can all work depending on the job.' },
            { question: 'What is M-sand?', answer: 'M-sand (manufactured sand) is crushed rock screened to a controlled size, used as a river-sand substitute in concrete.' },
        ],
        related: [
            { label: 'Construction Silica Sand', href: '/products/construction-sand' },
            { label: 'Silica Sand for Construction', href: '/industries/construction-concrete' },
            { label: 'Silica Sand Grades Explained', href: '/guides/silica-sand-grades-explained' },
        ],
    },
    {
        slug: 'silica-sand-for-solar-glass',
        title: 'Silica Sand for Solar Glass: Why Purity Matters',
        seoTitle: 'Silica Sand for Solar Glass — Purity Requirements | Shiv Mines and Minerals',
        seoDescription: 'Solar glass needs ultra-pure, low-iron silica sand for light transmission. Learn the purity requirements for solar-panel glass and how to source suitable silica sand.',
        intro: 'Solar glass needs ultra-pure, low-iron silica sand (high SiO₂ with very low Fe₂O₃) because iron reduces the light transmission a solar panel depends on. High-purity glass-grade silica sand is used to make the low-iron "solar glass" that covers photovoltaic panels.',
        published: '2026-07-23',
        readingTime: '4 min read',
        sections: [
            { heading: 'Why solar glass needs low iron', paragraphs: ['Solar panels rely on as much light as possible reaching the cells. Iron oxide (Fe₂O₃) in glass absorbs light and gives a green tint, so solar glass is made from very low-iron, high-purity silica sand to maximise transmission.'] },
            { heading: 'What grade is used', paragraphs: ['Solar glass uses glass-grade silica sand — typically 99.5%+ SiO₂ with Fe₂O₃ kept very low. This is the same high-purity family used for premium flat and container glass.'] },
            { heading: 'Sourcing for solar', paragraphs: ['As India expands solar capacity, demand for low-iron silica is growing. Share your target SiO₂ and iron limits and we will confirm a suitable glass-grade supply.'] },
        ],
        faqs: [
            { question: 'What silica sand is used for solar glass?', answer: 'High-purity, low-iron glass-grade silica sand (around 99.5%+ SiO₂ with very low Fe₂O₃) is used for solar glass.' },
            { question: 'Why is low iron important for solar glass?', answer: 'Iron absorbs light and tints glass, reducing the transmission solar panels need, so solar glass uses very low-iron silica.' },
        ],
        related: [
            { label: 'Glass Grade Silica Sand', href: '/products/glass-sand' },
            { label: 'Silica Sand for Glass Industry', href: '/industries/glass-manufacturing' },
            { label: 'Quality & Lab Analysis', href: '/quality' },
        ],
    },
    {
        slug: 'silica-sand-vs-quartz-powder',
        title: 'Silica Sand vs Quartz Powder: What\'s the Difference?',
        seoTitle: 'Silica Sand vs Quartz Powder — Differences & Uses | Shiv Mines and Minerals',
        seoDescription: 'Silica sand vs quartz powder: both are silica (SiO₂) but differ in particle size and use. Learn which suits glass and foundry vs adhesives, putty, paints and polishing.',
        intro: 'Silica sand and quartz powder are both silica (SiO₂) — the difference is particle size. Silica sand is granular and used for glass, foundry, filtration and construction; quartz (silica) powder is finely ground, supplied in mesh grades like 100 and 200 mesh, and used in adhesives, wall putty, tile compounds, paints and polishing compounds.',
        published: '2026-07-23',
        readingTime: '4 min read',
        sections: [
            { heading: 'Same mineral, different size', paragraphs: ['Both silica sand and quartz powder are silicon dioxide (SiO₂). Silica sand is a graded granular sand; quartz/silica powder is the same material ground fine to a target mesh.'] },
            { heading: 'Which is used where', paragraphs: ['The size decides the use:'], bullets: ['Silica sand (granular) → glass, foundry casting, water filtration, frac, construction.', 'Quartz/silica powder (fine, 100–200 mesh) → adhesives, wall putty, tile compounds, paints & coatings, ceramics, metal polishing.'] },
            { heading: 'What we supply', paragraphs: ['We supply both — graded silica sand and 100/200-mesh silica powder — from the same high-purity, low-iron silica, with lab analysis available.'] },
        ],
        faqs: [
            { question: 'Is quartz powder the same as silica powder?', answer: 'Yes. Quartz powder and silica powder are the same thing — finely ground silica (SiO₂), often called pisai powder.' },
            { question: 'What is silica powder used for?', answer: 'Adhesives, wall putty, tile compounds, paints and coatings, ceramics and metal polishing compounds.' },
        ],
        related: [
            { label: 'Silica Powder (100/200 mesh)', href: '/products/silica-powder' },
            { label: 'Silica Sand for Adhesives & Tile Compounds', href: '/industries/adhesives-and-tile-compounds' },
            { label: 'All Products', href: '/products' },
        ],
    },
    {
        slug: 'buying-silica-sand-in-bulk-packaging-delivery',
        title: 'Buying Silica Sand in Bulk: Packaging, Quantities & Delivery',
        seoTitle: 'Buying Silica Sand in Bulk — Packaging, MOQ & Delivery | Shiv Mines',
        seoDescription: 'How to buy silica sand in bulk in India: packaging options (loose bulk, jumbo bags), quantities, delivery and export, and what to include in your enquiry for a fast quote.',
        intro: 'To buy silica sand in bulk, decide the grade and specification, quantity, packaging (loose bulk or jumbo bags) and delivery location, then request a quote. A producer that mines and grades its own sand can supply consistently for both domestic delivery across India and export.',
        published: '2026-07-23',
        readingTime: '4 min read',
        sections: [
            { heading: 'Packaging options', paragraphs: ['Silica sand is usually supplied as:'], bullets: ['Loose bulk (tippers/trucks) for large local orders', 'Jumbo bags (FIBC / bulk bags) for handling and export', 'Smaller bags where specified'] },
            { heading: 'What to include in your enquiry', paragraphs: ['To get an accurate quote quickly, tell us:'], bullets: ['Grade or application (construction, industrial, glass, foundry, frac, powder)', 'Target specification (SiO₂, Fe₂O₃, mesh/PSD, AFS if foundry)', 'Quantity and how often you need it', 'Delivery location (and port if export)', 'Packaging preference'] },
            { heading: 'Domestic and export', paragraphs: ['We supply across India and for export. For export, share your destination port and we will advise on packaging and documentation, with a test certificate available on request.'] },
        ],
        faqs: [
            { question: 'What is the minimum order for silica sand?', answer: 'It depends on grade and destination. Share your quantity and location and we will confirm what we can supply and quote accordingly.' },
            { question: 'How is bulk silica sand delivered?', answer: 'In loose bulk or jumbo bags for domestic delivery across India, and in export-suitable packaging for overseas orders.' },
        ],
        related: [
            { label: 'Silica Sand Supplier in India', href: '/silica-sand-supplier-india' },
            { label: 'Silica Sand Exporter', href: '/silica-sand-exporter-india' },
            { label: 'Request a Quote', href: '/contact' },
        ],
    },
];

export const getBlogPost = (slug: string): BlogPost | undefined => blogPosts.find((p) => p.slug === slug);
