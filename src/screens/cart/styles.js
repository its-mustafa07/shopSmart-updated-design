import {StyleSheet} from 'react-native';
import {ThemeContext} from '../../components/themes/theme';
import {useContext} from 'react';

const useStyles = () => {
  const {theme} = useContext(ThemeContext);
  return (styles = StyleSheet.create({
    cartHeader: {
      marginTop: 30,
    },
    cartTitleBar: {
      marginTop: 14,
    },
    pageTitle: {
      fontSize: 30,
      marginTop: 16,
      marginLeft: 30,
      color: theme.textSecondary,
    },
  }));
};

export default useStyles;
