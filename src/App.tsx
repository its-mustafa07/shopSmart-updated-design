import 'react-native-gesture-handler';
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
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SignUp from './components/sign-up';
const Stack = createStackNavigator();
const App = () => {
  const [currentTheme, setCurrentTheme] = useState(darkBlue);

  return (
    <NavigationContainer>
      <ThemeContext.Provider
        value={{theme: currentTheme, setTheme: setCurrentTheme}}>
        {/* <GridViewItems /> */}
        <HomeStockScreen />
        {/* <Stack.Navigator
          initialRouteName="LoginSignUp"
          screenOptions={{headerShown: false}}>
          <Stack.Screen name="LoginSignUp" component={LoginSignup} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="DoneComponent" component={DoneComponent} />
          <Stack.Screen name="GridViewItems" component={GridViewItems} />
          <Stack.Screen name="ScanningPage" component={ScanningPage} />
          <Stack.Screen name="ErrorPage" component={ErrorPage} />
          <Stack.Screen name="Settings" component={Settings} />
          <Stack.Screen
            name="HomeStockListScreen"
            component={HomeStockListScreen}
          />
        </Stack.Navigator> */}
      </ThemeContext.Provider>
    </NavigationContainer>
  );
};

export default App;
