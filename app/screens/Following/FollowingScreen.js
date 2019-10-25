import React, { Component, useContext, useState, useEffect } from "react";
import {
  View,
  Button,
  Text,
  FlatList,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Header,
  ActivityIndicator,
  Dimensions
} from "react-native";
import {
  ListItem,
  ButtonGroup,
  Avatar,
  Badge,
  Icon,
  withBadge
} from "react-native-elements";
import Typography from "../../components/Typography";
import { SafeAreaView } from "react-navigation";
import UserItem from "../../components/UserItem";
import {
  getUsers,
  getSubscriptionUsers,
  followUser,
  subscribeToUser
} from "../../api";
import UserContext from "../../context/UserContext";
import styles from "./styles";

const FollowingScreen = () => {
  const [allUsers, setAllUsers] = useState([]);
  const [usersIFollow, setUsersIFollow] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [loggedInUserInfo] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [buttons, setButtons] = useState([
    "Current Rankings",
    "People you may know"
  ]);
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
    <ImageBackground
      style={styles.backgroundImage}
      source={require("./image.png")}
    >
      <View style={{ position: "relative" }}>
        <TouchableOpacity>
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
            buttonStyle={{ backgroundColor: "grey" }}
            containerStyle={{ height: 50 }}
            selectedButtonStyle={{ backgroundColor: "rgb(255, 128, 0)" }}
          />
        </TouchableOpacity>
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
          // <Icon
          //   type="ionicon"
          //   color="pink"
          //   iconStyle={{ height: 30, paddingTop: 15 }}
          // />
          <FlatList
            keyExtractor={item => item.username}
            data={
              selectedIndex === 0
                ? allUsers.filter(
                    allUser =>
                      user.subscriptions.includes(allUser.username) ||
                      allUser.username === user.username
                  )
                : allUsers.filter(
                    allUser =>
                      !user.subscriptions.includes(allUser.username) &&
                      allUser.username !== user.username
                  )
            }
            renderItem={({ item, index }) => (
              <UserItem
                rank={index}
                onFollow={handleFollow}
                user={item}
                current={selectedIndex === 0 ? true : false}
              />
            )}
          />
        )}
      </View>
    </ImageBackground>
  );
};

export default FollowingScreen;
