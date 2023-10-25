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
      paddingBottom: 40,
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    contentWrapper: {
      gap: 20,
    },
    iconWrapper: {
      height: 44,
      width: 44,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 25,
    },
    textstyle: {
      color: theme.textSecondary,
      fontSize: 18,
      fontWeight: 'bold',
    },
  });
};
