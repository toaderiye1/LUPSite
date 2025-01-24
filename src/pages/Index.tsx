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
      <section className="relative bg-brand-darkGrey text-brand-whiteish py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-8 animate-fade-in">
              I Help Busy Investors Unlock High-ROI Serviced Accommodation Deals in Manchester!
            </h1>
            <p className="text-xl mb-8 text-gray-300 animate-fade-in">
              Expert guidance and premium opportunities in Manchester's thriving property market.
            </p>
            <Button 
              className="bg-warm-bg text-warm-text hover:bg-warm-hover transition-colors duration-300 animate-fade-in"
              size="lg"
            >
              Book Free Consultation <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-semibold text-brand-darkGrey mb-8">
            Your Shortcut to Profitable Property Deals
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-lg text-gray-600 mb-6">
                We specialize in sourcing premium rent-to-serviced accommodation (R2SA) deals, 
                providing thorough analysis and due diligence for each opportunity. Our expertise 
                saves you valuable time and eliminates the guesswork from property investment.
              </p>
              <p className="text-lg text-gray-600">
                With our deep understanding of the Manchester property market and extensive 
                network, we identify and secure high-potential properties that align with 
                your investment goals.
              </p>
            </div>
            <div className="bg-warm-bg rounded-lg p-8">
              <h3 className="text-xl font-semibold mb-4 text-warm-text">
                Our Comprehensive Analysis Includes:
              </h3>
              <ul className="space-y-3 text-warm-text">
                <li className="flex items-center">
                  <ArrowRight className="w-5 h-5 mr-2" />
                  Market demand assessment
                </li>
                <li className="flex items-center">
                  <ArrowRight className="w-5 h-5 mr-2" />
                  Revenue potential calculation
                </li>
                <li className="flex items-center">
                  <ArrowRight className="w-5 h-5 mr-2" />
                  Property condition evaluation
                </li>
                <li className="flex items-center">
                  <ArrowRight className="w-5 h-5 mr-2" />
                  Investment risk assessment
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <ServicesSection />
      <WhyChooseUsSection />
      <HowItWorksSection />

      {/* What Makes Us Different Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12 text-brand-darkGrey">
            We're Investors, Just Like You
          </h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-gray-600 mb-8">
              With years of hands-on experience in property investment, we understand 
              the challenges and opportunities in the Manchester market. Our success 
              is built on making smart investment decisions and helping others do the same.
            </p>
            <div className="bg-brand-cream rounded-lg p-8">
              <blockquote className="italic text-gray-700 mb-4">
                "Their expertise in the Manchester property market is unmatched. They helped me 
                secure a high-performing serviced accommodation property that has exceeded my ROI expectations."
              </blockquote>
              <p className="font-semibold text-brand-darkGrey">
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

export default Index;