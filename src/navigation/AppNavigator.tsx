import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ScanScreen} from '../screens/ScanScreen/ScanScreen';
import {CreateScreen} from '../screens/CreateScreen/CreateScreen';
import Icon from 'react-native-vector-icons/FontAwesome';
import React from 'react';
import CameraScreen from '../screens/CameraScreen/CameraScreen';
import {CreateTabIcon} from '../assets/icons/TabIcons/CreateTabIcon';
import {ScanTabIcon} from '../assets/icons/TabIcons/ScanTabIcon';
import {useStyles} from '../screens/CreateScreen/styles';
import {useTheme} from '../theme/useTheme';
import {useThemeMode} from '../context/ThemeContext';

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
