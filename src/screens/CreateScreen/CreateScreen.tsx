import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  useColorScheme,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import QRCode from 'react-native-qrcode-svg';
import {useStyles} from './styles';
import {useDebounce} from '../../hooks/useDebounce';
import {rem} from '../../theme/rn-units';
import {useTheme} from '../../theme/useTheme';

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
          Create your QR code here{' '}
          <Icon
            name="qrcode"
            size={20}
            color={isDarkMode ? Colors.text.dark : Colors.text.primary}
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
        {/* move to another component*/}
      </View>
    </SafeAreaView>
  );
};
