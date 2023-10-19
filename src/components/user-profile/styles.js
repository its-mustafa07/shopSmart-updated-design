import {useContext} from 'react';
import {ThemeContext} from '../themes/theme';
import {StyleSheet} from 'react-native';

export const UseStyles = () => {
  const {theme} = useContext(ThemeContext);
  return StyleSheet.create({
    userProfile: {
      flexDirection: 'row',
      gap: 20,
      alignItems: 'center',
    },
    image: {
      height: 45,
      width: 45,
      borderRadius: 50,
    },
    userName: {
      color: theme.textPrimary,
      fontWeight: 'bold',
      fontSize: 18,
      fontfamily: 'Source Sans Pro',
    },
  });
};
