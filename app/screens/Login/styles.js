import { StyleSheet, Dimensions } from "react-native";
const styles = StyleSheet.create({
  fullSize: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height
  },
  container: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center"
  },
  inputStyle: {
    marginBottom: 15,
    fontSize: 22,
    color: "white",
    paddingLeft: 15,
    paddingRight: 15,
    borderColor: "white"
  },
  bottomText: {
    fontSize: 12
  },
  error: {
    borderWidth: 3,
    borderColor: "red"
  },
  textInput: {
    width: 200,
    height: 40,
    marginBottom: 15,
    color: "white"
  },
  signInText: {
    fontSize: 30,
    color: "white",
    paddingTop: 10,
    marginBottom: 40
  },
  backgroundImage: {
    width: 115,
    height: 100,
    alignItems: "flex-start",
    justifyContent: "center"
  },
  username: {
    color: "white"
  },
  logo: {
    width: 200,
    height: 200
  },
  button: {
    paddingTop: 15,
    paddingBottom: 10
  },
  text: {
    position: "relative",
    marginBottom: 40,
    justifyContent: "flex-start",
    fontSize: 35,
    color: "white",
    fontWeight: "bold",
    marginTop: 20
  }
});
export default styles;

