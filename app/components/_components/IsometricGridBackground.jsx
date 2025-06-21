"use client";

import React, { useRef, useEffect } from 'react';
import { useReducedMotion } from 'framer-motion'; // Import useReducedMotion

const IsometricGridBackground = () => {
  const canvasRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let nodes = [];
    const gridSize = 50; // Size of grid cells in pixels
    const angle = Math.PI / 6; // 30 degrees for isometric projection
    const cosAngle = Math.cos(angle);
    const sinAngle = Math.sin(angle);
    const numNodes = 30; // Number of animated nodes
    const nodeSpeed = 0.3;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    const initNodes = () => {
        nodes = [];
        for (let i = 0; i < numNodes; i++) {
            // Random initial position (in grid coordinates)
            const gx = Math.random() * (canvas.width / gridSize);
            const gy = Math.random() * (canvas.height / (gridSize * sinAngle * 2)); // Adjusted for isometric height

            // Random direction vector (on the 2D plane, will be projected to isometric)
            const dirX = (Math.random() - 0.5) * 2; // -1 to 1
            const dirY = (Math.random() - 0.5) * 2; // -1 to 1
            const magnitude = Math.sqrt(dirX*dirX + dirY*dirY) || 1;


            nodes.push({
                x: gx * gridSize, // Current screen x (approx)
                y: gy * gridSize, // Current screen y (approx)
                gridX: gx, // Store grid X for movement
                gridY: gy, // Store grid Y for movement
                dirX: (dirX / magnitude) * nodeSpeed,
                dirY: (dirY / magnitude) * nodeSpeed,
                size: Math.random() * 3 + 1, // 1px to 4px
                opacity: Math.random() * 0.5 + 0.2, // 0.2 to 0.7
            });
        }
    };

    const toIsometric = (x, y) => {
        // This simplified projection assumes x,y are screen-like coordinates to be mapped to an isometric grid cell
        // A more common approach is to have 3D coordinates (x,y,z) and project them.
        // For a 2D grid that looks isometric:
        const isoX = (x - y) * cosAngle;
        const isoY = (x + y) * sinAngle;
        return { x: isoX, y: isoY };
    };


    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw grid lines
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)'; // Light lines for dark theme
      ctx.lineWidth = 0.5;

      // Lines parallel to one isometric axis
      for (let i = -canvas.height; i < canvas.width + canvas.height; i += gridSize) {
        ctx.beginPath();
        // Project points for lines: (x,0) to (x, height) and (0,y) to (width,y) then transform
        // Simplified: Draw lines that *look* isometric
        // Line type 1: (x - y) * cos(30), (x + y) * sin(30)
        // Start from top-leftish to bottom-rightish
        ctx.moveTo(toIsometric(i, -canvas.height).x + canvas.width / 2, toIsometric(i, -canvas.height).y);
        ctx.lineTo(toIsometric(i, canvas.width + canvas.height).x + canvas.width / 2, toIsometric(i, canvas.width + canvas.height).y + canvas.height / 2); // Approximate
        ctx.stroke();
      }

      // Lines parallel to the other isometric axis
      for (let i = -canvas.height; i < canvas.width + canvas.height; i += gridSize) {
        ctx.beginPath();
        // Start from top-rightish to bottom-leftish
        ctx.moveTo(toIsometric(canvas.width - i, -canvas.height).x + canvas.width / 2, toIsometric(canvas.width -i, -canvas.height).y);
        ctx.lineTo(toIsometric(canvas.width - i, canvas.width + canvas.height).x + canvas.width / 2, toIsometric(canvas.width - i, canvas.width + canvas.height).y + canvas.height / 2); // Approximate
        ctx.stroke();
      }


      // Draw and update nodes
      nodes.forEach(node => {
        // Update node position (conceptual grid coordinates)
        node.gridX += node.dirX;
        node.gridY += node.dirY;

        // Boundary checks (based on conceptual grid)
        if (node.gridX * gridSize > canvas.width || node.gridX * gridSize < 0) node.dirX *= -1;
        if (node.gridY * gridSize > canvas.height || node.gridY * gridSize < 0) node.dirY *= -1;

        // Project to isometric view for drawing
        // This needs a proper mapping from the node's (gridX, gridY) which are abstract grid units
        // to screen coordinates for drawing the dot.
        // Let's treat gridX, gridY as if they are points on a flat 2D grid that we then project.
        const screenPos = toIsometric(node.gridX * gridSize * 0.5, node.gridY * gridSize * 0.5); // Scale down grid units for visual density
        const drawX = screenPos.x + canvas.width / 2; // Center the grid roughly
        const drawY = screenPos.y + canvas.height / 3; // Adjust vertical centering

        ctx.beginPath();
        ctx.arc(drawX, drawY, node.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(220, 66, 66, ${node.opacity})`; // brand-red with varying opacity
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    const drawStaticGrid = () => { // Function to draw just the grid lines, no nodes
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
        ctx.lineWidth = 0.5;
        for (let i = -canvas.height; i < canvas.width + canvas.height; i += gridSize) {
            ctx.beginPath();
            ctx.moveTo(toIsometric(i, -canvas.height).x + canvas.width / 2, toIsometric(i, -canvas.height).y);
            ctx.lineTo(toIsometric(i, canvas.width + canvas.height).x + canvas.width / 2, toIsometric(i, canvas.width + canvas.height).y + canvas.height / 2);
            ctx.stroke();
        }
        for (let i = -canvas.height; i < canvas.width + canvas.height; i += gridSize) {
            ctx.beginPath();
            ctx.moveTo(toIsometric(canvas.width - i, -canvas.height).x + canvas.width / 2, toIsometric(canvas.width -i, -canvas.height).y);
            ctx.lineTo(toIsometric(canvas.width - i, canvas.width + canvas.height).x + canvas.width / 2, toIsometric(canvas.width - i, canvas.width + canvas.height).y + canvas.height / 2);
            ctx.stroke();
        }
    };

    resizeCanvas();
    if (shouldReduceMotion) {
        drawStaticGrid(); // Draw static grid once
    } else {
        initNodes();
        draw(); // Start animation loop
    }

    const handleResize = () => {
        resizeCanvas();
        if (shouldReduceMotion) {
            drawStaticGrid();
        } else {
            initNodes();
            // If draw() is not recalled, animation might stop. Ensure loop continues if it was running.
            // However, initNodes() followed by the existing draw() in RAF should be fine.
            // If draw isn't running, call it.
            if(!animationFrameId && !shouldReduceMotion) draw();

        }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = null; // Clear ID
      window.removeEventListener('resize', handleResize);
    };
  }, [shouldReduceMotion]); // Add shouldReduceMotion to dependency array

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0, // Behind content
        background: 'transparent', // Canvas itself is transparent
      }}
    />
  );
};

export default IsometricGridBackground;
