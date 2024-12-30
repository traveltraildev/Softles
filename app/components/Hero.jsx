import Image from "next/image";
import HeroImage from "@/public/Container.png";
import Separator from "@/public/Separator.png";


export default function Hero() {
    return (
        <div className="min-h-[38rem] px-[10px] lg:px-[120px] w-full pt-[88px] bg-[#111319] flex flex-col items-center justify-between">
            <div className="w-full flex flex-col-reverse md:flex-row justify-center place-content-between lg:gap-x-24 ">
                <div className="flex flex-col py-10 lg:py-0">
                    <p className="flex items-center text-base font-normal text-[#FFFEFE] opacity-85"><Image src={Separator} className="mr-[10px]" alt="separator"/> Welcome to</p>
                    <span className="mt-2 lg:mt-5 mb-4 lg:mb-0 font-bold text-3xl md:text-[53px] lg:text-7xl leading-none md:leading-[64px] lg:leading-[101px] text-[#FFFEFE] opacity-90">UI UX Design<br/>Studio.</span>
                    <p className="text-[23px] leading-7 lg:leading-[34px] font-normal text-[#FFFEFE] opacity-85">We are specialize in breaking down complexity to design seamless and engaging digital products.</p>
                </div>
                <Image src={HeroImage} alt="Hero Image"/>
            </div>
            <div className="w-full mb-[50px] flex items-center justify-between text-[#FFFEFE] opacity-85 text-xl leading-6 font-normal">
                <span>Business Website</span>
                {/* <span>Business Website</span>
                <span>Business Website</span>
                <span>Business Website</span> */}
                <span>Business Website</span>
            </div>
        </div>
    )
}