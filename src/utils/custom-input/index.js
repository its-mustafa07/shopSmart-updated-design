import React from 'react';
import {TextInput} from 'react-native';

const CustomInput = ({
  onFocus,
  onBlur,
  placeholder,
  onChangeText,
  value,
  inputStyle,
  keyboardType,
  secureTextEntry,
  placeholderTextColor,
  style,
  placeholderStyle,
  multiline,
  numberOfLines,
  placeholderTextColor,
}) => {
  return (
    <TextInput
      placeholder={placeholder}
      onChangeText={onChangeText}
      value={value}
      multiline={multiline}
      placeholderTextColor={placeholderTextColor}
      numberOfLines={numberOfLines}
      // style={inputStyle}
      keyboardType={keyboardType}
      placeholderStyle={placeholderStyle}
      secureTextEntry={secureTextEntry}
      onBlur={onBlur}
      onFocus={onFocus}
      style={style}
    />
  );
};

export default CustomInput;
