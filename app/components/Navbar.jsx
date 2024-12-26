import Image from "next/image";
import Logo from "@/public/SoftLes.png"
import Link from "next/link";


export default function Navbar() {
    return (
        <div className="h-[88px] bg-[#191C26] text-[#FFFFFF] flex items-center lg:px-[120px]">
            <Link href="/">
                <Image src={Logo} alt="logo"/>
            </Link>
            <div className="w-full ml-16 flex items-center justify-between text-base leading-5 font-semibold" >
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