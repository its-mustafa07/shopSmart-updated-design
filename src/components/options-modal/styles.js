import {useContext} from 'react';
import {ThemeContext} from '../themes/theme';
import {Dimensions, StyleSheet} from 'react-native';

const useStyles = () => {
  const screenWidth = Dimensions.get('window').width;
  const {theme} = useContext(ThemeContext);
  return StyleSheet.create({
    modalContainer: {
      paddingVertical: 20,
      paddingHorizontal: 25,
      width: screenWidth * 0.9,
      marginBottom: 30,
      borderRadius: 10,
    },
    modalHeading: {
      fontSize: 16,
      color: theme.textPrimary,
      fontWeight: '400',
    },
  });
};

export default useStyles;
