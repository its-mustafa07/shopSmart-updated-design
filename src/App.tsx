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
import LogoStyles from './components/logo-loader/styles';
import LogoLoader from './components/logo-loader';
import LoginSignup from './screens/login-signup';
import Navigation from './components/Navigation';

const App = () => {
  const [currentTheme, setCurrentTheme] = useState(darkBlue);

  return (
    <ThemeContext.Provider
      value={{theme: currentTheme, setTheme: setCurrentTheme}}>
      <ThemeSwitcher />
      <Navigation />
      {/* <GradientComponent /> */}
      <ProfileHeader />
      {/* <HomeItem /> */}
      {/* <LogoLoader/> */}

      {/* <ProfileHeader /> */}
      {/* <HomeItem /> */}
      {/* <LoginSignup /> */}
    </ThemeContext.Provider>
  );
};

export default App;
