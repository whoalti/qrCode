// For testing stuff, not actual code!

import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text, Button, Alert} from 'react-native';
import {
  Camera,
  useCameraPermission,
  useCameraDevice,
  useCodeScanner,
} from 'react-native-vision-camera';
import {NoPermissionsScreen} from './PermissonScreen';
import {NoCameraDeviceErrorScreen} from './NoCameraScreen';

function CameraScreen() {
  const device = useCameraDevice('back');
  const [isActive, setIsAcitve] = useState(true);
  const codeScanner = useCodeScanner({
    codeTypes: ['qr', 'ean-13'],
    onCodeScanned: codes => {
      setIsAcitve(false);
      Alert.alert('Value of qr code', codes[0].value, [
        {
          text: 'Ok',
          onPress: () => setIsAcitve(true),
        },
      ]);
    },
    regionOfInterest: {x: 100, y: 200, width: 20, height: 20}, // works only on IOS, has to be done manually on android
  });

  const {hasPermission, requestPermission} = useCameraPermission();

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

  return (
    <View style={styles.container}>
      {/* <Text style={styles.overlayText}>Some text</Text> */}
      <Camera
        style={styles.camera_size}
        device={device}
        isActive={isActive}
        codeScanner={codeScanner}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  camera_size: {
    width: '90%',
    height: '90%',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#f0f0f0',
  },
  text: {
    marginBottom: 20,
    fontSize: 16,
    textAlign: 'center',
  },
  overlayText: {
    position: 'absolute',
    top: '5%',
    alignSelf: 'center',
    fontSize: 16,
    color: '#ffffff',
    zIndex: 10,
  },
  qrBorder: {
    position: 'absolute',
    borderWidth: 2,
    borderColor: 'blue',
    backgroundColor: 'transparent',
  },
});

export default CameraScreen;
