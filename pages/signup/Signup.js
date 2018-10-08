import React, { Component } from 'react';
import {
  Text,
  View,
  TextInput,
  Keyboard,
  TouchableOpacity,
  AsyncStorage,
  ScrollView
} from 'react-native';

//components
import withAppHOC from '../../hocs/withAppHOC';

//style
import styles from '../../styles/Signup';

class Signup extends Component {
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

  signUp() {
    const { navigation } = this.props;

    navigation.navigate('Login');
  }

  render() {
    return (
      <View>
        <View style={styles.textInputView}>
          <TextInput
            style={styles.textInput}
            placeholder="Name"
            onChangeText={text => this.changeText('name', text)}
            onSubmitEditing={() => {
              this.email.focus();
            }}
            blurOnSubmit={false}
            value={this.state.data['name']}
          />
          <TextInput
            style={styles.textInput}
            placeholder="E-Mail Address"
            onChangeText={text => this.changeText('email', text)}
            ref={input => {
              this.email = input;
            }}
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
            onSubmitEditing={() => {
              this.confirmPassword.focus();
            }}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Confirm Password"
            onChangeText={text => this.changeText('confirmPassword', text)}
            ref={input => {
              this.confirmPassword = input;
            }}
            secureTextEntry={true}
            value={this.state.data['confirmPassword']}
            onSubmitEditing={Keyboard.dismiss}
          />
          <TouchableOpacity style={styles.button} onPress={() => this.signUp()}>
            <Text style={styles.buttonText}>SignUp</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.signupButton}
            onPress={() => this.props.navigation.navigate('Login')}
          >
            <Text style={styles.signupButtonText}>Already a member?</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default withAppHOC(Signup);
