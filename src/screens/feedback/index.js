import {View, Text, ScrollView} from 'react-native';
import {useContext, useState} from 'react';
import React from 'react';
import BackgroundGradient from '../../components/background-gradient';
import {UseStyles} from './style';
import UserProfile from '../../components/user-profile';
import CustomInput from '../../utils/custom-input';
import {EditIcon} from '../../../assets/svg-icons/svgIcons';
import CustomButton from '../../utils/button';
import {ThemeContext} from '../../components/themes/theme';
import {object, string} from 'yup';
import {Formik} from 'formik';
export default function FeedBack() {
  const {theme} = useContext(ThemeContext);
  const styles = UseStyles();

  const [InputFocus, setInputFocus] = useState(false);
  const [TextAreaFocus, setTextAreaFocus] = useState(false);
  const feedbackSchema = object({
    title: string()
      .min(3, 'At least 3 characters')
      .required('Please enter your title'),
    message: string()
      .required('message must be required')
      .min(8, 'At least 8 characters'),
  });
  return (
    <Formik
      initialValues={{title: '', message: ''}}
      validateOnMount={true}
      validationSchema={feedbackSchema}
      onSubmit={values => console.log(values)}>
      {({handleChange, handleBlur, handleSubmit, values, errors, touched}) => (
        <BackgroundGradient style={[styles.wrapper]}>
          <ScrollView showsHorizontalScrollIndicator={false}>
            <View style={{alignItems: 'center'}}>
              <Text style={styles.heading}>FeedBack</Text>
              <View style={styles.userFeedbackWrapper}>
                <View style={styles.userProfileWrapper}>
                  <Text style={styles.text}>You are logged in as</Text>
                  <UserProfile />
                </View>
                <View style={{gap: 12}}>
                  <Text style={styles.text}>
                    Give feedback or contact with us
                  </Text>
                  <View
                    style={[
                      styles.inputMain,
                      InputFocus && styles.inputMainFocused,
                    ]}>
                    <View style={styles.editIconWrapper}>
                      <EditIcon />
                    </View>
                    <CustomInput
                      placeholder={'Title'}
                      style={[styles.inputStyle]}
                      placeholderTextColor={theme.textAccent}
                      onFocus={() => setInputFocus(true)}
                      onChangeText={handleChange('title')}
                      // onBlur={() => setInputFocus(false)}
                      onBlur={handleBlur('title')}
                      // onBlur={() => {
                      //   handleBlur('title');
                      //   setInputFocus(false);
                      // }}
                      value={values.title}
                    />
                  </View>
                  {errors.title && touched.title && (
                    <Text style={{color: '#FF8C71'}}>{errors.title}</Text>
                  )}
                </View>
              </View>
              <CustomInput
                placeholder={'Description ....'}
                style={[
                  styles.messageInput,
                  TextAreaFocus && styles.textAreaFocused,
                ]}
                placeholderTextColor={theme.textAccent}
                onFocus={() => setTextAreaFocus(true)}
                // onBlur={() => setTextAreaFocus(false)}
                onChangeText={handleChange('message')}
                // onBlur={handleBlur('message')}
                onBlur={() => {
                  setTextAreaFocus(false);
                  handleBlur('message');
                }}
                value={values.message}
              />
            </View>
            {errors.message && touched.message && (
              <Text style={{color: '#FF8C71'}}>{errors.message}</Text>
            )}
            <View style={styles.buttonWrapper}>
              <CustomButton buttonStyle={styles.button}>send</CustomButton>
            </View>
          </ScrollView>
        </BackgroundGradient>
      )}
    </Formik>
  );
}
