import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChartBar, Shield, Users, Briefcase, TrendingUp, Building } from "lucide-react";

const Investor = () => {
  return (
    <div className="min-h-screen bg-brand-whiteish font-cabin">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: 'url("/lovable-uploads/modern-manchester-skyline.jpg")',
          }}
        >
          <div className="absolute inset-0 bg-brand-darkGrey/80" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-darkGrey/90 via-brand-darkGrey/70 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(242,218,166,0.15),transparent_70%)]" />
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl space-y-8">
            <div className="flex flex-col gap-4">
              <span className="text-warm-bg font-semibold tracking-wider animate-fade-in">
                PREMIUM INVESTMENT OPPORTUNITIES
              </span>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight text-brand-whiteish animate-fade-in">
                Unlock Manchester's Most Profitable Serviced Accommodation Deals
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-gray-300 animate-fade-in [animation-delay:200ms] max-w-2xl">
              Access exclusive R2SA deals with <span className="text-warm-bg font-semibold">15-25% ROI</span> and our proven system for passive property income.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in [animation-delay:400ms]">
              <Button 
                className="bg-warm-bg text-warm-text hover:bg-warm-hover transition-all duration-300 transform hover:scale-105"
                size="lg"
              >
                Book Free Consultation <ArrowRight className="ml-2" />
              </Button>
              <Button 
                className="bg-transparent border-2 border-warm-bg text-warm-bg hover:bg-warm-bg/10 transition-all duration-300"
                size="lg"
              >
                View Latest Opportunities
              </Button>
            </div>
            
            <div className="pt-8 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-gray-700 animate-fade-in [animation-delay:600ms]">
              <div className="text-center">
                <p className="text-3xl font-bold text-warm-bg">£25M+</p>
                <p className="text-sm text-gray-400">Portfolio Value</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-warm-bg">20%</p>
                <p className="text-sm text-gray-400">Avg. ROI</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-warm-bg">50+</p>
                <p className="text-sm text-gray-400">Happy Investors</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-warm-bg">10+</p>
                <p className="text-sm text-gray-400">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 bg-white relative">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-brand-darkGrey text-center mb-16">Your Shortcut to Profitable Property Deals</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-brand-cream rounded-2xl transform hover:scale-105 transition-duration-300">
              <Briefcase className="w-12 h-12 mb-4 text-warm-bg" />
              <h3 className="text-xl font-semibold text-brand-darkGrey">R2SA Deal Sourcing</h3>
              <p className="text-gray-600 mt-2">Expert analysis and due diligence for premium serviced accommodation opportunities.</p>
            </div>
            <div className="p-8 bg-brand-cream rounded-2xl transform hover:scale-105 transition-duration-300">
              <Shield className="w-12 h-12 mb-4 text-warm-bg" />
              <h3 className="text-xl font-semibold text-brand-darkGrey">Time-Saving Solutions</h3>
              <p className="text-gray-600 mt-2">We eliminate guesswork and handle all aspects of deal sourcing and setup.</p>
            </div>
            <div className="p-8 bg-brand-cream rounded-2xl transform hover:scale-105 transition-duration-300">
              <TrendingUp className="w-12 h-12 mb-4 text-warm-bg" />
              <h3 className="text-xl font-semibold text-brand-darkGrey">Proven ROI</h3>
              <p className="text-gray-600 mt-2">Track record of delivering high-performing investment opportunities.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Expert Support Section */}
      <section className="py-24 bg-brand-darkGrey text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(242,218,166,0.1),transparent_70%)]" />
        <div className="container mx-auto px-4 relative">
          <h2 className="text-4xl md:text-5xl font-semibold mb-16 text-center">Expert Support, Tailored for Investors</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <Building className="w-16 h-16 text-warm-bg" />
              <h3 className="text-2xl font-semibold">Comprehensive Support</h3>
              <p className="text-gray-300">Hands-on guidance through every step of your investment journey, from contracts to property setup.</p>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-warm-bg rounded-full" />
                  <span>Risk reduction strategies</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-warm-bg rounded-full" />
                  <span>Property quality assurance</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-warm-bg rounded-full" />
                  <span>Network access benefits</span>
                </li>
              </ul>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold mb-6">3 Easy Steps to Secure Your Deal</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-warm-bg rounded-full flex items-center justify-center text-warm-text font-bold">1</div>
                  <div>
                    <h4 className="font-semibold">Consultation</h4>
                    <p className="text-gray-300">Book a free consultation to discuss your investment goals.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-warm-bg rounded-full flex items-center justify-center text-warm-text font-bold">2</div>
                  <div>
                    <h4 className="font-semibold">Deal Packaging</h4>
                    <p className="text-gray-300">Receive bespoke property packages tailored to your ROI criteria.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-warm-bg rounded-full flex items-center justify-center text-warm-text font-bold">3</div>
                  <div>
                    <h4 className="font-semibold">Execution</h4>
                    <p className="text-gray-300">We manage contracts, negotiations, and the transition.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* We're Investors Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-brand-darkGrey text-center mb-16">We're Investors, Just Like You</h2>
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <p className="text-xl text-gray-600">With years of experience in property investment, we understand your goals and challenges. Our success is built on delivering consistent results for our investors.</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <p className="text-4xl font-bold text-warm-bg">£25M+</p>
                <p className="text-sm text-gray-600">Portfolio Value</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-warm-bg">15%+</p>
                <p className="text-sm text-gray-600">Average ROI</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-warm-bg">50+</p>
                <p className="text-sm text-gray-600">Happy Investors</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-warm-bg">10+</p>
                <p className="text-sm text-gray-600">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-darkGrey text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to Invest? Let's Get Started!</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">Take the first step towards your next successful property investment. Book a consultation today and let us help you achieve your investment goals.</p>
          <Button 
            className="bg-warm-bg text-warm-text hover:bg-warm-hover transition-all duration-300 transform hover:scale-105"
            size="lg"
          >
            Book Your Free Consultation <ArrowRight className="ml-2" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Investor;
