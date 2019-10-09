// import React from 'react';
// import { View } from 'react-native';
// //import Typography from '../../components/Typography';
// import UserList from '../../components/UserList';

// const FollowingScreen = () => {
//   return (
//     <View>
//       <UserList />
//     </View>
//   );
// };

// export default FollowingScreen;

import React, { Component } from "react";
import { View, Button, Text, FlatList, StyleSheet } from "react-native";
import { ListItem, ButtonGroup } from "react-native-elements";
import Typography from "../../components/Typography";
import { SafeAreaView } from "react-navigation";
import UsersList from "../../components/UsersList";
import { getSuggestedUsers } from "../../api";

class FollowingScreen extends Component {
  state = {
    users: [],
    suggested: [
      { username: "Rowan" },
      { username: "Williams" },
      { username: "Doran" },
      { username: "Doan" }
    ]
  };

  async componentDidMount() {
    try {
      const users = await getSuggestedUsers();
      this.setState(currentState => ({
        users: [...currentState.users, ...users]
      }));
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    const { users, selectedIndex, suggested } = this.state;
    const buttons = ["Current Rankings", "Suggested"];
    // console.log(users);
    return (
      <View style={styles.container}>
        <ButtonGroup
          onPress={this.updateIndex}
          selectedIndex={selectedIndex}
          buttons={buttons}
          containerStyle={{ height: 100 }}
        />
        <Text style={styles.text}>People you may know</Text>
        <UsersList users={users} />
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
    color: "purple",
    marginLeft: 7
  },
  flatview: {
    justifyContent: "center",
    paddingTop: 30,
    borderRadius: 2
  }
});

export default FollowingScreen;
