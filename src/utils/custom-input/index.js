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
<<<<<<< HEAD
      placeholderTextColor={placeholderTextColor}
=======
      onBlur={onBlur}
      onFocus={onFocus}
>>>>>>> 9ababadfa10205fc58cad049ebbf4f5ca054e63a
      style={style}
    />
  );
};

export default CustomInput;
