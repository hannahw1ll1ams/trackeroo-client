import React, { Component } from 'react';
import { Text, View, Button, TextInput } from 'react-native';
import styles from '../screens/Groups/styles';


class GroupCreator extends Component {
  state = {
    groupName: '',
    groupDescription: ''
  }

  handleChange = (event, inputType) => {
    const { text } = event.nativeEvent
    this.setState({ [inputType]: text })
  }

  handleSubmit = () => {
    console.log(this.props)
    const { postNewGroup } = this.props
    const { groupName } = this.state;
    postNewGroup({ title: groupName })
    this.setState({
      groupName: ''
    })
  }

  render() {

    return (
      <View>
        <Text> New Group Details :</Text>

        <TextInput placeholder='name' onEndEditing={(event) => this.handleChange(event, 'groupName')} name='groupName' style={styles.inputStyle}
        />
        <TextInput placeholder='description' name='groupDescription' onEndEditing={(event) => this.handleChange(event, 'groupDescription')} style={styles.inputStyle}
        />
        <Button title="Create!" onPress={this.handleSubmit} />
      </View>
    );
  }
}

export default GroupCreator;