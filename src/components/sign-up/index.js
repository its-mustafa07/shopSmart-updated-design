import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  KeyboardAvoidingView,
} from 'react-native';
import {useContext, useState} from 'react';
import {G, Path, Svg} from 'react-native-svg';
import {Formik} from 'formik';
import {object, string} from 'yup';
import CustomInput from '../../utils/custom-input';
import CustomButton from '../../utils/button';
import BackgroundGradient from '../background-gradient/index';
import useStyle, {styles} from './styles';
import {ThemeContext} from '../themes/theme';
import {
  FacebookIcon,
  GoogleIcon,
  KeyIcon,
  LogoIcon,
  MailIcon,
  PersonIcon,
  TwitterIcon,
} from '../../../assets/svg-icons/svgIcons';

const SignUp = ({toggleAnimation}) => {
  const {theme} = useContext(ThemeContext);
  const styles = useStyle();
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState(false);

  const signupSchema = object({
    fullName: string()
      .required('Please enter your name')
      .min(3, 'please enter your name min 3 characters'),
    email: string()
      .trim()
      .email('email must hav @ and .')
      .required('Please enter your email'),
    password: string()
      .trim()
      .required('Password must be required')
      .min(8, 'at least 8 characters')
      .matches(
        /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#\$%\^&\*])[a-zA-Z\d!@#\$%\^&\*]+$/,
        'Password is too simple!',
      ),
    confirmPassword: string().required('password must be same.').matches(),
  });

  return (
    <Formik
      initialValues={{
        fullName: '',
        email: '',
        password: '',
        confirmPassword: '',
      }}
      validateOnMount={false}
      validationSchema={signupSchema}
      onSubmit={values => console.log(values)}>
      {({handleChange, handleBlur, errors, handleSubmit, touched, values}) => (
        <BackgroundGradient style={{height: '100%', width: '100%'}}>
          <SafeAreaView style={styles.signupMainWrapper}>
            <View style={styles.logo}>
              <LogoIcon />
            </View>
            <KeyboardAvoidingView>
              <View style={styles.container}>
                <Text style={styles.headings}>Sign up!</Text>
                <View style={styles.inputsContainer}>
                  <View style={styles.inputBoxx}>
                    {errors.fullName && touched.fullName && (
                      <View style={styles.errorbox}>
                        <Text style={styles.errorMassage}>
                          {errors.fullName}
                        </Text>
                      </View>
                    )}
                    <View style={styles.iconBoxx}>
                      <PersonIcon />
                    </View>
                    <CustomInput
                      placeholder={'Enter your name'}
                      style={styles.inputs}
                      placeholderTextColor={theme.text}
                      // keyboardType="text"
                      onChangeText={handleChange('fullName')}
                      onBlur={handleBlur('fullName')}
                      value={values.fullName}
                    />
                  </View>

                  <View style={styles.inputBoxx}>
                    {errors.email && touched.email && (
                      <View style={styles.errorbox}>
                        <Text style={styles.errorMassage}>{errors.email}</Text>
                      </View>
                    )}
                    <View style={styles.iconBoxx}>
                      <MailIcon />
                    </View>
                    <CustomInput
                      placeholder={'Enter your email'}
                      style={styles.inputs}
                      placeholderTextColor={theme.text}
                      // keyboardType="email"
                      onChangeText={handleChange('email')}
                      onBlur={handleBlur('email')}
                      value={values.email}
                    />
                  </View>

                  <View style={styles.inputBoxx}>
                    {errors.password && touched.password && (
                      <View style={styles.errorbox}>
                        <Text style={styles.errorMassage}>
                          {errors.password}
                        </Text>
                      </View>
                    )}
                    <View style={styles.iconBoxx}>
                      <KeyIcon />
                    </View>
                    <CustomInput
                      placeholder={'Enter your password'}
                      style={styles.inputs}
                      placeholderTextColor={theme.text}
                      secureTextEntry={!showPassword ? true : false}
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

                  <View style={styles.inputBoxx}>
                    {errors.confirmPassword && touched.confirmPassword && (
                      <View style={styles.errorbox}>
                        <Text style={styles.errorMassage}>
                          {errors.confirmPassword}
                        </Text>
                      </View>
                    )}
                    <View style={styles.iconBoxx}>
                      <Svg
                        width="17"
                        height="16"
                        viewBox="0 0 17 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <Path
                          d="M14.9315 1L13.4597 2.47174M13.4597 2.47174L15.6673 4.67936L13.0918 7.25491L10.8842 5.04729M13.4597 2.47174L10.8842 5.04729M7.85973 8.07173C8.23969 8.44663 8.54174 8.89299 8.74849 9.3851C8.95523 9.87722 9.06259 10.4054 9.06438 10.9391C9.06616 11.4729 8.96235 12.0018 8.75891 12.4953C8.55546 12.9888 8.25641 13.4371 7.87897 13.8146C7.50153 14.192 7.05316 14.4911 6.55967 14.6945C6.06618 14.898 5.53732 15.0018 5.00354 15C4.46977 14.9982 3.94162 14.8908 3.4495 14.6841C2.95738 14.4773 2.51103 14.1753 2.13612 13.7953C1.39888 13.032 0.990932 12.0097 1.00015 10.9485C1.00937 9.88728 1.43502 8.87217 2.18543 8.12176C2.93583 7.37136 3.95094 6.94571 5.01213 6.93649C6.07331 6.92727 7.09567 7.33522 7.859 8.07246L7.85973 8.07173ZM7.85973 8.07173L10.8842 5.04729"
                          stroke={theme.primary}
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </Svg>
                    </View>
                    <CustomInput
                      placeholder={'Enter your confirm password'}
                      style={styles.inputs}
                      placeholderTextColor={theme.text}
                      secureTextEntry={!confirmPassword ? true : false}
                      onChangeText={handleChange('confirmPassword')}
                      onBlur={handleBlur('confirmPassword')}
                      value={values.confirmPassword}
                    />
                    {confirmPassword ? (
                      <View>
                        <Svg
                          fill={theme.primary}
                          height="19"
                          width="16"
                          version="1.1"
                          id="Capa_1"
                          viewBox="0 0 488.85 488.85"
                          onPress={() => setConfirmPassword(!confirmPassword)}>
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
                          onPress={() => setConfirmPassword(!confirmPassword)}
                          width="21"
                          height="20"
                          viewBox="0 0 19 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <Path
                            d="M9.12 5.05263L11.7895 7.71368V7.57895C11.7895 6.90893 11.5233 6.26635 11.0495 5.79257C10.5758 5.3188 9.93318 5.05263 9.26316 5.05263H9.12ZM5.49895 5.72632L6.80421 7.03158C6.76211 7.20842 6.73684 7.38526 6.73684 7.57895C6.73684 8.24897 7.00301 8.89155 7.47678 9.36532C7.95056 9.8391 8.59314 10.1053 9.26316 10.1053C9.44842 10.1053 9.63368 10.08 9.81053 10.0379L11.1158 11.3432C10.5516 11.6211 9.92842 11.7895 9.26316 11.7895C8.14646 11.7895 7.07549 11.3459 6.28587 10.5562C5.49624 9.76661 5.05263 8.69565 5.05263 7.57895C5.05263 6.91368 5.22105 6.29053 5.49895 5.72632ZM0.842105 1.06947L2.76211 2.98947L3.14105 3.36842C1.75158 4.46316 0.656842 5.89474 0 7.57895C1.45684 11.2758 5.05263 13.8947 9.26316 13.8947C10.5684 13.8947 11.8147 13.6421 12.9516 13.1874L13.3137 13.5411L15.7726 16L16.8421 14.9305L1.91158 0M9.26316 3.36842C10.3799 3.36842 11.4508 3.81203 12.2404 4.60166C13.0301 5.39128 13.4737 6.46225 13.4737 7.57895C13.4737 8.1179 13.3642 8.64 13.1705 9.11158L15.6379 11.5789C16.9011 10.5263 17.9116 9.14526 18.5263 7.57895C17.0695 3.88211 13.4737 1.26316 9.26316 1.26316C8.08421 1.26316 6.95579 1.47368 5.89474 1.85263L7.72211 3.66316C8.20211 3.47789 8.71579 3.36842 9.26316 3.36842Z"
                            fill={theme.primary}
                            fill-opacity="0.5"
                          />
                        </Svg>
                      </View>
                    )}
                  </View>

                  <CustomButton
                    buttonStyle={styles.buttons}
                    textStyle={styles.buttonsText}
                    onPress={handleSubmit}>
                    Sign Up
                  </CustomButton>
                </View>

                <Text
                  style={[
                    styles.SemiBoldTexts,
                    {
                      color: theme.textAccent,
                    },
                  ]}>
                  Already have an account?
                  <Text
                    onPress={toggleAnimation}
                    style={{
                      color: theme.primary,
                      fontFamily: 'SourceSansPro-SemiBold',
                      fontSize: 18,
                    }}>
                    Sign in.
                  </Text>
                </Text>
              </View>
            </KeyboardAvoidingView>

            <View style={{gap: 25, position: 'fixed', bottom: -50}}>
              <Text style={[styles.SemiBoldTexts]}>
                Log in with social networks
              </Text>
              <View style={{flexDirection: 'row', gap: 10}}>
                <TouchableOpacity style={[styles.socialIconss]}>
                  <FacebookIcon />
                </TouchableOpacity>
                <TouchableOpacity style={[styles.socialIconss]}>
                  <TwitterIcon />
                </TouchableOpacity>
                <TouchableOpacity style={[styles.socialIconss]}>
                  <GoogleIcon />
                </TouchableOpacity>
              </View>
            </View>
          </SafeAreaView>
        </BackgroundGradient>
      )}
    </Formik>
  );
};

export default SignUp;
