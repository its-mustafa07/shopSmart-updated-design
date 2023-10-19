import {useContext} from 'react';
import {StyleSheet} from 'react-native';
import {ThemeContext} from '../../components/themes/theme';

export const UseStyles = () => {
  const {theme} = useContext(ThemeContext);
  return StyleSheet.create({
    heading: {
      fontSize: 25,
      fontFamily: 'SourceSansPro',
      color: theme.textAccent,
      fontWeight: 'bold',
      paddingTop: 48,
    },
    profileWrapper: {
      padding: 32,
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    warnIconWrapper: {
      width: 44,
      height: 44,
    },
  });
};
