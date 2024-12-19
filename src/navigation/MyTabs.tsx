import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {CreateTabIcon} from '../assets/icons/TabIcons/CreateTabIcon';
import {ScanTabIcon} from '../assets/icons/TabIcons/ScanTabIcon';
import {useThemeMode} from '../context/ThemeContext';
import {CreateScreen} from '../screens/CreateScreen/CreateScreen';
import {ScanScreen} from '../screens/ScanScreen/ScanScreen';
import {useTheme} from '../theme/useTheme';
// alt shift o
const Tab = createBottomTabNavigator();

export const MyTabs = () => {
  const {Colors} = useTheme();
  const {isDarkMode} = useThemeMode();

  return (
    <Tab.Navigator
      initialRouteName="Scan"
      screenOptions={{
        headerStyle: {
          backgroundColor: isDarkMode
            ? Colors.background.secondary_dark
            : Colors.background.light,
        },
        headerShown: false,
        headerTintColor: isDarkMode ? Colors.text.dark : Colors.text.primary,
        headerTitleStyle: {},
        tabBarStyle: {
          backgroundColor: isDarkMode
            ? Colors.background.secondary_dark
            : Colors.background.light,
        },
      }}>
      <Tab.Screen
        name="Scan"
        component={ScanScreen}
        options={{
          tabBarLabel: 'Scan',
          tabBarIcon: ScanTabIcon,
        }}
      />
      <Tab.Screen
        name="Create"
        component={CreateScreen}
        options={{
          tabBarLabel: 'Create',
          tabBarIcon: CreateTabIcon,
        }}
      />
      {/* <Tab.Screen name="Camera" component={CameraScreen} /> */}
    </Tab.Navigator>
  );
};
