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
      <section className="relative min-h-screen flex items-center pt-20">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/lovable-uploads/7d7ccab6-6209-4246-b447-9746d0a8b474.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="absolute inset-0 bg-brand-darkGrey/80" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-darkGrey/90 via-brand-darkGrey/70 to-transparent" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl space-y-8">
            <div className="relative">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight text-brand-whiteish animate-fade-in">
                Unlock High-ROI Serviced Accommodation Deals in{' '}
                <span className="relative">
                  Manchester!
                  <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-warm-bg to-transparent"></span>
                </span>
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-gray-300 animate-fade-in [animation-delay:200ms] max-w-3xl">
              Expert guidance and premium opportunities in Manchester's thriving property market. 
              We make serviced accommodation investment hassle-free and profitable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in [animation-delay:400ms]">
              <Button 
                className="bg-warm-bg text-warm-text hover:bg-warm-hover transition-all duration-300 transform hover:scale-105"
                size="lg"
              >
                Book Free Consultation <ArrowRight className="ml-2" />
              </Button>
              
              <Button 
                variant="outline" 
                className="border-brand-whiteish text-brand-whiteish hover:bg-brand-whiteish/10 transition-all duration-300"
                size="lg"
              >
                View Success Stories
              </Button>
            </div>
            <div className="pt-12 grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in [animation-delay:600ms]">
              <div className="flex items-center space-x-2">
                <div className="text-brand-whiteish">
                  <p className="text-3xl font-bold">£25M+</p>
                  <p className="text-sm text-gray-300">Portfolio Managed</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="text-brand-whiteish">
                  <p className="text-3xl font-bold">98%</p>
                  <p className="text-sm text-gray-300">Client Satisfaction</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="text-brand-whiteish">
                  <p className="text-3xl font-bold">15+</p>
                  <p className="text-sm text-gray-300">Years Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ServicesSection />
      <WhyChooseUsSection />
      <HowItWorksSection />

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
