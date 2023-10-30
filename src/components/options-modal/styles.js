import {useContext} from 'react';
import {ThemeContext} from '../themes/theme';
import {Dimensions, StyleSheet} from 'react-native';

const useStyles = () => {
  const screenWidth = Dimensions.get('window').width;
  const {theme} = useContext(ThemeContext);
  return StyleSheet.create({
    modalContainer: {
      width: screenWidth * 0.9,
      marginBottom: 30,
      justifyContent: 'flex-end',
    },
    modalContentContainer: {
      paddingVertical: 20,
      paddingHorizontal: 25,
      rowGap: 10,
    },
    modalHeading: {
      fontSize: 16,
      color: theme.textPrimary,
      // fontWeight: '400',
    },
    modalButtons: {
      rowGap: 20,
    },
  });
};

export default useStyles;
