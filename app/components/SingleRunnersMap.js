import React, { Component } from 'react';
import { Platform, Text, View, StyleSheet, TouchableHighlight } from 'react-native';
import Constants from 'expo-constants';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import MapView, { Marker, Polyline } from 'react-native-maps';
import RunInfo from './RunInfo';
import RunInfoNumeric from './RunInfoNumeric';
import haversine from 'haversine';
import styles from '../screens/MapView/SharedStyles';
import pick from 'lodash.pick';
import Typography from './Typography';



export default class SingleRunnersMap extends Component {
  state = {
    isMapTrue: false,
  };

  onMapLayout = () => {
    this.setState({ isMapTrue: true })
  }


  render() {
    const { isMapTrue } = this.state;
    const run = JSON.stringify(this.props.navigation.getParam('run', 'NO-run'))

    return (
      <View style={styles.container}>
        <MapView
          onLayout={this.onMapLayout}
          style={styles.map}
          showsUserLocation={true}
          followsUserLocation={true}
          initialRegion={{
            latitude: 53.486653,
            longitude: -2.240088,
            latitudeDelta: 0.02,
            longitudeDelta: 0.02
          }}
        >
          {isMapTrue &&
            <Marker coordinate={{ latitude: routeCoordinates[0].latitude, longitude: routeCoordinates[0].longitude }}
              title="Start"
            />
          }
          {isMapTrue &&
            <Polyline strokeWidth={5} coordinates={routeCoordinates} />
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