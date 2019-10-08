import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  fullSize: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#606469'
  },
  inputStyle: {
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
  },
  textInput: {
    width: 200,
    height: 40,
    marginBottom: 15
  },
  signInText: {
    fontSize: 40
  }
});

export default styles;