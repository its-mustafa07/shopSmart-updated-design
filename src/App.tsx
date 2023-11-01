import React, {useState} from 'react';
import {
  ThemeContext,
  darkBlue,
  darkPink,
  lightBlue,
  lightPink,
} from './components/themes/theme';
import LoginSignup from './screens/login-signup';
import Notificatio from './screens/notification';
const App = () => {
  const [currentTheme, setCurrentTheme] = useState(darkBlue);

  return (
    <ThemeContext.Provider
      value={{theme: currentTheme, setTheme: setCurrentTheme}}>
      <Notificatio />
    </ThemeContext.Provider>
  );
};

export default App;
