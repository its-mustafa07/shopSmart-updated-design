import {useContext} from 'react';
import {ThemeContext} from '../../components/themes/theme';
import {StyleSheet} from 'react-native';

export const useStyles = () => {
  const {theme} = useContext(ThemeContext);
  return StyleSheet.create({
    errorWrapper: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: '5%',
      gap: 30,
    },
    errorText: {
      gap: 10,
      textAlign: 'justify',
      color: theme.text,
    },
    errorIcon: {},
    errorHeading: {
      fontSize: 30,
      fontFamily: 'SourceSansPro-SemiBold',
    },
    errorCode: {
      fontSize: 20,
      fontFamily: 'SourceSansPro-SemiBold',
      color: theme.text,
    },
    errorpara: {
      fontSize: 18,
      fontFamily: 'SourceSansPro-Regular',
      color: theme.text,
    },
    buttons: {
      width: '100%',
      flexDirection: 'row',
      // gap: 20,
      justifyContent: 'space-between',
      alignItems: 'center',

      padding: '5%',
      paddingBottom: 50,
    },
    button: {
      width: '40%',
      height: 50,
      borderRadius: 10,
    },
  });
};
