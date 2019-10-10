import React, { useContext } from "react";
import { View } from "react-native";
import { Text, Button } from "react-native-elements";
import Typography from "./Typography";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";
TimeAgo.addLocale(en);
const timeAgo = new TimeAgo("en-US");

const UserItem = ({ user, current, onFollow }) => {
  const { username, followers, cumulative_distance, subscriptions } = user;

  console.log(user)
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
        justifyContent: "space-between"
      }}
    >
      <Typography>
        {`${username} `}
        <Typography fontWeight={400} color="secondary">
          {followers.length} followers
        </Typography>
      </Typography>
      {current === false && <Button title="Invite" onPress={handlePress} />}
      {current === true && <Typography>Rank</Typography>}
    </View>
  );
};

export default UserItem;
