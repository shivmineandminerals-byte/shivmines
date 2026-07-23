// Guides / knowledge hub — builds topical authority and feeds AEO/AI citations.
// Each guide: answer-first intro, question-shaped sections, an optional comparison table,
// related products, and FAQs (rendered visibly AND as FAQPage schema).

export interface GuideSection {
    heading: string;
    paragraphs: string[];
    /** Optional simple table: first row is the header. */
    table?: string[][];
    bullets?: string[];
}

export interface Guide {
    slug: string;
    title: string;
    seoTitle: string;
    seoDescription: string;
    /** Self-contained answer-first intro, front-loaded for AI Overviews. */
    intro: string;
    updated: string; // ISO date
    readingTime: string;
    sections: GuideSection[];
    faqs: { question: string; answer: string }[];
    relatedProducts: string[]; // product slugs
}

export const guides: Guide[] = [
    {
        slug: 'silica-sand-grades-explained',
        title: 'Silica Sand Grades Explained: Construction vs Industrial vs Glass vs Foundry vs Frac',
        seoTitle: 'Silica Sand Grades Explained (Construction, Glass, Foundry, Frac) | Shiv Mines',
        seoDescription: 'A clear guide to silica sand grades — construction, industrial, glass, foundry and frac — how they differ in SiO₂ purity, iron content and grain size, and which to choose.',
        intro: 'Silica sand is graded mainly by its silica (SiO₂) purity, iron oxide (Fe₂O₃) content and grain size. Construction grade is washed building sand; industrial grade is 99%+ SiO₂ for filtration and blasting; glass grade is ultra-pure (99.5%+ SiO₂, Fe₂O₃ below 0.02%); foundry grade is refractory casting sand graded by AFS fineness; and frac grade is high-crush-strength proppant for oil and gas.',
        updated: '2026-07-23',
        readingTime: '6 min read',
        sections: [
            {
                heading: 'What decides a silica sand grade?',
                paragraphs: [
                    'Three properties do most of the work when classifying silica sand: chemical purity (how much of the sand is SiO₂), iron content (Fe₂O₃, which colours glass and affects some processes), and the physical grain size and shape (the particle size distribution, or PSD).',
                    'Different industries weight these differently. A glassmaker cares most about low iron and high purity; a foundry cares about grain shape, fineness and refractoriness; a builder mostly needs clean, well-graded sand.',
                ],
            },
            {
                heading: 'Grade-by-grade comparison',
                paragraphs: ['The table below summarises how the common grades differ and where each is used.'],
                table: [
                    ['Grade', 'Typical SiO₂', 'Key property', 'Main uses'],
                    ['Construction', 'Standard', 'Washed, well-graded, clay-free', 'Concrete, mortar, plaster, asphalt'],
                    ['Industrial', '99%+', 'High purity, precise grading', 'Water filtration, abrasive blasting, chemicals'],
                    ['Glass', '99.5%+', 'Ultra-low iron (Fe₂O₃ < 0.02%)', 'Container, flat and specialty glass'],
                    ['Foundry', 'High', 'Refractoriness, AFS grain fineness', 'Metal casting (moulding and core sand)'],
                    ['Frac', 'High', 'Crush strength, sphericity', 'Hydraulic fracturing proppant'],
                ],
            },
            {
                heading: 'Which grade do you need?',
                paragraphs: ['Match the grade to your process, then confirm the exact specification with your supplier before ordering.'],
                bullets: [
                    'Building and civil work → construction grade.',
                    'Water treatment, sandblasting or chemicals → industrial grade.',
                    'Glass of any kind → glass grade (check the iron limit).',
                    'Casting metal → foundry grade (specify your AFS number).',
                    'Oil and gas fracturing → frac grade (specify mesh and crush strength).',
                ],
            },
        ],
        faqs: [
            { question: 'What is the difference between construction and glass grade silica sand?', answer: 'Construction grade is washed building sand for concrete and mortar. Glass grade is far purer — 99.5%+ SiO₂ with Fe₂O₃ below 0.02% — so the glass comes out clear.' },
            { question: 'Which silica sand grade has the highest purity?', answer: 'Glass grade is typically the purest at 99.5%+ SiO₂ with the lowest iron content, followed by industrial grade at 99%+.' },
        ],
        relatedProducts: ['glass-sand', 'foundry-sand', 'industrial-sand'],
    },
    {
        slug: 'silica-sand-specifications',
        title: 'Silica Sand Specifications Buyers Should Check (SiO₂, Fe₂O₃, PSD, pH, LOI)',
        seoTitle: 'Silica Sand Specifications to Check Before Buying | Shiv Mines and Minerals',
        seoDescription: 'The specifications that matter when buying silica sand — SiO₂ purity, Fe₂O₃ (iron), particle size distribution, pH, moisture and loss on ignition (LOI) — explained simply.',
        intro: 'Before buying silica sand, check five specifications: SiO₂ purity (how much is silica), Fe₂O₃ (iron oxide content), particle size distribution or PSD (grain size range), pH and moisture, and loss on ignition (LOI). The right values depend on your application — glass needs very low iron, foundries need a target grain fineness, filtration needs a controlled size range.',
        updated: '2026-07-23',
        readingTime: '7 min read',
        sections: [
            {
                heading: 'SiO₂ purity',
                paragraphs: ['This is the percentage of the sand that is silicon dioxide. Higher purity means fewer contaminants. Glass and high-end industrial uses need 99%+; construction is less demanding.'],
            },
            {
                heading: 'Iron content (Fe₂O₃)',
                paragraphs: ['Iron oxide tints glass green or brown and can interfere with some processes. Glass grade sand keeps Fe₂O₃ below 0.02%. Always ask for the iron figure, not just the SiO₂ number.'],
            },
            {
                heading: 'Particle size distribution (PSD)',
                paragraphs: ['PSD describes the spread of grain sizes, usually as a sieve analysis or a mesh range. Filtration, foundry and frac applications each need a specific, consistent PSD. Ask for the sieve analysis.'],
            },
            {
                heading: 'pH, moisture and loss on ignition (LOI)',
                paragraphs: ['pH and moisture affect handling and downstream chemistry. LOI measures the material burnt off at high temperature (organics, carbonates) and matters for foundry and glass. Request these on the test report.'],
                bullets: [
                    'Ask for a recent laboratory test report, not just a datasheet.',
                    'Confirm the values are typical batch results, and whether they are guaranteed.',
                    'State your own target spec so the supplier can confirm they can meet it.',
                ],
            },
        ],
        faqs: [
            { question: 'What SiO₂ purity should I ask for?', answer: 'It depends on use: 99.5%+ for glass, 99%+ for demanding industrial uses, and standard washed grade for construction.' },
            { question: 'Why does iron content matter in silica sand?', answer: 'Iron oxide (Fe₂O₃) colours glass and affects some chemical and foundry processes, so low-iron sand is needed for clear glass and sensitive applications.' },
            { question: 'What is loss on ignition (LOI)?', answer: 'LOI is the mass lost when the sand is heated strongly, indicating organics or carbonates. It is important for foundry and glass grades.' },
        ],
        relatedProducts: ['glass-sand', 'industrial-sand', 'custom-specification'],
    },
    {
        slug: 'glass-vs-foundry-silica-sand',
        title: 'Glass Grade vs Foundry Grade Silica Sand: Key Differences',
        seoTitle: 'Glass Grade vs Foundry Grade Silica Sand — Key Differences | Shiv Mines',
        seoDescription: 'Glass grade vs foundry grade silica sand: how they differ in purity, iron content, grain shape and what each is used for, so you order the right one.',
        intro: 'Glass grade and foundry grade silica sand are optimised for different things. Glass grade is chosen for chemical purity — 99.5%+ SiO₂ and very low iron (Fe₂O₃ below 0.02%) — so glass is clear. Foundry grade is chosen for physical performance in casting — refractoriness, grain shape and a target AFS grain fineness — rather than maximum purity.',
        updated: '2026-07-23',
        readingTime: '5 min read',
        sections: [
            {
                heading: 'What glass grade optimises for',
                paragraphs: ['Glassmakers need sand that melts into clear, homogeneous glass. That means high SiO₂, very low iron, and controlled sizing for even melting. Processing usually includes washing, magnetic separation and precise sizing.'],
            },
            {
                heading: 'What foundry grade optimises for',
                paragraphs: ['Foundries pack sand into moulds and cores around molten metal. The sand must withstand high temperatures (refractoriness), let gases escape (permeability) and hold shape, so grain shape and a consistent AFS grain fineness number matter more than absolute purity.'],
            },
            {
                heading: 'Side-by-side',
                paragraphs: ['The essentials at a glance:'],
                table: [
                    ['Property', 'Glass grade', 'Foundry grade'],
                    ['Priority', 'Chemical purity', 'Physical performance'],
                    ['SiO₂', '99.5%+', 'High'],
                    ['Iron (Fe₂O₃)', 'Below 0.02%', 'Less critical'],
                    ['Key metric', 'Purity / clarity', 'AFS grain fineness, refractoriness'],
                    ['Use', 'Container, flat, specialty glass', 'Iron, steel, aluminium casting'],
                ],
            },
        ],
        faqs: [
            { question: 'Can foundry sand be used for glass?', answer: 'Usually no — foundry sand is selected for casting performance, not the ultra-low iron and high purity that clear glass needs.' },
            { question: 'Is glass grade sand more expensive than foundry grade?', answer: 'Glass grade generally involves more processing to reach high purity and low iron, so specifications and pricing differ. Ask for a quote against your exact requirement.' },
        ],
        relatedProducts: ['glass-sand', 'foundry-sand'],
    },
    {
        slug: 'silica-sand-price-india',
        title: 'Silica Sand Price in India: What Determines the Cost',
        seoTitle: 'Silica Sand Price in India — What Determines the Cost | Shiv Mines',
        seoDescription: 'What drives silica sand price in India — grade and SiO₂ purity, iron content, particle size, washing, packaging and freight — and how to get an accurate quote.',
        intro: 'Silica sand price in India depends mainly on grade and purity (higher SiO₂ and lower iron cost more), particle size and grading, the level of washing and processing, packaging (loose, jumbo bags), and freight to your location. Because these vary by order, most suppliers — including Shiv Mines and Minerals — quote per requirement rather than list a fixed rate.',
        updated: '2026-07-23',
        readingTime: '5 min read',
        sections: [
            {
                heading: 'What makes silica sand cost more or less',
                paragraphs: ['Two loads of silica sand can differ a lot in price. The main cost drivers are:'],
                bullets: [
                    'Grade and SiO₂ purity — glass grade (99.5%+) costs more than construction grade.',
                    'Iron content — low-iron sand for glass needs more processing.',
                    'Particle size / grading — a tight, custom sieve range costs more than run-of-mine.',
                    'Washing and drying — washed and dried sand costs more than raw sand.',
                    'Packaging — loose bulk vs jumbo bags vs small bags.',
                    'Freight — distance to your site and load size strongly affect delivered price.',
                ],
            },
            {
                heading: 'Why suppliers quote instead of listing a price',
                paragraphs: ['Because those factors change with every order, a single "per tonne" number rarely fits. The accurate way to price silica sand is to share your grade, specification, quantity and delivery location and get a quote for exactly that.'],
            },
            {
                heading: 'How to get an accurate silica sand quote',
                paragraphs: ['To get a firm price quickly, tell the supplier:'],
                bullets: [
                    'The grade or application (construction, industrial, glass, foundry, frac).',
                    'Target specification (SiO₂ %, Fe₂O₃, mesh/PSD, AFS if foundry).',
                    'Quantity and how often you need it.',
                    'Delivery location and packaging preference.',
                ],
            },
        ],
        faqs: [
            { question: 'What is the price of silica sand in India?', answer: 'It varies by grade, purity, particle size, packaging and freight, so it is quoted per order rather than fixed. Share your spec, quantity and location for an accurate quote.' },
            { question: 'Why is glass grade silica sand more expensive?', answer: 'Glass grade needs very high purity and very low iron, which requires more washing, separation and sizing than construction grade.' },
        ],
        relatedProducts: ['glass-sand', 'industrial-sand', 'construction-sand'],
    },
    {
        slug: 'silica-sand-uses',
        title: 'Silica Sand Uses: Industries and Applications',
        seoTitle: 'Silica Sand Uses — Industries and Applications | Shiv Mines and Minerals',
        seoDescription: 'The main uses of silica sand — glass, construction, foundry casting, water filtration, oil & gas (frac), chemicals and more — and which grade each application needs.',
        intro: 'Silica sand is used to make glass, in construction (concrete, mortar, plaster), as foundry moulding and core sand for metal casting, as water-filtration media, as a proppant in oil and gas fracturing, and in chemicals, ceramics and abrasives. Each use needs a specific grade — glassmaking needs high-purity low-iron sand, while construction uses standard washed sand.',
        updated: '2026-07-23',
        readingTime: '6 min read',
        sections: [
            {
                heading: 'The main uses of silica sand',
                paragraphs: ['Silica sand (SiO₂) is one of the most widely used industrial minerals. Its main applications are:'],
                bullets: [
                    'Glass manufacturing — container, flat, specialty and solar glass (needs glass grade).',
                    'Construction — concrete, mortar, plaster and asphalt (construction grade).',
                    'Foundry casting — moulding and core sand for iron, steel and aluminium (foundry grade).',
                    'Water treatment — filtration media (industrial grade, controlled sizing).',
                    'Oil and gas — proppant for hydraulic fracturing (frac grade).',
                    'Chemicals, ceramics, abrasives and glassfibre.',
                ],
            },
            {
                heading: 'Matching the grade to the use',
                paragraphs: ['The application decides the grade you need. Use this quick map:'],
                table: [
                    ['Application', 'Grade needed', 'Key requirement'],
                    ['Glass', 'Glass grade', 'High purity, very low iron'],
                    ['Construction', 'Construction grade', 'Clean, well graded'],
                    ['Metal casting', 'Foundry grade', 'AFS fineness, refractoriness'],
                    ['Water filtration', 'Industrial grade', 'Controlled particle size'],
                    ['Oil & gas', 'Frac grade', 'Crush strength, roundness'],
                ],
            },
        ],
        faqs: [
            { question: 'What is silica sand used for?', answer: 'Mainly glassmaking, construction, foundry metal casting, water filtration, oil & gas fracturing, and chemicals, ceramics and abrasives.' },
            { question: 'Which industry uses the most silica sand?', answer: 'The glass industry is typically the largest consumer, followed by construction and foundry.' },
        ],
        relatedProducts: ['glass-sand', 'construction-sand', 'foundry-sand'],
    },
];

export const getGuide = (slug: string): Guide | undefined => guides.find((g) => g.slug === slug);
