import {StyleSheet} from 'react-native';
import {ThemeContext} from '../themes/theme';
import {useContext} from 'react';

export const useStyle = () => {
  const {theme} = useContext(ThemeContext);
  return StyleSheet.create({
    Container: {
      width: '100%',
      height: '100%',
      paddingHorizontal: 30,
      paddingVertical: 50,
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    Heading: {
      fontSize: 22,
      fontFamily: 'SourceSansPro-SemiBold',
      color: theme.text,
      textAlign: 'center',
    },
    updatesCon: {
      paddingHorizontal: 10,
      borderLeftWidth: 2,
      borderLeftColor: theme.primary,
    },
    VersionHeading: {
      fontFamily: 'SourceSansPro-Regular',
      fontSize: 18,
      color: theme.text,
      paddingTop: 40,
      paddingBottom: 10,
    },
    VersionPara: {
      fontFamily: 'SourceSansPro-Regular',
      fontSize: 14,
      color: theme.text,
      textAlign: 'justify',
    },
    Btn: {
      width: '100%',
      height: 50,
      borderRadius: 10,
      backgroundColor: theme.accent,
    },
    BtnText: {
      color: theme.white,
    },
    TextContainer: {
      flexDirection: 'column',
      gap: 10,
    },
  });
};
