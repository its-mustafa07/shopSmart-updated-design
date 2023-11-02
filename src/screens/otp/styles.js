import {useContext} from 'react';
import {StyleSheet} from 'react-native';
import {ThemeContext} from '../../components/themes/theme';

export const useStyles = () => {
  const {theme} = useContext(ThemeContext);
  return StyleSheet.create({
    OtpHeading: {
      fontSize: 22,
      fontFamily: 'SourceSansPro-SemiBold',
      color: theme.text,
      textAlign: 'center',
      marginTop: 50,
    },
    inputsHeading: {
      fontSize: 18,
      fontFamily: 'SourceSansPro-Regular',
      color: theme.textAccent,
    },
    resendBtn: {
      fontSize: 18,
      fontFamily: 'SourceSansPro-Regular',
      color: theme.primary,
    },
    container: {
      padding: 30,
      gap: 40,
    },
    inputContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      //   gap: 12,
    },
    inputView: {
      width: 53,
      height: 53,
      //   borderColor: '#000',
      //   borderWidth: 1,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
      textAlign: 'center',
    },
  });
};
