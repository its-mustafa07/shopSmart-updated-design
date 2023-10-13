import React, {useState} from 'react';
import {ThemeContext, lightPink} from './components/themes/theme';
import ThemeSwitcher from './components/themes/themeSwitcher';
import GradientComponent from './components/Gradient';

const App = () => {
  const [currentTheme, setCurrentTheme] = useState(lightPink);

  return (
    <ThemeContext.Provider
      value={{theme: currentTheme, setTheme: setCurrentTheme}}>
      <ThemeSwitcher />
      <GradientComponent />
    </ThemeContext.Provider>
  );
};

export default App;
