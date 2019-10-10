import styles from "./styles";
import React, { Component, useContext, useState, useEffect } from "react";
import { View, Text } from "react-native";
import ToggleButton from "../../components/ToggleButton";
import { ListItem, Icon, ButtonGroup } from "react-native-elements";
import { FlatList, Platform, StatusBar, StyleSheet } from "react-native";
import { SafeAreaView } from "react-navigation";
import { Button } from "react-native-paper";
import ViewToggler from "../../components/ViewToggler";
import RewardItem from "../../components/RewardItem";
import Typography from "../../components/Typography";
import UserContext from "../../context/UserContext";
import { getRewards } from "../../api";

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

      setOpenRewards([...openRewards, ...open]);
    } else {
      const completed = await getRewards("yes");
console.log(complete, '<--- completed')
      setCompletedRewards([...completedRewards, ...completed]);
    }
  };

  useEffect(() => {
    fetchRewards();
  }, [selectedIndex]);

  useEffect(() => {
    fetchRewards();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
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
        containerStyle={{ height: 100 }}
      />
        {selectedIndex === 0 ? <Typography>What is up for grabs??</Typography> : <Typography>Too slow</Typography>}
        <FlatList
          data={selectedIndex === 0 ? openRewards : completedRewards}
          selectedIndex={selectedIndex}
          keyExtractor={item => item.reward_id}
          renderItem={({ item }) => (
            <RewardItem

              rewardObj={item}
              rewardClaimed={this.rewardClaimed}
              selectedIndex={selectedIndex}
            />
          )}
        />
        <ViewToggler item="reward" postNewReward={this.postNewReward} />
      </SafeAreaView>
  )
};