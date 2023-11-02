import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import BackgroundGradient from '../../components/background-gradient';
// import {useStyles} from './styles';
import CustomInput from '../../utils/custom-input';
import {useContext, useRef, useState} from 'react';
import {useStyles} from './styles';
import {ThemeContext} from '../../components/themes/theme';

const OTPVerification = () => {
  const styles = useStyles();
  const {theme} = useContext(ThemeContext);
  const inp1 = useRef();
  const inp2 = useRef();
  const inp3 = useRef();
  const inp4 = useRef();
  const inp5 = useRef();
  const inp6 = useRef();
  const [otp1, setOtp1] = useState('');
  const [otp2, setOtp2] = useState('');
  const [otp3, setOtp3] = useState('');
  const [otp4, setOtp4] = useState('');
  const [otp5, setOtp5] = useState('');
  const [otp6, setOtp6] = useState('');
  return (
    <BackgroundGradient style={{flex: 1}}>
      <View style={styles.container}>
        <Text style={styles.OtpHeading}>Verify your phone number</Text>
        <Text style={styles.inputsHeading}>Enter your OTP code here.</Text>
        <View style={styles.inputContainer}>
          <CustomInput
            keyboardType="number-pad"
            ref={inp1}
            style={[styles.inputView, theme.boxShadow]}
            maxLength={1}
            value={otp1}
            onChangeText={txt => {
              setOtp1(txt);
              if (txt.length >= 1) {
                inp2.current.focus();
              } else if (txt.length < 1) {
                inp1.current.focus();
              }
            }}
          />
          <CustomInput
            keyboardType="number-pad"
            ref={inp2}
            style={[styles.inputView, theme.boxShadow]}
            maxLength={1}
            value={otp2}
            onChangeText={txt => {
              setOtp2(txt);
              if (txt.length >= 1) {
                inp3.current.focus();
              } else if (txt.length < 1) {
                inp2.current.focus();
              }
            }}
          />
          <CustomInput
            keyboardType="number-pad"
            ref={inp3}
            style={[styles.inputView, theme.boxShadow]}
            maxLength={1}
            value={otp3}
            onChangeText={txt => {
              setOtp3(txt);
              if (txt.length >= 1) {
                inp4.current.focus();
              } else if (txt.length < 1) {
                inp3.current.focus();
              }
            }}
          />
          <CustomInput
            keyboardType="number-pad"
            ref={inp4}
            style={[styles.inputView, theme.boxShadow]}
            maxLength={1}
            value={otp4}
            onChangeText={txt => {
              setOtp4(txt);
              if (txt.length >= 1) {
                inp5.current.focus();
              } else if (txt.length < 1) {
                inp4.current.focus();
              }
            }}
          />
          <CustomInput
            keyboardType="number-pad"
            ref={inp5}
            style={[styles.inputView, theme.boxShadow]}
            maxLength={1}
            value={otp5}
            onChangeText={txt => {
              setOtp5(txt);
              if (txt.length >= 1) {
                inp6.current.focus();
              } else if (txt.length < 1) {
                inp5.current.focus();
              }
            }}
          />
          <CustomInput
            keyboardType="number-pad"
            ref={inp6}
            style={[styles.inputView, theme.boxShadow]}
            maxLength={1}
            value={otp6}
            onChangeText={txt => {
              setOtp6(txt);
              if (txt.length >= 1) {
                inp6.current.focus();
              } else if (txt.length < 1) {
                inp5.current.focus();
              }
            }}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 5,
          }}>
          <Text style={styles.inputsHeading}>Didn’t receive the OTP?</Text>
          <TouchableOpacity>
            <Text style={styles.resendBtn}>Resend.</Text>
          </TouchableOpacity>
        </View>
      </View>
    </BackgroundGradient>
  );
};
export default OTPVerification;
