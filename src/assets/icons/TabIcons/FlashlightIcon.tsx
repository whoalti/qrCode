import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

interface IconProps {
  color: string;
  size: number;
}

export const FlashLightIcon = ({color, size}: IconProps) => (
  <Icon name="bolt" size={size} color={color} />
);
