import React, {useState} from 'react';
import {
  ThemeContext,
  darkBlue,
  darkPink,
  lightBlue,
  lightPink,
} from './components/themes/theme';
import ThemeSwitcher from './components/themes/themeSwitcher';
import GradientComponent from './components/Gradient';

import ProfileHeader from './components/profile-header';
import HomeItem from './components/home-item';
import LoginSignup from './screens/login-signup';

const App = () => {
  const [currentTheme, setCurrentTheme] = useState(darkBlue);

  return (
    <ThemeContext.Provider
      value={{theme: currentTheme, setTheme: setCurrentTheme}}>
      <ThemeSwitcher />
      {/* <GradientComponent /> */}
      {/* <ProfileHeader /> */}
      {/* <HomeItem /> */}
      <LoginSignup />
    </ThemeContext.Provider>
  );
};

export default App;
