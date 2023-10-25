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
import GridItem from './utils/grid-item';
import GridViewItems from './components/grid-view-items';
import ScanningPage from './screens/scanning-page';
import ErrorPage from './screens/error';
import ListItem from './components/list-item';
import CartScreen from './screens/cart';
import HomeStockScreen from './screens/home-stock';
import HomeStockListScreen from './screens/home-stock-list-screen';
import ToFillStockListScreen from './screens/toFill-stock-list-screen';
import OptionsModal from './components/options-modal';

const App = () => {
  const [currentTheme, setCurrentTheme] = useState(lightBlue);

  return (
    <ThemeContext.Provider
      value={{theme: currentTheme, setTheme: setCurrentTheme}}>
      {/* <HomeScreen /> */}
      {/* <ListTitleBar /> */}
      {/* <ThemeSwitcher /> */}

      {/* <GradientComponent /> */}
      {/* <ProfileHeader /> */}
      {/* <HomeItem /> */}
      {/* <LoginSignup /> */}
      {/* <GridViewItems /> */}
      <ScanningPage />
      {/* <ErrorPage /> */}
      {/* <ListItem item={'Atta'} /> */}

      {/* <ListItem /> */}
      {/* <CartScreen /> */}
      {/* <HomeStockScreen /> */}
      {/* <HomeStockListScreen /> */}
      {/* <ToFillStockListScreen /> */}
    </ThemeContext.Provider>
  );
};

export default App;
