import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { ArrowRight, Key, Lock, Calendar, Handshake, ChartBar, Shield, Wrench } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Landlord = () => {
  return (
    <div className="min-h-screen bg-brand-whiteish font-cabin">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/lovable-uploads/lux-flat-interior.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="absolute inset-0 bg-brand-darkGrey/50" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-darkGrey/80 via-brand-darkGrey/60 to-transparent" />
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl space-y-8">
            <div className="flex flex-col gap-4"> 
              <span className="text-warm-bg font-semibold tracking-wider animate-fade-in">
                GUARANTEED RENTAL INCOME
              </span>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight text-brand-whiteish animate-fade-in">
                Transform Your Property Into a Premium Income Asset
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-gray-300 animate-fade-in [animation-delay:200ms] max-w-2xl">
              Earn up to <span className="text-warm-bg font-semibold">XX% more revenue</span> with our professional serviced accommodation management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in [animation-delay:400ms]">
              <Button 
                className="bg-warm-bg text-warm-text hover:bg-warm-hover transition-all duration-300 transform hover:scale-105"
                size="lg"
              >
                Book Property Assessment <ArrowRight className="ml-2" />
              </Button>
              <Button
                asChild
                className="bg-transparent border-2 border-warm-bg text-warm-bg hover:bg-warm-bg/10 transition-all duration-300"
                size="lg"
              >
                <Link to="/why-choose-us">
                  Learn More About R2SA
                </Link>
              </Button>
            </div>

            <div className="pt-8 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-gray-700 animate-fade-in [animation-delay:600ms]">
              <div className="text-center">
                <p className="text-3xl font-bold text-warm-bg">XX%</p>
                <p className="text-sm text-gray-400">Higher Revenue</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-warm-bg">XX%</p>
                <p className="text-sm text-gray-400">Occupancy Target</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-warm-bg">24/7</p>
                <p className="text-sm text-gray-400">Support</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-warm-bg">0</p>
                <p className="text-sm text-gray-400">Void Periods</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* End-to-End Management Section */}
      <section className="relative py-24 overflow-hidden bg-[#f8f5f0]">
        <div className="absolute inset-0 bg-gradient-to-b from-white/50 to-transparent"></div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="container mx-auto px-4"
        >
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              End-to-End Professional
              <span className="text-warm-bg block mt-2">Property Management</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Experience hassle-free property management with our comprehensive service suite
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {[
              {
                icon: "💰",
                title: "Guaranteed Rent",
                description: "Secure monthly payments regardless of occupancy levels.",
                features: ["Fixed monthly income", "No payment delays", "Long-term security", "Risk-free returns"],
                gradient: "from-[#FFD700]/10 via-transparent to-transparent"
              },
              {
                icon: "🔧",
                title: "24/7 Support",
                description: "Round-the-clock property and guest management.",
                features: ["Instant response", "Guest support", "Maintenance care", "Emergency handling"],
                gradient: "from-[#4F46E5]/10 via-transparent to-transparent"
              },
              {
                icon: "📈",
                title: "No Void Periods",
                description: "Continuous income stream throughout the year.",
                features: ["100% occupancy focus", "Market optimisation", "Seasonal strategies", "Revenue maximisation"],
                gradient: "from-[#10B981]/10 via-transparent to-transparent"
              },
              {
                icon: "⭐",
                title: "Premium Service",
                description: "Five-star hospitality standards for your property.",
                features: ["Quality assurance", "Professional cleaning", "Guest screening", "Regular inspections"],
                gradient: "from-[#F59E0B]/10 via-transparent to-transparent"
              }
            ].map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="relative group"
              >
                <div className={`absolute inset-0 bg-gradient-to-b ${card.gradient} opacity-50 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl`}></div>
                <div className="relative bg-white backdrop-blur-sm rounded-3xl p-6 h-full border border-gray-100 hover:border-warm-bg transition-colors duration-300 shadow-sm hover:shadow-md">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl">{card.icon}</span>
                    <motion.div
                      initial={false}
                      className="h-0.5 w-8 bg-warm-bg/30 group-hover:w-16 transition-all duration-300"
                    />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 text-brand-darkGrey group-hover:text-warm-bg transition-colors duration-300">
                    {card.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4">
                    {card.description}
                  </p>

                  <ul className="space-y-2">
                    {card.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + featureIndex * 0.1 }}
                        className="flex items-center text-sm text-gray-500"
                      >
                        <div className="w-1 h-1 rounded-full bg-warm-bg mr-2" />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>

                  <motion.div 
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-warm-bg/0 via-warm-bg to-warm-bg/0 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                    initial={false}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Landlord Benefits Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-darkGrey/5 to-transparent"></div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="container mx-auto px-4"
        >
          <div className="max-w-6xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Transform Your Property Investment
                <span className="text-warm-bg block mt-2">Into Premium Returns</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover the advantages of converting your rental property into serviced accommodation
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="space-y-4">
                  {[
                    { icon: "💷", text: "Guaranteed monthly rent from a trusted professional company" },
                    { icon: "👥", text: "High-quality, vetted professional clients" },
                    { icon: "🏆", text: "Property maintained to hotel standards" },
                    { icon: "🔧", text: "Comprehensive maintenance coverage" },
                    { icon: "✨", text: "No tenant-related complications" },
                    { icon: "💰", text: "Up to 30% tax benefits through capital allowances" }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start space-x-4 bg-white/80 backdrop-blur-sm p-4 rounded-xl hover:bg-white transition-colors duration-300"
                    >
                      <span className="text-2xl">{item.icon}</span>
                      <p className="text-gray-700">{item.text}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <img 
                    src="/lovable-uploads/lux-flat-lights.png"
                    alt="Luxury property exterior"
                    className="w-full h-[500px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-darkGrey/80 to-transparent" />
                </div>
              </motion.div>
            </div>

            {/* Partnership Options */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Guaranteed Rent Partnership",
                  description: "We become your long-term tenant, providing steady income and professional property management.",
                  image: "/lovable-uploads/lux-flat-development.png",
                  features: [
                    "Guaranteed monthly market value rent",
                    "Professional property maintenance",
                    "Weekly property inspections",
                    "Corporate and vetted guest bookings",
                    "Flexible visitation rights",
                    "Show home standard furnishing"
                  ],
                  gradient: "from-[#4F46E5]/20"
                },
                {
                  title: "Premium Management Service",
                  description: "Maximise your returns with our comprehensive management solution and expert tax benefits.",
                  image: "/lovable-uploads/lux-flat-outside.png",
                  features: [
                    "Higher rental yields",
                    "Full mortgage interest relief",
                    "Capital allowance benefits (20-30%)",
                    "Small business rate relief",
                    "Professional decoration service",
                    "Complete booking management"
                  ],
                  gradient: "from-[#10B981]/20"
                }
              ].map((option, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="relative group"
                >
                  <div className={`absolute inset-0 bg-gradient-to-b ${option.gradient} opacity-50 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl`}></div>
                  <div className="relative bg-white backdrop-blur-sm rounded-3xl overflow-hidden border border-gray-100 hover:border-warm-bg transition-colors duration-300 shadow-lg hover:shadow-xl">
                    <div className="h-48 relative">
                      <motion.img 
                        src={option.image}
                        alt={option.title}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-darkGrey/80 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <h3 className="text-2xl font-bold text-white mb-2">{option.title}</h3>
                        <p className="text-gray-200 text-sm">{option.description}</p>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <ul className="space-y-3">
                        {option.features.map((feature, featureIndex) => (
                          <motion.li
                            key={featureIndex}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 + featureIndex * 0.1 }}
                            className="flex items-center text-sm text-gray-600"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-warm-bg mr-3" />
                            {feature}
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    <motion.div 
                      className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-warm-bg/0 via-warm-bg to-warm-bg/0 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                      initial={false}
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div 
              className="mt-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Button 
                asChild
                size="lg"
                className="bg-warm-bg text-brand-darkGrey hover:bg-warm-bg/90"
              >
                <Link to="/book-consultation">Schedule a Property Assessment</Link>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Why Partner With Us Section */}
      <section className="py-24 bg-brand-darkGrey text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(242,218,166,0.1),transparent_70%)]" />
        <div className="container mx-auto px-4 relative">
          <h2 className="text-4xl font-bold text-center mb-16">Your Partner in Stress-Free Management</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <h3 className="text-3xl font-bold text-warm-bg">XX% Higher Revenue</h3>
              <p className="text-xl text-gray-300">Our serviced accommodation model consistently outperforms traditional letting, maximising your property's earning potential with predictable income and fewer hassles.</p>
              <Button 
                className="bg-warm-bg text-warm-text hover:bg-warm-hover"
                size="lg"
              >
                Calculate Your Potential Income
              </Button>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6">Our 4-Step Process</h3>
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
