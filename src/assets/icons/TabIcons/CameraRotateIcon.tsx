import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

interface IconProps {
  color: string;
  size: number;
}

export const CameraRotateIcon = ({color, size}: IconProps) => (
  <Icon name="camera" size={size} color={color} />
);
