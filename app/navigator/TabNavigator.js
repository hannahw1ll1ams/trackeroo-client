import React from "react";
import HomeScreen from "../screens/Home";
import MapView from "../screens/MapView";
import FeedScreen from "../screens/Feed";
import FollowingScreen from "../screens/Following";
import RunScreen from "../screens/Run";
import { MaterialIcons } from "@expo/vector-icons";
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
      tabStyle: {
        paddingVertical: 4
      },
      style: {
        backgroundColor: "rgba(255,255,255,0.07)",
        height: 56,
        borderTopColor: "transparent"
      },
      activeTintColor: "#ce93d8",
      inactiveTintColor: "rgba(255,255,255,0.7)"
    },
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = MaterialIcons;
        let iconName;

        if (routeName === "Home") {
          iconName = "home";
        }
        if (routeName === "Run") {
          iconName = "track-changes";
        }
        if (routeName === "Feed") {
          iconName = "rss-feed";
        }
        if (routeName === "Following") {
          iconName = "people";
        }
        return <IconComponent name={iconName} size={24} color={tintColor} />;
      }
    })
  }
);

export default TabNavigator;
