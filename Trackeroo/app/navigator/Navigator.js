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

import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';

const Home = createStackNavigator({
  HomeScreen,
  MapView
})

const TabNavigator = createMaterialTopTabNavigator({ Home, Rewards, LeaderBoard, PersonalProfile }, {

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

const AppContainer = createAppContainer(createSwitchNavigator({
  TabNavigator, AuthStack, GroupStack
},
  {
    initialRouteName: 'AuthStack'
  }));


export default AppContainer;