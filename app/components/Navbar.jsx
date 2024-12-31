import Image from "next/image";
import Logo from "@/public/SoftLes.png"
import Link from "next/link";
import { MobileSidebar } from "./_components/mobile-sidebar";


export default function Navbar() {
    return (
        <div className="h-[88px] bg-[#191C26] text-[#FFFFFF] flex items-center justify-between lg:justify-normal p-[10px] lg:px-[120px]">
            <Link href="/">
                <Image src={Logo} alt="logo"/>
            </Link>
            <MobileSidebar/>
            <div className="w-full ml-16 hidden lg:flex items-center justify-between text-base leading-5 font-semibold" >
                <ul className="flex items-center justify-between gap-x-10">
                    <li>
                        About Us
                    </li>
                    <li>
                        Services
                    </li>
                    <li>
                        Our Work
                    </li>
                </ul>
                <button className="bg-transparent border-[3px] border-solid border-[#DC4242] px-[40px] py-[10px]">
                    Book a Discovery Call
                </button>
            </div>
        </div>
    )
}