import React, { useEffect, useState } from 'react';
import { Box, Typography, Button, Container, Grid, useTheme, Stack, Divider } from '@mui/material';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import CodeIcon from '@mui/icons-material/Code';
import WebIcon from '@mui/icons-material/Web';
import DevicesIcon from '@mui/icons-material/Devices';
import MouseIcon from '@mui/icons-material/Mouse';

const Hero: React.FC = () => {
  const theme = useTheme();
  const controls = useAnimation();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  // Track mouse position for parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Start animation sequence on component mount
    controls.start('visible');

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [controls]);

  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Enhanced animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
        duration: 0.8,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0, scale: 0.9, rotateX: 45 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      rotateX: 0,
      transition: { 
        type: 'spring', 
        stiffness: 100,
        damping: 10,
        mass: 0.5,
      },
    },
    hover: {
      scale: 1.05,
      y: -5,
      transition: { 
        type: 'spring', 
        stiffness: 300,
        damping: 10,
      },
    }
  };

  const buttonVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { 
        type: 'spring',
        stiffness: 200,
        damping: 15,
        delay: 1.2,
      }
    },
    hover: { 
      scale: 1.1,
      boxShadow: '0px 10px 25px rgba(0, 0, 0, 0.2)',
      transition: { 
        type: 'spring',
        stiffness: 400,
        damping: 10,
      }
    },
    tap: { 
      scale: 0.95,
      boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.1)',
    }
  };

  const floatingAnimation = {
    y: [0, -15, 0],
    rotateZ: [0, 5, 0, -5, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      repeatType: 'reverse' as const,
      ease: 'easeInOut',
    },
  };

  // Parallax effect based on mouse position
  const calculateParallaxValue = (strength: number = 0.02) => {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const offsetX = (mousePosition.x - centerX) * strength;
    const offsetY = (mousePosition.y - centerY) * strength;
    return { x: offsetX, y: offsetY };
  };

  const backgroundGradient = `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 50%, ${theme.palette.primary.light} 100%)`;

  return (
    <Box
      id="home"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: backgroundGradient,
        color: 'white',
        position: 'relative',
        overflow: 'hidden',
        pt: { xs: 10, md: 8 },
        pb: { xs: 8, md: 6 },
      }}
    >
      {/* Enhanced animated background with particles */}
      <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 0, overflow: 'hidden' }}>
        {/* Gradient overlay */}
        <Box 
          sx={{ 
            position: 'absolute', 
            top: 0, 
            left: 0, 
            right: 0, 
            bottom: 0, 
            background: 'radial-gradient(circle at center, rgba(58, 134, 255, 0.2) 0%, rgba(10, 25, 41, 0.4) 70%)',
            zIndex: 1,
          }} 
        />

        {/* Animated particles */}
        {[...Array(30)].map((_, i) => {
          const size = 10 + Math.random() * 20;
          const initialX = Math.random() * 100;
          const initialY = Math.random() * 100;
          const speed = 20 + Math.random() * 60;
          const delay = Math.random() * 2;
          const opacity = 0.1 + Math.random() * 0.4;

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
                opacity: [0, opacity, opacity, 0],
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
                  ? theme.palette.primary.main 
                  : i % 3 === 1 
                    ? theme.palette.secondary.main 
                    : theme.palette.tertiary.main,
                filter: 'blur(8px)',
                boxShadow: i % 5 === 0 ? `0 0 20px ${theme.palette.primary.main}` : 'none',
                zIndex: 0,
              }}
            />
          );
        })}

        {/* Floating code symbols */}
        {['{ }', '< >', '( )', '// //', '[]', '""', "''", ';;', '==', '=>'].map((symbol, i) => {
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
                opacity: [0, 0.4, 0],
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

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={7}>
              <motion.div 
                variants={itemVariants}
                whileHover="hover"
                style={{ 
                  perspective: '1000px',
                  transformStyle: 'preserve-3d',
                }}
              >
                <motion.div
                  animate={calculateParallaxValue(0.01)}
                  transition={{ type: 'spring', stiffness: 50 }}
                >
                  <Typography
                    component="h1"
                    variant="h2"
                    color="inherit"
                    gutterBottom
                    sx={{
                      fontWeight: 800,
                      fontSize: { xs: '2.75rem', md: '3.75rem', lg: '4.5rem' },
                      background: `linear-gradient(90deg, #ffffff 0%, ${theme.palette.secondary.light} 100%)`,
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      textShadow: '0 5px 25px rgba(0,0,0,0.1)',
                      lineHeight: 1.1,
                      mb: 2,
                      position: 'relative',
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: '-10px',
                        left: '-20px',
                        width: '40px',
                        height: '40px',
                        border: `2px solid ${theme.palette.secondary.main}`,
                        borderRight: 'none',
                        borderBottom: 'none',
                        opacity: 0.6,
                      },
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        bottom: '10px',
                        right: '0',
                        width: '60px',
                        height: '60px',
                        border: `2px solid ${theme.palette.primary.main}`,
                        borderLeft: 'none',
                        borderTop: 'none',
                        opacity: 0.6,
                      }
                    }}
                  >
                    <motion.span
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5, duration: 0.8 }}
                      style={{ display: 'inline-block' }}
                    >
                      React Developer
                    </motion.span> <br />
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.2, duration: 0.8 }}
                      style={{ display: 'inline-block' }}
                    >
                      <Box component="span" sx={{ 
                        color: theme.palette.secondary.light,
                        position: 'relative',
                        '&::after': {
                          content: '""',
                          position: 'absolute',
                          bottom: '-5px',
                          left: '0',
                          width: '100%',
                          height: '2px',
                          background: `linear-gradient(90deg, transparent, ${theme.palette.secondary.light}, transparent)`,
                        }
                      }}>
                        & UI Specialist
                      </Box>
                    </motion.div>
                  </Typography>
                </motion.div>
              </motion.div>

              <motion.div 
                variants={itemVariants}
                whileHover="hover"
              >
                <motion.div
                  animate={calculateParallaxValue(0.02)}
                  transition={{ type: 'spring', stiffness: 50 }}
                >
                  <Typography
                    variant="h5"
                    color="inherit"
                    paragraph
                    sx={{
                      mb: 4,
                      opacity: 0.9,
                      maxWidth: '600px',
                      lineHeight: 1.6,
                      fontSize: { xs: '1.1rem', md: '1.25rem' },
                      position: 'relative',
                      pl: 2,
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: '0',
                        left: '0',
                        width: '3px',
                        height: '100%',
                        background: `linear-gradient(to bottom, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                        borderRadius: '3px',
                      }
                    }}
                  >
                    <AnimatePresence>
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ staggerChildren: 0.1, delayChildren: 1.5 }}
                      >
                        Building modern, responsive web applications with React and TypeScript.
                        Passionate about creating intuitive user experiences and clean, maintainable code.
                      </motion.span>
                    </AnimatePresence>
                  </Typography>
                </motion.div>
              </motion.div>

              <motion.div 
                variants={itemVariants}
                style={{ 
                  perspective: '1000px',
                }}
              >
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3} sx={{ mt: 4 }}>
                  <motion.div
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                    style={{ 
                      position: 'relative',
                      overflow: 'hidden',
                      borderRadius: '8px',
                    }}
                  >
                    <motion.div
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                        opacity: 0,
                        zIndex: 0,
                      }}
                      animate={{ 
                        opacity: [0, 0.5, 0],
                        x: ['-100%', '100%'],
                      }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        repeatType: 'loop',
                      }}
                    />
                    <Button
                      variant="contained"
                      size="large"
                      onClick={scrollToAbout}
                      sx={{
                        bgcolor: 'white',
                        color: 'primary.main',
                        '&:hover': {
                          bgcolor: theme.palette.secondary.light,
                          color: 'primary.dark',
                        },
                        px: 4,
                        py: 1.5,
                        position: 'relative',
                        zIndex: 1,
                        fontWeight: 'bold',
                        letterSpacing: '0.5px',
                        borderRadius: '8px',
                        boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
                        overflow: 'hidden',
                      }}
                    >
                      <motion.span
                        animate={{ 
                          y: isHovering ? [-1, 1, -1] : 0,
                        }}
                        transition={{ 
                          duration: 1,
                          repeat: Infinity,
                          repeatType: 'reverse',
                        }}
                        onMouseEnter={() => setIsHovering(true)}
                        onMouseLeave={() => setIsHovering(false)}
                      >
                        Learn More
                      </motion.span>
                      <motion.span
                        style={{
                          display: 'inline-block',
                          marginLeft: '8px',
                          transformOrigin: 'center',
                        }}
                        animate={{ 
                          rotate: [0, 0, 180, 180, 0],
                          scale: [1, 1, 1.2, 1.2, 1],
                          opacity: [1, 1, 0, 0, 1],
                        }}
                        transition={{ 
                          duration: 5,
                          repeat: Infinity,
                          repeatType: 'loop',
                          times: [0, 0.4, 0.5, 0.9, 1],
                        }}
                      >
                        <ArrowDownwardIcon fontSize="small" />
                      </motion.span>
                    </Button>
                  </motion.div>

                  <motion.div
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                    style={{ 
                      position: 'relative',
                      borderRadius: '8px',
                    }}
                  >
                    <Button
                      variant="outlined"
                      size="large"
                      href="/#projects"
                      sx={{
                        borderColor: 'white',
                        borderWidth: 2,
                        color: 'white',
                        '&:hover': {
                          borderColor: theme.palette.secondary.light,
                          color: theme.palette.secondary.light,
                          borderWidth: 2,
                          bgcolor: 'rgba(0, 229, 255, 0.1)',
                        },
                        px: 4,
                        py: 1.5,
                        position: 'relative',
                        zIndex: 1,
                        fontWeight: 'bold',
                        letterSpacing: '0.5px',
                        borderRadius: '8px',
                        overflow: 'hidden',
                      }}
                    >
                      <motion.div
                        style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          background: `linear-gradient(45deg, ${theme.palette.primary.light}20, ${theme.palette.secondary.light}20)`,
                          zIndex: -1,
                          borderRadius: '6px',
                        }}
                        animate={{ 
                          scale: [1, 1.05, 1],
                          opacity: [0.2, 0.3, 0.2],
                        }}
                        transition={{ 
                          duration: 3,
                          repeat: Infinity,
                          repeatType: 'reverse',
                        }}
                      />
                      View Projects
                    </Button>
                  </motion.div>
                </Stack>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Stack 
                  direction="row" 
                  spacing={3} 
                  divider={<Divider orientation="vertical" flexItem sx={{ bgcolor: 'rgba(255,255,255,0.3)' }} />}
                  sx={{ mt: 6, display: { xs: 'none', md: 'flex' } }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <CodeIcon sx={{ mr: 1, color: theme.palette.secondary.light }} />
                    <Typography variant="body2" sx={{ opacity: 0.9 }}>React Expert</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <WebIcon sx={{ mr: 1, color: theme.palette.secondary.light }} />
                    <Typography variant="body2" sx={{ opacity: 0.9 }}>Modern UI</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <DevicesIcon sx={{ mr: 1, color: theme.palette.secondary.light }} />
                    <Typography variant="body2" sx={{ opacity: 0.9 }}>Responsive Design</Typography>
                  </Box>
                </Stack>
              </motion.div>
            </Grid>

            <Grid item xs={12} md={5}>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                style={{ 
                  perspective: '1200px',
                }}
              >
                <motion.div
                  animate={{
                    ...floatingAnimation,
                    ...calculateParallaxValue(0.04),
                  }}
                  style={{ 
                    textAlign: 'center',
                    transformStyle: 'preserve-3d',
                  }}
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.3 }
                  }}
                >
                  {/* Enhanced 3D React-themed illustration */}
                  <Box
                    sx={{
                      width: '100%',
                      height: { xs: '300px', md: '400px' },
                      position: 'relative',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transformStyle: 'preserve-3d',
                    }}
                  >
                    {/* Animated glow effect */}
                    <motion.div
                      animate={{
                        boxShadow: [
                          `0 0 40px ${theme.palette.primary.main}50`,
                          `0 0 80px ${theme.palette.primary.main}80`,
                          `0 0 40px ${theme.palette.primary.main}50`,
                        ],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        repeatType: 'reverse',
                      }}
                      style={{
                        position: 'absolute',
                        width: '280px',
                        height: '280px',
                        borderRadius: '50%',
                        zIndex: 0,
                      }}
                    />

                    {/* 3D rotating container */}
                    <motion.div
                      animate={{
                        rotateY: [0, 360],
                        rotateX: [5, -5, 5],
                      }}
                      transition={{
                        rotateY: {
                          duration: 20,
                          repeat: Infinity,
                          ease: 'linear',
                        },
                        rotateX: {
                          duration: 10,
                          repeat: Infinity,
                          repeatType: 'reverse',
                          ease: 'easeInOut',
                        },
                      }}
                      style={{
                        transformStyle: 'preserve-3d',
                        position: 'relative',
                      }}
                    >
                      {/* Main sphere */}
                      <Box
                        sx={{
                          width: { xs: '220px', md: '280px' },
                          height: { xs: '220px', md: '280px' },
                          borderRadius: '50%',
                          background: 'rgba(255, 255, 255, 0.03)',
                          backdropFilter: 'blur(10px)',
                          border: '2px solid rgba(255, 255, 255, 0.1)',
                          boxShadow: `
                            0 25px 45px rgba(0, 0, 0, 0.2),
                            inset 0 0 30px rgba(255, 255, 255, 0.1)
                          `,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          position: 'relative',
                          zIndex: 1,
                          transformStyle: 'preserve-3d',
                          transform: 'translateZ(0px)',
                        }}
                      >
                        {/* Animated React logo with 3D effect */}
                        <motion.div
                          animate={{
                            rotateZ: [0, 360],
                            scale: [1, 1.05, 1],
                          }}
                          transition={{
                            rotateZ: {
                              duration: 20,
                              repeat: Infinity,
                              ease: 'linear',
                            },
                            scale: {
                              duration: 8,
                              repeat: Infinity,
                              repeatType: 'reverse',
                              ease: 'easeInOut',
                            },
                          }}
                          style={{
                            position: 'relative',
                            transformStyle: 'preserve-3d',
                          }}
                        >
                          <Box
                            component="img"
                            src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                            alt="React Logo"
                            sx={{
                              width: { xs: '120px', md: '150px' },
                              height: { xs: '120px', md: '150px' },
                              filter: 'drop-shadow(0 0 15px rgba(97, 218, 251, 0.8))',
                            }}
                          />

                          {/* 3D shadow effect */}
                          <Box
                            sx={{
                              position: 'absolute',
                              top: '50%',
                              left: '50%',
                              transform: 'translate(-50%, -50%) translateZ(-20px)',
                              width: { xs: '120px', md: '150px' },
                              height: { xs: '120px', md: '150px' },
                              borderRadius: '50%',
                              background: 'rgba(0, 0, 0, 0.2)',
                              filter: 'blur(15px)',
                              zIndex: -1,
                            }}
                          />
                        </motion.div>
                      </Box>
                    </motion.div>

                    {/* Enhanced orbiting elements with 3D paths */}
                    {[...Array(5)].map((_, i) => {
                      const orbitSize = 120 + i * 30;
                      const elementSize = 15 + i * 10;
                      const speed = 8 + i * 4;
                      const startRotation = i * 72; // Distribute evenly around the circle
                      const color = i % 3 === 0 
                        ? theme.palette.secondary.main 
                        : i % 3 === 1 
                          ? theme.palette.primary.main 
                          : theme.palette.tertiary.main;

                      return (
                        <motion.div
                          key={i}
                          initial={{
                            rotateZ: startRotation,
                            rotateX: i % 2 === 0 ? 30 : -30, // Alternate tilt for 3D effect
                          }}
                          animate={{
                            rotateZ: [startRotation, startRotation + 360],
                          }}
                          transition={{
                            duration: speed,
                            repeat: Infinity,
                            ease: 'linear',
                          }}
                          style={{
                            position: 'absolute',
                            width: `${orbitSize * 2}px`,
                            height: `${orbitSize * 2}px`,
                            borderRadius: '50%',
                            border: `1px solid rgba(255, 255, 255, ${0.1 - i * 0.02})`,
                            transformStyle: 'preserve-3d',
                          }}
                        >
                          {/* Orbiting element */}
                          <motion.div
                            animate={{
                              scale: [1, 1.2, 1],
                              boxShadow: [
                                `0 0 10px ${color}80`,
                                `0 0 20px ${color}`,
                                `0 0 10px ${color}80`,
                              ],
                            }}
                            transition={{
                              duration: 2 + i,
                              repeat: Infinity,
                              repeatType: 'reverse',
                            }}
                            style={{
                              position: 'absolute',
                              top: '0%',
                              left: '50%',
                              width: `${elementSize}px`,
                              height: `${elementSize}px`,
                              borderRadius: '50%',
                              background: color,
                              transform: 'translate(-50%, -50%)',
                            }}
                          />
                        </motion.div>
                      );
                    })}

                    {/* Code symbols floating in 3D space */}
                    {['<>', '{}', '()', '//', '[]'].map((symbol, i) => {
                      const distance = 100 + i * 30;
                      const angle = i * 72;
                      const x = Math.cos(angle * Math.PI / 180) * distance;
                      const y = Math.sin(angle * Math.PI / 180) * distance;
                      const z = -50 + Math.random() * 100;

                      return (
                        <motion.div
                          key={`floating-${i}`}
                          initial={{
                            x,
                            y,
                            z,
                            opacity: 0,
                          }}
                          animate={{
                            opacity: [0, 0.7, 0],
                            scale: [0.5, 1, 0.5],
                            x: [x, x + (Math.random() * 40 - 20)],
                            y: [y, y + (Math.random() * 40 - 20)],
                            z: [z, z + (Math.random() * 40 - 20)],
                          }}
                          transition={{
                            duration: 4 + i,
                            repeat: Infinity,
                            repeatType: 'reverse',
                            delay: i * 0.5,
                          }}
                          style={{
                            position: 'absolute',
                            color: i % 2 === 0 ? theme.palette.primary.light : theme.palette.secondary.light,
                            fontSize: `${20 + i * 2}px`,
                            fontFamily: 'monospace',
                            fontWeight: 'bold',
                            transformStyle: 'preserve-3d',
                            transform: `translateZ(${z}px)`,
                            textShadow: `0 0 10px ${i % 2 === 0 ? theme.palette.primary.main : theme.palette.secondary.main}`,
                          }}
                        >
                          {symbol}
                        </motion.div>
                      );
                    })}
                  </Box>

                  {/* Interactive prompt */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2, duration: 0.8 }}
                  >
                    <Typography
                      variant="caption"
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 1,
                        color: 'rgba(255, 255, 255, 0.7)',
                        mt: 2,
                      }}
                    >
                      <MouseIcon fontSize="small" />
                      Hover to interact
                    </Typography>
                  </motion.div>
                </motion.div>
              </motion.div>
            </Grid>
          </Grid>
        </motion.div>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            mt: { xs: 4, md: 8 },
            position: 'relative',
            zIndex: 2,
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              y: [0, 10, 0],
            }}
            transition={{
              opacity: { duration: 0.5, delay: 2 },
              scale: { 
                type: 'spring',
                stiffness: 200,
                damping: 10,
                delay: 2,
              },
              y: {
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop' as const,
                delay: 2.5,
              }
            }}
            whileHover={{ 
              scale: 1.2,
              transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.9 }}
          >
            {/* Animated rings */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={`ring-${i}`}
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  width: `${60 + i * 20}px`,
                  height: `${60 + i * 20}px`,
                  borderRadius: '50%',
                  border: `2px solid ${theme.palette.primary.main}`,
                  opacity: 0.2,
                  transform: 'translate(-50%, -50%)',
                }}
                animate={{
                  opacity: [0.1, 0.3, 0.1],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2 + i,
                  repeat: Infinity,
                  delay: i * 0.3,
                }}
              />
            ))}

            <Button
              onClick={scrollToAbout}
              sx={{
                minWidth: 'auto',
                p: 1.8,
                color: 'white',
                background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                backdropFilter: 'blur(5px)',
                borderRadius: '50%',
                boxShadow: `
                  0 10px 25px rgba(0, 0, 0, 0.2),
                  0 0 15px ${theme.palette.primary.main}80
                `,
                position: 'relative',
                overflow: 'hidden',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: '-100%',
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)',
                  animation: 'shimmer 2s infinite',
                },
                '@keyframes shimmer': {
                  '0%': { left: '-100%' },
                  '100%': { left: '100%' },
                },
              }}
            >
              <motion.div
                animate={{ 
                  rotateX: [0, 360],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: 'loop',
                  ease: 'easeInOut',
                }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <ArrowDownwardIcon fontSize="large" />
              </motion.div>
            </Button>

            {/* Text label */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3, duration: 0.5 }}
              style={{
                position: 'absolute',
                bottom: '-30px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '100px',
                textAlign: 'center',
              }}
            >
              <Typography
                variant="caption"
                sx={{
                  color: 'rgba(255, 255, 255, 0.7)',
                  fontSize: '0.75rem',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                }}
              >
                Scroll Down
              </Typography>
            </motion.div>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
