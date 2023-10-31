import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import LogIn from '../../components/log-in';
import SignUp from '../../components/sign-up';
import {styles} from './style';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const LoginSignup = ({navigation}) => {
  // const navigationHandler =()=>{
  //   return
  // }
  const [isSignUpVisible, setIsSignUpVisible] = useState(false);
  // console.log(isSignUpVisible);
  const translateX = useRef(new Animated.Value(0)).current;

  const toggleAnimation = () => {
    const toValue = isSignUpVisible ? -410 : 0;

    Animated.timing(translateX, {
      toValue,
      duration: 300,
      useNativeDriver: true,
    }).start();

    setIsSignUpVisible(!isSignUpVisible);
  };

  return (
    <>
      <View style={styles.container}>
        <View style={{width: '200%', overflow: 'hidden'}}>
          <Animated.View
            style={[styles.animationContainer, {transform: [{translateX}]}]}>
            <LogIn
              toggleAnimation={toggleAnimation}
              handleNavigation={() => navigation.navigate('Home')}
            />
            <SignUp
              toggleAnimation={toggleAnimation}
              handleNavigation={() => navigation.navigate('DoneComponent')}
            />
          </Animated.View>
        </View>
      </View>
    </>
  );
};

export default LoginSignup;
