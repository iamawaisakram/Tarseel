import React, { Component } from 'react';
import { Text, View, Dimensions } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import RetroMapStyles from './components/RetroStyle.json';

//components
import withUserHOC from '../../hocs/withUserHOC';

//style
import styles from '../../styles/Dashboard';

//constants
let { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = 0;
const LONGITUDE = 0;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      region: {
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA
      }
    };
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({
          region: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA
          }
        });
      },
      error => console.log(error.message),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
    this.watchID = navigator.geolocation.watchPosition(position => {
      this.setState({
        region: {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA
        }
      });
    });
  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchID);
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.container}
          // customMapStyle={RetroMapStyles}
          showsUserLocation={true}
          region={this.state.region}
          onRegionChange={region => this.setState({ region })}
          onRegionChangeComplete={region => this.setState({ region })}
        >
          <MapView.Marker coordinate={this.state.region} />
        </MapView>
      </View>
    );
  }
}

export default withUserHOC(Dashboard);
