"use client";
import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import HeroImg from "@/public/Container.png"; // Update the image path as necessary
import Separator from "@/public/Separator.png";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
// Example client logos (replace with real ones)
import Logo1 from "@/public/Agritech.png";
import Logo2 from "@/public/Education.png";
import Logo3 from "@/public/Travel.png";
import Logo4 from "@/public/Ameet.png";

export default function Hero() {
    const blobRef = useRef(null);
    const [showTooltip, setShowTooltip] = useState(false);

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

    return (
        <section
            className="relative min-h-[70vh] lg:min-h-[92vh] w-full flex items-center justify-center px-[10px] md:px-8 lg:px-[120px] py-16 lg:py-0 overflow-hidden bg-gradient-to-br from-[#191C26] via-[#23263a] to-[#111319]"
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
            <div className="relative flex flex-col-reverse lg:flex-row items-center justify-center w-full max-w-7xl mx-auto gap-12 lg:gap-20 z-10">
                {/* Left Content */}
                <div className="flex-1 flex flex-col items-center lg:items-start justify-center max-w-2xl text-center lg:text-left">
                    {/* Creative Ideas Label (updated copy) */}
                    <div className="flex items-center mb-6">
                        <span className="block w-12 h-0.5 bg-[#F5F6FA] mr-4" />
                        <span className="text-base text-[#BCC1CA] font-normal">We&apos;re a small agency which</span>
                    </div>
                    {/* Main Heading */}
                    <h1 className="font-extrabold mb-2 leading-tight tracking-tight relative text-[clamp(2.2rem,6vw,4.5rem)] text-[#F5F6FA]">
                        Craft Design <br className="hidden sm:block" />
                        Solutions
                        <span className="text-[#DC4242] align-super text-5xl ml-1">.</span>
                    </h1>
                    {/* Supporting Line */}
                    <p className="text-[#BCC1CA] mt-4 mb-10 max-w-xl block text-base lg:text-lg leading-relaxed" style={{maxWidth: '40ch', lineHeight: 1.5}}>
                        We create new design for your online business with the support of our wonderful team of professionals.
                    </p>
                    {/* CTAs on one line */}
                    <div className="flex justify-center lg:justify-start w-full mt-2">
                        <div className="relative">
                            <button
                                className="flex items-center bg-[#FF6F61] hover:bg-[#e65c4f] text-white font-bold px-8 py-4 rounded-xl shadow-2xl transition-all duration-300 text-lg whitespace-nowrap group relative"
                                onMouseEnter={() => setShowTooltip(true)}
                                onMouseLeave={() => setShowTooltip(false)}
                            >
                                <span>Book a Free Discovery Call</span>
                                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none ml-2">
                                    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" className="text-white"><path d="M5 12h14M15 8l4 4-4 4"/></svg>
                                </span>
                            </button>
                            {showTooltip && (
                                <span className="absolute left-1/2 -bottom-10 -translate-x-1/2 bg-[#23263a] text-white text-xs px-3 py-2 rounded shadow-lg z-20 whitespace-nowrap animate-fade-in">
                                    30-minute free strategy session
                                </span>
                            )}
                        </div>
                    </div>
                </div>
                {/* Right Illustration with diagonal divider */}
                <div className="flex-1 flex items-center justify-center w-full max-w-md lg:max-w-lg xl:max-w-xl mt-8 lg:mt-0 relative">
                    {/* Diagonal divider */}
                    <svg className="hidden lg:block absolute -left-24 top-0 h-full w-48 z-10" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <polygon points="100,0 100,100 0,100" fill="#23263a" opacity="0.7" />
                    </svg>
                    <Image
                        src={HeroImg}
                        alt="Creative design and development illustration"
                        className="w-full h-auto drop-shadow-2xl animate-float relative z-20"
                        priority
                    />
                </div>
            </div>
            {/* Decorative Background Elements */}
            <div className="absolute top-0 left-0 w-72 h-72 bg-[#DC4242]/20 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#DC4242]/10 rounded-full blur-3xl -z-10" />
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#191C26]/40 to-[#DC4242]/10 pointer-events-none -z-10" />
            {/* Scroll prompt */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center z-20">
                <span className="text-[#BCC1CA] text-sm animate-bounce">↓ Scroll to explore our services</span>
            </div>
            <style jsx global>{`
                @keyframes pulse-slow {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0.7; }
                }
                .animate-pulse-slow {
                    animation: pulse-slow 2.5s infinite;
                }
                @keyframes glow {
                    0%, 100% { text-shadow: 0 0 16px #DC4242, 0 0 32px #DC4242; }
                    50% { text-shadow: 0 0 32px #fff, 0 0 64px #DC4242; }
                }
                .animate-glow {
                    animation: glow 2.5s infinite alternate;
                }
                @keyframes bounce {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-8px); }
                }
                .animate-bounce {
                    animation: bounce 1.5s infinite;
                }
                @keyframes fade-in {
                    from { opacity: 0; transform: translateY(8px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in {
                    animation: fade-in 0.3s ease;
                }
                @keyframes float {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-18px); }
                }
                .animate-float {
                    animation: float 4s ease-in-out infinite;
                }
            `}</style>
        </section>
    );
}