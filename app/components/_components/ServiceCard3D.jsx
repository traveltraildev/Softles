"use client";

import React, { useState, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Image as DreiImage, Text as DreiText, Html, Plane } from '@react-three/drei';
import { motion } from 'framer-motion-3d'; // For 3D motion components
import * as THREE from 'three';
import { useMemo } from 'react'; // Added for useMemo

const CardFace = ({ textContent, textColor = "#FFFFFF", backgroundColor = "#191C26", isFront = true, iconUrl, title, isHovered }) => {
  const textRef = useRef();

  // Card dimensions (must match boxGeometry)
  const cardWidth = 3;
  const cardHeight = 4;
  const cardDepth = 0.1; // Main card depth
  const borderThickness = 0.08; // Visual thickness of the border line
  const borderZOffset = cardDepth / 2 + 0.005; // Slightly in front of the card face

  const gradientTexture = useMemo(() => {
    if (!isFront) return null; // Only for front face

    const canvas = document.createElement('canvas');
    const textureSize = 256; // Power of 2 for texture
    canvas.width = textureSize;
    canvas.height = textureSize;
    const ctx = canvas.getContext('2d');

    // Create gradient (example: brand-red to a lighter red or transparent)
    const gradient = ctx.createLinearGradient(0, 0, textureSize, textureSize);
    gradient.addColorStop(0, '#DC4242'); // brand-red
    gradient.addColorStop(0.5, '#FF6B6B'); // Lighter red
    gradient.addColorStop(1, '#DC4242');

    ctx.strokeStyle = gradient;
    ctx.lineWidth = textureSize * (borderThickness / Math.min(cardWidth, cardHeight)); // Scale line width to texture

    // Draw a rectangle border path
    // Stroking a path that fills the canvas and making material transparent where not stroked
    // is complex. Easier to draw border lines and use transparency.
    // For this, we need a material that respects alpha.
    // Alternative: draw a filled rect with gradient, then clear center for transparency.

    // Simplified: For an overlay plane, the texture itself is the border.
    // We draw a rectangle with a transparent center.
    ctx.fillStyle = 'transparent'; // Transparent background for the texture
    ctx.fillRect(0, 0, textureSize, textureSize);

    ctx.strokeStyle = gradient;
    ctx.lineWidth = 8; // border line thickness on texture
    ctx.strokeRect(ctx.lineWidth / 2, ctx.lineWidth / 2, textureSize - ctx.lineWidth, textureSize - ctx.lineWidth);

    return new THREE.CanvasTexture(canvas);
  }, [isFront, cardWidth, cardHeight]); // Dependencies for texture regeneration (though static here)


  // Adjust text properties for better readability
  const titleFontSize = 0.25;
  const detailsFontSize = 0.15;

  return (
    <motion.group rotation-y={isFront ? 0 : Math.PI}>
      <mesh name="card-base">
        <boxGeometry args={[cardWidth, cardHeight, cardDepth]} />
        <meshStandardMaterial color={backgroundColor} side={THREE.FrontSide} />
      </mesh>

      {isFront && gradientTexture && (
        <Plane args={[cardWidth, cardHeight]} position={[0, 0, borderZOffset]}>
          <motion.meshBasicMaterial
            map={gradientTexture}
            transparent
            opacity={isHovered ? 1 : 0}
            side={THREE.DoubleSide} // Ensure it's visible even if slightly off angle
            transition={{ duration: 0.2 }} // Framer motion transition for opacity
          />
        </Plane>
      )}

      {/* Content using Drei's Text and Image for 3D rendering */}
      {isFront && iconUrl && (
        <DreiImage
          url={iconUrl}
          scale={[1.5, 1.5, 1]} // Adjust scale as needed
          position={[0, 0.8, 0.06]} // Position above title
          transparent
        />
      )}
      {isFront && title && (
         <DreiText
            ref={textRef}
            fontSize={titleFontSize}
            color={textColor}
            position={[0, -0.5, 0.06]} // Position below image
            anchorX="center"
            anchorY="middle"
            maxWidth={2.8} // Max width of text box
            textAlign="center"
        >
            {title}
        </DreiText>
      )}

      {!isFront && textContent && (
        <DreiText
            ref={textRef}
            fontSize={detailsFontSize}
            color={textColor}
            position={[0, 0, 0.06]}
            anchorX="center"
            anchorY="middle"
            maxWidth={2.8}
            textAlign="center"
            lineHeight={1.3}
        >
            {textContent}
        </DreiText>
      )}
    </motion.group>
  );
};

import { Points, PointMaterial } from '@react-three/drei';
// import { useControls } from 'leva'; // Optional: for debugging particle positions. Removed for now.
import { useReducedMotion as useFramerReducedMotion } from 'framer-motion'; // Alias for clarity


// Particle Burst Component
const ParticleBurst = ({ active, count = 20, size = 0.05, color = "#DC4242", iconPosition = [0, 0.8, 0.07] }) => {
  const pointsRef = useRef();
  const [particles, setParticles] = useState([]);
  const shouldReduceMotion = useFramerReducedMotion();

  useEffect(() => {
    if (active && !shouldReduceMotion) { // Only run if active AND motion is not reduced
      const tempParticles = [];
      for (let i = 0; i < count; i++) {
        const angle = Math.random() * Math.PI * 2;
        const burstRadius = 0.3 + Math.random() * 0.5; // Particles burst outwards
        tempParticles.push({
          x: iconPosition[0] + Math.cos(angle) * burstRadius,
          y: iconPosition[1] + Math.sin(angle) * burstRadius,
          z: iconPosition[2] + (Math.random() - 0.5) * 0.2, // Slight depth variation
          initialX: iconPosition[0],
          initialY: iconPosition[1],
          initialZ: iconPosition[2],
          opacity: 1,
          scale: Math.random() * 0.5 + 0.5, // Scale of particle itself
        });
      }
      setParticles(tempParticles);

      // Self-destruct particles after animation
      // This is a simple way; a pool would be more performant for frequent effects
      setTimeout(() => setParticles([]), 1000); // Corresponds to motion duration
    }
  }, [active, count, iconPosition]);

  if (!active || particles.length === 0) return null;

  return (
    <group>
      {particles.map((p, i) => (
        <motion.mesh
          key={i}
          position={[p.initialX, p.initialY, p.initialZ]}
          animate={{ x: p.x, y: p.y, z: p.z, opacity: 0, scale: p.scale * 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: Math.random() * 0.1 }}
        >
          <sphereGeometry args={[size, 8, 8]} />
          <meshStandardMaterial color={color} emissive={color} transparent opacity={p.opacity} />
        </motion.mesh>
      ))}
    </group>
  );
};


const FlippableCard = ({ icon, title, details }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [showParticles, setShowParticles] = useState(false);

  const spring = { type: "spring", stiffness: 200, damping: 20 };

  const handlePointerEnter = () => {
    setIsFlipped(true);
    setIsHovered(true);
    if (!isFlipped) { // Trigger particles only when flipping to front-hover, or just on hover
        setShowParticles(true);
        setTimeout(() => setShowParticles(false), 1000); // Reset after animation duration
    }
  };

  const handlePointerLeave = () => {
    setIsFlipped(false);
    setIsHovered(false);
    // No need to setShowParticles(false) here if it's timed out
  };

  const iconPosition = [0, 0.8, 0.07]; // Match icon position in CardFace, z slightly more front

  return (
    <motion.group
      whileHover={{ scale: 1.05, z: 0.1 }} // Apply physics-based hover effect: slight scale and lift
      transition={{ type: "spring", stiffness: 300, damping: 15 }} // Use physicsTransition from lib or define here
      animate={{ rotateY: isFlipped ? Math.PI : 0 }}
      // transition={spring} // The main flip animation spring
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
    >
      <CardFace
        iconUrl={icon}
        title={title}
        isFront={true}
        textColor="#FFFFFF"
        backgroundColor="#111111"
        isHovered={isHovered && !isFlipped} // Pass hover state only if front is visible
      />
      <CardFace
        textContent={details}
        isFront={false}
        textColor="#FFFFFF"
        backgroundColor="#DC4242" // Reverted to hex for direct R3F use
        // No border for back face for now
      />
      {/* Conditionally render particles on the front face context */}
      {!isFlipped && <ParticleBurst active={showParticles} iconPosition={iconPosition} color="#DC4242" />}
    </motion.group>
  );
};


export default function ServiceCard3D({ icon, title, details }) {
  // Define height for the canvas container for each card
  const cardHeight = "300px"; // Corresponds roughly to original card height
  const cardWidth = "220px"; // Corresponds roughly to original card width

  return (
    <div style={{ width: cardWidth, height: cardHeight, cursor: 'pointer' }}>
      <Canvas camera={{ position: [0, 0, 3.5], fov: 50 }}> {/* Adjust camera for single card view */}
        <ambientLight intensity={0.8} />
        <pointLight position={[5, 5, 5]} intensity={0.7} />
        <pointLight position={[-5, -5, 5]} intensity={0.3} />
        <FlippableCard icon={icon} title={title} details={details} />
      </Canvas>
    </div>
  );
}
