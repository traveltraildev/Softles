import Footer from "./components/Footer";
import Hero from "./components/Hero";
import ServicesSection1 from "./components/ServicesSection1";
import ServicesSection2 from "./components/ServicesSection2";
import ServicesSection3 from "./components/ServicesSection3";
import ServicesSection4 from "./components/ServicesSection4";
import ServicesSection5 from "./components/ServicesSection5";
import { motion } from "framer-motion";
import { sectionReveal } from "@/lib/animations"; // Assuming lib is correctly aliased or path is direct


export default function Home() {
  const sections = [
    { id: "hero", Component: Hero },
    { id: "services1", Component: ServicesSection1 },
    { id: "services2", Component: ServicesSection2 },
    { id: "services3", Component: ServicesSection3 },
    { id: "services4", Component: ServicesSection4 },
    { id: "services5", Component: ServicesSection5 },
    { id: "footer", Component: Footer },
  ];

  // Common viewport settings for all sections
  const viewportConfig = { once: true, amount: 0.15 }; // Trigger when 15% of the section is in view

  return (
    <div>
      {sections.map(({ id, Component }) => (
        <motion.section
          key={id}
          variants={sectionReveal}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <Component />
        </motion.section>
      ))}
    </div>
  );
}
