import React, {Children} from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {styles} from './styles';

const CustomButton = ({children, onPress, buttonStyle, textStyle}) => {
  return (
    <TouchableOpacity style={[styles.button, buttonStyle]} onPress={onPress}>
      <Text style={[styles.buttonText, textStyle]}>{children}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
