import axios from "axios";
import { AsyncStorage } from "react-native";
import * as Font from "expo-font";
import getEnvVars from "../environment";
const { apiUrl } = getEnvVars();
console.log(apiUrl);

const setAuthorizationHeader = token => {
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

export const getSuggestedUsers = async () => {
  const { data } = request.get("/users");
  return data.users;
};

export const followUser = async (username, followerUsername) => {
  return request.post(`/users/${username}/followers`, {
    follower: followerUsername
  });
};

export const startRun = async ({ username, start_time }) => {
  try {
    const { data } = await request.post("/runs", { username, start_time });
  } catch (error) {
    throw error;
  }
  return {
    run_id: "runid1",
    start_time: "adad"
  };
};

export const endRun = async ({ end_time }) => {};

//to sign out, just delete token from asyncStorage
