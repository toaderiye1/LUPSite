import { Shield, TrendingUp, Users, Network } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const WhyChooseUsSection = () => {
  const benefits = [
    {
      icon: Shield,
      title: "Risk Reduction",
      description: "Comprehensive due diligence and market analysis to protect your investment.",
    },
    {
      icon: TrendingUp,
      title: "Quality Assurance",
      description: "Rigorous property standards and professional management services.",
    },
    {
      icon: Network,
      title: "Network Access",
      description: "Exclusive access to prime property opportunities in Manchester.",
    },
    {
      icon: Users,
      title: "Expert Support",
      description: "Hands-on guidance through contracts, negotiations, and property setup.",
    },
  ];

  return (
    <section className="w-full py-16 bg-brand-cream">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12 text-brand-darkGrey">
          Expert Support, Tailored for Investors
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6 flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-warm-bg flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="w-6 h-6 text-warm-text" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-brand-darkGrey">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">
                    {benefit.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;