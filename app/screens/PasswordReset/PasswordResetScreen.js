import styles from './styles';
import React, { Component } from 'react';
import { View, TextInput, TouchableOpacity, Image } from 'react-native';

import { Input, Text, Button } from 'react-native-elements';

class PasswordResetScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('title'),
      headerStyle: {
        backgroundColor: '#61469C'
      }
    };
  };
  state = {
    username: ''
  };

  handleChange = () => {
    this.setState;
  };

  render() {
    return (
      <View style={styles.reset}>
        {/* <Image style={styles.logo} source={require('./oops.png')} /> */}
        <Text style={{ color: 'white', paddingBottom: 30 }} h4>
          Enter Username
        </Text>
        <Input
          placeholder="username: "
          placeholderTextColor="white"
          onEndEditing={event => this.handleChange(event, 'username')}
        />

        <TouchableOpacity>
          <Button
            style={styles.button}
            title="Recover"
            onPress={this.handleSubmit}
          ></Button>
        </TouchableOpacity>
      </View>
    );
  }
}

export default PasswordResetScreen;
