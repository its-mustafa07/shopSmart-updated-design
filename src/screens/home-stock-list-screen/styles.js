import {useContext} from 'react';
import {ThemeContext} from '../../components/themes/theme';
import {StyleSheet} from 'react-native';

const useStyles = () => {
  const {theme} = useContext(ThemeContext);
  return StyleSheet.create({
    stockHeader: {
      marginTop: 30,
    },
    stockTitle: {
      marginTop: 14,
      marginLeft: 40,
      fontSize: 30,
      color: theme.textPrimary,
      // fontWeight: '500',
    },
    sectionHeaderText: {
      color: theme.textSecondary,
      fontSize: 18,
      // fontWeight: 'bold',
      marginLeft: 20,
    },
  });
};

export default useStyles;
