"use client";

import Image from "next/image";
import Logo from "@/public/SoftLes.png";
import Facebook from "@/public/FacebookIcon.png";
import Twitter from "@/public/TwitterIcon.png";
import LinkedIn from "@/public/LinkedInIcon.png";
import Instagram from "@/public/InstagramIcon.png";
import Link from "next/link";
import { useState } from "react";

export default function Footer() {
    const [email, setEmail] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setEmail("");
        setTimeout(() => setSubmitted(false), 3000);
    };

    return (
        <footer className="bg-[#18181B] text-white pt-12 pb-6 px-4 md:px-16">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-[#27272A] pb-10">
                {/* Logo & Address */}
                <div className="flex flex-col gap-5">
                    <Link href="/">
                        <Image src={Logo} alt="Softles Logo" className="w-36 h-auto mb-2" />
                    </Link>
                    <p className="text-sm text-[#D4D4D8]">
                        57 Brand House, Coombe Way <br /> Farnborough, Hampshire
                    </p>
                    <div>
                        <h3 className="font-semibold text-base mb-1">Contact</h3>
                        <a href="mailto:info@softles.com" className="text-lg font-medium underline hover:text-[#DC4242] transition">
                            info@softles.com
                        </a>
                    </div>
                </div>
                {/* Navigation */}
                <div>
                    <h3 className="font-semibold text-base mb-3">Quick Links</h3>
                    <ul className="space-y-2 text-[#D4D4D8]">
                        <li>
                            <Link href="/#about" className="hover:text-[#DC4242] transition focus-visible:ring-2 focus-visible:ring-[#DC4242] rounded">About Us</Link>
                        </li>
                        <li>
                            <Link href="/#services" className="hover:text-[#DC4242] transition focus-visible:ring-2 focus-visible:ring-[#DC4242] rounded">Services</Link>
                        </li>
                        <li>
                            <Link href="/#work" className="hover:text-[#DC4242] transition focus-visible:ring-2 focus-visible:ring-[#DC4242] rounded">Our Work</Link>
                        </li>
                        <li>
                            <Link href="/#brochure" className="hover:text-[#DC4242] transition focus-visible:ring-2 focus-visible:ring-[#DC4242] rounded">Our Brochure</Link>
                        </li>
                    </ul>
                </div>
                {/* Newsletter */}
                <div>
                    <h3 className="font-semibold text-base mb-3">Newsletter</h3>
                    <p className="text-sm text-[#D4D4D8] mb-3">Stay up to date with our latest news and offers.</p>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                        <label htmlFor="footer-email" className="sr-only">Email address</label>
                        <input
                            id="footer-email"
                            type="email"
                            name="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            placeholder="Your email address"
                            className="bg-[#23232A] border border-[#27272A] rounded px-3 py-2 text-white placeholder-[#A1A1AA] focus:outline-none focus:border-[#DC4242] transition"
                            required
                        />
                        <button
                            type="submit"
                            className="bg-[#DC4242] hover:bg-[#b32e2e] transition text-white rounded px-4 py-2 font-semibold"
                        >
                            Subscribe
                        </button>
                        {submitted && (
                            <span className="text-green-400 text-xs mt-1">Thank you for subscribing!</span>
                        )}
                    </form>
                </div>
                {/* Map & Social */}
                <div className="flex flex-col gap-4">
                    <div className="rounded-lg overflow-hidden h-32 w-full">
                        <iframe
                            title="Google Maps Location of Softles"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4720.924964478238!2d-0.7573350076874479!3d51.29371402076245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48742b842cb7a42d%3A0x1b1fd25cfaeb0a02!2sBrand%20House%2C%20Coombe%20way!5e0!3m2!1sen!2sin!4v1735461568255!5m2!1sen!2sin"
                            className="border-none w-full h-full"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                    <div className="flex gap-4 mt-2">
                        <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                            <Image src={Facebook} alt="Facebook Icon" className="w-7 h-7 hover:scale-110 transition" />
                        </Link>
                        <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                            <Image src={Twitter} alt="Twitter Icon" className="w-7 h-7 hover:scale-110 transition" />
                        </Link>
                        <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            <Image src={LinkedIn} alt="LinkedIn Icon" className="w-7 h-7 hover:scale-110 transition" />
                        </Link>
                        <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                            <Image src={Instagram} alt="Instagram Icon" className="w-7 h-7 hover:scale-110 transition" />
                        </Link>
                    </div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 pt-6">
                <p className="text-[#A1A1AA] text-sm text-center md:text-left">
                    &quot;Do something today that your future self will thank you for.&quot;
                </p>
                <p className="text-[#52525B] text-xs text-center md:text-right">
                    &copy; {new Date().getFullYear()} SoftLes - Web Design Company. All Rights Reserved.
                </p>
            </div>
        </footer>
    );
}