import axios from "axios";
import { AsyncStorage } from "react-native";
import * as Font from "expo-font";
import getEnvVars from "../environment";
const { apiUrl } = getEnvVars();
console.log(apiUrl);

export const setAuthorizationHeader = token => {
  axios.defaults.headers.common["Authorization"] = token;
};
const request = axios.create({
  baseURL: apiUrl
});

export const login = async (username, password) => {
  try {
    const { headers, data } = await request.post("/login", {
      username,
      password
    });
    const token = headers["x-amzn-remapped-authorization"];
    storeToken(token);
    await AsyncStorage.setItem("username", data.user.username);
    setAuthorizationHeader(token);
    return data.user;
  } catch (error) {
    throw error;
  }
};

export const signup = async (username, password) => {
  try {
    const { headers, data } = await request.post("/signup", {
      username,
      password
    });
    // console.log(headers, data)
    const token = headers["x-amzn-remapped-authorization"];
    storeToken(token);
    await AsyncStorage.setItem("username", data.user.username);
    setAuthorizationHeader(token);
    return data.user;
  } catch (error) {
    throw error;
  }
};
// Fhhdgjhbg username
// Gftjhvjjff6 password

export const storeToken = async token => {
  try {
    await AsyncStorage.setItem("token", token);
  } catch (error) {
    console.log(error);
  }
};

export const getToken = async () => {
  try {
    const token = await AsyncStorage.getItem("token");
    return token;
  } catch (error) {
    console.log(error);
  }
};

export const logout = async () => {
  try {
    await AsyncStorage.removeItem("token");
  } catch (error) {
    console.log(error);
  }
};

export const loadFonts = async () => {
  await Font.loadAsync({
    "open-sans-bold": require("../assets/fonts/OpenSans-Bold.ttf"),
    "open-sans-semibold": require("../assets/fonts/OpenSans-SemiBold.ttf"),
    "open-sans-regular": require("../assets/fonts/OpenSans-Regular.ttf")
  });
};

export const getRuns = async () => {
  return [
    {
      run_id: "dadada1",
      username: "John",
      start_time: Date.now(),
      end_time: ""
    },
    {
      run_id: "dadada2",
      username: "Thanh",
      start_time: Date.now(),
      end_time: ""
    },
    {
      run_id: "dadada3",
      username: "Hannah",
      start_time: Date.now(),
      end_time: ""
    },
    {
      run_id: "dadada4",
      username: "Tim",
      start_time: Date.now(),
      end_time: Date.now()
    }
  ];
};

// request.interceptors.response.use(response => {
//   console.log("Response:", response);
//   return response;
// });

export const getUsers = async () => {
  try {
    const {
      data: { users, last_username }
    } = await request.get("/users");
    return { users, last_username };
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const getUser = async username => {
  try {
    console.log(username);
    const { data } = await request.get(`/users/${username}`);
    return data.user;
  } catch (err) {
    console.log(data);
    throw err;
  }
};

export const getSubscriptionUsers = async username => {
  try {
    const { data } = await request.get(`/users/${username}/subscriptions`);
    return data.users;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const followUser = async (usernameToFollow, followerUsername) => {
  try {
    await request.patch(`/users/${usernameToFollow}/followers`, {
      follower: followerUsername
    });
  } catch (err) {
    console.log("followfailed", err, usernameToFollow, followerUsername);
    throw err;
  }
};

export const subscribeToUser = async (usernameToSubscribeTo, yourUsername) => {
  try {
    await request.patch(`/users/${yourUsername}/subscriptions`, {
      subscription: usernameToSubscribeTo
    });
  } catch (err) {
    console.log("subfailed", err, usernameToFollow, followerUsername);

    throw err;
  }
};

export const getLatestRuns = async username => {
  try {
    const { data } = await request.get(`/runs`, { params: { username } });
    return data.runs;
  } catch (err) {
    throw err;
  }
};

export const updateRun = async ({ run_id, ...rest }) => {
  try {
    const { data } = await request.patch(`/runs/${run_id}`, rest);
    console.log("actual run data", data);
    return data.run;
  } catch (err) {
    console.log("params", run_id, rest);
    console.log(err);
    throw err;
  }
};

export const startRun = async (username, start_time) => {
  try {
    const { data } = await request.post("/runs", { username, start_time });
    return data.run;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const endRun = async ({ run_id, ...rest }) => {
  try {
    const { data } = await request.patch(`/runs/${run_id}`, rest);
    console.log("ended run", data.run);
    return data.run;
  } catch (err) {
    console.log("params", run_id, rest);
    console.log(err);
    throw err;
  }
};

export const updateUserDistanceTotal = async (username, distance) => {
  try {
    await request.patch(`/users/${username}`, {
      distance
    });
  } catch (err) {
    console.log(username, distance);
    throw err;
  }
};

export const getRewards = async completed => {
  try {
    const { data: { rewards } } = await request.get("/rewards", {
      params: { completed: completed }
    });
    return rewards;
  } catch (error) {
    throw error;
  }
};
export const claimReward = async (reward_id, username) => {
  try {
    await request.patch("/rewards", {
      reward_id: reward_id,
      winner: username
    });
  } catch (error) {
    throw error;
  }
};
export const updateUserRewardTotal = async username => {
  try {
    await request.patch(`/rewards/${username}`);
  } catch (error) {
    throw error;
  }
};

export const sendNewReward = async (challenge, reward) => {
  try {
    console.log(challenge, reward, "chaleneg, reward")
    const { data } = await request.post('/rewards', { challenge, reward })
    console.log(data, "worked data")
    // return data.reward;
  } catch (error) {
    console.log(error, "error")
    console.log(data, "<---- error data")

    throw (error)
  }
}

// Object {
// "average_speed": 0,
// "coordinates": "{\"run\":[{\"latitude\":53.4860496,\"longitude\":-2.2397571}]}",
// "finish_time": "1570694173257",
// "run_id": "6c2a9782-0985-41ea-bc2a-b96eacb39a64",
// "total_distance": 0,
// "username": "harry",
// }

//to sign out, just delete token from asyncStorage
