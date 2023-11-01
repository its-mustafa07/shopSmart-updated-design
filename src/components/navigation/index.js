import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();
// import ThemeSwitcher from './components/themes/themeSwitcher';
// import GradientComponent from './components/Gradient';
// import ErrorPage from './screens/error/index';
// import CustomButton from './utils/button';
// import FeedBack from './screens/feedback';
// import Settings from './screens/setting';
// import {Text} from 'react-native';
// import PrivacyPolicy from './screens/privacy-policy';
// import HomeScreen from './screens/home';
// import ProfileHeader from './components/profile-header';
// import HomeItem from './components/home-item';
// import LoginSignup from './screens/login-signup';
// import GridItem from './utils/grid-item';
// import GridViewItems from './components/grid-view-items';
// import ScanningPage from './screens/sc/anning-page';
// import ListItem from './components/list-item';
// import CartScreen from './screens/cart';
// import HomeStockScreen from './screens/home-stock';
// import HomeStockListScreen from './screens/home-stock-list-screen';
// import ToFillStockListScreen from './screens/toFill-stock-list-screen';
// import OptionsModal from './components/options-modal';
// import DoneComponent from './screens/done';
// import FAQList from './components/faq-component';
// import FAQ from './screens/faq';
// import BasicInfo from './screens/basic-info';
// import BackgroundGradient from './components/background-gradient';
import LoginSignup from '../../screens/login-signup';
import HomeScreen from '../../screens/home';
import SignUp from '../sign-up';
// import SignUp from './components/sign-up';
import DoneComponent from '../../screens/done';
import GridViewItems from '../grid-view-items';
import ScanningPage from '../../screens/scanning-page';
import ErrorPage from '../../screens/error';
import Settings from '../../screens/setting';
import HomeStockListScreen from '../../screens/home-stock-list-screen';
import PrivacyPolicy from '../../screens/privacy-policy';
import FeedBack from '../../screens/feedback';
import {HeaderQRScanIcon} from '../../../assets/svg-icons/svgIcons';
const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
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
        <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
        <Stack.Screen name="FeedBack" component={FeedBack} />
        <Stack.Screen name="HeaderQRScanIcon" component={HeaderQRScanIcon} />
        <Stack.Screen
          name="HomeStockListScreen"
          component={HomeStockListScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
