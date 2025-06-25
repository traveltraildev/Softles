"use client";

import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Image as DreiImage, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';
import { useReducedMotion } from 'framer-motion'; // Import useReducedMotion

console.log("React version in ParallaxHeroImage:", React.version);


function Scene({ src }) {
  const meshRef = useRef();
  const { size } = useThree();
  const shouldReduceMotion = useReducedMotion();

  // Ref for mouse position
  const mousePositionRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (shouldReduceMotion) return; // Don't attach listener if motion is reduced

    const handleMouseMove = (event) => {
      const x = (event.clientX / window.innerWidth) * 2 - 1;
      const y = -(event.clientY / window.innerHeight) * 2 + 1;
      mousePositionRef.current = { x, y };
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [shouldReduceMotion]);

  useFrame(({ camera }) => {
    if (meshRef.current && !shouldReduceMotion) {
      meshRef.current.rotation.y = mousePositionRef.current.x * 0.05;
      meshRef.current.rotation.x = mousePositionRef.current.y * 0.05;

      // Optional: Move camera slightly
      // camera.position.y = THREE.MathUtils.lerp(camera.position.y, mousePositionRef.current.y * 0.1, 0.1);
      // camera.lookAt(0,0,0); // Ensure camera always looks at the center of the scene
    }
  });

  // Determine aspect ratio of the image. Assume it's somewhat wide.
  // This helps in scaling the plane correctly.
  // For "/Container.png", its dimensions are 592x512.
  const imageAspectRatio = 592 / 512;

  // Scale the image to fit the container while maintaining aspect ratio
  // We want the image to roughly cover a certain area.
  // Let's say we want its height to be around 5 units in 3D space.
  const displayHeight = 5;
  const displayWidth = displayHeight * imageAspectRatio;
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={25} />
      <ambientLight intensity={0.8} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <directionalLight position={[-10, -10, 5]} intensity={0.5} />

      <mesh ref={meshRef} position={[0, 0, 0]}>
        <DreiImage
          url={src}
          scale={[displayWidth, displayHeight, 1]}
          transparent
          opacity={1}
        />
      </mesh>
    </>
  );
}

export default function ParallaxHeroImage({ src }) {
  // Original image dimensions: 592x512
  // We need to define a container size for the Canvas that matches the image's aspect ratio
  // or the space it's supposed to occupy.
  // The original <Image /> component would be styled by its parent div.
  // Let's assume the parent div in Hero.jsx (`md:w-1/2`) will constrain this.
  // The R3F canvas should fill its container.
  return (
    <div style={{ width: '100%', height: '100%', minHeight: '300px' }}> {/* Adjust minHeight as needed */}
      <Canvas>
        <Scene src={src} />
      </Canvas>
    </div>
  );
}
