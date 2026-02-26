import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProductsSection from "@/components/ProductsSection";
import OperationsSection from "@/components/OperationsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEOHead from "@/components/SEOHead";

const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Shiv Mines and Minerals",
    "alternateName": "Shiv Minerals",
    "url": "https://shivmines.in",
    "logo": "https://shivmines.in/vite.svg",
    "description": "Rajasthan's #1 silica mines — leading silica sand mining company based in Karauli, Rajasthan since 2006. Premium construction, industrial, foundry & glass grade silica sand supplier from our mines in Rajasthan.",
    "foundingDate": "2006",
    "numberOfEmployees": { "@type": "QuantitativeValue", "minValue": 50 },
    "areaServed": [
        { "@type": "Country", "name": "India" },
        { "@type": "State", "name": "Rajasthan" },
        { "@type": "Country", "name": "Worldwide" }
    ],
    "knowsAbout": [
        "Silica Sand Mining",
        "Silica Sand Processing",
        "Construction Sand",
        "Industrial Sand",
        "Glass Sand Manufacturing",
        "Foundry Sand",
        "Mineral Extraction"
    ],
    "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-9116758641",
        "contactType": "sales",
        "email": "shivmineandminerals@gmail.com",
        "areaServed": "Worldwide",
        "availableLanguage": ["English", "Hindi"]
    },
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "Mining Lease M.L.No. 34/2006, Khasra No. 143, Near Village - Raghuvanshi",
        "addressLocality": "Karauli",
        "addressRegion": "Rajasthan",
        "postalCode": "322241",
        "addressCountry": "IN"
    },
    "sameAs": [
        "https://linkedin.com/company/shivminerals",
        "https://twitter.com/ShivMinerals",
        "https://facebook.com/ShivMinerals",
        "https://youtube.com/@ShivMinerals"
    ]
};

const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://shivmines.in/#localbusiness",
    "name": "Shiv Mines and Minerals — #1 Silica Mines in Rajasthan",
    "alternateName": "Shiv Minerals Karauli",
    "image": "https://shivmines.in/images/hero-quarry.jpg",
    "url": "https://shivmines.in",
    "telephone": "+91-9116758641",
    "email": "shivmineandminerals@gmail.com",
    "description": "Premium silica mines in Rajasthan — silica sand mining and processing company in Karauli, Rajasthan. 1,000 tonnes/day capacity. Leading silica mines in Rajasthan serving 45+ countries with construction, industrial, foundry, and glass grade silica sand.",
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "Mining Lease M.L.No. 34/2006, Near Village - Raghuvanshi",
        "addressLocality": "Karauli",
        "addressRegion": "Rajasthan",
        "postalCode": "322241",
        "addressCountry": "IN"
    },
    "geo": {
        "@type": "GeoCoordinates",
        "latitude": 26.5,
        "longitude": 76.85
    },
    "hasMap": "https://www.google.com/maps/place/Karauli,+Rajasthan",
    "openingHours": "Mo-Sa 09:00-18:00",
    "priceRange": "$$",
    "areaServed": [
        { "@type": "State", "name": "Rajasthan" },
        { "@type": "Country", "name": "India" },
        { "@type": "AdministrativeArea", "name": "Karauli District" }
    ],
    "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "127"
    }
};

const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Shiv Mines and Minerals",
    "alternateName": "Shiv Minerals",
    "url": "https://shivmines.in",
    "potentialAction": {
        "@type": "SearchAction",
        "target": "https://shivmines.in/products?q={search_term_string}",
        "query-input": "required name=search_term_string"
    }
};

export default function Home() {
    return (
        <div className="min-h-screen bg-background">
            <SEOHead
                title="Shiv Mines & Minerals | #1 Silica Mines in Rajasthan, India | Silica Sand Supplier"
                description="Shiv Mines and Minerals — Rajasthan's leading silica mines and sand mining company since 2006. Premium construction, industrial, foundry & glass grade silica sand from our mines in Karauli, Rajasthan. 1,000 tonnes/day capacity. Exports to 45+ countries."
                canonical="/"
                keywords="silica mines in rajasthan, silica mine rajasthan, silica sand mines rajasthan, silica mining company rajasthan, silica sand supplier india, silica sand karauli, construction sand rajasthan, industrial sand, glass sand, foundry sand, sand mining rajasthan, silica quarry rajasthan, silica sand exporter, shiv mines and minerals, silica mines karauli, rajasthan silica sand"
                schemaMarkup={[organizationSchema, localBusinessSchema, websiteSchema]}
            />
            <Header />
            <HeroSection />
            <AboutSection />
            <ProductsSection />
            <OperationsSection />
            <ContactSection />
            <Footer />
            <WhatsAppButton />
        </div>
    );
}

