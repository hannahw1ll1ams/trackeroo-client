import styles from './styles';
import React, { Component } from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';

class PasswordResetScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('title'),
      headerStyle: {
        backgroundColor: '#61469C',
      }
    }
  };
  state = {
    username: ''
  }

  handleChange = () => {
    this.setState
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          placeholder="username"
          onEndEditing={event => this.handleChange(event, "username")}
          name="username"
          style={styles.inputStyle}
          underlineColorAndroid='black'
        />
        <TouchableOpacity>
          <Text onPress={this.handleSubmit}>Recover</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default PasswordResetScreen;