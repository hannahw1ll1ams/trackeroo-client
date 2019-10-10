import React, { Component } from 'react';
import { Text, View, Button, TextInput, StyleSheet } from 'react-native';
import { Input } from 'react-native-elements';
class RewardCreator extends Component {
  state = {
    challenge: '',
    reward: ''
  };
  handleChange = (event, inputType) => {
    const { text } = event.nativeEvent;
    this.setState({ [inputType]: text });
  };
  handleSubmit = () => {
    console.log(this.props);
    const { postNewReward } = this.props;
    const { challenge, reward } = this.state;
    postNewReward(challenge, reward);
    this.setState({
      challenge: '',
      reward: ''
    });
  };
  render() {
    return (
      <View style={{ paddingBottom: 100 }}>
        <Input
          placeholder="Challenge"
          placeholderTextColor="white"
          onEndEditing={event => this.handleChange(event, 'challenge')}
          name="Challenge"
        />
        <Input
          placeholder="Reward"
          placeholderTextColor="white"
          name="reward"
          onEndEditing={event => this.handleChange(event, 'reward')}
        />
        <Button
          title="Create!"
          onPress={this.handleSubmit}
          containerStyle={{ paddingTop: 20 }}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    paddingBottom: 15,
    justifyContent: 'space-evenly',
    alignItems: 'center'
    // top: 30
  },
  text: {
    textAlign: 'center',
    width: 100,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
export default RewardCreator;
