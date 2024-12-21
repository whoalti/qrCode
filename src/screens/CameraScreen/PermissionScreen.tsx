import React from 'react';
import {View, Button, Text, StyleSheet} from 'react-native';

interface NoPermissionsScreenProps {
  requestPermission: () => void;
}

export const NoPermissionsScreen: React.FC<NoPermissionsScreenProps> = ({
  requestPermission,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Camera permission is required to use this feature.
      </Text>
      <Button title="Grant Permission" onPress={requestPermission} />
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
