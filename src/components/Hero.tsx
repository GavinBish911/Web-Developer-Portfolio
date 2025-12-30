import React from 'react';
import { Box, Typography, Button, Container, Grid, useTheme, Stack, Divider } from '@mui/material';
import { motion } from 'framer-motion';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import CodeIcon from '@mui/icons-material/Code';
import WebIcon from '@mui/icons-material/Web';
import DevicesIcon from '@mui/icons-material/Devices';

const Hero: React.FC = () => {
  const theme = useTheme();

  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 },
    },
  };

  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      repeatType: 'reverse',
      ease: 'easeInOut',
    },
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
      {/* Animated background elements */}
      <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 0, overflow: 'hidden' }}>
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [Math.random() * 100, Math.random() * -100],
              x: [Math.random() * 100, Math.random() * -100],
              opacity: [0.1, 0.2, 0.1],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
            }}
            style={{
              position: 'absolute',
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${50 + Math.random() * 100}px`,
              height: `${50 + Math.random() * 100}px`,
              borderRadius: '50%',
              background: theme.palette.primary.light,
              opacity: 0.1,
              filter: 'blur(40px)',
            }}
          />
        ))}
      </Box>

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={7}>
              <motion.div variants={itemVariants}>
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
                  }}
                >
                  React Developer <br />
                  <Box component="span" sx={{ color: theme.palette.secondary.light }}>& UI Specialist</Box>
                </Typography>
              </motion.div>

              <motion.div variants={itemVariants}>
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
                  }}
                >
                  Building modern, responsive web applications with React and TypeScript.
                  Passionate about creating intuitive user experiences and clean, maintainable code.
                </Typography>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mt: 4 }}>
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
                    }}
                  >
                    Learn More
                  </Button>
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
                    }}
                  >
                    View Projects
                  </Button>
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
              >
                <motion.div
                  animate={floatingAnimation}
                  style={{ textAlign: 'center' }}
                >
                  {/* React-themed illustration */}
                  <Box
                    sx={{
                      width: '100%',
                      height: { xs: '300px', md: '400px' },
                      position: 'relative',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {/* Main circle */}
                    <Box
                      sx={{
                        width: { xs: '220px', md: '280px' },
                        height: { xs: '220px', md: '280px' },
                        borderRadius: '50%',
                        background: 'rgba(255, 255, 255, 0.05)',
                        backdropFilter: 'blur(10px)',
                        border: '2px solid rgba(255, 255, 255, 0.1)',
                        boxShadow: '0 25px 45px rgba(0, 0, 0, 0.2)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        position: 'relative',
                        zIndex: 1,
                      }}
                    >
                      {/* React logo */}
                      <Box
                        component="img"
                        src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                        alt="React Logo"
                        sx={{
                          width: { xs: '120px', md: '150px' },
                          height: { xs: '120px', md: '150px' },
                          animation: 'spin 20s linear infinite',
                          '@keyframes spin': {
                            '0%': {
                              transform: 'rotate(0deg)',
                            },
                            '100%': {
                              transform: 'rotate(360deg)',
                            },
                          },
                        }}
                      />
                    </Box>

                    {/* Orbiting elements */}
                    {[...Array(3)].map((_, i) => (
                      <Box
                        key={i}
                        sx={{
                          position: 'absolute',
                          width: { xs: 40 + i * 15, md: 50 + i * 20 },
                          height: { xs: 40 + i * 15, md: 50 + i * 20 },
                          borderRadius: '50%',
                          background: i === 0 
                            ? theme.palette.secondary.light 
                            : i === 1 
                              ? theme.palette.primary.light 
                              : 'white',
                          boxShadow: `0 0 20px ${i === 0 
                            ? theme.palette.secondary.light 
                            : i === 1 
                              ? theme.palette.primary.light 
                              : 'white'}`,
                          animation: `orbit${i + 1} ${8 + i * 4}s linear infinite`,
                          '@keyframes orbit1': {
                            '0%': { transform: 'rotate(0deg) translateX(120px) rotate(0deg)' },
                            '100%': { transform: 'rotate(360deg) translateX(120px) rotate(-360deg)' },
                          },
                          '@keyframes orbit2': {
                            '0%': { transform: 'rotate(120deg) translateX(180px) rotate(-120deg)' },
                            '100%': { transform: 'rotate(480deg) translateX(180px) rotate(-480deg)' },
                          },
                          '@keyframes orbit3': {
                            '0%': { transform: 'rotate(240deg) translateX(220px) rotate(-240deg)' },
                            '100%': { transform: 'rotate(600deg) translateX(220px) rotate(-600deg)' },
                          },
                        }}
                      />
                    ))}
                  </Box>
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
          }}
        >
          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: 'loop',
            }}
          >
            <Button
              onClick={scrollToAbout}
              sx={{
                minWidth: 'auto',
                p: 1.5,
                color: 'white',
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(5px)',
                borderRadius: '50%',
                '&:hover': {
                  background: 'rgba(255, 255, 255, 0.2)',
                },
              }}
            >
              <ArrowDownwardIcon fontSize="large" />
            </Button>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
