import React from "react";
import { View } from "react-native";
import { Text, Button, Icon } from "react-native-elements";
import Typography from "./Typography";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";
TimeAgo.addLocale(en);
const timeAgo = new TimeAgo("en-US");

const RewardItem = ({ rewardObj, rewardClaimed, selectedIndex, user }) => {

  const { challenge, reward, reward_id, winner } = rewardObj;
  console.log(rewardObj, '<----')
  handlePress = async () => {
    await rewardClaimed(reward_id, user.username)
  }
  return (
    <View
      style={{
        backgroundColor: 'rgba(255,255,255,0.05)',
        paddingHorizontal: 20,
        paddingVertical: 16,
        marginBottom: 16,
        flex: 1,
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-between'
      }}
    >
      {selectedIndex === 0 && (
        <Icon
          name="star"
          type="Font-Awesome"
          color="gold"
          iconStyle={{ paddingRight: 15 }}
        />
      )}
      {selectedIndex === 1 && (
        <Icon
          name="star"
          type="Font-Awesome"
          color="grey"
          iconStyle={{ paddingRight: 15 }}
        />
      )}
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          flexWrap: 'wrap',
          width: 400,
          backgroundColor: 'rgba(255,255,255,0.01)'
        }}
      >
        <Typography style={{ paddingRight: 10, fontSize: 16, color: 'white' }}>
          Challenge: {challenge} km
      </Typography>
        <Typography style={{ paddingRight: 10, fontSize: 16, color: 'white' }}>
          Reward: {reward}
        </Typography>
        {selectedIndex === 1 && <Typography style={{ paddingRight: 10, fontSize: 16, color: 'white' }}>Winner : {winner.S}</Typography>}
      </View>
      {/* {selectedIndex === 0 && user.cumulative_distance > challenge && <Button title="CLAIM" onPress={handlePress} />} */}
      {selectedIndex === 0 && <Button title="CLAIM" titleStyle={{ color: 'black', fontSize: 14 }}
        buttonStyle={{
          paddingLeft: 15,
          paddingRight: 15,
          backgroundColor: 'rgb(255, 128, 0)'
        }} type="outline" onPress={handlePress} />}
    </View>
  );
};

export default RewardItem;