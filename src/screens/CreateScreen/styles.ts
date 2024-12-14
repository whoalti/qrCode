import {StyleSheet} from 'react-native';
import {rem} from '../../theme/rn-units';
import {useTheme} from '../../theme/useTheme';

export const useStyles = (isDarkTheme: boolean = false) => {
  const {Colors} = useTheme();

  return StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: isDarkTheme
        ? Colors.background.dark
        : Colors.background.default,
    },
    content: {
      alignItems: 'center',
      boxShadow: `0 4px 8px ${
        isDarkTheme ? Colors.shadow.dark : Colors.shadow.light
      }`,
      padding: rem(10),
      width: '90%',
      borderRadius: rem(10),
      backgroundColor: isDarkTheme
        ? Colors.background.secondary_dark
        : Colors.background.light,
    },
    text: {
      marginBottom: rem(18),
      fontSize: rem(18),
      fontWeight: '500',
      color: isDarkTheme ? Colors.text.dark : Colors.text.primary,
    },
    textInput: {
      width: '100%',
      backgroundColor: isDarkTheme
        ? Colors.input.background.dark
        : Colors.input.background.light,
      color: isDarkTheme ? Colors.text.placeholder : Colors.text.secondary,
      marginTop: rem(20),
      borderWidth: rem(1),
      borderRadius: rem(8),
      borderColor: '#ccc',
      height: rem(40),
    },
    qrCointainer: {
      padding: rem(10),
      borderWidth: rem(1),
      backgroundColor: Colors.background.light,
      borderColor: isDarkTheme ? Colors.borders.dark : Colors.borders.light,
      borderRadius: rem(10),
      marginVertical: rem(20),
    },
  });
};
