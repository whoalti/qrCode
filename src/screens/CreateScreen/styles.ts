import {StyleSheet} from 'react-native';

export const useStyles = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f5f5f5',
    },
    content: {
      alignItems: 'center',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
      padding: 10,
      width: '90%',
      borderRadius: 10,
      backgroundColor: '#fff',
    },
    text: {
      marginBottom: 18,
      fontSize: 18,
      fontWeight: '500',
      color: '#333',
    },
    textInput: {
      width: '100%',
      backgroundColor: '#f9f9f9',
      marginTop: 20,
      borderWidth: 1,
      borderRadius: 8,
      borderColor: '#ccc',
      height: 40,
    },
    qrCointainer: {
      padding: 10,
      borderWidth: 1,
      borderColor: '#ddd',
      borderRadius: 10,
      marginVertical: 20,
    },
  });
};
