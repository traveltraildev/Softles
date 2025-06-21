"use client";

import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import * as THREE from 'three';
import { useReducedMotion } from 'framer-motion'; // Import useReducedMotion

const CarouselItem = ({ text, position, rotationY }) => {
  return (
    <group position={position} rotation-y={rotationY}>
      <Text
        fontSize={0.5}
        color="#FFFEFE"
        anchorX="center"
        anchorY="middle"
        outlineWidth={0.02}
        outlineColor="#111319"
      >
        {text}
      </Text>
    </group>
  );
};

const Scene = ({ items, itemSpacing = 4, baseSpeed = 0.5 }) => {
  const groupRef = useRef();
  const singleSetWidth = items.length * itemSpacing;
  const shouldReduceMotion = useReducedMotion();

  useFrame((state, delta) => {
    if (groupRef.current && !shouldReduceMotion) { // Only animate if not reduced motion
      const actualSpeed = baseSpeed * delta;
      groupRef.current.position.x -= actualSpeed;

      if (groupRef.current.position.x <= -singleSetWidth) {
        groupRef.current.position.x += singleSetWidth;
      }
    }
  });

  const groupRotationX = shouldReduceMotion ? 0 : THREE.MathUtils.degToRad(-5); // No tilt if reduced motion

  // Center the initial view: the group starts such that the first item of the first set
  // is roughly at the center or beginning of its scroll path.
  // The items are laid out starting from -singleSetWidth / 2 + itemSpacing / 2 for the first set.
  // If we want the scroll to start with items already moving from the right,
  // initial position of the group can be 0.

  // Items are positioned relative to the group's center (0,0,0).
  // The first set from: `i * itemSpacing`
  // The second set from: `(i + items.length) * itemSpacing`
  // The group itself is then moved.

  return (
    <>
      <ambientLight intensity={0.7} /> {/* Slightly increased ambient light */}
      <directionalLight position={[0, 5, 5]} intensity={1} />
      <pointLight position={[0, 2, 10]} intensity={0.8} /> {/* Added a point light for more definition */}

      <group ref={groupRef} rotation-x={groupRotationX} position-x={0}> {/* Initial position of group */}
        {/* Original set of items */}
        {items.map((text, index) => {
          const position = new THREE.Vector3(index * itemSpacing, 0, 0);
          return <CarouselItem key={`item-${index}`} text={text} position={position} rotationY={0} />;
        })}
        {/* Cloned set of items for seamless looping */}
        {items.map((text, index) => {
          const position = new THREE.Vector3((index + items.length) * itemSpacing, 0, 0);
          return <CarouselItem key={`clone-${index}`} text={text} position={position} rotationY={0} />;
        })}
      </group>
    </>
  );
};

export default function Infinite3DCarousel({ texts }) {
  const itemSpacing = 5; // Adjusted spacing slightly for longer texts like "Business Website"
  // Font size in CarouselItem is 0.5. Text component's size is in world units.
  // "Business Website" is long. Max width of text can be estimated to adjust itemSpacing or scale.

  if (!texts || texts.length === 0) {
    return null; // Don't render if no texts are provided
  }

  return (
    <div style={{ height: '80px', width: '100%', overflow: 'hidden', background: 'transparent' }}> {/* Adjusted height */}
      <Canvas camera={{ position: [0, 0.3, 7], fov: 50 }}> {/* Adjusted camera for better view: closer, wider fov */}
        <Scene items={texts} itemSpacing={itemSpacing} baseSpeed={0.8} /> {/* Increased baseSpeed slightly */}
      </Canvas>
    </div>
  );
}
