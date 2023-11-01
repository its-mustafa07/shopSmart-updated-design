import {StyleSheet} from 'react-native';
import {ThemeContext} from '../themes/theme';
import {useContext} from 'react';

const Themestyles = () => {
  const {theme} = useContext(ThemeContext);

  return StyleSheet.create({
    MainWrapper: {
      width: 201,
      height: 150,
      backgroundColor: theme.primary,
      position: 'absolute',
      bottom: 0,
      right: 0,
      borderRadius: 10,
    },
    TextWrapper: {
      color: theme.accent,
      fontWeight: 'bold',
      left: 20,
      top: 10,
    },
    RadioAlign: {
      flexDirection: 'row',
      paddingTop: 40,
      paddingLeft: 20,
    },
  });
};

export default Themestyles;
