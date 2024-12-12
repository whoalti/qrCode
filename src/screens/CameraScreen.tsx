import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text, Button, Alert} from 'react-native';
import {
  Camera,
  useCameraPermission,
  useCameraDevice,
  useCodeScanner,
} from 'react-native-vision-camera';

function PermissionsPage({requestPermission}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Camera permission is required to use this feature.
      </Text>
      <Button title="Grant Permission" onPress={requestPermission} />
    </View>
  );
}

function NoCameraDeviceError() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>No camera device found.</Text>
    </View>
  );
}

function CameraScreen() {
  const device = useCameraDevice('back');
  const [isActive, setIsAcitve] = useState(true);
  const codeScanner = useCodeScanner({
    codeTypes: ['qr', 'ean-13'],
    onCodeScanned: codes => {
      setIsAcitve(false);
      // console.log(`Scanned ${codes.length} codes!`);
      console.log(codes);
      console.log('codes', codes[0]);
      Alert.alert('Value of qr code', codes[0].value, [
        {
          text: 'Ok',
          onPress: () => setIsAcitve(true),
        },
      ]);
    },
  });

  const {hasPermission, requestPermission} = useCameraPermission();

  useEffect(() => {
    if (hasPermission === false) {
      requestPermission();
    }
  }, [hasPermission, requestPermission]);

  if (!hasPermission) {
    return <PermissionsPage requestPermission={requestPermission} />;
  }

  if (device == null) {
    return <NoCameraDeviceError />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.overlayText}>Some text</Text>
      <Camera
        style={StyleSheet.absoluteFill}
        device={device}
        isActive={isActive}
        codeScanner={codeScanner}
      />
    </View>
  );
}

const styles = StyleSheet.create({
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
