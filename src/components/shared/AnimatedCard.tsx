import React, { useState } from 'react';
import { Paper, Box, useTheme } from '@mui/material';
import { motion } from 'framer-motion';

interface AnimatedCardProps {
  children: React.ReactNode;
  elevation?: number;
  hoverEffect?: 'lift' | 'glow' | 'scale' | 'tilt' | 'none';
  withGradientBorder?: boolean;
  borderPosition?: 'top' | 'left' | 'bottom' | 'right' | 'all';
  delay?: number;
  sx?: any;
}

const AnimatedCard: React.FC<AnimatedCardProps> = ({
  children,
  elevation = 0,
  hoverEffect = 'lift',
  withGradientBorder = true,
  borderPosition = 'top',
  delay = 0,
  sx = {},
}) => {
  const theme = useTheme();
  const [isHovered, setIsHovered] = useState(false);

  // Define gradient for border
  const gradientBorder = `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`;

  // Define border styles based on position
  const getBorderStyles = () => {
    if (!withGradientBorder) return {};

    if (borderPosition === 'all') {
      return {
        border: '2px solid transparent',
        backgroundClip: 'padding-box',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          borderRadius: 'inherit',
          padding: '2px',
          background: gradientBorder,
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
          pointerEvents: 'none',
        }
      };
    }

    const borderStyles: any = {
      position: 'relative',
      overflow: 'hidden',
      '&::before': {
        content: '""',
        position: 'absolute',
        background: gradientBorder,
        transition: 'opacity 0.3s ease',
        opacity: isHovered ? 1 : 0.7,
      }
    };

    switch (borderPosition) {
      case 'top':
        borderStyles['&::before'].top = 0;
        borderStyles['&::before'].left = 0;
        borderStyles['&::before'].width = '100%';
        borderStyles['&::before'].height = '4px';
        break;
      case 'left':
        borderStyles['&::before'].top = 0;
        borderStyles['&::before'].left = 0;
        borderStyles['&::before'].width = '4px';
        borderStyles['&::before'].height = '100%';
        break;
      case 'bottom':
        borderStyles['&::before'].bottom = 0;
        borderStyles['&::before'].left = 0;
        borderStyles['&::before'].width = '100%';
        borderStyles['&::before'].height = '4px';
        break;
      case 'right':
        borderStyles['&::before'].top = 0;
        borderStyles['&::before'].right = 0;
        borderStyles['&::before'].width = '4px';
        borderStyles['&::before'].height = '100%';
        break;
    }

    return borderStyles;
  };

  // Define hover animations based on effect
  const getHoverAnimations = () => {
    switch (hoverEffect) {
      case 'lift':
        return {
          y: isHovered ? -10 : 0,
          boxShadow: isHovered 
            ? `0 20px 40px ${theme.palette.mode === 'dark' ? 'rgba(0,0,0,0.3)' : 'rgba(0,0,0,0.1)'}`
            : `0 8px 30px ${theme.palette.mode === 'dark' ? 'rgba(0,0,0,0.2)' : 'rgba(0,0,0,0.08)'}`,
        };
      case 'glow':
        return {
          boxShadow: isHovered 
            ? `0 0 30px ${theme.palette.primary.main}40`
            : `0 8px 30px ${theme.palette.mode === 'dark' ? 'rgba(0,0,0,0.2)' : 'rgba(0,0,0,0.08)'}`,
        };
      case 'scale':
        return {
          scale: isHovered ? 1.03 : 1,
        };
      case 'tilt':
        return {
          rotateX: isHovered ? 5 : 0,
          rotateY: isHovered ? 5 : 0,
          perspective: 1000,
        };
      case 'none':
      default:
        return {};
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      animate={getHoverAnimations()}
    >
      <Paper
        elevation={elevation}
        sx={{
          borderRadius: 4,
          overflow: 'hidden',
          transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
          ...getBorderStyles(),
          ...sx,
        }}
      >
        {/* Add subtle background gradient when hovered */}
        {hoverEffect !== 'none' && (
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: theme.palette.mode === 'dark'
                ? 'radial-gradient(circle at center, rgba(58, 134, 255, 0.05) 0%, rgba(0, 0, 0, 0) 70%)'
                : 'radial-gradient(circle at center, rgba(58, 134, 255, 0.03) 0%, rgba(255, 255, 255, 0) 70%)',
              opacity: isHovered ? 1 : 0,
              transition: 'opacity 0.3s ease',
              zIndex: 0,
            }}
          />
        )}

        {/* Content container */}
        <Box sx={{ position: 'relative', zIndex: 1 }}>
          {children}
        </Box>
      </Paper>
    </motion.div>
  );
};

export default AnimatedCard;