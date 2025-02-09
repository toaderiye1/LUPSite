import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Shield, TrendingUp, ChartBar, ArrowRight, Users, MessageSquare, Clock } from "lucide-react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";

const R2SAStrategy = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 30,
      scale: 0.9
    },
    visible: { 
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  const iconVariants = {
    initial: { scale: 1, rotate: 0 },
    hover: {
      scale: 1.2,
      rotate: [0, -10, 10, -10, 0],
      transition: {
        duration: 0.6,
        ease: "easeInOut",
        times: [0, 0.2, 0.4, 0.6, 1]
      }
    }
  };

  return (
    <div className="min-h-screen bg-brand-darkGrey font-cabin">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen bg-brand-darkGrey text-white flex items-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(242,218,166,0.1),transparent_70%)]" />
        
        <div className="container mx-auto px-4 py-20 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
              <motion.h1 
              className="text-3xl md:text-5xl lg:text-6xl font-bold mb-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              Why Choose 
              <span className="text-warm-bg mt-8"> Us?</span>
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="mb-4"
            >
              <img
                src="/lovable-uploads/LUP-logo-base.png"
                alt="LUP Property Logo"
                className="h-72 md:h-72 mx-auto mb-8"
                style={{ filter: 'brightness(0) invert(1)' }}
              />
            </motion.div>

            </motion.div>
        </div>
      </section>

      {/* Expert Support Section */}
      <motion.section 
        ref={containerRef}
        style={{ opacity, scale }}
        className="py-20 bg-[#f5f0ea]"
      >
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8,
              ease: [0.4, 0, 0.2, 1]
            }}
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-brand-darkGrey mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Expert Support, Tailored for Success
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              We understand what property stakeholders need because we're investors ourselves.
              Our proven approach combines local expertise with innovative solutions.
            </motion.p>

            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
            >
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
                <motion.div 
                  key={index}
                  variants={cardVariants}
                  whileHover={{ 
                    y: -8,
                    scale: 1.02,
                    transition: { 
                      type: "spring",
                      stiffness: 300,
                      damping: 10
                    }
                  }}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300
                           transform perspective-1000 hover:rotate-[0.5deg]"
                >
                  <motion.div 
                    className="w-12 h-12 bg-warm-bg/20 rounded-full flex items-center justify-center mb-6 mx-auto
                             hover:bg-warm-bg/30 transition-colors duration-300"
                    variants={iconVariants}
                    whileHover="hover"
                  >
                    <item.icon className="w-6 h-6 text-warm-bg" />
                  </motion.div>
                  <motion.h3 
                    className="text-xl font-bold text-brand-darkGrey mb-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    {item.title}
                  </motion.h3>
                  <motion.p 
                    className="text-gray-600"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    {item.description}
                  </motion.p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
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
                <motion.div 
                  key={index}
                  variants={cardVariants}
                  whileHover={{ 
                    y: -8,
                    scale: 1.02,
                    transition: { 
                      type: "spring",
                      stiffness: 300,
                      damping: 10
                    }
                  }}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300
                           transform perspective-1000 hover:rotate-[0.5deg]"
                >
                  <motion.div 
                    className="w-12 h-12 bg-warm-bg/20 rounded-full flex items-center justify-center mb-6 mx-auto
                             hover:bg-warm-bg/30 transition-colors duration-300"
                    variants={iconVariants}
                    whileHover="hover"
                  >
                    <item.icon className="w-6 h-6 text-warm-bg" />
                  </motion.div>
                  <motion.h3 
                    className="text-xl font-bold text-brand-darkGrey mb-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    {item.title}
                  </motion.h3>
                  <motion.p 
                    className="text-gray-600"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    {item.description}
                  </motion.p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Main Benefits Grid */}
      <motion.section 
        className="py-20 bg-brand-darkGrey/50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            <motion.div 
              className="bg-brand-darkGrey/40 rounded-2xl p-8 border border-warm-bg/10 hover:border-warm-bg/30 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <motion.h2 
                className="text-2xl font-bold text-brand-whiteish mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                1. Higher Rental Yields
              </motion.h2>
              <motion.p 
                className="text-gray-300 mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                Converting your rental properties into serviced accommodation can significantly maximise your rental yield. You can rent the property short-term and charge premium rates, especially in high-demand areas.
              </motion.p>
              <motion.p 
                className="text-warm-bg font-semibold"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                Earn up to three times more than traditional long-term rentals with a monthly cash flow of £1,000 against a £10,000 investment.
              </motion.p>
            </motion.div>

            <motion.div 
              className="bg-brand-darkGrey/40 rounded-2xl p-8 border border-warm-bg/10 hover:border-warm-bg/30 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <motion.h2 
                className="text-2xl font-bold text-brand-whiteish mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                2. Better Flexibility and Control
              </motion.h2>
              <motion.ul 
                className="space-y-3 text-gray-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <motion.li 
                  className="flex items-start"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <ArrowRight className="w-5 h-5 text-warm-bg mr-2 mt-1 flex-shrink-0" />
                  <span>Use the property when you want</span>
                </motion.li>
                <motion.li 
                  className="flex items-start"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <ArrowRight className="w-5 h-5 text-warm-bg mr-2 mt-1 flex-shrink-0" />
                  <span>Earn high profits year-round</span>
                </motion.li>
                <motion.li 
                  className="flex items-start"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <ArrowRight className="w-5 h-5 text-warm-bg mr-2 mt-1 flex-shrink-0" />
                  <span>Adjust rental rates based on market demand</span>
                </motion.li>
                <motion.li 
                  className="flex items-start"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  <ArrowRight className="w-5 h-5 text-warm-bg mr-2 mt-1 flex-shrink-0" />
                  <span>Manage bookings easily</span>
                </motion.li>
              </motion.ul>
            </motion.div>
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
              <motion.div 
                key={index}
                className="bg-brand-darkGrey/40 rounded-2xl p-8 border border-warm-bg/10 hover:border-warm-bg/30 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <item.icon className="w-12 h-12 text-warm-bg mb-6" />
                <motion.h3 
                  className="text-xl font-bold text-brand-whiteish mb-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {item.title}
                </motion.h3>
                <motion.p 
                  className="text-gray-300"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {item.description}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Property Finding Strategy Section */}
      <motion.section 
        className="py-20 bg-brand-darkGrey/70"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-brand-whiteish mb-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Discover Premium R2SA Investment Opportunities
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-300 mb-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Our strategic approach to property selection ensures maximum returns on your R2SA investments
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div 
                className="bg-brand-darkGrey/40 rounded-2xl p-8 border border-warm-bg/10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <motion.h3 
                  className="text-2xl font-bold text-brand-whiteish mb-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  Strategic Location Analysis
                </motion.h3>
                <motion.p 
                  className="text-gray-300 mb-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  We identify prime locations near transport hubs, business districts, and tourist attractions that consistently deliver premium returns. Our data-driven approach ensures your property stands out in high-demand areas.
                </motion.p>
                <motion.ul 
                  className="space-y-3 text-gray-300"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <motion.li 
                    className="flex items-start"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    <ArrowRight className="w-5 h-5 text-warm-bg mr-2 mt-1 flex-shrink-0" />
                    <span>Prime city centre locations</span>
                  </motion.li>
                  <motion.li 
                    className="flex items-start"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    <ArrowRight className="w-5 h-5 text-warm-bg mr-2 mt-1 flex-shrink-0" />
                    <span>Proximity to transport links</span>
                  </motion.li>
                  <motion.li 
                    className="flex items-start"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                  >
                    <ArrowRight className="w-5 h-5 text-warm-bg mr-2 mt-1 flex-shrink-0" />
                    <span>High-demand business districts</span>
                  </motion.li>
                </motion.ul>
              </motion.div>

              <motion.div 
                className="bg-brand-darkGrey/40 rounded-2xl p-8 border border-warm-bg/10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <motion.h3 
                  className="text-2xl font-bold text-brand-whiteish mb-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  Property Excellence Standards
                </motion.h3>
                <motion.p 
                  className="text-gray-300 mb-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  Each property in our portfolio is carefully selected to meet our strict criteria for R2SA success. We focus on properties that offer unique advantages and superior guest experiences.
                </motion.p>
                <motion.ul 
                  className="space-y-3 text-gray-300"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <motion.li 
                    className="flex items-start"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    <ArrowRight className="w-5 h-5 text-warm-bg mr-2 mt-1 flex-shrink-0" />
                    <span>Modern amenities and furnishings</span>
                  </motion.li>
                  <motion.li 
                    className="flex items-start"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    <ArrowRight className="w-5 h-5 text-warm-bg mr-2 mt-1 flex-shrink-0" />
                    <span>Optimal room configurations</span>
                  </motion.li>
                  <motion.li 
                    className="flex items-start"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                  >
                    <ArrowRight className="w-5 h-5 text-warm-bg mr-2 mt-1 flex-shrink-0" />
                    <span>Unique property features</span>
                  </motion.li>
                </motion.ul>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        className="py-20 bg-brand-darkGrey/50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-brand-whiteish mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Ready to Maximise Your Property Returns?
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-300 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Join our successful R2SA investors and start earning premium returns on your property investment.
            </motion.p>
            <Button 
              asChild
              size="lg"
              className="bg-warm-bg text-brand-darkGrey hover:bg-warm-bg/90"
            >
              <Link to="/book-consultation">Book a Consultation</Link>
            </Button>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default R2SAStrategy;
