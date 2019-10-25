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
   handleSubmit = async () => {
    // console.l?og(this.props);
    const { postNewReward } = this.props;
    const { challenge, reward } = this.state;
    await postNewReward(challenge, reward);
    this.setState({
      challenge: '',
      reward: ''
    });
  };
  render() {
    return (
      <View style={{ paddingBottom: 100 }}>
        <Input
          inputContainerStyle={{ backgroundColor: "grey" }}

          placeholder="Challenge"
          placeholderTextColor="black"
          onEndEditing={event => this.handleChange(event, 'challenge')}
          name="Challenge"
        />
        <Input
          inputContainerStyle={{ backgroundColor: "grey" }}
          inputStyle={{ color: "white" }}
          placeholder="Reward"
          placeholderTextColor="black"
          name="reward"
          onEndEditing={event => this.handleChange(event, 'reward')}
        />
        <Button
          title="Create!"
          onPress={this.handleSubmit}
          containerStyle={{ paddingTop: 20 }}
          titleStyle={{ color: 'black', fontSize: 14 }}
          buttonStyle={{
            paddingLeft: 15,
            paddingRight: 15,
            backgroundColor: 'rgb(255, 128, 0)'
          }} type="outline"
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
