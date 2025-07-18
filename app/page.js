import Footer from "./components/Footer";
import Hero from "./components/Hero";
import ServicesSection1 from "./components/ServicesSection1";
// import ServicesSection2 from "./components/ServicesSection2";
import ServicesSection3 from "./components/ServicesSection3";
// import ServicesSection4 from "./components/ServicesSection4";
import ServicesSection5 from "./components/ServicesSection5";

export default function Home() {
  return (
    <div>
      <section>
        <Hero/>
      </section>
      <section id="about">
        <ServicesSection1/>
      </section>
      <section id="services">
        {/* <ServicesSection2/> */}
        <ServicesSection3/>
      </section>
      {/* <section id="work">
        <ServicesSection4/>
      </section> */}
      <section id="book-call">
        <ServicesSection5/>
      </section>
      <Footer/>
    </div>
  );
}
