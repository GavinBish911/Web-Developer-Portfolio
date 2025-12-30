import React from 'react';
import { Box, Container, Typography, Grid, Paper, Avatar, Divider, useTheme, Button, List, ListItem, ListItemIcon, ListItemText, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import PersonIcon from '@mui/icons-material/Person';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import InfoIcon from '@mui/icons-material/Info';
import CodeIcon from '@mui/icons-material/Code';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import EventNoteIcon from '@mui/icons-material/EventNote';
import AnimatedPopup from './shared/AnimatedPopup';

const About: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      id="about"
      component="section"
      sx={{
        py: 10,
        bgcolor: 'background.default',
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            component="h2"
            variant="h3"
            align="center"
            color="text.primary"
            gutterBottom
            sx={{ fontWeight: 700, mb: 6 }}
          >
            About Me
          </Typography>

          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    mb: { xs: 4, md: 0 },
                  }}
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    drag
                    dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                    dragElastic={0.1}
                  >
                    <Avatar
                      sx={{
                        width: 200,
                        height: 200,
                        mb: 3,
                        bgcolor: theme.palette.primary.main,
                        boxShadow: theme.palette.mode === 'dark' 
                          ? '0 8px 30px rgba(98, 0, 234, 0.3), 0 0 0 2px rgba(98, 0, 234, 0.2)' 
                          : '0 8px 24px rgba(0, 0, 0, 0.12)',
                        position: 'relative',
                        '&::before': {
                          content: '""',
                          position: 'absolute',
                          top: -5,
                          left: -5,
                          right: -5,
                          bottom: -5,
                          borderRadius: '50%',
                          background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                          zIndex: -1,
                          opacity: 0.7,
                          animation: 'pulse 2s infinite',
                        },
                        '@keyframes pulse': {
                          '0%': { transform: 'scale(1)', opacity: 0.7 },
                          '50%': { transform: 'scale(1.05)', opacity: 0.4 },
                          '100%': { transform: 'scale(1)', opacity: 0.7 },
                        },
                      }}
                    >
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        style={{ position: 'absolute', width: '100%', height: '100%', opacity: 0.1 }}
                      >
                        <Box sx={{ 
                          width: '100%', 
                          height: '100%', 
                          background: `conic-gradient(from 0deg, ${theme.palette.primary.light}, ${theme.palette.secondary.light}, ${theme.palette.primary.light})`,
                          borderRadius: '50%',
                        }} />
                      </motion.div>
                      <PersonIcon sx={{ fontSize: 100, position: 'relative', zIndex: 1 }} />
                    </Avatar>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                  >
                    <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                      Your Name
                    </Typography>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.5 }}
                  >
                    <Typography 
                      variant="subtitle1" 
                      color="text.secondary" 
                      align="center"
                      sx={{
                        background: theme.palette.mode === 'dark' 
                          ? `linear-gradient(90deg, ${theme.palette.primary.light}, ${theme.palette.secondary.light})` 
                          : 'inherit',
                        WebkitBackgroundClip: theme.palette.mode === 'dark' ? 'text' : 'unset',
                        WebkitTextFillColor: theme.palette.mode === 'dark' ? 'transparent' : 'inherit',
                      }}
                    >
                      Web Developer & UI/UX Enthusiast
                    </Typography>
                  </motion.div>
                </Box>
              </motion.div>
            </Grid>

            <Grid item xs={12} md={8}>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <motion.div
                  whileHover={{ 
                    boxShadow: theme.palette.mode === 'dark' 
                      ? '0 15px 40px rgba(98, 0, 234, 0.3)' 
                      : '0 15px 40px rgba(0, 0, 0, 0.15)' 
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <Paper
                    elevation={0}
                    sx={{
                      p: 4,
                      borderRadius: 4,
                      bgcolor: 'background.paper',
                      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
                      position: 'relative',
                      overflow: 'hidden',
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '4px',
                        background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                      },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    {/* Animated background elements */}
                    {theme.palette.mode === 'dark' && (
                      <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 0, overflow: 'hidden', opacity: 0.03 }}>
                        {[...Array(3)].map((_, i) => (
                          <motion.div
                            key={i}
                            animate={{
                              y: [Math.random() * 50, Math.random() * -50],
                              x: [Math.random() * 50, Math.random() * -50],
                              opacity: [0.5, 1, 0.5],
                              scale: [1, 1.2, 1],
                            }}
                            transition={{
                              duration: 15 + Math.random() * 10,
                              repeat: Infinity,
                              repeatType: "reverse",
                              ease: "easeInOut",
                            }}
                            style={{
                              position: 'absolute',
                              top: `${Math.random() * 100}%`,
                              left: `${Math.random() * 100}%`,
                              width: `${100 + Math.random() * 150}px`,
                              height: `${100 + Math.random() * 150}px`,
                              borderRadius: '50%',
                              background: i % 2 === 0 ? theme.palette.primary.main : theme.palette.secondary.main,
                              filter: 'blur(50px)',
                            }}
                          />
                        ))}
                      </Box>
                    )}

                    <Box sx={{ position: 'relative', zIndex: 1 }}>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                      >
                        <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
                          I am a passionate web developer with expertise in building modern, responsive web applications. 
                          With a strong foundation in React.js and TypeScript, I create intuitive user interfaces that deliver 
                          exceptional user experiences.
                        </Typography>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                      >
                        <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
                          My approach combines technical excellence with creative problem-solving. I'm dedicated to writing 
                          clean, maintainable code and staying current with the latest web development trends and best practices.
                        </Typography>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                      >
                        <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                          When I'm not coding, I enjoy [your hobbies/interests]. I believe that diverse experiences contribute 
                          to a more creative approach to problem-solving in technology.
                        </Typography>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, scaleX: 0 }}
                        whileInView={{ opacity: 1, scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        style={{ transformOrigin: 'left' }}
                      >
                        <Divider sx={{ 
                          my: 4,
                          borderColor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)',
                          '&::before, &::after': {
                            borderColor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)',
                          }
                        }} />
                      </motion.div>

                      <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                          <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.7 }}
                          >
                            <Box 
                              sx={{ 
                                display: 'flex', 
                                alignItems: 'center', 
                                mb: 2,
                                p: 1,
                                borderRadius: 2,
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                  bgcolor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.03)',
                                  transform: 'translateY(-3px)',
                                }
                              }}
                            >
                              <motion.div
                                whileHover={{ rotate: 360 }}
                                transition={{ duration: 0.5 }}
                              >
                                <SchoolIcon color="primary" sx={{ 
                                  mr: 2, 
                                  fontSize: 30,
                                  filter: theme.palette.mode === 'dark' ? 'drop-shadow(0 0 8px rgba(98, 0, 234, 0.5))' : 'none',
                                }} />
                              </motion.div>
                              <Typography variant="h6">Education</Typography>
                            </Box>
                            <AnimatedPopup
                              trigger={
                                <Box sx={{ 
                                  ml: 5, 
                                  p: 1.5, 
                                  borderLeft: '2px solid', 
                                  borderColor: 'primary.main',
                                  transition: 'all 0.3s ease',
                                  '&:hover': {
                                    borderColor: 'secondary.main',
                                    bgcolor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.02)',
                                    borderRadius: '0 8px 8px 0',
                                    transform: 'translateX(5px)',
                                  }
                                }}>
                                  <Typography variant="body2" sx={{ mb: 1, fontWeight: 500, display: 'flex', alignItems: 'center' }}>
                                    Bachelor's in Computer Science
                                    <InfoIcon sx={{ ml: 1, fontSize: 16, color: 'primary.main', opacity: 0.7 }} />
                                  </Typography>
                                  <Typography variant="body2" color="text.secondary">
                                    University Name, 2018-2022
                                  </Typography>
                                </Box>
                              }
                              title="Bachelor's in Computer Science"
                              width={500}
                            >
                              <Box>
                                <Box sx={{ mb: 3, display: 'flex', alignItems: 'center' }}>
                                  <SchoolIcon sx={{ mr: 1, color: 'primary.main' }} />
                                  <Typography variant="h6" sx={{ fontWeight: 600 }}>University Name</Typography>
                                </Box>

                                <Box sx={{ mb: 3 }}>
                                  <Typography variant="body2" color="text.secondary" sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                                    <EventNoteIcon sx={{ mr: 1, fontSize: 18 }} /> 2018 - 2022
                                  </Typography>
                                  <Typography variant="body2" color="text.secondary" sx={{ display: 'flex', alignItems: 'center' }}>
                                    <CheckCircleIcon sx={{ mr: 1, fontSize: 18, color: 'success.main' }} /> Graduated with Honors
                                  </Typography>
                                </Box>

                                <Typography variant="body1" paragraph>
                                  Completed a comprehensive computer science program with a focus on web development 
                                  and software engineering. Developed strong problem-solving skills and a deep understanding 
                                  of computer science fundamentals.
                                </Typography>

                                <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 600, color: 'primary.main' }}>
                                  Key Courses:
                                </Typography>

                                <Grid container spacing={1} sx={{ mb: 3 }}>
                                  {['Data Structures', 'Algorithms', 'Web Development', 'Database Systems', 'UI/UX Design', 'Software Engineering'].map((course) => (
                                    <Grid item key={course}>
                                      <Chip 
                                        label={course} 
                                        size="small" 
                                        sx={{ 
                                          bgcolor: theme.palette.mode === 'dark' ? 'rgba(98, 0, 234, 0.2)' : 'rgba(98, 0, 234, 0.1)',
                                          color: 'primary.main',
                                          fontWeight: 500,
                                        }} 
                                      />
                                    </Grid>
                                  ))}
                                </Grid>

                                <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 600, color: 'primary.main' }}>
                                  Final Project:
                                </Typography>

                                <Typography variant="body2" paragraph>
                                  Developed a full-stack web application for event management using React, Node.js, and MongoDB.
                                  Implemented features like user authentication, event creation, and real-time updates.
                                </Typography>

                                <Box sx={{ mt: 3, display: 'flex', justifyContent: 'center' }}>
                                  <Button 
                                    variant="outlined" 
                                    size="small" 
                                    startIcon={<CodeIcon />}
                                    sx={{ 
                                      borderRadius: 4,
                                      px: 2,
                                    }}
                                  >
                                    View Project
                                  </Button>
                                </Box>
                              </Box>
                            </AnimatedPopup>
                          </motion.div>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                          >
                            <Box 
                              sx={{ 
                                display: 'flex', 
                                alignItems: 'center', 
                                mb: 2,
                                p: 1,
                                borderRadius: 2,
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                  bgcolor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.03)',
                                  transform: 'translateY(-3px)',
                                }
                              }}
                            >
                              <motion.div
                                whileHover={{ rotate: 360 }}
                                transition={{ duration: 0.5 }}
                              >
                                <WorkIcon color="primary" sx={{ 
                                  mr: 2, 
                                  fontSize: 30,
                                  filter: theme.palette.mode === 'dark' ? 'drop-shadow(0 0 8px rgba(98, 0, 234, 0.5))' : 'none',
                                }} />
                              </motion.div>
                              <Typography variant="h6">Experience</Typography>
                            </Box>
                            <AnimatedPopup
                              trigger={
                                <Box sx={{ 
                                  ml: 5, 
                                  p: 1.5, 
                                  borderLeft: '2px solid', 
                                  borderColor: 'primary.main',
                                  transition: 'all 0.3s ease',
                                  '&:hover': {
                                    borderColor: 'secondary.main',
                                    bgcolor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.02)',
                                    borderRadius: '0 8px 8px 0',
                                    transform: 'translateX(5px)',
                                  }
                                }}>
                                  <Typography variant="body2" sx={{ mb: 1, fontWeight: 500, display: 'flex', alignItems: 'center' }}>
                                    Web Developer
                                    <InfoIcon sx={{ ml: 1, fontSize: 16, color: 'primary.main', opacity: 0.7 }} />
                                  </Typography>
                                  <Typography variant="body2" color="text.secondary">
                                    Company Name, 2022-Present
                                  </Typography>
                                </Box>
                              }
                              title="Web Developer Experience"
                              width={500}
                            >
                              <Box>
                                <Box sx={{ mb: 3, display: 'flex', alignItems: 'center' }}>
                                  <WorkIcon sx={{ mr: 1, color: 'primary.main' }} />
                                  <Typography variant="h6" sx={{ fontWeight: 600 }}>Company Name</Typography>
                                </Box>

                                <Box sx={{ mb: 3 }}>
                                  <Typography variant="body2" color="text.secondary" sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                                    <EventNoteIcon sx={{ mr: 1, fontSize: 18 }} /> 2022 - Present
                                  </Typography>
                                  <Typography variant="body2" color="text.secondary" sx={{ display: 'flex', alignItems: 'center' }}>
                                    <CheckCircleIcon sx={{ mr: 1, fontSize: 18, color: 'success.main' }} /> Full-time Position
                                  </Typography>
                                </Box>

                                <Typography variant="body1" paragraph>
                                  Working as a front-end developer specializing in React applications. Responsible for 
                                  building responsive, accessible, and performant user interfaces for various web applications.
                                </Typography>

                                <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 600, color: 'primary.main' }}>
                                  Key Responsibilities:
                                </Typography>

                                <List dense sx={{ mb: 2 }}>
                                  {[
                                    'Developing and maintaining React applications',
                                    'Implementing responsive designs and ensuring cross-browser compatibility',
                                    'Collaborating with designers and back-end developers',
                                    'Optimizing applications for maximum performance',
                                    'Writing clean, maintainable code following best practices'
                                  ].map((item, index) => (
                                    <ListItem key={index} sx={{ py: 0.5 }}>
                                      <ListItemIcon sx={{ minWidth: 30 }}>
                                        <CheckCircleIcon fontSize="small" color="primary" />
                                      </ListItemIcon>
                                      <ListItemText primary={item} primaryTypographyProps={{ variant: 'body2' }} />
                                    </ListItem>
                                  ))}
                                </List>

                                <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 600, color: 'primary.main' }}>
                                  Technologies Used:
                                </Typography>

                                <Grid container spacing={1} sx={{ mb: 3 }}>
                                  {['React', 'TypeScript', 'Material-UI', 'Redux', 'GraphQL', 'Jest', 'Webpack', 'Git'].map((tech) => (
                                    <Grid item key={tech}>
                                      <Chip 
                                        label={tech} 
                                        size="small" 
                                        sx={{ 
                                          bgcolor: theme.palette.mode === 'dark' ? 'rgba(0, 229, 255, 0.2)' : 'rgba(0, 229, 255, 0.1)',
                                          color: 'secondary.dark',
                                          fontWeight: 500,
                                        }} 
                                      />
                                    </Grid>
                                  ))}
                                </Grid>

                                <motion.div
                                  whileHover={{ scale: 1.02 }}
                                  whileTap={{ scale: 0.98 }}
                                >
                                  <Paper 
                                    elevation={0} 
                                    sx={{ 
                                      p: 2, 
                                      bgcolor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.02)',
                                      borderRadius: 2,
                                      border: '1px solid',
                                      borderColor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)',
                                    }}
                                  >
                                    <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
                                      Notable Project:
                                    </Typography>
                                    <Typography variant="body2">
                                      Led the development of a customer dashboard that improved user engagement by 40% 
                                      and reduced support tickets by 25%. Implemented real-time data visualization and 
                                      interactive features.
                                    </Typography>
                                  </Paper>
                                </motion.div>
                              </Box>
                            </AnimatedPopup>
                          </motion.div>
                        </Grid>
                      </Grid>
                    </Box>
                  </Paper>
                </motion.div>
              </motion.div>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default About;
