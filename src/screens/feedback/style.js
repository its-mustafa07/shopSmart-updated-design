import {useContext} from 'react';
import {StyleSheet} from 'react-native';
import {ThemeContext} from '../../components/themes/theme';
const {theme} = useContext(ThemeContext);
export const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    height: '100%',
    padding: 26,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 25,
    fontFamily: 'SourceSansPro',
    color: theme.textAccent,
    textAlign: 'center',
    fontWeight: 'bold',
    padding: 48,
  },
  text: {
    fontSize: 18,
    color: theme.textAccent,
    fontWeight: 'normal',
  },
});
