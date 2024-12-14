import {StyleSheet} from 'react-native';
import {useTheme} from '../../theme/useTheme';
import {rem} from '../../theme/rn-units';

export const useStyles = (isDarkTheme: boolean = false) => {
  const {Colors} = useTheme();

  return StyleSheet.create({
    camera: {
      flex: 1,
      width: '100%',
      height: '100%',
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    center_header: {
      textAlign: 'center',
      backgroundColor: 'red',
    },
    buttons_view: {
      position: 'absolute',
      top: rem(20),
      right: rem(20),
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    button: {
      paddingTop: rem(10),
    },
  });
};
