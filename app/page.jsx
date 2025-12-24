import Footer from "./components/Footer";
import Hero from "./components/Hero";
import OurServicesSection from "./components/OurServicesSection";
// import IndustriesSection from "./components/IndustriesSection";
import OurApproachSection from "./components/OurApproachSection";
// import TestimonialsSection from "./components/TestimonialsSection";
import ContactSection from "./components/ContactSection";
import OurTeamSection from './components/OurTeamSection';

export default function Home() {
  return (
    <div className="sm:pt-[60px] bg-[#191C26]">
      <Hero/>
      <OurServicesSection/>
      {/* <IndustriesSection/> */}
      <OurApproachSection/>
      {/* <TestimonialsSection/> */}
      <OurTeamSection/>
      <ContactSection/>
      <Footer/>
    </div>
  );
}
