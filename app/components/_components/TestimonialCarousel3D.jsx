"use client";

import React, { useRef, useState, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Image as DreiImage, Text as DreiText, Html, useTexture } from '@react-three/drei';
import * as THREE from 'three';
import { motion, useReducedMotion } from 'framer-motion'; // Import useReducedMotion

const TestimonialCard3D = ({ testimonial, isActive }) => {
  const { text, name, imageSrc } = testimonial;
  const cardWidth = 5;
  const cardHeight = 3;
  const cardDepth = 0.2;

  const texture = useTexture(imageSrc);

  // For text, consider max width and line height.
  // Drei's Text component handles word wrapping if maxWidth is set.
  return (
    <group>
      <mesh>
        <boxGeometry args={[cardWidth, cardHeight, cardDepth]} />
        <meshStandardMaterial color={isActive ? "#2a2f42" : "#191C26"} transparent opacity={isActive ? 1 : 0.7} />
      </mesh>

      {/* Client Image */}
      <DreiImage
        url={imageSrc} // This might not work if imageSrc is an imported module. Pass string path.
        scale={[1.2, 1.2, 1]}
        position={[-cardWidth / 2 + 0.8, 0, cardDepth / 2 + 0.01]}
      />

      {/* Testimonial Text */}
      <DreiText
        color="white"
        fontSize={0.12}
        maxWidth={cardWidth - 2} // Allow space for image
        lineHeight={1.4}
        position={[0.6, 0.6, cardDepth / 2 + 0.01]}
        anchorX="left"
        anchorY="top"
      >
        {text}
      </DreiText>

      {/* Client Name */}
      <DreiText
        color="white"
        fontSize={0.15}
        fontStyle="italic"
        maxWidth={cardWidth - 2}
        position={[0.6, -cardHeight / 2 + 0.3, cardDepth / 2 + 0.01]}
        anchorX="left"
        anchorY="bottom"
      >
        - {name}
      </DreiText>
    </group>
  );
};

const CarouselScene = ({ testimonials }) => {
  const groupRef = useRef();
  const [activeIndex, setActiveIndex] = useState(0);
  const itemSpacing = 6; // Spacing between testimonial cards
  const shouldReduceMotion = useReducedMotion();

  useFrame((state) => {
    if (shouldReduceMotion) {
      // If reduced motion, jump directly to the target position
      if (groupRef.current) {
        groupRef.current.position.x = -activeIndex * itemSpacing;
      }
      return;
    }
    // Smoothly move to the active card
    const targetX = -activeIndex * itemSpacing;
    if (groupRef.current) {
      groupRef.current.position.x = THREE.MathUtils.lerp(groupRef.current.position.x, targetX, 0.1);
    }
  });

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Basic HTML buttons for interaction. Can be styled or replaced with 3D controls.
  // These buttons would be better placed outside the canvas via Html portal or separate DOM elements.
  // For simplicity in this step, using Drei's Html to overlay.

  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 10]} intensity={1} />
      <pointLight position={[-5, -5, 5]} intensity={0.5} />

      <group ref={groupRef}>
        {testimonials.map((testimonial, index) => (
          <motion.group
            key={testimonial.id || index}
            position={[index * itemSpacing, 0, 0]}
            animate={{
                scale: activeIndex === index ? 1 : 0.85,
                z: activeIndex === index ? 0 : -1, // Push non-active cards back
            }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            <TestimonialCard3D testimonial={testimonial} isActive={activeIndex === index} />
          </motion.group>
        ))}
      </group>

      {/* Navigation Buttons - Example using Drei Html */}
      <Html position={[-itemSpacing / 2 - 2, -2, 0]}>
        <button onClick={handlePrev} style={navButtonStyle}>Prev</button>
      </Html>
      <Html position={[itemSpacing / 2 + 2, -2, 0]}>
        <button onClick={handleNext} style={navButtonStyle}>Next</button>
      </Html>
    </>
  );
};

const navButtonStyle = {
    padding: '8px 15px',
    background: '#DC4242',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    margin: '0 10px'
};

export default function TestimonialCarousel3D({ items }) {
  // Ensure items have a unique id if possible, otherwise use index
  const testimonialsWithId = items.map((item, index) => ({ ...item, id: item.id || `testimonial-${index}` }));

  return (
    <div style={{ height: '500px', width: '100%', background: '#111319' }}> {/* Match section bg */}
      <Canvas camera={{ position: [0, 0, 7], fov: 45 }}>
        <CarouselScene testimonials={testimonialsWithId} />
      </Canvas>
    </div>
  );
}
