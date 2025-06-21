
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import Benefits from "@/components/Benefits";
import ProductDemo from "@/components/ProductDemo";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <Hero />
      <SocialProof />
      <Benefits />
      <ProductDemo />
      <Features />
      <Pricing />
      <HowItWorks />
      <Testimonials />
      <CtaSection />
      <Footer />
    </div>
  );
};

export default Index;
