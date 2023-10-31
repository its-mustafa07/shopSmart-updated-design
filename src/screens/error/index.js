import React, {useContext} from 'react';
import {Text, View} from 'react-native';
import {styles, useStyles} from './style';
import {Circle, Path, Svg} from 'react-native-svg';
import CustomButton from '../../utils/button';
import BackgroundGradient from '../../components/background-gradient';
import {ThemeContext} from '../../components/themes/theme';
import ThemeSwitcher from '../../components/themes/themeSwitcher';
import {ErrorPageIcon} from '../../../assets/svg-icons/svgIcons';

const ErrorPage = ({handleToggle, navigation}) => {
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
          <View style={styles.buttons}>
            <CustomButton
              buttonStyle={[{backgroundColor: theme.secondary}, styles.button]}
              textStyle={{color: theme.accent}}>
              Cancel
            </CustomButton>
            <CustomButton
              buttonStyle={[{backgroundColor: theme.accent}, styles.button]}>
              Try Again
            </CustomButton>
            <View style={styles.errorIcon}>
              <Svg
                width="109"
                height="109"
                viewBox="0 0 109 109"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <Circle
                  cx="55"
                  cy="54"
                  r="45.25"
                  stroke="black"
                  stroke-width="3.5"
                />
                <Path
                  d="M37.2819 20.9054C45.8073 16.5358 55.6752 15.5711 64.8856 18.2067C74.0959 20.8423 81.9597 26.8811 86.8832 35.0992C91.8066 43.3172 93.4214 53.0998 91.4003 62.4642C89.3792 71.8286 83.8733 80.0743 75.9987 85.5301C68.124 90.986 58.4695 93.2438 48.992 91.846C39.5145 90.4482 30.9229 85.4994 24.9586 78.0025C18.9942 70.5056 16.1033 61.0215 16.8716 51.4723C17.64 41.9232 22.0101 33.0233 29.0964 26.5765"
                  stroke="#949494"
                  stroke-width="3.5"
                />
                <Circle cx="32.7" cy="29.5" r="2" fill="#0F0F0F" />
                <Circle cx="54.5" cy="54.5" r="36.5" fill={theme.primary} />
                <Path
                  d="M39.5 43.5C38.1193 42.1193 38.1193 39.8807 39.5 38.5C40.8807 37.1193 43.1193 37.1193 44.5 38.5L51.4645 45.4645C53.4171 47.4171 56.5829 47.4171 58.5355 45.4645L65.5 38.5C66.8807 37.1193 69.1193 37.1193 70.5 38.5C71.8807 39.8807 71.8807 42.1193 70.5 43.5L63.5355 50.4645C61.5829 52.4171 61.5829 55.5829 63.5355 57.5355L70.5 64.5C71.8807 65.8807 71.8807 68.1193 70.5 69.5C69.1193 70.8807 66.8807 70.8807 65.5 69.5L58.5355 62.5355C56.5829 60.5829 53.4171 60.5829 51.4645 62.5355L44.5 69.5C43.1193 70.8807 40.8807 70.8807 39.5 69.5C38.1193 68.1193 38.1193 65.8807 39.5 64.5L46.4645 57.5355C48.4171 55.5829 48.4171 52.4171 46.4645 50.4645L39.5 43.5Z"
                  fill={theme.secondary}
                  stroke="black"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </Svg>
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
            onPress={() => navigation.navigate('ScanningPage')}
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
