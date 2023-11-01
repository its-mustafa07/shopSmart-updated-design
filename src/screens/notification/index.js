import {View, Text, Dimensions, ScrollView} from 'react-native';
import React, {useContext} from 'react';
import BackgroundGradient from '../../components/background-gradient';
import {UseStyles} from './style';
import {ThemeContext} from '../../components/themes/theme';
import {
  NotificationCrossIcon,
  NotificationExpireIcon,
  NotificationOkIcon,
} from '../../../assets/svg-icons/svgIcons';
export const NotificatioWrapper = ({children}) => {
  const {theme} = useContext(ThemeContext);
  const screenWidth = Dimensions.get('window').width;
  return (
    <View
      style={{
        gap: 20,
        padding: 40,
        borderWidth: 2,
        borderColor: theme.secondary,
        borderRadius: 10,
        width: screenWidth * 0.9,
        backgroundColor: theme.list,
      }}>
      {children}
    </View>
  );
};
const Notificatio = () => {
  const styles = UseStyles();
  return (
    <BackgroundGradient style={{flex: 1}}>
      <ScrollView>
        <View style={{alignItems: 'center', paddingVertical: 40}}>
          <Text style={styles.heading}>Notifications </Text>
          <View style={styles.contentWrapper}>
            <NotificatioWrapper style={styles.approved}>
              <View style={styles.iconTextWrapper}>
                <NotificationOkIcon />
                <Text style={styles.headingText}>
                  Your loan applications has been approved!
                </Text>
              </View>
              <Text style={styles.text}>Nov 01,2023 at 12:47 PM</Text>
            </NotificatioWrapper>
            <NotificatioWrapper style={styles.repayment}>
              <View style={styles.iconTextWrapper}>
                <NotificationExpireIcon />
                <Text style={styles.headingText}>
                  Your loan applications has been approved!
                </Text>
              </View>
              <Text style={styles.text}>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters
              </Text>
              <Text style={styles.text}>Nov 01,2023 at 12:47 PM</Text>
            </NotificatioWrapper>
            <NotificatioWrapper style={styles.repayment}>
              <View style={styles.iconTextWrapper}>
                <NotificationCrossIcon />
                <Text style={styles.headingText}>
                  Your loan applications has been approved!
                </Text>
              </View>
              <Text style={styles.text}>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using
              </Text>
              <Text style={styles.text}>Nov 01,2023 at 12:47 PM</Text>
            </NotificatioWrapper>
            <NotificatioWrapper style={styles.approved}>
              <View style={styles.iconTextWrapper}>
                <NotificationOkIcon />
                <Text style={styles.headingText}>Your piggy bank is full!</Text>
              </View>
              <Text style={styles.text}>Nov 01,2023 at 12:47 PM</Text>
            </NotificatioWrapper>
          </View>
        </View>
      </ScrollView>
    </BackgroundGradient>
  );
};

export default Notificatio;
