"use client";

import React, { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion'; // Import useReducedMotion

const Particle = ({ id, areaWidth, areaHeight }) => {
  const [size, setSize] = useState(10);
  const [initialX, setInitialX] = useState(0);
  const [initialY, setInitialY] = useState(0);
  const [duration, setDuration] = useState(5);
  const [delay, setDelay] = useState(0);

  useEffect(() => {
    setSize(Math.random() * 8 + 4); // Particle size: 4px to 12px
    setInitialX(Math.random() * areaWidth);
    // Start particles from bottom or slightly off-screen bottom, moving upwards
    setInitialY(areaHeight + Math.random() * 50);
    setDuration(Math.random() * 15 + 10); // Animation duration: 10s to 25s
    setDelay(Math.random() * 8); // Animation delay: 0s to 8s
  }, [areaWidth, areaHeight]);

  // Simplified animation: vertical movement and fade
  const animateProps = {
    x: initialX, // Keep X constant
    y: [initialY, -size - 50], // Move from initial Y to off-screen top
    opacity: [0, 0.7, 0.7, 0], // Fade in, stay, fade out
    // scale: [0.5, 1, 0.8, 0.5], // Removed scale animation
    transition: {
      duration: duration,
      delay: delay,
      ease: "linear",
      repeat: Infinity,
      repeatType: "loop",
    },
  };

  return (
    <motion.div
      key={id}
      style={{
        position: 'absolute',
        left: 0,
        top: 0,
        width: size,
        height: size,
        borderRadius: '50%',
        backgroundColor: 'rgba(220, 66, 66, 0.25)', // Slightly more transparent
        // boxShadow: '0 0 6px rgba(220, 66, 66, 0.4)', // Reduced shadow
      }}
      initial={{ x: initialX, y: initialY, opacity: 0 }} // Removed scale from initial
      animate={animateProps}
    />
  );
};

const FloatingParticles = ({ count = 10 }) => { // Reduced default count
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const parentRef = React.useRef(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const updateDimensions = () => {
      if (parentRef.current) {
        setDimensions({
          width: parentRef.current.offsetWidth,
          height: parentRef.current.offsetHeight,
        });
      } else if (typeof window !== 'undefined') {
        setDimensions({
            width: window.innerWidth,
            height: window.innerHeight * 0.8
        });
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);

    const observer = new MutationObserver(updateDimensions);
    if (parentRef.current) {
        observer.observe(parentRef.current, { attributes: true, childList: true, subtree: true });
    }

    return () => {
      window.removeEventListener('resize', updateDimensions);
      observer.disconnect();
    };
  }, []);

  if (shouldReduceMotion) {
    // Optionally render a very small number of static particles or nothing
    return null;
  }

  if (dimensions.width === 0 || dimensions.height === 0) {
    return <div ref={parentRef} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 1 }} />;
  }

  return (
    <div ref={parentRef} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 1, overflow: 'hidden' }}>
      {Array.from({ length: count }).map((_, i) => (
        <Particle key={i} id={`particle-${i}`} areaWidth={dimensions.width} areaHeight={dimensions.height} />
      ))}
    </div>
  );
};

export default FloatingParticles;
