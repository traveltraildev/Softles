import Image from "next/image";
import UserResearch from "@/public/UserResearch.png";
import InterfaceDesign from "@/public/InterfaceDesign.png";
import DesignSystem from "@/public/DesignSystem.png";
import Prototyping from "@/public/Prototyping.png";
import AuditingTesting from "@/public/AuditingTesting.png";
import Separator from "@/public/Separator.png";
import { HoverEffect } from "@/components/ui/card-hover-effect";

export const projects = [
    {
      source: UserResearch,
      title: "User Research",
    },
    {
      source: InterfaceDesign,
      title: "Interface Design",
    },
    {
      source: DesignSystem,
      title: "Design System",
    },
    {
      source: Prototyping,
      title: "Prototyping",
    },
    {
      source: AuditingTesting,
      title: "Auditing & Testing",
    },
  ];


export default function ServicesSection1() {
    return (
        <div className="min-h-[30rem] p-[10px] lg:px-[120px] w-full py-[90px] bg-[#191C26] flex flex-col justify-center place-content-between"> {/* Reduced min-h */}
            <div className="flex flex-col">
                <p className="flex items-center text-base font-normal text-[#FFFFFF]"><Image src={Separator} className="mr-[10px]" alt="separator"/> Our Services</p>
                <span className="mt-2 lg:mt-5 mb-4 lg:mb-0 font-bold text-3xl md:text-[53px] lg:text-[64px] leading-none md:leading-[64px] lg:leading-[76.8px] text-[#FFFFFF]">What we do</span>
            </div>
            <HoverEffect items={projects} />
        </div>
    )
}