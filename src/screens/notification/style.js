import {useContext} from 'react';
import {StyleSheet} from 'react-native';
import {ThemeContext} from '../../components/themes/theme';
export const UseStyles = () => {
  const {theme} = useContext(ThemeContext);

  return StyleSheet.create({
    heading: {
      fontSize: 25,
      paddingBottom: 40,
      color: theme.textAccent,
      fontWeight: 'bold',
    },
    contentWrapper: {
      gap: 20,
    },
    iconTextWrapper: {
      gap: 15,
      flexDirection: 'row',
      alignItems: 'center',
    },

    headingText: {
      fontSize: 18,
      fontWeight: '400',
      color: theme.textSecondary,
    },
    text: {
      color: theme.textSecondary,
      fontSize: 14,
      fontWeight: '400',
    },
  });
};
