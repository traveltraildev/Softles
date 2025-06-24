"use client";

import Image from "next/image"; // Keep for Separator if still used by title
import Separator from "@/public/Separator.png";
import AmeetPic from "@/public/Ameet.png"; // Renamed for clarity
import React, { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Send, CheckCircle, XCircle } from "lucide-react"; // Added icons for feedback
import ExpertProfileCard from "./_components/ExpertProfileCard";
import ReactConfetti from 'react-confetti';
import { motion, AnimatePresence, useReducedMotion } from "framer-motion"; // Added useReducedMotion

export default function ServicesSection5() {
    const [userName, setUserName] = useState('');
    const [userMail, setUserMail] = useState('');
    const [loading, setLoading] = useState(false);
    const [submitStatus, setSubmitStatus] = useState('idle');
    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [windowSize, setWindowSize] = useState({ width: undefined, height: undefined });
    const shouldReduceMotion = useReducedMotion(); // Added hook

    // States for floating labels
    const [isNameFocused, setIsNameFocused] = useState(false);
    const [isEmailFocused, setIsEmailFocused] = useState(false);


    useEffect(() => {
        const handleResize = () => {
            setWindowSize({ width: window.innerWidth, height: window.innerHeight });
        };
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);


    const form = useRef(null);

    const validateForm = () => {
        let isValid = true;
        setNameError('');
        setEmailError('');

        if (userName.trim() === '') {
            setNameError('Name is required.');
            isValid = false;
        }
        if (userMail.trim() === '') {
            setEmailError('Email is required.');
            isValid = false;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userMail)) {
            setEmailError('Please enter a valid email address.');
            isValid = false;
        }
        return isValid;
    };

    const sendEmail = (e) => {
        e.preventDefault();
        if (!validateForm()) {
            setSubmitStatus('error'); // Indicate validation error
            return;
        }
        setLoading(true);
        setSubmitStatus('idle'); // Reset general submit status

        setTimeout(() => {
            setLoading(false);
            setSubmitStatus('success');
            setUserName('');
            setUserMail('');
            // Confetti will run based on 'success' status
            setTimeout(() => setSubmitStatus('idle'), 5000); // Reset status after confetti duration
        }, 2000);
    };

    const expertData = {
        imageSrc: AmeetPic,
        name: "Ameet Palkar",
        title: "Lead UX/UI Designer",
        heading: "Talk to our research expert",
        description: "Reach out to learn more about how research can impact your business.",
        buttonText: "Let's Talk"
    };

    return (
        <div className="min-h-[38rem] p-[10px] lg:px-[120px] w-full py-[90px] bg-[#111319] flex flex-col justify-center"> {/* Removed place-content-between for natural flow */}
            <div className="flex flex-col">
                <p className="flex items-center text-base font-normal text-[#FFFFFF]"><Image src={Separator} className="mr-[10px]" alt="separator"/> Our Services</p>
                <span className="mt-2 lg:mt-5 mb-4 lg:mb-0 text-3xl md:text-[53px] lg:text-[64px] leading-none md:leading-[64px] lg:leading-[76.8px] text-[#FFFFFF]">Book a Discovery Session</span>
            </div>
            <div className="w-full text-white flex flex-col md:flex-row items-start justify-center gap-8 mt-9"> {/* Changed to items-start for alignment */}

                {/* Talk to expert - Replaced with ExpertProfileCard */}
                <ExpertProfileCard expert={expertData} />

                {/* Contact Form */}
                <div className="max-w-md w-full min-h-[387px] lg:w-[655px] mx-auto p-5 md:p-8 shadow-input bg-[#191C26] rounded-lg"> {/* Added rounded-lg */}
                    <form className="my-8" ref={form} onSubmit={sendEmail}>
                        {/* Name Input with Floating Label */}
                        <LabelInputContainer className="mb-4" htmlFor="name" label="Name"
                            hasValue={!!userName} isFocused={isNameFocused} error={nameError}>
                            <Input
                                id="name" name="user_name" type="text"
                                value={userName}
                                onChange={(e) => { setUserName(e.target.value); if (nameError) validateForm(); }}
                                onFocus={() => setIsNameFocused(true)}
                                onBlur={() => setIsNameFocused(false)}
                                className={`bg-zinc-800 border-zinc-700 placeholder-transparent ${nameError ? 'border-red-500' : ''}`}
                            />
                        </LabelInputContainer>

                        {/* Email Input with Floating Label */}
                        <LabelInputContainer className="mb-4" htmlFor="email" label="Email Address"
                            hasValue={!!userMail} isFocused={isEmailFocused} error={emailError}>
                            <Input
                                id="email" name="user_email" type="email"
                                value={userMail}
                                onChange={(e) => { setUserMail(e.target.value); if (emailError) validateForm(); }}
                                onFocus={() => setIsEmailFocused(true)}
                                onBlur={() => setIsEmailFocused(false)}
                                className={`bg-zinc-800 border-zinc-700 placeholder-transparent ${emailError ? 'border-red-500' : ''}`}
                            />
                        </LabelInputContainer>

                        <AnimatePresence mode="wait">
                            {submitStatus === 'error' && !loading && (nameError || emailError) && (
                                <motion.div
                                    key="form-error"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 10 }}
                                    className="flex items-center p-2 mb-4 text-sm text-red-400 bg-red-900/30 rounded-md"
                                >
                                    <XCircle size={18} className="mr-2" /> Please correct the errors above.
                                </motion.div>
                            )}
                            {submitStatus === 'success' && !loading && (
                                 <motion.div
                                    key="form-success"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 10 }}
                                    className="flex items-center p-2 mb-4 text-sm text-green-400 bg-green-900/30 rounded-md"
                                >
                                    <CheckCircle size={18} className="mr-2" /> Message sent successfully!
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <button
                            className="bg-gradient-to-br relative group/btn mt-6 from-brand-red/80 to-brand-red block w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset] disabled:opacity-70 disabled:cursor-not-allowed"
                            value='send'
                            disabled={loading || (submitStatus === 'success')} // Disable while loading or on success
                            type="submit"
                        >
                            {
                                loading ? "Sending ..." : (<span className='inline-flex items-center justify-center text-base font-semibold gap-x-1 text-white'><Send size={16} strokeWidth={2}/>Send</span>)
                            }
                            <BottomGradient />
                        </button>
                    </form>
                    {submitStatus === 'success' && !shouldReduceMotion && windowSize.width && windowSize.height && (
                        <ReactConfetti
                            width={windowSize.width}
                            height={windowSize.height}
                            recycle={false}
                            numberOfPieces={shouldReduceMotion ? 0 : 300} // No pieces if reduced motion (belt and suspenders)
                            gravity={0.15}
                            initialVelocityX={{min: -10, max: 10}}
                            initialVelocityY={{min: -15, max: 5}}
                            fadeOut={true}
                        />
                    )}
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
    children, // This will be the Input component
    className,
    htmlFor,
    label,
    hasValue,
    isFocused,
    error
}) => {
    const isFloating = hasValue || isFocused;
    return (
        <div className={cn("relative flex flex-col space-y-2 w-full", className)}>
            <Label
                htmlFor={htmlFor}
                className={cn(
                    "absolute left-3 transition-all duration-200 ease-in-out pointer-events-none",
                    "text-zinc-400", // Default label color
                    isFloating ? "top-1.5 text-xs" : "top-1/2 -translate-y-1/2 text-sm", // text-sm to match input's default text size
                    isFocused && !error ? "text-brand-red" : "", // Focused color
                    error ? "text-red-500" : "" // Error color for label
                )}
            >
                {label}
            </Label>
            {children} {/* Render the Input component */}
            <AnimatePresence>
                {error && (
                    <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="text-xs text-red-500 mt-1 pl-1" // Added padding to align with input text
                    >
                        {error}
                    </motion.p>
                )}
            </AnimatePresence>
        </div>
    );
};
