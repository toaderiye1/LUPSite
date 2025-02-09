import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Shield, TrendingUp, ChartBar, ArrowRight, Users, MessageSquare, Clock } from "lucide-react";

const R2SAStrategy = () => {
  return (
    <div className="min-h-screen bg-brand-darkGrey font-cabin">
      <Navbar />


 {/* Expert Support Section */}
 <section className="py-20 bg-[#f5f0ea]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-darkGrey mb-4">
              Expert Support, Tailored for Success
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              We understand what property stakeholders need because we're investors ourselves.
              Our proven approach combines local expertise with innovative solutions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {[
                {
                  icon: Shield,
                  title: "Risk Mitigation",
                  description: "Comprehensive due diligence and market analysis protect your investment, ensuring optimal returns in the Manchester market."
                },
                {
                  icon: TrendingUp,
                  title: "Premium Properties",
                  description: "Access to exclusive, high-performing R2SA properties that consistently meet our rigorous quality standards."
                },
                {
                  icon: ChartBar,
                  title: "Local Expertise",
                  description: "Deep understanding of Manchester's property market dynamics and growth opportunities."
                }
              ].map((item, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-warm-bg/20 rounded-full flex items-center justify-center mb-6 mx-auto">
                    <item.icon className="w-6 h-6 text-warm-bg" />
                  </div>
                  <h3 className="text-xl font-bold text-brand-darkGrey mb-4">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Users,
                  title: "Exclusive Network",
                  description: "Leverage our established network of property professionals and prime investment opportunities."
                },
                {
                  icon: MessageSquare,
                  title: "Dedicated Support",
                  description: "Personalized guidance through every step, from property selection to successful management."
                },
                {
                  icon: Clock,
                  title: "Proven Track Record",
                  description: "Consistent success in delivering high-yield R2SA investments for our valued clients."
                }
              ].map((item, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-warm-bg/20 rounded-full flex items-center justify-center mb-6 mx-auto">
                    <item.icon className="w-6 h-6 text-warm-bg" />
                  </div>
                  <h3 className="text-xl font-bold text-brand-darkGrey mb-4">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(242,218,166,0.15),transparent_70%)]" />
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-brand-whiteish mb-6">
              How our R2SA Strategy Maximises Your ROI
            </h1>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Our proven R2SA (Rent-to-Serviced-Accommodation) strategy helps landlords and investors generate higher returns through strategic short-term rentals.
            </p>
          </div>
        </div>
      </section>

      {/* Main Benefits Grid */}
      <section className="py-20 bg-brand-darkGrey/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            <div className="bg-brand-darkGrey/40 rounded-2xl p-8 border border-warm-bg/10 hover:border-warm-bg/30 transition-all duration-300">
              <h2 className="text-2xl font-bold text-brand-whiteish mb-6">1. Higher Rental Yields</h2>
              <p className="text-gray-300 mb-6">
                Converting your rental properties into serviced accommodation can significantly maximise your rental yield. You can rent the property short-term and charge premium rates, especially in high-demand areas.
              </p>
              <p className="text-warm-bg font-semibold">
                Earn up to three times more than traditional long-term rentals with a monthly cash flow of £1,000 against a £10,000 investment.
              </p>
            </div>

            <div className="bg-brand-darkGrey/40 rounded-2xl p-8 border border-warm-bg/10 hover:border-warm-bg/30 transition-all duration-300">
              <h2 className="text-2xl font-bold text-brand-whiteish mb-6">2. Better Flexibility and Control</h2>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 text-warm-bg mr-2 mt-1 flex-shrink-0" />
                  <span>Use the property when you want</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 text-warm-bg mr-2 mt-1 flex-shrink-0" />
                  <span>Earn high profits year-round</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 text-warm-bg mr-2 mt-1 flex-shrink-0" />
                  <span>Adjust rental rates based on market demand</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 text-warm-bg mr-2 mt-1 flex-shrink-0" />
                  <span>Manage bookings easily</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "3. Diversify Reduces Risks",
                description: "Unlike traditional rentals, R2SA allows you to spread risk across different guest types instead of relying on a single long-term tenant, ensuring stable income and higher profits."
              },
              {
                icon: TrendingUp,
                title: "4. Capitalise on Investment",
                description: "Generate high profits without property ownership. With just a £10k investment, you can achieve a monthly cash flow of up to £1k through our proven R2SA model."
              },
              {
                icon: ChartBar,
                title: "5. High Occupancy Rate",
                description: "Our properties achieve higher occupancy and nightly rates through our client focus, strategically located in popular tourist and business hubs."
              }
            ].map((item, index) => (
              <div key={index} className="bg-brand-darkGrey/40 rounded-2xl p-8 border border-warm-bg/10 hover:border-warm-bg/30 transition-all duration-300">
                <item.icon className="w-12 h-12 text-warm-bg mb-6" />
                <h3 className="text-xl font-bold text-brand-whiteish mb-4">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Property Finding Strategy Section */}
      <section className="py-20 bg-brand-darkGrey/70">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-whiteish mb-8 text-center">
              Discover Premium R2SA Investment Opportunities
            </h2>
            <p className="text-xl text-gray-300 mb-12 text-center">
              Our strategic approach to property selection ensures maximum returns on your R2SA investments
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-brand-darkGrey/40 rounded-2xl p-8 border border-warm-bg/10">
                <h3 className="text-2xl font-bold text-brand-whiteish mb-4">Strategic Location Analysis</h3>
                <p className="text-gray-300 mb-6">
                  We identify prime locations near transport hubs, business districts, and tourist attractions that consistently deliver premium returns. Our data-driven approach ensures your property stands out in high-demand areas.
                </p>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <ArrowRight className="w-5 h-5 text-warm-bg mr-2 mt-1 flex-shrink-0" />
                    <span>Prime city centre locations</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="w-5 h-5 text-warm-bg mr-2 mt-1 flex-shrink-0" />
                    <span>Proximity to transport links</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="w-5 h-5 text-warm-bg mr-2 mt-1 flex-shrink-0" />
                    <span>High-demand business districts</span>
                  </li>
                </ul>
              </div>

              <div className="bg-brand-darkGrey/40 rounded-2xl p-8 border border-warm-bg/10">
                <h3 className="text-2xl font-bold text-brand-whiteish mb-4">Property Excellence Standards</h3>
                <p className="text-gray-300 mb-6">
                  Each property in our portfolio is carefully selected to meet our strict criteria for R2SA success. We focus on properties that offer unique advantages and superior guest experiences.
                </p>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <ArrowRight className="w-5 h-5 text-warm-bg mr-2 mt-1 flex-shrink-0" />
                    <span>Modern amenities and furnishings</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="w-5 h-5 text-warm-bg mr-2 mt-1 flex-shrink-0" />
                    <span>Optimal room configurations</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="w-5 h-5 text-warm-bg mr-2 mt-1 flex-shrink-0" />
                    <span>Unique property features</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-20 bg-brand-darkGrey/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-whiteish mb-6">
              Ready to Maximise Your Property Returns?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join our successful R2SA investors and start earning premium returns on your property investment.
            </p>
            <Button 
              asChild
              size="lg"
              className="bg-warm-bg text-brand-darkGrey hover:bg-warm-bg/90"
            >
              <Link to="/book-consultation">Book a Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default R2SAStrategy;
