
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { ArrowRight, Key, Lock, Calendar, Handshake, ChartBar, Shield, Wrench } from "lucide-react";

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
              I Help Landlords Maximise Their Property's Revenue with Hassle-Free Management
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 animate-fade-in [animation-delay:200ms]">
              Transform your property into a premium income asset with our professional serviced accommodation management.
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

      {/* End-to-End Management Section */}
      <section className="py-20 bg-white relative">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-brand-darkGrey text-center mb-16">End-to-End Professional Property Management</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-8 bg-brand-cream rounded-2xl transform hover:scale-105 transition-duration-300">
              <Key className="w-12 h-12 mb-4 text-warm-bg" />
              <h3 className="text-xl font-semibold text-brand-darkGrey">Guaranteed Rent</h3>
              <p className="text-gray-600 mt-2">Secure monthly payments regardless of occupancy levels.</p>
            </div>
            <div className="p-8 bg-brand-cream rounded-2xl transform hover:scale-105 transition-duration-300">
              <Lock className="w-12 h-12 mb-4 text-warm-bg" />
              <h3 className="text-xl font-semibold text-brand-darkGrey">24/7 Support</h3>
              <p className="text-gray-600 mt-2">Round-the-clock property and guest management.</p>
            </div>
            <div className="p-8 bg-brand-cream rounded-2xl transform hover:scale-105 transition-duration-300">
              <Calendar className="w-12 h-12 mb-4 text-warm-bg" />
              <h3 className="text-xl font-semibold text-brand-darkGrey">No Void Periods</h3>
              <p className="text-gray-600 mt-2">Continuous income stream throughout the year.</p>
            </div>
            <div className="p-8 bg-brand-cream rounded-2xl transform hover:scale-105 transition-duration-300">
              <Handshake className="w-12 h-12 mb-4 text-warm-bg" />
              <h3 className="text-xl font-semibold text-brand-darkGrey">Premium Service</h3>
              <p className="text-gray-600 mt-2">Five-star hospitality standards for your property.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Partner With Us Section */}
      <section className="py-24 bg-brand-darkGrey text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(242,218,166,0.1),transparent_70%)]" />
        <div className="container mx-auto px-4 relative">
          <h2 className="text-4xl md:text-5xl font-semibold mb-16 text-center">Your Partner in Stress-Free Management</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <h3 className="text-3xl font-semibold text-warm-bg">40% Higher Revenue</h3>
              <p className="text-xl text-gray-300">Our serviced accommodation model consistently outperforms traditional letting, maximizing your property's earning potential with predictable income and fewer hassles.</p>
              <Button 
                className="bg-warm-bg text-warm-text hover:bg-warm-hover"
                size="lg"
              >
                Calculate Your Potential Income
              </Button>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold mb-6">Our 4-Step Process</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-warm-bg rounded-full flex items-center justify-center text-warm-text font-bold">1</div>
                  <div>
                    <h4 className="font-semibold">Property Assessment</h4>
                    <p className="text-gray-300">Book an evaluation of your property's SA potential.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-warm-bg rounded-full flex items-center justify-center text-warm-text font-bold">2</div>
                  <div>
                    <h4 className="font-semibold">Agreement</h4>
                    <p className="text-gray-300">Secure guaranteed rent and start a partnership.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-warm-bg rounded-full flex items-center justify-center text-warm-text font-bold">3</div>
                  <div>
                    <h4 className="font-semibold">Management Transition</h4>
                    <p className="text-gray-300">Hand over the keys and let us handle the rest.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-warm-bg rounded-full flex items-center justify-center text-warm-text font-bold">4</div>
                  <div>
                    <h4 className="font-semibold">Revenue Growth</h4>
                    <p className="text-gray-300">Watch your property earn consistent returns without effort.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-brand-darkGrey text-center mb-16">See What Other Landlords Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-brand-cream p-8 rounded-2xl">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-warm-bg rounded-full"></div>
                <div className="ml-4">
                  <h4 className="font-semibold">Sarah Thompson</h4>
                  <p className="text-gray-600">Manchester Landlord</p>
                </div>
              </div>
              <p className="text-gray-600">"Since switching to their management, my property's revenue has increased by 45%. The guaranteed rent gives me peace of mind, and their service is impeccable."</p>
            </div>
            <div className="bg-brand-cream p-8 rounded-2xl">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-warm-bg rounded-full"></div>
                <div className="ml-4">
                  <h4 className="font-semibold">James Wilson</h4>
                  <p className="text-gray-600">Property Investor</p>
                </div>
              </div>
              <p className="text-gray-600">"The hands-off management approach is exactly what I needed. They handle everything professionally, and my returns have never been better."</p>
            </div>
            <div className="bg-brand-cream p-8 rounded-2xl">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-warm-bg rounded-full"></div>
                <div className="ml-4">
                  <h4 className="font-semibold">Emma Davis</h4>
                  <p className="text-gray-600">Buy-to-Let Owner</p>
                </div>
              </div>
              <p className="text-gray-600">"Their property management service has transformed my rental into a high-performing asset. The transition was smooth, and the results speak for themselves."</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-darkGrey text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Let Us Manage Your Property Today!</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">Transform your property into a premium income asset with our professional management services. Book a property assessment today.</p>
          <Button 
            className="bg-warm-bg text-warm-text hover:bg-warm-hover transition-all duration-300 transform hover:scale-105"
            size="lg"
          >
            Book Your Property Assessment <ArrowRight className="ml-2" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Landlord;
