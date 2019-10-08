import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  fullSize: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#606469'
  },
  inputStyle: {
    marginBottom: 15,
    fontSize: 25,
    color: '#69f0ae',
    paddingLeft: 15,
    paddingRight: 15,
    borderColor: 'white'
  },
  bottomText: {
    fontSize: 12
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
    fontSize: 30,
    color: 'white',
    paddingTop: 10
  },
  login: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white'
  },
  backgroundImage: {
    width: 100,
    height: 100
  },
  username: {
    color: 'white'
  },
  logo: {
    width: 200,
    height: 200
  },
  button: {
    paddingTop: 15,
    paddingBottom: 5
  }
});

export default styles;
