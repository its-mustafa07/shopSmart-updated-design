import {useContext} from 'react';
import {StyleSheet} from 'react-native';
import {ThemeContext} from '../themes/theme';

const useStyle = () => {
  const {theme} = useContext(ThemeContext);
  return StyleSheet.create({
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
      color: theme.textSecondary,
    },
    headings: {
      fontSize: 28,
      fontFamily: 'SourceSansPro-Bold',
      color: theme.accent,
    },
    inputsContainer: {
      gap: 15,
    },
    inputBoxx: {
      flexDirection: 'row',
      width: 380,
      height: 55,
      alignItems: 'center',
      backgroundColor: '#fff',
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
      color: theme.textSecondary,
      opacity: 0.7,
      fontSize: 16,
      fontFamily: 'SourceSansPro-Regular',
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
