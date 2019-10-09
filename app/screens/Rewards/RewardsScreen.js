import styles from './styles';
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import ToggleButton from '../../components/ToggleButton';
import { ListItem, Icon, ButtonGroup } from "react-native-elements";
import { FlatList, Platform, StatusBar, StyleSheet } from "react-native";
import { SafeAreaView } from "react-navigation";
import { Button } from 'react-native-paper';
import ViewToggler from '../../components/ViewToggler'
import RewardItem from '../../components/RewardItem'
import Typography from '../../components/Typography';
import * as api from '../../api'

class RewardsScreen extends Component {
  // static navigationOptions = ({ navigation }) => {
  //   return {
  //     title: navigation.getParam('title'),
  //     headerLeft: (
  //       <ToggleButton navigation={navigation} />)
  //   }
  // };

  state = {
    user: {},
    completedRewards: [],
    openRewards: [],
    // rewards: [{ challenge: 1000, reward: 'last one buys a round of beers', winner: null, reward_id: "2314FDHJKJSD" }, { challenge: 500, reward: 'free coffee', winner: null, reward_id: "fkjshhtefka8298" }, { challenge: 723, reward: 'blueberry and white chocolate muffin', winner: null, reward_id: "2314FDwedsHJKJSD" }, { challenge: 500, reward: 'vegan pizza', winner: null, reward_id: "fkjshfkfdsaa8298" }],
    selectedIndex: 0
  }

  keyExtractor = item => String(item.reward_id);

  componentDidMount() {
    //request here for all the live data
    api.fetchRewards().then(openRewards => {
      this.setState({ openRewards })
    }).catch(error => console.log("ERROR"))
    //request for user data and total distance travelled, 
    //if over the reward amount, render claim button.

    api.getSpecificUser("hannah").then(user => {
      this.setState({ user })
    })
  }

  componentDidUpdate(prevState) {
    const { selectedIndex } = this.state
    if (prevState.selectedIndex !== selectedIndex) {
      if (selectedIndex === 0) {
        //do request for live data
        api.fetchRewards().then(openRewards => {
          this.setState({ openRewards })
        }).catch(error => console.log("ERROR"))
      }
      if (selectedIndex === 1) {
        //do request for closed data
        api.fetchRewards("yes").then(completedRewards => {
          this.setState({ completedRewards })
        }).catch(error => console.log("ERROR"))
      }
    }
  }

  postNewReward = (challenge, reward) => {
    this.setState(currentState => {
      return { rewards: [...currentState.rewards, { challenge: challenge, reward: reward, status: 'LIVE' }] }
    })
  }

  rewardClaimed = (reward_id) => {
    //need to pass in the username, in storage?!!!

    //do patch reward request to reward table
    api.claimReward(reward_id, "hannah")
    //do patch user table with +1 reward
    api.updateUserRewardTotal("hannah")

    console.log(reward_id)
  }

  updateIndex = (selectedIndex) => {
    this.setState({ selectedIndex })
  }

  render() {
    const { rewards, selectedIndex } = this.state
    const buttons = ["Live", "Closed"]

    return (
      <SafeAreaView style={styles.container}>
        <ButtonGroup
          onPress={this.updateIndex}
          selectedIndex={selectedIndex}
          buttons={buttons}
          containerStyle={{ height: 100 }}
        />
        {selectedIndex === 0 && <Typography>What is up for grabs??</Typography>}
        <FlatList
          data={rewards}
          selectedIndex={selectedIndex}
          keyExtractor={this.keyExtractor}
          renderItem={({ item }) => (
            <RewardItem rewardObj={item} rewardClaimed={this.rewardClaimed} selectedIndex={selectedIndex} />
          )} />
        <ViewToggler item='reward' postNewReward={this.postNewReward} />
      </SafeAreaView>
    );
  }
}

export default RewardsScreen;
