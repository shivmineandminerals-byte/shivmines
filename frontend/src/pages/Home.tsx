import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProductsSection from "@/components/ProductsSection";
import OperationsSection from "@/components/OperationsSection";
import ExploreSection from "@/components/ExploreSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEOHead from "@/components/SEOHead";
import FAQSection, { buildFaqSchema } from "@/components/FAQSection";

// NOTE: Organization + WebSite + LocalBusiness are provided as a connected @graph
// globally in index.html (every page), so they are not repeated here to avoid
// duplicate entities on the homepage. This page only adds its FAQ schema.
// TODO(owner): once you collect genuine client reviews, display them on-page and add
// Review + AggregateRating schema reflecting the real values.

// FAQ content shown on the page AND used to build FAQPage schema (they must match).
const homeFaqs = [
    {
        question: "What are silica mines?",
        answer: "Silica mines are mining operations that extract silica sand (SiO₂) from natural deposits. Silica sand is an industrial mineral used in glassmaking, construction, foundry casting, water filtration and chemical processing. Shiv Mines and Minerals operates silica mines in Karauli, Rajasthan, India.",
    },
    {
        question: "Where are silica mines located in India?",
        answer: "Major silica mines in India are in Rajasthan, Gujarat, Tamil Nadu and Odisha. Rajasthan holds some of the purest silica deposits, particularly in the Karauli, Dausa, Bundi and Jaisalmer districts. Shiv Mines and Minerals has operated silica mines in Karauli, Rajasthan since 2006.",
    },
    {
        question: "What products come from silica mines?",
        answer: "Silica mines produce grades of silica sand including construction grade for concrete and mortar, industrial grade (99%+ SiO₂) for filtration and blasting, foundry grade for metal casting, and glass grade (99.5%+ SiO₂) for glass manufacturing.",
    },
    {
        question: "How do I choose a silica sand supplier?",
        answer: "Look for laboratory-tested purity, consistent production capacity, multiple grade options (construction, industrial, foundry, glass, frac), export capability and years of experience. Shiv Mines and Minerals has supplied silica sand since 2006 and offers domestic and export supply.",
    },
];

export default function Home() {
    return (
        <div className="min-h-screen bg-background">
            <SEOHead
                title="Shiv Mines & Minerals | Silica Sand Supplier & Mines in Karauli, Rajasthan"
                description="Silica sand mining company in Karauli, Rajasthan since 2006. Construction, industrial (99%+ SiO₂), glass (99.5%+ SiO₂), foundry, frac & custom-grade silica sand for domestic supply and export. Request a quote."
                canonical="/"
                keywords="silica sand supplier rajasthan, silica mines karauli, silica sand mining company, construction sand, industrial silica sand, glass grade silica sand, foundry sand, frac sand, shiv mines and minerals"
                schemaMarkup={[buildFaqSchema(homeFaqs)]}
            />
            <Header />
            <HeroSection />
            <AboutSection />
            <ProductsSection />
            <OperationsSection />
            <ExploreSection />
            <FAQSection faqs={homeFaqs} heading="Silica Sand & Mining — FAQs" className="bg-secondary/30" />
            <ContactSection />
            <Footer />
            <WhatsAppButton />
        </div>
    );
}

