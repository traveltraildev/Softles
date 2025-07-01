"use client";

import React, { useRef } from 'react';
import Image from "next/image";
import Separator from "@/public/Separator.png";
import C1 from "@/public/C1.jpg";
import C2 from "@/public/C2.jpg";
import C3 from "@/public/C3.png";
import SoftLes from "@/public/SoftLes.png";
import Logo1 from "@/public/logo_1.png";
import Logo2 from "@/public/logo_2.png";
import Logo3 from "@/public/logo_3.png";
import Logo4 from "@/public/logo_4.png";
import Logo5 from "@/public/logo_5.png";
import Logo6 from "@/public/logo_6.png";
import Logo7 from "@/public/logo_7.png";
import Logo8 from "@/public/logo_8.png";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

const testimonials = [
  {
    image: C1,
    name: "Mark Jeffery",
    title: "Tennis coach",
    company: "",
    text: "Worked into the early hours and turned around great work ahead of a large sales webinar. The team can receive a directional brief and with light touch supervision produce creative and professional work. Particularly adept at anything WordPress."
  },
  {
    image: C2,
    name: "Sunita Baisla",
    title: "Suyog NGO",
    company: "",
    text: "Softles delivered a robust platform for our SaaS launch. Their attention to detail and creative approach made a huge difference. Highly recommended for any digital project."
  },
  {
    image: C3,
    name: "Rahul Tyagi",
    title: "Founder",
    company: "Brunswick Fur Food",
    text: "The UX/UI design system Softles built for us streamlined our workflow and improved our product's usability. The team is responsive and talented."
  },
  {
    image: SoftLes,
    name: "Priya Verma",
    title: "Founder",
    company: "EduSpark",
    text: "From ideation to launch, Softles was a true partner. Their prototyping and user research helped us validate our ideas quickly and efficiently."
  },
  {
    image: SoftLes,
    name: "Rahul Mehra",
    title: "CEO",
    company: "AgriNext",
    text: "We saw a 30% increase in user engagement after Softles revamped our digital presence. Their development and QA teams are top-notch."
  }
];

const clientLogos = [Logo1, Logo2, Logo3, Logo4, Logo5, Logo6, Logo7, Logo8];

export default function ServicesSection4() {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const visibleCount = 2;
  const maxIndex = Math.max(0, testimonials.length - visibleCount);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 < 0 ? maxIndex : prev - 1));
  };
  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1 > maxIndex ? 0 : prev + 1));
  };

  return (
    <div className="min-h-[40rem] p-[10px] lg:px-[120px] w-full py-[120px] bg-[#111319] bg-grid-white flex flex-col justify-center place-content-between relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#191C26]/80 to-[#23263a]/90 pointer-events-none -z-10" />
      <div className="flex flex-col">
        <p className="flex items-center text-base font-normal text-[#FFFFFF]"><Image src={Separator} className="mr-[10px]" alt="separator"/> Testimonials</p>
        <span className="mt-2 lg:mt-5 mb-2 lg:mb-0 text-3xl md:text-[53px] lg:text-[64px] leading-none md:leading-[64px] lg:leading-[76.8px] text-[#FFFFFF]">What our Client&apos;s Say</span>
        <span className="text-base text-[#BCC1CA] mt-2 max-w-2xl">
          Hear from our clients about their experience working with us and the impact we've made.
        </span>
      </div>
      <div className="mt-16 relative w-full flex flex-col items-center justify-center gap-12">
        {/* Arrows outside cards */}
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
            {testimonials.slice(currentIndex, currentIndex + visibleCount).map((t, idx) => (
              <BackgroundBeamsWithCollision key={idx} className="flex flex-col md:flex-row items-center gap-8 p-8 bg-gradient-to-br from-[#23263a] to-[#181B23] rounded-2xl shadow-lg border border-[#23263a]/60 w-1/2 max-w-full min-h-[320px]">
                <Image src={t.image} className="w-[100px] h-[100px] rounded-full object-cover border-4 border-[#191C26] shadow-md mb-6 md:mb-0" alt={t.name} />
                <div className="flex-1 flex flex-col gap-4 items-center md:items-start">
                  <p className="text-lg md:text-xl font-medium text-[#e5e7ef] leading-relaxed italic text-center md:text-left">&ldquo;{t.text}&rdquo;</p>
                  <div className="mt-2 text-center md:text-left">
                    <span className="block text-xl font-semibold text-[#fff]">{t.name}</span>
                    <span className="block text-sm text-[#b0b3c7]">{t.title}</span>
                    <span className="block text-sm text-[#DC4242] font-semibold">{t.company}</span>
                  </div>
                </div>
              </BackgroundBeamsWithCollision>
            ))}
          </div>
          <button
            aria-label="Next"
            onClick={handleNext}
            className="absolute -right-16 z-20 bg-[#23263a] hover:bg-[#DC4242] text-white rounded-full p-3 shadow-lg transition-all"
            style={{ top: '50%', transform: 'translateY(-50%)' }}
          >
            <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2"><path d="M11 6l8 8-8 8"/></svg>
          </button>
        </div>
        {/* Client Logo Rail - now below testimonials, full width, edge-to-edge */}
        <div className="overflow-hidden w-screen fixed left-0 right-0 mt-20" style={{position: 'relative'}}>
          <div className="flex gap-20 animate-logo-rail whitespace-nowrap" style={{ animation: 'logo-rail 18s linear infinite' }}>
            {clientLogos.concat(clientLogos).map((logo, idx) => (
              <Image key={idx} src={logo} alt={`Client Logo ${idx + 1}`} className="h-12 w-auto inline-block" />
            ))}
          </div>
        </div>
      </div>
      <style jsx global>{`
        @keyframes logo-rail {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-logo-rail {
          will-change: transform;
        }
      `}</style>
    </div>
  );
}
