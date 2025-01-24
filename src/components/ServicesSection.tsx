import { Settings, ListChecks, MessageCircle, Sparkles, Wrench, HeartHandshake, BarChart3 } from "lucide-react";
import ServiceCard from "./ServiceCard";

const ServicesSection = () => {
  const services = [
    {
      icon: Settings,
      title: "Creation and optimisation of listings on all major platforms",
    },
    {
      icon: ListChecks,
      title: "Continuous adjustments to ensure maximum bookings and revenue",
    },
    {
      icon: MessageCircle,
      title: "Timely responses to guest inquiries and support during stays",
    },
    {
      icon: Sparkles,
      title: "Coordination of professional cleaning services to maintain a spotless property",
    },
    {
      icon: Wrench,
      title: "In-house maintenance and rapid response to guest issues",
    },
    {
      icon: HeartHandshake,
      title: "Bespoke service combining human support and technology for an optimal experience",
    },
    {
      icon: BarChart3,
      title: "Monthly reports to keep you informed on performance and earnings",
    },
  ];

  return (
    <section className="w-full py-8 px-4">
      <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8 text-warm-text font-cabin">
        Comprehensive Serviced Accommodation Management Services Tailored to Your Needs
      </h2>
      <div className="flex overflow-x-auto gap-8 p-6 bg-warm-bg rounded-lg">
        {services.map((service, index) => (
          <ServiceCard key={index} Icon={service.icon} title={service.title} />
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;