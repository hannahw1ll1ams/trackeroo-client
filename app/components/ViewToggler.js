import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import GroupCreator from './GroupCreator'
import RewardCreator from './RewardCreator'

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
        <Button titleStyle={{ color: 'black', fontSize: 14 }}
          buttonStyle={{
            paddingLeft: 15,
            paddingRight: 15,
            backgroundColor: 'rgb(255, 128, 0)'
          }} type="outline" onPress={this.handlePress} title={messageToggle === true ? `+Add ${item}` : "Hide Form"}>
        </Button>
        {(isShowingForm) && (item === 'group') && <GroupCreator postNewGroup={postNewGroup} />}
        {(isShowingForm) && (item === 'reward') && <RewardCreator postNewReward={postNewReward} />}
      </View>
    );
  }
}

export default ViewToggler;