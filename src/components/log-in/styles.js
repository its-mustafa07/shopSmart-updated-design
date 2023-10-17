import {useContext} from 'react';
import {StyleSheet} from 'react-native';
import {ThemeContext} from '../themes/theme';

const useStyle = () => {
  const {theme} = useContext(ThemeContext);

  return StyleSheet.create({
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
      color: theme.accent,
    },
    inputBox: {
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
      marginTop: 100,
      gap: 20,
    },
    iconBox: {
      width: 35,
      height: 35,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.secondary,
      borderRadius: 7,
    },
    input: {
      paddingLeft: 10,
      width: 330,
      color: theme.textSecondary,
      fontSize: 16,
      fontFamily: 'SourceSansPro-Regular',
    },
    checkbox: {
      width: 20,
      height: 20,
      borderWidth: 2,
      borderRadius: 4,
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
