import {View, Text} from 'react-native';
import {ErrorPageIcon} from '../../../assets/svg-icons/svgIcons';
import CustomButton from '../../utils/button';
import {ThemeContext} from '../themes/theme';
import {useContext} from 'react';
import {useStyles} from './styles';
const ObjectDetection = () => {
  const {theme} = useContext(ThemeContext);
  const styles = useStyles();
  return (
    <>
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
          textStyle={{color: theme.accent}}>
          Cancel
        </CustomButton>
        <CustomButton
          buttonStyle={[{backgroundColor: theme.accent}, styles.button]}
          textStyle={{color: theme.white}}>
          Try Again
        </CustomButton>
      </View>
    </>
  );
};

export default ObjectDetection;
