import type { Variants, ViewportOptions } from 'framer-motion';

export const MOTION_EASE_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const VIEWPORT_ONCE: ViewportOptions = {
  once: true,
  amount: 0.2,
};

export function fadeInUp(distance = 24, delay = 0): Variants {
  return {
    hidden: { opacity: 0, y: distance },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.56,
        delay,
        ease: MOTION_EASE_OUT,
      },
    },
  };
}

export function staggerContainer(staggerChildren = 0.08, delayChildren = 0): Variants {
  return {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren,
        delayChildren,
      },
    },
  };
}

export const pageTransitionVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 12,
    filter: 'blur(2px)',
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.38,
      ease: MOTION_EASE_OUT,
    },
  },
  exit: {
    opacity: 0,
    y: -8,
    filter: 'blur(2px)',
    transition: {
      duration: 0.24,
      ease: MOTION_EASE_OUT,
    },
  },
};
