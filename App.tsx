/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {MyStack, MyTabs} from './src/navigation/AppNavigator';
import {ThemeModeProvider} from './src/context/ThemeContext';

function App(): React.JSX.Element {
  return (
    <ThemeModeProvider>
      <MyStack />
    </ThemeModeProvider>
  );
}

export default App;
