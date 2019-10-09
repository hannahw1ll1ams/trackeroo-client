import React, { Component } from 'react';
import { View, Button, Text, FlatList, StyleSheet } from 'react-native';
import { ListItem, ButtonGroup } from 'react-native-elements';
import Typography from '../../components/Typography';
import { SafeAreaView } from 'react-navigation';
import { Avatar, Badge, Icon, withBadge } from 'react-native-elements'
import UserItem from '../../components/UserItem'


class FollowingScreen extends Component {
  state = {
    users: [
      { name: 'John', followers: "10" },
      { name: 'Hannah', followers: "100000" },
      { name: 'Thanh', followers: "75" },
      { name: 'Tim', followers: "-30" }
    ],
    suggested: [
      { name: 'Rowan', followers: "67" },
      { name: 'Williams', followers: "3" },
      { name: 'Doran', followers: "76" },
      { name: 'Doan', followers: "100" }
    ], selectedIndex: 0
  };


  updateIndex = (selectedIndex) => {
    this.setState({ selectedIndex })
  }

  handlePress = () => {
    console.log('pressed')
  }

  render() {
    const { users, selectedIndex, suggested } = this.state;
    const buttons = ["Current Rankings", "Suggested"]
    // console.log(users);
    return (
      <View style={styles.container}>
        <ButtonGroup
          onPress={this.updateIndex}
          selectedIndex={selectedIndex}
          buttons={buttons}
          containerStyle={{ height: 100 }}
        />
        {selectedIndex === 1 && <Typography>People you might know to invite to group</Typography>
        }
        <FlatList
          keyExtractor={item => item.name}
          data={selectedIndex === 0 ? users : suggested}
          renderItem={({ item }) => <UserItem user={item} current={selectedIndex === 0 ? true : false} />}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    flex: 1
  },
  text: {
    fontSize: 25,
    color: 'purple',
    marginLeft: 7
  },
  flatview: {
    justifyContent: "center",
    paddingTop: 30,
    borderRadius: 2
  }
});

export default FollowingScreen;