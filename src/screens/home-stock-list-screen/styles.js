import {useContext} from 'react';
import {ThemeContext} from '../../components/themes/theme';
import {StyleSheet, Dimensions} from 'react-native';

const useStyles = () => {
  const screenWidth = Dimensions.get('window').width;
  const gapSize = screenWidth * 0.13;

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
      fontWeight: '500',
    },
    sectionHeaderText: {
      color: theme.textSecondary,
      fontSize: 18,
      fontWeight: 'bold',
      marginLeft: 20,
    },
    gridContentContainerStyle: {
      paddingVertical: 15,
      paddingHorizontal: 10,
      alignSelf: 'center',
      rowGap: 20,
    },
    columnWrapperStyle: {
      gap: gapSize,
    },
  });
};

export default useStyles;
