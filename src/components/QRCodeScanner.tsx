import {Camera, CameraDevice, CodeScanner} from 'react-native-vision-camera';
import React from 'react';
import {StyleProp, ViewStyle, View, Text} from 'react-native';

type QRCodeScannerProps = {
  device: CameraDevice | undefined;
  isActive: boolean;
  codeScanner?: CodeScanner;
  style?: StyleProp<ViewStyle>;
  flashLight: boolean;
};

export const QRCodeScanner: React.FC<QRCodeScannerProps> = ({
  device,
  isActive,
  codeScanner,
  style,
  flashLight,
}) => {
  const flashStatus = device?.hasTorch
    ? flashLight && device.hasTorch
    : undefined;
  if (!device) {
    return (
      <View style={[style, {justifyContent: 'center', alignItems: 'center'}]}>
        <Text>No camera device available</Text>
      </View>
    );
  }
  return (
    <Camera
      device={device}
      isActive={isActive}
      style={style}
      torch={flashStatus ? 'on' : 'off'}
      codeScanner={codeScanner}
    />
  );
};
