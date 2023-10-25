import React, {useContext} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {ThemeContext} from '../themes/theme';

const BackgroundGradient = ({children, style}) => {
  const {theme} = useContext(ThemeContext);
  return (
    <LinearGradient
      colors={theme.gradient.colors}
      start={theme.gradient.start}
      end={theme.gradient.end}
      locations={theme.gradient.locations}
      style={style}>
      {children}
    </LinearGradient>
  );
};

export default BackgroundGradient;
