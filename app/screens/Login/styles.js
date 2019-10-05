import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center"
  },
  inputStyle: {
    backgroundColor: '#b4ffff',
    marginBottom: 15,
    fontSize: 25,
    color: '#69f0ae',
    paddingLeft: 15,
    paddingRight: 15
  },
  bottomText: {
    fontSize: 10,
  },
  error: {
    borderWidth: 3,
    borderColor: 'red'
  }
});

export default styles;