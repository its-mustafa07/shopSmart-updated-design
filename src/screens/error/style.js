import {useContext} from 'react';
import {ThemeContext} from '../../components/themes/theme';

const {StyleSheet} = require('react-native');

const {theme} = useContext(ThemeContext);

export const styles = StyleSheet.create({
  errorWrapper: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    padding: 20,
    gap: 30,
  },
  errorText: {
    gap: 10,
    textAlign: 'justify',
    color: theme.textAccent,
  },
  errorHeading: {
    fontSize: 30,
    fontFamily: 'SourceSansPro-SemiBold',
  },
  errorCode: {
    fontSize: 20,
    fontFamily: 'SourceSansPro-SemiBold',
  },
  errorpara: {
    fontSize: 18,
    fontFamily: 'SourceSansPro-Regular',
  },
  buttons: {
    flexDirection: 'row',
    gap: 20,
    position: 'absolute',
    bottom: '10%',
    padding: 20,
  },
  button: {
    width: 170,
    height: 50,
    borderRadius: 10,
  },
});
