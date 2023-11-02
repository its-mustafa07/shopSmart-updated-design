import React, {useState} from 'react';
import {
  ThemeContext,
  darkBlue,
  darkPink,
  lightBlue,
  lightPink,
} from './components/themes/theme';
import ThemeSwitcher from './components/themes/themeSwitcher';

import OTPVerification from './screens/otp';

const App = () => {
  const [currentTheme, setCurrentTheme] = useState(lightBlue);

  return (
    <ThemeContext.Provider
      value={{theme: currentTheme, setTheme: setCurrentTheme}}>
      <OTPVerification />
    </ThemeContext.Provider>
  );
};

export default App;
