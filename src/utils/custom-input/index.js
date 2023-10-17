import React from 'react';
import {TextInput} from 'react-native';

const CustomInput = ({
  placeholder,
  onChangeText,
  value,
  inputStyle,
  keyboardType,
  secureTextEntry,
  style,
}) => {
  return (
    <TextInput
      placeholder={placeholder}
      onChangeText={onChangeText}
      value={value}
      // style={inputStyle}
      keyboardType={keyboardType}
      secureTextEntry={secureTextEntry}
      style={style}
    />
  );
};

export default CustomInput;
