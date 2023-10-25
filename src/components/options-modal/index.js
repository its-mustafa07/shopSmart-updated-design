import React from 'react';
import {SafeAreaView, TouchableOpacity, View, Text} from 'react-native';
import ReactNativeModal from 'react-native-modal';
import BackgroundGradient from '../background-gradient';
import useStyles from './styles';

const OptionsModal = () => {
  const styles = useStyles();
  return (
    <ReactNativeModal isVisible={true}>
      <BackgroundGradient>
        <SafeAreaView style={styles.modalContainer}>
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
        </SafeAreaView>
      </BackgroundGradient>
    </ReactNativeModal>
  );
};

export default OptionsModal;
