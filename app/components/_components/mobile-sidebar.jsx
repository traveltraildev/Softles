import { Menu } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/SoftLes.png";

import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet.jsx";


export const MobileSidebar = () => {
    return (
        <Sheet>
            <SheetTrigger className="lg:hidden pr-4 hover:opacity-75 transition">
                <Menu/>
            </SheetTrigger>
            <SheetContent side="left" className="w-full h-full bg-[#191C26] text-[#FFFFFF] flex flex-col items-center">
                    <Link href="/">
                        <Image src={Logo} alt="logo"/>
                    </Link>
                    <div className="w-full flex flex-col items-center justify-between text-base leading-5 gap-10 mt-14 font-semibold" >
                        <ul className="flex flex-col items-center justify-between gap-10">
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
            </SheetContent>
        </Sheet>
    )
}