// import React from 'react';
// import ThemeStyles from './style';
// import {View, Text} from 'react-native';

// const ColorSwitcher = () => {
//   const Styles = ThemeStyles();

//   return (
//     <View style={Styles.MainWrapper}>
//       <Text>hy</Text>
//     </View>
//   );
// };

// export default ColorSwitcher;

import React, {useContext, useState} from 'react';
import {View, Text, Modal, Button} from 'react-native';
import {RadioButton} from 'react-native-paper';
import {
  ThemeContext,
  lightPink,
  lightBlue,
  darkPink,
  darkBlue,
} from '../themes/theme';
import ReactNativeModal from 'react-native-modal';
import RadioStyle from '../CustomRadio/style';
import CustomRadio from '../CustomRadio';
import Themestyles from './style';
import Radio from '../CustomRadio';
import BackgroundGradient from '../background-gradient';

const ColorPalatte = () => {
  const Styles = Themestyles();
  const {theme, setTheme} = useContext(ThemeContext);
  return (
    <BackgroundGradient style={{flex: 1}}>
      <View style={Styles.MainWrapper}>
        {/* <BackgroundGradient style={{flex: 1}}> */}
        <Text style={Styles.TextWrapper}>Theme Color</Text>
        <View style={Styles.RadioAlign}>
          <Radio
            isSelected={theme === lightPink}
            onSelect={() => setTheme(lightPink)}
          />
          <Radio
            isSelected={theme === lightBlue}
            onSelect={() => setTheme(lightBlue)}
          />
          <Radio
            isSelected={theme === darkPink}
            onSelect={() => setTheme(darkPink)}
          />
          <Radio
            isSelected={theme === darkBlue}
            onSelect={() => setTheme(darkBlue)}
          />
        </View>
        {/* </BackgroundGradient> */}
      </View>
    </BackgroundGradient>
  );
};

export default ColorPalatte;
