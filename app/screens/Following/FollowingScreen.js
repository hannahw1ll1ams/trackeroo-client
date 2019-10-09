import React, { Component } from 'react';
import { View, Button, Text, FlatList, StyleSheet } from 'react-native';
import { ListItem, ButtonGroup } from 'react-native-elements';
import Typography from '../../components/Typography';
import { SafeAreaView } from 'react-navigation';
import { Avatar, Badge, Icon, withBadge } from 'react-native-elements'
import UserItem from '../../components/UserItem'
import * as api from '../../api'

class FollowingScreen extends Component {
  state = {
    // users: [
    //   { name: 'John', followers: "10" },
    //   { name: 'Hannah', followers: "100000" },
    //   { name: 'Thanh', followers: "75" },
    //   { name: 'Tim', followers: "-30" }
    // ],
    // suggested: [
    //   { name: 'Rowan', followers: "67" },
    //   { name: 'Williams', followers: "3" },
    //   { name: 'Doran', followers: "76" },
    //   { name: 'Doan', followers: "100" }
    // ],
    allUsers: [],
    selectedIndex: 0,
    loggedInUserInfo: {}
  };

  componentDidMount() {
    //pass in own username
    api.getUsers().then((allUsers) => {
      this.setState({ allUsers })
    })
    api.getSpecificUser().then((mySelfObj) => {
      this.setState({ loggedInUserInfo: mySelfObj })
    })
  }


  updateIndex = (selectedIndex) => {
    this.setState({ selectedIndex })
  }

  handlePress = (usernameToFollow) => {
    console.log('pressed')
    //request to follow someone.
    //pass in 
    api.followSpecificUser(usernameToFollow)
    api.beSubscribedToUser(usernameToFollow)

  }

  render() {
    const { mySelfObj, selectedIndex, allUsers } = this.state;
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
        {/* <FlatList
          keyExtractor={item => item.name}
          data={selectedIndex === 0 ? mySelfObj.followers.map(follower => {
            return users.map(user => {
              return user.username === follower
            })
          }) :
            mySelfObj.subscriptions.map(follower => {
              return users.map(user => {
                return user.username !== follower || user.username !== "hannah"
              })
            })
          }
          renderItem={({ item }) => <UserItem user={item} current={selectedIndex === 0 ? true : false} />}
        /> */}
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