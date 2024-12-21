import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  useColorScheme,
  TouchableOpacity,
} from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import {useStyles} from './styles';
import {useDebounce} from '@hooks/useDebounce';
import {rem} from '@theme/rn-units';
import {useTheme} from '@theme/useTheme';
import {ShareIcon} from '@assets/icons/ShareIcon';
// import ViewShot from 'react-native-view-shot';

export const CreateScreen = () => {
  const [input, setInput] = useState('');
  const debouncedInput = useDebounce(input, 500);
  const isDarkMode = useColorScheme() === 'dark';
  const styles = useStyles(isDarkMode);
  const {Colors} = useTheme();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.text}>
          Create and share your QR code here{' '}
          <ShareIcon
            width={rem(14)}
            height={rem(14)}
            fill={styles.text.color}
          />
        </Text>

        <View style={styles.qrCointainer}>
          <QRCode
            value={debouncedInput === '' ? 'Have a great day' : debouncedInput}
            size={rem(150)}
          />
        </View>
        <TextInput
          value={input}
          placeholder="Entery text to share via QR code"
          onChangeText={setInput}
          style={styles.textInput}
          placeholderTextColor={
            isDarkMode ? Colors.text.placeholder : Colors.text.secondary
          }
        />
        <TouchableOpacity>
          <Text style={styles.shareTouchOpacity}>
            Share your qr code{' '}
            <ShareIcon
              width={rem(14)}
              height={rem(14)}
              fill={styles.text.color}
            />
          </Text>
        </TouchableOpacity>
        {/* move to another component*/}
      </View>
    </SafeAreaView>
  );
};
