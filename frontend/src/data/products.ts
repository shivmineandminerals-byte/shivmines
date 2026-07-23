// Single source of truth for all silica sand products.
// Used by Products.tsx (grid + ItemList schema) and ProductDetail.tsx (detail + Product/FAQ schema).
// Keeping all 6 products here fixes the earlier orphan-page problem (frac-sand + custom-specification
// were in the sitemap but missing from the grid).

export interface ProductFAQ {
    question: string;
    answer: string;
}

export interface ProductSpec {
    label: string;
    value: string;
}

export interface ProductItem {
    slug: string;
    name: string;
    seoTitle: string;
    seoDescription: string;
    /** Short one-liner for the grid card. */
    shortDescription: string;
    /** Self-contained 1–3 sentence direct answer, front-loaded for AI Overviews / featured snippets. */
    answerSnippet: string;
    description: string;
    image: string;
    applications: { title: string; description: string }[];
    features: { title: string; description: string }[];
    specs: ProductSpec[];
    faqs: ProductFAQ[];
}

export const products: ProductItem[] = [
    {
        slug: 'construction-sand',
        name: 'Construction Sand',
        seoTitle: 'Construction Grade Silica Sand Supplier in Rajasthan | Shiv Mines and Minerals',
        seoDescription: 'Washed, clay-free construction grade silica sand for concrete, mortar, plastering and asphalt. Consistent grading from our Karauli, Rajasthan mines. Request a quote.',
        shortDescription: 'Washed, clay-free silica sand for concrete, mortar, plastering and asphalt.',
        answerSnippet: 'Construction grade silica sand is a washed, consistently graded quartz sand used in concrete, mortar, plastering and asphalt. Shiv Mines and Minerals mines and washes it on site in Karauli, Rajasthan so it is free of clay and other impurities.',
        description: 'Shiv Mines and Minerals provides construction grade silica sand valued for its strength, durability and workability. The sand is mined from selected deposits and washed on site to remove clay and other adulterants, which is essential for construction work where stability and longevity matter. With an even granular size and dense structure it suits masonry, plastering and concrete production.',
        image: '/images/construction-sand.webp',
        applications: [
            { title: 'Masonry Works', description: 'Solid base for bricklaying and stonework, with excellent bonding for mortar.' },
            { title: 'Plastering Work', description: 'Finer, washed texture gives an even finish on wall and ceiling plastering.' },
            { title: 'Concrete Work', description: 'Key constituent in concrete mixes for required strength and durability.' },
        ],
        features: [
            { title: 'Washed and Clean', description: 'Free from clay and other impurities for reliable workability.' },
            { title: 'Strength and Durability', description: 'Adds strength to masonry, plaster and concrete works.' },
            { title: 'Consistent Grading', description: 'Uniform particle size distribution for predictable performance.' },
        ],
        specs: [
            { label: 'SiO₂ purity', value: '≈ 98.5%' },
            { label: 'Typical mesh', value: '20–40' },
            { label: 'Grade', value: 'Construction / building grade' },
            { label: 'Processing', value: 'Mined and washed on site' },
            { label: 'Typical uses', value: 'Concrete, mortar, plaster, asphalt' },
            { label: 'Packaging', value: 'Bulk / jumbo bags (as required)' },
        ],
        faqs: [
            { question: 'What is construction grade silica sand used for?', answer: 'It is used in concrete, mortar, plastering, brickwork and asphalt, where clean, well-graded sand improves strength and finish.' },
            { question: 'Is the sand washed?', answer: 'Yes. It is washed on site at our Karauli mines to remove clay and other impurities before dispatch.' },
            { question: 'Can you supply in bulk for large projects?', answer: 'Yes, we supply in bulk and jumbo bags. Share your quantity and delivery location and we will send a quote.' },
        ],
    },
    {
        slug: 'industrial-sand',
        name: 'Industrial Sand',
        seoTitle: 'Industrial Silica Sand (99%+ SiO₂) Supplier in Rajasthan | Shiv Mines and Minerals',
        seoDescription: 'High-purity industrial silica sand with 99%+ SiO₂ for water filtration, abrasive blasting and chemical processing. Precisely graded in Karauli, Rajasthan. Request a quote.',
        shortDescription: 'High-purity (99%+ SiO₂) sand for filtration, blasting and chemical processing.',
        answerSnippet: 'Industrial silica sand is a high-purity quartz sand (typically 99%+ SiO₂) used for water filtration, abrasive blasting and chemical processing. Shiv Mines and Minerals grades it precisely for demanding industrial applications.',
        description: 'Shiv Mines and Minerals offers industrial silica sand processed for demanding applications that require high purity and precise specifications. It undergoes quality control to reach 99%+ silica content with minimal impurities and is graded to meet the standards of water treatment, abrasive blasting and chemical manufacturing.',
        image: '/images/product-industrial-sand.webp',
        applications: [
            { title: 'Water Filtration', description: 'Suited to water treatment plants and filtration systems.' },
            { title: 'Abrasive Blasting', description: 'Consistent particle size for sandblasting operations.' },
            { title: 'Chemical Processing', description: 'High-purity silica for chemical manufacturing.' },
        ],
        features: [
            { title: 'High Purity', description: '99%+ silica content with minimal iron oxide and other impurities.' },
            { title: 'Precise Grading', description: 'Carefully controlled particle size distribution.' },
            { title: 'Thermal Stability', description: 'Good heat resistance for high-temperature applications.' },
        ],
        specs: [
            { label: 'SiO₂ purity', value: '≈ 99.2%' },
            { label: 'Typical mesh', value: '40–70' },
            { label: 'Grade', value: 'Industrial grade' },
            { label: 'Typical uses', value: 'Filtration, blasting, chemicals' },
            { label: 'Grading', value: 'Custom particle size on request' },
        ],
        faqs: [
            { question: 'What SiO₂ purity does industrial silica sand have?', answer: 'Our industrial grade typically reaches 99%+ SiO₂ with low iron oxide and impurity levels.' },
            { question: 'Which industries use industrial silica sand?', answer: 'Water treatment, abrasive blasting, foundries, glass, and chemical manufacturing are common users.' },
            { question: 'Can particle size be customised?', answer: 'Yes. Share your required particle size distribution and we will grade to your specification.' },
        ],
    },
    {
        slug: 'foundry-sand',
        name: 'Foundry Sand',
        seoTitle: 'Foundry Grade Silica Sand for Metal Casting | Shiv Mines and Minerals',
        seoDescription: 'Foundry grade silica sand for iron, steel and aluminium casting — controlled AFS grain fineness, high refractoriness and good permeability. From Karauli, Rajasthan.',
        shortDescription: 'Metal-casting sand with controlled AFS fineness and high refractoriness.',
        answerSnippet: 'Foundry grade silica sand is a refractory quartz sand used as moulding and core sand for casting iron, steel and aluminium. Shiv Mines and Minerals processes it to a consistent AFS grain fineness with high refractoriness and good permeability.',
        description: 'Shiv Mines and Minerals supplies foundry silica sand engineered for metal casting. It offers a suitable grain shape, high refractoriness and good permeability — the properties needed for quality castings — and is processed for a consistent AFS grain fineness number and low acid demand.',
        image: '/images/foundry-sand.webp',
        applications: [
            { title: 'Iron & Steel Casting', description: 'High refractoriness withstands molten metal temperatures.' },
            { title: 'Aluminium Casting', description: 'Good surface finish for non-ferrous casting.' },
            { title: 'Core Making', description: 'Suitable permeability for complex internal cavities.' },
        ],
        features: [
            { title: 'High Refractoriness', description: 'Withstands high casting temperatures without degradation.' },
            { title: 'Controlled Grain Shape', description: 'Sub-angular to rounded grains for good flowability.' },
            { title: 'Good Permeability', description: 'Allows gases to escape during casting.' },
        ],
        specs: [
            { label: 'SiO₂ purity', value: '≈ 99.0%' },
            { label: 'AFS grain fineness', value: '55–65 (to specification)' },
            { label: 'Grade', value: 'Foundry grade' },
            { label: 'Typical uses', value: 'Moulding sand, core sand' },
            { label: 'Metals', value: 'Iron, steel, aluminium' },
        ],
        faqs: [
            { question: 'What is AFS grain fineness number?', answer: 'The AFS (American Foundry Society) grain fineness number describes the average grain size of foundry sand. We supply to your target AFS value.' },
            { question: 'Which metals can this sand be used to cast?', answer: 'It is suitable for iron, steel and aluminium casting as moulding and core sand.' },
            { question: 'Do you supply to a specified AFS number?', answer: 'Yes. Tell us your required AFS grain fineness and we will process to match.' },
        ],
    },
    {
        slug: 'glass-sand',
        name: 'Glass Sand',
        seoTitle: 'Glass Grade Silica Sand (99.5% SiO₂, Low Iron) | Shiv Mines and Minerals',
        seoDescription: 'Ultra-pure glass grade silica sand — 99.5%+ SiO₂ with Fe₂O₃ below 0.02% — for container glass, flat glass and specialty glass. Supplied from Karauli, Rajasthan.',
        shortDescription: 'Ultra-low-iron glass grade silica at 99.5%+ SiO₂.',
        answerSnippet: 'Glass grade silica sand is a high-purity quartz sand (≥99.5% SiO₂ with Fe₂O₃ below 0.02%) used to manufacture clear container, flat and specialty glass. Shiv Mines and Minerals produces it at its Karauli, Rajasthan mines.',
        description: 'Shiv Mines and Minerals produces ultra-pure glass silica sand meeting the specifications required by glass manufacturers. It has an exceptionally low iron content (below 0.02% Fe₂O₃) for crystal-clear glass and is processed through washing, magnetic separation and precise sizing.',
        image: '/images/product-glass-sand.webp',
        applications: [
            { title: 'Container Glass', description: 'For manufacturing bottles and jars.' },
            { title: 'Flat Glass', description: 'Ultra-pure silica for windows, mirrors and architectural glass.' },
            { title: 'Specialty Glass', description: 'High-purity sand for optical glass and solar panels.' },
        ],
        features: [
            { title: 'Ultra-Low Iron', description: 'Fe₂O₃ content below 0.02% for crystal-clear glass.' },
            { title: 'High Silica Purity', description: '99.5%+ SiO₂ meeting international standards.' },
            { title: 'Controlled Particle Size', description: 'Precise sizing for even melting and homogeneity.' },
        ],
        specs: [
            { label: 'SiO₂ purity', value: '99.5%+' },
            { label: 'Fe₂O₃', value: 'Below 0.02%' },
            { label: 'Processing', value: 'Washed, magnetically separated, sized' },
            { label: 'Typical uses', value: 'Container, flat and specialty glass' },
        ],
        faqs: [
            { question: 'What purity is glass grade silica sand?', answer: 'Our glass grade silica sand is 99.5%+ SiO₂ with Fe₂O₃ (iron oxide) below 0.02%, giving crystal-clear glass.' },
            { question: 'Why is low iron content important for glass?', answer: 'Iron oxide adds a green/brown tint to glass. Keeping Fe₂O₃ below 0.02% keeps the glass clear.' },
            { question: 'What types of glass can this sand be used for?', answer: 'Container glass (bottles, jars), flat glass (windows, mirrors) and specialty/optical glass.' },
        ],
    },
    {
        slug: 'frac-sand',
        name: 'Frac Sand (Oil & Gas)',
        seoTitle: 'Frac Sand for Oil & Gas — High Crush Strength Proppant | Shiv Mines and Minerals',
        seoDescription: 'Monocrystalline frac sand (proppant) for hydraulic fracturing — high crush strength, sphericity and conductivity. Supplied by Shiv Mines and Minerals, Rajasthan.',
        shortDescription: 'High-crush-strength monocrystalline proppant for hydraulic fracturing.',
        answerSnippet: 'Frac sand is a high-strength, well-rounded silica sand used as a proppant to hold hydraulic-fracturing fractures open in oil and gas wells. Shiv Mines and Minerals supplies monocrystalline frac sand with high crush strength, sphericity and conductivity.',
        description: 'Shiv Mines and Minerals provides frac sand engineered for the oil and gas industry\'s hydraulic fracturing operations. This monocrystalline silica sand offers high crush strength, sphericity and roundness — properties that support conductivity and sustained production in demanding reservoir conditions.',
        image: '/images/frac-sand.png',
        applications: [
            { title: 'Hydraulic Fracturing', description: 'Keeps fractures open for efficient hydrocarbon extraction.' },
            { title: 'Well Stimulation', description: 'Enhances flow rates and well productivity.' },
            { title: 'Deep Well Operations', description: 'Maintains integrity under high downhole pressures.' },
        ],
        features: [
            { title: 'High Crush Strength', description: 'Withstands closure stresses of deep formations.' },
            { title: 'High Sphericity & Roundness', description: 'Optimises permeability and fluid flow.' },
            { title: 'Good Conductivity', description: 'Supports long-term well production.' },
        ],
        specs: [
            { label: 'Type', value: 'Monocrystalline silica proppant' },
            { label: 'Key property', value: 'High crush strength' },
            { label: 'Shape', value: 'High sphericity & roundness' },
            { label: 'Typical uses', value: 'Hydraulic fracturing, well stimulation' },
        ],
        faqs: [
            { question: 'What is frac sand?', answer: 'Frac sand is a high-strength, rounded silica sand used as a proppant to keep hydraulic-fracturing fractures open so oil and gas can flow.' },
            { question: 'What makes good frac sand?', answer: 'High crush strength, high sphericity and roundness, and consistent sizing for conductivity.' },
            { question: 'Can you supply to a required mesh size?', answer: 'Yes. Share your required mesh/size and crush-strength spec and we will advise.' },
        ],
    },
    {
        slug: 'custom-specification',
        name: 'Custom Specification Sand',
        seoTitle: 'Custom Silica Sand Specifications & Grading | Shiv Mines and Minerals',
        seoDescription: 'Need a specific silica sand grade? We offer custom mining, washing and sizing — tailored SiO₂ purity, iron content and particle size distribution. Karauli, Rajasthan.',
        shortDescription: 'Tailored SiO₂ purity, iron content and particle size to your spec.',
        answerSnippet: 'Custom specification silica sand is silica sand processed to a buyer\'s exact chemistry and particle size distribution. Shiv Mines and Minerals offers custom mining, washing and sizing to target specific SiO₂ purity, iron content and PSD.',
        description: 'Some applications need silica sand specifications outside standard grades. Shiv Mines and Minerals offers custom mining, washing and sizing to deliver sand engineered to your chemical and physical requirements, adjusting SiO₂ purity, iron content and particle size distribution (PSD) to your needs.',
        image: '/images/custom-specification-sand.png',
        applications: [
            { title: 'Specialty Manufacturing', description: 'Tailored silica for unique industrial or chemical processes.' },
            { title: 'Advanced Ceramics', description: 'Custom-graded sand for specialised ceramic production.' },
            { title: 'Specific Filtration Needs', description: 'Custom-sized media for specialised water treatment.' },
        ],
        features: [
            { title: 'Custom PSD', description: 'Precise particle size distribution to your sieve requirements.' },
            { title: 'Controlled Chemistry', description: 'Customised purity targeting specific SiO₂ and Fe₂O₃ limits.' },
            { title: 'Scalable Production', description: 'From specialised small batches to large-volume orders.' },
        ],
        specs: [
            { label: 'SiO₂ purity', value: 'To your specification' },
            { label: 'Fe₂O₃', value: 'To your specification' },
            { label: 'PSD', value: 'Custom particle size distribution' },
            { label: 'Volume', value: 'Small batch to bulk' },
        ],
        faqs: [
            { question: 'Can you match a specific silica sand specification?', answer: 'Yes. We adjust SiO₂ purity, iron content and particle size distribution to your chemical and physical requirements.' },
            { question: 'Do you handle both small and large volumes?', answer: 'Yes, from specialised small batches to large-volume orders.' },
            { question: 'How do I request a custom grade?', answer: 'Send us your target specification (purity, Fe₂O₃, PSD, volume) and we will confirm feasibility and pricing.' },
        ],
    },
    {
        slug: 'silica-powder',
        name: 'Silica Powder (Quartz Powder)',
        seoTitle: 'Silica Powder (Quartz Powder) 100 & 200 Mesh Supplier | Shiv Mines and Minerals',
        seoDescription: 'Ground silica / quartz powder in 100 and 200 mesh — high whiteness, low iron (Fe₂O₃ from 0.076%). For adhesives, tile compounds, wall putty, metal polishing compounds, paints and ceramics. Lab-tested.',
        shortDescription: 'Ground quartz powder in 100 & 200 mesh for adhesives, putty, polishing and paints.',
        answerSnippet: 'Silica powder (quartz powder) is finely ground silica supplied in mesh grades such as 100 and 200 mesh. Shiv Mines and Minerals produces high-whiteness, low-iron silica powder (SiO₂ ~96–97%) for adhesives, tile compounds, wall putty, metal polishing compounds, paints and ceramics.',
        description: 'Shiv Mines and Minerals produces silica powder (also called quartz powder or pisai powder) by grinding its silica to fine mesh grades, commonly 100 mesh and 200 mesh. Independent laboratory analysis shows high silica content (SiO₂ ~96–97%), low iron (Fe₂O₃ from 0.076%) and high whiteness (84–87%), which makes it suitable for adhesives, tile and wall-putty compounds, metal polishing compounds (luster bars), paints and ceramics.',
        image: '/images/silica-powder.png',
        applications: [
            { title: 'Adhesives & Tile Compounds', description: 'Functional filler for tile adhesives, wall putty and construction compounds.' },
            { title: 'Metal Polishing Compounds', description: 'Fine, high-whiteness powder used in polishing compounds and luster bars.' },
            { title: 'Paints & Coatings', description: 'Improves durability, brightness and finish as a functional filler.' },
            { title: 'Ceramics', description: 'Controls drying and shrinkage and improves structural integrity.' },
        ],
        features: [
            { title: 'High Whiteness', description: 'Lab whiteness of 84–87% (L value ~82.5).' },
            { title: 'Low Iron', description: 'Fe₂O₃ from 0.076% keeps the powder bright and clean.' },
            { title: 'Consistent Mesh', description: 'Ground to 100 or 200 mesh to your requirement.' },
        ],
        specs: [
            { label: 'SiO₂ purity', value: '≈ 96–97.5%' },
            { label: 'Fe₂O₃ (iron)', value: '0.076–0.173%' },
            { label: 'Whiteness', value: '84–87%' },
            { label: 'Mesh grades', value: '100 mesh, 200 mesh' },
            { label: 'Also known as', value: 'Quartz powder / pisai powder' },
        ],
        faqs: [
            { question: 'What mesh sizes of silica powder do you supply?', answer: 'We commonly supply 100 mesh and 200 mesh silica (quartz) powder, and can grind to other mesh grades on request.' },
            { question: 'What is silica powder used for?', answer: 'It is used as a functional filler in adhesives, tile compounds, wall putty, metal polishing compounds (luster bars), paints and ceramics.' },
            { question: 'What is the whiteness and iron content?', answer: 'Independent lab analysis shows whiteness of 84–87% and Fe₂O₃ (iron oxide) from 0.076%, giving a bright, clean powder.' },
        ],
    },
    {
        slug: 'metal-polishing-compound',
        name: 'Metal Polishing Compound (Luster Bar)',
        seoTitle: 'Metal Polishing Compound & Luster Bar Supplier | Shiv Mines and Minerals',
        seoDescription: 'Silica-based metal polishing compound (luster bar) for buffing and shining stainless steel, brass, aluminium and utensils. High-whiteness, low-iron silica base. Request a quote.',
        shortDescription: 'Silica-based polishing bar for buffing and shining metals.',
        answerSnippet: 'A metal polishing compound (luster bar) is a solid buffing bar used on polishing wheels to shine metals such as stainless steel, brass and aluminium. Shiv Mines and Minerals makes it from high-whiteness, low-iron silica powder for a clean, consistent finish.',
        description: 'Shiv Mines and Minerals supplies metal polishing compound in luster (lustre) bar form, made from our high-whiteness, low-iron silica powder. Applied on buffing wheels, it cleans and brings a bright shine to stainless steel, brass, aluminium and utensils. Because we control the silica base, the abrasive is consistent from batch to batch.',
        image: '/images/metal-polishing-compound.png',
        applications: [
            { title: 'Stainless Steel & Utensils', description: 'Buffing and shining stainless steel sheets, utensils and hardware.' },
            { title: 'Brass & Aluminium', description: 'Bringing a bright finish to brass and aluminium components.' },
            { title: 'Buffing & Finishing', description: 'For use with polishing / buffing wheels in metal finishing.' },
        ],
        features: [
            { title: 'Consistent Abrasive', description: 'Made from controlled, uniform silica powder for a repeatable cut.' },
            { title: 'High Whiteness, Low Iron', description: 'Bright, clean silica base (whiteness 84–87%, Fe₂O₃ from 0.076%).' },
            { title: 'Bar Form', description: 'Solid luster-bar form for easy application on buffing wheels.' },
        ],
        specs: [
            { label: 'Form', value: 'Solid bar (luster bar)' },
            { label: 'Base material', value: 'High-whiteness silica powder' },
            { label: 'Typical uses', value: 'Buffing steel, brass, aluminium' },
            { label: 'Packaging', value: 'As required (quote-based)' },
        ],
        faqs: [
            { question: 'What is a luster bar?', answer: 'A luster (lustre) bar is a solid polishing compound applied on a buffing wheel to clean and shine metals such as steel, brass and aluminium.' },
            { question: 'What metals can it polish?', answer: 'It is used for stainless steel, brass, aluminium, utensils and general metal finishing.' },
            { question: 'Can you supply in bulk?', answer: 'Yes. Share your quantity and requirement and we will send a quote.' },
        ],
    },
    {
        slug: 'adhesive-tile-compound',
        name: 'Adhesive & Tile Compound',
        seoTitle: 'Tile Adhesive & Construction Compound Supplier | Shiv Mines and Minerals',
        seoDescription: 'Silica-based adhesive and tile compound for fixing wall and floor tiles, stone and cladding — strong bond, workable, high-whiteness silica filler. Request a quote.',
        shortDescription: 'Silica-based adhesive / tile-fixing compound for wall and floor tiles.',
        answerSnippet: 'An adhesive and tile compound is a cement-and-silica based mix used to fix wall and floor tiles, stone and cladding with a strong, durable bond. Shiv Mines and Minerals makes it with high-whiteness, low-iron silica powder for consistency and a clean finish.',
        description: 'Shiv Mines and Minerals supplies adhesive and tile compound built on our high-whiteness silica powder. It is used to fix wall and floor tiles, stone and cladding, giving a strong bond with good workability. Controlling the silica filler keeps the compound consistent batch to batch.',
        image: '/images/adhesive-tile-compound.png',
        applications: [
            { title: 'Wall & Floor Tiling', description: 'Fixing ceramic and vitrified wall and floor tiles.' },
            { title: 'Stone & Cladding', description: 'Bonding stone and cladding to prepared surfaces.' },
            { title: 'Repair & Fixing', description: 'General tile fixing and repair in construction.' },
        ],
        features: [
            { title: 'Strong Bond', description: 'Reliable adhesion for lasting tile and stone fixing.' },
            { title: 'Workable Mix', description: 'Good consistency for easy application.' },
            { title: 'Quality Silica Filler', description: 'High-whiteness, low-iron silica powder base.' },
        ],
        specs: [
            { label: 'Type', value: 'Adhesive / tile-fixing compound' },
            { label: 'Base filler', value: 'High-whiteness silica powder' },
            { label: 'Typical uses', value: 'Wall & floor tiles, stone, cladding' },
            { label: 'Packaging', value: 'As required (quote-based)' },
        ],
        faqs: [
            { question: 'What is tile adhesive compound used for?', answer: 'It is used to fix wall and floor tiles, stone and cladding with a strong, durable bond.' },
            { question: 'What is it made from?', answer: 'It is a cement-and-silica based compound using our high-whiteness, low-iron silica powder as the filler.' },
            { question: 'Do you supply in bulk?', answer: 'Yes. Share your quantity and requirement for a quote.' },
        ],
    },
];

export const getProduct = (slug: string): ProductItem | undefined =>
    products.find((p) => p.slug === slug);
