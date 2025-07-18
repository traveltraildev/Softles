"use client";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { Divy } from '@/public/Divy.jpg';

const clientLogos = ["/logo_1.png", "/logo_2.png", "/logo_3.png", "/logo_4.png", "/logo_5.png", "/logo_6.png", "/logo_7.png", "/logo_8.png"];

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

    // Smooth scroll handler for navbar links
    const handleClick = (e, sectionId) => {
        e.preventDefault();
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section
            className="relative min-h-[70vh] lg:min-h-[92vh] w-full flex items-center justify-center py-16 lg:py-0 overflow-hidden bg-gradient-to-br from-[#191C26] via-[#23263a] to-[#111319]"
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
            <div className="flex flex-col items-center justify-center w-full">
                <div className="relative flex flex-col-reverse lg:flex-row items-center justify-center w-full max-w-4xl lg:max-w-6xl mx-auto gap-12 lg:gap-20 z-10 px-[10px] md:px-8 lg:px-[120px] xl:px-0">
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
                            <div onClick={e => handleClick(e, "book-call")} className="relative">
                                <button
                                    className="flex items-center text-lg whitespace-nowrap group relative shadow-[inset_0_0_0_2px_#616467] text-[#DC4242] px-8 py-4 rounded-full tracking-widest uppercase font-bold bg-transparent hover:bg-[#616467] transition duration-300"
                                    onMouseEnter={() => setShowTooltip(true)}
                                    onMouseLeave={() => setShowTooltip(false)}
                                >
                                    <span>Book a Free Discovery Call</span>
                                    <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none ml-2">
                                        <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#DC4242]"><path d="M5 12h14M15 8l4 4-4 4"/></svg>
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
                            src={"/Container.png"}
                            alt="Creative design and development illustration"
                            width={0}
                            height={0}
                            sizes="(max-width: 768px) 40vw, (max-width: 1024px) 50vw, 33vw"
                            className="w-72 h-[281px] md:w-[414px] md:h-[353px] drop-shadow-2xl animate-float relative z-20"
                            priority
                        />
                    </div>
                </div>
                {/* Client Logo Rail - responsive */}
                <div className="w-full mt-10 md:mt-20 z-20">
                    <div className="overflow-hidden w-full relative">
                        <div
                            className="flex animate-logo-rail whitespace-nowrap w-max gap-20"
                            style={{ animation: 'logo-rail 18s linear infinite' }}
                        >
                            {clientLogos.concat(clientLogos).map((logo, idx) => (
                                <Image
                                    key={idx}
                                    src={logo}
                                    alt={`Client Logo ${idx + 1}`}
                                    width={120}
                                    height={48}
                                    className="h-12 w-auto"
                                    style={{ display: "inline-block" }}
                                />
                            ))}
                        </div>
                    </div>
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
                @keyframes logo-rail {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-51%); }
                }
                .animate-logo-rail {
                    animation: logo-rail 18s linear infinite;
                    will-change: transform;
                }
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </section>
    );
}