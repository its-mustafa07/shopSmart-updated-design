import React, {useState, useContext} from 'react';
import {SafeAreaView, TouchableOpacity, View, Text} from 'react-native';
import ReactNativeModal from 'react-native-modal';
import BackgroundGradient from '../background-gradient';
import useStyles from './styles';
import CustomButton from '../../utils/button';
import {ThemeContext} from '../themes/theme';

const OptionsModal = () => {
  const {theme} = useContext(ThemeContext);
  const buttonStyles = {
    Width: '90%',
    backgroundColor: theme.accent,
    borderRadius: 10,
    height: 45,
    ...theme.boxShadow,
  };
  const textStyles = {
    color: theme.white,
  };
  const [show, setShow] = useState(true);
  const styles = useStyles();
  return (
    <ReactNativeModal
      onBackdropPress={() => setShow(false)}
      isVisible={show}
      onBackButtonPress={() => setShow(false)}
      style={[styles.modalContainer, theme.boxShadow]}>
      <BackgroundGradient style={{borderRadius: 10}}>
        <View style={styles.modalContentContainer}>
          <Text style={styles.modalHeading}>Choose an option</Text>
          <View style={styles.modalButtons}>
            <CustomButton buttonStyle={buttonStyles} textStyle={textStyles}>
              Delete
            </CustomButton>
            <CustomButton buttonStyle={buttonStyles} textStyle={textStyles}>
              Rename
            </CustomButton>
            <CustomButton buttonStyle={buttonStyles} textStyle={textStyles}>
              Edit
            </CustomButton>
          </View>
        </View>
      </BackgroundGradient>
    </ReactNativeModal>
  );
};

export default OptionsModal;
