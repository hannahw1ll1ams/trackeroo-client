import React, { Component } from "react";

import { SafeAreaView } from "react-navigation";
import ToggleButton from '../../components/ToggleButton'
import MapView, { Marker, Polyline } from 'react-native-maps';
import Constants from 'expo-constants';
import styles from './styles';
import { Text, View, Button } from 'react-native';

export class PersonalProfileScreen extends Component {

  state = {
    isMapTrue: false,
    showSpecificRun: false,
    specificRun: '',
    pastRuns: [
      [{ latitude: 53.192014, longitude: -2.895863 }, { latitude: 53.191860, longitude: -2.895772 }, { latitude: 53.191799, longitude: -2.895954 }, { latitude: 53.191941, longitude: -2.896062 }, { latitude: 53.191899, longitude: -2.896346 }, { latitude: 53.191867, longitude: -2.896635 }, { latitude: 53.191876, longitude: -2.896807 }],

      [{ latitude: 53.192240, longitude: -2.896228 }, { latitude: 53.192223, longitude: -2.896571 }, { latitude: 53.192211, longitude: -2.896850 }, { latitude: 53.192420, longitude: -2.896915 }, { latitude: 53.192516, longitude: -2.896700 }, { latitude: 53.192397, longitude: -2.896657 }, { latitude: 53.192342, longitude: -2.897178 }]]
  }

  onMapLayout = () => {
    this.setState({ isMapTrue: true })
  }

  onPress = (event, runNumber) => {
    console.log(event, runNumber)
    if (runNumber === 'all') {
      this.setState({ showSpecificRun: false, specificRun: '' })
    }
    else {
      this.setState({ showSpecificRun: true, specificRun: runNumber })
    }
  }

  render() {
    const { navigation } = this.props;
    const { pastRuns, showSpecificRun, specificRun, isMapTrue } = this.state;
    return (
      <SafeAreaView style={styles.wholeContainer}>
        <ToggleButton style={styles.button} navigation={navigation} />
        <MapView onLayout={this.onMapLayout}
          style={styles.map}
          showsUserLocation
          followsUserLocation
          initialRegion={{
            latitude: 53.190959,
            longitude: -2.864260,
            latitudeDelta: 0.02,
            longitudeDelta: 0.02
          }}>
          {showSpecificRun === false && isMapTrue &&
            <View>
              <Polyline coordinates={[{ latitude: 53.192014, longitude: -2.895863 }, { latitude: 53.191860, longitude: -2.895772 }, { latitude: 53.191799, longitude: -2.895954 }, { latitude: 53.191941, longitude: -2.896062 }, { latitude: 53.191899, longitude: -2.896346 }, { latitude: 53.191867, longitude: -2.896635 }, { latitude: 53.191876, longitude: -2.896807 }]} strokeWidth={5}
              />
              <Polyline coordinates={[{ latitude: 53.192240, longitude: -2.896228 }, { latitude: 53.192223, longitude: -2.896571 }, { latitude: 53.192211, longitude: -2.896850 }, { latitude: 53.192420, longitude: -2.896915 }, { latitude: 53.192516, longitude: -2.896700 }, { latitude: 53.192397, longitude: -2.896657 }, { latitude: 53.192342, longitude: -2.897178 }]} strokeWidth={5}
              />
            </View>
          }
          {showSpecificRun === true && isMapTrue && specificRun === 'run1' &&
            <Polyline coordinates={[{ latitude: 53.192014, longitude: -2.895863 }, { latitude: 53.191860, longitude: -2.895772 }, { latitude: 53.191799, longitude: -2.895954 }, { latitude: 53.191941, longitude: -2.896062 }, { latitude: 53.191899, longitude: -2.896346 }, { latitude: 53.191867, longitude: -2.896635 }, { latitude: 53.191876, longitude: -2.896807 }]} strokeWidth={5}
            />
          }
          {showSpecificRun === true && isMapTrue && specificRun === 'run2' &&
            <Polyline coordinates={[{ latitude: 53.192240, longitude: -2.896228 }, { latitude: 53.192223, longitude: -2.896571 }, { latitude: 53.192211, longitude: -2.896850 }, { latitude: 53.192420, longitude: -2.896915 }, { latitude: 53.192516, longitude: -2.896700 }, { latitude: 53.192397, longitude: -2.896657 }, { latitude: 53.192342, longitude: -2.897178 }]} strokeWidth={5}
            />
          }
        </MapView>
        <Button title='RUN 1' onPress={(event) => this.onPress(event, 'run1')} />
        <Button title='RUN 2' onPress={(event) => this.onPress(event, 'run2')} />
        <Button title='View all' onPress={(event) => this.onPress(event, 'all')} />

      </SafeAreaView>
    );
  }
}

export default PersonalProfileScreen;

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