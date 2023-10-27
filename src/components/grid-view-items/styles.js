import {useContext} from 'react';
import {StyleSheet} from 'react-native';
import {ThemeContext} from '../themes/theme';

export const useStyle = () => {
  const {theme} = useContext(ThemeContext);
  return StyleSheet.create({
    GridViewItems: {
      width: '100%',
      height: '100%',
      // backgroundColor: 'red',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 20,
      rowGap: 60,
      columnGap: 20,
    },
    headingcontainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 20,
    },
    headingText: {
      fontSize: 18,
      fontFamily: 'SourceSansPro-SemiBold',
      color: theme.text,
    },
    iconContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 10,
    },
    mainWrapper: {
      gap: 30,
      padding: '5%',
    },
  });
};
