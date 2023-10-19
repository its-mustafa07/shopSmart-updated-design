import {View, Text} from 'react-native';
import React from 'react';
import BackgroundGradient from '../../components/background-gradient';
import {UseStyles} from './style';
import UserProfile from '../../components/user-profile';
import {SettingsNotifyIcon, WarnIcon} from '../../../assets/svg-icons/svgIcons';
const Setting = () => {
  const styles = UseStyles();
  return (
    <BackgroundGradient>
      <View style={{alignItems: 'center'}}>
        <Text style={styles.heading}>Settings</Text>
      </View>
      <View>
        <View style={styles.profileWrapper}>
          <UserProfile />
          <SettingsNotifyIcon />
        </View>
        <View style={styles.contentWrapper}>
          <View>
            <View style={styles.warnIconWrapper}>
              <WarnIcon />
            </View>
          </View>
        </View>
      </View>
    </BackgroundGradient>
  );
};

export default Setting;
