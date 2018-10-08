import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import React, { Component } from 'react';
import {
  createBottomTabNavigator,
  createStackNavigator
} from 'react-navigation';
import { Platform } from 'react-native';

//components
import Dashboard from './pages/dashboard/Dashboard';
import Settings from './pages/settings/Settings';
import Profile from './pages/profile/Profile';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';

//icons
import Icon from 'react-native-vector-icons/Ionicons';

class App extends Component {
  render() {
    return <RootStack />;
  }
}

AppRegistry.registerComponent(appName, () => App);

const Tab = createBottomTabNavigator(
  {
    Home: Dashboard,
    Profile: Profile,
    Settings: Settings
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = Platform === 'ios' ? 'ios-home' : 'md-home';
        } else if (routeName === 'Settings') {
          iconName = Platform === 'ios' ? 'ios-settings' : 'md-settings';
        } else if (routeName === 'Profile') {
          iconName = Platform === 'ios' ? 'ios-person' : 'md-person';
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Icon name={iconName} size={25} color={tintColor} />;
      }
    }),
    tabBarPosition: 'bottom',
    tabBarOptions: {
      activeTintColor: 'white',
      inactiveTintColor: '#C1C7C9',
      style: {
        backgroundColor: 'rgb(97, 144, 232)',
        borderTopColor: 'transparent',
        shadowRadius: 2,
        shadowOffset: {
          width: 0,
          height: -3
        },
        shadowColor: '#000000',
        elevation: 4
      }
    },
    animationEnabled: false,
    swipeEnabled: false
  },
  {
    headerMode: 'none'
  }
);

const RootStack = createStackNavigator(
  {
    Login: Login,
    Signup: Signup,
    Tabs: Tab
  },
  {
    initialRouteName: 'Login',
    headerMode: 'none'
  }
);
