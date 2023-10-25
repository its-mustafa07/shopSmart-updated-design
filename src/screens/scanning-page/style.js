import {useContext} from 'react';
import {StyleSheet} from 'react-native';
import {ThemeContext} from '../../components/themes/theme';

export const useStyles = () => {
  const {theme} = useContext(ThemeContext);
  return StyleSheet.create({
    ScanningPageWrapper: {
      // flex: 1,
      width: '100%',
      height: '100%',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 15,
      paddingTop: '3%',
    },
    ScrollViewList: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 15,
      paddingTop: 20,
    },
    Heading: {
      fontSize: 25,
      fontFamily: 'SourceSansPro-SemiBold',
      color: theme.text,
    },
    tabButtons: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      width: '80%',
      borderRadius: 8,
      backgroundColor: theme.secondary,
    },
    button: {
      width: '50%',
      height: 42,
      backgroundColor: theme.accent,
      borderRadius: 8,
    },
    conditionalButton: {
      width: '50%',
      height: 42,
      backgroundColor: theme.secondary,
      borderRadius: 8,
    },
    buttonText: {
      color: theme.text,
    },
    scanner: {
      width: 150,
      height: 150,
      justifyContent: 'center',
      alignItems: 'center',
    },
    searchBox: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 20,
      width: '100%',
      paddingHorizontal: '5%',
    },
    input: {
      borderWidth: 2,
      borderColor: theme.primary,

      color: theme.text,
      width: '55%',
      height: 42,
      paddingLeft: 21,
      paddingRight: 21,
      borderColor: theme.secondary,
      backgroundColor: theme.input,
      borderRadius: 8,
    },
    addButton: {
      width: 118,
      height: 42,
      backgroundColor: theme.secondary,
      borderRadius: 8,
    },
    mainButton: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 70,
      paddingTop: 20,
      paddingBottom: 20,
    },
    editButton: {
      width: 122,
      height: 48,
      backgroundColor: theme.secondary,
      borderRadius: 10,
    },
    saveButton: {
      width: 122,
      height: 48,
      backgroundColor: theme.accent,
      borderRadius: 10,
    },
  });
};
