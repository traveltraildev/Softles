import Image from "next/image";
import Empathize from "@/public/Empathize.png";
import Define from "@/public/Define.png";
import Ideate from "@/public/Ideate.png";
import Prototype from "@/public/Prototype.png";
import Test from "@/public/Test.png";
import Separator from "@/public/Separator.png";
import ServiceCard2 from "./_components/ServiceCard2";


export default function ServicesSection3() {
    return (
        <div className="min-h-[30rem] px-[10px] lg:px-[120px] w-full py-[90px] bg-[#191C26] flex flex-col justify-center place-content-between">
            <div className="flex flex-col">
                <p className="flex items-center text-base font-normal text-[#FFFFFF]"><Image src={Separator} className="mr-[10px]" alt="separator"/> Our Approach</p>
                <span className="mt-2 lg:mt-5 mb-2 lg:mb-0 font-bold text-3xl md:text-[53px] lg:text-[64px] leading-none md:leading-[64px] lg:leading-[76.8px] text-[#FFFFFF]">Right thing matters to us</span>
                <span className="text-base text-[#BCC1CA] mt-2 max-w-2xl">
                    Our process ensures we deliver the right solutions, every time. Here&apos;s how we work with you.
                </span>
            </div>
            <div className="w-full flex flex-col xl:flex-row justify-between items-center gap-y-5 lg:gap-y-0 mt-9 px-[10px] lg:px-0">
                <ServiceCard2 link="#" bg="lg:bg-[#191C26] hover:ring-2 hover:ring-[#DC4242]/40 hover:scale-105 transition-all duration-200" zIndex="40" source={Empathize} name="Empathize" alt="Empathize process step icon" description="Understand user needs, motivations, and pain points through research and observation."/>
                <ServiceCard2 link="#" bg="lg:bg-[#111319] hover:ring-2 hover:ring-[#DC4242]/40 hover:scale-105 transition-all duration-200" zIndex="30" source={Define} name="Define" alt="Define process step icon" description="Clearly articulate the core problems identified during the empathize phase."/>
                <ServiceCard2 link="#" bg="lg:bg-[#191C26] hover:ring-2 hover:ring-[#DC4242]/40 hover:scale-105 transition-all duration-200" zIndex="20" source={Ideate} name="Ideate" alt="Ideate process step icon" description="Brainstorm a wide range of creative solutions and innovative approaches."/>
                <ServiceCard2 link="#" bg="lg:bg-[#111319] hover:ring-2 hover:ring-[#DC4242]/40 hover:scale-105 transition-all duration-200" zIndex="10" source={Prototype} name="Prototype" alt="Prototype process step icon" description="Build tangible representations of solutions to test and gather feedback."/>
                <ServiceCard2 link="#" bg="lg:bg-[#191C26] hover:ring-2 hover:ring-[#DC4242]/40 hover:scale-105 transition-all duration-200" zIndex="0" source={Test} name="Test" alt="Test process step icon" description="Validate solutions with users, gather insights, and iterate on designs."/>
            </div>
        </div>
    )
}