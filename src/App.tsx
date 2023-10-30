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
import FeedBack from './screens/feedback';

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
      <FeedBack />
      {/* <Settings /> */}
      {/* <PrivacyPolicy /> */}
      {/* <ErrorPage /> */}
      {/* <HomeScreen /> */}
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

      {/* <BasicInfo /> */}
      {/* <BackgroundGradient style={{flex: 1}}> */}
      <ErrorPage />
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
