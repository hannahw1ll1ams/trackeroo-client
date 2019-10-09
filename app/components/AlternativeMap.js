import React, { Component } from "react";
import {
  Platform,
  Text,
  View,
  StyleSheet,
  TouchableHighlight
} from "react-native";
import Constants from "expo-constants";
import * as Location from "expo-location";
import * as Permissions from "expo-permissions";
import MapView, { Marker, Polyline } from "react-native-maps";
import RunInfo from "./RunInfo";
import RunInfoNumeric from "./RunInfoNumeric";
import haversine from "haversine";
import styles from "../screens/MapView/SharedStyles";
import pick from "lodash.pick";
import Typography from "./Typography";

///this doesn't quite work yet, need to pass in markers correctly to polyline

export default class AlternativeMap extends Component {
  state = {
    errorMessage: null,
    // ownRunObjects: [],
    // watchID: null,
    isMapTrue: false,
    routeCoordinates: [],
    distanceTravelled: 0,
    prevLatLng: {},
    currentSpeed: 0,
    allSpeeds: []
  };

  componentDidUpdate(prevProps) {
    const { isRunning, totalTime, collectFinalRunData } = this.props;
    console.log(isRunning, "<---- is running");
    if (prevProps.isRunning !== this.props.isRunning) {
      if (isRunning) {
        this._getLocationAsync();
      }
      if (isRunning === false) {
        this.location.remove();
        const { routeCoordinates, distanceTravelled, allSpeeds } = this.state;
        const averageSpeed = this.calcAveSpeed(allSpeeds);
        const stringedCoords = JSON.stringify({ run: routeCoordinates });

        collectFinalRunData(averageSpeed, distanceTravelled, stringedCoords);
        // this.setState({
        //   routeCoordinates: [],
        //   distanceTravelled: 0,
        //   prevLatLng: {},
        //   currentSpeed: 0,
        //   allSpeeds: []
        // })
      }
    }
    if (prevProps.resetRun !== this.props.resetRun) {
      this.setState({
        routeCoordinates: [],
        distanceTravelled: 0,
        prevLatLng: {},
        currentSpeed: 0,
        allSpeeds: []
      });
    }
  }

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== "granted") {
      this.setState({
        errorMessage: "Permission to access location was denied"
      });
    }
    this.location = await Location.watchPositionAsync(
      { enableHighAccuracy: true, timeInterval: 1000, distanceInterval: 0.1 },
      location => {
        const { routeCoordinates, distanceTravelled, allSpeeds } = this.state;
        const newLatLngs = {
          latitude: location.coords.latitude,
          longitude: location.coords.longitude
        };
        const positionLatLngs = pick(location.coords, [
          "latitude",
          "longitude"
        ]);

        const speed = location.coords.speed;
        const updatedRun = {
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          average_speed: this.calcAveSpeed(allSpeeds),
          total_distance: distanceTravelled,
          route: JSON.stringify({
            run: routeCoordinates.concat(positionLatLngs)
          })
        };
        //also add run_id and username
        console.log("running", updatedRun);
        this.setState({
          routeCoordinates: routeCoordinates.concat(positionLatLngs),
          // ownRunObjects: [...this.state.ownRunObjects, location],
          distanceTravelled: distanceTravelled + this.calcDistance(newLatLngs),
          prevLatLng: newLatLngs,
          currentSpeed: speed,
          allSpeeds: [...this.state.allSpeeds, speed]
        });
      }
    );
  };

  calcDistance(newLatLng) {
    const { prevLatLng } = this.state;
    return haversine(prevLatLng, newLatLng) || 0;
  }

  calcAveSpeed(speedsArray) {
    if (speedsArray.length > 0) {
      return speedsArray.reduce((a, b) => a + b) / speedsArray.length;
    }
  }

  onMapLayout = () => {
    this.setState({ isMapTrue: true });
  };

  render() {
    const {
      ownRunObjects,
      routeCoordinates,
      distanceTravelled,
      prevLatLng,
      currentSpeed,
      allSpeeds
    } = this.state;
    const { isRunning } = this.state;
    let text = "Waiting..";
    if (this.state.errorMessage) {
      text = this.state.errorMessage;
    } else if (this.state.location) {
      text = JSON.stringify(this.state.location);
    }
    // console.log(ownRunObjects, '<--- routeCoordinates')
    console.log(routeCoordinates, "<--- routeCoordinates");
    // console.log(distanceTravelled, '<--- distanceTravelled')
    // console.log(prevLatLng, '<--- prevLatLng')
    // console.log(currentSpeed, '<--- currentSpeed')
    // console.log(allSpeeds, '<--- allSpeeds')
    // console.log(routeCoordinates, '<--- allSpeeds')

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
          // overlays={[{
          //   coordinates: this.state.routeCoordinates,
          //   strokeColor: '#19B5FE',
          //   lineWidth: 10,
          // }]}
        >
          {/* {ownRunObjects.length > 0 && <Marker coordinate={{ latitude: ownRunObjects[0].coords.latitude, longitude: ownRunObjects[0].coords.longitude }}
            title="starting position"
            description={ownRunObjects[0].description} />}

          {ownRunObjects.map(marker => {
            <Marker key={marker.timestamp}
              coordinate={{ latitude: marker.coords.latitude, longitude: marker.coords.longitude }}
              title="route"
              description={marker.description}
            />
          }
          )} */}

          {/* {routeCoordinates.length > 0 && <Marker coordinate={{ latitude: routeCoordinates[0].latitude, longitude: routeCoordinates[0].longitude }}
            title="starting position"
            description={routeCoordinates[0].description} />} */}

          {/* {routeCoordinates.map(marker => (
            <Marker key={marker.timestamp}
              coordinate={{ latitude: marker.coords.latitude, longitude: marker.coords.longitude }}
              title="route"
              description={marker.description}
            />
          ))} */}

          {this.state.isMapTrue && routeCoordinates.length > 0 && (
            <Marker
              coordinate={{
                latitude: routeCoordinates[0].latitude,
                longitude: routeCoordinates[0].longitude
              }}
              title="Start"
            />
          )}
          {this.state.isMapTrue &&
            routeCoordinates.length > 0 &&
            isRunning === false && (
              <Marker
                coordinate={{
                  latitude: routeCoordinates.slice(-1)[0].latitude,
                  longitude: routeCoordinates.slice(-1)[0].longitude
                }}
                title="Finish"
              />
            )}

          {this.state.isMapTrue && (
            <Polyline strokeWidth={5} coordinates={routeCoordinates} />
          )}
          {/* {
            this.state.isMapTrue && ownRunObjects.length > 6 &&
            <Polyline coordinates={[
              { latitude: ownRunObjects[0].coords.latitude, longitude: ownRunObjects[0].coords.longitude },
              { latitude: ownRunObjects[1].coords.latitude, longitude: ownRunObjects[1].coords.longitude },
              { latitude: ownRunObjects[2].coords.latitude, longitude: ownRunObjects[2].coords.longitude },
              { latitude: ownRunObjects[3].coords.latitude, longitude: ownRunObjects[3].coords.longitude },
              { latitude: ownRunObjects[4].coords.latitude, longitude: ownRunObjects[4].coords.longitude }
            ]} strokeWidth={5}
            />
          } */}
        </MapView>
        {isRunning === false && routeCoordinates.length > 0 && (
          <Typography>You have posted a new run!</Typography>
        )}
        <Typography>Speed: {currentSpeed.toFixed(2)} </Typography>
        <Typography>Distance: {distanceTravelled.toFixed(2)} km</Typography>

        {/* if no-one is running */}
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
