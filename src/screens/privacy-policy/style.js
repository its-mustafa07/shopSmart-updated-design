import {useContext} from 'react';
import {StyleSheet} from 'react-native';
import {ThemeContext} from '../../components/themes/theme';

export const UseStyles = () => {
  const {theme} = useContext(ThemeContext);
  return StyleSheet.create({
    heading: {
      fontSize: 25,
      fontFamily: 'SourceSansPro',
      color: theme.textSecondary,
      // fontWeight: 'bold',
      paddingTop: 48,
    },
    termsWrapper: {
      paddingTop: 19,
      // paddingBottom: 19,
    },
    terms: {
      fontSize: 22,
      // fontWeight: 'bold',
      fontFamily: 'SourceSansPro',
      color: theme.textSecondary,
    },
    termstext: {
      color: theme.textSecondary,
      fontFamily: 'SourceSansPro',
      fontSize: 19,
      paddingTop: 5,
    },
    listWrapper: {
      paddingTop: 10,
      paddingLeft: 23,
      gap: 8,
    },
    listtext: {
      color: theme.textSecondary,
      fontFamily: 'SourceSansPro',
      fontSize: 19,
      // fontWeight: 'normal',
    },
  });
};
