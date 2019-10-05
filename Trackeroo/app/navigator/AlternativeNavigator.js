import HomeScreen from '../screens/Home';
import RegisterScreen from '../screens/Register';
import LoginScreen from '../screens/Login';
import PasswordResetScreen from '../screens/PasswordReset';
import MapView from '../screens/MapView';
import GroupsScreen from '../screens/Groups';
import Rewards from '../screens/Rewards';
import PersonalProfile from '../screens/PersonalProfile';
import LeaderBoard from '../screens/LeaderBoard';
// import AuthLoadingScreen from '../screens/AuthLoading';
import CreateRun from '../screens/CreateRun';
import AllUsers from '../screens/AllUsers';

import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';


const HomeStack = createStackNavigator({
  HomeScreen,
  MapView
})

const ProfileStack = createStackNavigator({
  PersonalProfile,
  MapView
})

const RewardsStack = createStackNavigator({
  Rewards,
  MapView
})

const LeaderBoardStack = createStackNavigator({
  LeaderBoard,
  MapView
})

const UsersNavigator = createMaterialTopTabNavigator({
  AllUsers, PersonalProfile

}, {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#651fff',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  },
})

const FeedsNavigator = createMaterialTopTabNavigator({ HomeStack, ProfileStack }, {

  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#651fff',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  },
})

const AuthStack = createStackNavigator({ LoginScreen, RegisterScreen, PasswordResetScreen })

const GroupStack = createStackNavigator({ GroupsScreen })


const DrawerNavigator = createDrawerNavigator({
  FeedsNavigator, RewardsStack, LeaderBoardStack, UsersNavigator
})

const AppContainer = createAppContainer(createSwitchNavigator({
  DrawerNavigator, AuthStack, GroupStack
},
  {
    initialRouteName: 'AuthStack'
  }));



export default AppContainer;