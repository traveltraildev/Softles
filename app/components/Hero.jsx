import Image from "next/image";
import HeroImage from "@/public/Container.png";
import Separator from "@/public/Separator.png";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";


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
            className: "text-[#DC4242] lg:leading-[54px]",
            // cursorClassName: "visible"
        },
    ];

import Link from "next/link"; // Added for CTA button

    return (
        <div className="min-h-[34rem] w-full pt-[120px] bg-[#111319] bg-grid-white flex flex-col items-center justify-between"> {/* Changed min-h & pt */}
            <div className="w-full px-[10px] lg:px-[120px] flex flex-col-reverse md:flex-row justify-center place-content-between lg:gap-x-24 ">
                <div className="flex flex-col md:w-1/2 py-10 lg:py-0">
                    <p className="flex items-center text-base font-normal text-[#FFFEFE] opacity-85"><Image src={Separator} className="mr-[10px]" alt="separator"/> Welcome to</p>
                    {/* <span className="mt-2 lg:mt-5 mb-4 lg:mb-0 font-bold text-3xl md:text-[53px] lg:text-7xl leading-none md:leading-[64px] lg:leading-[101px] text-[#FFFEFE] opacity-90">UI UX Design<br/>Studio.</span> */}
                    <TypewriterEffectSmooth words={words} />
                    <TypewriterEffectSmooth words={words2} />
                    <p className="text-[23px] mt-5 leading-7 lg:leading-[34px] font-normal text-[#FFFEFE] max-w opacity-85">We specialize in breaking down complexity to design seamless and engaging digital products.</p> {/* Corrected grammar */}
                    <Link href="/#services" passHref> {/* Added CTA Button */}
                        <button className="mt-8 bg-transparent border-[2px] border-solid border-[#DC4242] hover:bg-[#DC4242] transition-all duration-300 ease-linear px-[20px] py-[10px] text-white text-lg font-semibold w-fit">
                            Explore Our Services
                        </button>
                    </Link>
                </div>
                <Image src={HeroImage} alt="Hero Image"/>
            </div>
            <div className="w-full z-40 mt-[80px] mb-5 flex items-center overflow-hidden relative">
                {/* Adjusted to ensure unique items and proper animation duplication for seamless scroll */}
                <div className="flex whitespace-nowrap animate-scroll" style={{ '--animation-duration': '20s' }}> {/* Example: Slower scroll */}
                    <span className="px-8 text-[#FFFEFE] opacity-85 text-xl leading-6 font-normal">Web Design</span>
                    <span className="px-8 text-[#FFFEFE] opacity-85 text-xl leading-6 font-normal">App Development</span>
                    <span className="px-8 text-[#FFFEFE] opacity-85 text-xl leading-6 font-normal">Branding</span>
                    <span className="px-8 text-[#FFFEFE] opacity-85 text-xl leading-6 font-normal">E-commerce</span>
                    <span className="px-8 text-[#FFFEFE] opacity-85 text-xl leading-6 font-normal">SaaS Platforms</span>
                    <span className="px-8 text-[#FFFEFE] opacity-85 text-xl leading-6 font-normal">UX Audits</span>
                </div>
                <div className="flex whitespace-nowrap animate-scroll" style={{ '--animation-duration': '20s' }}> {/* Duplicate for seamless effect */}
                    <span className="px-8 text-[#FFFEFE] opacity-85 text-xl leading-6 font-normal">Web Design</span>
                    <span className="px-8 text-[#FFFEFE] opacity-85 text-xl leading-6 font-normal">App Development</span>
                    <span className="px-8 text-[#FFFEFE] opacity-85 text-xl leading-6 font-normal">Branding</span>
                    <span className="px-8 text-[#FFFEFE] opacity-85 text-xl leading-6 font-normal">E-commerce</span>
                    <span className="px-8 text-[#FFFEFE] opacity-85 text-xl leading-6 font-normal">SaaS Platforms</span>
                    <span className="px-8 text-[#FFFEFE] opacity-85 text-xl leading-6 font-normal">UX Audits</span>
                </div>
            </div>
        </div>
    )
}