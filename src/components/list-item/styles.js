import {StyleSheet, Dimensions} from 'react-native';
import {ThemeContext} from '../themes/theme';
import {useContext} from 'react';

const useStyles = () => {
  const {theme} = useContext(ThemeContext);
  const screenWidth = Dimensions.get('window').width;
  return StyleSheet.create({
    mainContainer: {
      width: screenWidth * 0.9,
      paddingTop: 12,
      paddingBottom: 12,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
      backgroundColor: theme.list,
      alignSelf: 'center',
      position: 'relative',
    },
    contentContainer: {
      flexDirection: 'row',
      width: '90%',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    iconContainer: {
      height: 50,
      width: 50,
      borderRadius: 50,
      backgroundColor: theme.listSecondary,
      justifyContent: 'center',
      alignItems: 'center',
    },
    textContainer: {
      marginLeft: 13,
      justifyContent: 'center',
    },
    titleWithQuantity: {
      flexDirection: 'row',
      columnGap: 15,
    },
    itemTitle: {
      color: theme.textPrimary,
      fontSize: 16,
    },
    quantityContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      height: 17,
      width: 17,
      borderRadius: 8,
      backgroundColor: theme.listSecondary,
    },
    quantity: {
      fontSize: 12,
      color: theme.primary,
    },
    itemDate: {
      color: theme.textPrimary,
    },
    counterAndIcon: {
      flexDirection: 'row',
      columnGap: 20,
      alignItems: 'center',
    },
    counter: {
      rowGap: 4,
      alignItems: 'center',
    },
    tagContainer: {
      height: 20,
      borderRadius: 5,
      backgroundColor: theme.listSecondary,
      paddingHorizontal: 5,
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      top: -10,
      left: 37,
    },
    tagTitle: {
      color: theme.textSecondary,
      fontSize: 14,
    },
  });
};

export default useStyles;
