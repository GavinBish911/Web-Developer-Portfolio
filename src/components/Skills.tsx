import React from 'react';
import { Box, Container, Typography, Grid, Paper, LinearProgress, Chip, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import BrushIcon from '@mui/icons-material/Brush';
import BuildIcon from '@mui/icons-material/Build';

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

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  const renderSkillCategory = (title: string, skills: Skill[], icon: React.ReactNode, color: string) => (
    <Grid item xs={12} md={6} lg={3}>
      <motion.div variants={item}>
        <Paper
          elevation={0}
          sx={{
            p: 3,
            height: '100%',
            borderRadius: 4,
            bgcolor: 'background.paper',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
            border: `1px solid ${theme.palette.divider}`,
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
                    },
                  }}
                />
              </Box>
            ))}
          </Box>
        </Paper>
      </motion.div>
    </Grid>
  );

  return (
    <Box
      id="skills"
      component="section"
      sx={{
        py: 10,
        bgcolor: theme.palette.grey[50],
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
            Skills & Technologies
          </Typography>
          <Typography
            variant="h6"
            align="center"
            color="text.secondary"
            paragraph
            sx={{ maxWidth: 800, mx: 'auto', mb: 6 }}
          >
            My technical skills and the technologies I work with to build modern web applications.
          </Typography>

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

          <Box sx={{ mt: 8, textAlign: 'center' }}>
            <Typography variant="h6" gutterBottom>
              Other Technologies
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 1 }}>
              {['Sass', 'Tailwind CSS', 'Next.js', 'MongoDB', 'Docker', 'AWS', 'Firebase', 'Storybook'].map((tech) => (
                <Chip
                  key={tech}
                  label={tech}
                  sx={{
                    m: 0.5,
                    bgcolor: 'background.paper',
                    border: `1px solid ${theme.palette.divider}`,
                  }}
                />
              ))}
            </Box>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Skills;