import {useContext} from 'react';
import {ThemeContext} from '../themes/theme';
import {Dimensions, StyleSheet} from 'react-native';

const useStyles = () => {
  const {theme} = useContext(ThemeContext);
  const screenWidth = Dimensions.get('window').width;
  return StyleSheet.create({
    modalContainer: {
      width: screenWidth * 0.9,
      marginBottom: 30,
      justifyContent: 'flex-end',
    },
    modalContenContainer: {
      paddingVertical: 15,
      paddingHorizontal: 20,
      rowGap: 20,
    },
    confirmationText: {
      fontFamily: 'SourceSansPro-SemiBold',
      fontSize: 16,
      color: theme.textPrimary,
    },
    modalButtons: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  });
};

export default useStyles;
