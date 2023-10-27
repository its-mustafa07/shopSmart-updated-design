import {StyleSheet} from 'react-native';
import {ThemeContext} from '../../components/themes/theme';
import {useContext} from 'react';
export const useStyles = () => {
  const {theme} = useContext(ThemeContext);
  return StyleSheet.create({
    faqMainWrapper: {
      justifyContent: 'center',
      paddingVertical: 30,
      gap: 30,
    },
    HeadinFAQ: {
      fontSize: 20,
      fontFamily: 'SourceSansPro-SemiBold',
      color: theme.text,
      textAlign: 'center',
    },
  });
};
