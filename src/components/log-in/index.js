import React, {useContext, useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import {Svg, Path, G} from 'react-native-svg';
// import BackgroundColor from '../utils/background-color/backgroundColor';
// import LinearGradient from 'react-native-linear-gradient';
import {Formik} from 'formik';
import {object, string} from 'yup';
import CustomInput from '../../utils/custom-input';
import CustomButton from '../../utils/button';
import BackgroundGradient from '../background-gradient';
import {styles} from './styles';
import {ThemeContext} from '../themes/theme';
import {
  FacebookIcon,
  FillChecbox,
  GoogleIcon,
  KeyIcon,
  LogoIcon,
  MailIcon,
  TwitterIcon,
} from '../../../assets/svg-icons/svgIcons';
import useStyle from './styles';

const LogIn = ({toggleAnimation}) => {
  const [showPassword, setShowPassword] = useState(false);

  const [checkboxState, setCheckboxState] = useState(false);
  const {theme} = useContext(ThemeContext);
  const styles = useStyle();

  const loginSchema = object({
    email: string()
      .email('email must have @ and .')
      .trim()
      .required('Please enter your email'),
    password: string()
      .required('Password must be required')
      .trim()
      .min(8, 'at least 8 characters')
      .matches(
        /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#\$%\^&\*])[a-zA-Z\d!@#\$%\^&\*]+$/,
        'Password is too simple!',
      ),
  });
  return (
    <Formik
      initialValues={{email: '', password: ''}}
      validateOnMount={true}
      validationSchema={loginSchema}
      onSubmit={values => console.log(values)}>
      {({handleChange, handleBlur, handleSubmit, values, errors, touched}) => (
        <BackgroundGradient style={{height: '100%', width: '100%'}}>
          <KeyboardAvoidingView
            behavior="height"
            style={styles.loginMainWrapper}>
            <View style={styles.logo}>
              <LogoIcon />
            </View>
            <View style={styles.container}>
              <Text style={styles.heading}>Welcome to ShopSmart!</Text>
              <View style={[styles.inputBox]}>
                {errors.email && touched.email && (
                  <View style={styles.errorbox}>
                    <Text style={styles.errorMassage}>{errors.email}</Text>
                  </View>
                )}
                <View style={styles.iconBox}>
                  <MailIcon />
                </View>
                <CustomInput
                  placeholder={'Enter your username or email'}
                  style={styles.input}
                  placeholderTextColor={theme.text}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                />
              </View>

              <View style={styles.inputBox}>
                {errors.password && touched.password && (
                  <View style={styles.errorbox}>
                    <Text style={styles.errorMassage}>{errors.password}</Text>
                  </View>
                )}
                <View style={styles.iconBox}>
                  <KeyIcon />
                </View>
                <CustomInput
                  placeholder={'Enter your Password'}
                  style={styles.input}
                  placeholderTextColor={theme.text}
                  secureTextEntry={showPassword ? false : true}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                />
                {showPassword ? (
                  <View>
                    <Svg
                      fill={theme.primary}
                      height="21"
                      width="20"
                      version="1.1"
                      id="Capa_1"
                      viewBox="0 0 488.85 488.85"
                      onPress={() => setShowPassword(!showPassword)}>
                      <G>
                        <Path
                          d="M244.425,98.725c-93.4,0-178.1,51.1-240.6,134.1c-5.1,6.8-5.1,16.3,0,23.1c62.5,83.1,147.2,134.2,240.6,134.2
                                    s178.1-51.1,240.6-134.1c5.1-6.8,5.1-16.3,0-23.1C422.525,149.825,337.825,98.725,244.425,98.725z M251.125,347.025
                                    c-62,3.9-113.2-47.2-109.3-109.3c3.2-51.2,44.7-92.7,95.9-95.9c62-3.9,113.2,47.2,109.3,109.3
                                    C343.725,302.225,302.225,343.725,251.125,347.025z M248.025,299.625c-33.4,2.1-61-25.4-58.8-58.8c1.7-27.6,24.1-49.9,51.7-51.7
                                    c33.4-2.1,61,25.4,58.8,58.8C297.925,275.625,275.525,297.925,248.025,299.625z"
                        />
                      </G>
                    </Svg>
                  </View>
                ) : (
                  <View>
                    <Svg
                      width="21"
                      height="16"
                      viewBox="0 0 19 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      onPress={() => setShowPassword(!showPassword)}>
                      <Path
                        d="M9.12 5.05263L11.7895 7.71368V7.57895C11.7895 6.90893 11.5233 6.26635 11.0495 5.79257C10.5758 5.3188 9.93318 5.05263 9.26316 5.05263H9.12ZM5.49895 5.72632L6.80421 7.03158C6.76211 7.20842 6.73684 7.38526 6.73684 7.57895C6.73684 8.24897 7.00301 8.89155 7.47678 9.36532C7.95056 9.8391 8.59314 10.1053 9.26316 10.1053C9.44842 10.1053 9.63368 10.08 9.81053 10.0379L11.1158 11.3432C10.5516 11.6211 9.92842 11.7895 9.26316 11.7895C8.14646 11.7895 7.07549 11.3459 6.28587 10.5562C5.49624 9.76661 5.05263 8.69565 5.05263 7.57895C5.05263 6.91368 5.22105 6.29053 5.49895 5.72632ZM0.842105 1.06947L2.76211 2.98947L3.14105 3.36842C1.75158 4.46316 0.656842 5.89474 0 7.57895C1.45684 11.2758 5.05263 13.8947 9.26316 13.8947C10.5684 13.8947 11.8147 13.6421 12.9516 13.1874L13.3137 13.5411L15.7726 16L16.8421 14.9305L1.91158 0M9.26316 3.36842C10.3799 3.36842 11.4508 3.81203 12.2404 4.60166C13.0301 5.39128 13.4737 6.46225 13.4737 7.57895C13.4737 8.1179 13.3642 8.64 13.1705 9.11158L15.6379 11.5789C16.9011 10.5263 17.9116 9.14526 18.5263 7.57895C17.0695 3.88211 13.4737 1.26316 9.26316 1.26316C8.08421 1.26316 6.95579 1.47368 5.89474 1.85263L7.72211 3.66316C8.20211 3.47789 8.71579 3.36842 9.26316 3.36842Z"
                        fill={theme.primary}
                        fill-opacity="0.5"
                      />
                    </Svg>
                  </View>
                )}
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <View style={{flexDirection: 'row', gap: 10}}>
                  <TouchableOpacity
                    style={[
                      styles.checkbox,
                      {
                        borderColor: checkboxState
                          ? theme.primary
                          : theme.primary,
                      },
                    ]}
                    onPress={() => setCheckboxState(!checkboxState)}>
                    {checkboxState ? <FillChecbox /> : ''}
                  </TouchableOpacity>
                  <Text
                    style={[
                      styles.SemiBoldText,
                      {
                        color: theme.textAccent,
                      },
                    ]}>
                    Remember me
                  </Text>
                </View>
                <Text
                  style={{
                    fontFamily: 'SourceSansPro-SemiBold',
                    color: theme.primary,
                    fontSize: 18,
                  }}>
                  Lost your password?
                </Text>
              </View>
              <CustomButton
                buttonStyle={styles.button}
                textStyle={styles.buttonText}
                onPress={handleSubmit}>
                Sign In
              </CustomButton>
              <View style={{flexDirection: 'row', gap: 5}}>
                <Text style={styles.SemiBoldText}>No account?</Text>

                <Text
                  onPress={toggleAnimation}
                  style={[styles.SemiBoldText, {color: theme.primary}]}>
                  Register now
                </Text>
              </View>
            </View>
            <View style={{gap: 25, position: 'fixed', bottom: -150}}>
              <Text style={styles.SemiBoldText}>
                Log in with social networks
              </Text>
              <View style={{flexDirection: 'row', gap: 10}}>
                <TouchableOpacity style={styles.socialIcons}>
                  <FacebookIcon />
                </TouchableOpacity>
                <TouchableOpacity style={styles.socialIcons}>
                  <TwitterIcon />
                </TouchableOpacity>
                <TouchableOpacity style={styles.socialIcons}>
                  <GoogleIcon />
                </TouchableOpacity>
              </View>
            </View>
          </KeyboardAvoidingView>
        </BackgroundGradient>
      )}
    </Formik>
  );
};

export default LogIn;
