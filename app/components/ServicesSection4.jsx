"use client";

import Image from "next/image";
import Separator from "@/public/Separator.png";
import C1 from "@/public/C1.jpg";
import C2 from "@/public/C2.jpg";
import C3 from "@/public/C3.png";

import React from 'react';
import dynamic from 'next/dynamic'; // Import dynamic
import Image from "next/image"; // Keep for Separator
import Separator from "@/public/Separator.png"; // Keep for Separator

// Dynamically import TestimonialCarousel3D
const TestimonialCarousel3D = dynamic(() => import('./_components/TestimonialCarousel3D'), {
    ssr: false,
    loading: () => <div style={{ height: '500px', width: '100%' }} className="bg-zinc-800/50 rounded-lg animate-pulse" />
});

// For useTexture in R3F, string paths are needed.
// If C1, C2, C3 are Image objects from Next.js, their .src property provides the path.
const C1Path = C1.src;
const C2Path = C2.src;
const C3Path = C3.src;

const testimonialsData = [
    {
        id: "client1",
        text: "Worked into the early hours and turn around great work ahead of a large sales webinar. Unusually (I think) for market agencies based in India can receive a directional brief and with light touch supervision produce creative and professional work. Particularly adept at anything wordpress.",
        name: "Shakti Singh",
        imageSrc: C1Path
    },
    {
        id: "client2",
        text: "They delivered a high-quality product on a tight deadline. Their team was responsive, professional, and a pleasure to work with. We saw a significant improvement in user engagement after the redesign.",
        name: "Tanmay Sharma",
        imageSrc: C2Path
    },
    {
        id: "client3",
        text: "The creative vision and technical expertise brought to our project were outstanding. They truly understood our brand and translated it into a beautiful and functional digital experience. Highly recommended!",
        name: "Manish Rana",
        imageSrc: C3Path
    }
];


export default function ServicesSection4() {
    return (
        <div className="min-h-[38rem] p-[10px] lg:px-[120px] w-full py-[90px] bg-[#111319] bg-grid-white flex flex-col justify-center"> {/* Removed place-content-between */}
            <div className="flex flex-col mb-8"> {/* Added margin for spacing */}
                <p className="flex items-center text-base font-normal text-[#FFFFFF]"><Image src={Separator} className="mr-[10px]" alt="separator"/> Our Services</p>
                <span className="mt-2 lg:mt-5 mb-4 lg:mb-0 text-3xl md:text-[53px] lg:text-[64px] leading-none md:leading-[64px] lg:leading-[76.8px] text-[#FFFFFF]">What our Client&apos;s Say</span>
            </div>
            <div className="mt-9 w-full"> {/* Ensure carousel container takes width */}
                <TestimonialCarousel3D items={testimonialsData} />
            </div>
        </div>
    )
}
