import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import ImagePicker from 'react-native-image-picker';

//components
import withUserHOC from '../../hocs/withUserHOC';

//icons
import Icon from 'react-native-vector-icons/Ionicons';

//style
import styles from '../../styles/Profile';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ImageSource: null
    };
  }

  selectPhotoTapped() {
    const options = {
      quality: 1.0,
      maxWidth: 500,
      maxHeight: 500,
      storageOptions: {
        skipBackup: true
      }
    };

    ImagePicker.showImagePicker(options, response => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled photo picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        let source = { uri: response.uri };

        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };

        this.setState({
          ImageSource: source
        });
      }
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}>
          <View style={styles.ImageContainer}>
            {this.state.ImageSource === null ? (
              <Icon name="md-contact" size={100} color="white" />
            ) : (
              <Image
                style={styles.ImageContainer}
                source={this.state.ImageSource}
              />
            )}
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

export default withUserHOC(Profile);
