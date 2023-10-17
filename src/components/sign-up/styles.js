import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  signupMainWrapper: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    // gap: 50,
  },
  headings: {
    fontSize: 28,
    fontFamily: 'SourceSansPro-Bold',
  },
  inputsContainer: {
    gap: 15,
  },
  inputBoxx: {
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
    borderColor: '#FFEDE2',
  },
  container: {
    gap: 30,
  },
  iconBoxx: {
    width: 35,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',

    borderRadius: 7,
  },
  inputs: {
    paddingLeft: 10,
    width: 300,
    color: '#2E2E2E',
    opacity: 0.7,
    fontSize: 16,
    fontFamily: 'SourceSansPro-Regular',
    //  ,
  },
  buttons: {
    backgroundColor: '#040325',
    width: 380,
    height: 40,
    borderRadius: 10,
    color: '#fff',
  },
  buttonsText: {
    fontSize: 18,
    fontFamily: 'SourceSansPro-SemiBold',
  },
  SemiBoldTexts: {
    fontSize: 18,

    fontFamily: 'SourceSansPro-SemiBold',
  },
  socialIconss: {
    width: 120,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: '#FFD9C3',
  },
});
