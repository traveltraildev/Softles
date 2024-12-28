import Image from "next/image";
import HeroImage from "@/public/Container.png";
import UserResearch from "@/public/UserResearch.png";
import InterfaceDesign from "@/public/InterfaceDesign.png";
import DesignSystem from "@/public/DesignSystem.png";
import Prototyping from "@/public/Prototyping.png";
import AuditingTesting from "@/public/AuditingTesting.png";
import Separator from "@/public/Separator.png";
import ServiceCard from './_components/ServiceCard';


export default function ServicesSection1() {
    return (
        <div className="min-h-[38rem] lg:px-[120px] w-full py-[90px] bg-[#191C26] flex flex-col justify-center place-content-between">
            <div className="flex flex-col">
                <p className="flex items-center text-base font-normal text-[#FFFFFF]"><Image src={Separator} className="mr-[10px]" alt="separator"/> Our Services</p>
                <span className="mt-5 font-bold text-[64px] leading-[76.8px] text-[#FFFFFF]">What we do</span>
            </div>
            <div className="flex flex-row justify-center place-content-between gap-x-10 mt-9">
                <ServiceCard source={UserResearch} name="User Research"/>
                <ServiceCard source={InterfaceDesign} name="Interface Design"/>
                <ServiceCard source={DesignSystem} name="Design System"/>
                <ServiceCard source={Prototyping} name="Prototyping"/>
                <ServiceCard source={AuditingTesting} name="Auditing & Testing"/>
            </div>
        </div>
    )
}