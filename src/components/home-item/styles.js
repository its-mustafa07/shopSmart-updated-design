import {useContext} from 'react';
import {ThemeContext} from '../themes/theme';
import {StyleSheet} from 'react-native';

const useStyles = () => {
  const {theme} = useContext(ThemeContext);
  return StyleSheet.create({
    itemContainer: {
      backgroundColor: theme.list,
      height: 143,
      width: 166,
      borderRadius: 15,
      rowGap: 15,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 30,
    },
    itemText: {
      // fontWeight: 'bold',
      fontSize: 18,
      color: theme.textPrimary,
    },
  });
};

export default useStyles;
