
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { ArrowRight, Key, Lock, Calendar, HandShake } from "lucide-react";

const Landlord = () => {
  return (
    <div className="min-h-screen bg-brand-whiteish font-cabin">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen bg-brand-darkGrey text-brand-whiteish flex items-center pt-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(242,218,166,0.1),transparent_50%)]" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl space-y-8">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight animate-fade-in">
              Transform Your Property into a Premium Income Asset
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 animate-fade-in [animation-delay:200ms]">
              Maximize your rental income with our professional serviced accommodation management.
            </p>
            <div className="animate-fade-in [animation-delay:400ms]">
              <Button 
                className="bg-warm-bg text-warm-text hover:bg-warm-hover transition-all duration-300 transform hover:scale-105"
                size="lg"
              >
                Book Property Assessment <ArrowRight className="ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-8 bg-brand-cream rounded-2xl transform hover:scale-105 transition-duration-300">
              <Key className="w-12 h-12 mb-4 text-warm-bg" />
              <h3 className="text-xl font-semibold text-brand-darkGrey">Hands-Off Management</h3>
              <p className="text-gray-600 mt-2">Complete property management solution with zero hassle.</p>
            </div>
            <div className="p-8 bg-brand-cream rounded-2xl transform hover:scale-105 transition-duration-300">
              <Lock className="w-12 h-12 mb-4 text-warm-bg" />
              <h3 className="text-xl font-semibold text-brand-darkGrey">Guaranteed Income</h3>
              <p className="text-gray-600 mt-2">Secure monthly payments regardless of occupancy.</p>
            </div>
            <div className="p-8 bg-brand-cream rounded-2xl transform hover:scale-105 transition-duration-300">
              <Calendar className="w-12 h-12 mb-4 text-warm-bg" />
              <h3 className="text-xl font-semibold text-brand-darkGrey">24/7 Support</h3>
              <p className="text-gray-600 mt-2">Round-the-clock property and guest management.</p>
            </div>
            <div className="p-8 bg-brand-cream rounded-2xl transform hover:scale-105 transition-duration-300">
              <HandShake className="w-12 h-12 mb-4 text-warm-bg" />
              <h3 className="text-xl font-semibold text-brand-darkGrey">Premium Service</h3>
              <p className="text-gray-600 mt-2">Five-star hospitality standards for your property.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-brand-darkGrey text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(242,218,166,0.1),transparent_70%)]" />
        <div className="container mx-auto px-4 relative">
          <h2 className="text-4xl md:text-5xl font-semibold mb-16 text-center">Why Property Owners Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <h3 className="text-3xl font-semibold text-warm-bg">40% Higher Revenue</h3>
              <p className="text-xl text-gray-300">Our serviced accommodation model consistently outperforms traditional letting, maximizing your property's earning potential.</p>
              <Button 
                className="bg-warm-bg text-warm-text hover:bg-warm-hover"
                size="lg"
              >
                Calculate Your Potential Income
              </Button>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl">
              <ul className="space-y-6">
                <li className="flex items-center space-x-4">
                  <div className="w-2 h-2 bg-warm-bg rounded-full" />
                  <span>Professional photography and premium listings</span>
                </li>
                <li className="flex items-center space-x-4">
                  <div className="w-2 h-2 bg-warm-bg rounded-full" />
                  <span>Dynamic pricing optimization</span>
                </li>
                <li className="flex items-center space-x-4">
                  <div className="w-2 h-2 bg-warm-bg rounded-full" />
                  <span>Regular maintenance and quality checks</span>
                </li>
                <li className="flex items-center space-x-4">
                  <div className="w-2 h-2 bg-warm-bg rounded-full" />
                  <span>Dedicated property manager</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landlord;
