import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import useStyles from './styles';
import {Svg, Path} from 'react-native-svg';
import {
  HeaderQRScanIcon,
  HeaderCartIcon,
} from '../../../assets/svg-icons/svgIcons';

const ProfileHeader = ({style}) => {
  const styles = useStyles();
  return (
    <View style={[styles.mainContainer, style]}>
      <View style={styles.userInfo}>
        <Image
          style={styles.image}
          source={require('../../../assets/images/shopsmart-user-1.jpeg')}
        />
        <Text style={styles.userName}>John Doe</Text>
      </View>
      <View style={styles.svgsContainer}>
        <TouchableOpacity>
          <HeaderQRScanIcon />
        </TouchableOpacity>
        <TouchableOpacity>
          <HeaderCartIcon />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProfileHeader;
