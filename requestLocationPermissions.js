import { PermissionsAndroid } from 'react-native';

async function requestLocationPermission() {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'Trackeroo Location Tracker',
        message:
          'Trackeroo App needs access to your location ' +
          'so you can begin your run.',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('You can be tracked');
    } else {
      console.log('Location request has been denied');
    }
  } catch (err) {
    console.warn(err);
  }
}

export default requestLocationPermission;