
import { Shield, TrendingUp, Users, Network, Building2, BadgeCheck } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const WhyChooseUsSection = () => {
  const benefits = [
    {
      icon: Shield,
      title: "Risk Mitigation",
      description: "Comprehensive due diligence and market analysis protect your investment, ensuring optimal returns in the Manchester market.",
    },
    {
      icon: TrendingUp,
      title: "Premium Properties",
      description: "Access to exclusive, high-performing R2SA properties that consistently meet our rigorous quality standards.",
    },
    {
      icon: Building2,
      title: "Local Expertise",
      description: "Deep understanding of Manchester's property market dynamics and growth opportunities.",
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
    {
      icon: BadgeCheck,
      title: "Proven Track Record",
      description: "Consistent success in delivering high-yield R2SA investments for our valued clients.",
    },
  ];

  const stats = [
    {
      value: "£25M+",
      label: "Property Portfolio Managed"
    },
    {
      value: "98%",
      label: "Client Satisfaction Rate"
    },
    {
      value: "15+",
      label: "Years Industry Experience"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/lovable-uploads/property-hero.jpg')",
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-brand-darkGrey/80" />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-brand-whiteish mb-6 animate-fade-in">
            Why Partner With Us?
          </h1>
          <p className="text-xl md:text-2xl text-brand-whiteish/90 max-w-3xl mx-auto animate-fade-in [animation-delay:200ms]">
            Experience the difference of working with Manchester's premier property investment specialists.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="w-full py-24 bg-brand-cream relative overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(146,122,100,0.1),transparent_70%)]" />
        
        <div className="container mx-auto px-4 relative">
          {/* Header Section */}
          <div className="text-center mb-16 space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-semibold text-brand-darkGrey">
              Expert Support, Tailored for Success
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We understand what property stakeholders need because we're investors ourselves. Our proven approach combines local expertise with innovative solutions.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {benefits.map((benefit, index) => (
              <Card 
                key={index} 
                className="border-none shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] bg-white/80 backdrop-blur-sm animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8 flex flex-col items-start space-y-4">
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

          {/* Stats Section with Enhanced Design */}
          <div className="bg-brand-darkGrey text-white rounded-2xl p-12 shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="text-center space-y-2 animate-fade-in"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <p className="text-5xl font-bold text-warm-bg mb-4">{stat.value}</p>
                  <p className="text-lg text-gray-300">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Trust Section */}
          <div className="mt-20 text-center animate-fade-in [animation-delay:600ms]">
            <p className="text-xl text-gray-600 mb-8">
              Trusted by investors and property owners across Manchester
            </p>
            <div className="p-8 bg-white/50 backdrop-blur-sm rounded-xl shadow-lg">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center">
                {/* Partner Logos Placeholder */}
                {[1, 2, 3, 4].map((_, index) => (
                  <div 
                    key={index}
                    className="h-16 bg-gray-200/50 rounded-lg animate-pulse"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyChooseUsSection;
