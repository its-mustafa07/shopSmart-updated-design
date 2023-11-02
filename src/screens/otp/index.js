import React, {useState, useRef, useContext} from 'react';
import {View, TextInput, SafeAreaView, Text} from 'react-native';
import BackgroundGradient from '../../components/background-gradient';
import {useStyles} from './styles';
import {ThemeContext} from '../../components/themes/theme';
import CustomInput from '../../utils/custom-input';

const OTPVerification = () => {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const otpInputRefs = useRef([]);
  const styles = useStyles();
  const {theme} = useContext(ThemeContext);

  const handleOtpInputChange = (index, value) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    if (!value && index > 0) {
      otpInputRefs.current[index - 1].focus();
    }

    if (value && index < otp.length - 1) {
      otpInputRefs.current[index + 1].focus();
    }
  };

  return (
    <>
      <BackgroundGradient style={{flex: 1}}>
        <SafeAreaView style={styles.container}>
          <Text style={styles.OtpHeading}>Verify your phone number</Text>
          <Text style={styles.inputsHeading}>Enter your OTP code here.</Text>
          <View style={styles.inputContainer}>
            {[0, 1, 2, 3, 4, 5].map(index => {
              return (
                <TextInput
                  ref={input => (otpInputRefs.current[index] = input)}
                  style={[styles.inputView, theme.boxShadow]}
                  key={index}
                  maxLength={1}
                  keyboardType="number-pad"
                  onChangeText={value => handleOtpInputChange(index, value)}
                />
              );
            })}
          </View>
          <Text>
            Didn’t receive the OTP? &nbsp;
            <Text
              style={{
                color: theme.primary,
                fontFamily: 'SourceSansPro-Regular',
                fontSize: 18,
              }}>
              {' '}
              Resend.
            </Text>
          </Text>
        </SafeAreaView>
      </BackgroundGradient>
    </>
  );
};

export default OTPVerification;
