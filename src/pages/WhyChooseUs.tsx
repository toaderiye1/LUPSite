
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import Navbar from "@/components/Navbar";
import CallToActionSection from "@/components/CallToActionSection";

const WhyChooseUs = () => {
  return (
    <div className="min-h-screen bg-brand-whiteish">
      <Navbar />
      <main>
        <WhyChooseUsSection />
        <CallToActionSection />
      </main>
    </div>
  );
};

export default WhyChooseUs;
