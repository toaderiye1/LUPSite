import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

const CallToActionSection = () => {
  return (
    <section className="w-full py-20 bg-brand-darkGrey text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-8">
          Ready to Invest? Let's Get Started!
        </h2>
        <p className="text-lg mb-12 max-w-2xl mx-auto text-gray-300">
          Take the first step towards building your property portfolio in Manchester's thriving market. 
          Book a consultation today and let's discuss how we can help you achieve your investment goals.
        </p>
        <Button 
          className="bg-warm-bg text-warm-text hover:bg-warm-hover transition-colors duration-300"
          size="lg"
        >
          Book Free Consultation <ArrowRight className="ml-2" />
        </Button>
      </div>
    </section>
  );
};

export default CallToActionSection;