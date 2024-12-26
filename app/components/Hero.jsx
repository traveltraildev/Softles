import Image from "next/image";
import HeroImage from "@/public/Container.png";
import Separator from "@/public/Separator.png";


export default function Hero() {
    return (
        <div className=" h-[38rem] lg:px-[120px] w-full pt-[88px] bg-[#111319] flex flex-col items-center justify-between">
            <div className="w-full flex flex-row justify-center place-content-between gap-x-24">
                <div className="flex flex-col">
                    <p className="flex items-center text-base font-normal text-[#FFFEFE] opacity-85"><Image src={Separator} className="mr-[10px]" alt="separator"/> Welcome to</p>
                    <span className="mt-5 font-bold text-7xl leading-[101px] text-[#FFFEFE] opacity-90">UI UX Design<br/>Studio.</span>
                    <p className="text-[23px] leading-[34px] font-normal text-[#FFFEFE] opacity-85">We are specialize in breaking down complexity to design seamless and engaging digital products.</p>
                </div>
                <Image src={HeroImage} alt="Hero Image"/>
            </div>
            <div className="w-full mb-[50px] flex items-center justify-between text-[#FFFEFE] opacity-85 text-xl leading-6 font-normal">
                <span>Business Website</span>
                <span>Business Website</span>
                <span>Business Website</span>
                <span>Business Website</span>
                <span>Business Website</span>
            </div>
        </div>
    )
}