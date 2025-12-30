import React from 'react';
import { Box, useTheme } from '@mui/material';
import { motion } from 'framer-motion';

interface AnimatedBackgroundProps {
  variant?: 'primary' | 'secondary' | 'tertiary';
  density?: 'low' | 'medium' | 'high';
  withCodeSymbols?: boolean;
  withGradient?: boolean;
  opacity?: number;
}

const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({
  variant = 'primary',
  density = 'medium',
  withCodeSymbols = true,
  withGradient = true,
  opacity = 0.7,
}) => {
  const theme = useTheme();
  
  // Determine number of particles based on density
  const particleCount = density === 'low' ? 15 : density === 'medium' ? 25 : 40;
  
  // Determine colors based on variant
  let mainColor, secondaryColor;
  switch (variant) {
    case 'primary':
      mainColor = theme.palette.primary.main;
      secondaryColor = theme.palette.primary.light;
      break;
    case 'secondary':
      mainColor = theme.palette.secondary.main;
      secondaryColor = theme.palette.secondary.light;
      break;
    case 'tertiary':
      mainColor = theme.palette.tertiary.main;
      secondaryColor = theme.palette.tertiary.light;
      break;
    default:
      mainColor = theme.palette.primary.main;
      secondaryColor = theme.palette.primary.light;
  }

  // Code symbols to display
  const codeSymbols = ['{ }', '< >', '( )', '// //', '[]', '""', "''", ';;', '==', '=>'];

  return (
    <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 0, overflow: 'hidden' }}>
      {/* Gradient overlay */}
      {withGradient && (
        <Box 
          sx={{ 
            position: 'absolute', 
            top: 0, 
            left: 0, 
            right: 0, 
            bottom: 0, 
            background: variant === 'primary'
              ? `radial-gradient(circle at center, ${theme.palette.primary.main}20 0%, ${theme.palette.background.default}60 70%)`
              : variant === 'secondary'
                ? `radial-gradient(circle at center, ${theme.palette.secondary.main}20 0%, ${theme.palette.background.default}60 70%)`
                : `radial-gradient(circle at center, ${theme.palette.tertiary.main}20 0%, ${theme.palette.background.default}60 70%)`,
            zIndex: 1,
            opacity: opacity,
          }} 
        />
      )}

      {/* Animated particles */}
      {[...Array(particleCount)].map((_, i) => {
        const size = 10 + Math.random() * 20;
        const initialX = Math.random() * 100;
        const initialY = Math.random() * 100;
        const speed = 20 + Math.random() * 60;
        const delay = Math.random() * 2;
        const particleOpacity = 0.1 + Math.random() * 0.3;

        return (
          <motion.div
            key={i}
            initial={{ 
              x: `${initialX}vw`, 
              y: `${initialY}vh`, 
              opacity: 0,
              scale: 0
            }}
            animate={{ 
              x: [
                `${initialX}vw`, 
                `${initialX + (Math.random() * 20 - 10)}vw`, 
                `${initialX + (Math.random() * 20 - 10)}vw`, 
                `${initialX}vw`
              ],
              y: [
                `${initialY}vh`, 
                `${initialY + (Math.random() * 20 - 10)}vh`, 
                `${initialY + (Math.random() * 20 - 10)}vh`, 
                `${initialY}vh`
              ],
              opacity: [0, particleOpacity, particleOpacity, 0],
              scale: [0, 1, 1, 0],
              rotate: [0, 180, 360, 540]
            }}
            transition={{
              duration: speed,
              repeat: Infinity,
              delay: delay,
              ease: "easeInOut",
            }}
            style={{
              position: 'absolute',
              width: `${size}px`,
              height: `${size}px`,
              borderRadius: Math.random() > 0.5 ? '50%' : `${Math.random() * 50}%`,
              background: i % 3 === 0 
                ? mainColor 
                : i % 3 === 1 
                  ? secondaryColor 
                  : theme.palette.tertiary.main,
              filter: 'blur(8px)',
              boxShadow: i % 5 === 0 ? `0 0 20px ${mainColor}` : 'none',
              zIndex: 0,
            }}
          />
        );
      })}

      {/* Floating code symbols */}
      {withCodeSymbols && codeSymbols.map((symbol, i) => {
        const initialX = Math.random() * 100;
        const initialY = Math.random() * 100;
        const speed = 40 + Math.random() * 80;

        return (
          <motion.div
            key={`symbol-${i}`}
            initial={{ 
              x: `${initialX}vw`, 
              y: `${initialY}vh`, 
              opacity: 0,
              scale: 0
            }}
            animate={{ 
              x: [
                `${initialX}vw`, 
                `${initialX + (Math.random() * 30 - 15)}vw`, 
                `${initialX}vw`
              ],
              y: [
                `${initialY}vh`, 
                `${initialY - 30}vh`, 
                `${initialY}vh`
              ],
              opacity: [0, 0.3, 0],
              scale: [0, 1, 0],
              rotateZ: [0, Math.random() * 360]
            }}
            transition={{
              duration: speed,
              repeat: Infinity,
              delay: i * 2,
              ease: "easeInOut",
            }}
            style={{
              position: 'absolute',
              color: i % 3 === 0 
                ? theme.palette.primary.light 
                : i % 3 === 1 
                  ? theme.palette.secondary.light 
                  : 'rgba(255, 255, 255, 0.7)',
              fontSize: `${20 + Math.random() * 30}px`,
              fontFamily: 'monospace',
              fontWeight: 'bold',
              zIndex: 0,
              textShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
            }}
          >
            {symbol}
          </motion.div>
        );
      })}
    </Box>
  );
};

export default AnimatedBackground;