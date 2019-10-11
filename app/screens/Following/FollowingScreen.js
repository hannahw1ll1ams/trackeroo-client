import React, { Component, useContext, useState, useEffect } from "react";
import {
  View,
  Button,
  Text,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  Dimensions
} from "react-native";
import { ListItem, ButtonGroup } from "react-native-elements";
import Typography from "../../components/Typography";
import { SafeAreaView } from "react-navigation";
import { Avatar, Badge, Icon, withBadge } from "react-native-elements";
import UserItem from "../../components/UserItem";
import {
  getUsers,
  getSubscriptionUsers,
  followUser,
  subscribeToUser
} from "../../api";
import UserContext from "../../context/UserContext";

const FollowingScreen = () => {
  const [allUsers, setAllUsers] = useState([]);
  const [usersIFollow, setUsersIFollow] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [loggedInUserInfo] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [buttons, setButtons] = useState(["Current Rankings", "Suggested"]);
  const { user, setUser } = useContext(UserContext);
  const fetchUsers = async () => {
    const { users } = await getUsers();
    setIsLoading(false);
    console.log("all", users);
    // const followedUsers = await getSubscriptionUsers(user.username);
    // console.log("followedNot", followedUsers);
    setAllUsers([...allUsers, ...users]);
    // setUsersIFollow([...usersIFollow, ...followedUsers]);
  };

  console.log("currentUser", user);
  useEffect(() => {
    fetchUsers();
  }, []);

  const handleFollow = async usernameToFollow => {
    console.log(usernameToFollow);
    await followUser(usernameToFollow, user.username);
    await subscribeToUser(usernameToFollow, user.username);
    setUser({
      ...user,
      subscriptions: [...user.subscriptions, usernameToFollow]
    });
  };

  // const notFollowing = allUsers.filter(
  //   notFollowedUser => !user.subscriptions.includes(notFollowedUser.username)
  // );

  // const sortedFollowedUsers = usersIFollow.sort((a, b) => {
  //   return b.cumulative_distance - a.cumulative_distance;
  // });
  return (
    <View style={{ position: "relative" }}>
      <ButtonGroup
        onPress={() => {
          if (selectedIndex === 0) {
            setSelectedIndex(1);
          } else {
            setSelectedIndex(0);
          }
        }}
        selectedIndex={selectedIndex}
        buttons={buttons}
        containerStyle={{ height: 100 }}
      />
      {selectedIndex === 1 && (
        <Typography>People you might know to invite to group</Typography>
      )}
      <View
        style={{
          position: "absolute",
          top: Dimensions.get("window").height / 2,
          left: Dimensions.get("window").width / 2
        }}
      >
        <ActivityIndicator size="large" animating={isLoading} />
      </View>
      {!isLoading && (
        <FlatList
          keyExtractor={item => item.username}
          data={
            selectedIndex === 0
              ? allUsers.filter(allUser =>
                  user.subscriptions.includes(allUser.username)
                )
              : allUsers.filter(
                  allUser =>
                    !user.subscriptions.includes(allUser.username) &&
                    allUser.username !== user.username
                )
          }
          renderItem={({ item }) => (
            <UserItem
              onFollow={handleFollow}
              user={item}
              current={selectedIndex === 0 ? true : false}
            />
          )}
        />
      )}
    </View>
  );
};

// class FollowingScreen extends Component {
//   state = {
//     users: [],
//     suggested: [
//       { name: "Rowan", followers: "67" },
//       { name: "Williams", followers: "3" },
//       { name: "Doran", followers: "76" },
//       { name: "Doan", followers: "100" }
//     ],
//     selectedIndex: 0
//   };

//   async componentDidMount() {
//     const { users, last_username } = await getUsers();
//     this.setState(currentState => ({
//       users: [...currentState.users, ...users]
//     }));
//   }

//   updateIndex = selectedIndex => {
//     this.setState({ selectedIndex });
//   };

//   handlePress = () => {
//     console.log("pressed");
//   };

//   render() {
//     const { users, selectedIndex, suggested } = this.state;
//     const buttons = ["Current Rankings", "Suggested"];
//     // console.log(users);

//     return (

//     );
//   }
// }

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
