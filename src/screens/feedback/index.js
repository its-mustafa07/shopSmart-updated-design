import {
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
} from 'react-native';
import {useContext} from 'react';
import React from 'react';
import BackgroundGradient from '../../components/background-gradient';
import {UseStyles} from './style';
import UserProfile from '../../components/user-profile';
import CustomInput from '../../utils/custom-input';
import {EditIcon} from '../../../assets/svg-icons/svgIcons';
import CustomButton from '../../utils/button';
import {ThemeContext} from '../../components/themes/theme';
export default function FeedBack() {
  const {theme} = useContext(ThemeContext);
  const styles = UseStyles();

  return (
    <BackgroundGradient style={[styles.wrapper]}>
      <View style={{alignItems: 'center'}}>
        <Text style={styles.heading}>FeedBack</Text>
        <View style={styles.userFeedbackWrapper}>
          <View style={styles.userProfileWrapper}>
            <Text style={styles.text}>You are logged in as</Text>
            <UserProfile />
          </View>
          <View style={{gap: 12}}>
            <Text style={styles.text}>Give feedback or contact with us</Text>
            <View style={styles.inputMain}>
              <View style={styles.editIconWrapper}>
                <EditIcon />
              </View>
              <CustomInput
                placeholder={'Title'}
                style={styles.inputStyle}
                // placeholderStyle={styles.placeholderStyle}
                placeholderTextColor={theme.textAccent}
              />
            </View>
          </View>
        </View>
        <TouchableWithoutFeedback onPress={handlePressOutside}>
          <CustomInput
            placeholder={'Description ....'}
            style={styles.messageInput}
            placeholderTextColor={theme.textAccent}
            // placeholderTextColor={styles.placeholdertext}
            //  placeholderStyle={styles.placeholderStyle}
          />
        </TouchableWithoutFeedback>
      </View>
      <View style={styles.buttonWrapper}>
        <CustomButton buttonStyle={styles.button}>send</CustomButton>
      </View>
    </BackgroundGradient>
  );
}
