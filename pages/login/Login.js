import React, { Component } from 'react';
import {
  Text,
  View,
  TextInput,
  Keyboard,
  TouchableOpacity,
  AsyncStorage
} from 'react-native';

//components
import withAppHOC from '../../hocs/withAppHOC';

//style
import styles from '../../styles/Login';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {}
    };
  }

  changeText(key, value) {
    let { data } = this.state;
    data[key] = value;

    this.setState(data);
    console.log(data);
  }

  login() {
    const { navigation } = this.props;

    AsyncStorage.setItem('user', JSON.stringify(this.state.data));

    navigation.navigate('Home');
  }

  render() {
    return (
      <View>
        <View style={styles.textInputView}>
          <TextInput
            style={styles.textInput}
            placeholder="E-Mail Address"
            onChangeText={text => this.changeText('email', text)}
            onSubmitEditing={() => {
              this.password.focus();
            }}
            blurOnSubmit={false}
            value={this.state.data['email']}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Password"
            onChangeText={text => this.changeText('password', text)}
            ref={input => {
              this.password = input;
            }}
            secureTextEntry={true}
            value={this.state.data['password']}
            onSubmitEditing={Keyboard.dismiss}
          />
          <TouchableOpacity style={styles.forgotPassword}>
            <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => this.login()}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.signupButton}
            onPress={() => this.props.navigation.navigate('Signup')}
          >
            <Text style={styles.signupButtonText}>Not a member?</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default withAppHOC(Login);
