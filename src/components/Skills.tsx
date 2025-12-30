import React from 'react';
import { Box, Container, Typography, Grid, LinearProgress, Chip, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import BrushIcon from '@mui/icons-material/Brush';
import BuildIcon from '@mui/icons-material/Build';
import AnimatedBackground from './shared/AnimatedBackground';
import AnimatedSectionTitle from './shared/AnimatedSectionTitle';
import AnimatedCard from './shared/AnimatedCard';
import ParallaxElement from './shared/ParallaxElement';

interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'design' | 'tools';
}

const Skills: React.FC = () => {
  const theme = useTheme();

  const skills: Skill[] = [
    // Frontend
    { name: 'React', level: 90, category: 'frontend' },
    { name: 'TypeScript', level: 85, category: 'frontend' },
    { name: 'JavaScript', level: 90, category: 'frontend' },
    { name: 'HTML/CSS', level: 85, category: 'frontend' },
    { name: 'Redux', level: 80, category: 'frontend' },
    { name: 'Material UI', level: 85, category: 'frontend' },

    // Backend
    { name: 'Node.js', level: 75, category: 'backend' },
    { name: 'Express', level: 70, category: 'backend' },
    { name: 'RESTful APIs', level: 80, category: 'backend' },
    { name: 'GraphQL', level: 65, category: 'backend' },

    // Design
    { name: 'Responsive Design', level: 85, category: 'design' },
    { name: 'UI/UX Principles', level: 75, category: 'design' },
    { name: 'Figma', level: 70, category: 'design' },

    // Tools
    { name: 'Git', level: 85, category: 'tools' },
    { name: 'Webpack', level: 75, category: 'tools' },
    { name: 'Jest', level: 70, category: 'tools' },
    { name: 'CI/CD', level: 65, category: 'tools' },
  ];

  const frontendSkills = skills.filter(skill => skill.category === 'frontend');
  const backendSkills = skills.filter(skill => skill.category === 'backend');
  const designSkills = skills.filter(skill => skill.category === 'design');
  const toolsSkills = skills.filter(skill => skill.category === 'tools');

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };


  const renderSkillCategory = (title: string, skills: Skill[], icon: React.ReactNode, color: string) => (
    <Grid item xs={12} md={6} lg={3}>
      <AnimatedCard
        elevation={0}
        hoverEffect="lift"
        withGradientBorder={true}
        borderPosition="top"
        delay={title === 'Frontend' ? 0.1 : title === 'Backend' ? 0.2 : title === 'Design' ? 0.3 : 0.4}
        sx={{
          p: 3,
          height: '100%',
          bgcolor: 'background.paper',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 40,
              height: 40,
              borderRadius: '50%',
              bgcolor: color,
              color: 'white',
              mr: 2,
              boxShadow: `0 0 15px ${color}80`,
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'scale(1.1) rotate(5deg)',
                boxShadow: `0 0 20px ${color}`,
              }
            }}
          >
            {icon}
          </Box>
          <Typography variant="h6" component="h3" sx={{ fontWeight: 600 }}>
            {title}
          </Typography>
        </Box>

        <Box>
          {skills.map((skill) => (
            <Box key={skill.name} sx={{ mb: 2 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                <Typography variant="body2">{skill.name}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {skill.level}%
                </Typography>
              </Box>
              <LinearProgress
                variant="determinate"
                value={skill.level}
                sx={{
                  height: 8,
                  borderRadius: 4,
                  bgcolor: theme.palette.grey[200],
                  '& .MuiLinearProgress-bar': {
                    borderRadius: 4,
                    bgcolor: color,
                    backgroundImage: `linear-gradient(90deg, ${color}80, ${color})`,
                  },
                }}
              />
            </Box>
          ))}
        </Box>
      </AnimatedCard>
    </Grid>
  );

  return (
    <Box
      id="skills"
      component="section"
      sx={{
        py: 10,
        bgcolor: theme.palette.grey[50],
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Add animated background */}
      <AnimatedBackground 
        variant="secondary" 
        density="low" 
        withCodeSymbols={true}
        opacity={0.3}
      />
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <AnimatedSectionTitle
            title="Skills & Technologies"
            subtitle="My technical skills and the technologies I work with to build modern web applications."
            withGradient={true}
            withDecoration={true}
          />

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <Grid container spacing={3}>
              {renderSkillCategory('Frontend', frontendSkills, <CodeIcon />, theme.palette.primary.main)}
              {renderSkillCategory('Backend', backendSkills, <StorageIcon />, theme.palette.secondary.main)}
              {renderSkillCategory('Design', designSkills, <BrushIcon />, '#009688')}
              {renderSkillCategory('Tools', toolsSkills, <BuildIcon />, '#ff9800')}
            </Grid>
          </motion.div>

          <ParallaxElement strength={0.05}>
            <Box sx={{ mt: 8, textAlign: 'center' }}>
              <Typography 
                variant="h6" 
                gutterBottom
                sx={{
                  background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  textFillColor: 'transparent',
                  fontWeight: 600,
                  display: 'inline-block',
                  position: 'relative',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: -5,
                    left: '25%',
                    width: '50%',
                    height: 2,
                    background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                    borderRadius: 1,
                  }
                }}
              >
                Other Technologies
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 1, mt: 3 }}>
                {['Sass', 'Tailwind CSS', 'Next.js', 'MongoDB', 'Docker', 'AWS', 'Firebase', 'Storybook'].map((tech, index) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                    whileHover={{ y: -5, scale: 1.05 }}
                  >
                    <Chip
                      label={tech}
                      sx={{
                        m: 0.5,
                        bgcolor: 'background.paper',
                        border: `1px solid ${theme.palette.divider}`,
                        boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                        '&:hover': {
                          bgcolor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.02)',
                          borderColor: theme.palette.primary.main,
                        }
                      }}
                    />
                  </motion.div>
                ))}
              </Box>
            </Box>
          </ParallaxElement>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Skills;
