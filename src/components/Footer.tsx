import React from 'react';
import { Box, Container, Typography, Link, Divider, IconButton, useTheme } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const Footer: React.FC = () => {
  const theme = useTheme();
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Box
      component="footer"
      sx={{
        py: 6,
        bgcolor: theme.palette.grey[900],
        color: 'white',
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: { xs: 'center', md: 'flex-start' },
            mb: 4,
          }}
        >
          <Box sx={{ mb: { xs: 3, md: 0 }, textAlign: { xs: 'center', md: 'left' } }}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 700 }}>
              Web Developer Portfolio
            </Typography>
            <Typography variant="body2" color="grey.400">
              Building modern web experiences with React and TypeScript
            </Typography>
          </Box>

          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              gap: { xs: 2, sm: 4 },
              textAlign: { xs: 'center', md: 'left' },
            }}
          >
            <Box>
              <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 600 }}>
                Navigation
              </Typography>
              <Box
                component="nav"
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 1,
                }}
              >
                <Link href="/#home" color="inherit" underline="hover">
                  Home
                </Link>
                <Link href="/#about" color="inherit" underline="hover">
                  About
                </Link>
                <Link href="/#skills" color="inherit" underline="hover">
                  Skills
                </Link>
                <Link href="/#projects" color="inherit" underline="hover">
                  Projects
                </Link>
                <Link href="/#contact" color="inherit" underline="hover">
                  Contact
                </Link>
              </Box>
            </Box>

            <Box>
              <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 600 }}>
                Connect
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  gap: 1,
                  justifyContent: { xs: 'center', md: 'flex-start' },
                }}
              >
                <IconButton
                  aria-label="LinkedIn"
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  size="small"
                  sx={{ color: 'white' }}
                >
                  <LinkedInIcon fontSize="small" />
                </IconButton>
                <IconButton
                  aria-label="GitHub"
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  size="small"
                  sx={{ color: 'white' }}
                >
                  <GitHubIcon fontSize="small" />
                </IconButton>
                <IconButton
                  aria-label="Twitter"
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  size="small"
                  sx={{ color: 'white' }}
                >
                  <TwitterIcon fontSize="small" />
                </IconButton>
              </Box>
            </Box>
          </Box>
        </Box>

        <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.1)', mb: 3 }} />

        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Typography variant="body2" color="grey.400">
            © {currentYear} Your Name. All rights reserved.
          </Typography>

          <Box sx={{ mt: { xs: 2, sm: 0 } }}>
            <IconButton
              onClick={scrollToTop}
              aria-label="scroll to top"
              sx={{
                bgcolor: 'rgba(255, 255, 255, 0.1)',
                color: 'white',
                '&:hover': {
                  bgcolor: 'rgba(255, 255, 255, 0.2)',
                },
              }}
            >
              <KeyboardArrowUpIcon />
            </IconButton>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
