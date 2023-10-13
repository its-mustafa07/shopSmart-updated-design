import React, { useContext } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { ThemeContext } from './../themes/theme';  // import ThemeContext
import { Text, View } from 'react-native';

function GradientComponent() {
  // Access the current theme from ThemeContext:
  const { theme } = useContext(ThemeContext);

  return (
    <LinearGradient 
      start={theme.gradient.start} 
      end={theme.gradient.end} 
      locations={theme.gradient.locations} 
      colors={theme.gradient.colors}>
     <View style={{height: 300 ,width: 300, marginTop: 80}}>
        <Text>helllo jeeee</Text>
     </View>
    </LinearGradient>
  );
}

export default GradientComponent;
