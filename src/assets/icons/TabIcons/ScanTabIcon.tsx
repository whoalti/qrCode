import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

interface IconProps {
  color: string;
  size: number;
}

export const ScanTabIcon = ({color, size}: IconProps) => (
  <Icon name="qrcode" size={size} color={color} />
);
