import React, {useEffect, useState, useRef} from 'react';
import {SafeAreaView, View, Text, Alert, TouchableOpacity} from 'react-native';
import {useThemeMode} from '../../context/ThemeContext';
import {useStyles} from './styles';
import {
  useCameraDevice,
  useCameraPermission,
  useCodeScanner,
} from 'react-native-vision-camera';
import {QRCodeScanner} from '../../components/QRCodeScanner';
import {NoCameraDeviceErrorScreen} from '../CameraScreen/NoCameraScreen';
import {NoPermissionsScreen} from '../CameraScreen/PermissonScreen';
import {FlashLightIcon} from '../../assets/icons/TabIcons/FlashlightIcon';
import {CameraRotateIcon} from '../../assets/icons/TabIcons/CameraRotateIcon';
import {rem} from '../../theme/rn-units';
import useCameraPermissions from '../../hooks/useCameraPermissions';

export const ScanScreen = () => {
  const {isDarkMode} = useThemeMode();
  const [activeCamera, setActiveCamera] = useState<'back' | 'front'>('back');
  const [isActive, setIsAcitve] = useState<boolean>(true);
  const [flashLight, setFlashLight] = useState(false);
  const {hasPermission, requestPermission} = useCameraPermissions();
  const styles = useStyles(isDarkMode);
  const device = useCameraDevice(activeCamera);

  const isScanning = useRef(false);

  const codeScanner = useCodeScanner({
    codeTypes: ['qr', 'ean-13'],
    onCodeScanned: codes => {
      if (isScanning.current) return;
      isScanning.current = true;
      setIsAcitve(false);
      Alert.alert('Value of qr code', codes[0].value, [
        {
          text: 'Ok',
          onPress: () => {
            setIsAcitve(true);
            isScanning.current = false;
          },
        },
      ]);
    },
    regionOfInterest: {x: 100, y: 200, width: 20, height: 20}, // works only on IOS, has to be done manually on android
  });

  useEffect(() => {
    if (hasPermission === false) {
      requestPermission();
    }
  }, [hasPermission, requestPermission]);

  if (!hasPermission) {
    return <NoPermissionsScreen requestPermission={requestPermission} />;
  }

  if (device == null) {
    return <NoCameraDeviceErrorScreen />;
  }

  // callback
  const toggleFlashLight = () => {
    setFlashLight(prev => !prev);
  };

  const toggleCamera = () => {
    setActiveCamera(prev => (prev === 'back' ? 'front' : 'back'));
  };

  return (
    <SafeAreaView style={styles.container}>
      <QRCodeScanner
        device={device}
        isActive={isActive}
        style={styles.camera}
        flashLight={flashLight}
        codeScanner={codeScanner}
      />
      <View style={styles.buttons_view}>
        <TouchableOpacity onPress={toggleFlashLight}>
          <FlashLightIcon size={rem(32)} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={toggleCamera}>
          <CameraRotateIcon size={rem(32)} color="black" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
