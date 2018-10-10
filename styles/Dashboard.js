import { Platform, Dimensions, StyleSheet } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: height * 0.875,
    width: width,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  map: {
    ...StyleSheet.absoluteFillObject
  },
  bubble: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0.7)',
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 20
  },
  latlng: {
    width: 200,
    alignItems: 'stretch'
  },
  button: {
    width: 80,
    paddingHorizontal: 12,
    alignItems: 'center',
    marginHorizontal: 10
  },
  buttonContainer: {
    flexDirection: 'row',
    marginVertical: 20,
    backgroundColor: 'transparent'
  }
});
