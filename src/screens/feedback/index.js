import {View, Text} from 'react-native';
import {useState} from 'react';
import React from 'react';
import BackgroundGradient from '../../components/background-gradient';
import {UseStyles} from './style';
import UserProfile from '../../components/user-profile';
import CustomInput from '../../utils/custom-input';
import {EditIcon} from '../../../assets/svg-icons/svgIcons';
export default function FeedBack() {
  const styles = UseStyles();

  return (
    <BackgroundGradient style={styles.wrapper}>
      <View style={{alignItems: 'center'}}>
        <Text style={styles.heading}>FeedBack</Text>
        <View>
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
              <CustomInput placeholder={'Title'} />
            </View>
          </View>
        </View>
      </View>
    </BackgroundGradient>
  );
}
