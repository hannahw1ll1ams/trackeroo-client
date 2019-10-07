import React, { Component } from 'react';
import { Text, View, Button, TextInput } from 'react-native';
import styles from '../screens/Groups/styles';


class RewardCreator extends Component {
  state = {
    challenge: '',
    reward: ''
  }

  handleChange = (event, inputType) => {
    const { text } = event.nativeEvent
    this.setState({ [inputType]: text })
  }

  handleSubmit = () => {
    console.log(this.props)
    const { postNewReward } = this.props
    const { challenge, reward } = this.state;
    postNewReward(challenge, reward)
    this.setState({
      challenge: '',
      reward: ''
    })
  }

  render() {

    return (
      <View>
        <Text> New Reward Details :</Text>

        <TextInput placeholder='challenge' onEndEditing={(event) => this.handleChange(event, 'challenge')} name='challenge' style={styles.inputStyle}
        />
        <TextInput placeholder='reward' name='reward' onEndEditing={(event) => this.handleChange(event, 'reward')} style={styles.inputStyle}
        />
        <Button title="Create!" onPress={this.handleSubmit} />
      </View>
    );
  }
}

export default RewardCreator;