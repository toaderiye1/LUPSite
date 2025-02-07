
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

const CallToActionSection = () => {
  return (
    <section className="relative w-full py-32 bg-brand-darkGrey text-white overflow-hidden">
      {/* Animated background gradients */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(242,218,166,0.15),transparent_70%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(146,122,100,0.1),transparent_50%)] animate-pulse [animation-delay:2s]" />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 text-center relative">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-4xl md:text-5xl font-semibold mb-8 leading-tight animate-fade-in">
            Ready to Unlock Your Property Investment Potential?
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto animate-fade-in [animation-delay:200ms]">
            Take the first step towards building your property portfolio in Manchester's thriving market. 
            Book a consultation today and let's discuss how we can help you achieve your investment goals.
          </p>
          <div className="pt-8 space-y-6 animate-fade-in [animation-delay:400ms]">
            <Button 
              className="bg-warm-bg text-warm-text hover:bg-warm-hover transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              size="lg"
            >
              Book Free Consultation <ArrowRight className="ml-2" />
            </Button>
            <p className="text-sm text-gray-400 mt-4">
              Limited spots available. Don't miss out on premium investment opportunities.
            </p>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-warm-bg/20 to-transparent" />
    </section>
  );
};

export default CallToActionSection;
