import {StyleSheet, Dimensions} from 'react-native';
import {ThemeContext} from '../themes/theme';
import {useContext} from 'react';

const useStyles = () => {
  const screenWidth = Dimensions.get('window').width;
  const {theme} = useContext(ThemeContext);
  return StyleSheet.create({
    container: {
      alignSelf: 'center',
      width: screenWidth * 0.85,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    title: {
      fontFamily: 'SourceSansPro-SemiBold',
      color: theme.textPrimary,
      fontWeight: 'bold',
      // fontWeight: 'bold',
      fontSize: 16,
    },
    iconsContainer: {
      flexDirection: 'row',
      columnGap: 10,
    },
  });
};

export default useStyles;
