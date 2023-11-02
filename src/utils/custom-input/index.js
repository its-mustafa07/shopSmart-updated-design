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
  ref,
  maxLength,
  // placeholderTextColor,
}) => {
  return (
    <TextInput
      placeholder={placeholder}
      onChangeText={onChangeText}
      value={value}
      multiline={multiline}
      placeholderTextColor={placeholderTextColor}
      numberOfLines={numberOfLines}
      keyboardType={keyboardType}
      placeholderStyle={placeholderStyle}
      secureTextEntry={secureTextEntry}
      onBlur={onBlur}
      onFocus={onFocus}
      // style={inputStyle}
      // placeholderTextColor={placeholderTextColor}
      style={style}
      ref={ref}
      maxLength={maxLength}
    />
  );
};

export default CustomInput;
