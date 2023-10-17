import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  loginMainWrapper: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 50,
  },
  heading: {
    fontSize: 28,
    fontFamily: 'SourceSansPro-Bold',
  },
  inputBox: {
    flexDirection: 'row',
    width: 380,
    height: 55,
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingLeft: 10,
    paddingBottom: 6,
    paddingTop: 6,

    borderWidth: 2,
    // borderColor: '#FFEDE2',
  },
  container: {
    gap: 20,
  },
  iconBox: {
    width: 35,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFD9C3',
    borderRadius: 7,
  },
  input: {
    paddingLeft: 10,
    width: 330,
    color: '#2E2E2E',
    opacity: 0.7,
    fontSize: 16,
    fontFamily: 'SourceSansPro-Regular',
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderRadius: 4,
  },
  button: {
    width: 380,
    height: 40,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'SourceSansPro-SemiBold',
  },
  socialIcons: {
    width: 120,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: '#FFD9C3',
  },
  SemiBoldText: {
    fontSize: 18,

    fontFamily: 'SourceSansPro-SemiBold',
  },
});
