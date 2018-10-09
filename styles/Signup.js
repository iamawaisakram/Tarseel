import { Platform, Dimensions, StyleSheet } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default StyleSheet.create({
  textInputView: {
    width: width * 0.95,
    height: height * 0.35,
    marginBottom: height * 0.08
  },
  textInput: {
    backgroundColor: 'white',
    marginTop: width * 0.01,
    borderRadius: 5
  },
  button: {
    backgroundColor: 'white',
    display: 'flex',
    marginTop: height * 0.07,
    height: height * 0.08,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5
  },
  buttonText: {
    color: 'rgb(97, 144, 232)',
    fontSize: 18
  },
  signupButton: {
    backgroundColor: 'white',
    display: 'flex',
    marginTop: height * 0.01,
    height: height * 0.08,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5
  },
  signupButtonText: {
    color: 'red',
    fontSize: 18
  },
  errorView: {
    backgroundColor: 'white',
    height: height * 0.08,
    marginBottom: height * 0.02,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5
  },
  errorText: {
    color: 'red',
    fontSize: 16,
    textAlign: 'center'
  }
});
