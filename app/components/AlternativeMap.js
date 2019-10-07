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

///this doesn't quite work yet, need to pass in markers correctly to polyline 

export default class AlternativeMap extends Component {
  state = {
    errorMessage: null,
    runs: [{ endTime: "00:00:00:457", distance: '', speed: '', markers: [] }],
    ownRunMarkers: [],
    finishedRun: false,
    watchID: null,
    isMapTrue: false
  };

  componentDidMount() {
    this._getLocationAsync();
  }

  _getLocationAsync = async () => {
    const { isRunning } = this.props;
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied',
      });
    }
    await Location.watchPositionAsync({ enableHighAccuracy: true, timeInterval: 1000, distanceInterval: 0.1 }, location => {
      // if (isRunning) {
      this.setState({ ownRunMarkers: [...this.state.ownRunMarkers, location] })
      // }
    })
  }

  onMapLayout = () => {
    this.setState({ isMapTrue: true })
  }

  onEndRun = (time) => {
    const { ownRunMarkers } = this.state
    this.setState({ finishedRun: true })
  }

  render() {
    const { ownRunMarkers } = this.state
    let text = 'Waiting..';
    if (this.state.errorMessage) {
      text = this.state.errorMessage;
    } else if (this.state.location) {
      text = JSON.stringify(this.state.location);
    }
    // console.log(ownRunMarkers)
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
          {ownRunMarkers.length > 0 && <Marker coordinate={{ latitude: ownRunMarkers[0].coords.latitude, longitude: ownRunMarkers[0].coords.longitude }}
            title="starting position"
            description={ownRunMarkers[0].description} />}

          {/* {markers.map(marker => (
            <Marker key={marker.timestamp}
              coordinate={{ latitude: marker.coords.latitude, longitude: marker.coords.longitude }}
              title="starting position"
              description={marker.description}
            />
          ))} */}

          {
            this.state.isMapTrue && ownRunMarkers.length > 6 &&
            <Polyline coordinates={[
              { latitude: ownRunMarkers[0].coords.latitude, longitude: ownRunMarkers[0].coords.longitude },
              { latitude: ownRunMarkers[1].coords.latitude, longitude: ownRunMarkers[1].coords.longitude },
              { latitude: ownRunMarkers[2].coords.latitude, longitude: ownRunMarkers[2].coords.longitude },
              { latitude: ownRunMarkers[3].coords.latitude, longitude: ownRunMarkers[3].coords.longitude },
              { latitude: ownRunMarkers[4].coords.latitude, longitude: ownRunMarkers[4].coords.longitude }
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