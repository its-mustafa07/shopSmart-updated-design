import React from 'react';
import {View, Image, Text} from 'react-native';
import useStyles from './styles';
import {Svg, Path} from 'react-native-svg';
import {
  HeaderQRScanIcon,
  HeaderCartIcon,
} from '../../../assets/svg-icons/svgIcons';

const ProfileHeader = () => {
  const styles = useStyles();
  return (
    <View style={styles.mainContainer}>
      <View style={styles.userInfo}>
        <Image
          style={styles.image}
          source={require('../../../assets/images/shopsmart-user-1.jpeg')}
        />
        <Text style={styles.userName}>John Doe</Text>
      </View>
      <View style={styles.svgsContainer}>
        <HeaderQRScanIcon />
        <HeaderCartIcon />
      </View>
    </View>
  );
};

export default ProfileHeader;
