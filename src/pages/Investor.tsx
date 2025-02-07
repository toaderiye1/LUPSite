
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChartBar, Shield, Users, Briefcase } from "lucide-react";

const Investor = () => {
  return (
    <div className="min-h-screen bg-brand-whiteish font-cabin">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen bg-brand-darkGrey text-brand-whiteish flex items-center pt-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(242,218,166,0.1),transparent_50%)]" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl space-y-8">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight animate-fade-in">
              Unlock Premium Property Investment Opportunities in Manchester
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 animate-fade-in [animation-delay:200ms]">
              Access exclusive R2SA deals with guaranteed yields and comprehensive management solutions.
            </p>
            <div className="animate-fade-in [animation-delay:400ms]">
              <Button 
                className="bg-warm-bg text-warm-text hover:bg-warm-hover transition-all duration-300 transform hover:scale-105"
                size="lg"
              >
                Book Private Consultation <ArrowRight className="ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-brand-cream rounded-2xl transform hover:scale-105 transition-duration-300">
              <ChartBar className="w-12 h-12 mx-auto mb-4 text-warm-bg" />
              <h3 className="text-4xl font-bold text-brand-darkGrey">15%+</h3>
              <p className="text-gray-600">Average Annual ROI</p>
            </div>
            <div className="text-center p-8 bg-brand-cream rounded-2xl transform hover:scale-105 transition-duration-300">
              <Shield className="w-12 h-12 mx-auto mb-4 text-warm-bg" />
              <h3 className="text-4xl font-bold text-brand-darkGrey">£25M+</h3>
              <p className="text-gray-600">Portfolio Value</p>
            </div>
            <div className="text-center p-8 bg-brand-cream rounded-2xl transform hover:scale-105 transition-duration-300">
              <Users className="w-12 h-12 mx-auto mb-4 text-warm-bg" />
              <h3 className="text-4xl font-bold text-brand-darkGrey">50+</h3>
              <p className="text-gray-600">Premium Investors</p>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Strategy Section */}
      <section className="py-24 bg-brand-darkGrey text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(242,218,166,0.1),transparent_70%)]" />
        <div className="container mx-auto px-4 relative">
          <h2 className="text-4xl md:text-5xl font-semibold mb-16 text-center">Your Investment Journey</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-6">
              <Briefcase className="w-16 h-16 text-warm-bg" />
              <h3 className="text-2xl font-semibold">Premium Deal Sourcing</h3>
              <p className="text-gray-300">Access to off-market properties and exclusive R2SA opportunities in Manchester's most promising areas.</p>
            </div>
            <div className="space-y-6">
              <Shield className="w-16 h-16 text-warm-bg" />
              <h3 className="text-2xl font-semibold">Risk Mitigation</h3>
              <p className="text-gray-300">Comprehensive due diligence and market analysis to protect your investment and ensure optimal returns.</p>
            </div>
            <div className="space-y-6">
              <ChartBar className="w-16 h-16 text-warm-bg" />
              <h3 className="text-2xl font-semibold">Performance Optimization</h3>
              <p className="text-gray-300">Continuous market monitoring and strategy adjustment to maximize your property's earning potential.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Investor;
