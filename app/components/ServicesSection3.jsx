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
        <div className="min-h-[38rem] px-[10px] lg:px-[120px] w-full py-[90px] bg-[#191C26] flex flex-col justify-center place-content-between">
            <div className="flex flex-col">
                <p className="flex items-center text-base font-normal text-[#FFFFFF]"><Image src={Separator} className="mr-[10px]" alt="separator"/> Our Services</p>
                <span className="mt-2 lg:mt-5 mb-4 lg:mb-0 font-bold text-3xl lg:text-[64px] leading-none lg:leading-[76.8px] text-[#FFFFFF]">Right thing matters to us</span>
            </div>
            <div className="flex flex-col lg:flex-row justify-center items-center gap-y-5 lg:gap-y-0 mt-9">
                <ServiceCard2 bg="#191C26" zIndex="50" source={Empathize} name="Empathize" description="Elements in the subjects that have purposes & goals for business or company"/>
                <ServiceCard2 bg="#111319" zIndex="40" source={Define} name="Define" description="Elements in the subjects that have purposes & goals for business or company"/>
                <ServiceCard2 bg="#191C26" zIndex="30" source={Ideate} name="Ideate" description="Elements in the subjects that have purposes & goals for business or company"/>
                <ServiceCard2 bg="#111319" zIndex="20" source={Prototype} name="Prototype" description="Elements in the subjects that have purposes & goals for business or company"/>
                <ServiceCard2 bg="#191C26" zIndex="10" source={Test} name="Test" description="Elements in the subjects that have purposes & goals for business or company"/>
            </div>
        </div>
    )
}