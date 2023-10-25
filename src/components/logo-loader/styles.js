import {StyleSheet} from 'react-native';
import {ThemeContext} from '../themes/theme';
import {useContext} from 'react';

const logoStyles = () => {
  const {theme} = useContext(ThemeContext);

  return StyleSheet.create({
    MainWrapper: {
      backgroundColor: theme.primary,
      flex: 1,
      alignItems: 'center',
    },
    AlignDivs: {
      flexDirection: 'row',
    },
    imageDiv: {
      marginTop: 15,
    },
    Text1: {
      // fontFamily: 'SourceSans3-ExtraBold',
      fontSize: 60,
      fontWeight: 'bold',
      color: theme.textPrimary,
      marginTop: 45,
    },

    Text2: {
      fontFamily: 'SourceSans3-ExtraBold',
      fontSize: 60,
      fontWeight: 'bold',
      color: theme.textPrimary,
      marginTop: 45,
      right: 15,
    },

    SecondS: {
      width: 80,
      height: 80,
      marginTop: 45,
    },
    AnimatedS: {
      width: 60,
      height: 65,
      flexDirection: 'row-reverse',
      bottom: 70,
      left: 15,
    },
  });
};

export default logoStyles;
