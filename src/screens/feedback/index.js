import {View, Text} from 'react-native';
import React from 'react';
import BackgroundGradient from '../../components/background-gradient';
import {styles} from './style';
export default function FeedBack() {
  return (
    <BackgroundGradient style={styles.wrapper}>
      <Text style={styles.heading}>FeedBack</Text>
      <View style={{padding: 26}}>
        <Text style={styles.text}>You are logged in as</Text>
      </View>
    </BackgroundGradient>
  );
}
