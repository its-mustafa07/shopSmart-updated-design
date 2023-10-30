import {StyleSheet} from 'react-native';
import {ThemeContext} from '../themes/theme';
import {useContext} from 'react';

const useStyles = () => {
  const {theme} = useContext(ThemeContext);

  return StyleSheet.create({
    mainContainer: {
      width: '85%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignSelf: 'center',
    },
    userInfo: {
      flexDirection: 'row',
      gap: 20,
      alignItems: 'center',
    },
    image: {
      height: 45,
      width: 45,
      borderRadius: 50,
    },
    userName: {
      fontFamily: 'SourceSansPro-SemiBold',
      color: theme.textPrimary,
    },
    svgsContainer: {
      flexDirection: 'row',
      gap: 20,
      alignItems: 'center',
    },
  });
};

export default useStyles;
