import Image from "next/image";
import Empathize from "@/public/Empathize.png";
import Define from "@/public/Define.png";
import Ideate from "@/public/Ideate.png";
import Prototype from "@/public/Prototype.png";
import Test from "@/public/Test.png";
import Separator from "@/public/Separator.png";
import ServiceCard from "./_components/ServiceCard";

export default function ServicesSection3() {

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
        <section id="services" className="min-h-[30rem] px-[10px] lg:px-[120px] w-full py-[90px] bg-[#191C26] flex flex-col justify-center place-content-between">
            <div className="flex flex-col">
                <p className="flex items-center text-base font-normal text-[#FFFFFF]"><Image src={Separator} className="mr-[10px]" alt="separator"/> Our Approach</p>
                <span className="mt-2 lg:mt-5 mb-2 lg:mb-0 font-bold text-3xl md:text-[53px] lg:text-[64px] leading-none md:leading-[64px] lg:leading-[76.8px] text-[#FFFFFF]">Right thing matters to us</span>
                <span className="text-base text-[#BCC1CA] mt-2 max-w-2xl">
                    Our process ensures we deliver the right solutions, every time. Here&apos;s how we work with you.
                </span>
            </div>
            <div className="w-full flex flex-wrap xl:flex-row justify-around xl:justify-between items-center gap-5 lg:gap-0 mt-9 px-[10px] lg:px-0">
               {
                 processSteps.map((step, index) => (
                    <ServiceCard key={index} link={step.link} bg={index % 2 === 0 ? "lg:bg-[#191C26]" : "lg:bg-[#111319]"} hover="hover:ring-2 hover:ring-[#DC4242]/40 hover:scale-105 transition-all duration-200" zIndex={step.zIndex} source={step.image} name={step.name} alt={step.alt} description={step.description}/>
                 ))
               }
            </div>
        </section>
    )
}
