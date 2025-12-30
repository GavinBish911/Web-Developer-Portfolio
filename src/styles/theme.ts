import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import type { PaletteMode } from '@mui/material';

// Define theme settings for both light and dark modes
const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    primary: {
      main: '#3a86ff', // Modern blue
      light: '#61a0ff',
      dark: '#0a5dc7',
      contrastText: '#fff',
    },
    secondary: {
      main: '#ff006e', // Vibrant pink
      light: '#ff4b93',
      dark: '#c5004f',
      contrastText: '#fff',
    },
    tertiary: {
      main: '#8338ec', // Rich purple
      light: '#a56ef5',
      dark: '#6019c0',
      contrastText: '#fff',
    },
    accent: {
      main: '#ffbe0b', // Warm yellow
      light: '#ffce4f',
      dark: '#d99e00',
      contrastText: '#000',
    },
    background: {
      default: mode === 'dark' ? '#0a1929' : '#f8f9fa',
      paper: mode === 'dark' ? '#132f4c' : '#ffffff',
      gradient: mode === 'dark' 
        ? 'linear-gradient(135deg, #0a1929 0%, #132f4c 100%)' 
        : 'linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)',
    },
    text: {
      primary: mode === 'dark' ? '#ffffff' : '#212121',
      secondary: mode === 'dark' ? '#b0b0b0' : '#616161',
    },
    error: {
      main: '#ff3d00',
      light: '#ff7539',
      dark: '#c30000',
    },
    warning: {
      main: '#ffc400',
      light: '#ffdf4d',
      dark: '#c79400',
    },
    info: {
      main: '#03a9f4',
      light: '#67daff',
      dark: '#007ac1',
    },
    success: {
      main: '#00c853',
      light: '#5efc82',
      dark: '#009624',
    },
  },
  typography: {
    fontFamily: [
      'Inter',
      'Poppins',
      'Roboto',
      'Arial',
      'sans-serif',
    ].join(','),
    h1: {
      fontWeight: 800,
      letterSpacing: '-0.02em',
      lineHeight: 1.2,
      fontSize: '3.5rem',
      background: 'linear-gradient(90deg, #3a86ff, #ff006e)',
      backgroundClip: 'text',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      textFillColor: 'transparent',
    },
    h2: {
      fontWeight: 700,
      letterSpacing: '-0.01em',
      lineHeight: 1.3,
      fontSize: '2.75rem',
    },
    h3: {
      fontWeight: 700,
      letterSpacing: '-0.01em',
      lineHeight: 1.4,
      fontSize: '2.25rem',
    },
    h4: {
      fontWeight: 600,
      lineHeight: 1.4,
      fontSize: '1.75rem',
    },
    h5: {
      fontWeight: 600,
      lineHeight: 1.5,
      fontSize: '1.5rem',
    },
    h6: {
      fontWeight: 600,
      lineHeight: 1.5,
      fontSize: '1.25rem',
    },
    subtitle1: {
      fontWeight: 500,
      lineHeight: 1.6,
      fontSize: '1.125rem',
    },
    subtitle2: {
      fontWeight: 500,
      lineHeight: 1.6,
      fontSize: '1rem',
    },
    body1: {
      lineHeight: 1.7,
      fontSize: '1rem',
    },
    body2: {
      lineHeight: 1.7,
      fontSize: '0.875rem',
    },
    button: {
      fontWeight: 600,
      textTransform: 'none',
      letterSpacing: '0.02em',
    },
    caption: {
      fontSize: '0.75rem',
      lineHeight: 1.5,
    },
    overline: {
      fontSize: '0.75rem',
      fontWeight: 600,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
    },
  },
  shape: {
    borderRadius: 16,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          textTransform: 'none',
          fontWeight: 600,
          padding: '12px 28px',
          boxShadow: '0 4px 14px 0 rgba(0,0,0,0.1)',
          transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(255, 255, 255, 0.1)',
            transform: 'translateX(-100%)',
            transition: 'transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)',
          },
          '&:hover': {
            transform: 'translateY(-3px)',
            boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
            '&::before': {
              transform: 'translateX(0)',
            },
          },
          '&:active': {
            transform: 'translateY(-1px)',
          },
        },
        contained: {
          background: `linear-gradient(135deg, ${mode === 'dark' ? '#3a86ff' : '#3a86ff'}, ${mode === 'dark' ? '#0a5dc7' : '#0a5dc7'})`,
          '&:hover': {
            boxShadow: '0 8px 25px rgba(58, 134, 255, 0.3)',
          },
        },
        containedSecondary: {
          background: `linear-gradient(135deg, ${mode === 'dark' ? '#ff006e' : '#ff006e'}, ${mode === 'dark' ? '#c5004f' : '#c5004f'})`,
          '&:hover': {
            boxShadow: '0 8px 25px rgba(255, 0, 110, 0.3)',
          },
        },
        outlined: {
          borderWidth: '2px',
          '&:hover': {
            borderWidth: '2px',
          },
        },
        text: {
          position: 'relative',
          '&::after': {
            content: '""',
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: 0,
            height: '2px',
            background: `linear-gradient(90deg, ${mode === 'dark' ? '#3a86ff' : '#3a86ff'}, ${mode === 'dark' ? '#ff006e' : '#ff006e'})`,
            transition: 'width 0.3s ease',
          },
          '&:hover': {
            background: 'transparent',
            transform: 'none',
            boxShadow: 'none',
            '&::after': {
              width: '100%',
            },
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 24,
          boxShadow: mode === 'dark' 
            ? '0 10px 40px rgba(0,0,0,0.2)' 
            : '0 10px 30px rgba(0,0,0,0.08)',
          transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
          overflow: 'hidden',
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '4px',
            background: `linear-gradient(90deg, ${mode === 'dark' ? '#3a86ff' : '#3a86ff'}, ${mode === 'dark' ? '#ff006e' : '#ff006e'})`,
            opacity: 0,
            transition: 'opacity 0.3s ease',
          },
          '&:hover': {
            transform: 'translateY(-8px)',
            boxShadow: mode === 'dark' 
              ? '0 20px 60px rgba(0,0,0,0.3)' 
              : '0 20px 60px rgba(0,0,0,0.1)',
            '&::before': {
              opacity: 1,
            },
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          fontWeight: 500,
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-2px)',
          },
        },
        filled: {
          background: mode === 'dark' 
            ? 'rgba(58, 134, 255, 0.15)' 
            : 'rgba(58, 134, 255, 0.1)',
          color: mode === 'dark' ? '#61a0ff' : '#0a5dc7',
          '&:hover': {
            background: mode === 'dark' 
              ? 'rgba(58, 134, 255, 0.25)' 
              : 'rgba(58, 134, 255, 0.2)',
          },
        },
        filledSecondary: {
          background: mode === 'dark' 
            ? 'rgba(255, 0, 110, 0.15)' 
            : 'rgba(255, 0, 110, 0.1)',
          color: mode === 'dark' ? '#ff4b93' : '#c5004f',
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          scrollBehavior: 'smooth',
          overflowX: 'hidden',
          '&::-webkit-scrollbar': {
            width: '10px',
          },
          '&::-webkit-scrollbar-track': {
            background: mode === 'dark' ? '#0a1929' : '#f8f9fa',
            borderRadius: '5px',
          },
          '&::-webkit-scrollbar-thumb': {
            background: mode === 'dark' 
              ? 'linear-gradient(180deg, #0a5dc7 0%, #3a86ff 100%)' 
              : 'linear-gradient(180deg, #61a0ff 0%, #3a86ff 100%)',
            borderRadius: '5px',
            border: mode === 'dark' ? '2px solid #0a1929' : '2px solid #f8f9fa',
          },
          '&::-webkit-scrollbar-thumb:hover': {
            background: mode === 'dark' 
              ? 'linear-gradient(180deg, #3a86ff 0%, #ff006e 100%)' 
              : 'linear-gradient(180deg, #3a86ff 0%, #ff006e 100%)',
          },
          // Add global transitions for smooth theme changes
          transition: 'background-color 0.3s ease, color 0.3s ease',
        },
        // Add some global styles for better animations
        '::selection': {
          backgroundColor: '#3a86ff', // Primary main color
          color: '#ffffff',
        },
        // Add subtle background pattern for dark mode
        ...(mode === 'dark' && {
          'body': {
            backgroundImage: 'radial-gradient(rgba(58, 134, 255, 0.1) 1px, transparent 0)',
            backgroundSize: '40px 40px',
            backgroundPosition: '-19px -19px',
          }
        }),
        // Add global link styles
        'a': {
          color: mode === 'dark' ? '#61a0ff' : '#0a5dc7',
          textDecoration: 'none',
          transition: 'color 0.3s ease, transform 0.3s ease',
          position: 'relative',
          '&:hover': {
            color: mode === 'dark' ? '#3a86ff' : '#3a86ff',
          },
        },
        // Add global animation classes
        '.animate-on-scroll': {
          opacity: 0,
          transform: 'translateY(20px)',
          transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
        },
        '.animate-on-scroll.visible': {
          opacity: 1,
          transform: 'translateY(0)',
        },
      },
    },
    // Add paper elevation styles
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          ...(mode === 'dark' && {
            boxShadow: '0 10px 40px -10px rgba(0,0,0,0.5)',
            backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))',
          }),
        },
        elevation1: {
          ...(mode === 'dark' && {
            boxShadow: '0 5px 20px rgba(0,0,0,0.3)',
          }),
        },
        elevation4: {
          ...(mode === 'dark' && {
            boxShadow: '0 8px 30px rgba(0,0,0,0.4)',
          }),
        },
      },
    },
    // Add avatar styles
    MuiAvatar: {
      styleOverrides: {
        root: {
          border: `2px solid ${mode === 'dark' ? '#3a86ff' : '#3a86ff'}`,
          boxShadow: `0 4px 14px rgba(58, 134, 255, 0.2)`,
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          '&:hover': {
            transform: 'scale(1.05)',
            boxShadow: `0 6px 20px rgba(58, 134, 255, 0.3)`,
          },
        },
      },
    },
    // Add divider styles
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
          '&.MuiDivider-middle': {
            width: '40%',
            margin: '32px auto',
            borderWidth: '2px',
            borderRadius: '2px',
            background: `linear-gradient(90deg, transparent, ${mode === 'dark' ? '#3a86ff' : '#3a86ff'}, transparent)`,
          },
        },
      },
    },
  },
});

// Create the dark theme by default
let theme = createTheme(getDesignTokens('dark'));

// Make typography responsive
theme = responsiveFontSizes(theme);

export default theme;

// Export the getDesignTokens function for use in the theme context
export { getDesignTokens };
