import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {CreateTabIcon} from '../assets/icons/TabIcons/CreateTabIcon';
import {ScanTabIcon} from '../assets/icons/TabIcons/ScanTabIcon';
import {useThemeMode} from '../context/ThemeContext';
import {CreateScreen} from '../screens/CreateScreen/CreateScreen';
import {ScanScreen} from '../screens/ScanScreen/ScanScreen';
import {useTheme} from '../theme/useTheme';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {MyTabs} from './MyTabs';
import {DeepLinkScreen} from '../screens/DeepLinkScreen/DeepLinkScreen';
// alt shift o
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const linking = {
  prefixes: ['mychat://', 'https://mychat.com'],
  config: {
    screens: {DeepLink: 'home/:text'},
  },
};

export const MyStack = () => {
  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Tabs" component={MyTabs} />
        <Stack.Screen name="DeepLink" component={DeepLinkScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
