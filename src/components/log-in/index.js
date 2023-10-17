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
import {Svg, Path} from 'react-native-svg';
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
  const [checkboxState, setCheckboxState] = useState(false);
  const {theme} = useContext(ThemeContext);
  const styles = useStyle();

  const loginSchema = object({
    email: string()
      .email('email must have @ and .')
      .required('Please enter your email'),
    password: string()
      .required('Password must be required')
      .min(8, 'At least one Uppercase, at least 8 characters'),
  });
  return (
    <Formik
      initialValues={{email: '', password: ''}}
      validateOnMount={true}
      validationSchema={loginSchema}
      onSubmit={values => console.log(values)}>
      {({handleChange, handleBlur, handleSubmit, values, errors, touched}) => (
        <BackgroundGradient style={{flex: 1}}>
          <KeyboardAvoidingView
            behavior="height"
            style={styles.loginMainWrapper}>
            <View style={styles.logo}>
              <LogoIcon />
            </View>
            <View style={styles.container}>
              <Text style={styles.heading}>Welcome to ShopSmart!</Text>
              <View style={styles.inputBox}>
                <View style={styles.iconBox}>
                  <MailIcon />
                </View>
                <CustomInput
                  placeholder={'Enter your username or email'}
                  style={styles.input}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                />
                {errors.email && touched.email && (
                  <Text
                    style={{
                      color: theme.primary,
                      position: 'absolute',
                      bottom: 0,
                      left: '25%',
                    }}>
                    {errors.email}
                  </Text>
                )}
              </View>

              <View style={styles.inputBox}>
                <View style={styles.iconBox}>
                  <KeyIcon />
                </View>
                <CustomInput
                  placeholder={'Enter your Password'}
                  style={styles.input}
                  secureTextEntry={true}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                />
                {errors.password && touched.password && (
                  <Text
                    style={{
                      color: theme.primary,
                      position: 'absolute',
                      left: '25%',
                      bottom: 0,
                    }}>
                    {errors.password}
                  </Text>
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
