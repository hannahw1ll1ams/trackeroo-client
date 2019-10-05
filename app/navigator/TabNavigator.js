import HomeScreen from "../screens/Home";
import MapView from "../screens/MapView";
import FeedScreen from "../screens/Feed";
import FollowingScreen from "../screens/Following";
import RunScreen from "../screens/Run";

import { createBottomTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";

const Home = createStackNavigator({
  HomeScreen,
  MapView
});

const TabNavigator = createBottomTabNavigator(
  {
    Home: Home,
    Feed: FeedScreen,
    Run: RunScreen,
    Following: FollowingScreen
  },
  {
    tabBarOptions: {
      style: {
        backgroundColor: "#121212"
      },
      activeTintColor: "#ce93d8"
    },
    defaultNavigationOptions: {
      headerStyle: {},
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold"
      }
    }
  }
);

export default TabNavigator;
