import React from "react";
import SingleRunInfo from "./SingleRunInfo";
import { View, FlatList } from "react-native";
const UsersRunList = ({ runs }) => {
  return (
    <View>
      <FlatList
        data={runs}
        keyExtractor={item => JSON.stringify(item.run_id)}
        showsVerticalScrollIndicator={true}
        renderItem={({
          item: { total_distance, average_speed, total_time }
        }) => (
          <SingleRunInfo
            totalTime={total_time}
            totalDistance={total_distance}
            averageSpeed={average_speed}
          />
        )}
      />
    </View>
  );
};
export default UsersRunList;
