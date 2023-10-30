import React, {createContext, useContext, useDebugValue} from 'react';
import {Text, View} from 'react-native';
import {styles, useStyles} from './style';
import {Circle, Path, Svg} from 'react-native-svg';
import CustomButton from '../../utils/button';
import BackgroundGradient from '../../components/background-gradient';
import {ThemeContext} from '../../components/themes/theme';
import ThemeSwitcher from '../../components/themes/themeSwitcher';
import {ErrorPageIcon} from '../../../assets/svg-icons/svgIcons';

const ErrorPage = ({handleToggle}) => {
  const {theme} = useContext(ThemeContext);
  const styles = useStyles();
  return (
    <>
      <BackgroundGradient style={{flex: 1}}>
        <View style={styles.errorWrapper}>
          <View>
            <View style={styles.errorIcon}>
              <ErrorPageIcon />
            </View>

            <View style={styles.errorText}>
              <Text style={[styles.errorHeading, {color: theme.primary}]}>
                Oops! Something went wrong
              </Text>
              <Text style={[styles.errorCode]}>Error code: 256417</Text>
              <Text style={styles.errorpara}>
                This screen is under development
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.buttons}>
          <CustomButton
            buttonStyle={[{backgroundColor: theme.secondary}, styles.button]}
            textStyle={{color: theme.accent}}
            onPress={handleToggle}>
            Cancel
          </CustomButton>
          <CustomButton
            buttonStyle={[{backgroundColor: theme.accent}, styles.button]}
            textStyle={{color: theme.white}}>
            Try Again
          </CustomButton>
        </View>
      </BackgroundGradient>
    </>
  );
};

export default ErrorPage;
