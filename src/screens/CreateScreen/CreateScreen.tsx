import React, {useState} from 'react';
import {SafeAreaView, View, Text, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import QRCode from 'react-native-qrcode-svg';
import {useStyles} from './styles';
import {useDebounce} from '../../hooks/useDebounce';

export const CreateScreen = () => {
  const styles = useStyles();
  const [input, setInput] = useState('');
  const debouncedInput = useDebounce(input, 500);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.text}>
          Create your QR code here{' '}
          <Icon name="qrcode" size={20} color="black" />
        </Text>

        <View style={styles.qrCointainer}>
          <QRCode
            value={debouncedInput === '' ? 'Have a great day' : debouncedInput}
          />
        </View>
        <TextInput
          value={input}
          placeholder="Entery text to share via QR code"
          onChangeText={setInput}
          style={styles.textInput}
        />
        {/* move to another component*/}
      </View>
    </SafeAreaView>
  );
};
