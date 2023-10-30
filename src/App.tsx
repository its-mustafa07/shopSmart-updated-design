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
import ErrorPage from './screens/error/index';
import CustomButton from './utils/button';
import FeedBack from './screens/feedback';
import Settings from './screens/setting';
import {Text} from 'react-native';
import PrivacyPolicy from './screens/privacy-policy';
import HomeScreen from './screens/home';
import ProfileHeader from './components/profile-header';
import HomeItem from './components/home-item';
import LoginSignup from './screens/login-signup';
import GridItem from './utils/grid-item';
import GridViewItems from './components/grid-view-items';
import ScanningPage from './screens/scanning-page';
import ListItem from './components/list-item';
import CartScreen from './screens/cart';
import HomeStockScreen from './screens/home-stock';
import HomeStockListScreen from './screens/home-stock-list-screen';
import ToFillStockListScreen from './screens/toFill-stock-list-screen';
import OptionsModal from './components/options-modal';

import DoneComponent from './screens/done';
import FAQList from './components/faq-component';
import FAQ from './screens/faq';
import BasicInfo from './screens/basic-info';
import BackgroundGradient from './components/background-gradient';

const App = () => {
  const [currentTheme, setCurrentTheme] = useState(darkBlue);

  return (
    <ThemeContext.Provider
      value={{theme: currentTheme, setTheme: setCurrentTheme}}>
      {/* <ThemeSwitcher /> */}
      {/* <GradientComponent /> */}
      {/* <LoginSignup /> */}
      {/* <DoneComponent /> */}
      {/* <CustomButton /> */}
      {/* <FeedBack /> */}
      {/* <Settings /> */}
      {/* <PrivacyPolicy /> */}
      {/* <ErrorPage /> */}
      <HomeScreen />
      {/* <ListTitleBar /> */}
      {/* <ThemeSwitcher /> */}
      {/* <ListItem /> */}
      {/* <HomeScreen /> */}
      {/* <ListTitleBar /> */}
      {/* <ThemeSwitcher /> */}

      {/* <GradientComponent /> */}
      {/* <ProfileHeader /> */}
      {/* <HomeItem /> */}
      {/* <LoginSignup /> */}
      {/* <GridViewItems /> */}
      {/* <FAQList /> */}
      {/* <FAQ /> */}
      {/* <ScanningPage /> */}

      {/* <ErrorPage /> */}
      {/* </BackgroundGradient> */}
      {/* <DoneComponent /> */}
      {/* <ListItem item={'Atta'} /> */}
      {/* <DoneComponent /> */}
      {/* <ListItem /> */}
      {/* <CartScreen /> */}
      {/* <HomeStockScreen /> */}
      {/* <HomeStockListScreen /> */}
      {/* <OptionsModal /> */}
      {/* <ConfirmationModal /> */}
      {/* <ToFillStockListScreen /> */}
    </ThemeContext.Provider>
  );
};

export default App;
