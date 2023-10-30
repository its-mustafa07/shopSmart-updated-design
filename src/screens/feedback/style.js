import {useContext} from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import {ThemeContext} from '../../components/themes/theme';
export const UseStyles = () => {
  const {theme} = useContext(ThemeContext);
  const screenWidth = Dimensions.get('window').width;

  return StyleSheet.create({
    wrapper: {
      flex: 1,
    },
    heading: {
      fontSize: 25,
      // fontFamily: 'SourceSansPro',
      color: theme.textAccent,
      fontWeight: 'bold',
      padding: 48,
    },
    inputStyle: {
      height: 50,
      width: screenWidth * 0.9,
      color: theme.textAccent,
    },

    messageInput: {
      height: 209,
      width: screenWidth * 0.9,
      padding: 20,
      backgroundColor: theme.input,
      borderRadius: 10,
      textAlignVertical: 'top',
      color: theme.textAccent,
      borderWidth: 2,
      borderColor: 'transparent',
    },
    text: {
      fontSize: 18,
      color: theme.textAccent,
    },
    userFeedbackWrapper: {
      marginBottom: 30,
    },
    inputMain: {
      gap: 14,
      fontWeight: 'bold',
      paddingLeft: 12,
      color: theme.text,
      width: 376,
      height: 50,
      borderRadius: 10,
      backgroundColor: theme.input,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth: 2,
      borderColor: 'transparent',
    },
    inputMainFocused: {
      borderColor: theme.primary,
    },
    textAreaFocused: {
      borderColor: theme.primary,
    },
    input: {
      width: 305,
      height: 50,
      color: '#fff',
      fontSize: 18,
      // fontFamily: 'SourceSansPro-Regular',
      borderRadius: 10,
    },
    userProfileWrapper: {
      marginBottom: 45,
      gap: 28,
    },
    editIconWrapper: {
      width: 35,
      height: 35,
      borderRadius: 7,
      alignItems: 'center',
      backgroundColor: theme.secondary,
      justifyContent: 'center',
    },
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: theme.accent,
      height: 45,
      width: 376,
      borderRadius: 10,
    },
    buttonWrapper: {
      paddingTop: 120,
      alignItems: 'center',
      flex: 1,
      justifyContent: 'flex-end',
      bottom: 49,
    },
  });
};
