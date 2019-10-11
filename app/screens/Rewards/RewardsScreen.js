import styles from "./styles";
import React, { Component, useContext, useState, useEffect } from "react";
import { View, Text, KeyboardAvoidingView, ImageBackground } from "react-native";
import ToggleButton from "../../components/ToggleButton";
import { ListItem, Icon, ButtonGroup } from "react-native-elements";
import { FlatList, Platform, StatusBar, StyleSheet } from "react-native";
import { SafeAreaView } from "react-navigation";
import { Button } from "react-native-paper";
import ViewToggler from "../../components/ViewToggler";
import RewardItem from "../../components/RewardItem";
import Typography from "../../components/Typography";
import UserContext from "../../context/UserContext";
import { getRewards, claimReward, updateUserRewardTotal, sendNewReward } from "../../api";

export default RewardsScreen = () => {
  const { user } = useContext(UserContext);
  const [completedRewards, setCompletedRewards] = useState([]);
  const [openRewards, setOpenRewards] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [buttons, setButtons] = useState(['Live', 'Closed'])

  const fetchRewards = async () => {
    if (selectedIndex === 0) {
      const open = await getRewards();
      console.log(open, '<--- open')
      setOpenRewards([...open]);
      // setOpenRewards([...openRewards, ...open]);
    } else {
      const completed = await getRewards("yes");
      console.log(completed, '<--- completed')
      setCompletedRewards([...completed]);
      // setCompletedRewards([...completedRewards, ...completed]);
    }
  };

  useEffect(() => {
    fetchRewards();
  }, [selectedIndex]);

  // do we need to update based on this????
  // useEffect(() => {
  //   fetchRewards();
  // }, [selectedIndex, openRewards]);

  useEffect(() => {
    fetchRewards();
  }, []);

  const rewardClaimed = async (reward_id, username) => {
    await claimReward(reward_id, username)
    await updateUserRewardTotal(username)
  }

  const postNewReward = async (challenge, reward) => {
    const newReward = await sendNewReward(challenge, reward)
    // await sendNewReward(challenge, reward)
    setOpenRewards(...openRewards, newReward)
  }

  return (
    <KeyboardAvoidingView behavior='padding' style={styles.container}>
      <View style={styles.container}>
        <View>
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
            buttonStyle={{ backgroundColor: 'grey' }}
            containerStyle={{ height: 50 }}
            selectedButtonStyle={{ backgroundColor: 'rgb(255, 128, 0)' }}

          />
          <View style={{ flex: 1, alignItems: 'center', justifyContent: "flex-start" }}>
            {selectedIndex === 0 ? <Typography>What can you claim?</Typography> : <Typography>Too slow</Typography>}
          </View>
          <FlatList
            data={selectedIndex === 0 ? openRewards : completedRewards}
            selectedIndex={selectedIndex}
            keyExtractor={item => item.reward_id}
            renderItem={({ item }) => (
              <RewardItem
                user={user}
                rewardObj={item}
                rewardClaimed={rewardClaimed}
                selectedIndex={selectedIndex}
              />
            )}
          />
        </View>
        <ViewToggler item="reward" postNewReward={postNewReward} />
      </View>
    </KeyboardAvoidingView>
  )
};