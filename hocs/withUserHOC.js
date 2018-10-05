import React from 'react';
import { Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

//style
import styles from '../styles/HOC';

const withUserHOC = WrappedComponent => {
  class HOC extends React.Component {
    render() {
      return (
        <LinearGradient colors={['#6190E8', '#A7BFE8']}>
          <View style={styles.container}>
            <WrappedComponent {...this.props} />
          </View>
        </LinearGradient>
      );
    }
  }

  return HOC;
};

export default withUserHOC;
