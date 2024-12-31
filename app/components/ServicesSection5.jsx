import Image from "next/image";
import Separator from "@/public/Separator.png";


export default function ServicesSection5() {
    return (
        <div className="min-h-[38rem] p-[10px] lg:px-[120px] w-full py-[90px] bg-[#111319] flex flex-col justify-center place-content-between">
            <div className="flex flex-col">
                <p className="flex items-center text-base font-normal text-[#FFFFFF]"><Image src={Separator} className="mr-[10px]" alt="separator"/> Our Services</p>
                <span className="mt-2 lg:mt-5 mb-4 lg:mb-0 text-3xl md:text-[53px] lg:text-[64px] leading-none md:leading-[64px] lg:leading-[76.8px] text-[#FFFFFF]">Book a Discovery Session</span>
            </div>
            <div className="w-full text-white flex flex-col md:flex-row place-content-between justify-center gap-4 lg:gap-8 mt-9">
                <div className="bg-[#191C26] w-full lg:w-[501px] min-h-[387px]">Hi</div>
                <div className="bg-[#191C26] w-full lg:w-[655px] min-h-[387px]">Hi</div>
            </div>
        </div>
    )
}