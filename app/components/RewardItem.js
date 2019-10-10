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
  console.log(typeof (user.cumulative_distance), user.cumulative_distance, '<---- user')
  console.log(typeof (challenge), challenge, '<---- challenge')

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
          color="green"
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
          // flexWrap: 'wrap',
          width: 400,
          backgroundColor: 'rgba(255,255,255,0.01)',
          justifyContent: "space-between"
        }}
      >
        <View>
          <Typography style={{ paddingRight: 10, fontSize: 16, color: 'white' }}>Challenge:</Typography>
          <Typography style={{ paddingRight: 10, fontSize: 16, color: 'white' }}>Reward:</Typography>
          {selectedIndex === 1 && <Typography style={{ paddingRight: 10, fontSize: 16, color: 'green' }}>Winner:</Typography>}
        </View>

        <View style={{ flex: 1, alignItems: "flex-end" }}>

          <Typography style={{ paddingRight: 10, fontSize: 16, color: 'white' }}>
            {challenge} km
      </Typography>
          <Typography style={{ paddingRight: 10, fontSize: 16, color: 'white' }}>
            {reward}
          </Typography>
          {selectedIndex === 1 && <Typography style={{ paddingRight: 10, fontSize: 16, color: 'green' }}>{winner.S}</Typography>}
        </View>
        {selectedIndex === 0 && user.cumulative_distance > challenge && <Button title="CLAIM" onPress={handlePress} titleStyle={{ color: 'black', fontSize: 14 }}
          buttonStyle={{
            paddingLeft: 15,
            paddingRight: 15,
            backgroundColor: 'rgb(255, 128, 0)'
          }} type="outline" />}
      </View>

    </View>
  );
};

export default RewardItem;