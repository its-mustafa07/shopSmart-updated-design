import React, {useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Path, Svg} from 'react-native-svg';
import CustomButton from '../../utils/button';
import {styles, useStyle} from './styles';
import BackgroundGradient from '../../components/background-gradient';
import {ThemeContext} from '../../components/themes/theme';
import {DoneSvgIcon} from '../../../assets/svg-icons/svgIcons';

const DoneComponent = () => {
  const {theme} = useContext(ThemeContext);
  const styles = useStyle();
  return (
    <BackgroundGradient style={{flex: 1}}>
      <View style={styles.DoneComponent}>
        <View>
          <DoneSvgIcon />
        </View>
        <Text
          style={{
            fontSize: 32,
            fontFamily: 'SourceSansPro-SemiBold',
            color: theme.text,
          }}>
          Account created!
        </Text>
        <Text
          style={{
            fontSize: 18,
            fontFamily: 'SourceSansPro-Regular',
            color: theme.text,
          }}>
          {' '}
          Your account has been created successfully.
        </Text>
        <CustomButton
          buttonStyle={styles.button}
          textStyle={{color: theme.white}}>
          Done
        </CustomButton>
      </View>
    </BackgroundGradient>
  );
};

export default DoneComponent;
