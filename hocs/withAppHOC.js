import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

//style
import styles from '../styles/HOC';

const withAppHOC = WrappedComponent => {
  class HOC extends React.Component {
    constructor(props) {
      super(props);
    }

    componentWillMount() {
      const { navigation } = this.props;
      const { state } = navigation;

      this.setState({ title: state['routeName'] });
    }

    render() {
      console.log(this.props);
      console.log(this.state.title);
      return (
        <LinearGradient colors={['#6190E8', '#A7BFE8']}>
          <KeyboardAwareScrollView>
            <View style={styles.container}>
              <View style={styles.header}>
                <Text style={styles.headerText}>{this.state.title}</Text>
              </View>
              <WrappedComponent {...this.props} />
            </View>
          </KeyboardAwareScrollView>
        </LinearGradient>
      );
    }
  }

  return HOC;
};

export default withAppHOC;
