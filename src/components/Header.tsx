import React, { useState, useEffect } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  IconButton, 
  Drawer, 
  List, 
  ListItem, 
  ListItemText, 
  Box, 
  useMediaQuery, 
  Container,
  Tooltip,
  Fade
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useThemeContext } from '../utils/ThemeContext';

// Navigation items
const navItems = [
  { name: 'Home', href: '/#home' },
  { name: 'About', href: '/#about' },
  { name: 'Skills', href: '/#skills' },
  { name: 'Projects', href: '/#projects' },
  { name: 'Contact', href: '/#contact' },
];

const Header: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const { mode, toggleColorMode } = useThemeContext();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [isScrolled, setIsScrolled] = useState(false);

  // Effect to handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const scrollToSection = (sectionId: string) => {
    // Extract the ID part from the href value (e.g., "/#home" -> "#home")
    const id = sectionId.includes('/') ? sectionId.split('/').pop() : sectionId;
    const element = document.querySelector(id ?? "");
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      if (mobileOpen) setMobileOpen(false);
    }
  };

  const drawer = (
    <Box 
      sx={{ 
        width: 280, 
        height: '100%', 
        bgcolor: 'background.paper',
        backgroundImage: mode === 'dark' 
          ? 'radial-gradient(circle at 10% 20%, rgba(98, 0, 234, 0.1) 0%, rgba(0, 0, 0, 0) 80%)'
          : 'radial-gradient(circle at 10% 20%, rgba(98, 0, 234, 0.05) 0%, rgba(255, 255, 255, 0) 80%)',
        display: 'flex',
        flexDirection: 'column',
      }} 
      role="presentation"
    >
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        p: 2,
        borderBottom: '1px solid',
        borderColor: 'divider'
      }}>
        <Typography 
          variant="h6" 
          sx={{ 
            fontWeight: 700, 
            color: 'primary.main',
            background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Web Developer
        </Typography>
        <IconButton 
          onClick={handleDrawerToggle} 
          aria-label="close drawer"
          sx={{
            transition: 'transform 0.3s ease',
            '&:hover': { transform: 'rotate(90deg)' }
          }}
        >
          <CloseIcon />
        </IconButton>
      </Box>

      <List sx={{ flexGrow: 1, pt: 2 }}>
        {navItems.map((item, index) => (
          <ListItem 
            component="button"
            key={item.name} 
            onClick={() => scrollToSection(item.href)}
            sx={{ 
              textAlign: 'center',
              my: 1,
              mx: 2,
              borderRadius: 2,
              transition: 'all 0.3s ease',
              animation: `slideIn 0.4s ease forwards ${0.2 + index * 0.1}s`,
              opacity: 0,
              transform: 'translateX(20px)',
              '@keyframes slideIn': {
                '0%': { opacity: 0, transform: 'translateX(20px)' },
                '100%': { opacity: 1, transform: 'translateX(0)' },
              },
              '&:hover': {
                bgcolor: 'primary.main',
                color: 'primary.contrastText',
                transform: 'translateY(-3px)',
                boxShadow: 3,
              }
            }}
          >
            <ListItemText 
              primary={item.name} 
              primaryTypographyProps={{ 
                variant: 'h6', 
                sx: { fontWeight: 500 } 
              }} 
            />
          </ListItem>
        ))}
      </List>

      <Box sx={{ 
        p: 3, 
        display: 'flex', 
        justifyContent: 'center',
        borderTop: '1px solid',
        borderColor: 'divider'
      }}>
        <Button
          variant="outlined"
          startIcon={mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
          onClick={toggleColorMode}
          sx={{
            borderRadius: 4,
            px: 3,
            py: 1,
            animation: 'fadeIn 0.5s ease forwards 0.7s',
            opacity: 0,
            '@keyframes fadeIn': {
              '0%': { opacity: 0, transform: 'translateY(10px)' },
              '100%': { opacity: 1, transform: 'translateY(0)' },
            },
          }}
        >
          {mode === 'dark' ? 'Light Mode' : 'Dark Mode'}
        </Button>
      </Box>
    </Box>
  );

  return (
    <AppBar 
      position="fixed" 
      color="default" 
      elevation={isScrolled ? 4 : 0} 
      sx={{ 
        bgcolor: isScrolled ? 'background.paper' : 'transparent',
        backdropFilter: isScrolled ? 'blur(10px)' : 'none',
        transition: 'all 0.4s ease',
        boxShadow: isScrolled 
          ? (theme.palette.mode === 'dark' 
              ? '0 4px 20px rgba(0, 0, 0, 0.5)' 
              : '0 4px 20px rgba(0, 0, 0, 0.1)')
          : 'none',
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            component="div"
            sx={{ 
              flexGrow: 1, 
              fontWeight: 700, 
              color: 'primary.main',
              fontSize: { xs: '1.2rem', md: '1.5rem' },
              transition: 'all 0.3s ease',
              transform: isScrolled ? 'scale(0.9)' : 'scale(1)',
              transformOrigin: 'left center',
            }}
          >
            Web Developer
          </Typography>

          {isMobile ? (
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Tooltip 
                title={mode === 'dark' ? "Switch to light mode" : "Switch to dark mode"} 
                TransitionComponent={Fade} 
                TransitionProps={{ timeout: 600 }}
              >
                <IconButton 
                  onClick={toggleColorMode} 
                  color="inherit"
                  sx={{ 
                    mr: 1,
                    color: 'primary.main',
                    transition: 'transform 0.3s ease',
                    '&:hover': { transform: 'rotate(30deg)' }
                  }}
                >
                  {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                </IconButton>
              </Tooltip>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="end"
                onClick={handleDrawerToggle}
                sx={{ color: 'primary.main' }}
              >
                <MenuIcon />
              </IconButton>
            </Box>
          ) : (
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              {navItems.map((item, index) => (
                <Button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  sx={{ 
                    mx: 1,
                    color: 'text.primary',
                    position: 'relative',
                    overflow: 'hidden',
                    '&:hover': {
                      color: 'primary.main',
                      bgcolor: 'transparent',
                      '&::after': {
                        width: '100%',
                      }
                    },
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      width: 0,
                      height: '2px',
                      bgcolor: 'primary.main',
                      transition: 'width 0.3s ease',
                    },
                    animation: `fadeIn 0.5s ease forwards ${0.3 + index * 0.1}s`,
                    opacity: 0,
                    '@keyframes fadeIn': {
                      '0%': { opacity: 0, transform: 'translateY(10px)' },
                      '100%': { opacity: 1, transform: 'translateY(0)' },
                    },
                  }}
                >
                  {item.name}
                </Button>
              ))}
              <Tooltip 
                title={mode === 'dark' ? "Switch to light mode" : "Switch to dark mode"} 
                TransitionComponent={Fade} 
                TransitionProps={{ timeout: 600 }}
              >
                <IconButton 
                  onClick={toggleColorMode} 
                  color="inherit"
                  sx={{ 
                    ml: 2,
                    color: 'primary.main',
                    transition: 'all 0.3s ease',
                    '&:hover': { transform: 'rotate(30deg)' },
                    animation: 'fadeIn 0.5s ease forwards 0.8s',
                    opacity: 0,
                  }}
                >
                  {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                </IconButton>
              </Tooltip>
            </Box>
          )}
        </Toolbar>
      </Container>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile
        }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
};

export default Header;
