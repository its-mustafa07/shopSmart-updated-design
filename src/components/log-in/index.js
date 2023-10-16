import React, {useContext, useState} from 'react';
import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
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

const LogIn = ({toggleAnimation}) => {
  const [checkboxState, setCheckboxState] = useState(false);
  const {theme} = useContext(ThemeContext);

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
        <BackgroundGradient style={{width: '100%', height: '100%'}}>
          <View style={styles.loginMainWrapper}>
            {/* <View style={styles.loginMainWrapper}> */}
            <View style={styles.container}>
              <Text style={[styles.heading, {color: theme.textSecondary}]}>
                Welcome to ShopSmart!
              </Text>
              <View style={styles.inputBox}>
                <View
                  style={[styles.iconBox, {backgroundColor: theme.secondary}]}>
                  <Svg
                    width="17"
                    height="12"
                    viewBox="0 0 17 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <Path
                      d="M15.6 0H1.2C0.88174 0 0.576515 0.126428 0.351472 0.351472C0.126428 0.576515 0 0.88174 0 1.2V10.8C0 11.1183 0.126428 11.4235 0.351472 11.6485C0.576515 11.8736 0.88174 12 1.2 12H15.6C15.9183 12 16.2235 11.8736 16.4485 11.6485C16.6736 11.4235 16.8 11.1183 16.8 10.8V1.2C16.8 0.88174 16.6736 0.576515 16.4485 0.351472C16.2235 0.126428 15.9183 0 15.6 0ZM14.28 1.2L8.4 5.268L2.52 1.2H14.28ZM1.2 10.8V1.746L8.058 6.492C8.15844 6.56168 8.27776 6.59901 8.4 6.59901C8.52224 6.59901 8.64156 6.56168 8.742 6.492L15.6 1.746V10.8H1.2Z"
                      fill={theme.primary}
                    />
                  </Svg>
                </View>
                <CustomInput
                  placeholder={'Enter your username or email'}
                  style={[styles.input, {color: theme.textAccent}]}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                />
              </View>
              {errors.email && touched.email && (
                <Text style={{color: '#FF8C71'}}>{errors.email}</Text>
              )}
              <View style={styles.inputBox}>
                <View
                  style={[styles.iconBox, {backgroundColor: theme.secondary}]}>
                  <Svg
                    width="17"
                    height="16"
                    viewBox="0 0 17 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <Path
                      d="M14.9315 1L13.4597 2.47174M13.4597 2.47174L15.6673 4.67936L13.0918 7.25491L10.8842 5.04729M13.4597 2.47174L10.8842 5.04729M7.85973 8.07173C8.23969 8.44663 8.54174 8.89299 8.74849 9.3851C8.95523 9.87722 9.06259 10.4054 9.06438 10.9391C9.06616 11.4729 8.96235 12.0018 8.75891 12.4953C8.55546 12.9888 8.25641 13.4371 7.87897 13.8146C7.50153 14.192 7.05316 14.4911 6.55967 14.6945C6.06618 14.898 5.53732 15.0018 5.00354 15C4.46977 14.9982 3.94162 14.8908 3.4495 14.6841C2.95738 14.4773 2.51103 14.1753 2.13612 13.7953C1.39888 13.032 0.990932 12.0097 1.00015 10.9485C1.00937 9.88728 1.43502 8.87217 2.18543 8.12176C2.93583 7.37136 3.95094 6.94571 5.01213 6.93649C6.07331 6.92727 7.09567 7.33522 7.859 8.07246L7.85973 8.07173ZM7.85973 8.07173L10.8842 5.04729"
                      stroke={theme.primary}
                      stroke-width="6"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </Svg>
                </View>
                <CustomInput
                  placeholder={'Enter your Password'}
                  style={[styles.input, {color: theme.textAccent}]}
                  secureTextEntry={true}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                />
              </View>
              {errors.password && touched.password && (
                <Text style={{color: '#FF8C71'}}>{errors.password}</Text>
              )}
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
                          : theme.secondary,
                      },
                    ]}
                    onPress={() => setCheckboxState(!checkboxState)}>
                    {checkboxState ? (
                      <Svg
                        width="18"
                        height="15"
                        viewBox="0 0 18 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <Path
                          d="M2 6L6.12698 12L16.4444 2"
                          stroke="#FF9F87"
                          stroke-width="4.01587"
                        />
                      </Svg>
                    ) : (
                      ''
                    )}
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
                <Text
                  style={[
                    styles.SemiBoldText,
                    {
                      color: theme.textAccent,
                    },
                  ]}>
                  No account?
                </Text>
                <TouchableOpacity onPress={toggleAnimation}>
                  <Text
                    style={[
                      {
                        color: theme.primary,
                      },
                      styles.SemiBoldText,
                    ]}>
                    Register now
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={{gap: 25, position: 'absolute', bottom: 50}}>
              <Text
                style={[
                  styles.SemiBoldText,
                  {
                    color: theme.textPrimary,
                  },
                ]}>
                Log in with social networks
              </Text>
              <View style={{flexDirection: 'row', gap: 10}}>
                <TouchableOpacity
                  style={[
                    styles.socialIcons,
                    {backgroundColor: theme.primary},
                  ]}>
                  <Svg
                    width="8"
                    height="14"
                    viewBox="0 0 8 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <Path
                      d="M4.9 8.05H6.65L7.35 5.25H4.9V3.85C4.9 3.129 4.9 2.45 6.3 2.45H7.35V0.0980001C7.1218 0.0679001 6.2601 0 5.3501 0C3.4496 0 2.1 1.1599 2.1 3.29V5.25H0V8.05H2.1V14H4.9V8.05Z"
                      fill="black"
                    />
                  </Svg>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.socialIcons,
                    {backgroundColor: theme.primary},
                  ]}>
                  <Svg
                    width="18"
                    height="14"
                    viewBox="0 0 18 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <Path
                      d="M17.2282 1.64706C16.5941 1.93529 15.9106 2.12471 15.2024 2.21529C15.9271 1.77882 16.4871 1.08706 16.7506 0.255294C16.0671 0.667059 15.3094 0.955294 14.5106 1.12C13.86 0.411765 12.9459 0 11.9082 0C9.97294 0 8.39176 1.58118 8.39176 3.53294C8.39176 3.81294 8.42471 4.08471 8.48235 4.34C5.55059 4.19177 2.94 2.78353 1.20235 0.650588C0.897647 1.16941 0.724706 1.77882 0.724706 2.42118C0.724706 3.64824 1.34235 4.73529 2.29765 5.35294C1.71294 5.35294 1.16941 5.18824 0.691765 4.94118V4.96588C0.691765 6.67882 1.91059 8.11176 3.52471 8.43294C3.00648 8.57476 2.46243 8.59449 1.93529 8.49059C2.15897 9.19263 2.59703 9.80692 3.1879 10.2471C3.77876 10.6873 4.49272 10.9313 5.22941 10.9447C3.98064 11.9333 2.4327 12.4677 0.84 12.46C0.56 12.46 0.28 12.4435 0 12.4106C1.56471 13.4153 3.42588 14 5.41882 14C11.9082 14 15.4741 8.61412 15.4741 3.94471C15.4741 3.78824 15.4741 3.64 15.4659 3.48353C16.1576 2.98941 16.7506 2.36353 17.2282 1.64706Z"
                      fill="black"
                    />
                  </Svg>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.socialIcons,
                    {backgroundColor: theme.primary},
                  ]}>
                  <Svg
                    width="23"
                    height="14"
                    viewBox="0 0 23 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <Path
                      d="M13.6085 5.99725C13.6753 6.3506 13.7231 6.70396 13.7231 7.16231C13.7231 11.1637 11.0395 14 7 14C3.13235 14 0 10.8677 0 7C0 3.13232 3.13235 0 7 0C8.89088 0 10.4666 0.687568 11.6889 1.83356L9.78852 3.65757C9.27281 3.16097 8.36562 2.57844 7 2.57844C4.61256 2.57844 2.66438 4.55525 2.66438 7C2.66438 9.44475 4.61256 11.4216 7 11.4216C9.76941 11.4216 10.8104 9.42565 10.9727 8.40379H7V5.99721H13.6085V5.99725ZM20.3681 6.23193V4.2H18.3264V6.23193H16.2944V8.27363H18.3264V10.3056H20.3681V8.27363H22.4V6.23193H20.3681Z"
                      fill="black"
                    />
                  </Svg>
                </TouchableOpacity>
              </View>
            </View>
            {/* </View> */}
            {/* </BackgroundColor> */}
          </View>
        </BackgroundGradient>
      )}
    </Formik>
  );
};

export default LogIn;
