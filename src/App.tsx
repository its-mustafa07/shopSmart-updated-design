import React, {useState} from 'react';
import {ThemeContext, lightPink} from './components/themes/theme';
import ThemeSwitcher from './components/themes/themeSwitcher';
import HomeItem from './components/home-item';
import LoginSignup from './screens/login-signup';
import ScanningPage from './screens/scanning-page';
import ErrorPage from './screens/error';
import DoneComponent from './screens/done';
import FAQ from './screens/faq';
import GridViewItems from './components/grid-view-items';
import ListItem from './components/list-item';

const App = () => {
  const [currentTheme, setCurrentTheme] = useState(lightPink);

  return (
    <ThemeContext.Provider
      value={{theme: currentTheme, setTheme: setCurrentTheme}}>
      <ThemeSwitcher />
      {/* <LoginSignup /> */}
      {/* <ScanningPage /> */}
      {/* <ErrorPage /> */}
      <DoneComponent />
      {/* <FAQ /> */}
      {/* <GridViewItems /> */}
    </ThemeContext.Provider>
  );
};

export default App;
