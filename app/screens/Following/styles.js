import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 3,
    textAlign: 'center'
  },
  button: {
    height: 40
  },
  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover'
  },
});
export default styles;



// import React, { Component, useContext, useState, useEffect } from "react";
// import { View, Button, Text, FlatList, StyleSheet, ImageBackground, TouchableOpacity } from "react-native";
// import { ListItem, ButtonGroup } from "react-native-elements";
// import Typography from "../../components/Typography";
// import { SafeAreaView } from "react-navigation";
// import { Avatar, Badge, Icon, withBadge } from "react-native-elements";
// import UserItem from "../../components/UserItem";
// import {
//   getUsers,
//   getSubscriptionUsers,
//   followUser,
//   subscribeToUser
// } from "../../api";
// import UserContext from "../../context/UserContext";
// import styles from './styles'

// const FollowingScreen = () => {
//   const [allUsers, setAllUsers] = useState([]);
//   const [usersIFollow, setUsersIFollow] = useState([]);
//   const [selectedIndex, setSelectedIndex] = useState(0);
//   const [loggedInUserInfo] = useState({});
//   const [buttons, setButtons] = useState(["Current Rankings", "Suggested"]);
//   const { user, setUser } = useContext(UserContext);
//   const fetchUsers = async () => {
//     const { users } = await getUsers();
//     console.log("all", users);
//     // const followedUsers = await getSubscriptionUsers(user.username);
//     // console.log("followedNot", followedUsers);
//     setAllUsers([...allUsers, ...users]);
//     // setUsersIFollow([...usersIFollow, ...followedUsers]);
//   };

//   console.log("currentUser", user);
//   useEffect(() => {
//     fetchUsers();
//   }, []);

//   const handleFollow = async usernameToFollow => {
//     console.log(usernameToFollow);
//     await followUser(usernameToFollow, user.username);
//     await subscribeToUser(usernameToFollow, user.username);
//     setUser({
//       ...user,
//       subscriptions: [...user.subscriptions, usernameToFollow]
//     });
//   };

//   // const notFollowing = allUsers.filter(
//   //   notFollowedUser => !user.subscriptions.includes(notFollowedUser.username)
//   // );

//   // const sortedFollowedUsers = usersIFollow.sort((a, b) => {
//   //   return b.cumulative_distance - a.cumulative_distance;
//   // });
//   return (
//     // <ImageBackground source={require('./road.jpg')}
//     //   style={styles.backgroundImage}
//     // >
//     <View style={styles.container}>

//       {/* {selectedIndex === 0 && (
//         <Header
//           leftComponent={{
//             text: 'Member',
//             style: {
//               color: 'white',
//               fontSize: 16,
//               fontWeight: 'bold',
//               width: 100,
//               textAlign: 'center'
//             }
//           }}
//           centerComponent={{
//             color: 'blue',
//             text: 'Distance(km)',
//             style: {
//               color: 'white',
//               fontSize: 15,
//               fontWeight: 'bold',
//               width: 100,
//               textAlign: 'center'
//             }
//           }}
//           rightComponent={{
//             text: 'Ranking',
//             style: {
//               color: 'white',
//               fontSize: 16,
//               fontWeight: 'bold',
//               width: 100,
//               textAlign: 'center'
//             }
//           }}
//           containerStyle={{
//             backgroundColor: 'rgba(25, 25, 25, 0.1)',
//             justifyContent: 'space-around',
//             height: 70
//           }}
//         />
//       )}
//       {selectedIndex === 1 && (
//         <Header
//           leftComponent={{
//             text: 'Member',
//             style: {
//               color: 'white',
//               fontSize: 16,
//               fontWeight: 'bold',
//               width: 100,
//               textAlign: 'center'
//             }
//           }}
//           centerComponent={{
//             color: 'blue',
//             text: 'Followers',
//             style: {
//               color: 'white',
//               fontSize: 16,
//               fontWeight: 'bold',
//               width: 100,
//               textAlign: 'center'
//             }
//           }}
//           rightComponent={{
//             text: 'Invite',
//             style: {
//               color: 'white',
//               fontSize: 16,
//               fontWeight: 'bold',
//               width: 100,
//               textAlign: 'center'
//             }
//           }}
//           containerStyle={{
//             backgroundColor: 'rgba(25, 25, 25, 0.1)',
//             justifyContent: 'space-around',
//             height: 70
//           }}
//         />
//       )} */}
//       <Icon
//         type="ionicon"
//         color="pink"
//         iconStyle={{ height: 30, paddingTop: 15 }}
//       />
//       <FlatList
//         keyExtractor={item => item.username}
//         data={
//           selectedIndex === 0
//             ? allUsers.filter(allUser =>
//               user.subscriptions.includes(allUser.username)
//             )
//             : allUsers.filter(
//               allUser =>
//                 !user.subscriptions.includes(allUser.username) &&
//                 allUser.username !== user.username
//             )
//         }
//         renderItem={({ item }) => (
//           <UserItem
//             onFollow={handleFollow}
//             user={item}
//             current={selectedIndex === 0 ? true : false}
//           />
//         )}
//       />

//       <ButtonGroup
//         onPress={() => {
//           if (selectedIndex === 0) {
//             setSelectedIndex(1);
//           } else {
//             setSelectedIndex(0);
//           }
//         }}
//         selectedIndex={selectedIndex}
//         buttons={buttons}
//         containerStyle={{ height: 100 }}
//       />
//     </View>
//     // </ImageBackground>
//   );
// };


