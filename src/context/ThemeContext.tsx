import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';

import {useColorScheme} from 'react-native';

interface ThemeModeContextProps {
  isDarkMode: boolean;
}

const ThemeModeContext = createContext<ThemeModeContextProps | undefined>(
  undefined,
);

export const ThemeModeProvider = ({children}: {children: ReactNode}) => {
  const colorScheme = useColorScheme();
  const [isDarkMode, setIsDarkMode] = useState(colorScheme === 'dark');

  useEffect(() => {
    setIsDarkMode(colorScheme === 'dark');
  }, [colorScheme]);

  return (
    <ThemeModeContext.Provider value={{isDarkMode}}>
      {children}
    </ThemeModeContext.Provider>
  );
};

export const useThemeMode = () => {
  const context = useContext(ThemeModeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
