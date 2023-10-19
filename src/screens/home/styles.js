import {StyleSheet} from 'react-native';
import {ThemeContext} from '../../components/themes/theme';
import {useContext} from 'react';

const useStyles = () => {
  const {theme} = useContext(ThemeContext);
  return StyleSheet.create({
    profileHeader: {
      paddingVertical: 35,
    },
    homeText: {
      fontWeight: 'bold',
      color: theme.textPrimary,
      fontSize: 28,
      marginLeft: 30,
    },
  });
};

export default useStyles;
