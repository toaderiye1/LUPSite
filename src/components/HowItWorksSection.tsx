
import { Clock, PackageSearch, Handshake } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const HowItWorksSection = () => {
  const steps = [
    {
      icon: Clock,
      title: "1. Consultation",
      description: "Book a free consultation to discuss your investment goals and explore opportunities in Manchester's thriving property market.",
      details: ["Personal investment strategy", "Market opportunity analysis", "ROI projections"]
    },
    {
      icon: PackageSearch,
      title: "2. Deal Packaging",
      description: "Receive bespoke property packages carefully curated to match your ROI criteria and investment preferences.",
      details: ["Property sourcing", "Due diligence", "Financial modeling"]
    },
    {
      icon: Handshake,
      title: "3. Execution",
      description: "We handle all contracts, negotiations, and transition processes, ensuring a smooth and efficient investment journey.",
      details: ["Contract management", "Property setup", "Ongoing support"]
    },
  ];

  return (
    <section id="how-it-works" className="w-full py-24 bg-white relative">
      {/* Background Patterns */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(242,218,166,0.1),transparent_70%)]" />
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-semibold text-brand-darkGrey">
            Your Journey to Property Success
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A streamlined process designed to transform your investment goals into reality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Card 
              key={index} 
              className="border-none shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <CardContent className="p-8">
                <div className="mb-6 flex justify-center">
                  <div className="w-20 h-20 rounded-full bg-warm-bg flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                    <step.icon className="w-10 h-10 text-warm-text" />
                  </div>
                </div>
                <h3 className="text-2xl font-semibold text-center mb-4 text-brand-darkGrey">
                  {step.title}
                </h3>
                <p className="text-center text-gray-600 mb-6">
                  {step.description}
                </p>
                <ul className="space-y-2">
                  {step.details.map((detail, i) => (
                    <li key={i} className="flex items-center text-gray-600">
                      <div className="w-2 h-2 bg-warm-bg rounded-full mr-3" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Timeline Connector - Desktop Only */}
        <div className="hidden md:block absolute top-1/2 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-transparent via-warm-bg to-transparent -z-10" />
      </div>
    </section>
  );
};

export default HowItWorksSection;
