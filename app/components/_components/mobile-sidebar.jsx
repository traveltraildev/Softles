import { Menu } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/SoftLes.png";
import { useRef, useState } from "react";

import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet.jsx";


export const MobileSidebar = () => {
    const [open, setOpen] = useState(false);

    // Smooth scroll handler for navbar links
    const handleNavClick = (e, sectionId) => {
        e.preventDefault();
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
        setOpen(false); // Close sidebar after navigation
    };

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger className="lg:hidden pr-4 hover:opacity-75 transition" aria-label="Open navigation menu">
                <Menu/>
            </SheetTrigger>
            <SheetContent side="left" className="w-full h-full bg-[#191C26] text-[#FFFFFF] flex flex-col items-center p-6">
                <Link href="/">
                    <Image src={Logo} alt="Softles Logo"/>
                </Link>
                <div className="w-full flex flex-col items-center justify-start text-base leading-5 gap-10 mt-14 font-semibold flex-grow">
                    <ul className="flex flex-col items-center justify-start gap-8">
                        <li className="hover:text-[#DC4242] transition-colors">
                            <a href="#about" onClick={e => handleNavClick(e, "about")}>About Us</a>
                        </li>
                        <li className="hover:text-[#DC4242] transition-colors">
                            <a href="#services" onClick={e => handleNavClick(e, "services")}>Services</a>
                        </li>
                        <li className="hover:text-[#DC4242] transition-colors">
                            <a href="#work" onClick={e => handleNavClick(e, "work")}>Our Work</a>
                        </li>
                    </ul>
                    <div className="mt-auto w-full flex justify-center">
                        <a href="#book-call" onClick={e => handleNavClick(e, "book-call")} className="w-full max-w-xs">
                            <button className="bg-transparent border-[2px] border-solid border-[#DC4242] hover:bg-[#DC4242] transition-all duration-300 ease-linear px-[20px] py-[10px] text-lg w-full max-w-xs">
                                Book a Discovery Call
                            </button>
                        </a>
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    )
}