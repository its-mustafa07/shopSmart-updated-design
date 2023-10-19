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
import LoginSignup from './screens/login-signup';
import DoneComponent from './screens/done/index';
import ErrorPage from './screens/error/index';
import CustomButton from './utils/button';
import FeedBack from './screens/feedback';
import ProfileHeader from './components/profile-header';
import HomeItem from './components/home-item';
import Setting from './screens/setting';

const App = () => {
  const [currentTheme, setCurrentTheme] = useState(darkPink);

  return (
    <ThemeContext.Provider
      value={{theme: currentTheme, setTheme: setCurrentTheme}}>
      {/* <ThemeSwitcher /> */}
      {/* <GradientComponent /> */}
      {/* <LoginSignup /> */}
      {/* <DoneComponent /> */}
      {/* <CustomButton /> */}
      {/* <FeedBack /> */}
      <Setting />
      {/* <ErrorPage /> */}
      {/* <HomeScreen /> */}
      {/* <ListTitleBar /> */}
      {/* <ThemeSwitcher /> */}
      {/* <ListItem /> */}
    </ThemeContext.Provider>
  );
};

export default App;
