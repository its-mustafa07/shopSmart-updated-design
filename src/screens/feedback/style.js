import {useContext} from 'react';
import {StyleSheet} from 'react-native';
import {ThemeContext} from '../../components/themes/theme';
export const UseStyles = () => {
  const {theme} = useContext(ThemeContext);

  return StyleSheet.create({
    wrapper: {
      padding: 26,
      flex: 1,
      // justifyContent: 'center',
      // alignItems: 'center',
      // padding: 26,
    },
    heading: {
      fontSize: 25,
      fontFamily: 'SourceSansPro',
      color: theme.textAccent,
      fontWeight: 'bold',
      padding: 48,
    },
    inputStyle: {
      height: 50,
      width: 300,
      color: theme.textAccent,
    },
    // placeholderStyle: {
    //   color: theme.textAccent,
    //   // color: theme.textAccent,
    //   // color: 'white',
    //   fontSize: 27,
    // },
    messageInput: {
      height: 209,
      width: 376,
      padding: 20,
      backgroundColor: theme.input,
      borderRadius: 10,
      textAlignVertical: 'top',
      color: theme.textAccent,
    },
    text: {
      fontSize: 18,
      color: theme.textAccent,
      fontWeight: 'normal',
    },
    userFeedbackWrapper: {
      marginBottom: 30,
    },
    inputMain: {
      gap: 14,
      fontWeight: 400,
      paddingLeft: 12,
      color: theme.text,
      width: 376,
      height: 50,
      borderRadius: 10,
      backgroundColor: theme.input,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },

    input: {
      width: 305,
      height: 50,
      opacity: 0.7,
      color: '#fff',
      fontSize: 18,
      fontFamily: 'SourceSansPro-Regular',
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
      alignItems: 'center',
      flex: 1,
      justifyContent: 'flex-end',
      bottom: 49,
    },
  });
};
