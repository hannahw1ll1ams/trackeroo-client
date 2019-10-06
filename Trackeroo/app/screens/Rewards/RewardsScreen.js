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
    rewards: [{ id: 1, challenge: '10,000 Steps', reward: 'last one buys a round of beers', madeBy: 'John', status: 'Live' }, { id: 2, challenge: '5,000 steps', reward: 'free coffee', madeBy: 'hannah', status: 'Closed' }],
  }

  keyExtractor = item => String(item.id);

  renderItem = ({ item }) => (
    <ListItem
      title={item.challenge}
      subtitle={item.reward}
      bottomDivider={true}
    />
  );

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