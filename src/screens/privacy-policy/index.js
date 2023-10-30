import {Text, View} from 'react-native';
import React from 'react';
import BackgroundGradient from '../../components/background-gradient';
import {UseStyles} from './style';

const PrivacyPolicy = () => {
  const styles = UseStyles();
  return (
    <BackgroundGradient>
      <View style={{padding: 26}}>
        <Text style={styles.heading}>Privacy policy</Text>
        <View style={styles.termsWrapper}>
          <Text style={styles.terms}>Terms</Text>
          <Text style={styles.termstext}>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English.{' '}
          </Text>
        </View>
        <View style={styles.termsWrapper}>
          <Text style={styles.terms}>Use of the licence</Text>
          <Text style={styles.termstext}>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English.
          </Text>
        </View>
        <View style={styles.listWrapper}>
          <Text style={styles.listtext}>it is a long established fact</Text>
          <Text style={styles.listtext}>Lorem ipsum is that it</Text>
          <Text style={styles.listtext}>
            Reader will be distracted from the has a more ofted
          </Text>
          <Text style={styles.listtext}>These term are</Text>
        </View>
      </View>
    </BackgroundGradient>
  );
};

export default PrivacyPolicy;
