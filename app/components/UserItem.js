import React from "react";
import { View } from "react-native";
import { Text, Button } from "react-native-elements";
import Typography from "./Typography";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";
TimeAgo.addLocale(en);
const timeAgo = new TimeAgo("en-US");

const UserItem = ({ user, current }) => {
  const { username, followers } = user;

  handlePress = () => {
    console.log(`INVITED ${username}`)
  }
  return (
    <View
      style={{
        backgroundColor: "rgba(255,255,255,0.05)",
        paddingHorizontal: 20,
        paddingVertical: 16,
        marginBottom: 16,
        flex: 1,
        flexDirection: 'row',
        justifyContent: "space-between"
      }}
    >
      <Typography>
        {`${username}`}
        <Typography fontWeight={400} color="secondary">
          {followers}
        </Typography>
      </Typography>
      {current === false && <Button title='Invite' onPress={this.handlePress} />}
      {current === true && <Typography>Rank</Typography>}

    </View>
  );
};

export default UserItem;