import {useContext} from 'react';
import {ThemeContext} from '../../components/themes/theme';
import {Dimensions, StyleSheet} from 'react-native';

const useStyles = () => {
  const {theme} = useContext(ThemeContext);
  const screenWidth = Dimensions.get('window').width;
  const gapSize = screenWidth * 0.13;

  return StyleSheet.create({
    stockHeader: {
      marginTop: 30,
    },
    stockTitle: {
      marginTop: 14,
      marginLeft: 40,
      fontSize: 30,
      color: theme.textPrimary,
      fontWeight: '500',
    },
    gridContentContainerStyle: {
      paddingVertical: 15,
      paddingHorizontal: 10,
      alignSelf: 'center',
      rowGap: 20,
    },
    listContentContainerStyle: {
      paddingTop: 10,
    },
    columnWrapperStyle: {
      gap: gapSize,
    },
  });
};

export default useStyles;
