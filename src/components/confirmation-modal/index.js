import React, {useContext} from 'react';
import BackgroundGradient from '../background-gradient';
import ReactNativeModal from 'react-native-modal';
import {View, Text} from 'react-native';
import CustomButton from '../../utils/button';
import useStyles from './styles';
import {ThemeContext} from '../themes/theme';

const ConfirmationModal = ({isVisible, isNotVisible, handleDeleteItem}) => {
  const {theme} = useContext(ThemeContext);
  const buttonStyles = {
    height: 40,
    width: '40%',
    borderRadius: 10,
    ...theme.boxShadow,
  };
  const styles = useStyles();
  return (
    <ReactNativeModal
      style={styles.modalContainer}
      isVisible={isVisible}
      onBackButtonPress={isNotVisible}
      onBackdropPress={isNotVisible}>
      <BackgroundGradient style={{borderRadius: 10}}>
        <View style={styles.modalContenContainer}>
          <Text style={styles.confirmationText}>
            Are you sure, this action can’t be undone.
          </Text>
          <View style={styles.modalButtons}>
            <CustomButton
              onPress={isNotVisible}
              buttonStyle={{backgroundColor: theme.secondary, ...buttonStyles}}
              textStyle={{color: theme.textPrimary}}>
              Cancel
            </CustomButton>
            <CustomButton
              onPress={handleDeleteItem}
              buttonStyle={{backgroundColor: theme.accent, ...buttonStyles}}
              textStyle={{color: theme.white}}>
              Delete
            </CustomButton>
          </View>
        </View>
      </BackgroundGradient>
    </ReactNativeModal>
  );
};

export default ConfirmationModal;
