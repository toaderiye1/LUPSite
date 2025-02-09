import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChartBar, Shield, Users, Briefcase, TrendingUp, Building, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Investor = () => {
  return (
    <div className="min-h-screen bg-brand-whiteish font-cabin">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: 'url("/lovable-uploads/lux-flat-exterior.png")',
          }}
        >
          <div className="absolute inset-0 bg-brand-darkGrey/50" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-darkGrey/85 via-brand-darkGrey/55 to-transparent" />
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
              Access exclusive R2SA deals with <span className="text-warm-bg font-semibold">10-25% ROI</span> and our proven system for passive property income.
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
              ><Link to="/why-choose-us">
                Learn More About R2SA
                </Link>
              </Button>
            </div>
            
            <div className="pt-8 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-gray-700 animate-fade-in [animation-delay:600ms]">
              <div className="text-center">
                <p className="text-3xl font-bold text-warm-bg">£XX</p>
                <p className="text-sm text-gray-400">Portfolio Value</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-warm-bg">XX%</p>
                <p className="text-sm text-gray-400">Avg. ROI</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-warm-bg">XX</p>
                <p className="text-sm text-gray-400">Happy Investors</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-warm-bg">XX</p>
                <p className="text-sm text-gray-400">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-darkGrey/5 to-brand-darkGrey/0"></div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="container mx-auto px-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Your Shortcut to 
            <span className="text-warm-bg ml-2">Profitable Property Deals</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {[
              {
                icon: "💎",
                title: "R2SA Deal Sourcing",
                description: "Expert analysis and due diligence for premium serviced accommodation opportunities.",
                features: ["Market analysis", "Location scoring", "Yield assessment", "Growth potential"],
                gradient: "from-[#FFD700]/20 via-transparent to-transparent"
              },
              {
                icon: "⚡",
                title: "Time-Saving Solutions",
                description: "We eliminate guesswork and handle all aspects of deal sourcing and setup.",
                features: ["Deal negotiation", "Legal compliance", "Setup coordination", "Ongoing support"],
                gradient: "from-[#00FF87]/20 via-transparent to-transparent"
              },
              {
                icon: "📈",
                title: "Proven ROI",
                description: "Track record of delivering high-performing investment opportunities.",
                features: ["Performance tracking", "Yield optimisation", "Risk management", "Regular reporting"],
                gradient: "from-[#FF6B6B]/20 via-transparent to-transparent"
              }
            ].map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="relative group"
              >
                <div className={`absolute inset-0 bg-gradient-to-b ${card.gradient} opacity-50 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl`}></div>
                <div className="relative bg-white dark:bg-brand-darkGrey/40 backdrop-blur-sm rounded-3xl p-8 h-full border border-gray-200 dark:border-gray-800 hover:border-warm-bg transition-colors duration-300">
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-4xl">{card.icon}</span>
                    <motion.div
                      initial={false}
                      className="h-1 w-12 bg-warm-bg/30 group-hover:w-24 transition-all duration-300"
                    />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-brand-darkGrey dark:text-brand-whiteish">
                    {card.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {card.description}
                  </p>

                  <ul className="space-y-3">
                    {card.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + featureIndex * 0.1 }}
                        className="flex items-center text-sm text-gray-600 dark:text-gray-300"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-warm-bg mr-3" />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>

                  <motion.div 
                    className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-warm-bg/0 via-warm-bg to-warm-bg/0 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                    initial={false}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
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

      {/* Property Sourcing Section */}
      <motion.section 
        className="py-20 bg-brand-darkGrey/50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-brand-whiteish mb-6">
                  Premium R2SA Property Sourcing
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  Excelling in identifying and securing high-potential properties that deliver exceptional returns through our R2SA strategy. We combine market intelligence with local insights to source properties that consistently outperform.
                </p>
                <ul className="space-y-4">
                  {[
                    "Immediate rental income potential",
                    "Premium locations with high occupancy rates",
                    "Thoroughly vetted opportunities",
                    "Market-leading ROI performance"
                  ].map((item, index) => (
                    <motion.li 
                      key={index}
                      className="flex items-start text-gray-300"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.1 * index }}
                    >
                      <CheckCircle className="w-6 h-6 text-warm-bg mr-3 flex-shrink-0 mt-1" />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                className="relative"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="/lovable-uploads/lux-flat-exterior.png" 
                    alt="Luxury property exterior" 
                    className="w-full h-[400px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-darkGrey/80 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <div className="bg-brand-darkGrey/90 rounded-xl p-6 backdrop-blur-sm">
                      <h3 className="text-xl font-bold text-brand-whiteish mb-2">Premium Properties</h3>
                      <p className="text-gray-300">Carefully selected properties in prime locations that meet our strict R2SA criteria.</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Setup and Staging Section */}
      <motion.section 
        className="py-20 bg-[#f5f0ea]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-brand-darkGrey text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Professional Setup & Staging Services
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  image: "/lovable-uploads/lux-flat-interior.png",
                  title: "Interior Design Excellence",
                  description: "Transform spaces with premium furnishings and décor that appeals to high-value guests."
                },
                {
                  image: "/lovable-uploads/lux-flat-interior2.png",
                  title: "Complete Property Setup",
                  description: "From furniture to finishing touches, we handle every detail of your property setup."
                },
                {
                  image: "/lovable-uploads/deal-signing.png",
                  title: "Turnkey Management",
                  description: "Comprehensive property management services for hassle-free investments."
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <motion.img 
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-darkGrey/60 to-transparent" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-brand-darkGrey mb-3">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                  <motion.div 
                    className="absolute bottom-0 left-0 right-0 h-1 bg-warm-bg transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                    initial={false}
                  />
                </motion.div>
              ))}
            </div>

            <motion.div 
              className="mt-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Button 
                asChild
                size="lg"
                className="bg-warm-bg text-brand-darkGrey hover:bg-warm-bg/90"
              >
                <Link to="/book-consultation">Schedule Your Property Assessment</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* We're Investors Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-brand-darkGrey text-center mb-16">We're Investors, Just Like You</h2>
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <p className="text-xl text-gray-600">With years of experience in property investment, we understand your goals and challenges. Our success is built on delivering consistent results for our investors.</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <p className="text-4xl font-bold text-warm-bg">£XX</p>
                <p className="text-sm text-gray-600">Portfolio Value</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-warm-bg">XX%+</p>
                <p className="text-sm text-gray-600">Average ROI</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-warm-bg">XX+</p>
                <p className="text-sm text-gray-600">Happy Investors</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-warm-bg">XX+</p>
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
