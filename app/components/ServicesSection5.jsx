import Image from "next/image";
import Separator from "@/public/Separator.png";


export default function ServicesSection5() {
    return (
        <div className="min-h-[38rem] lg:px-[120px] w-full py-[90px] bg-[#111319] flex flex-col justify-center place-content-between">
            <div className="flex flex-col">
                <p className="flex items-center text-base font-normal text-[#FFFFFF]"><Image src={Separator} className="mr-[10px]" alt="separator"/> Our Services</p>
                <span className="mt-5 font-bold text-[64px] leading-[76.8px] text-[#FFFFFF]">Book a Discovery Session</span>
            </div>
            <div className="flex flex-row justify-center place-content-between gap-x-10 mt-9">
            </div>
        </div>
    )
}