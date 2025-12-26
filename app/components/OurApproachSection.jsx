import Image from "next/image";
import Empathize from "@/public/Empathize.png";
import Define from "@/public/Define.png";
import Ideate from "@/public/Ideate.png";
import Prototype from "@/public/Prototype.png";
import Test from "@/public/Test.png";
import Separator from "@/public/Separator.png";
import ServiceCard from "./_components/ServiceCard";

export default function OurApproachSection() {

    const processSteps = [
        {
            link: "#",
            image: Empathize,
            name: "Empathize",
            zIndex: 40,
            alt: "Empathize process step icon",
            description: "Understand user needs, motivations, and pain points through research and observation."
        },
        {
            link: "#",
            image: Define,
            name: "Define",
            zIndex: 30,
            alt: "Define process step icon",
            description: "Clearly articulate the core problems identified during the empathize phase."
        },
        {
            link: "#",
            image: Ideate,
            name: "Ideate",
            zIndex: 20,
            alt: "Ideate process step icon",
            description: "Brainstorm a wide range of creative solutions and innovative approaches."
        },
        {
            link: "#",
            image: Prototype,
            name: "Prototype",
            zIndex: 10,
            alt: "Prototype process step icon",
            description: "Build tangible representations of solutions to test and gather feedback."
        },
        {
            link: "#",
            image: Test,
            name: "Test",
            zIndex: 0,
            alt: "Test process step icon",
            description: "Validate solutions with users, gather insights, and iterate on designs."
        }
    ]

    return (
        <section id="approach" className="snap-start min-h-screen w-full pb-20 md:pb-28 px-5 sm:px-6 lg:px-[120px] flex flex-col justify-center place-content-between bg-[#191C26]">
            <div className="flex flex-col">
                <div className="flex items-center text-base font-normal text-[#FFFFFF]">
                    <Image src={Separator} className="mr-[10px]" alt="separator"/>
                    <p className="text-sm uppercase tracking-[0.2em] text-[#BCC1CA]">
                        Our Approach
                    </p>
                </div>
                <span className="mt-2 mb-2 lg:mb-0 font-bold text-3xl md:text-[53px] lg:text-[64px] leading-none md:leading-[64px] lg:leading-[76.8px] text-[#FFFFFF]">Right thing matters to us</span>
                <span className="text-base text-[#BCC1CA]/80 mt-2 max-w-2xl">
                    Our process ensures we deliver the right solutions, every time. Here&apos;s how we work with you.
                </span>
            </div>

            {/* Mobile & Tablet View - Vertical Stack */}
            <div className="block xl:hidden w-full mt-8">
                <div className="grid grid-cols-2 gap-8">
                    {processSteps.map((step, index) => (
                        <div
                            key={index}
                            className="flex flex-col text-left"
                        >
                            <Image src={step.image} alt={`Service icon for ${step.name}`} width={40} height={40} className="mb-2" />
                            {/* Title */}
                            <h3 className="text-lg font-semibold text-white leading-snug">
                                {step.name}
                            </h3>

                            {/* Description */}
                            <p className="text-sm text-[#BCC1CA]">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Desktop View - Original Layout */}
            <div className="w-full hidden xl:flex flex-wrap xl:flex-row justify-around xl:justify-between items-center gap-5 lg:gap-0 mt-9 px-[10px] lg:px-0">
               {
                 processSteps.map((step, index) => (
                    <ServiceCard
                        key={index}
                        link={step.link}
                        bg={index % 2 === 0 ? "lg:bg-[#191C26]" : "lg:bg-[#111319]"}
                        hover="hover:ring-2 hover:ring-[#DC4242]/40 hover:scale-105 transition-all duration-200"
                        zIndex={step.zIndex}
                        source={step.image}
                        name={step.name}
                        alt={step.alt}
                        description={step.description}
                    />
                 ))
               }
            </div>
        </section>
    )
}
