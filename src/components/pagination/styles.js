import {useContext} from 'react';
import {ThemeContext} from '../themes/theme';
import {Dimensions, StyleSheet} from 'react-native';

const useStyles = () => {
  const screenWidth = Dimensions.get('window').width;
  const theme = useContext(ThemeContext);
  return StyleSheet.create({
    paginationContainer: {
      flexDirection: 'row',
      alignSelf: 'center',
      columnGap: 10,
    },
    button: {
      height: 22,
      width: 22,
      backgroundColor: theme.list,
      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'center',
    },
    disabledButton: {
      height: 22,
      width: 22,
      backgroundColor: theme.disabledButton,
      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'center',
    },
    activePage: {
      height: 22,
      width: 22,
      backgroundColor: theme.list,
      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 2,
      borderColor: theme.primary,
    },
    activeText: {
      color: theme.primary,
    },
    inactiveText: {
      color: theme.textSecondary,
    },
  });
};

export default useStyles;
