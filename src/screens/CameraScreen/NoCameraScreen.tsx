import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const NoCameraDeviceErrorScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>No camera device found.</Text>
    </View>
  );
};

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
