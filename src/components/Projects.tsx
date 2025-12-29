import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button,
  Chip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import CloseIcon from '@mui/icons-material/Close';

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  features: string[];
}

const Projects: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Sample projects data - replace with your actual projects
  const projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform with product listings, cart, and checkout.',
      longDescription: 'A comprehensive e-commerce solution built with React, TypeScript, and Node.js. Features include product search, filtering, user authentication, shopping cart, payment processing, and order management. The application uses Redux for state management and Material UI for the user interface.',
      image: 'https://via.placeholder.com/600x400?text=E-Commerce+Project',
      technologies: ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'Redux', 'Material UI'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      features: [
        'User authentication and profile management',
        'Product search and filtering',
        'Shopping cart and checkout process',
        'Payment processing integration',
        'Order history and tracking',
        'Responsive design for all devices'
      ]
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A Kanban-style task management application for teams and individuals.',
      longDescription: 'A task management application inspired by Trello, built with React and TypeScript. The app allows users to create boards, lists, and cards to organize their tasks. Features include drag-and-drop functionality, task assignment, due dates, labels, and team collaboration.',
      image: 'https://via.placeholder.com/600x400?text=Task+Management+App',
      technologies: ['React', 'TypeScript', 'Firebase', 'Redux', 'Styled Components'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      features: [
        'Drag-and-drop interface for task management',
        'User authentication and team management',
        'Real-time updates with Firebase',
        'Task filtering and search',
        'Due date reminders and notifications',
        'Mobile-friendly responsive design'
      ]
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A weather application showing current conditions and forecasts for any location.',
      longDescription: 'A weather dashboard that provides current weather conditions and forecasts for any location worldwide. The application uses the OpenWeatherMap API to fetch weather data and displays it in an intuitive interface. Features include location search, current conditions, hourly and daily forecasts, and weather maps.',
      image: 'https://via.placeholder.com/600x400?text=Weather+Dashboard',
      technologies: ['React', 'JavaScript', 'OpenWeatherMap API', 'Chart.js', 'CSS3'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      features: [
        'Location search with autocomplete',
        'Current weather conditions display',
        'Hourly and 7-day forecasts',
        'Interactive weather maps',
        'Temperature, precipitation, and wind charts',
        'Responsive design for all screen sizes'
      ]
    },
    {
      id: 4,
      title: 'Portfolio Website',
      description: 'A professional portfolio website showcasing my skills and projects.',
      longDescription: 'A personal portfolio website built with React and TypeScript to showcase my skills, experience, and projects. The website features a modern, responsive design with smooth animations and intuitive navigation. It includes sections for about me, skills, projects, and contact information.',
      image: 'https://via.placeholder.com/600x400?text=Portfolio+Website',
      technologies: ['React', 'TypeScript', 'Material UI', 'Framer Motion', 'Netlify'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      features: [
        'Modern, responsive design',
        'Smooth animations and transitions',
        'Project showcase with detailed information',
        'Skills and technologies visualization',
        'Contact form with validation',
        'Optimized for performance and SEO'
      ]
    },
  ];

  const handleOpenProject = (project: Project) => {
    setSelectedProject(project);
  };

  const handleCloseProject = () => {
    setSelectedProject(null);
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <Box
      id="projects"
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
            sx={{ fontWeight: 700, mb: 2 }}
          >
            My Projects
          </Typography>
          <Typography
            variant="h6"
            align="center"
            color="text.secondary"
            paragraph
            sx={{ maxWidth: 800, mx: 'auto', mb: 6 }}
          >
            Here are some of the projects I've worked on. Click on a project to learn more.
          </Typography>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <Grid container spacing={4}>
              {projects.map((project) => (
                <Grid item key={project.id} xs={12} sm={6} md={6}>
                  <motion.div variants={item}>
                    <Card
                      sx={{
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        borderRadius: 4,
                        overflow: 'hidden',
                        boxShadow: '0 8px 40px rgba(0,0,0,0.12)',
                        transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                        '&:hover': {
                          transform: 'translateY(-8px)',
                          boxShadow: '0 16px 70px rgba(0,0,0,0.2)',
                        },
                      }}
                    >
                      <CardMedia
                        component="img"
                        height="200"
                        image={project.image}
                        alt={project.title}
                      />
                      <CardContent sx={{ flexGrow: 1 }}>
                        <Typography gutterBottom variant="h5" component="h3" sx={{ fontWeight: 600 }}>
                          {project.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" paragraph>
                          {project.description}
                        </Typography>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mt: 2 }}>
                          {project.technologies.slice(0, 3).map((tech) => (
                            <Chip
                              key={tech}
                              label={tech}
                              size="small"
                              sx={{ mr: 0.5, mb: 0.5 }}
                            />
                          ))}
                          {project.technologies.length > 3 && (
                            <Chip
                              label={`+${project.technologies.length - 3}`}
                              size="small"
                              sx={{ mr: 0.5, mb: 0.5 }}
                            />
                          )}
                        </Box>
                      </CardContent>
                      <CardActions sx={{ p: 2, pt: 0 }}>
                        <Button
                          size="small"
                          onClick={() => handleOpenProject(project)}
                          sx={{ mr: 'auto' }}
                        >
                          Learn More
                        </Button>
                        <IconButton
                          aria-label="github"
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          size="small"
                        >
                          <GitHubIcon fontSize="small" />
                        </IconButton>
                        <IconButton
                          aria-label="live demo"
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          size="small"
                        >
                          <LaunchIcon fontSize="small" />
                        </IconButton>
                      </CardActions>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </motion.div>
      </Container>

      {/* Project Details Dialog */}
      <Dialog
        open={selectedProject !== null}
        onClose={handleCloseProject}
        maxWidth="md"
        fullWidth
        fullScreen={isMobile}
        PaperProps={{
          sx: {
            borderRadius: isMobile ? 0 : 4,
            overflow: 'hidden',
          },
        }}
      >
        {selectedProject && (
          <>
            <DialogTitle sx={{ pr: 6 }}>
              {selectedProject.title}
              <IconButton
                aria-label="close"
                onClick={handleCloseProject}
                sx={{
                  position: 'absolute',
                  right: 8,
                  top: 8,
                }}
              >
                <CloseIcon />
              </IconButton>
            </DialogTitle>
            <DialogContent dividers>
              <Box sx={{ mb: 3 }}>
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  style={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: 8,
                    marginBottom: 16,
                  }}
                />
                <Typography variant="body1" paragraph>
                  {selectedProject.longDescription}
                </Typography>
              </Box>

              <Typography variant="h6" gutterBottom>
                Key Features
              </Typography>
              <Box component="ul" sx={{ pl: 2 }}>
                {selectedProject.features.map((feature, index) => (
                  <Typography component="li" key={index} variant="body1" paragraph>
                    {feature}
                  </Typography>
                ))}
              </Box>

              <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                Technologies Used
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {selectedProject.technologies.map((tech) => (
                  <Chip key={tech} label={tech} sx={{ mb: 1 }} />
                ))}
              </Box>
            </DialogContent>
            <DialogActions>
              <Button
                href={selectedProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                startIcon={<GitHubIcon />}
              >
                GitHub
              </Button>
              <Button
                href={selectedProject.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="contained"
                startIcon={<LaunchIcon />}
              >
                Live Demo
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </Box>
  );
};

export default Projects;