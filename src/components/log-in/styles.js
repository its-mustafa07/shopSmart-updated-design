import {useContext} from 'react';
import {StyleSheet} from 'react-native';
import {ThemeContext} from '../themes/theme';

const useStyle = () => {
  const {theme} = useContext(ThemeContext);

  return StyleSheet.create({
    errorMassage: {
      color: theme.errorPrimary,
      fontSize: 10,
      textAlign: 'center',
    },
    errorbox: {
      width: 'auto',
      height: 15,
      borderColor: theme.primary,
      backgroundColor: theme.input,
      borderWidth: 2,
      textAlign: 'center',
      borderRadius: 5,
      position: 'absolute',
      top: -8,
      left: 20,
      paddingLeft: 12,
      paddingRight: 12,
      alignItems: 'center',
      justifyContent: 'center',
      color: theme.errorPrimary,
    },
    loginMainWrapper: {
      flex: 1,
      height: '100%',
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      // gap: 50,
    },
    heading: {
      fontSize: 28,
      fontFamily: 'SourceSansPro-Bold',
      color: theme.text,
    },
    inputBox: {
      flexDirection: 'row',
      width: 380,
      height: 55,
      alignItems: 'center',
      backgroundColor: theme.input,
      borderRadius: 10,
      paddingLeft: 10,
      paddingBottom: 6,
      paddingTop: 6,

      borderWidth: 2,
      borderColor: theme.primary,
    },
    container: {
      marginTop: 100,
      gap: 20,
    },
    Border: {
      borderColor: 'red',
    },
    iconBox: {
      width: 35,
      height: 35,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.secondary,
      color: theme.text,
      borderRadius: 7,
    },
    input: {
      paddingLeft: 10,
      width: 300,
      color: theme.text,
      fontSize: 16,
      fontFamily: 'SourceSansPro-Regular',
    },
    checkbox: {
      width: 20,
      height: 20,
      borderWidth: 2,
      borderRadius: 4,
      backgroundColor: theme.input,
    },
    button: {
      width: 380,
      height: 40,
      borderRadius: 10,
      borderColor: theme.primary,
      backgroundColor: theme.accent,
    },
    buttonText: {
      fontSize: 18,
      fontFamily: 'SourceSansPro-SemiBold',
    },
    socialIcons: {
      width: 120,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 8,
      backgroundColor: theme.secondary,
    },
    SemiBoldText: {
      fontSize: 18,
      color: theme.textAccent,
      fontFamily: 'SourceSansPro-SemiBold',
    },
    logo: {
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: -150,
    },
  });
};

export default useStyle;
