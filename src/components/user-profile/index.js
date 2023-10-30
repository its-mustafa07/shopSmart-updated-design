import {View, Text, Image} from 'react-native';
import React from 'react';
import {UseStyles} from './styles';
export default function UserProfile() {
  const styles = UseStyles();
  return (
    <View style={styles.userProfile}>
      <Image
        style={styles.image}
        source={require('../../../assets/images/shopsmart-user-1.jpeg')}
      />
      <Text style={styles.userName}>John Doe</Text>
    </View>
  );
}
