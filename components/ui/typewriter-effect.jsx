"use client";

import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export const TypewriterEffectSmooth = ({
    words,
    className,
    cursorClassName,
}) => {
    // Container for words, handling stagger for each word
    const wordsContainerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.3, // Stagger delay between words
            },
        },
    };

    // Variants for each word, handling stagger for each character
    const wordVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.04, // Stagger delay between characters in a word
                delayChildren: 0.1, // Optional delay before characters in a word start animating
            },
        },
    };

    // Variants for each character
    const characterVariants = {
        hidden: {
            opacity: 0,
            y: 20,
            // x: -10, // Optional: add a slight horizontal movement
            // filter: "blur(5px)", // Optional: add a blur effect
        },
        visible: {
            opacity: 1,
            y: 0,
            // x: 0,
            // filter: "blur(0px)",
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
                // duration: 0.3, // Can use duration or spring physics
            },
        },
    };

    const wordsArray = words.map((word) => ({
        ...word,
        text: word.text.split(""),
    }));

    return (
        <div className={cn("flex items-center", className)}> {/* Ensure vertical alignment if cursor is present */}
            <motion.div
                className="mt-2 lg:mt-5 mb-4 lg:mb-0 font-bold text-3xl md:text-[53px] lg:text-7xl leading-none md:leading-[64px] text-[#FFFEFE] opacity-90 inline-block overflow-hidden"
                variants={wordsContainerVariants}
                initial="hidden"
                whileInView="visible" // Use whileInView to trigger animation on scroll
                viewport={{ once: true, amount: 0.8 }} // Customize viewport options
            >
                {wordsArray.map((word, wordIdx) => (
                    <motion.div
                        key={`word-${wordIdx}`}
                        className="inline-block whitespace-nowrap" // Keep word together
                        variants={wordVariants}
                        // No initial/animate here, inherits from parent wordsContainerVariants
                    >
                        {word.text.map((char, charIdx) => (
                            <motion.span
                                key={`char-${charIdx}`}
                                className={cn("inline-block", word.className)} // Apply word's class to each char for consistent styling (e.g. color)
                                variants={characterVariants}
                                // No initial/animate here, inherits from parent wordVariants
                            >
                                {char}
                            </motion.span>
                        ))}
                        {wordIdx < wordsArray.length - 1 && <span className="inline-block">&nbsp;</span>}
                        {/* Add space between words if there are multiple words in the 'words' prop array */}
                    </motion.div>
                ))}
            </motion.div>
            <AnimatePresence>
                {cursorClassName && ( // Only render cursor if cursorClassName is provided
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{
                            duration: 0.5, // Faster cursor blink
                            repeat: Infinity,
                            repeatType: "reverse",
                            ease: "easeInOut",
                        }}
                        className={cn(
                            "ml-1 h-8 sm:h-14 xl:h-16 bg-blue-500", // Adjusted height to better match text
                            // Ensure cursorClassName can override default styles if needed
                            // For example, to hide it: "invisible"
                            // Default cursor is blue, can be changed via cursorClassName
                            cursorClassName
                        )}
                        style={{ width: "4px" }} // Explicit width for the cursor
                    />
                )}
            </AnimatePresence>
        </div>
    );
};
