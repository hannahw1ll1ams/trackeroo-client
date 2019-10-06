import React, { Component } from 'react';
import { Platform, Text, View, StyleSheet, TouchableHighlight } from 'react-native';
import Constants from 'expo-constants';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import MapView, { Marker, Polyline } from 'react-native-maps';
import RunInfo from './RunInfo';
import RunInfoNumeric from './RunInfoNumeric';
import haversine from 'haversine';
import styles from '../screens/MapView/SharedStyles'



export default class App extends Component {
  state = {
    errorMessage: null,
    startTime: {},
    endTime: {},
    markers: [],
    watchID: null,
    isMapTrue: false
  };

  componentDidMount() {
    this._getLocationAsync();
  }

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied',
      });
    }
    await Location.watchPositionAsync({ enableHighAccuracy: true, timeInterval: 1000, distanceInterval: 0.1 }, location => {
      this.setState({ markers: [...this.state.markers, location] })
    })
  }

  onMapLayout = () => {
    this.setState({ isMapTrue: true })
  }

  onEndRun = () => {
    const { markers, startTime, endTime } = this.state
    //send to database, the run route, the start time and end time.
  }


  render() {
    const { markers } = this.state
    let text = 'Waiting..';
    if (this.state.errorMessage) {
      text = this.state.errorMessage;
    } else if (this.state.location) {
      text = JSON.stringify(this.state.location);
    }
    // console.log(markers)
    return (
      <View style={styles.container}>
        {/* {markers.map(marker => {
          return <Text key={marker.timestamp}>{marker.coords.longitude}</Text>
        })} */}
        <MapView
          onLayout={this.onMapLayout}
          style={styles.map}
          showsUserLocation
          followsUserLocation
          initialRegion={{
            latitude: 53.190959,
            longitude: -2.864260,
            latitudeDelta: 0.02,
            longitudeDelta: 0.02
          }}
        >
          {markers.length > 0 && <Marker coordinate={{ latitude: markers[0].coords.latitude, longitude: markers[0].coords.longitude }}
            title="starting position"
            description={markers[0].description} />}

          {/* {markers.map(marker => (
            <Marker key={marker.timestamp}
              coordinate={{ latitude: marker.coords.latitude, longitude: marker.coords.longitude }}
              title="starting position"
              description={marker.description}
            />
          ))} */}

          {
            this.state.isMapTrue && markers.length > 6 &&
            <Polyline coordinates={[
              { latitude: markers[0].coords.latitude, longitude: markers[0].coords.longitude },
              { latitude: markers[1].coords.latitude, longitude: markers[1].coords.longitude },
              { latitude: markers[2].coords.latitude, longitude: markers[2].coords.longitude },
              { latitude: markers[3].coords.latitude, longitude: markers[3].coords.longitude },
              { latitude: markers[4].coords.latitude, longitude: markers[4].coords.longitude }
            ]} strokeWidth={5}
            />
          }

        </MapView>
      </View>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingTop: Constants.statusBarHeight,
//     backgroundColor: '#ecf0f1',
//   },
//   paragraph: {
//     margin: 24,
//     fontSize: 18,
//     textAlign: 'center',
//   },
// });