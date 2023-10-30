import {useContext} from 'react';
import {StyleSheet} from 'react-native';
import {ThemeContext} from '../themes/theme';
const useStyle = () => {
  const {theme} = useContext(ThemeContext);
  return StyleSheet.create({
    mainList: {
      justifyContent: 'center',
      alignItems: 'center',
      gap: 10,
      paddingBottom: 10,
    },
    mainWrapper: {
      width: '90%',
      height: 'auto',
      paddingHorizontal: 20,
      paddingVertical: 20,
      borderRadius: 10,
      backgroundColor: theme.secondary,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    collapseContainer: {
      width: '90%',
      height: 'auto',
      textAlign: 'justify',
      borderLeftWidth: 3,
      borderLeftColor: theme.primary,
      paddingHorizontal: 20,
      //   paddingVertical: 10,
    },
    FAQtext: {
      fontFamily: 'SourceSansPro-Regular',
      fontSize: 19,
    },
  });
};
export default useStyle;
