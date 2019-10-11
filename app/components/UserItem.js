import React, { useContext } from "react";
import { View } from "react-native";
import { Text, Button } from "react-native-elements";
import Typography from "./Typography";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";
TimeAgo.addLocale(en);
const timeAgo = new TimeAgo("en-US");

const UserItem = ({ user, current, onFollow, rank }) => {
  const { username, followers, cumulative_distance, subscriptions } = user;

  handlePress = async () => {
    await onFollow(username);
    console.log(`INVITED ${username}`);
  };
  return (
    <View
      style={{
        backgroundColor: "rgba(255,255,255,0.05)",
        paddingHorizontal: 20,
        paddingVertical: 16,
        marginBottom: 16,
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-around"
      }}
    >
      {current === true ? <Typography>{rank + 1}</Typography> : <Button title="Invite" onPress={handlePress} titleStyle={{ color: 'black', fontSize: 14 }}
        buttonStyle={{
          paddingLeft: 15,
          paddingRight: 15,
          backgroundColor: 'rgb(255, 128, 0)'
        }} type="outline" />}


      <View style={{ flex: 1 }}>
        <Typography >
          {`${username} `}
        </Typography>
        {current === false && <Typography fontWeight={400} color="secondary">
          {followers.length} followers
        </Typography>}
      </View>
      <Typography>{cumulative_distance} km</Typography>
    </View>
  );
};

export default UserItem;
