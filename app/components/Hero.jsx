"use client";
import { useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import HeroImg from "@/public/Container.png"; // Update the image path as necessary
import Separator from "@/public/Separator.png";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";

export default function Hero() {
    const blobRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (!blobRef.current) return;
            const { clientX, clientY } = e;
            // Animate the blob to follow the cursor with a springy effect
            blobRef.current.animate(
                {
                    left: `${clientX - 150}px`,
                    top: `${clientY - 150}px`
                },
                {
                    duration: 600,
                    fill: "forwards",
                    easing: "cubic-bezier(.22,1.12,.58,1)"
                }
            );
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    const words = [
        {
            text: "UX UI Design",
            className: "lg:leading-[80px]",
            // cursorClassName: "invisible"
        },
    ];
    const words2 = [
        {
            text: "Studio.",
            className: "text-[#DC4242] lg:leading-[54px]",
            // cursorClassName: "visible"
        },
    ];


    return (
        <section
            className="relative min-h-[38rem] w-full pt-[120px] flex flex-col lg:flex-row items-center justify-between px-6 lg:px-32 overflow-hidden"
            style={{
                backgroundImage: `
                    linear-gradient(135deg, #191C26 0%, #23263a 60%, #111319 100%),
                    repeating-linear-gradient(
                        to right,
                        rgba(255,255,255,0.07) 0px,
                        rgba(255,255,255,0.07) 1px,
                        transparent 1px,
                        transparent 40px
                    ),
                    repeating-linear-gradient(
                        to bottom,
                        rgba(255,255,255,0.07) 0px,
                        rgba(255,255,255,0.07) 1px,
                        transparent 1px,
                        transparent 40px
                    )
                `,
                backgroundBlendMode: "overlay"
            }}
        >
            {/* Animated awe-struck blob */}
            <div
                ref={blobRef}
                className="pointer-events-none fixed z-0"
                style={{
                    width: 300,
                    height: 300,
                    borderRadius: "50%",
                    background: "radial-gradient(circle at 60% 40%, #DC4242 0%, #191C26 100%)",
                    filter: "blur(80px)",
                    opacity: 0.35,
                    left: "50vw",
                    top: "50vh",
                    transform: "translate(-50%, -50%)",
                    transition: "opacity 0.3s"
                }}
                aria-hidden="true"
            />
            {/* Left Content */}
            <div className="flex-1 flex flex-col items-start justify-center z-10">
                <h1 className="text-4xl lg:text-6xl font-extrabold text-white mb-4 leading-tight drop-shadow-lg">
                    Elevate Your <span className="text-[#DC4242]">Brand</span> <br />
                    with <span className="text-[#DC4242]">Stunning Design</span> <br />
                    &amp; <span className="text-[#DC4242]">Robust Development</span>
                </h1>
                <span className="text-lg lg:text-2xl text-[#BCC1CA] mb-2 max-w-xl">
                    We are a full-service digital studio focused on results, creativity, and user experience.
                </span>
                <p className="text-base lg:text-xl text-gray-200 mb-8 max-w-xl">
                    We craft beautiful, high-performing digital experiences for ambitious businesses. From branding to full-stack development, our team delivers results that impress and convert.
                </p>
                <div className="flex gap-4">
                    <Link href="#book-call">
                        <button className="bg-[#DC4242] hover:bg-[#b32e2e] text-white font-semibold px-8 py-3 rounded-lg shadow-lg transition-all duration-300 text-lg flex items-center gap-2 group">
                            Book a Free Discovery Call
                            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" className="text-white"><path d="M5 10h10M13 6l4 4-4 4"/></svg>
                            </span>
                        </button>
                    </Link>
                    <Link href="#work">
                        <button className="bg-transparent border-2 border-[#DC4242] text-[#DC4242] hover:bg-[#DC4242] hover:text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 text-lg">
                            See Our Work
                        </button>
                    </Link>
                </div>
            </div>
            {/* Right Illustration */}
            <div className="flex-1 flex items-center justify-center mt-12 lg:mt-0 z-10">
                <Image
                    src={HeroImg}
                    alt="Creative design and development illustration"
                    className="w-full max-w-md lg:max-w-xl drop-shadow-2xl"
                    priority
                />
            </div>
            {/* Decorative Background Elements */}
            <div className="absolute top-0 left-0 w-72 h-72 bg-[#DC4242]/20 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#DC4242]/10 rounded-full blur-3xl -z-10" />
        </section>
    );
}