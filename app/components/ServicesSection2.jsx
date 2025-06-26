"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from "next/image";

// Replace with your actual imports
import Separator from "@/public/Separator.png";
import Travel from "@/public/Travel.png";
import Agritech from "@/public/Agritech.png";
import Education from "@/public/Education.png";
import TravelImg from "@/public/TravelImg.png";
import AgriTechImg from "@/public/AgriTechImg.png";
import EducationImg from "@/public/EducationImg.png";

const tabsData = [
  {
    id: "Travel",
    title: "Travel",
    icon: Travel,
    image: TravelImg,
    description: "We craft compelling brand identities for travel companies that capture the spirit of adventure. Our strategies help you stand out in a competitive market.",
    services: ["Brand Strategy", "Visual Identity", "Marketing Campaigns", "Customer Experience"]
  },
  {
    id: "Agritech",
    title: "Agritech & Sustainability",
    icon: Agritech,
    image: AgriTechImg,
    description: "For innovators in agriculture and sustainability, we develop brands that communicate trust, innovation, and environmental responsibility.",
    services: ["Corporate Branding", "Product Launch", "Sustainability Reporting", "B2B Marketing"]
  },
  {
    id: "Education",
    title: "Education",
    icon: Education,
    image: EducationImg,
    description: "We help educational institutions build powerful brands that resonate with students, parents, and faculty. From logos to full enrollment campaigns.",
    services: ["Institutional Branding", "Admissions Marketing", "Alumni Engagement", "Campus Identity"]
  }
];

export default function ServicesSection2() {
  const [activeTab, setActiveTab] = useState(tabsData[0].id);
  const [direction, setDirection] = useState(0);
  
  // Auto-rotate tabs on larger screens
  useEffect(() => {
    if (window.innerWidth > 1024) {
      const interval = setInterval(() => {
        setDirection(1);
        setActiveTab(prev => {
          const currentIndex = tabsData.findIndex(tab => tab.id === prev);
          return tabsData[(currentIndex + 1) % tabsData.length].id;
        });
      }, 5000);
      
      return () => clearInterval(interval);
    }
  }, []);

  const handleTabChange = (newTab) => {
    const currentIndex = tabsData.findIndex(tab => tab.id === activeTab);
    const newIndex = tabsData.findIndex(tab => tab.id === newTab);
    
    setDirection(newIndex > currentIndex ? 1 : -1);
    setActiveTab(newTab);
  };

  const activeTabData = tabsData.find(tab => tab.id === activeTab);

  return (
    <div className="relative min-h-[30rem] px-[10px] lg:px-[120px] w-full py-[90px] bg-[#111319] text-[#FFFFFF] flex flex-col justify-center place-content-between overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
            `,
            backgroundSize: '24px 24px'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#111319] z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#111319] to-transparent z-10" />
      </div>
      
      <div className="relative z-10">
        <div className="flex flex-col">
          <p className="flex items-center text-base font-normal">
            <Image 
              src={Separator} 
              className="mr-[10px]" 
              alt="separator" 
              width={32}
              height={4}
            /> 
            Industries We Serve
          </p>
          <h2 className="mt-2 lg:mt-5 mb-4 lg:mb-0 font-bold text-3xl md:text-[53px] lg:text-[64px] leading-none md:leading-[64px] lg:leading-[76.8px] max-w-4xl">
            We are more than our <span className="text-[#DC4242]">words</span>
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row justify-center place-content-between lg:gap-x-10 mt-9">
          {/* Tab Navigation */}
          <motion.div 
            className="bg-[#191C26] min-h-fit lg:min-h-[387px] w-full lg:w-[357px] p-[15px] lg:p-[26px] rounded-xl"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <h2 className="font-normal text-lg leading-[32.22px] mb-[26px]">Industry or Domain</h2>
            <ul className="flex flex-col gap-[10px] md:gap-5 lg:gap-y-[30px]">
              {tabsData.map((tab) => (
                <motion.li 
                  key={tab.id}
                  className={`cursor-pointer font-normal text-base inline-flex items-center gap-x-5 p-3 rounded-lg transition-all ${
                    activeTab === tab.id 
                      ? "bg-[#DC4242]/10 text-[#DC4242] font-semibold border-l-4 border-[#DC4242]"
                      : "hover:bg-white/5"
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleTabChange(tab.id)}
                >
                  <Image 
                    src={tab.icon} 
                    alt={tab.title} 
                    className={activeTab === tab.id ? "brightness-125" : "opacity-80"} 
                    width={32}
                    height={32}
                  />
                  {tab.title}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Tab Content */}
          <div className="w-full lg:w-[807px] bg-[#191C26] max-h-fit lg:min-h-[387px] p-2 lg:p-[26px] rounded-xl mt-6 lg:mt-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: direction * 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -50 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="h-full"
              >
                <div className="flex flex-col h-full">
                  <div className="flex-1">
                    <div className="relative rounded-xl overflow-hidden mb-6">
                      <Image 
                        src={activeTabData.image} 
                        alt={activeTabData.title} 
                        className="w-full h-auto object-cover"
                      />
                    </div>
                    
                    <div className="px-4">
                      <h3 className="text-xl font-bold mb-3">{activeTabData.title}</h3>
                      <p className="text-gray-300 mb-5">{activeTabData.description}</p>
                      
                      <div className="flex flex-wrap gap-2">
                        {activeTabData.services.map((service, index) => (
                          <span 
                            key={index}
                            className="px-3 py-1.5 bg-white/5 rounded-full text-sm border border-white/10"
                          >
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 flex justify-center items-center gap-x-[10px]">
                    {tabsData.map((tab) => (
                      <button
                        key={tab.id}
                        onClick={() => handleTabChange(tab.id)}
                        className={`rounded-full transition-all ${
                          activeTab === tab.id 
                            ? "bg-[#DC4242] w-[12px] h-[12px]" 
                            : "bg-[#D9D9D9] w-[8px] h-[8px] hover:bg-[#DC4242] hover:w-[10px] hover:h-[10px]"
                        }`}
                        aria-label={`Switch to ${tab.title} tab`}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}