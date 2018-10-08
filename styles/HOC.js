import { Platform, Dimensions, StyleSheet } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default StyleSheet.create({
  container: {
    height: height,
    width: width,
    justifyContent: 'center',
    alignItems: 'center'
  },
  header: {
    textAlign: 'center',
    top: 20,
    position: 'absolute',
    height: height * 0.1
  },
  headerText: {
    color: 'white',
    fontSize: 40
  }
});
