import styles from './styles';
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import ToggleButton from '../../components/ToggleButton';
import { ListItem, Icon } from "react-native-elements";
import { FlatList, Platform, StatusBar, StyleSheet } from "react-native";
import { SafeAreaView } from "react-navigation";
import { Button } from 'react-native-paper';
import ViewToggler from '../../components/ViewToggler'

class RewardsScreen extends Component {
  // static navigationOptions = ({ navigation }) => {
  //   return {
  //     title: navigation.getParam('title'),
  //     headerLeft: (
  //       <ToggleButton navigation={navigation} />)
  //   }
  // };

  state = {
    rewards: [{ challenge: '10,000 Steps', reward: 'last one buys a round of beers', madeBy: 'John', status: 'LIVE' }, { challenge: '5,000 steps', reward: 'free coffee', madeBy: 'hannah', status: 'CLOSED' }],
  }

  keyExtractor = item => String(item.challenge);

  renderItem = ({ item }) => (
    <ListItem
      title={item.challenge}
      subtitle={item.reward}
      rightTitle={item.status}
      bottomDivider={true}
    />
  );

  postNewReward = (challenge, reward) => {
    this.setState(currentState => {
      return { rewards: [...currentState.rewards, { challenge: challenge, reward: reward, status: 'LIVE' }] }
    })
  }

  render() {
    const { rewards } = this.state
    return (
      <SafeAreaView style={styles.container}>
        <ToggleButton navigation={this.props.navigation} />
        <Text>This is RewardsScreen</Text>
        <FlatList data={rewards} keyExtractor={this.keyExtractor} renderItem={this.renderItem} />
        <Button title='+' />
        <ViewToggler item='reward' postNewReward={this.postNewReward} />
      </SafeAreaView>
    );
  }
}

export default RewardsScreen;