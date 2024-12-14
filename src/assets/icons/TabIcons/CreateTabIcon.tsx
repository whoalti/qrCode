import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

interface IconProps {
  color: string;
  size: number;
}

export const CreateTabIcon = ({color, size}: IconProps) => (
  <Icon name="plus-square" size={size} color={color} />
);
