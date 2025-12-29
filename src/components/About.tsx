import React from 'react';
import { Box, Container, Typography, Grid, Paper, Avatar, Divider, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import PersonIcon from '@mui/icons-material/Person';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';

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
                  <Avatar
                    sx={{
                      width: 200,
                      height: 200,
                      mb: 3,
                      bgcolor: theme.palette.primary.main,
                      boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
                    }}
                  >
                    <PersonIcon sx={{ fontSize: 100 }} />
                  </Avatar>
                  <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                    Your Name
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary" align="center">
                    Web Developer & UI/UX Enthusiast
                  </Typography>
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
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    borderRadius: 4,
                    bgcolor: 'background.paper',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
                  }}
                >
                  <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
                    I am a passionate web developer with expertise in building modern, responsive web applications. 
                    With a strong foundation in React.js and TypeScript, I create intuitive user interfaces that deliver 
                    exceptional user experiences.
                  </Typography>
                  <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
                    My approach combines technical excellence with creative problem-solving. I'm dedicated to writing 
                    clean, maintainable code and staying current with the latest web development trends and best practices.
                  </Typography>
                  <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                    When I'm not coding, I enjoy [your hobbies/interests]. I believe that diverse experiences contribute 
                    to a more creative approach to problem-solving in technology.
                  </Typography>

                  <Divider sx={{ my: 4 }} />

                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <SchoolIcon color="primary" sx={{ mr: 2 }} />
                        <Typography variant="h6">Education</Typography>
                      </Box>
                      <Typography variant="body2" sx={{ ml: 5, mb: 1 }}>
                        Bachelor's in Computer Science
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ ml: 5 }}>
                        University Name, 2018-2022
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <WorkIcon color="primary" sx={{ mr: 2 }} />
                        <Typography variant="h6">Experience</Typography>
                      </Box>
                      <Typography variant="body2" sx={{ ml: 5, mb: 1 }}>
                        Web Developer
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ ml: 5 }}>
                        Company Name, 2022-Present
                      </Typography>
                    </Grid>
                  </Grid>
                </Paper>
              </motion.div>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default About;
