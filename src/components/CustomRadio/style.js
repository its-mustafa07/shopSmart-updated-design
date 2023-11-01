import {StyleSheet} from 'react-native';
import {ThemeContext} from '../themes/theme';
import {useContext} from 'react';

const RadioStyle = () => {
  const {theme} = useContext(ThemeContext);

  return StyleSheet.create({
    MainWrapper: {
      width: 201,
      height: 206,
      backgroundColor: theme.primary,
      borderRadius: 10,
    },
    TextWrapper: {
      color: theme.accent,
      fontWeight: 'bold',
      left: 20,
      top: 10,
    },
    MainRadiobox: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingTop: 30,
      paddingLeft: 20,
      paddingRight: 20,
    },
    Radiobox: {
      width: 30,
      height: 30,
      backgroundColor: theme.bgcolor1,
      borderRadius: 30,
      textAlign: 'center',
      alignItems: 'center',

      color: {
        backgroundColor: 'red',
      },
    },
  });
};

export default RadioStyle;
