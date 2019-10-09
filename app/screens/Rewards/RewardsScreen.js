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

class RewardsScreen extends Component {
  // static navigationOptions = ({ navigation }) => {
  //   return {
  //     title: navigation.getParam('title'),
  //     headerLeft: (
  //       <ToggleButton navigation={navigation} />)
  //   }
  // };

  state = {
    rewards: [{ challenge: 1000, reward: 'last one buys a round of beers', winner: null, reward_id: "2314FDHJKJSD" }, { challenge: 500, reward: 'free coffee', winner: null, reward_id: "fkjshhtefka8298" }, { challenge: 723, reward: 'blueberry and white chocolate muffin', winner: null, reward_id: "2314FDwedsHJKJSD" }, { challenge: 500, reward: 'vegan pizza', winner: null, reward_id: "fkjshfkfdsaa8298" }],
    selectedIndex: 0
  }

  keyExtractor = item => String(item.reward_id);

  componentDidMount() {
    //request here for all the live data
  }

  componentDidUpdate(prevState) {
    const { selectedIndex } = this.state
    if (prevState.selectedIndex !== selectedIndex) {
      if (selectedIndex === 0) {
        //do request for live data
      }
      if (selectedIndex === 1) {
        //do request for closed data
      }
    }
  }

  postNewReward = (challenge, reward) => {
    this.setState(currentState => {
      return { rewards: [...currentState.rewards, { challenge: challenge, reward: reward, status: 'LIVE' }] }
    })
  }

  rewardClaimed = (id) => {
    //do patch reward request to reward table
    //do patch user table with +1 reward

    //get request for specific user, look at cummulative_distance and compare to each reward challenge key. If only it then render claim button.
    console.log(id)
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
