"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export const HoverEffect = ({
    items,
    className
}) => {
    let [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        (
            <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 place-content-center justify-items-center gap-6 mt-9", className)}>
                {items.map((item, idx) => (
                    <div
                        key={idx}
                        className="relative group block p-2 h-full w-full"
                        onMouseEnter={() => setHoveredIndex(idx)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        <AnimatePresence>
                            {hoveredIndex === idx && (
                                <motion.span
                                    className="absolute inset-0 h-full w-full bg-slate-800/[0.8] block rounded-lg"
                                    layoutId="hoverBackground"
                                    initial={{ opacity: 0 }}
                                    animate={{
                                        opacity: 1,
                                        transition: { duration: 0.15 },
                                    }}
                                    exit={{
                                        opacity: 0,
                                        transition: { duration: 0.15, delay: 0.2 },
                                    }}
                                />
                            )}
                        </AnimatePresence>
                        <Card>
                            <CardImage source={item.source} />
                            <CardTitle>{item.title}</CardTitle>
                        </Card>
                        </div>
                    ))
                }
            </div>
        )
    );
};

export const Card = ({
    className,
    children
}) => {
    return (
        (
            <div
                className={cn(
                    "rounded-md p-4 border border-white/[0.2] group-hover:border-slate-700 relative z-20 h-[250px] w-[185px] bg-[#111111] py-[10px] shadow-[0px_15px_30px_0px_rgba(0,0,0,0.5)] flex flex-col items-center justify-center gap-y-[30px]",
                    className
                )}
            >
                <div className="relative z-40">
                    <div className="p-4">{children}</div>
                </div>
            </div>
        )
    );
};

export const CardTitle = ({
    className,
    children
}) => {
    return (
        (
            <h4 className={cn("tracking-wide mt-4 text-[#FFFFFF] text-base font-normal text-center", className)}>
                {children}
            </h4>
        )
    );
};
export const CardImage = ({
    className,
    source
}) => {
    return (
        (
            <Image src={source} width={138} height={139} alt="Services" className={cn("", className)} />
        )
    );
};
