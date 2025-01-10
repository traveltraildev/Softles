"use client";

import Image from "next/image";
import Logo from "@/public/SoftLes.png"
import Link from "next/link";
import { MobileSidebar } from "./_components/mobile-sidebar";
import { useEffect, useState } from "react";


export default function Navbar() {
    const [isVisible, setIsVisible] = useState(true);
    let lastScrollY = 0;

    useEffect(() => {

        const handleScroll = () => {
            if (typeof window !== "undefined") {
                const currentScrollY = window.scrollY;
                setIsVisible(currentScrollY < lastScrollY || currentScrollY < 100);
                lastScrollY = currentScrollY;
            }
        };

        if (typeof window !== "undefined") {
            window.addEventListener("scroll", handleScroll);
            return () => {
                window.removeEventListener("scroll", handleScroll);
            };
        }
    }, []);

    return (
        <div className={`h-[88px] w-full z-50 fixed top-0 transition-all duration-700 ease-linear bg-[#191C26] text-[#FFFFFF] flex items-center justify-between lg:justify-normal p-[10px] lg:px-[120px] ${isVisible ? 'block' : 'hidden'}`}>
            <Link href="/">
                <Image src={Logo} alt="logo"/>
            </Link>
            <MobileSidebar/>
            <div className="w-full ml-16 hidden lg:flex items-center justify-between text-base leading-5 font-semibold" >
                <ul className="flex items-center justify-between gap-x-10 invisible">
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
                <button className="bg-transparent border-[3px] border-solid border-[#DC4242] hover:bg-[#DC4242] transition-all duration-300 ease-linear px-[40px] py-[10px]">
                    Book a Discovery Call
                </button>
            </div>
        </div>
    )
}