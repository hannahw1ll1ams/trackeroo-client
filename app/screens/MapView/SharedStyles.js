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
    height: 300,
    width: 475,
    left: 0,
    top: 0,
    bottom: 0,
    flex: 0
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});


export default styles;