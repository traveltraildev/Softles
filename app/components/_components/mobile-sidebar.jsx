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
            <SheetTrigger className="lg:hidden pr-4 hover:opacity-75 transition" aria-label="Open navigation menu"> {/* Added aria-label */}
                <Menu/>
            </SheetTrigger>
            <SheetContent side="left" className="w-full h-full bg-[#191C26] text-[#FFFFFF] flex flex-col items-center p-6"> {/* Added padding to SheetContent */}
                    <Link href="/">
                        <Image src={Logo} alt="Softles Logo"/> {/* Improved alt text */}
                    </Link>
                    <div className="w-full flex flex-col items-center justify-start text-base leading-5 gap-10 mt-14 font-semibold flex-grow" > {/* Changed justify-between to justify-start and added flex-grow */}
                        <ul className="flex flex-col items-center justify-start gap-8"> {/* Removed hidden, changed justify, adjusted gap */}
                            <li className="hover:text-[#DC4242] transition-colors">
                                <Link href="/#about">About Us</Link> {/* Assuming these link to sections or pages */}
                            </li>
                            <li className="hover:text-[#DC4242] transition-colors">
                                <Link href="/#services">Services</Link>
                            </li>
                            <li className="hover:text-[#DC4242] transition-colors">
                                <Link href="/#work">Our Work</Link>
                            <li>
                            </li>
                        </ul>
                    {/* Ensure button is part of the flex flow, consider moving it below links or ensure flex-grow on ul pushes it down if it's meant to be at bottom */}
                    <div className="mt-auto w-full flex justify-center"> {/* Pushes button to bottom */}
                        <button className="bg-transparent border-[2px] border-solid border-[#DC4242] hover:bg-[#DC4242] transition-all duration-300 ease-linear px-[20px] py-[10px] text-lg w-full max-w-xs"> {/* Matched style from Navbar CTA, added hover, full width for mobile */}
                            Book a Discovery Call
                        </button>
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    )
}