"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

/* ---------- Tooltip for bullets ---------- */
function BulletTooltip({ children, tip }) {
  const [show, setShow] = useState(false);
  return (
    <span
      className="relative"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {children}
      {show && (
        <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 z-20 bg-[#23263a] text-white text-xs px-2.5 py-1.5 rounded shadow-lg whitespace-nowrap">
          {tip}
        </span>
      )}
    </span>
  );
}

const services = [
  {
    image: "/UserResearch.png",
    title: "Research & Strategy",
    bullets: [
      { txt: "Stakeholder interviews",  tip: "In-depth discussions to align business goals with user needs." },
      { txt: "Persona & journey mapping", tip: "Visualize user behavior to uncover pain-points & opportunities." },
      { txt: "Usability studies", tip: "Observe real users to validate or refine product decisions." },
      { txt: "Product strategy", tip: "Prioritise features and define KPIs for measurable impact." },
    ],
  },
  {
    image: "/DesignSystem.png",
    title: "Design & Prototyping",
    bullets: [
      { txt: "Wireframing & mockups", tip: "Low → high fidelity screens that map every interaction." },
      { txt: "Design systems & branding", tip: "Re-usable components that ensure brand consistency at scale." },
      { txt: "Interactive prototypes", tip: "Clickable demos for rapid feedback before writing code." },
      { txt: "User testing", tip: "Task-based sessions to refine UX and boost conversion." },
    ],
  },
  {
    image: "/InterfaceDesign.png",
    title: "Development",
    bullets: [
      { txt: "Frontend & backend dev", tip: "Pixel-perfect React / Next.js paired with robust Node or Python APIs." },
      { txt: "API & cloud integration", tip: "Serverless, micro-services and third-party integrations." },
      { txt: "3rd Party Integration solutions", tip: "Platform powered features that sync data in real time." },
      { txt: "Performance optimization", tip: "Sub-second load times and perfect Lighthouse scores." },
    ],
  },
  /*  QA card removed, AI card added */
  {
    image: "/Prototyping.png",  // re-use icon
    title: "AI & Automation",
    bullets: [
      { txt: "LLM integration & fine-tuning", tip: "Custom models that speak your brand voice." },
      { txt: "Custom chatbots & voice agents", tip: "24/7 support across web, mobile and smart speakers." },
      { txt: "Process automation & RPA", tip: "Save hours by automating repetitive workflows." },
      { txt: "Predictive analytics dashboards", tip: "Turn data into foresight with real-time ML insights." },
    ],
  },
];

function MobileStackCarousel({ services }) {
  const [active, setActive] = useState(0);

  const handleNext = () => setActive((prev) => (prev + 1) % services.length);
  const handlePrev = () => setActive((prev) => (prev - 1 + services.length) % services.length);

  // Optional: Auto-play
  // useEffect(() => {
  //   const interval = setInterval(handleNext, 5000);
  //   return () => clearInterval(interval);
  // }, []);

  return (
    <div className="sm:hidden w-full flex flex-col items-center py-8">
      <div className="relative w-full max-w-xs min-h-[460px]">
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -40 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="absolute inset-0 bg-gradient-to-br from-[#23263a] to-[#181B23] rounded-2xl shadow-lg p-8 flex flex-col items-start min-h-[320px]"
          >
            <div className="mb-6 flex items-center justify-start">
              <Image
                src={services[active].image}
                alt={services[active].title}
                width={72}
                height={72}
                className="rounded-full"
              />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-left text-white">{services[active].title}</h3>
            <ul className="w-full flex flex-col gap-3 mt-2 mb-6">
              {services[active].bullets.map((b, i) => (
                <li
                  key={i}
                  className="relative pl-10 py-2 bg-[#23263a]/60 rounded-lg text-base text-[#F3F4F6] font-medium shadow-sm border border-[#23263a] text-left"
                >
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center justify-center w-5 h-5 rounded-full bg-[#DC4242] text-white text-xs font-bold shadow-md">
                    <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                      <circle cx="10" cy="10" r="10" fill="#DC4242"/>
                      <path d="M7 10.5L9 12.5L13 8.5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  {b.txt}
                </li>
              ))}
            </ul>
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="flex gap-4 mt-6">
        <button
          onClick={handlePrev}
          className="flex h-8 w-8 items-center justify-center rounded-full bg-[#23263a] hover:bg-[#DC4242] text-white"
        >
          <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M13 17l-5-5 5-5"/>
          </svg>
        </button>
        <button
          onClick={handleNext}
          className="flex h-8 w-8 items-center justify-center rounded-full bg-[#23263a] hover:bg-[#DC4242] text-white"
        >
          <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M7 7l5 5-5 5"/>
          </svg>
        </button>
      </div>
    </div>
  );
}

export default function ServicesSection1() {
  return (
    <div className="min-h-[30rem] px-[10px] lg:px-[120px] w-full py-[90px] bg-[#191C26] flex flex-col justify-center place-content-between">
      <div className="flex flex-col">
        <p className="flex items-center text-base font-normal text-[#FFFFFF]">
          <Image src={"/Separator.png"} alt="separator"  width={0} height={0} sizes="(max-width: 768px) 40vw, (max-width: 1024px) 50vw, 33vw" className="object-cover overflow-hidden min-w-min h-[2px] mr-[10px]" />
          What We Do
        </p>
        <span className="mt-2 lg:mt-5 mb-2 lg:mb-0 font-bold text-3xl md:text-[53px] lg:text-[64px] leading-none md:leading-[64px] lg:leading-[76.8px] text-[#FFFFFF]">
          What we do
        </span>
        <span className="text-base text-[#BCC1CA] mt-2 max-w-2xl">
          We blend creativity and technology to deliver impactful digital products. Explore our core services below.
        </span>
      </div>

      {/* Mobile stack card carousel */}
      <MobileStackCarousel services={services} />

      {/* Desktop grid */}
      <div className="mt-10 hidden sm:grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="group bg-gradient-to-br from-[#23263a] to-[#181B23] rounded-2xl shadow-lg p-8 flex flex-col items-start transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:ring-2 hover:ring-[#DC4242]/40 relative min-h-[320px]"
          >
            <div className="mb-6 transition-transform duration-300 group-hover:rotate-12 flex items-center justify-start">
              <Image
                src={service.image}
                alt={service.title}
                width={72}
                height={72}
                className="rounded-full"
              />
            </div>

            <h3 className="text-2xl font-bold mb-4 text-left text-white group-hover:text-[#DC4242] transition-colors duration-200 leading-tight">
              {service.title}
            </h3>

            <ul className="w-full flex flex-col gap-3 mt-2 mb-6">
              {service.bullets.map((b, i) => (
                <li
                  key={i}
                  className="relative pl-10 py-2 bg-[#23263a]/60 rounded-lg text-base text-[#F3F4F6] font-medium shadow-sm border border-[#23263a] hover:border-[#DC4242] transition-all duration-200 text-left"
                >
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center justify-center w-5 h-5 rounded-full bg-[#DC4242] text-white text-xs font-bold shadow-md">
                    <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                      <circle cx="10" cy="10" r="10" fill="#DC4242"/>
                      <path d="M7 10.5L9 12.5L13 8.5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>

                  {/* Tooltip wrapped bullet text */}
                  <BulletTooltip tip={b.tip}>{b.txt}</BulletTooltip>
                </li>
              ))}
            </ul>

            <span className="pointer-events-none absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#DC4242]/10 blur" />
          </div>
        ))}
      </div>
    </div>
  );
}