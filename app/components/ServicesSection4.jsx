"use client";
import Image from "next/image";
import Separator from "@/public/Separator.png";

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

export default function ServicesSection4() {
    return (
        <div className="min-h-[38rem] lg:px-[120px] w-full py-[90px] bg-[#111319] flex flex-col justify-center place-content-between">
            <div className="flex flex-col">
                <p className="flex items-center text-base font-normal text-[#FFFFFF]"><Image src={Separator} className="mr-[10px]" alt="separator"/> Our Services</p>
                <span className="mt-5 font-bold text-[64px] leading-[76.8px] text-[#FFFFFF]">We are more than our words</span>
            </div>
            <div className="mt-9">
                <Swiper
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="w-full text-white min-h-[387px] bg-[#191C26]"
                >
                    <SwiperSlide>
                        <div className="flex justify-center items-center">
                        Slide 1
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex justify-center items-center">
                        Slide 2
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex justify-center items-center">
                        Slide 3
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}
