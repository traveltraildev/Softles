"use client";

import Image from "next/image";
import Separator from "@/public/Separator.png";
import C1 from "@/public/C1.jpg";
import C2 from "@/public/C2.jpg";
import C3 from "@/public/C3.png";

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

export default function ServicesSection4() {
    return (
        <div className="min-h-[30rem] p-[10px] lg:px-[120px] w-full py-[90px] bg-[#111319] bg-grid-white flex flex-col justify-center place-content-between"> {/* Reduced min-h */}
            <div className="flex flex-col">
                <p className="flex items-center text-base font-normal text-[#FFFFFF]"><Image src={Separator} className="mr-[10px]" alt="separator"/> Our Services</p>
                <span className="mt-2 lg:mt-5 mb-4 lg:mb-0 text-3xl md:text-[53px] lg:text-[64px] leading-none md:leading-[64px] lg:leading-[76.8px] text-[#FFFFFF]">What our Client&apos;s Say</span>
            </div>
            <div className="mt-9">
                <Swiper
                    spaceBetween={30}
                    pagination={{
                        dynamicBullets: true,
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="w-full text-white min-h-[387px] bg-[#191C26] font-normal text-[17.98px] leading-[26.97px]"
                >
                    <SwiperSlide>
                        <BackgroundBeamsWithCollision className="flex flex-col-reverse lg:flex-row justify-center items-center place-content-between gap-10 p-10">
                            <div className="flex flex-col gap-10 md:p-10">
                                <p>Worked into the early hours and turn around great work ahead of a large sales webinar. Unusually (I think) for market agencies based in India can receive a directional brief and with light touch supervision produce creative and professional work. Particularly adept at anything wordpress.</p>
                                <span className="text-center">Shakti Singh</span>
                            </div>
                            <Image src={C1} className="w-[340px] h-auto z-10" alt="Pic" />
                        </BackgroundBeamsWithCollision>
                    </SwiperSlide>
                    <SwiperSlide>
                        <BackgroundBeamsWithCollision className="flex flex-col-reverse lg:flex-row justify-center  items-center place-content-between gap-10 p-10">
                            <div className="flex flex-col gap-10 md:p-10">
                                <p>Worked into the early hours and turn around great work ahead of a large sales webinar. Unusually (I think) for market agencies based in India can receive a directional brief and with light touch supervision produce creative and professional work. Particularly adept at anything wordpress.</p>
                                <span className="text-center">Tanmay Sharma</span>
                            </div>
                            <Image src={C2} className="w-[340px] h-auto z-10" alt="Pic" />
                        </BackgroundBeamsWithCollision>
                    </SwiperSlide>
                    <SwiperSlide>
                        <BackgroundBeamsWithCollision className="flex flex-col-reverse lg:flex-row justify-center items-center lg:place-content-between gap-10 p-10">
                            <div className="flex flex-col gap-10 md:p-10">
                                <p>Worked into the early hours and turn around great work ahead of a large sales webinar. Unusually (I think) for market agencies based in India can receive a directional brief and with light touch supervision produce creative and professional work. Particularly adept at anything wordpress.</p>
                                <span className="text-center">Manish Rana</span>
                            </div>
                            <Image src={C3} className="w-[340px] h-auto z-10" alt="Pic" />
                        </BackgroundBeamsWithCollision>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}
