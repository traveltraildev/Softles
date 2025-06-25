"use client";

import { useState, React, useRef, useEffect } from 'react';
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Separator from "@/public/Separator.png";
import TravelIcon from "@/public/Travel.png";
import AgritechIcon from "@/public/Agritech.png";
import EducationIcon from "@/public/Education.png";
import TravelImg from "@/public/TravelImg.png";
import AgriTechImg from "@/public/AgriTechImg.png";
import EducationImg from "@/public/EducationImg.png";

const tabsData = [
    { id: "Travel", label: "Travel", icon: TravelIcon, contentImg: TravelImg, altText: "Travel illustration" },
    { id: "Agritech", label: "Agritech, Oil & Gas, NGO", icon: AgritechIcon, contentImg: AgriTechImg, altText: "Agritech illustration" },
    { id: "Education", label: "Education", icon: EducationIcon, contentImg: EducationImg, altText: "Education illustration" },
];

export default function ServicesSection2() {
    const [activeTab, setActiveTab] = useState(tabsData[0].id);
    const tabRefs = useRef([]);

    const handleKeyDown = (event, index) => {
        let newIndex;
        if (event.key === "ArrowRight") {
            newIndex = (index + 1) % tabsData.length;
        } else if (event.key === "ArrowLeft") {
            newIndex = (index - 1 + tabsData.length) % tabsData.length;
        } else if (event.key === "Home") {
            newIndex = 0;
        } else if (event.key === "End") {
            newIndex = tabsData.length - 1;
        } else {
            return; // Exit if key is not handled
        }
        event.preventDefault();
        setActiveTab(tabsData[newIndex].id);
        tabRefs.current[newIndex]?.focus();
    };

    // Store refs for focusing
    useEffect(() => {
        tabRefs.current = tabRefs.current.slice(0, tabsData.length);
     }, []); // tabsData is constant, so run once on mount


    return (
        <div className="min-h-[38rem] px-[10px] lg:px-[120px] w-full py-[90px] bg-[#111319] bg-grid-white text-[#FFFFFF] flex flex-col justify-center">
            <div className="flex flex-col">
                <p className="flex items-center text-base font-normal"><Image src={Separator} className="mr-[10px]" alt="separator"/> Our Services</p>
                <span className="mt-2 lg:mt-5 mb-4 lg:mb-0 font-bold text-3xl md:text-[53px] lg:text-[64px] leading-none md:leading-[64px] lg:leading-[76.8px]">We are more than our words</span>
            </div>
            <div className="flex flex-col lg:flex-row justify-center place-content-between lg:gap-x-10 mt-9">
                <div className="bg-[#191C26] min-h-fit lg:min-h-[387px] w-full lg:w-[357px] p-[15px] lg:p-[26px]">
                    <h2 className="font-normal text-lg leading-[32.22px] mb-[26px]">Industry or Domain</h2>
                    <ul role="tablist" aria-label="Industry domains" className="flex flex-col gap-[10px] md:gap-5 lg:gap-y-[20px]"> {/* Reduced gap for more tabs */}
                        {tabsData.map((tab, index) => (
                            <li key={tab.id} className="relative">
                                <motion.button
                                    ref={el => tabRefs.current[index] = el}
                                    role="tab"
                                    id={`tab-${tab.id}`}
                                    aria-selected={activeTab === tab.id}
                                    aria-controls={`panel-${tab.id}`}
                                    onClick={() => setActiveTab(tab.id)}
                                    onKeyDown={(e) => handleKeyDown(e, index)}
                                    className={`w-full text-left font-normal text-base inline-flex items-center gap-x-5 p-3 rounded-md transition-colors duration-150 hover:text-brand-red focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-red ${activeTab === tab.id ? 'text-brand-red font-semibold' : 'text-white/80'}`}
                                >
                                    <Image src={tab.icon} alt="" width={24} height={24} /> {/* Ensure alt is empty for decorative icons if label is sufficient */}
                                    {tab.label}
                                </motion.button>
                                {activeTab === tab.id && (
                                    <motion.div
                                        className="absolute left-0 right-0 bottom-0 h-0.5 bg-brand-red" // Underline style
                                        layoutId="activeTabIndicator" // Morphing underline
                                        initial={false}
                                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                                    />
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="w-full lg:w-[807px] bg-[#191C26] max-h-fit lg:min-h-[387px] p-2 lg:p-[26px] relative overflow-hidden"> {/* Added relative and overflow for AnimatePresence */}
                    <AnimatePresence mode="wait">
                        {tabsData.map(tab => (
                            activeTab === tab.id && (
                                <motion.div
                                    key={tab.id}
                                    role="tabpanel"
                                    id={`panel-${tab.id}`}
                                    aria-labelledby={`tab-${tab.id}`}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.3 }}
                                    className="flex flex-col items-center justify-center h-full gap-y-6"
                                >
                                    <Image
                                        src={tab.contentImg}
                                        alt={tab.altText}
                                        className="max-w-full h-auto max-h-[280px] object-contain rounded-md" // Added rounded-md
                                        placeholder="blur" // Added placeholder blur
                                        // blurDataURL={tab.contentImg.blurDataURL} // Next.js usually infers this for static imports
                                    />
                                    {/* Pagination dots - can be dynamic based on activeTab */}
                                    <div className="flex justify-center items-center gap-x-[5px] mt-4">
                                        {tabsData.map(dotTab => (
                                            <div
                                                key={`dot-${dotTab.id}`}
                                                className={`rounded-full w-[9px] h-[9px] transition-colors duration-150 ${activeTab === dotTab.id ? "bg-brand-red" : "bg-[#D9D9D9]"}`}
                                            />
                                        ))}
                                    </div>
                                </motion.div>
                            )
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}