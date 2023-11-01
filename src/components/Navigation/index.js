import React from 'react';
import {NavigationContainer, TabActions} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicns from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../../screens/home';
import Settings from '../../screens/setting';
import FeedBack from '../../screens/feedback';
import PrivacyPolicy from '../../screens/privacy-policy';
import ThemeSwitcher from '../themes/themeSwitcher';
import {KeyboardAvoidingView} from 'react-native';
import ColorPalettePopup from '../Color-Switcher';
import {useState} from 'react';

const Tab = createBottomTabNavigator();
function AnotherScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Another Screen</Text>
    </View>
  );
}
const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerBackground: false,
          tabBarShowLabel: false,
          tabBarActiveTintColor: '#FF8C71',
          tabBarInactiveTintColor: 'white',
          tabBarStyle: {
            height: 67,
            backgroundColor: '#040325',
          },
        }}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: 'AnotherScreen',
            tabBarIcon: ({color, size}) => (
              <FontAwesome name="home" size={size} color={color} />
            ),
          }}
        />

        <Tab.Screen
          name="Favourite"
          component={FeedBack}
          options={{
            tabBarIcon: ({color, size}) => (
              <FontAwesome name="heart" size={size} color={color} />
            ),
          }}
        />

        <Tab.Screen
          name="Notification"
          component={PrivacyPolicy}
          options={{
            tabBarIcon: ({color, size}) => (
              <Ionicns name="notifications" size={size} color={color} />
            ),
          }}
        />

        <Tab.Screen
          name="Settings"
          component={Settings}
          options={{
            tabBarIcon: ({color, size}) => (
              <Ionicns name="settings" size={size} color={color} />
            ),
          }}
        />

        <Tab.Screen
          name="ColorScreen"
          component={ColorPalettePopup}
          options={{
            tabBarIcon: ({color, size}) => (
              <Ionicns name="color-palette-sharp" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
