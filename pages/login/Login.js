import React, { Component } from 'react';
import { Text, View } from 'react-native';

//components
import withAppHOC from '../../hocs/withAppHOC';

//style
import styles from '../../styles/Login';

class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Login</Text>
      </View>
    );
  }
}

export default withAppHOC(Login);
