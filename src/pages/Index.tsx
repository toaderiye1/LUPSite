import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Check, Clock, HandshakeIcon, LineChart, Shield } from "lucide-react";
import Navbar from "@/components/Navbar";

const Index = () => {
  const steps = [
    {
      title: "Consultation",
      description: "Book a free consultation to discuss investment goals.",
      icon: Clock,
    },
    {
      title: "Deal Packaging",
      description: "Receive bespoke property packages tailored to your ROI criteria.",
      icon: LineChart,
    },
    {
      title: "Execution",
      description: "Let us manage contracts, negotiations, and the transition.",
      icon: HandshakeIcon,
    },
  ];

  const benefits = [
    "Risk reduction through expert due diligence",
    "Access to exclusive property opportunities",
    "Hands-on guidance throughout the process",
    "Quality assurance on all properties",
  ];

  return (
    <div className="min-h-screen bg-brand-whiteish font-cabin">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-brand-darkGrey text-brand-whiteish py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold max-w-4xl mb-8">
            I Help Busy Investors Unlock High-ROI Serviced Accommodation Deals in Manchester!
          </h1>
          <Button 
            className="bg-brand-orange text-brand-darkGrey hover:bg-brand-brown hover:text-brand-whiteish"
            size="lg"
          >
            Book Free Consultation <ArrowRight className="ml-2" />
          </Button>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-darkGrey mb-8">
            Your Shortcut to Profitable Property Deals
          </h2>
          <p className="text-lg text-brand-grey max-w-3xl mb-6">
            We specialize in sourcing premium rent-to-serviced accommodation (R2SA) deals, 
            providing thorough analysis and due diligence for each opportunity. Our expertise 
            saves you valuable time and eliminates the guesswork from property investment.
          </p>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-brand-cream">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-darkGrey mb-8">
            Expert Support, Tailored for Investors
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="bg-white border-none shadow-lg">
                <CardContent className="p-6 flex items-start space-x-4">
                  <Check className="text-brand-brown w-6 h-6 mt-1 flex-shrink-0" />
                  <p className="text-lg text-brand-grey">{benefit}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-darkGrey mb-8">
            3 Easy Steps to Secure Your Deal
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <Card key={index} className="border-none shadow-lg">
                <CardContent className="p-6">
                  <step.icon className="w-12 h-12 text-brand-brown mb-4" />
                  <h3 className="text-xl font-bold text-brand-darkGrey mb-2">
                    {step.title}
                  </h3>
                  <p className="text-brand-grey">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes Us Different Section */}
      <section className="py-16 bg-brand-cream">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-darkGrey mb-8">
            We're Investors, Just Like You
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-lg text-brand-grey mb-6">
                With years of hands-on experience in property investment, we understand 
                the challenges and opportunities in the Manchester market. Our success 
                is built on making smart investment decisions and helping others do the same.
              </p>
              <Shield className="w-12 h-12 text-brand-brown" />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-brand-darkGrey text-brand-whiteish">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Ready to Invest? Let's Get Started!
          </h2>
          <Button 
            className="bg-brand-orange text-brand-darkGrey hover:bg-brand-brown hover:text-brand-whiteish"
            size="lg"
          >
            Book Your Free Consultation <ArrowRight className="ml-2" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;