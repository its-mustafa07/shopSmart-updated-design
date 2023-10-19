import {useContext} from 'react';
import {StyleSheet} from 'react-native';
import {ThemeContext} from '../../components/themes/theme';

const useStyle = () => {
  const {theme} = useContext(ThemeContext);
  return StyleSheet.create({
    GridItem: {
      width: 137,
      height: 137,
      backgroundColor: theme.secondary,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
      gap: 13,
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
      backgroundColor: theme.bgcolor2,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
};

export default useStyle;
