import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {
  ThemeContext,
  darkBlue,
  darkPink,
  lightBlue,
  lightPink,
} from './components/themes/theme';
import Navigation from './components/navigation';

const App = () => {
  const [currentTheme, setCurrentTheme] = useState(lightPink);

  return (
    <ThemeContext.Provider
      value={{theme: currentTheme, setTheme: setCurrentTheme}}>
      <Navigation />
    </ThemeContext.Provider>
  );
};

export default App;
