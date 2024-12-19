import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import {rem} from '../../theme/rn-units';

export const DeepLinkScreen = ({route}) => {
  const {text} = route.params ?? {};

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Thank you for using my app</Text>
      <Text>Your text : {text}</Text>
      <View style={styles.qrCode}>
        <QRCode
          value={text === '' ? 'Have a great day' : text}
          size={rem(150)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 18,
    color: '#333',
  },
  qrCode: {
    margin: rem(10),
  },
});
