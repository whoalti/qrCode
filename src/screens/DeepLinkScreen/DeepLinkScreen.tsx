import React from 'react';
import {View, Text, useColorScheme} from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import {rem} from '@theme/rn-units';
import {useStyles} from './styles';
import {SafeAreaView} from 'react-native-safe-area-context';

export const DeepLinkScreen = ({route}) => {
  const {text} = route.params ?? {};
  const isDarkMode = useColorScheme() === 'dark';

  const styles = useStyles(isDarkMode);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.text}>Thank you for using my app</Text>
        <Text style={styles.text}>Your text : {text}</Text>
        <View style={styles.qrCointainer}>
          <QRCode
            value={text === '' ? 'Have a great day' : text}
            size={rem(150)}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: '#fff',
//   },
//   text: {
//     fontSize: 18,
//     color: '#333',
//   },
//   qrCode: {
//     margin: rem(10),
//   },
// });
