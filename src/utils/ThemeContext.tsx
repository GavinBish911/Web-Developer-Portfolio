import React, { createContext, useState, useMemo, useContext } from 'react';
import type { ReactNode } from 'react';
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles';
import type { PaletteMode } from '@mui/material';
import { getDesignTokens } from '../styles/theme';

// Define the context type
type ThemeContextType = {
  mode: PaletteMode;
  toggleColorMode: () => void;
};

// Create the context with a default value
export const ThemeContext = createContext<ThemeContextType>({
  mode: 'dark',
  toggleColorMode: () => {},
});

// Custom hook to use the theme context
export const useThemeContext = () => useContext(ThemeContext);

// Props type for the ThemeProvider component
type ThemeProviderProps = {
  children: ReactNode;
};

// Theme provider component
export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  // State to hold the current theme mode
  const [mode, setMode] = useState<PaletteMode>('dark');

  // Function to toggle between light and dark modes
  const toggleColorMode = () => {
    setMode((prevMode: PaletteMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  // Create the theme based on the current mode
  // Use type assertion to bypass TypeScript type checking for the theme
  const theme = useMemo(() => createTheme(getDesignTokens(mode) as any), [mode]);

  // Context value
  const contextValue = useMemo(
    () => ({
      mode,
      toggleColorMode,
    }),
    [mode]
  );

  return (
    <ThemeContext.Provider value={contextValue}>
      <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
    </ThemeContext.Provider>
  );
};
