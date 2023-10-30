import {useContext} from 'react';
import {ThemeContext} from '../../components/themes/theme';
import {Dimensions, StyleSheet} from 'react-native';

const useStyles = () => {
  const screenWidth = Dimensions.get('window').width;
  const {theme} = useContext(ThemeContext);
  return (styles = StyleSheet.create({
    stockHeader: {
      marginTop: 30,
    },
    stockTitle: {
      marginTop: 14,
      marginLeft: 40,
      fontSize: 30,
      color: theme.textPrimary,
      // fontWeight: '500',
      marginBottom: 14,
    },
    stockTitleBar: {
      marginTop: 14,
    },
    listsContainer: {
      flex: 1,
    },
    listHeader: {
      flexDirection: 'row',
      width: screenWidth * 0.88,
      justifyContent: 'space-between',
      alignSelf: 'center',
      marginBottom: 10,
    },
    headingText: {
      color: theme.textSecondary,
      fontSize: 18,
      // fontWeight: 'bold',
    },
    seeAllText: {
      color: theme.textAccent,
      fontSize: 18,
    },
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
    refillStockList: {
      marginTop: 10,
    },
    // sectionHeader: {
    //   alignSelf: 'left',
    //   // width: screenWidth * 0.87,
    //   flexDirection: 'row',
    //   justifyContent: 'space-between',
    //   alignItems: 'center',
    //   padding: 10,
    //   // backgroundColor: '#f0f0f0',
    //   borderRaduis: 8,
    // },
    // sectionHeaderText: {
    //   color: theme.textSecondary,
    //   fontSize: 18,
    //   fontWeight: 'bold',
    // },
    // seeAllText: {
    //   color: theme.textAccent,
    //   fontSize: 18,
    // },
    // stickyHeader: {
    //   position: 'sticky',
    //   top: 0,
    //   backgroundColor: theme.bgcolor1,
    // },
  }));
};

export default useStyles;
