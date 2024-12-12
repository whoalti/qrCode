import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ScanScreen} from '../screens/ScanScreen/ScanScreen';
import {CreateScreen} from '../screens/CreateScreen/CreateScreen';
import Icon from 'react-native-vector-icons/FontAwesome';
import React from 'react';
import CameraScreen from '../screens/CameraScreen';

const Tab = createBottomTabNavigator();

export const MyTabs = () => {
  return (
    <Tab.Navigator initialRouteName="Scan">
      <Tab.Screen
        name="Scan"
        component={ScanScreen}
        options={{
          tabBarLabel: 'Scan',
          tabBarIcon: ({color, size}) => {
            return <Icon name="qrcode" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Create"
        component={CreateScreen}
        options={{
          tabBarLabel: 'Create',
          tabBarIcon: ({color, size}) => {
            return <Icon name="plus-square" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen name="Test" component={CameraScreen} />
    </Tab.Navigator>
  );
};
