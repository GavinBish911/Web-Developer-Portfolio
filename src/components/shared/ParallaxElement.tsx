import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface ParallaxElementProps {
  children: React.ReactNode;
  strength?: number;
  direction?: 'both' | 'horizontal' | 'vertical';
  reverse?: boolean;
  style?: React.CSSProperties;
}

const ParallaxElement: React.FC<ParallaxElementProps> = ({
  children,
  strength = 0.03,
  direction = 'both',
  reverse = false,
  style = {},
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Track mouse position for parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Calculate parallax values based on mouse position
  const calculateParallaxValue = () => {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    // Apply strength and direction
    const offsetX = direction === 'vertical' ? 0 : (mousePosition.x - centerX) * strength * (reverse ? -1 : 1);
    const offsetY = direction === 'horizontal' ? 0 : (mousePosition.y - centerY) * strength * (reverse ? -1 : 1);

    return { x: offsetX, y: offsetY };
  };

  return (
    <motion.div
      animate={calculateParallaxValue()}
      transition={{ type: 'spring', stiffness: 50 }}
      style={{
        position: 'relative',
        ...style,
      }}
    >
      {children}
    </motion.div>
  );
};

export default ParallaxElement;
