"use client";

import React from 'react';
import Image from "next/image";
import { motion } from "framer-motion";
import { Send } from "lucide-react"; // Assuming this is for the button, or use a generic button

const ExpertProfileCard = ({ expert }) => {
  // expert: { imageSrc, name, title, description, buttonText }

  const cardRef = React.useRef(null);
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = React.useState(false);

  const handleMouseMove = (event) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      const x = event.clientX - rect.left - rect.width / 2;
      const y = event.clientY - rect.top - rect.height / 2;
      setMousePosition({ x, y });
    }
  };

  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => {
    setIsHovering(false);
    setMousePosition({ x: 0, y: 0 }); // Reset position for smooth return
  };

  const tiltStrength = 8; // Max rotation in degrees
  const glareOpacity = isHovering ? 0.1 : 0; // Base opacity for glare
  const glareX = mousePosition.x / 5 + 50; // Glare position percentage
  const glareY = mousePosition.y / 5 + 50;

  return (
    <motion.div
      ref={cardRef}
      className="bg-[#191C26] w-full lg:w-[501px] min-h-[387px] p-0 overflow-hidden relative shadow-xl rounded-lg" // Added rounded-lg, p-0 and overflow-hidden
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d", // Important for 3D children effects
      }}
      animate={{
        rotateX: isHovering ? (mousePosition.y / (cardRef.current?.offsetHeight || 100)) * -tiltStrength : 0,
        rotateY: isHovering ? (mousePosition.x / (cardRef.current?.offsetWidth || 100)) * tiltStrength : 0,
      }}
      transition={{ type: "spring", stiffness: 350, damping: 20, mass: 1 }}
    >
      {/* Glare Effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none z-10"
        style={{
          background: `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.5), transparent 60%)`,
          transformStyle: "preserve-3d",
        }}
        animate={{ opacity: glareOpacity }}
        transition={{ duration: 0.1 }}
      />

      {/* Content - needs to be layered above glare if necessary or glare is subtle enough */}
      <div className="relative z-0 flex flex-col h-full"> {/* Ensure content is above glare's default z-index if glare is not pointer-events-none */}
        <div className="flex relative"> {/* Container for image and name/title overlay */}
            <Image
                src={expert.imageSrc}
                alt={`${expert.name} profile picture`}
                width={231} // Specify base dimensions
                height={236}
                className="w-[231px] h-[236px] object-cover" // Ensure image covers its area
            />
            <div
                className="absolute bottom-5 -right-1 lg:right-20 bg-[#221429] block max-w-fit max-h-fit px-4 py-2"
                style={{ transform: "translateZ(20px)" }} // Lift the name tag slightly
            >
                <p className="text-xl font-semibold text-white">{expert.name}</p>
                <p className="text-base font-normal text-white/80">{expert.title}</p>
            </div>
        </div>
        <div
            className="bg-[#221429] w-full flex-grow mx-auto p-4 -mt-2 flex flex-col justify-between gap-y-3"  // Use auto margin for horizontal centering if needed. Use flex-grow.
            style={{ transform: "translateZ(10px)" }} // Lift this panel slightly
        >
            <h2 className="font-bold text-3xl text-white">{expert.heading}</h2>
            <p className="text-sm font-medium text-white/80">{expert.description}</p>
            <div>
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="py-2 px-[17px] rounded-full border border-brand-red text-brand-red text-sm mt-3 hover:bg-brand-red-darker hover:text-white transition-colors"
                >
                    {expert.buttonText || "Let's Talk"}
                </motion.button>
            </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ExpertProfileCard;
