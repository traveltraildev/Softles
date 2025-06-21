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
    setSize(Math.random() * 10 + 5); // Particle size: 5px to 15px
    setInitialX(Math.random() * areaWidth);
    setInitialY(Math.random() * areaHeight);
    setDuration(Math.random() * 10 + 10); // Animation duration: 10s to 20s
    setDelay(Math.random() * 5); // Animation delay: 0s to 5s
  }, [areaWidth, areaHeight]);

  // Define multiple animation targets for more randomness
  const animateProps = {
    x: [initialX, Math.random() * areaWidth, Math.random() * areaWidth, initialX],
    y: [initialY, Math.random() * areaHeight, Math.random() * areaHeight, initialY],
    opacity: [0, 0.8, 0.8, 0],
    scale: [0.5, 1, 0.8, 0.5],
    transition: {
      duration: duration,
      delay: delay,
      ease: "linear",
      repeat: Infinity,
      repeatType: "loop", // Loop the animation sequence
    },
  };

  return (
    <motion.div
      key={id}
      style={{
        position: 'absolute',
        left: 0, // Initial left/top will be controlled by x, y in animate
        top: 0,
        width: size,
        height: size,
        borderRadius: '50%',
        backgroundColor: 'rgba(220, 66, 66, 0.3)', // Using brand-red with some alpha
        boxShadow: '0 0 8px rgba(220, 66, 66, 0.5)',
      }}
      initial={{ x: initialX, y: initialY, opacity: 0, scale: 0.5 }}
      animate={animateProps}
    />
  );
};

const FloatingParticles = ({ count = 20 }) => {
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
