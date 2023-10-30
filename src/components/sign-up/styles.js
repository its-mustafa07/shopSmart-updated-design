import {useContext} from 'react';
import {StyleSheet} from 'react-native';
import {ThemeContext} from '../themes/theme';

const useStyle = () => {
  const {theme} = useContext(ThemeContext);
  return StyleSheet.create({
    colorss: {
      borderColor: 'red',
    },
    errorMassage: {
      color: theme.errorPrimary,
      fontSize: 8,
    },
    errorbox: {
      width: 'auto',
      height: 15,
      borderColor: theme.primary,
      backgroundColor: theme.input,
      borderWidth: 1,
      borderRadius: 5,
      position: 'absolute',
      top: -8,
      left: 20,
      paddingVertical: 2,
      paddingLeft: 12,
      paddingRight: 12,
      alignItems: 'center',
      justifyContent: 'center',
      color: theme.errorPrimary,
    },
    signupMainWrapper: {
      height: '100%',
      width: '100%',
      flexDirection: 'column',
      alignItems: 'center',
    },
    logo: {
      paddingTop: 50,
    },
    inputText: {
      color: theme.text,
    },
    headings: {
      fontSize: 28,
      fontFamily: 'SourceSansPro-Bold',
      color: theme.text,
    },
    inputsContainer: {
      gap: 15,
    },
    inputBoxx: {
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
      paddingTop: 100,
      gap: 30,
    },
    iconBoxx: {
      width: 35,
      height: 35,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 7,
      backgroundColor: theme.secondary,
    },
    inputs: {
      paddingLeft: 10,
      width: 300,
      color: theme.text,
      opacity: 0.7,
      fontSize: 16,
      fontFamily: 'SourceSansPro-Regular',
      backgroundColor: theme.input,
    },
    buttons: {
      backgroundColor: theme.accent,
      width: 380,
      height: 40,
      borderRadius: 10,
      color: '#fff',
    },
    buttonsText: {
      fontSize: 18,
      fontFamily: 'SourceSansPro-SemiBold',
      color: theme.white,
    },
    SemiBoldTexts: {
      fontSize: 18,
      fontFamily: 'SourceSansPro-SemiBold',
      color: theme.textAccent,
    },
    socialIconss: {
      width: 120,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 8,
      backgroundColor: theme.secondary,
    },
  });
};

export default useStyle;
