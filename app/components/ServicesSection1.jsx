"use client";

import Image from "next/image";
import Separator from "@/public/Separator.png";
import UserResearch from "@/public/UserResearch.png";
import InterfaceDesign from "@/public/InterfaceDesign.png";
import DesignSystem from "@/public/DesignSystem.png";
import Prototyping from "@/public/Prototyping.png";
import AuditingTesting from "@/public/AuditingTesting.png";
import { useState } from "react";
import Link from "next/link";

// Tooltip component
function Tooltip({ text }) {
  const [show, setShow] = useState(false);
  return (
    <span
      className="relative ml-1"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      <span className="inline-block align-middle cursor-help text-[#DC4242] font-bold">?</span>
      {show && (
        <span className="absolute left-1/2 -translate-x-1/2 top-7 z-20 bg-[#23263a] text-xs text-white px-3 py-2 rounded shadow-lg whitespace-nowrap">
          {text}
        </span>
      )}
    </span>
  );
}

const services = [
  {
    image: UserResearch,
    title: "Research & Strategy",
    bullets: [
      "Stakeholder interviews",
      "Persona & journey mapping",
      "Usability studies",
      "Product strategy",
    ],
  },
  {
    image: DesignSystem,
    title: "Design & Prototyping",
    bullets: [
      "Wireframing & mockups",
      "Design systems & branding",
      "Interactive prototypes",
      "User testing",
    ],
  },
  {
    image: InterfaceDesign,
    title: "Development",
    bullets: [
      "Frontend & backend dev",
      "API & cloud integration",
      "AI solutions & chatbots",
      "Performance optimization",
    ],
  },
  {
    image: AuditingTesting,
    title: "QA & Testing",
    bullets: [
      "Accessibility & performance audits",
      "Automated/manual testing",
      "Continuous QA",
      "Feedback loops",
    ],
  },
];

export default function ServicesSection1() {
  return (
    <div className="min-h-[30rem] px-[10px] lg:px-[120px] w-full py-[90px] bg-[#191C26] flex flex-col justify-center place-content-between">
      <div className="flex flex-col">
        <p className="flex items-center text-base font-normal text-[#FFFFFF]">
          <Image src={Separator} className="mr-[10px]" alt="separator" />
          What We Do
        </p>
        <span className="mt-2 lg:mt-5 mb-2 lg:mb-0 font-bold text-3xl md:text-[53px] lg:text-[64px] leading-none md:leading-[64px] lg:leading-[76.8px] text-[#FFFFFF]">
          What we do
        </span>
        <span className="text-base text-[#BCC1CA] mt-2 max-w-2xl">
          We blend creativity and technology to deliver impactful digital products. Explore our core services below.
        </span>
      </div>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="group bg-gradient-to-br from-[#23263a] to-[#181B23] rounded-2xl shadow-lg p-8 flex flex-col items-start transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:ring-2 hover:ring-[#DC4242]/40 relative min-h-[320px]"
          >
            <div className="mb-6 transition-transform duration-300 group-hover:rotate-12 flex items-center justify-start">
              <Image src={service.image} alt={typeof service.title === 'string' ? service.title : 'Service'} width={72} height={72} className="rounded-full" />
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
                  {b}
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