import {useContext} from 'react';
import {StyleSheet} from 'react-native';
import {ThemeContext} from '../../components/themes/theme';

export const useStyle = () => {
  const {theme} = useContext(ThemeContext);
  return StyleSheet.create({
    mainContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      gap: 10,
      paddingVertical: 50,
      paddingHorizontal: 30,
    },
    BasicInfoHeading: {
      fontFamily: 'SourceSansPro-SemiBold',
      fontSize: 22,
      color: theme.text,
      paddingBottom: 20,
    },
    imageContainer: {
      width: 130,
      height: 130,
    },
    profileImage: {
      width: '100%',
      height: '100%',
      borderRadius: 100,
    },
    PlusIconBox: {
      width: 20,
      height: 20,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.secondary,
      position: 'absolute',
      bottom: 0,
      left: 90,
    },
    profileName: {
      fontSize: 18,
      fontFamily: 'SourceSansPro-SemiBold',
      color: theme.text,
    },
    profileMail: {
      fontSize: 18,
      fontFamily: 'SourceSansPro-Regular',
      color: theme.textAccent,
    },
    NameBox: {
      flexDirection: 'row',
      gap: 10,
      justifyContent: 'center',
      alignItems: 'center',
    },
    ContactInfo: {
      width: '100%',
      gap: 20,
      paddingVertical: 40,
    },
    PasswordContainer: {
      flexDirection: 'row',
      gap: 18,
      alignItems: 'center',
    },
    keyBox: {
      width: 50,
      height: 50,
      borderRadius: 25,
      backgroundColor: theme.list,
      justifyContent: 'center',
      alignItems: 'center',
    },
    phoneContainer: {
      flexDirection: 'row',
      gap: 18,
      alignItems: 'center',
    },
    phoneBox: {
      width: 50,
      height: 50,
      borderRadius: 25,
      backgroundColor: theme.list,
      justifyContent: 'center',
      alignItems: 'center',
    },
    contactText: {
      fontSize: 18,
      fontFamily: 'SourceSansPro-Regular',
      color: theme.textSecondary,
    },
  });
};
