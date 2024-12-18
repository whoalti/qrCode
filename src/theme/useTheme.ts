import {useState} from 'react';
import {CoreColorPlate} from './colors/CoreColorPlate';

type Theme = 'light' | 'dark';

export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>('light');
  // state inside provider
  return {Colors: CoreColorPlate, setTheme};
  // return {Colors: CoreColorPlate[theme], setTheme};
};
