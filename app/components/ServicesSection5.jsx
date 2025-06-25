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
                <p className="flex items-center text-base font-normal text-[#FFFFFF]"><Image src={Separator} className="mr-[10px]" alt="separator"/> Our Services</p>
                <span className="mt-2 lg:mt-5 mb-4 lg:mb-0 text-3xl md:text-[53px] lg:text-[64px] leading-none md:leading-[64px] lg:leading-[76.8px] text-[#FFFFFF]">Book a Discovery Session</span>
            </div>
            <div className="w-full text-white flex flex-col md:flex-row place-content-between justify-center gap-4 lg:gap-8 mt-9">

                {/* Talk to expert */}
                <div className="bg-[#191C26] w-full lg:w-[501px] min-h-[387px] px-2 lg:px-[37px] flex flex-col -gap-y-2">
                    <div className="flex relative">
                        <Image src={Ameet} alt="Expert Image" className="w-[231px] h-[236px]"/>
                        <div className="absolute bottom-5 -right-1 lg:right-20 bg-[#221429] block max-w-fit max-h-fit px-4 py-2">
                            <p className="text-xl font-semibold">Ameet Palkar</p>
                            <p className="text-base font-normal">Lead UX/UI Designer</p>
                        </div>
                    </div>
                    <div className="bg-[#221429] w-full max-h-fit mx-[9px] p-3 -mt-2 flex flex-col justify-between gap-y-2">
                        <h2 className="font-bold text-3xl">Talk to our research expert</h2>
                        <p className="text-sm font-medium">Reach out to learn more about how research can impact your business</p>
                        <div>
                            <button className="py-2 px-[17px] rounded-[100px] border-[1px] border-[#DC4242] text-[#DC4242] text-sm mt-3">Let&apos;s Talk</button>
                        </div>
                    </div>
                </div>


                {/* Contact Form */}
                <div className="max-w-md w-full min-h-[387px] lg:w-[655px] mx-auto p-5 md:p-8 shadow-input bg-[#191C26]">
                    <form className="my-8" ref={form} onSubmit={sendEmail}>
                        <LabelInputContainer className="mb-4">
                            <Label htmlFor="name">Name</Label>
                            <Input id="name" name="user_name" placeholder="John Doe" type="text"
                                value={userName}
                                onChange={(e) => setUserName(e.target.value)}
                            />
                        </LabelInputContainer>
                        <LabelInputContainer className="mb-4">
                            <Label htmlFor="email">Email Address</Label>
                            <Input id="email" name="user_email" placeholder="johndoe@gmail.com" type="email"
                                value={userMail}
                                onChange={(e) => setUserMail(e.target.value)}
                            />
                        </LabelInputContainer>

                        <button
                            className="bg-gradient-to-br relative group/btn mt-10 from-zinc-900 block bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                            value='send'
                            disabled={!isFormValid() || loading}
                            type="submit"
                        >
                            {
                                loading ? "Sending ..." : (<span className='inline-flex items-center justify-center text-base font-semibold gap-x-1 text-[#DC4242]'><Send size={16} strokeWidth={2}/>Send</span>)
                            }
                            <BottomGradient />
                        </button>
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
