
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

const CallToActionSection = () => {
  return (
    <section className="relative w-full py-32 bg-brand-darkGrey text-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(242,218,166,0.1),transparent_70%)]" />
      <div className="container mx-auto px-4 text-center relative">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-4xl md:text-5xl font-semibold mb-8 leading-tight">
            Ready to Invest? Let's Get Started!
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
            Take the first step towards building your property portfolio in Manchester's thriving market. 
            Book a consultation today and let's discuss how we can help you achieve your investment goals.
          </p>
          <div className="pt-4">
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
  );
};

export default CallToActionSection;
