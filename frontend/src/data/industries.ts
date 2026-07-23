// Industry / application pages — commercial-intent spokes ("silica sand for [industry]").
// Each links into the relevant product money pages. Reuses the GuideSection shape.
import type { GuideSection } from './guides';

export interface Industry {
    slug: string;
    name: string;          // e.g. "Glass Manufacturing"
    h1: string;            // e.g. "Silica Sand for the Glass Industry"
    seoTitle: string;
    seoDescription: string;
    intro: string;         // answer-first
    image: string;
    sections: GuideSection[];
    faqs: { question: string; answer: string }[];
    relatedProducts: string[];
}

export const industries: Industry[] = [
    {
        slug: 'glass-manufacturing',
        name: 'Glass Manufacturing',
        h1: 'Silica Sand for the Glass Industry',
        seoTitle: 'Silica Sand for Glass Manufacturing (99.5% SiO₂, Low Iron) | Shiv Mines',
        seoDescription: 'Glass-grade silica sand for container, flat, specialty and solar glass — 99.5%+ SiO₂ with low iron. Supplied from Karauli, Rajasthan by Shiv Mines and Minerals.',
        intro: 'Glass manufacturing needs high-purity, low-iron silica sand (99.5%+ SiO₂, Fe₂O₃ below 0.02%) so the finished glass is clear and strong. Shiv Mines and Minerals supplies glass-grade silica sand for container, flat, specialty and solar glass from its Karauli, Rajasthan mines.',
        image: '/images/product-glass-sand.webp',
        sections: [
            { heading: 'Why glass needs high-purity silica', paragraphs: ['Silica is the main raw material in glass. Purity and iron content directly control the clarity, colour and strength of the finished glass, so glassmakers specify very high SiO₂ and very low Fe₂O₃.'] },
            { heading: 'Glass types we supply for', paragraphs: ['Our glass-grade sand suits a range of glass production:'], bullets: ['Container glass — bottles and jars', 'Flat glass — windows, mirrors, architectural glass', 'Specialty and optical glass', 'Solar glass for photovoltaic panels'] },
        ],
        faqs: [
            { question: 'What silica sand is used for glass?', answer: 'Glass grade silica sand — typically 99.5%+ SiO₂ with Fe₂O₃ below 0.02% — is used so the glass is clear and consistent.' },
            { question: 'Do you supply silica sand for solar glass?', answer: 'Yes. Our high-purity glass-grade sand is suitable for solar glass; share your specification for a quote.' },
        ],
        relatedProducts: ['glass-sand', 'custom-specification'],
    },
    {
        slug: 'foundry-metal-casting',
        name: 'Foundry & Metal Casting',
        h1: 'Silica Sand for Foundry & Metal Casting',
        seoTitle: 'Silica Sand for Foundry & Metal Casting (AFS Graded) | Shiv Mines',
        seoDescription: 'Foundry-grade silica sand for iron, steel and aluminium casting — controlled AFS grain fineness, high refractoriness and good permeability. From Karauli, Rajasthan.',
        intro: 'Foundries use silica sand as moulding and core sand to shape molten metal. It must be refractory, have a controlled AFS grain fineness and good permeability. Shiv Mines and Minerals supplies foundry-grade silica sand for iron, steel and aluminium casting.',
        image: '/images/foundry-sand.webp',
        sections: [
            { heading: 'What foundries need from silica sand', paragraphs: ['Casting sand must withstand molten metal (refractoriness), let gases escape (permeability) and hold shape at a consistent AFS grain fineness. These matter more than absolute chemical purity.'] },
            { heading: 'Applications in the foundry', paragraphs: ['Our foundry sand is used for:'], bullets: ['Moulding sand for iron and steel casting', 'Core sand for internal cavities', 'Non-ferrous (aluminium) casting'] },
        ],
        faqs: [
            { question: 'What grade of silica sand do foundries use?', answer: 'Foundry grade, specified by AFS grain fineness (commonly 55–65) with high refractoriness and good permeability.' },
            { question: 'Can you match our AFS number?', answer: 'Yes. Tell us your target AFS grain fineness and we will process to match.' },
        ],
        relatedProducts: ['foundry-sand', 'custom-specification'],
    },
    {
        slug: 'water-filtration',
        name: 'Water Filtration',
        h1: 'Silica Sand for Water Filtration',
        seoTitle: 'Silica Sand for Water Filtration & Treatment | Shiv Mines and Minerals',
        seoDescription: 'Graded silica sand filter media for water treatment plants, filtration systems and pool filters — high purity, uniform particle size. From Karauli, Rajasthan.',
        intro: 'Water filtration uses graded, high-purity silica sand as a filter medium to trap contaminants. It works because of its uniform particle size, chemical stability and durability. Shiv Mines and Minerals supplies filtration-grade silica sand to a specified particle size.',
        image: '/images/product-industrial-sand.webp',
        sections: [
            { heading: 'Why silica sand works as a filter medium', paragraphs: ['A uniform, well-graded sand bed removes suspended particles consistently and does not break down when exposed to typical water chemistry, making it a reliable filtration medium.'] },
            { heading: 'Where it is used', paragraphs: ['Filtration-grade silica sand is used in:'], bullets: ['Municipal and industrial water treatment plants', 'Rapid gravity and pressure sand filters', 'Swimming pool filters'] },
        ],
        faqs: [
            { question: 'What silica sand is used for water filtration?', answer: 'A high-purity, uniformly graded industrial silica sand, sized to the filter design, is used as the filter medium.' },
            { question: 'Can you supply a specific filtration grade?', answer: 'Yes. Share the particle size / grade your filter needs and we will supply to specification.' },
        ],
        relatedProducts: ['industrial-sand', 'custom-specification'],
    },
    {
        slug: 'construction-concrete',
        name: 'Construction & Concrete',
        h1: 'Silica Sand for Construction & Concrete',
        seoTitle: 'Silica Sand for Construction, Concrete & Plaster | Shiv Mines and Minerals',
        seoDescription: 'Washed, well-graded construction silica sand for concrete, mortar, plaster and asphalt. Clay-free and consistent. Supplied from Karauli, Rajasthan.',
        intro: 'Construction uses washed, well-graded silica sand in concrete, mortar, plaster and asphalt. Clean, clay-free sand improves strength and finish. Shiv Mines and Minerals mines and washes construction-grade silica sand on site in Karauli, Rajasthan.',
        image: '/images/construction-sand.webp',
        sections: [
            { heading: 'Why clean, graded sand matters in construction', paragraphs: ['Impurities like clay weaken concrete and mortar and spoil finishes. Washed, consistently graded sand gives predictable strength and workability.'] },
            { heading: 'Construction uses', paragraphs: ['Our construction sand is used for:'], bullets: ['Concrete production', 'Mortar and masonry', 'Wall and ceiling plastering', 'Asphalt and paving'] },
        ],
        faqs: [
            { question: 'Is silica sand good for construction?', answer: 'Yes. Washed, well-graded silica sand gives strength and a good finish in concrete, mortar and plaster.' },
            { question: 'Do you supply construction sand in bulk?', answer: 'Yes, in bulk and jumbo bags. Share your quantity and location for a quote.' },
        ],
        relatedProducts: ['construction-sand'],
    },
    {
        slug: 'oil-and-gas-fracturing',
        name: 'Oil & Gas (Fracturing)',
        h1: 'Silica Sand for Oil & Gas (Frac Sand)',
        seoTitle: 'Frac Sand for Oil & Gas Hydraulic Fracturing | Shiv Mines and Minerals',
        seoDescription: 'High-crush-strength frac sand (proppant) for hydraulic fracturing — high sphericity and conductivity. Supplied by Shiv Mines and Minerals, Rajasthan.',
        intro: 'Oil and gas fracturing uses frac sand as a proppant that holds fractures open so hydrocarbons can flow. It needs high crush strength, roundness and conductivity. Shiv Mines and Minerals supplies monocrystalline frac sand for these operations.',
        image: '/images/1.webp',
        sections: [
            { heading: 'What makes good frac sand', paragraphs: ['A proppant must survive high closure stresses (crush strength) and stay conductive, which depends on grain roundness, sphericity and consistent sizing.'] },
            { heading: 'Uses in the field', paragraphs: ['Frac sand is used for:'], bullets: ['Hydraulic fracturing (keeping fractures open)', 'Well stimulation and flow enhancement', 'Deep-well operations under high pressure'] },
        ],
        faqs: [
            { question: 'What is frac sand used for?', answer: 'It is a proppant used in hydraulic fracturing to keep fractures open so oil and gas can flow.' },
            { question: 'What properties matter for frac sand?', answer: 'High crush strength, high sphericity and roundness, and consistent mesh sizing.' },
        ],
        relatedProducts: ['frac-sand', 'custom-specification'],
    },
    {
        slug: 'paints-and-coatings',
        name: 'Paints & Coatings',
        h1: 'Silica Sand for Paints & Coatings',
        seoTitle: 'Silica (Fine Silica / Quartz) for Paints & Coatings | Shiv Mines',
        seoDescription: 'Fine silica for paints and coatings — improves durability, brightness, colour consistency and oil absorption. Custom-graded silica from Karauli, Rajasthan.',
        intro: 'Paints and coatings use fine, high-purity silica as a functional filler to improve durability, brightness, colour consistency and oil absorption. Shiv Mines and Minerals can supply custom-graded silica for these formulations.',
        image: '/images/sand-texture.webp',
        sections: [
            { heading: 'What silica adds to paints and coatings', paragraphs: ['Fine silica improves scrub and weather resistance, tint strength and film durability, and helps control sheen — which is why it is a common functional filler.'] },
            { heading: 'Typical requirements', paragraphs: ['Paint and coating applications usually need:'], bullets: ['High chemical purity', 'A fine, controlled particle size', 'Low impurity and low moisture'] },
        ],
        faqs: [
            { question: 'Is silica used in paint?', answer: 'Yes. Fine silica is used as a functional filler in paints and coatings to improve durability, brightness and finish.' },
            { question: 'Can you supply fine silica to a specification?', answer: 'Yes. Share your target purity and particle size and we will supply custom-graded silica.' },
        ],
        relatedProducts: ['custom-specification', 'industrial-sand'],
    },
    {
        slug: 'ceramics-and-tiles',
        name: 'Ceramics & Tiles',
        h1: 'Silica Sand for Ceramics & Tiles',
        seoTitle: 'Silica Sand for Ceramics & Tiles | Shiv Mines and Minerals',
        seoDescription: 'Silica for the ceramics and tile industry — controls drying and shrinkage and improves structural integrity. Custom-graded silica from Karauli, Rajasthan.',
        intro: 'Ceramics and tile manufacturing uses ground silica to regulate drying and shrinkage and to improve the structural integrity of the body and glaze. Shiv Mines and Minerals supplies custom-graded silica for ceramic applications.',
        image: '/images/sand-texture.webp',
        sections: [
            { heading: 'The role of silica in ceramics', paragraphs: ['Silica acts as a filler and network former in ceramic bodies and glazes, helping control shrinkage during drying and firing and improving strength.'] },
            { heading: 'Typical requirements', paragraphs: ['Ceramic applications generally need consistent purity and a controlled particle size, which we can grade to your specification.'] },
        ],
        faqs: [
            { question: 'Is silica used in ceramics?', answer: 'Yes. Ground silica is used in ceramic bodies and glazes to control drying and shrinkage and improve structural integrity.' },
            { question: 'Can you supply silica for tile manufacturing?', answer: 'Yes, custom-graded to your purity and particle size requirements.' },
        ],
        relatedProducts: ['custom-specification', 'industrial-sand'],
    },
    {
        slug: 'sports-turf-and-golf',
        name: 'Sports Turf & Golf',
        h1: 'Silica Sand for Sports Turf & Golf Courses',
        seoTitle: 'Silica Sand for Golf Courses, Sports Fields & Turf | Shiv Mines',
        seoDescription: 'Silica sand for golf course bunkers and greens, sports fields and artificial turf infill — good drainage, permeability and durability. From Karauli, Rajasthan.',
        intro: 'Golf courses, sports fields and artificial turf use silica sand for drainage, permeability and durability — in bunkers and greens, for root aeration and top dressing, and as turf infill. Shiv Mines and Minerals supplies graded silica sand for these uses.',
        image: '/images/3.webp',
        sections: [
            { heading: 'Why silica sand suits sports surfaces', paragraphs: ['Its natural grain shape and controlled particle size give the drainage, permeability and compaction that greens, bunkers and synthetic turf need for stability and healthy growth.'] },
            { heading: 'Where it is used', paragraphs: ['Sports and turf uses include:'], bullets: ['Golf bunkers and greens', 'Top dressing and root aeration', 'Sports field construction', 'Artificial / synthetic turf infill'] },
        ],
        faqs: [
            { question: 'What sand is used for golf courses?', answer: 'A graded silica sand with good drainage and the right particle size is used for bunkers, greens and top dressing.' },
            { question: 'Can you supply turf infill sand?', answer: 'Yes. Share the grade / particle size your turf system needs and we will supply to specification.' },
        ],
        relatedProducts: ['construction-sand', 'custom-specification'],
    },
    {
        slug: 'adhesives-and-tile-compounds',
        name: 'Adhesives & Tile Compounds',
        h1: 'Silica Powder for Adhesives, Tile Compounds & Wall Putty',
        seoTitle: 'Silica Powder for Adhesives, Tile Compounds & Wall Putty | Shiv Mines',
        seoDescription: 'High-whiteness silica (quartz) powder in 100 & 200 mesh for tile adhesives, wall putty and construction compounds — low iron, consistent grading. From Karauli, Rajasthan.',
        intro: 'Tile adhesives, wall putty and construction compounds use fine silica (quartz) powder as a functional filler for strength, workability and a clean white finish. Shiv Mines and Minerals supplies high-whiteness silica powder in 100 and 200 mesh for these compounds.',
        image: '/images/sand-texture.webp',
        sections: [
            { heading: 'Why silica powder is used in adhesives and putty', paragraphs: ['Fine silica powder adds body, controls consistency and improves durability in tile adhesives, wall putty and jointing compounds. High whiteness (84–87% in our lab analysis) keeps the finished compound bright.'] },
            { heading: 'What we supply', paragraphs: ['We supply ground silica (quartz) powder for these uses:'], bullets: ['Tile adhesive and jointing compounds', 'Wall putty and skim coats', 'Construction and repair compounds', '100 mesh and 200 mesh grades'] },
        ],
        faqs: [
            { question: 'What silica is used in tile adhesive and wall putty?', answer: 'Fine silica (quartz) powder, commonly 100 or 200 mesh, is used as a functional filler for strength, consistency and a white finish.' },
            { question: 'What mesh do you supply for putty compounds?', answer: 'We commonly supply 100 mesh and 200 mesh silica powder, and can grind to other grades on request.' },
        ],
        relatedProducts: ['silica-powder', 'custom-specification'],
    },
    {
        slug: 'metal-polishing-compounds',
        name: 'Metal Polishing Compounds',
        h1: 'Silica Powder for Metal Polishing Compounds & Luster Bars',
        seoTitle: 'Silica Powder for Metal Polishing Compounds & Luster Bars | Shiv Mines',
        seoDescription: 'Fine, high-whiteness silica (quartz) powder for metal polishing compounds and luster bars — low iron, consistent 100/200 mesh grading. From Karauli, Rajasthan.',
        intro: 'Metal polishing compounds and luster (lustre) bars use fine, high-whiteness silica (quartz) powder as an abrasive and filler. Shiv Mines and Minerals supplies low-iron silica powder in 100 and 200 mesh suitable for polishing-compound manufacturing.',
        image: '/images/sand-texture.webp',
        sections: [
            { heading: 'Silica powder in polishing compounds', paragraphs: ['Fine silica powder provides controlled abrasion and body in polishing compounds and luster bars. Low iron and high whiteness keep the compound clean and consistent.'] },
            { heading: 'What we supply', paragraphs: ['For polishing-compound manufacturers we supply:'], bullets: ['Fine silica (quartz) powder, 100 and 200 mesh', 'High whiteness (84–87% in lab analysis)', 'Low iron (Fe₂O₃ from 0.076%)', 'Custom mesh on request'] },
        ],
        faqs: [
            { question: 'Is silica powder used in metal polishing compounds?', answer: 'Yes. Fine, high-whiteness silica (quartz) powder is used as an abrasive and filler in polishing compounds and luster bars.' },
            { question: 'What grade of silica powder do you supply for polishing?', answer: 'Low-iron silica powder in 100 and 200 mesh, with custom mesh available on request.' },
        ],
        relatedProducts: ['silica-powder', 'custom-specification'],
    },
];

export const getIndustry = (slug: string): Industry | undefined => industries.find((i) => i.slug === slug);

/** Industries that list this product as a recommended grade (reverse of relatedProducts). */
export const getIndustriesForProduct = (productSlug: string): Industry[] =>
    industries.filter((i) => i.relatedProducts.includes(productSlug));
