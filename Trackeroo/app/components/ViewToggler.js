import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import GroupCreator from '../components/GroupCreator'
import RewardCreator from '../components/RewardCreator'

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
    const { postNewGroup, item, postNewReward } = this.props;
    return (
      <View>
        <Button onPress={this.handlePress} title={messageToggle === true ? `+Add${item}` : "Hide Form"}>
        </Button>
        {(isShowingForm) && (item === 'group') && <GroupCreator postNewGroup={postNewGroup} />}
        {(isShowingForm) && (item === 'reward') && <RewardCreator postNewReward={postNewReward} />}
      </View>
    );
  }
}

export default ViewToggler;