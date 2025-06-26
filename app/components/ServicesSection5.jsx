"use client";

import Image from "next/image";
import Separator from "@/public/Separator.png";
import Ameet from "@/public/Ameet.png";
import React, { useState, useRef } from "react";
import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";


export default function ServicesSection5() {
    const [ userName, setUserName ] = useState('')
    const [ userMail, setUserMail ] = useState('')
    const [ loading, setLoading ] = useState(false)

    const form = useRef(null);
    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true)
    };

    const isFormValid = () => {
        return(
            userName.trim() !== '' &&
            userMail.trim() !== ''
        )
    }
    return (
        <div className="min-h-[30rem] p-[10px] lg:px-[120px] w-full py-[90px] bg-[#111319] flex flex-col justify-center place-content-between"> {/* Reduced min-h */}
            <div className="flex flex-col">
                <p className="flex items-center text-base font-normal text-[#FFFFFF]"><Image src={Separator} className="mr-[10px]" alt="separator"/> Get In Touch</p>
                <span className="mt-2 lg:mt-5 mb-4 lg:mb-0 text-3xl md:text-[53px] lg:text-[64px] leading-none md:leading-[64px] lg:leading-[76.8px] text-[#FFFFFF]">Book a Discovery Session</span>
            </div>
            <div className="w-full flex flex-col md:flex-row gap-8 mt-12 justify-center items-stretch">

                {/* Book a Discovery Session via Google Meet */}
                <div className="bg-gradient-to-br from-[#191C26] via-[#221429] to-[#191C26] rounded-2xl shadow-lg w-full max-w-[440px] flex flex-col justify-between p-0 overflow-hidden relative border border-[#23263a]">
                    <div className="flex flex-col items-center pt-8 pb-4 px-6">
                        <div className="relative">
                            <Image src={Ameet} alt="Expert Image" className="rounded-xl w-[180px] h-[180px] object-cover border-4 border-[#221429] shadow-md"/>
                        </div>
                        {/* Name and title moved below the image */}
                        <div className="mt-4 bg-[#221429] rounded-xl px-5 py-2 shadow-lg flex flex-col items-center">
                            <p className="text-lg font-semibold text-white">Ameet Palkar</p>
                            <p className="text-sm font-normal text-[#bdbdbd]">Lead UX/UI Designer</p>
                        </div>
                    </div>
                    <div className="bg-[#221429] px-8 py-6 flex flex-col items-center gap-3 border-t border-[#23263a]">
                        <h2 className="font-bold text-2xl text-white text-center">Book a Discovery Session</h2>
                        <p className="text-base font-medium text-[#bdbdbd] text-center">
                            Instantly schedule a Google Meet with our expert.<br />
                            <span className="text-xs text-[#888]">Powered by <span className="font-semibold">Google Meet</span></span>
                        </p>
                        <a
                            href="mailto:info@softles.in?subject=Discovery%20Session%20Booking&body=Hi%20Softles%2C%20I%20would%20like%20to%20book%20a%20discovery%20session%20via%20Google%20Meet."
                            className="mt-4 py-2 px-8 rounded-full border border-[#DC4242] text-[#DC4242] text-base font-semibold hover:bg-[#DC4242] hover:text-white transition-colors duration-200 shadow-sm text-center"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Book via Google Meet
                        </a>
                        <span className="text-xs text-[#bdbdbd] mt-2">Email: info@softles.in</span>
                    </div>
                </div>

                {/* Submit details for callback */}
                <div className="bg-gradient-to-br from-[#191C26] via-[#23263a] to-[#191C26] rounded-2xl shadow-lg w-full max-w-xl mx-auto flex flex-col justify-center p-8 border border-[#23263a]">
                    <form className="w-full" ref={form} onSubmit={sendEmail} autoComplete="off">
                        <h3 className="text-2xl font-bold text-white mb-6 text-center">Let us reach out to you</h3>
                        <LabelInputContainer className="mb-5">
                            <Label htmlFor="name" className="text-[#bdbdbd]">Name</Label>
                            <Input id="name" name="user_name" placeholder="John Doe" type="text"
                                value={userName}
                                onChange={(e) => setUserName(e.target.value)}
                                className="bg-[#181a20] border border-[#23263a] focus:border-[#DC4242] text-white placeholder-[#666] rounded-lg"
                            />
                        </LabelInputContainer>
                        <LabelInputContainer className="mb-5">
                            <Label htmlFor="email" className="text-[#bdbdbd]">Email Address</Label>
                            <Input id="email" name="user_email" placeholder="johndoe@gmail.com" type="email"
                                value={userMail}
                                onChange={(e) => setUserMail(e.target.value)}
                                className="bg-[#181a20] border border-[#23263a] focus:border-[#DC4242] text-white placeholder-[#666] rounded-lg"
                            />
                        </LabelInputContainer>
                        <LabelInputContainer className="mb-5">
                            <Label htmlFor="phone" className="text-[#bdbdbd]">Phone Number</Label>
                            <Input id="phone" name="user_phone" placeholder="+91 98765 43210" type="tel"
                                className="bg-[#181a20] border border-[#23263a] focus:border-[#DC4242] text-white placeholder-[#666] rounded-lg"
                                // Optionally, add value/onChange if you want to manage phone state
                            />
                        </LabelInputContainer>
                        <LabelInputContainer className="mb-5">
                            <Label htmlFor="message" className="text-[#bdbdbd]">Message (Optional)</Label>
                            <textarea
                                id="message"
                                name="user_message"
                                placeholder="Tell us about your needs..."
                                rows={3}
                                className="bg-[#181a20] border border-[#23263a] focus:border-[#DC4242] text-white placeholder-[#666] rounded-lg px-3 py-2 resize-none"
                            />
                        </LabelInputContainer>
                        <button
                            className={cn(
                                "relative group/btn mt-8 w-full py-3 rounded-full font-semibold text-base flex items-center justify-center gap-2 transition-all duration-200",
                                "bg-gradient-to-br from-[#23263a] to-[#191C26] border border-[#23263a]",
                                "hover:from-[#DC4242] hover:to-[#b92d2d] hover:border-[#DC4242]",
                                loading ? "opacity-60 cursor-not-allowed" : "text-[#DC4242] hover:text-white"
                            )}
                            value='send'
                            disabled={!isFormValid() || loading}
                            type="submit"
                        >
                            {loading ? (
                                <span className="animate-pulse">Sending ...</span>
                            ) : (
                                <>
                                    <Send size={18} strokeWidth={2} />
                                    Submit Details
                                </>
                            )}
                            <BottomGradient />
                        </button>
                        <p className="text-xs text-[#bdbdbd] mt-4 text-center">
                            We&apos;ll reach out to you to schedule your session.
                        </p>
                    </form>
                </div>
            </div>
        </div>
    )
}

const BottomGradient = () => {
    return (
        <>
            <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
            <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
        </>
    );
};

const LabelInputContainer = ({
    children,
    className,
}) => {
    return (
        <div className={cn("flex flex-col space-y-2 w-full", className)}>
            {children}
        </div>
    );
};
