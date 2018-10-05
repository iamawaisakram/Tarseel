import React, { Component } from 'react';
import { Text, View } from 'react-native';

//components
import withUserHOC from '../../hocs/withUserHOC';

//style
import styles from '../../styles/Dashboard';

class Dashboard extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Dashboard</Text>
      </View>
    );
  }
}

export default withUserHOC(Dashboard);
