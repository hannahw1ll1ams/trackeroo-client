import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
  },
  wholeContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  map: {
    // ...StyleSheet.absoluteFillObject
    height: 200,
    width: 350,
    left: 0,
    top: 0,
    bottom: 0,
    flex: 0
  },
  button: {
    position: "absolute",
    top: 5,

  }
});

export default styles;