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
      <View style={{ flex: 1 }}>
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
            backgroundColor: 'rgba(255,255,255,0.01)',
            justifyContent: "space-evenly"
          }}>
          <View>
            <Typography fontWeight={400} color="secondary">Challenge:</Typography>
            <Typography fontWeight={400} color="secondary">Reward:</Typography>
            {selectedIndex === 1 && <Typography fontWeight={400} style={{ color: "green" }}>Winner:</Typography>}
          </View>
          <View style={{ flex: 1, alignItems: "flex-end" }}>
            <Typography fontWeight={400} color="secondary">
              {challenge} km
            </Typography>
            <Typography fontWeight={400} color="secondary">
              {reward}
            </Typography>
            {selectedIndex === 1 && <Typography fontWeight={400} style={{ color: "green" }}>{winner.S}</Typography>}
          </View>
        </View>


        {selectedIndex === 0 && user.cumulative_distance >= challenge && <Button title="CLAIM" onPress={handlePress} titleStyle={{ color: 'black', fontSize: 14 }}
          buttonStyle={{
            paddingLeft: 15,
            paddingRight: 15,
            backgroundColor: 'rgb(255, 128, 0)'
          }} type="outline" />}
        {selectedIndex === 0 && user.cumulative_distance < challenge && <Button title="CLAIM" onPress={handlePress} disabled={true} titleStyle={{ color: 'black', fontSize: 14 }}
          buttonStyle={{
            paddingLeft: 15,
            paddingRight: 15,
            backgroundColor: 'grey'
          }} type="outline" />
        }
      </View>

    </View>
  );
};

export default RewardItem;