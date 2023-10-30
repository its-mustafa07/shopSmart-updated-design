import {useContext} from 'react';
import {StyleSheet} from 'react-native';
import {ThemeContext} from '../../components/themes/theme';

export const useStyle = () => {
  const {theme} = useContext(ThemeContext);
  return StyleSheet.create({
    DoneComponent: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'flex-end',
      gap: 24,
      padding: '10%',
    },
    mainDoneWrapper: {
      height: '100%',
      justifyContent: 'center',
      alignItems: 'flex-end',
      padding: 40,
    },
    button: {
      width: '50%',
      height: 50,
      borderRadius: 10,
      backgroundColor: theme.accent,
    },
  });
};
