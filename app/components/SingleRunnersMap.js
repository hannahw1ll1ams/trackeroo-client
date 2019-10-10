import React, { Component, useState, useContext } from "react";
import {
  Platform,
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
  Dimensions
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
import RunsContext from "../context/RunsContext";

const SingleRunnersMap = ({ navigation }) => {
  const { run_id } = navigation.state.params;
  const { runs } = useContext(RunsContext);
  const [isMapTrue, setIsMapTrue] = useState(false);
  const onMapLayout = () => {
    setIsMapTrue(true);
  };

  const run = runs.find(r => r.run_id === run_id);
  console.log("WEBSOCKET RUNNAAA", run);
  return run ? (
    <View style={{ display: "flex", flexDirection: "column" }}>
      <MapView
        onLayout={onMapLayout}
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
        {isMapTrue && (
          <Marker
            coordinate={{
              latitude: run.latitude,
              longitude: run.longitude
            }}
            title="Start"
          />
        )}
        {run.coordinates && (
          <Polyline
            strokeWidth={5}
            coordinates={JSON.parse(run.coordinates).run}
          />
        )}
      </MapView>
    </View>
  ) : null;
};

export default SingleRunnersMap;

// export default class SingleRunnersMap extends Component {
//   state = {
//     isMapTrue: false
//   };

//   render() {
//     const { isMapTrue } = this.state;
//     const run = JSON.stringify(this.props.navigation.getParam("run", "NO-run"));
//   }
// }
