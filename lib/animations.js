// lib/animations.js

/**
 * Framer Motion variants for common animations.
 */

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
};

export const staggerContainer = (staggerChildren = 0.1, delayChildren = 0) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

export const itemFadeIn = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
};

// Example transition for physics-based effects
export const physicsTransition = {
  type: "spring",
  stiffness: 300,
  damping: 20,
};

export const sectionReveal = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.6, 0.05, -0.01, 0.9] // Example cubic bezier for smooth ease
    }
  },
};

// Add more shared animations here as needed
// e.g., for staggered reveals, card flips, etc.
