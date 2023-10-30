import {View, Text} from 'react-native';
import React from 'react';
import BackgroundGradient from '../../components/background-gradient';
import {UseStyles} from './style';
import UserProfile from '../../components/user-profile';
import {
  FeedbackIcon,
  PolicyIcon,
  PushNotificationIcon,
  RestoreIcon,
  SettingsMailIcon,
  SettingsNotifyIcon,
  SupportIcon,
  TermsIcons,
  UpdatesIcon,
  WarnIcon,
} from '../../../assets/svg-icons/svgIcons';
import LogoLoader from '../../components/logo-loader';
const Settings = () => {
  const styles = UseStyles();
  return (
    <BackgroundGradient>
      <View style={{alignItems: 'center'}}>
        <Text style={styles.heading}>Settings</Text>
      </View>
      <View style={{padding: 32}}>
        <View style={styles.profileWrapper}>
          <UserProfile />
          <SettingsNotifyIcon />
        </View>
        <View style={styles.contentWrapper}>
          <View
            style={{
              flexDirection: 'row',
              display: 'flex',
              alignItems: 'center',
              gap: 18,
            }}>
            <View style={styles.iconWrapper}>
              <WarnIcon />
            </View>

            <Text style={styles.textstyle}>Basic Info</Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              display: 'flex',
              alignItems: 'center',
              gap: 18,
            }}>
            <View style={styles.iconWrapper}>
              <SettingsMailIcon />
            </View>
            <Text style={styles.textstyle}>Email & phone</Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              display: 'flex',
              alignItems: 'center',
              gap: 18,
            }}>
            <View style={styles.iconWrapper}>
              <PushNotificationIcon />
            </View>
            <Text style={styles.textstyle}>Push Notification</Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              display: 'flex',
              alignItems: 'center',
              gap: 18,
            }}>
            <View style={styles.iconWrapper}>
              <SupportIcon />
            </View>
            <Text style={styles.textstyle}>Help & Support</Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              display: 'flex',
              alignItems: 'center',
              gap: 18,
            }}>
            <View style={styles.iconWrapper}>
              <PolicyIcon />
            </View>
            <Text style={styles.textstyle}>Privacy Policy</Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              display: 'flex',
              alignItems: 'center',
              gap: 18,
            }}>
            <View style={styles.iconWrapper}>
              <TermsIcons />
            </View>
            <Text style={styles.textstyle}>Term of Services</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              display: 'flex',
              alignItems: 'center',
              gap: 18,
            }}>
            <View style={styles.iconWrapper}>
              <FeedbackIcon />
            </View>
            <Text style={styles.textstyle}>Feedback</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              display: 'flex',
              alignItems: 'center',
              gap: 18,
            }}>
            <View style={styles.iconWrapper}>
              <RestoreIcon />
            </View>
            <Text style={styles.textstyle}>Restore Purchaces</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              display: 'flex',
              alignItems: 'center',
              gap: 18,
            }}>
            <View style={styles.iconWrapper}>
              <UpdatesIcon />
            </View>
            <Text style={styles.textstyle}>Check for updates</Text>
          </View>
        </View>
      </View>
    </BackgroundGradient>
  );
};

export default Settings;
