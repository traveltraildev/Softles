"use client";

import Image from "next/image";
import Logo from "@/public/SoftLes.png"
import Link from "next/link";
import { MobileSidebar } from "./_components/mobile-sidebar";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { physicsTransition } from "@/lib/animations";


export default function Navbar() {
    const [isVisible, setIsVisible] = useState(true);
    const [isScrolled, setIsScrolled] = useState(false); // For morphing effect
    const lastScrollY = useRef(0);
    const scrollThreshold = 50; // Pixels to scroll before morphing

    useEffect(() => {
        const handleScroll = () => {
            if (typeof window !== "undefined") {
                const currentScrollY = window.scrollY;

                // Visibility logic (show/hide on scroll direction)
                setIsVisible(currentScrollY < lastScrollY.current || currentScrollY < scrollThreshold);
                lastScrollY.current = currentScrollY;

                // Morphing logic (change style after scrolling past threshold)
                setIsScrolled(currentScrollY > scrollThreshold);
            }
        };

        if (typeof window !== "undefined") {
            window.addEventListener("scroll", handleScroll, { passive: true }); // Added passive for performance
            // Initial check in case page loads scrolled
            handleScroll();
            return () => {
                window.removeEventListener("scroll", handleScroll);
            };
        }
    }, []);

    // Base classes
    const baseClasses = "w-full z-50 fixed top-0 transition-all duration-300 ease-in-out flex items-center justify-between lg:justify-normal text-[#FFFFFF]";

    // Classes for normal (top) state
    const normalStateClasses = "h-[55px] bg-[#191C26] p-[10px] lg:px-[120px] shadow-none";

    // Classes for scrolled/morphed state
    const scrolledStateClasses = "h-[50px] bg-[#111319]/90 backdrop-blur-sm p-[8px] lg:px-[110px] shadow-lg"; // Darker, slightly smaller, blurred bg, shadow

    // Visibility classes
    const visibilityClasses = isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0';

    return (
        <motion.div // Use motion.div for potential future animation of properties not covered by CSS transitions
            className={`${baseClasses} ${isScrolled ? scrolledStateClasses : normalStateClasses} ${visibilityClasses}`}
            // Example of direct animation if needed:
            // animate={{
            //     height: isScrolled ? 50 : 55,
            //     backgroundColor: isScrolled ? "rgba(17, 19, 25, 0.9)" : "rgba(25, 28, 38, 1)"
            // }}
            // transition={{ duration: 0.3, ease: "easeInOut" }}
        >
            <Link href="/">
                <Image src={Logo} alt="logo" className={`transition-transform duration-300 ${isScrolled ? 'scale-90' : 'scale-100'}`} /> {/* Example: Logo scales too */}
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
                <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    transition={physicsTransition}
                    className="bg-transparent border-2 border-solid border-brand-red hover:bg-brand-red text-white transition-colors duration-200 ease-linear px-[20px] py-[5px] rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:ring-offset-2 focus-visible:ring-offset-[#191C26]"
                >
                    Book a Discovery Call
                </motion.button>
            </div>
        </div>
    )
}