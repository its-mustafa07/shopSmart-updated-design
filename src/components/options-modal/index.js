import React, {useState} from 'react';
import {SafeAreaView, TouchableOpacity, View, Text} from 'react-native';
import ReactNativeModal from 'react-native-modal';
import BackgroundGradient from '../background-gradient';
import useStyles from './styles';

const OptionsModal = () => {
  const [show, setShow] = useState(true);
  const styles = useStyles();
  return (
    <ReactNativeModal
      onBackdropPress={() => setShow(false)}
      isVisible={show}
      style={styles.modalContainer}
      backdropColor="yellow">
      <BackgroundGradient style={{borderRadius: 10}}>
        {/* <SafeAreaView> */}
        <View style={styles.modalContentContainer}>
          <Text style={styles.modalHeading}>Choose an option</Text>
          <View style={styles.modalButtons}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Delete</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Rename</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Edit</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* </SafeAreaView> */}
      </BackgroundGradient>
    </ReactNativeModal>
  );
};

export default OptionsModal;
