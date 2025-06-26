"use client";

import Image from "next/image";
import Separator from "@/public/Separator.png";
import C1 from "@/public/C1.jpg";
import C2 from "@/public/C2.jpg";
import C3 from "@/public/C3.png";

import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

export default function ServicesSection4() {
    const swiperRef = useRef(null);

    // Pause autoplay on hover, resume on leave
    const handleMouseEnter = () => {
        if (swiperRef.current && swiperRef.current.autoplay) {
            swiperRef.current.autoplay.stop();
        }
    };
    const handleMouseLeave = () => {
        if (swiperRef.current && swiperRef.current.autoplay) {
            swiperRef.current.autoplay.start();
        }
    };

    return (
        <div className="min-h-[30rem] p-[10px] lg:px-[120px] w-full py-[90px] bg-[#111319] bg-grid-white flex flex-col justify-center place-content-between">
            <div className="flex flex-col">
                <p className="flex items-center text-base font-normal text-[#FFFFFF]"><Image src={Separator} className="mr-[10px]" alt="separator"/> Testimonials</p>
                <span className="mt-2 lg:mt-5 mb-4 lg:mb-0 text-3xl md:text-[53px] lg:text-[64px] leading-none md:leading-[64px] lg:leading-[76.8px] text-[#FFFFFF]">What our Client&apos;s Say</span>
            </div>
            <div className="mt-9 relative"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                {/* Simple custom arrows */}
                <button
                    className="swiper-button-prev absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-transparent hover:bg-[#DC4242]/20 text-[#DC4242] rounded-full w-10 h-10 flex items-center justify-center transition-colors duration-200 border-none shadow-none"
                    aria-label="Previous"
                >
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                        <path d="M20 8L12 16L20 24" stroke="#DC4242" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
                <button
                    className="swiper-button-next absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-transparent hover:bg-[#DC4242]/20 text-[#DC4242] rounded-full w-10 h-10 flex items-center justify-center transition-colors duration-200 border-none shadow-none"
                    aria-label="Next"
                >
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                        <path d="M12 8L20 16L12 24" stroke="#DC4242" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
                <Swiper
                    spaceBetween={30}
                    pagination={{
                        dynamicBullets: true,
                        clickable: true,
                    }}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    }}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                    }}
                    modules={[Pagination, Navigation, Autoplay]}
                    className="w-full text-white min-h-[387px] bg-[#191C26] font-normal text-[17.98px] leading-[26.97px]"
                    onSwiper={swiper => { swiperRef.current = swiper; }}
                >
                    {/* ...SwiperSlides remain unchanged... */}
                    <SwiperSlide>
                        <BackgroundBeamsWithCollision className="flex flex-col-reverse lg:flex-row justify-center items-center place-content-between gap-10 p-10">
                            <div className="group bg-gradient-to-br from-[#23263a] to-[#181B23] rounded-2xl shadow-lg p-8 flex flex-col md:flex-row items-center gap-10 w-full max-w-4xl mx-auto transition-transform duration-300 hover:scale-105 hover:shadow-2xl border border-[#23263a]/60">
                                <Image src={C1} className="w-[120px] h-[120px] rounded-full object-cover border-4 border-[#191C26] shadow-md mb-6 md:mb-0" alt="Pic" />
                                <div className="flex-1 flex flex-col gap-4 items-center md:items-start">
                                    <p className="text-lg md:text-xl font-medium text-[#e5e7ef] leading-relaxed italic text-center md:text-left">
                                        &ldquo;Worked into the early hours and turn around great work ahead of a large sales webinar. Unusually (I think) for market agencies based in India can receive a directional brief and with light touch supervision produce creative and professional work. Particularly adept at anything wordpress.&rdquo;
                                    </p>
                                    <div className="mt-2 text-center md:text-left">
                                        <span className="block text-xl font-semibold text-[#fff]">{'Shakti Singh'}</span>
                                        <span className="block text-sm text-[#b0b3c7]">Product Manager</span>
                                        <span className="block text-sm text-[#DC4242] font-semibold">Acme Corp</span>
                                    </div>
                                </div>
                            </div>
                        </BackgroundBeamsWithCollision>
                    </SwiperSlide>
                    <SwiperSlide>
                        <BackgroundBeamsWithCollision className="flex flex-col-reverse lg:flex-row justify-center items-center place-content-between gap-10 p-10">
                            <div className="group bg-gradient-to-br from-[#23263a] to-[#181B23] rounded-2xl shadow-lg p-8 flex flex-col md:flex-row items-center gap-10 w-full max-w-4xl mx-auto transition-transform duration-300 hover:scale-105 hover:shadow-2xl border border-[#23263a]/60">
                                <Image src={C2} className="w-[120px] h-[120px] rounded-full object-cover border-4 border-[#191C26] shadow-md mb-6 md:mb-0" alt="Pic" />
                                <div className="flex-1 flex flex-col gap-4 items-center md:items-start">
                                    <p className="text-lg md:text-xl font-medium text-[#e5e7ef] leading-relaxed italic text-center md:text-left">
                                        &ldquo;Worked into the early hours and turn around great work ahead of a large sales webinar. Unusually (I think) for market agencies based in India can receive a directional brief and with light touch supervision produce creative and professional work. Particularly adept at anything wordpress.&rdquo;
                                    </p>
                                    <div className="mt-2 text-center md:text-left">
                                        <span className="block text-xl font-semibold text-[#fff]">{'Tanmay Sharma'}</span>
                                        <span className="block text-sm text-[#b0b3c7]">CTO</span>
                                        <span className="block text-sm text-[#DC4242] font-semibold">Beta Solutions</span>
                                    </div>
                                </div>
                            </div>
                        </BackgroundBeamsWithCollision>
                    </SwiperSlide>
                    <SwiperSlide>
                        <BackgroundBeamsWithCollision className="flex flex-col-reverse lg:flex-row justify-center items-center lg:place-content-between gap-10 p-10">
                            <div className="group bg-gradient-to-br from-[#23263a] to-[#181B23] rounded-2xl shadow-lg p-8 flex flex-col md:flex-row items-center gap-10 w-full max-w-4xl mx-auto transition-transform duration-300 hover:scale-105 hover:shadow-2xl border border-[#23263a]/60">
                                <Image src={C3} className="w-[120px] h-[120px] rounded-full object-cover border-4 border-[#191C26] shadow-md mb-6 md:mb-0" alt="Pic" />
                                <div className="flex-1 flex flex-col gap-4 items-center md:items-start">
                                    <p className="text-lg md:text-xl font-medium text-[#e5e7ef] leading-relaxed italic text-center md:text-left">
                                        &ldquo;Worked into the early hours and turn around great work ahead of a large sales webinar. Unusually (I think) for market agencies based in India can receive a directional brief and with light touch supervision produce creative and professional work. Particularly adept at anything wordpress.&rdquo;
                                    </p>
                                    <div className="mt-2 text-center md:text-left">
                                        <span className="block text-xl font-semibold text-[#fff]">{'Manish Rana'}</span>
                                        <span className="block text-sm text-[#b0b3c7]">Marketing Lead</span>
                                        <span className="block text-sm text-[#DC4242] font-semibold">Gamma Ventures</span>
                                    </div>
                                </div>
                            </div>
                        </BackgroundBeamsWithCollision>
                    </SwiperSlide>
                </Swiper>
                {/* Swiper custom pagination color */}
                <style jsx global>{`
                    .swiper-pagination-bullet {
                        background:rgb(173, 157, 157) !important;
                        opacity: 1;
                        border: 2px solid rgb(170, 0, 0);
                        width: 12px;
                        height: 12px;
                        margin: 0 6px !important;
                        transition: background 0.2s, border 0.2s;
                    }
                    .swiper-pagination-bullet-active {
                        background: #DC4242 !important;
                        border-color: #DC4242 !important;
                    }
                `}</style>
            </div>
        </div>
    )
}
