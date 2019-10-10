import React, { useEffect, useContext, useRef, useState } from "react";
import { View, FlatList } from "react-native";
import Typography from "../../components/Typography";
import * as api from "../../api";
import RunsContext from "../../context/RunsContext";
import RunItem from "../../components/RunItem";
import getEnvVars from "../../../environment";
import UserContext from "../../context/UserContext";
const { webSocketUrl } = getEnvVars();

const FeedScreen = ({ navigation }) => {
  const { runs, addRuns } = useContext(RunsContext);
  const { user } = useContext(UserContext);
  const [firstRender, setFirstRender] = useState(true);
  const [prevLength, setPrevLength] = useState(0);
  const fetchRuns = async () => {
    try {
      const latestRuns = await api.getLatestRuns(user.username);
      addRuns(latestRuns);
    } catch (err) {
      console.log(err);
    }
    // addRuns(latestRuns);
  };

  useEffect(() => {
    fetchRuns();
    const ws = new WebSocket(webSocketUrl);
    ws.onopen = () => {
      console.log("opened");
      ws.send(
        JSON.stringify({
          type: "connect",
          username: user.username
        })
      );
    };

    ws.onmessage = event => {
      const { run } = JSON.parse(event.data);
      if (run) {
        console.log(user.username, "RECEIVED new run", run);
        addRuns(run);
      }
    };
    // return () => {
    //   ws.close();
    // };
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: "#121212" }}>
      <View
        style={{
          backgroundColor: "rgba(255,255,255,0.05)",
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
        data={[...runs].sort((a, b) => {
          return b.start_time - a.start_time;
        })}
        renderItem={({ item }) => (
          <RunItem navigate={navigation.navigate} run={item} />
        )}
      />
    </View>
  );
};

export default FeedScreen;
