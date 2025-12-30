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
  Tabs,
  Tab,
  Divider,
  Avatar,
} from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import CloseIcon from '@mui/icons-material/Close';
import CodeIcon from '@mui/icons-material/Code';
import StarIcon from '@mui/icons-material/Star';

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
  const [filter, setFilter] = useState<string>('all');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const handleFilterChange = (_event: React.SyntheticEvent, newValue: string) => {
    setFilter(newValue);
  };

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

  // Get all unique technologies for filtering
  const allTechnologies = Array.from(
    new Set(projects.flatMap(project => project.technologies))
  ).sort();

  // Filter projects based on selected filter
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.technologies.includes(filter));

  return (
    <Box
      id="projects"
      component="section"
      sx={{
        py: 12,
        background: `linear-gradient(180deg, ${theme.palette.background.default} 0%, #f0f7ff 100%)`,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background decorative elements */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '40%',
          height: '40%',
          background: `radial-gradient(circle, ${theme.palette.primary.light}22 0%, transparent 70%)`,
          opacity: 0.6,
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '30%',
          height: '30%',
          background: `radial-gradient(circle, ${theme.palette.secondary.light}22 0%, transparent 70%)`,
          opacity: 0.5,
          zIndex: 0,
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography
              component="span"
              variant="overline"
              sx={{ 
                color: theme.palette.primary.main,
                fontWeight: 600,
                letterSpacing: 2,
                background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                mb: 1,
                display: 'block'
              }}
            >
              PORTFOLIO
            </Typography>
            <Typography
              component="h2"
              variant="h3"
              color="text.primary"
              gutterBottom
              sx={{ fontWeight: 700, mb: 2 }}
            >
              My Latest Projects
            </Typography>
            <Typography
              variant="h6"
              color="text.secondary"
              paragraph
              sx={{ maxWidth: 800, mx: 'auto', mb: 6, opacity: 0.8 }}
            >
              Explore my recent work showcasing React expertise and modern UI design principles.
            </Typography>

            {/* Project filtering tabs */}
            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', mb: 6 }}>
              <Tabs
                value={filter}
                onChange={handleFilterChange}
                variant="scrollable"
                scrollButtons="auto"
                allowScrollButtonsMobile
                sx={{
                  '& .MuiTabs-indicator': {
                    backgroundColor: theme.palette.primary.main,
                    height: 3,
                    borderRadius: '3px',
                  },
                  '& .MuiTab-root': {
                    textTransform: 'none',
                    fontWeight: 600,
                    fontSize: '0.95rem',
                    minWidth: 'auto',
                    mx: 1,
                    '&.Mui-selected': {
                      color: theme.palette.primary.main,
                    },
                  },
                }}
              >
                <Tab 
                  label="All Projects" 
                  value="all"
                  icon={<StarIcon fontSize="small" />}
                  iconPosition="start"
                />
                {allTechnologies.slice(0, 5).map((tech) => (
                  <Tab 
                    key={tech} 
                    label={tech} 
                    value={tech}
                    icon={<CodeIcon fontSize="small" />}
                    iconPosition="start"
                  />
                ))}
              </Tabs>
            </Box>
          </Box>

          <AnimatePresence mode="wait">
            <motion.div
              key={filter}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <Grid container spacing={4}>
                {filteredProjects.map((project) => (
                  <Grid item key={project.id} xs={12} sm={6} md={6}>
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: project.id * 0.1 }}
                      whileHover={{ y: -10 }}
                      onHoverStart={() => setHoveredProject(project.id)}
                      onHoverEnd={() => setHoveredProject(null)}
                    >
                      <Card
                        sx={{
                          height: '100%',
                          display: 'flex',
                          flexDirection: 'column',
                          borderRadius: 4,
                          overflow: 'hidden',
                          boxShadow: hoveredProject === project.id 
                            ? `0 20px 80px ${theme.palette.primary.main}33` 
                            : '0 8px 40px rgba(0,0,0,0.08)',
                          transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                          border: hoveredProject === project.id 
                            ? `1px solid ${theme.palette.primary.light}33` 
                            : '1px solid transparent',
                          background: hoveredProject === project.id 
                            ? 'linear-gradient(145deg, #ffffff, #f9faff)' 
                            : '#ffffff',
                        }}
                      >
                        <Box sx={{ position: 'relative', overflow: 'hidden' }}>
                          <CardMedia
                            component="img"
                            height="220"
                            image={project.image}
                            alt={project.title}
                            sx={{
                              transition: 'transform 0.7s ease',
                              transform: hoveredProject === project.id ? 'scale(1.05)' : 'scale(1)',
                            }}
                          />
                          <Box
                            sx={{
                              position: 'absolute',
                              top: 0,
                              left: 0,
                              width: '100%',
                              height: '100%',
                              background: 'linear-gradient(to bottom, rgba(0,0,0,0) 70%, rgba(0,0,0,0.7) 100%)',
                            }}
                          />
                          <Box
                            sx={{
                              position: 'absolute',
                              bottom: 0,
                              left: 0,
                              width: '100%',
                              p: 2,
                              display: 'flex',
                              justifyContent: 'space-between',
                              alignItems: 'center',
                            }}
                          >
                            <Typography
                              variant="h6"
                              component="h3"
                              sx={{
                                color: 'white',
                                fontWeight: 700,
                                textShadow: '0 2px 4px rgba(0,0,0,0.3)',
                              }}
                            >
                              {project.title}
                            </Typography>
                            <Box>
                              <IconButton
                                aria-label="github"
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                size="small"
                                sx={{
                                  color: 'white',
                                  bgcolor: 'rgba(0,0,0,0.2)',
                                  backdropFilter: 'blur(5px)',
                                  mr: 1,
                                  '&:hover': {
                                    bgcolor: theme.palette.primary.main,
                                  },
                                }}
                              >
                                <GitHubIcon fontSize="small" />
                              </IconButton>
                              <IconButton
                                aria-label="live demo"
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                size="small"
                                sx={{
                                  color: 'white',
                                  bgcolor: 'rgba(0,0,0,0.2)',
                                  backdropFilter: 'blur(5px)',
                                  '&:hover': {
                                    bgcolor: theme.palette.secondary.main,
                                  },
                                }}
                              >
                                <LaunchIcon fontSize="small" />
                              </IconButton>
                            </Box>
                          </Box>
                        </Box>
                        <CardContent sx={{ flexGrow: 1, p: 3 }}>
                          <Typography variant="body2" color="text.secondary" paragraph>
                            {project.description}
                          </Typography>
                          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.8, mt: 2 }}>
                            {project.technologies.map((tech) => (
                              <Chip
                                key={tech}
                                label={tech}
                                size="small"
                                sx={{ 
                                  mr: 0.5, 
                                  mb: 0.5,
                                  bgcolor: filter === tech ? theme.palette.primary.main : 'default',
                                  color: filter === tech ? 'white' : 'default',
                                  fontWeight: filter === tech ? 600 : 400,
                                  '&:hover': {
                                    bgcolor: theme.palette.primary.light,
                                    color: 'white',
                                  },
                                }}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleFilterChange(e as any, tech);
                                }}
                              />
                            ))}
                          </Box>
                        </CardContent>
                        <CardActions sx={{ p: 3, pt: 0 }}>
                          <Button
                            variant="contained"
                            onClick={() => handleOpenProject(project)}
                            sx={{ 
                              width: '100%',
                              py: 1,
                              background: hoveredProject === project.id 
                                ? `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})` 
                                : theme.palette.primary.main,
                            }}
                            endIcon={<LaunchIcon />}
                          >
                            View Details
                          </Button>
                        </CardActions>
                      </Card>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </Container>

      {/* Project Details Dialog */}
      <Dialog
        open={selectedProject !== null}
        onClose={handleCloseProject}
        maxWidth="md"
        fullWidth
        fullScreen={isMobile}
        TransitionProps={{
          timeout: 500,
        }}
        PaperProps={{
          sx: {
            borderRadius: isMobile ? 0 : 3,
            overflow: 'hidden',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
            background: 'linear-gradient(145deg, #ffffff, #f9faff)',
          },
        }}
      >
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <DialogTitle 
              sx={{ 
                pr: 6, 
                pt: 3, 
                pb: 3,
                borderBottom: `1px solid ${theme.palette.divider}`,
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Avatar
                sx={{ 
                  bgcolor: theme.palette.primary.main,
                  color: 'white',
                  mr: 2,
                  width: 40,
                  height: 40,
                }}
              >
                <CodeIcon />
              </Avatar>
              <Typography variant="h5" component="div" sx={{ fontWeight: 700 }}>
                {selectedProject.title}
              </Typography>
              <IconButton
                aria-label="close"
                onClick={handleCloseProject}
                sx={{
                  position: 'absolute',
                  right: 16,
                  top: 16,
                  color: theme.palette.grey[500],
                  bgcolor: 'rgba(0,0,0,0.03)',
                  '&:hover': {
                    bgcolor: 'rgba(0,0,0,0.08)',
                  },
                }}
              >
                <CloseIcon />
              </IconButton>
            </DialogTitle>
            <DialogContent sx={{ p: 0 }}>
              <Box sx={{ position: 'relative' }}>
                <Box
                  component="img"
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  sx={{
                    width: '100%',
                    height: { xs: 200, sm: 300, md: 400 },
                    objectFit: 'cover',
                  }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(to bottom, rgba(0,0,0,0) 50%, rgba(0,0,0,0.7) 100%)',
                  }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '100%',
                    p: 3,
                    color: 'white',
                  }}
                >
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 1 }}>
                    {selectedProject.technologies.map((tech) => (
                      <Chip 
                        key={tech} 
                        label={tech} 
                        size="small"
                        sx={{ 
                          bgcolor: 'rgba(255,255,255,0.2)',
                          color: 'white',
                          backdropFilter: 'blur(5px)',
                          fontWeight: 500,
                          '&:hover': {
                            bgcolor: 'rgba(255,255,255,0.3)',
                          }
                        }} 
                      />
                    ))}
                  </Box>
                </Box>
              </Box>

              <Box sx={{ p: 4 }}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
                    {selectedProject.longDescription}
                  </Typography>
                </motion.div>

                <Divider sx={{ my: 4 }} />

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  <Typography 
                    variant="h6" 
                    gutterBottom 
                    sx={{ 
                      fontWeight: 700,
                      display: 'flex',
                      alignItems: 'center',
                      color: theme.palette.primary.main,
                    }}
                  >
                    <StarIcon sx={{ mr: 1 }} fontSize="small" />
                    Key Features
                  </Typography>
                  <Box 
                    component="ul" 
                    sx={{ 
                      pl: 2,
                      listStyleType: 'none',
                      '& li': {
                        position: 'relative',
                        pl: 3,
                        pb: 1.5,
                        '&::before': {
                          content: '""',
                          position: 'absolute',
                          left: 0,
                          top: '0.5em',
                          width: 6,
                          height: 6,
                          borderRadius: '50%',
                          backgroundColor: theme.palette.primary.main,
                        }
                      }
                    }}
                  >
                    {selectedProject.features.map((feature, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 + index * 0.1, duration: 0.3 }}
                      >
                        <Typography component="div" variant="body1">
                          {feature}
                        </Typography>
                      </motion.li>
                    ))}
                  </Box>
                </motion.div>
              </Box>
            </DialogContent>
            <DialogActions sx={{ p: 3, pt: 2, borderTop: `1px solid ${theme.palette.divider}` }}>
              <Button
                href={selectedProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="outlined"
                startIcon={<GitHubIcon />}
                sx={{ mr: 1, borderWidth: 2 }}
              >
                View Code
              </Button>
              <Button
                href={selectedProject.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="contained"
                startIcon={<LaunchIcon />}
                sx={{ 
                  background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
                  px: 3,
                }}
              >
                Live Demo
              </Button>
            </DialogActions>
          </motion.div>
        )}
      </Dialog>
    </Box>
  );
};

export default Projects;
