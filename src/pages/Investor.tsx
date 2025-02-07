
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChartBar, Shield, Users, Briefcase, TrendingUp, NetworkIcon, Building } from "lucide-react";

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

      {/* Your Investment Journey Section */}
      <section className="py-20 bg-white relative">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-brand-darkGrey text-center mb-16">Your Investment Journey</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-brand-cream rounded-2xl transform hover:scale-105 transition-duration-300">
              <Briefcase className="w-12 h-12 mb-4 text-warm-bg" />
              <h3 className="text-xl font-semibold text-brand-darkGrey">Premium Deal Sourcing</h3>
              <p className="text-gray-600 mt-2">Access to off-market properties and exclusive R2SA opportunities in Manchester's most promising areas.</p>
            </div>
            <div className="p-8 bg-brand-cream rounded-2xl transform hover:scale-105 transition-duration-300">
              <Shield className="w-12 h-12 mb-4 text-warm-bg" />
              <h3 className="text-xl font-semibold text-brand-darkGrey">Risk Mitigation</h3>
              <p className="text-gray-600 mt-2">Comprehensive due diligence and market analysis to protect your investment.</p>
            </div>
            <div className="p-8 bg-brand-cream rounded-2xl transform hover:scale-105 transition-duration-300">
              <TrendingUp className="w-12 h-12 mb-4 text-warm-bg" />
              <h3 className="text-xl font-semibold text-brand-darkGrey">Performance Optimization</h3>
              <p className="text-gray-600 mt-2">Dynamic pricing and strategic management to maximize returns.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-brand-darkGrey text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(242,218,166,0.1),transparent_70%)]" />
        <div className="container mx-auto px-4 relative">
          <h2 className="text-4xl md:text-5xl font-semibold mb-16 text-center">Expert Support, Tailored for Investors</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <Building className="w-16 h-16 text-warm-bg" />
              <h3 className="text-2xl font-semibold">Network Access Benefits</h3>
              <p className="text-gray-300">Leverage our established network of property professionals and prime investment opportunities.</p>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-warm-bg rounded-full" />
                  <span>Access to off-market deals</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-warm-bg rounded-full" />
                  <span>Professional property management</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-warm-bg rounded-full" />
                  <span>Legal and financial expertise</span>
                </li>
              </ul>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold">Investment Highlights</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <p className="text-4xl font-bold text-warm-bg">15%+</p>
                    <p className="text-sm text-gray-300">Average Annual ROI</p>
                  </div>
                  <div className="text-center">
                    <p className="text-4xl font-bold text-warm-bg">£25M+</p>
                    <p className="text-sm text-gray-300">Portfolio Value</p>
                  </div>
                  <div className="text-center">
                    <p className="text-4xl font-bold text-warm-bg">50+</p>
                    <p className="text-sm text-gray-300">Premium Investors</p>
                  </div>
                  <div className="text-center">
                    <p className="text-4xl font-bold text-warm-bg">10+</p>
                    <p className="text-sm text-gray-300">Years Experience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Investor;
