import React, {useState} from 'react';
import {
  ThemeContext,
  darkPink,
  lightBlue,
  lightPink,
} from './components/themes/theme';
import ThemeSwitcher from './components/themes/themeSwitcher';
import GradientComponent from './components/Gradient';
import ProfileHeader from './components/profile-header';
import HomeItem from './components/home-item';
import HomeScreen from './screens/home';
import ListTitleBar from './components/list-title-bar';
import ListItem from './components/list-item';
import CartScreen from './screens/cart';

const App = () => {
  const [currentTheme, setCurrentTheme] = useState(lightBlue);

  return (
    <ThemeContext.Provider
      value={{theme: currentTheme, setTheme: setCurrentTheme}}>
      {/* <HomeScreen /> */}
      {/* <ListTitleBar /> */}
      <ThemeSwitcher />
      {/* <ListItem /> */}
      <CartScreen />
    </ThemeContext.Provider>
  );
};

export default App;
