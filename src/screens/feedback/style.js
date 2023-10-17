import {useContext} from 'react';
import {StyleSheet} from 'react-native';
import {ThemeContext} from '../../components/themes/theme';
export const UseStyles = () => {
  const {theme} = useContext(ThemeContext);

  return StyleSheet.create({
    wrapper: {
      width: '100%',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    heading: {
      fontSize: 25,
      fontFamily: 'SourceSansPro',
      color: theme.textAccent,
      fontWeight: 'bold',
      padding: 48,
    },
    text: {
      fontSize: 18,
      color: theme.textAccent,
      fontWeight: 'normal',
    },
    inputMain: {
      gap: 14,
      fontWeight: 400,
      paddingLeft: 12,
      color: theme.textAccent,

      width: 376,
      height: 50,
      borderRadius: 10,
      backgroundColor: theme.input,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },
    input: {
      width: 305,
      height: 50,
      opacity: 0.7,
      fontSize: 18,
      fontFamily: 'SourceSansPro-Regular',
      borderRadius: 10,
    },
    userProfileWrapper: {
      marginBottom: 45,
      gap: 28,
    },
    editIconWrapper: {
      width: 35,
      height: 35,
      borderRadius: 7,
      alignItems: 'center',
      backgroundColor: theme.secondary,
      justifyContent: 'center',
    },
  });
};
