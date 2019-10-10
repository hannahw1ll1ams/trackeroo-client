import React, { Component } from "react";
import { View, Dimensions, StyleSheet } from "react-native";
import * as Location from "expo-location";
import * as Permissions from "expo-permissions";
import MapView, { Marker, Polyline } from "react-native-maps";
import haversine from "haversine";
import styles from "../screens/MapView/SharedStyles";
import pick from "lodash.pick";
import Typography from "./Typography";
import AlternativeStopWatch from "./AlternativeStopWatch";
import StopWatch from "./StopWatch";

///this doesn't quite work yet, need to pass in markers correctly to polyline

const boxStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  paddingVertical: 10,
  paddingLeft: 20
};

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

  async componentDidUpdate(prevProps) {
    const { isRunning, totalTime, collectFinalRunData } = this.props;
    if (prevProps.isRunning !== this.props.isRunning) {
      if (isRunning) {
        this._getLocationAsync();
      }
      if (!isRunning) {
        this.location.remove();
        const { routeCoordinates, distanceTravelled, allSpeeds } = this.state;
        const averageSpeed = this.calcAveSpeed(allSpeeds);
        const stringedCoords = JSON.stringify({ run: routeCoordinates });

        await collectFinalRunData(
          averageSpeed,
          distanceTravelled,
          stringedCoords
        );
      }
    }
    if (prevProps.shouldResetStopWatch !== this.props.shouldResetStopWatch) {
      this.setState({
        routeCoordinates: [],
        distanceTravelled: 0,
        prevLatLng: {},
        currentSpeed: 0,
        allSpeeds: []
      });
    }
  }

  getPosition = async location => {
    const { routeCoordinates, distanceTravelled, allSpeeds } = this.state;
    const newLatLngs = {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude
    };
    const positionLatLngs = pick(location.coords, ["latitude", "longitude"]);
    console.log("speeds", allSpeeds, this.calcAveSpeed(allSpeeds));
    const speed = location.coords.speed;
    const updatedRun = {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      average_speed: this.calcAveSpeed(allSpeeds),
      total_distance: distanceTravelled,
      coordinates: JSON.stringify({
        run: routeCoordinates.concat(positionLatLngs)
      })
    };
    const { onUpdateRun } = this.props;
    console.log("up", onUpdateRun, updatedRun);
    await onUpdateRun(updatedRun);
    //also add run_id and username

    this.setState({
      routeCoordinates: routeCoordinates.concat(positionLatLngs),
      // ownRunObjects: [...this.state.ownRunObjects, location],
      distanceTravelled: distanceTravelled + this.calcDistance(newLatLngs),
      prevLatLng: newLatLngs,
      currentSpeed: speed,
      allSpeeds: [...this.state.allSpeeds, speed]
    });
  };
  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== "granted") {
      this.setState({
        errorMessage: "Permission to access location was denied"
      });
    }
    this.location = await Location.watchPositionAsync(
      { enableHighAccuracy: true, timeInterval: 1000, distanceInterval: 0.1 },
      this.getPosition
    );
  };

  calcDistance(newLatLng) {
    const { prevLatLng } = this.state;
    return haversine(prevLatLng, newLatLng) || 0;
  }

  calcAveSpeed(speedsArray) {
    if (speedsArray.length > 0) {
      return speedsArray.reduce((a, b) => a + b) / speedsArray.length;
    } else {
      return 0;
    }
  }

  onMapLayout = () => {
    this.setState({ isMapTrue: true });
  };

  render() {
    const { routeCoordinates, distanceTravelled, currentSpeed } = this.state;
    const {
      isRunning,
      updateActivityStatus,
      onReset,
      shouldResetStopWatch
    } = this.props;
    const { onResetPress } = this.props;
    // const { isRunning } = this.state;
    let text = "Waiting..";
    if (this.state.errorMessage) {
      text = this.state.errorMessage;
    } else if (this.state.location) {
      text = JSON.stringify(this.state.location);
    }

    return (
      <View style={{ display: "flex", flexDirection: "column" }}>
        <MapView
          onLayout={this.onMapLayout}
          style={{
            height: Dimensions.get("window").height - 50,
            width: Dimensions.get("window").width
          }}
          showsUserLocation={true}
          followsUserLocation={true}
          initialRegion={{
            latitude: 53.486653,
            longitude: -2.240088,
            latitudeDelta: 0.02,
            longitudeDelta: 0.02
          }}
        >
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
        </MapView>

        <View
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            position: "absolute",
            top: 0,
            left: 0,
            backgroundColor: "#121212",
            width: Dimensions.get("window").width
          }}
        >
          <View style={boxStyle}>
            <Typography color="secondary" fontSize={12}>
              Speed:
            </Typography>
            <View
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-end"
              }}
            >
              <Typography color="accent" fontSize={30}>
                {currentSpeed.toFixed(1)}
              </Typography>
              <View style={{ marginBottom: 5, marginLeft: 5 }}>
                <Typography fontSize={12} color="primary">
                  mph
                </Typography>
              </View>
            </View>
          </View>
          <View style={boxStyle}>
            <Typography fontSize={12} color="secondary">
              Distance:
            </Typography>
            <View
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-end"
              }}
            >
              <Typography color="accent" fontSize={30}>
                {distanceTravelled.toFixed(1)}
              </Typography>
              <View style={{ marginBottom: 5, marginLeft: 5 }}>
                <Typography fontSize={12} color="primary">
                  km
                </Typography>
              </View>
            </View>
          </View>

          {/* <AlternativeStopWatch
            updateActivityStatus={updateActivityStatus}
            onResetPress={onResetPress}
          /> */}
          <StopWatch
            shouldResetStopWatch={shouldResetStopWatch}
            onReset={onReset}
            isRunning={isRunning}
          />
        </View>
      </View>
    );
  }
}
