"use client";

import Image from "next/image";
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
        <div className={`h-[60px] w-full z-50 fixed top-0 transition-all duration-300 ease-in-out bg-[#191C26] text-[#FFFFFF] flex items-center justify-between lg:justify-normal p-[10px] lg:px-[120px] ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
            <Link href="/">
                <Image src={"/SoftLes.png"} alt="logo"  width={0} height={0} sizes="(max-width: 768px) 40vw, (max-width: 1024px) 50vw, 33vw" className="object-cover overflow-hidden min-w-min h-[38px]"/>
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
                </ul>
                <Link href="#book-call" onClick={e => handleNavClick(e, "book-call")}>
                    <button className="relative inline-flex h-10 overflow-hidden rounded-full p-[1px] focus:outline-none ">
                        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-[20px] py-[5px] text-sm font-medium text-white backdrop-blur-3xl">
                            Book a Discovery Call
                        </span>
                    </button>
                </Link>
            </div>
        </div>
    )
}