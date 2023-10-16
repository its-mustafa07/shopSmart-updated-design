import React, {useState} from 'react';
import {
  ThemeContext,
  darkBlue,
  lightBlue,
  lightPink,
} from './components/themes/theme';
import ThemeSwitcher from './components/themes/themeSwitcher';
import GradientComponent from './components/Gradient';
import LoginSignup from './screens/login-signup';
import DoneComponent from './screens/done/index';
import ErrorPage from './screens/error/index';

const App = () => {
  const [currentTheme, setCurrentTheme] = useState(lightPink);

  return (
    <ThemeContext.Provider
      value={{theme: currentTheme, setTheme: setCurrentTheme}}>
      {/* <ThemeSwitcher /> */}
      {/* <GradientComponent /> */}
      <LoginSignup />
      {/* <DoneComponent /> */}
      {/* <ErrorPage /> */}
    </ThemeContext.Provider>
  );
};

export default App;
