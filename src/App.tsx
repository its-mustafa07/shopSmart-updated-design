import React, {useState} from 'react';
import {ThemeContext, lightPink} from './components/themes/theme';
import ThemeSwitcher from './components/themes/themeSwitcher';
import GradientComponent from './components/Gradient';
import ProfileHeader from './components/profile-header';
import HomeItem from './components/home-item';
import LogoStyles from './components/logo-loader/styles';
import LogoLoader from './components/logo-loader';

const App = () => {
  const [currentTheme, setCurrentTheme] = useState(lightPink);

  return (
    <ThemeContext.Provider
      value={{theme: currentTheme, setTheme: setCurrentTheme}}>
      <ThemeSwitcher />
      {/* <GradientComponent /> */}
      <ProfileHeader />
      {/* <HomeItem /> */}
      <LogoLoader/>
    </ThemeContext.Provider>
  );
};

export default App;
