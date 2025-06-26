"use client";

import Image from "next/image";
import Separator from "@/public/Separator.png";
import UserResearch from "@/public/UserResearch.png";
import InterfaceDesign from "@/public/InterfaceDesign.png";
import DesignSystem from "@/public/DesignSystem.png";
import Prototyping from "@/public/Prototyping.png";
import AuditingTesting from "@/public/AuditingTesting.png";
import { useState } from "react";

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
    title: "User Research",
    bullets: [
      "Stakeholder Interviews",
      "Persona Development",
      "Journey Mapping",
      "Usability Studies",
    ],
  },
  {
    image: DesignSystem,
    title: "UX/UI Design System",
    bullets: [
      "Wireframing & Mockups",
      "Design System Creation",
      "Branding & Visual Identity",
      "Interaction Design",
    ],
  },
  {
    image: InterfaceDesign,
    title: "Development",
    bullets: [
      "Frontend & Backend Engineering",
      "API Development",
      "Cloud Integration",
      "Performance Optimization",
    ],
  },
  {
    image: AuditingTesting,
    title: "AI Solutions",
    bullets: [
      "AI Integrations",
      "Agentic AI (Autonomous systems)",
      "Custom Chatbots & Virtual Agents",
      "Predictive Analytics",
    ],
  },
  {
    image: Prototyping,
    title: "Prototyping",
    bullets: [
      "Interactive Prototypes",
      "Rapid Iteration",
      "User Testing",
      "Feedback Loops",
    ],
  },
  {
    image: AuditingTesting,
    title: "QA / Testing",
    bullets: [
      "Accessibility Audits",
      "Automated & Manual Testing",
      "Performance Auditing",
      "Continuous Improvement",
    ],
  },
];

export default function ServicesSection1() {
  return (
    <div className="min-h-[30rem] p-[10px] lg:px-[120px] w-full py-[90px] bg-[#191C26] flex flex-col justify-center">
      <div className="flex flex-col">
        <p className="flex items-center text-base font-normal text-[#FFFFFF]">
          <Image src={Separator} className="mr-[10px]" alt="separator" />
          What We Do
        </p>
        <span className="mt-2 lg:mt-5 mb-4 lg:mb-0 font-bold text-3xl md:text-[53px] lg:text-[64px] leading-none md:leading-[64px] lg:leading-[76.8px] text-[#FFFFFF]">
          What we do
        </span>
      </div>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="group bg-gradient-to-br from-[#23263a] to-[#181B23] rounded-2xl shadow-lg p-8 flex flex-col items-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <div className="mb-4 transition-transform duration-300 group-hover:rotate-12">
              <Image src={service.image} alt={typeof service.title === "string" ? service.title : "Service"} width={64} height={64} className="rounded-full" />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-center text-white group-hover:text-[#DC4242] transition-colors duration-200">{service.title}</h3>
            <ul className="text-gray-300 text-sm list-disc pl-4 text-left space-y-1">
                {service.bullets.map((b, i) => (
                    <li key={i} className="relative">
                        {b}
                    </li>
                ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}