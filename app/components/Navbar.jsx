"use client";

import Image from "next/image";
import Logo from "@/public/SoftLes.png"
import Link from "next/link";
import { MobileSidebar } from "./_components/mobile-sidebar";
import { useEffect, useState, useRef } from "react";


export default function Navbar() {
    const [isVisible, setIsVisible] = useState(true);
    const lastScrollY = useRef(0);

    useEffect(() => {

        const handleScroll = () => {
            if (typeof window !== "undefined") {
                const currentScrollY = window.scrollY;
                setIsVisible(currentScrollY < lastScrollY.current || currentScrollY < 88);
                lastScrollY.current = currentScrollY;
            }
        };

        if (typeof window !== "undefined") {
            window.addEventListener("scroll", handleScroll);
            return () => {
                window.removeEventListener("scroll", handleScroll);
            };
        }
    }, []);

    // Smooth scroll handler for navbar links
    const handleNavClick = (e, sectionId) => {
        e.preventDefault();
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className={`h-[55px] w-full z-50 fixed top-0 transition-all duration-300 ease-in-out bg-[#191C26] text-[#FFFFFF] flex items-center justify-between lg:justify-normal p-[10px] lg:px-[120px] ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
            <Link href="/">
                <Image src={Logo} alt="logo"/>
            </Link>
            <MobileSidebar/>
            <div className="w-full ml-16 hidden lg:flex items-center justify-between text-base leading-5 font-semibold" >
                <ul className="flex items-center gap-x-10">
                    <li>
                        <a href="#about" onClick={e => handleNavClick(e, "about")}>
                            About Us
                        </a>
                    </li>
                    <li>
                        <a href="#services" onClick={e => handleNavClick(e, "services")}>
                            Services
                        </a>
                    </li>
                    <li>
                        <a href="#work" onClick={e => handleNavClick(e, "work")}>
                            Our Work
                        </a>
                    </li>
                </ul>
                <a href="#book-call" onClick={e => handleNavClick(e, "book-call")}>
                    <button className="bg-transparent border-[2px] border-solid border-[#DC4242] hover:bg-[#DC4242] transition-all duration-300 ease-linear px-[20px] py-[5px]">
                        Book a Discovery Call
                    </button>
                </a>
            </div>
        </div>
    )
}