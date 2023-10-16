import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useContext, useState} from 'react';
import {G, Path, Svg} from 'react-native-svg';
import {Formik} from 'formik';
import {object, string} from 'yup';
import CustomInput from '../../utils/custom-input';
import CustomButton from '../../utils/button';
import BackgroundGradient from '../background-gradient/index';
import {styles} from './styles';
import {ThemeContext} from '../themes/theme';

const SignUp = ({toggleAnimation}) => {
  const {theme} = useContext(ThemeContext);

  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState(false);

  const signupSchema = object({
    fullName: string().required('Please enter your name'),
    email: string()
      .email('email must hav @ and .')
      .required('Please enter your email'),
    password: string()
      .required('Password must be required')
      .min(8, 'At least one Uppercase, at least 8 characters'),
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
        <BackgroundGradient style={{width: '100%', height: '100%'}}>
          <View style={styles.signupMainWrapper}>
            <View style={styles.container}>
              <Text style={[styles.headings, {color: theme.text}]}>
                Sign up!
              </Text>
              <View style={styles.inputsContainer}>
                <View style={styles.inputBoxx}>
                  <View
                    style={[styles.iconBoxx, {backgroundColor: theme.primary}]}>
                    <Svg
                      width="14"
                      height="15"
                      viewBox="0 0 14 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <Path
                        d="M6.66667 7.77778C7.55072 7.77778 8.39857 7.42659 9.02369 6.80147C9.64881 6.17635 10 5.3285 10 4.44444C10 3.56039 9.64881 2.71254 9.02369 2.08742C8.39857 1.4623 7.55072 1.11111 6.66667 1.11111C5.78261 1.11111 4.93477 1.4623 4.30964 2.08742C3.68452 2.71254 3.33333 3.56039 3.33333 4.44444C3.33333 5.3285 3.68452 6.17635 4.30964 6.80147C4.93477 7.42659 5.78261 7.77778 6.66667 7.77778ZM6.66667 8.88889C5.48793 8.88889 4.35746 8.42064 3.52397 7.58714C2.69047 6.75365 2.22222 5.62318 2.22222 4.44444C2.22222 3.2657 2.69047 2.13524 3.52397 1.30175C4.35746 0.468253 5.48793 0 6.66667 0C7.84541 0 8.97587 0.468253 9.80936 1.30175C10.6429 2.13524 11.1111 3.2657 11.1111 4.44444C11.1111 5.62318 10.6429 6.75365 9.80936 7.58714C8.97587 8.42064 7.84541 8.88889 6.66667 8.88889ZM12.2222 14.4444V12.7778C12.2222 12.3358 12.0466 11.9118 11.7341 11.5993C11.4215 11.2867 10.9976 11.1111 10.5556 11.1111H2.77778C2.33575 11.1111 1.91183 11.2867 1.59927 11.5993C1.28671 11.9118 1.11111 12.3358 1.11111 12.7778V14.4444C1.11111 14.5918 1.05258 14.7331 0.948393 14.8373C0.844206 14.9415 0.702898 15 0.555556 15C0.408213 15 0.266905 14.9415 0.162719 14.8373C0.0585317 14.7331 0 14.5918 0 14.4444V12.7778C0 12.0411 0.292658 11.3345 0.813592 10.8136C1.33453 10.2927 2.04107 10 2.77778 10H10.5556C11.2923 10 11.9988 10.2927 12.5197 10.8136C13.0407 11.3345 13.3333 12.0411 13.3333 12.7778V14.4444C13.3333 14.5918 13.2748 14.7331 13.1706 14.8373C13.0664 14.9415 12.9251 15 12.7778 15C12.6304 15 12.4891 14.9415 12.3849 14.8373C12.2808 14.7331 12.2222 14.5918 12.2222 14.4444Z"
                        fill="#FF8A71"
                      />
                    </Svg>
                  </View>
                  <CustomInput
                    placeholder={'Enter your name'}
                    style={styles.inputs}
                    // keyboardType="text"
                    onChangeText={handleChange('fullName')}
                    onBlur={handleBlur('fullName')}
                    value={values.fullName}
                  />
                </View>
                {errors.fullName && touched.fullName && (
                  <Text style={{color: '#FF8C71'}}>{errors.fullName}</Text>
                )}
                <View style={styles.inputBoxx}>
                  <View
                    style={[styles.iconBoxx, {backgroundColor: theme.primary}]}>
                    <Svg
                      width="17"
                      height="12"
                      viewBox="0 0 17 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <Path
                        d="M15.6 0H1.2C0.88174 0 0.576515 0.126428 0.351472 0.351472C0.126428 0.576515 0 0.88174 0 1.2V10.8C0 11.1183 0.126428 11.4235 0.351472 11.6485C0.576515 11.8736 0.88174 12 1.2 12H15.6C15.9183 12 16.2235 11.8736 16.4485 11.6485C16.6736 11.4235 16.8 11.1183 16.8 10.8V1.2C16.8 0.88174 16.6736 0.576515 16.4485 0.351472C16.2235 0.126428 15.9183 0 15.6 0ZM14.28 1.2L8.4 5.268L2.52 1.2H14.28ZM1.2 10.8V1.746L8.058 6.492C8.15844 6.56168 8.27776 6.59901 8.4 6.59901C8.52224 6.59901 8.64156 6.56168 8.742 6.492L15.6 1.746V10.8H1.2Z"
                        fill="#FF9F87"
                      />
                    </Svg>
                  </View>
                  <CustomInput
                    placeholder={'Enter your email'}
                    style={styles.inputs}
                    // keyboardType="email"
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}
                  />
                </View>
                {errors.email && touched.email && (
                  <Text style={{color: '#FF8C71'}}>{errors.email}</Text>
                )}
                <View style={styles.inputBoxx}>
                  <View
                    style={[styles.iconBoxx, {backgroundColor: theme.primary}]}>
                    <Svg
                      width="17"
                      height="16"
                      viewBox="0 0 17 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <Path
                        d="M14.9315 1L13.4597 2.47174M13.4597 2.47174L15.6673 4.67936L13.0918 7.25491L10.8842 5.04729M13.4597 2.47174L10.8842 5.04729M7.85973 8.07173C8.23969 8.44663 8.54174 8.89299 8.74849 9.3851C8.95523 9.87722 9.06259 10.4054 9.06438 10.9391C9.06616 11.4729 8.96235 12.0018 8.75891 12.4953C8.55546 12.9888 8.25641 13.4371 7.87897 13.8146C7.50153 14.192 7.05316 14.4911 6.55967 14.6945C6.06618 14.898 5.53732 15.0018 5.00354 15C4.46977 14.9982 3.94162 14.8908 3.4495 14.6841C2.95738 14.4773 2.51103 14.1753 2.13612 13.7953C1.39888 13.032 0.990932 12.0097 1.00015 10.9485C1.00937 9.88728 1.43502 8.87217 2.18543 8.12176C2.93583 7.37136 3.95094 6.94571 5.01213 6.93649C6.07331 6.92727 7.09567 7.33522 7.859 8.07246L7.85973 8.07173ZM7.85973 8.07173L10.8842 5.04729"
                        stroke="#FF9F87"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </Svg>
                  </View>
                  <CustomInput
                    placeholder={'Enter your password'}
                    style={styles.inputs}
                    secureTextEntry={showPassword ? true : false}
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    value={values.password}
                  />
                  {showPassword ? (
                    <View>
                      <Svg
                        fill="#000000"
                        height="19"
                        width="16"
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
                        width="19"
                        height="16"
                        viewBox="0 0 19 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        onPress={() => setShowPassword(!showPassword)}>
                        <Path
                          d="M9.12 5.05263L11.7895 7.71368V7.57895C11.7895 6.90893 11.5233 6.26635 11.0495 5.79257C10.5758 5.3188 9.93318 5.05263 9.26316 5.05263H9.12ZM5.49895 5.72632L6.80421 7.03158C6.76211 7.20842 6.73684 7.38526 6.73684 7.57895C6.73684 8.24897 7.00301 8.89155 7.47678 9.36532C7.95056 9.8391 8.59314 10.1053 9.26316 10.1053C9.44842 10.1053 9.63368 10.08 9.81053 10.0379L11.1158 11.3432C10.5516 11.6211 9.92842 11.7895 9.26316 11.7895C8.14646 11.7895 7.07549 11.3459 6.28587 10.5562C5.49624 9.76661 5.05263 8.69565 5.05263 7.57895C5.05263 6.91368 5.22105 6.29053 5.49895 5.72632ZM0.842105 1.06947L2.76211 2.98947L3.14105 3.36842C1.75158 4.46316 0.656842 5.89474 0 7.57895C1.45684 11.2758 5.05263 13.8947 9.26316 13.8947C10.5684 13.8947 11.8147 13.6421 12.9516 13.1874L13.3137 13.5411L15.7726 16L16.8421 14.9305L1.91158 0M9.26316 3.36842C10.3799 3.36842 11.4508 3.81203 12.2404 4.60166C13.0301 5.39128 13.4737 6.46225 13.4737 7.57895C13.4737 8.1179 13.3642 8.64 13.1705 9.11158L15.6379 11.5789C16.9011 10.5263 17.9116 9.14526 18.5263 7.57895C17.0695 3.88211 13.4737 1.26316 9.26316 1.26316C8.08421 1.26316 6.95579 1.47368 5.89474 1.85263L7.72211 3.66316C8.20211 3.47789 8.71579 3.36842 9.26316 3.36842Z"
                          fill="black"
                          fill-opacity="0.5"
                        />
                      </Svg>
                    </View>
                  )}
                </View>
                {errors.password && touched.password && (
                  <Text style={{color: '#FF8C71'}}>{errors.password}</Text>
                )}
                <View style={styles.inputBoxx}>
                  <View
                    style={[styles.iconBoxx, {backgroundColor: theme.primary}]}>
                    <Svg
                      width="17"
                      height="16"
                      viewBox="0 0 17 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <Path
                        d="M14.9315 1L13.4597 2.47174M13.4597 2.47174L15.6673 4.67936L13.0918 7.25491L10.8842 5.04729M13.4597 2.47174L10.8842 5.04729M7.85973 8.07173C8.23969 8.44663 8.54174 8.89299 8.74849 9.3851C8.95523 9.87722 9.06259 10.4054 9.06438 10.9391C9.06616 11.4729 8.96235 12.0018 8.75891 12.4953C8.55546 12.9888 8.25641 13.4371 7.87897 13.8146C7.50153 14.192 7.05316 14.4911 6.55967 14.6945C6.06618 14.898 5.53732 15.0018 5.00354 15C4.46977 14.9982 3.94162 14.8908 3.4495 14.6841C2.95738 14.4773 2.51103 14.1753 2.13612 13.7953C1.39888 13.032 0.990932 12.0097 1.00015 10.9485C1.00937 9.88728 1.43502 8.87217 2.18543 8.12176C2.93583 7.37136 3.95094 6.94571 5.01213 6.93649C6.07331 6.92727 7.09567 7.33522 7.859 8.07246L7.85973 8.07173ZM7.85973 8.07173L10.8842 5.04729"
                        stroke="#FF9F87"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </Svg>
                  </View>
                  <CustomInput
                    placeholder={'Enter your confirm password'}
                    style={styles.inputs}
                    secureTextEntry={confirmPassword ? true : false}
                    onChangeText={handleChange('confirmPassword')}
                    onBlur={handleBlur('confirmPassword')}
                    value={values.confirmPassword}
                  />
                  {confirmPassword ? (
                    <View>
                      <Svg
                        fill="#000000"
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
                        width="19"
                        height="16"
                        viewBox="0 0 19 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <Path
                          d="M9.12 5.05263L11.7895 7.71368V7.57895C11.7895 6.90893 11.5233 6.26635 11.0495 5.79257C10.5758 5.3188 9.93318 5.05263 9.26316 5.05263H9.12ZM5.49895 5.72632L6.80421 7.03158C6.76211 7.20842 6.73684 7.38526 6.73684 7.57895C6.73684 8.24897 7.00301 8.89155 7.47678 9.36532C7.95056 9.8391 8.59314 10.1053 9.26316 10.1053C9.44842 10.1053 9.63368 10.08 9.81053 10.0379L11.1158 11.3432C10.5516 11.6211 9.92842 11.7895 9.26316 11.7895C8.14646 11.7895 7.07549 11.3459 6.28587 10.5562C5.49624 9.76661 5.05263 8.69565 5.05263 7.57895C5.05263 6.91368 5.22105 6.29053 5.49895 5.72632ZM0.842105 1.06947L2.76211 2.98947L3.14105 3.36842C1.75158 4.46316 0.656842 5.89474 0 7.57895C1.45684 11.2758 5.05263 13.8947 9.26316 13.8947C10.5684 13.8947 11.8147 13.6421 12.9516 13.1874L13.3137 13.5411L15.7726 16L16.8421 14.9305L1.91158 0M9.26316 3.36842C10.3799 3.36842 11.4508 3.81203 12.2404 4.60166C13.0301 5.39128 13.4737 6.46225 13.4737 7.57895C13.4737 8.1179 13.3642 8.64 13.1705 9.11158L15.6379 11.5789C16.9011 10.5263 17.9116 9.14526 18.5263 7.57895C17.0695 3.88211 13.4737 1.26316 9.26316 1.26316C8.08421 1.26316 6.95579 1.47368 5.89474 1.85263L7.72211 3.66316C8.20211 3.47789 8.71579 3.36842 9.26316 3.36842Z"
                          fill="black"
                          fill-opacity="0.5"
                        />
                      </Svg>
                    </View>
                  )}
                </View>
                {errors.confirmPassword && touched.confirmPassword && (
                  <Text style={{color: '#FF8C71'}}>
                    {errors.confirmPassword}
                  </Text>
                )}
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
            <View style={{gap: 25, position: 'absolute', bottom: 50}}>
              <Text
                style={[
                  styles.SemiBoldTexts,
                  {
                    color: theme.textAccent,
                  },
                ]}>
                Log in with social networks
              </Text>
              <View style={{flexDirection: 'row', gap: 10}}>
                <TouchableOpacity
                  style={[
                    styles.socialIconss,
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
                    styles.socialIconss,
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
                    styles.socialIconss,
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
          </View>
        </BackgroundGradient>
      )}
    </Formik>
  );
};

export default SignUp;
