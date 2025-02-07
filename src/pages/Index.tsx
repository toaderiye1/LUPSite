
import Navbar from "@/components/Navbar";
import ServicesSection from "@/components/ServicesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import CallToActionSection from "@/components/CallToActionSection";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-brand-whiteish font-cabin">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen bg-brand-darkGrey text-brand-whiteish flex items-center pt-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(242,218,166,0.1),transparent_50%)]" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl space-y-8">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight animate-fade-in">
              I Help Busy Investors Unlock High-ROI Serviced Accommodation Deals in Manchester!
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 animate-fade-in [animation-delay:200ms]">
              Expert guidance and premium opportunities in Manchester's thriving property market.
            </p>
            <div className="animate-fade-in [animation-delay:400ms]">
              <Button 
                className="bg-warm-bg text-warm-text hover:bg-warm-hover transition-all duration-300 transform hover:scale-105"
                size="lg"
              >
                Book Free Consultation <ArrowRight className="ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section id="services" className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(146,122,100,0.1),transparent_70%)]" />
        <div className="container mx-auto px-4 relative">
          <h2 className="text-4xl md:text-5xl font-semibold text-brand-darkGrey mb-12 text-center">
            Your Shortcut to Profitable Property Deals
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-xl text-gray-600 leading-relaxed">
                We specialize in sourcing premium rent-to-serviced accommodation (R2SA) deals, 
                providing thorough analysis and due diligence for each opportunity. Our expertise 
                saves you valuable time and eliminates the guesswork from property investment.
              </p>
              <p className="text-xl text-gray-600 leading-relaxed">
                With our deep understanding of the Manchester property market and extensive 
                network, we identify and secure high-potential properties that align with 
                your investment goals.
              </p>
            </div>
            <div className="bg-warm-bg rounded-2xl p-10 transform hover:scale-105 transition-all duration-300">
              <h3 className="text-2xl font-semibold mb-6 text-warm-text">
                Our Comprehensive Analysis Includes:
              </h3>
              <ul className="space-y-4 text-warm-text">
                <ListItem>Market demand assessment</ListItem>
                <ListItem>Revenue potential calculation</ListItem>
                <ListItem>Property condition evaluation</ListItem>
                <ListItem>Investment risk assessment</ListItem>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <ServicesSection />
      <WhyChooseUsSection />
      <HowItWorksSection />

      {/* What Makes Us Different Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(242,218,166,0.1),transparent_70%)]" />
        <div className="container mx-auto px-4 relative">
          <h2 className="text-4xl md:text-5xl font-semibold text-center mb-16 text-brand-darkGrey">
            We're Investors, Just Like You
          </h2>
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <p className="text-xl text-gray-600 leading-relaxed">
              With years of hands-on experience in property investment, we understand 
              the challenges and opportunities in the Manchester market. Our success 
              is built on making smart investment decisions and helping others do the same.
            </p>
            <div className="bg-brand-cream rounded-2xl p-12 transform hover:scale-105 transition-all duration-300">
              <blockquote className="italic text-xl text-gray-700 mb-6">
                "Their expertise in the Manchester property market is unmatched. They helped me 
                secure a high-performing serviced accommodation property that has exceeded my ROI expectations."
              </blockquote>
              <p className="font-semibold text-brand-darkGrey text-lg">
                - Sarah Johnson, Property Investor
              </p>
            </div>
          </div>
        </div>
      </section>

      <CallToActionSection />
    </div>
  );
};

const ListItem = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-center space-x-3">
    <ArrowRight className="w-5 h-5 flex-shrink-0" />
    <span>{children}</span>
  </li>
);

export default Index;
