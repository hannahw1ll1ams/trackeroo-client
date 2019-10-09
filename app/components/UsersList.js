import React, { useState, useContext } from "react";
import { FlatList, View, Button } from "react-native";
import { ListItem } from "react-native-elements";
import Typography from "./Typography";
import { followUser } from "../api";
import UserContext from "../context/UserContext";

const UsersList = ({ users }) => {
  const { user } = useContext(UserContext);

  return (
    <FlatList
      keyExtractor={item => item.username}
      data={users}
      renderItem={({ item }) => {
        const { username } = item;
        return (
          <View>
            <Typography>{username}</Typography>
            <Button
              onPress={async () => {
                try {
                  console.log(username, user.username)
                  await followUser(username, user.username);
                } catch (err) {
                  console.log(err);
                }
              }}
              title="Follow"
            />
          </View>
        );
      }}
    />
  );
};

export default UsersList;
