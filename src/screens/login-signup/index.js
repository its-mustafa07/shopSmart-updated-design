import React, {useRef, useState} from 'react';
import {View, Animated} from 'react-native';
import LogIn from '../../components/log-in';
import SignUp from '../../components/sign-up';
import {styles} from './style';

const LoginSignup = () => {
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
            <LogIn toggleAnimation={toggleAnimation} />
            <SignUp toggleAnimation={toggleAnimation} />
          </Animated.View>
        </View>
      </View>
    </>
  );
};

export default LoginSignup;
