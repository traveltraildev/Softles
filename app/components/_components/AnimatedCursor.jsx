"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const AnimatedCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 }); // Start off-screen
  const [isHoveringInteractive, setIsHoveringInteractive] = useState(false);
  const [isVisible, setIsVisible] = useState(false); // To hide on mouse out of window

  const cursorDotRef = useRef(null);
  const cursorOutlineRef = useRef(null);
  const lastMoveTimeRef = useRef(0);
  const animationFrameRef = useRef(null);
  const latestMousePositionRef = useRef({ x: -100, y: -100});

  useEffect(() => {
    const handleMouseMove = (event) => {
      latestMousePositionRef.current = { x: event.clientX, y: event.clientY };
      if (!isVisible) setIsVisible(true);

      const now = Date.now();
      if (now - lastMoveTimeRef.current < 16) { // Roughly 60 FPS
        if (!animationFrameRef.current) {
          animationFrameRef.current = requestAnimationFrame(() => {
            setMousePosition(latestMousePositionRef.current);
            lastMoveTimeRef.current = Date.now();
            animationFrameRef.current = null;
          });
        }
        return;
      }

      setMousePosition(latestMousePositionRef.current);
      lastMoveTimeRef.current = now;
    };

    const handleMouseOver = (event) => {
      // Check if hovering over specified interactive elements
      const target = event.target;
      if (target.closest('a, button, [data-cursor-hoverable="true"]')) {
        setIsHoveringInteractive(true);
      } else {
        setIsHoveringInteractive(false);
      }
    };

    const handleMouseOutWindow = () => {
        setIsVisible(false);
    };

    const handleMouseEnterWindow = () => {
        if (!isVisible) setIsVisible(true);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver); // More robust for detecting interactive elements
    document.documentElement.addEventListener('mouseout', handleMouseOutWindow); // Hide when mouse leaves window
    document.documentElement.addEventListener('mouseenter', handleMouseEnterWindow); // Show when mouse enters window


    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.documentElement.removeEventListener('mouseout', handleMouseOutWindow);
      document.documentElement.removeEventListener('mouseenter', handleMouseEnterWindow);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isVisible]);

  const dotVariants = {
    default: {
      x: mousePosition.x - 4, // Center the 8x8 dot
      y: mousePosition.y - 4,
      scale: 1,
      backgroundColor: "rgba(220, 66, 66, 1)", // brand-red
    },
    interactive: {
      x: mousePosition.x - 6, // Center the 12x12 dot
      y: mousePosition.y - 6,
      scale: 1.5,
      backgroundColor: "rgba(220, 66, 66, 0.7)",
    },
    hidden: {
        opacity: 0,
        scale: 0,
        x: mousePosition.x,
        y: mousePosition.y,
    }
  };

  const outlineVariants = {
    default: {
      x: mousePosition.x - 16, // Center the 32x32 outline
      y: mousePosition.y - 16,
      scale: 1,
      borderColor: "rgba(220, 66, 66, 0.5)",
    },
    interactive: {
      x: mousePosition.x - 20, // Center the 40x40 outline
      y: mousePosition.y - 20,
      scale: 1.2,
      borderColor: "rgba(220, 66, 66, 0.8)",
    },
    hidden: {
        opacity: 0,
        scale: 0,
        x: mousePosition.x,
        y: mousePosition.y,
    }
  };

  const spring = {
    type: "spring",
    stiffness: 500,
    damping: 30,
  };
  const fastSpring = {
    type: "spring",
    stiffness: 800,
    damping: 35,
  };


  return (
    <>
      <motion.div
        ref={cursorOutlineRef}
        variants={outlineVariants}
        animate={isVisible ? (isHoveringInteractive ? "interactive" : "default") : "hidden"}
        transition={spring}
        style={{
          position: 'fixed',
          width: 32,
          height: 32,
          border: '2px solid rgba(220, 66, 66, 0.5)', // brand-red semi-transparent
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9999, // Ensure it's on top
          left: 0, // Initial position, will be updated by variants
          top: 0,
        }}
      />
      <motion.div
        ref={cursorDotRef}
        variants={dotVariants}
        animate={isVisible ? (isHoveringInteractive ? "interactive" : "default") : "hidden"}
        transition={fastSpring} // Dot can be a bit faster
        style={{
          position: 'fixed',
          width: 8,
          height: 8,
          backgroundColor: 'rgba(220, 66, 66, 1)', // brand-red
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9999,
          left: 0,
          top: 0,
        }}
      />
    </>
  );
};

export default AnimatedCursor;
