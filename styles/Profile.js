import { Platform, PixelRatio, Dimensions, StyleSheet } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default StyleSheet.create({
  container: {
    marginTop: height * 0.003,
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },

  ImageContainer: {
    borderRadius: 50,
    width: width * 0.23,
    height: height * 0.15,
    borderColor: 'white',
    borderWidth: 3 / PixelRatio.get(),
    justifyContent: 'center',
    alignItems: 'center'
  }
});
