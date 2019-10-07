import React, { useEffect, useContext } from "react";
import { View, FlatList } from "react-native";
import Typography from "../../components/Typography";
import * as api from "../../api";
import RunsContext from "../../context/RunsContext";
import RunItem from "../../components/RunItem";
import getEnvVars from "../../../environment";
const { webSocketUrl } = getEnvVars();

const FeedScreen = () => {
  const { runs, addRuns } = useContext(RunsContext);
  const fetchRuns = async () => {
    const latestRuns = await api.getRuns();
    addRuns(latestRuns);
  };
  useEffect(() => {
    fetchRuns();
    const ws = new WebSocket(webSocketUrl);
    ws.onopen = () => {
      ws.send(
        JSON.stringify({
          username: "asdadd",
          start_time: Date.now()
        })
      );
      console.log("connected to ws");
    };

    ws.onmessage = event => {
      console.log(event.data);
    };
    // return () => {
    //   ws.close();
    // };
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          backgroundColor: "rgba(255,255,255,0.05)",
          paddingTop: 36,
          paddingBottom: 16,
          paddingHorizontal: 20,
          marginBottom: 16
        }}
      >
        <Typography fontWeight={600} fontSize={18}>
          Live Feed
        </Typography>
      </View>
      <FlatList
        keyExtractor={item => item.run_id}
        data={runs}
        renderItem={({ item }) => <RunItem run={item} />}
      />
    </View>
  );
};

export default FeedScreen;
