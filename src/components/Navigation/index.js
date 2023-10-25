import {NavigationContainer, TabActions} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicns from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../../screens/home';
import Settings from '../../screens/setting';


const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: '#FF8C71',
          tabBarInactiveTintColor: 'white',
          tabBarStyle: {
            width: '90%',
            height: 67,
            backgroundColor: '#040325',
            borderRadius: 7,
            marginBottom: 23,
            marginLeft: 17,
          },
        }}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({color, size}) => (
              <FontAwesome name="home" size={size} color={color} />
            ),
          }}
        />

        {/* <Tab.Screen
          name="Favourite"
          component={FavouriteScreen}
          options={{
            tabBarIcon: ({color, size}) => (
              <FontAwesome name="heart" size={size} color={color} />
            ),
          }}
        /> */}

        {/* <Tab.Screen
          name="Notification"
          component={DetailScreen}
          options={{
            tabBarIcon: ({color, size}) => (
              <Ionicns name="notifications" size={size} color={color} />
            ),
          }}
        /> */}

        <Tab.Screen
          name="Settings"
          component={Settings}
          options={{
            tabBarIcon: ({color, size}) => (
              <Ionicns name="settings" size={size} color={color} />
            ),
          }}
        />

        {/* <Tab.Screen
          name="ColorScreen"
          component={ColorScreen}
          options={{
            tabBarIcon: ({color, size}) => (
              <Ionicns name="color-palette-sharp" size={size} color={color} />
            ),
          }}
        /> */}
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
