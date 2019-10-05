import React, { Component } from 'react';
import { Platform, Text, View, StyleSheet, TouchableHighlight } from 'react-native';
import Constants from 'expo-constants';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import MapView from 'react-native-maps';
import RunInfo from './RunInfo';
import RunInfoNumeric from './RunInfoNumeric';
import haversine from 'haversine';
import styles from '../screens/MapView/SharedStyles'



export default class App extends Component {
  state = {
    errorMessage: null,
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
    await Location.watchPositionAsync({ enableHighAccuracy: true, timeInterval: 5000, distanceInterval: 5 }, location => {
      this.setState({ markers: [...this.state.markers, location] })
    })
  }

  onMapLayout = () => {
    this.setState({ isMapTrue: true })
  }

  render() {
    const { markers } = this.state
    let text = 'Waiting..';
    if (this.state.errorMessage) {
      text = this.state.errorMessage;
    } else if (this.state.location) {
      text = JSON.stringify(this.state.location);
    }
    console.log(markers)
    return (
      // <View style={styles.container}>
      //   {markers.map(marker => {
      //     return <Text>{marker.coords.longitude}</Text>
      //   })}
      // </View>
      <View style={styles.container}>
        <MapView
          onLayout={this.onMapLayout}
          style={styles.map}
          showsUserLocation
          followsUserLocation
          initialRegion={{
            latitude: 37.33307,
            longitude: -122.0324,
            latitudeDelta: 0.02,
            longitudeDelta: 0.02
          }}
        >
          {this.state.isMapTrue &&
            <MapView.Polyline
              coordinates={this.state.markers.map(marker => marker.coordinate)}
              strokeWidth={5}
            />
          }
        </MapView>
        <View style={styles.ic1}>
        </View>
        <View style={styles.infoWrapper}>
          <RunInfoNumeric
            title="Distance"
            unit="mi"
            ref={info => (this.distanceInfo = info)}
          />
          <RunInfoNumeric
            title="Speed"
            unit="0 km/h"
            ref={info => (this.speedInfo = info)}
          />
          <RunInfo
            title="Direction"
            value="NE"
            ref={info => (this.directionInfo = info)}
          />
        </View>
        <View>
          {/* <Button
            title="Go to Details"
            onPress={() => this.props.navigation.navigate('StopWatch')}
          /> */}
        </View>
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