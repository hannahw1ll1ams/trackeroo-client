import RegisterScreen from "../screens/Register";
import LoginScreen from "../screens/Login";
import PasswordResetScreen from "../screens/PasswordReset";
// import GroupsScreen from "../screens/Groups";
// import AuthLoadingScreen from '../screens/AuthLoading';

import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer, createSwitchNavigator } from "react-navigation";

import TabNavigator from "./TabNavigator";

const AuthStack = createStackNavigator({
  LoginScreen,
  RegisterScreen,
  PasswordResetScreen
});

// const GroupStack = createStackNavigator({ GroupsScreen });

const AppContainer = createAppContainer(
  createSwitchNavigator(
    {
      TabNavigator,
      AuthStack,
      // GroupStack
    },
    {
      initialRouteName: "AuthStack"
    }
  )
);

export default AppContainer;
