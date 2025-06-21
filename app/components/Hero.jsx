"use client";

import Image from "next/image";
import Separator from "@/public/Separator.png";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import dynamic from 'next/dynamic'; // Import dynamic
import FloatingParticles from "./_components/FloatingParticles";
// import Infinite3DCarousel from "./_components/Infinite3DCarousel"; // Import directly then make dynamic

// Dynamically import R3F components
const ParallaxHeroImage = dynamic(() => import('./_components/ParallaxHeroImage'), {
    ssr: false,
    loading: () => <div className="md:w-1/2 w-full max-w-[592px] aspect-[592/512] bg-zinc-800 rounded-lg" />
});
const Infinite3DCarousel = dynamic(() => import('./_components/Infinite3DCarousel'), {
    ssr: false,
    loading: () => <div style={{ height: '80px', width: '100%' }} className="bg-zinc-800/50" />
});


export default function Hero() {
    const words = [
        {
            text: "UX UI Design",
            className: "lg:leading-[80px]",
            // cursorClassName: "invisible"
        },
    ];
    const words2 = [
        {
            text: "Studio.",
            className: "text-brand-red lg:leading-[54px]", // Updated to use brand-red
            // cursorClassName: "visible"
        },
    ];

    const carouselTexts = [
        "Business Websites",
        "E-commerce Platforms",
        "Mobile Applications",
        "SAAS Products",
        "Brand Identity",
        "User Experience",
        "Interface Design",
    ];

    return (
        <div className="min-h-[38rem] w-full pt-[176px] bg-[#111319] bg-grid-white flex flex-col items-center justify-between relative"> {/* Added relative positioning */}
            <FloatingParticles count={25} /> {/* Add particles here */}
            <div className="w-full px-[10px] lg:px-[120px] flex flex-col-reverse md:flex-row justify-center items-center place-content-between lg:gap-x-24 z-10"> {/* Ensure content is above particles */}
                <div className="flex flex-col md:w-1/2 py-10 lg:py-0">
                    <p className="flex items-center text-base font-normal text-[#FFFEFE] opacity-85"><Image src={Separator} className="mr-[10px]" alt="separator"/> Welcome to</p>
                    {/* <span className="mt-2 lg:mt-5 mb-4 lg:mb-0 font-bold text-3xl md:text-[53px] lg:text-7xl leading-none md:leading-[64px] lg:leading-[101px] text-[#FFFEFE] opacity-90">UI UX Design<br/>Studio.</span> */}
                    <TypewriterEffectSmooth words={words} />
                    <TypewriterEffectSmooth words={words2} />
                    <p className="text-[23px] mt-5 leading-7 lg:leading-[34px] font-normal text-[#FFFEFE] max-w opacity-85">We are specialize in breaking down complexity to design seamless and engaging digital products.</p>
                </div>
                <div className="md:w-1/2 w-full max-w-[592px] aspect-[592/512]"> {/* Container for the 3D image, maintaining aspect ratio */}
                    <ParallaxHeroImage src="/Container.png" />
                </div>
            </div>
            {/* Replace old marquee with the new 3D Carousel */}
            <div className="w-full z-20 mt-[80px] mb-5"> {/* Ensure this container allows carousel to be visible; z-index adjusted */}
                <Infinite3DCarousel texts={carouselTexts} />
            </div>
        </div>
    )
}