import { createTheme, responsiveFontSizes, PaletteMode } from '@mui/material/styles';

// Define theme settings for both light and dark modes
const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    primary: {
      main: '#6200ea', // Vibrant purple
      light: '#9d46ff',
      dark: '#0a00b6',
      contrastText: '#fff',
    },
    secondary: {
      main: '#00e5ff', // Bright cyan
      light: '#6effff',
      dark: '#00b2cc',
      contrastText: mode === 'dark' ? '#000' : '#000',
    },
    background: {
      default: mode === 'dark' ? '#121212' : '#fafafa',
      paper: mode === 'dark' ? '#1e1e1e' : '#ffffff',
    },
    text: {
      primary: mode === 'dark' ? '#ffffff' : '#212121',
      secondary: mode === 'dark' ? '#b0b0b0' : '#616161',
    },
    error: {
      main: '#ff3d00',
    },
    warning: {
      main: '#ffc400',
    },
    info: {
      main: '#2979ff',
    },
    success: {
      main: '#00c853',
    },
  },
  typography: {
    fontFamily: [
      'Poppins',
      'Roboto',
      'Arial',
      'sans-serif',
    ].join(','),
    h1: {
      fontWeight: 800,
      letterSpacing: '-0.02em',
    },
    h2: {
      fontWeight: 700,
      letterSpacing: '-0.01em',
    },
    h3: {
      fontWeight: 700,
      letterSpacing: '-0.01em',
    },
    h4: {
      fontWeight: 600,
    },
    h5: {
      fontWeight: 600,
    },
    h6: {
      fontWeight: 600,
    },
    button: {
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          textTransform: 'none',
          fontWeight: 600,
          padding: '10px 24px',
          boxShadow: '0 4px 14px 0 rgba(0,0,0,0.1)',
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 6px 20px rgba(0,0,0,0.15)',
          },
        },
        contained: {
          '&:hover': {
            boxShadow: '0 8px 25px rgba(98, 0, 234, 0.25)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
          transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
          '&:hover': {
            boxShadow: '0 15px 35px rgba(0,0,0,0.12)',
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          fontWeight: 500,
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
            background: mode === 'dark' ? '#1a1a1a' : '#f1f1f1',
            borderRadius: '5px',
          },
          '&::-webkit-scrollbar-thumb': {
            background: mode === 'dark' 
              ? `linear-gradient(180deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 100%)` 
              : `linear-gradient(180deg, ${theme.palette.primary.light} 0%, ${theme.palette.primary.main} 100%)`,
            borderRadius: '5px',
            border: mode === 'dark' ? '2px solid #1a1a1a' : '2px solid #f1f1f1',
          },
          '&::-webkit-scrollbar-thumb:hover': {
            background: mode === 'dark' 
              ? `linear-gradient(180deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.dark} 100%)` 
              : `linear-gradient(180deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
          },
          // Add global transitions for smooth theme changes
          transition: 'background-color 0.3s ease, color 0.3s ease',
        },
        // Add some global styles for better animations
        '::selection': {
          backgroundColor: theme.palette.primary.main,
          color: '#ffffff',
        },
        // Add subtle background pattern for dark mode
        ...(mode === 'dark' && {
          'body': {
            backgroundImage: 'radial-gradient(rgba(98, 0, 234, 0.1) 1px, transparent 0)',
            backgroundSize: '40px 40px',
            backgroundPosition: '-19px -19px',
          }
        }),
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
  },
});

// Create the dark theme by default
let theme = createTheme(getDesignTokens('dark'));

// Make typography responsive
theme = responsiveFontSizes(theme);

export default theme;

// Export the getDesignTokens function for use in the theme context
export { getDesignTokens };
