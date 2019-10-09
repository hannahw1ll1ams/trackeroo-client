import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    bottom: 10
  },
  padLeft: {
    paddingLeft: 16
  },
  padRight: {
    paddingRight: 16
  },
  groups: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    color: 'white'
  },
  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover'
  },
  text: {
    color: 'white',
    fontSize: 20,
    justifyContent: 'center'
  }
});

export default styles;
