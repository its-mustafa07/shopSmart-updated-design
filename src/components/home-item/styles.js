import {ThemeContext} from '../themes/theme';
import {StyleSheet} from 'react-native';

const useStyles = () => {
  return StyleSheet.create({
    itemContainer: {
      height: 143,
      width: 166,
      borderRadius: 10,
    },
  });
};

export default useStyles;
