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
  baseURL: "apiUrl"
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

// export const getSuggestedUsers = async () => {
//   try {
//     const { data } = await request.get("/users");
//     return data.users;
//   } catch (err) {
//     throw err;
//   }
// };

export const getLatestRuns = async username => {
  try {
    const { data } = await request.get(`/runs`, { params: { username } });
    return data.runs;
  } catch (err) {
    throw err;
  }
};

//i think this needs to be a patch request now?

// export const followUser = async (username, followerUsername) => {
//   return request.post(`/users/${username}/followers`, {
//     follower: followerUsername
//   });
// };

export const startRun = async (username, start_time) => {
  console.log({ username, start_time });
  try {
    const { run } = await request.post("/runs", { username, start_time });
    return run;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

// export const endRun = async ({ end_time }) => { 
//   try{
//     await request.post
//   }catch(error){
//     throw(error)
//   }
// };

export const endRun = async (username, run_id, finish_time, average_speed, total_distance, coordinates) => {
  try {
    await request.patch(`/runs`, { username, run_id, finish_time, average_speed, total_distance, coordinates })
  } catch (error) {
    throw (error)
  }
};





//to sign out, just delete token from asyncStorage


export const fetchRewards = async (completed) => {
  try {
    const { rewards } = await request.get("/rewards", { params: { completed: completed } })
    return rewards
  } catch (error) {
    throw (error)
  }
}

export const claimReward = async (reward_id, username) => {
  try {
    await request.patch("/rewards", {
      reward_id: reward_id,
      winner: username
    })
  } catch (error) {
    throw (error)
  }
}

export const updateUserRewardTotal = async (username) => {
  try {
    await request.patch(`/rewards/${username}`)
  } catch (error) {
    throw (error)
  }
}

export const getSpecificUser = async (username) => {
  try {
    const { user } = await request.get(`/users/${username}`)
    return user
  } catch (error) {
    throw (error)
  }
}

export const getUsers = async () => {
  try {
    const { users } = await request.get('/users')
    return users
  } catch (error) {
    throw (error)
  }
}

export const followSpecificUser = async (usernameToFollow) => {
  try {
    await request.patch(`/users${username}/subscriptions`)
  } catch (error) {
    throw (error)
  }
}

export const beSubscribedToUser = async (username) => {
  try {
    await request.patch(`/users/${username}/followers`)
  } catch (error) {
    throw (error)
  }
}


export const getMyRuns = async (username) => {
  try {
    const { runs } = await request.get(`/users/${username}/runs`)
    return runs;
  } catch (error) {
    throw (error)
  }
}