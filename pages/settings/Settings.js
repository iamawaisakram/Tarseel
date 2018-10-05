import React, { Component } from 'react';
import { Text, View } from 'react-native';

//components
import withUserHOC from '../../hocs/withUserHOC';

//style
import styles from '../../styles/Settings';

class Settings extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Settings</Text>
      </View>
    );
  }
}

export default withUserHOC(Settings);
