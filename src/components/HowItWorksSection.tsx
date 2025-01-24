import { Clock, PackageSearch, Handshake } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const HowItWorksSection = () => {
  const steps = [
    {
      icon: Clock,
      title: "Consultation",
      description: "Book a free consultation to discuss investment goals and explore opportunities in Manchester's thriving property market.",
    },
    {
      icon: PackageSearch,
      title: "Deal Packaging",
      description: "Receive bespoke property packages carefully curated to match your ROI criteria and investment preferences.",
    },
    {
      icon: Handshake,
      title: "Execution",
      description: "We handle all contracts, negotiations, and transition processes, ensuring a smooth and efficient investment journey.",
    },
  ];

  return (
    <section className="w-full py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12 text-brand-darkGrey">
          3 Easy Steps to Secure Your Deal
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="mb-6 flex justify-center">
                  <div className="w-16 h-16 rounded-full bg-warm-bg flex items-center justify-center">
                    <step.icon className="w-8 h-8 text-warm-text" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-center mb-4 text-brand-darkGrey">
                  {step.title}
                </h3>
                <p className="text-center text-gray-600">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;