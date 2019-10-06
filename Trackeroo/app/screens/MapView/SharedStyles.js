import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  runInfoWrapper: {
    backgroundColor: 'rgba(255, 255, 255, 0.75)',
    paddingVertical: 15
  },
  runInfoTitle: {
    textAlign: 'center',
    fontWeight: '700',
    color: '#666'
  },
  runInfoValue: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '200',
    paddingVertical: 5
  },
  infoWrapper: {
    flexDirection: 'row',
    flex: 1
  },
  map: {
    // ...StyleSheet.absoluteFillObject
    height: 600,
    width: 400,
    left: 0,
    top: 0,
    bottom: 0,
    flex: 0
  },
  wholeContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    position: "absolute",
    top: 65,
    backgroundColor: "white",
    width: 300,
    height: 40,
    fontSize: 24,
    textAlign: 'center',
  },
  stopwatch: {
    position: "absolute",
    bottom: 165,
    justifyContent: 'center', alignItems: 'center'
  },
  statsBox: {
    backgroundColor: 'white',
    position: "absolute",
    bottom: 65,
    width: 300,
    textAlign: 'center',

  }
});


export default styles;