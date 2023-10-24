import {useContext} from 'react';
import {ThemeContext} from '../../components/themes/theme';
import {StyleSheet} from 'react-native';

// const {StyleSheet} = require('react-native');

export const useStyles = () => {
  const {theme} = useContext(ThemeContext);
  return StyleSheet.create({
    errorWrapper: {
      // height: 'auto',
      // width: '100%',
      flex: 1,
      justifyContent: 'flex-end',
      padding: 20,
      gap: 30,
    },
    errorText: {
      gap: 10,
      textAlign: 'justify',
      color: theme.text,
    },
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
      flexDirection: 'row',
      gap: 20,
      // position: 'absolute',
      // bottom: '10%',
      padding: 20,
    },
    button: {
      width: 170,
      height: 50,
      borderRadius: 10,
    },
  });
};
