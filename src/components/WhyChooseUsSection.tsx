
import { Shield, TrendingUp, Users, Network } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const WhyChooseUsSection = () => {
  const benefits = [
    {
      icon: Shield,
      title: "Risk Mitigation",
      description: "Our comprehensive due diligence and market analysis protect your investment and ensure optimal returns.",
    },
    {
      icon: TrendingUp,
      title: "Premium Properties",
      description: "Access to exclusive, high-performing properties that meet our rigorous quality standards.",
    },
    {
      icon: Network,
      title: "Exclusive Network",
      description: "Leverage our established network of property professionals and prime investment opportunities.",
    },
    {
      icon: Users,
      title: "Dedicated Support",
      description: "Personalized guidance through every step, from property selection to successful management.",
    },
  ];

  return (
    <section id="why-choose-us" className="w-full py-24 bg-brand-cream relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(146,122,100,0.1),transparent_70%)]" />
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-semibold text-brand-darkGrey">
            Expert Support, Tailored for Investors
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We understand what investors need because we're investors ourselves. Our proven approach combines local expertise with innovative solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <Card 
              key={index} 
              className="border-none shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] bg-white/80 backdrop-blur-sm"
            >
              <CardContent className="p-8 flex items-start space-x-6">
                <div className="w-14 h-14 rounded-full bg-warm-bg flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="w-7 h-7 text-warm-text" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-semibold text-brand-darkGrey">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center space-y-2">
            <p className="text-4xl font-bold text-brand-darkGrey">£25M+</p>
            <p className="text-gray-600">Property Portfolio Managed</p>
          </div>
          <div className="text-center space-y-2">
            <p className="text-4xl font-bold text-brand-darkGrey">98%</p>
            <p className="text-gray-600">Client Satisfaction Rate</p>
          </div>
          <div className="text-center space-y-2">
            <p className="text-4xl font-bold text-brand-darkGrey">15+ Years</p>
            <p className="text-gray-600">Industry Experience</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
