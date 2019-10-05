import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import GroupCreator from '../components/GroupCreator'

class ViewToggler extends Component {
  state = {
    isShowingForm: false,
    messageToggle: true
  }
  handlePress = () => {
    const { isShowingForm, messageToggle } = this.state;
    this.setState({ isShowingForm: !isShowingForm, messageToggle: !messageToggle });
  };

  updateIsShowing = (boolean) => {
    this.setState({ isShowingForm: boolean, messageToggle: !boolean })
  }

  render() {
    const { isShowingForm, messageToggle } = this.state;
    const { postNewGroup } = this.props;
    return (
      <View>
        <Button onPress={this.handlePress} title={messageToggle === true ? "+Add Group" : "Hide Form"}>
        </Button>
        {(isShowingForm) && <GroupCreator postNewGroup={postNewGroup} />}
      </View>
    );
  }
}

export default ViewToggler;