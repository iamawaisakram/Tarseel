import React, { Component } from 'react';
import { Text, View } from 'react-native';

//components
import withUserHOC from '../../hocs/withUserHOC';

//style
import styles from '../../styles/Profile';

class Profile extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Profile</Text>
      </View>
    );
  }
}

export default withUserHOC(Profile);
