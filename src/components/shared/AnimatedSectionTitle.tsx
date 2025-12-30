import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { motion } from 'framer-motion';

interface AnimatedSectionTitleProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  withGradient?: boolean;
  withAnimation?: boolean;
  withDecoration?: boolean;
}

const AnimatedSectionTitle: React.FC<AnimatedSectionTitleProps> = ({
  title,
  subtitle,
  align = 'center',
  withGradient = true,
  withAnimation = true,
  withDecoration = true,
}) => {
  const theme = useTheme();

  // Animation variants
  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.2,
        ease: "easeOut"
      }
    }
  };

  const decorationVariants = {
    hidden: { scaleX: 0, opacity: 0 },
    visible: { 
      scaleX: 1, 
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: 0.4,
        ease: "easeInOut"
      }
    }
  };

  return (
    <Box 
      sx={{ 
        mb: subtitle ? 6 : 4,
        textAlign: align,
        position: 'relative',
      }}
    >
      <motion.div
        initial={withAnimation ? "hidden" : "visible"}
        whileInView="visible"
        viewport={{ once: true }}
        variants={titleVariants}
      >
        <Typography
          component="h2"
          variant="h3"
          color="text.primary"
          gutterBottom
          sx={{
            fontWeight: 700,
            mb: 2,
            ...(withGradient && {
              background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textFillColor: 'transparent',
            }),
            position: 'relative',
            display: 'inline-block',
          }}
        >
          {title}
        </Typography>
      </motion.div>

      {withDecoration && (
        <motion.div
          initial={withAnimation ? "hidden" : "visible"}
          whileInView="visible"
          viewport={{ once: true }}
          variants={decorationVariants}
          style={{
            position: 'absolute',
            height: '4px',
            width: '60px',
            background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
            borderRadius: '2px',
            left: align === 'center' ? '50%' : align === 'left' ? '0' : 'auto',
            right: align === 'right' ? '0' : 'auto',
            bottom: subtitle ? '-10px' : '-5px',
            transform: align === 'center' ? 'translateX(-50%)' : 'none',
            transformOrigin: align === 'center' ? 'center' : align === 'left' ? 'left' : 'right',
          }}
        />
      )}

      {subtitle && (
        <motion.div
          initial={withAnimation ? "hidden" : "visible"}
          whileInView="visible"
          viewport={{ once: true }}
          variants={subtitleVariants}
        >
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{
              maxWidth: align === 'center' ? '800px' : 'none',
              mx: align === 'center' ? 'auto' : 0,
              mt: withDecoration ? 3 : 1,
              opacity: 0.8,
            }}
          >
            {subtitle}
          </Typography>
        </motion.div>
      )}
    </Box>
  );
};

export default AnimatedSectionTitle;