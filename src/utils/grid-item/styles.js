import {useContext} from 'react';
import {StyleSheet} from 'react-native';
import {ThemeContext} from '../../components/themes/theme';

const useStyle = () => {
  const {theme} = useContext(ThemeContext);
  return StyleSheet.create({
    GridItem: {
      width: '45%',
      height: 150,
      backgroundColor: theme.list,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: 10,
      // paddingBottom: 20,
      gap: 10,
    },
    tagContainer: {
      paddingHorizontal: 5,
      backgroundColor: theme.listSecondary,
      borderRadius: 5,
      position: 'absolute',
      top: -10,
      left: 15,
    },
    counterContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 10,
    },
    counterNo: {
      width: 20,
      height: 20,
      borderRadius: 50,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.secondary,
    },
    counterText: {
      fontSize: 14,
      fontFamily: 'SourceSansPro-SemiBold',
      color: theme.primary,
    },
    title: {
      textAlign: 'center',
      fontFamily: 'SourceSansPro-Regular',
      fontSize: 16,
      color: theme.text,
    },
    catogary: {
      textAlign: 'center',
      fontFamily: 'SourceSansPro-Regular',
      fontSize: 14,
      color: theme.text,
    },
    gridImage: {
      width: 50,
      height: 50,
      borderRadius: 50,
      backgroundColor: theme.listSecondary,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
};

export default useStyle;
