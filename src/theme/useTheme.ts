import {useState} from 'react';
import {CoreColorPlate} from './colors/CoreColorPlate';
import {useColorScheme} from 'react-native';

type Theme = 'light' | 'dark';

export const useTheme = () => {
  const isDarkMode = useColorScheme();
  const mode = isDarkMode === 'dark' ? 'dark' : 'light';
  const [theme, setTheme] = useState<Theme>(mode);
  // state inside provider
  return {Colors: CoreColorPlate, setTheme};
  // return {Colors: CoreColorPlate[theme], setTheme};
};
