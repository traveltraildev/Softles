"use client";

import { useState } from 'react';
import Image from "next/image";
import Separator from "@/public/Separator.png";
import Travel from "@/public/Travel.png";
import Agritech from "@/public/Agritech.png";
import Education from "@/public/Education.png";
import CaseStudy1 from "@/public/case_study_1.png";
import CaseStudy2 from "@/public/case_study_2.png";
import CaseStudy3 from "@/public/case_study_3.png";
import CaseStudy4 from "@/public/case_study_4.png";
import CaseStudy5 from "@/public/case_study_5.png";
import { useRef, useState as useLocalState } from 'react';
import { useMotionTemplate, useMotionValue, motion } from "framer-motion";


// Data-driven approach for industries
const industries = [
    {
        key: "Travel",
        label: "Travel",
        icon: Travel,
        image: CaseStudy1,
        description: "Empowering travel businesses with seamless booking, itinerary management, and customer engagement solutions."
    },
    {
        key: "Agritech",
        label: "Agritech",
        icon: Agritech,
        image: CaseStudy2,
        description: "Innovative digital solutions for agriculture to optimize operations and maximize impact."
    },
    {
        key: "Oil & Gas",
        label: "Oil & Gas",
        icon: Agritech,
        image: CaseStudy3,
        description: "Digital transformation for oil & gas sector, improving efficiency and safety."
    },
    {
        key: "NGO",
        label: "NGO",
        icon: Agritech,
        image: CaseStudy4,
        description: "Empowering NGOs with technology for greater social impact."
    },
    {
        key: "Education",
        label: "Education",
        icon: Education,
        image: CaseStudy5,
        description: "Transforming education with e-learning platforms, student management, and interactive content delivery."
    }
];

export default function ServicesSection2() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const visibleCount = 2;
    const maxIndex = Math.max(0, industries.length - visibleCount);

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev - 1 < 0 ? maxIndex : prev - 1));
    };
    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1 > maxIndex ? 0 : prev + 1));
    };

    return (
        <section className="min-h-[30rem] px-2 md:px-8 lg:px-[120px] w-full py-16 bg-[#111319] bg-grid-white text-white flex flex-col justify-center">
            <div className="flex flex-col mb-8">
                <p className="flex items-center text-base font-medium tracking-wide">
                    <Image src={Separator} className="mr-3" alt="separator" />
                    <span className="uppercase tracking-widest text-[#DC4242]">Industries We Serve</span>
                </p>
                <span className="mt-2 lg:mt-5 mb-2 lg:mb-0 font-bold text-3xl md:text-[53px] lg:text-[64px] leading-tight md:leading-[64px] lg:leading-[76.8px]">
                    We are more than our words
                </span>
                <span className="text-base text-[#BCC1CA] mt-2 max-w-2xl">
                    We empower businesses across diverse industries with tailored digital solutions. Explore our expertise below.
                </span>
            </div>
            <div className="w-full flex flex-col items-center justify-center">
                <div className="relative w-full max-w-7xl mx-auto flex items-center">
                    {/* Left Arrow OUTSIDE cards */}
                </div>
                <div className="relative w-full max-w-7xl mx-auto flex items-center">
                    <button
                        aria-label="Previous"
                        onClick={handlePrev}
                        className="absolute -left-16 z-20 bg-[#23263a] hover:bg-[#DC4242] text-white rounded-full p-3 shadow-lg transition-all"
                        style={{ top: '50%', transform: 'translateY(-50%)' }}
                    >
                        <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 22l-8-8 8-8"/></svg>
                    </button>
                    <div className="flex w-full gap-8 justify-center">
                        {industries.slice(currentIndex, currentIndex + visibleCount).map((industry, idx) => (
                            <div key={industry.key} className="bg-[#191C26]/90 rounded-2xl shadow-lg flex flex-col items-center justify-center p-4 lg:p-8 border border-white/10 w-1/2 max-w-full">
                                <div className="w-full flex-1 flex items-center justify-center">
                                    <Image
                                        src={industry.image}
                                        alt={industry.label}
                                        className="rounded-xl mb-6 shadow-md object-cover"
                                        style={{ height: '340px', width: '100%' }}
                                    />
                                </div>
                                <h3 className="text-2xl font-bold mb-2 text-white text-left w-full">{industry.label}</h3>
                                <p className="text-base text-white/90 mb-2 text-left w-full max-w-xl">{industry.description}</p>
                            </div>
                        ))}
                    </div>
                    {/* Right Arrow OUTSIDE cards */}
                                <button
                        aria-label="Next"
                        onClick={handleNext}
                        className="absolute -right-16 z-20 bg-[#23263a] hover:bg-[#DC4242] text-white rounded-full p-3 shadow-lg transition-all"
                        style={{ top: '50%', transform: 'translateY(-50%)' }}
                    >
                        <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2"><path d="M11 6l8 8-8 8"/></svg>
                                    </button>
                </div>
            </div>
        </section>
    );
}