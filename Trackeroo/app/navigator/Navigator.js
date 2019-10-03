import HomeScreen from '../screens/Home';
import RegisterScreen from '../screens/Register';
import LoginScreen from '../screens/Login';
import PasswordResetScreen from '../screens/PasswordReset';
import MapView from '../screens/MapView';
import Groups from '../screens/Groups';
import Rewards from '../screens/Rewards';
import PersonalProfile from '../screens/PersonalProfile';
import LeaderBoard from '../screens/LeaderBoard';
// import AuthLoadingScreen from '../screens/AuthLoading';

import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';



const HomeStack = createStackNavigator({ HomeScreen, Groups, MapView, Rewards, PersonalProfile, LeaderBoard }, {
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


const AppContainer = createAppContainer(createSwitchNavigator({
  HomeStack, AuthStack
},
  {
    initialRouteName: 'AuthStack'
  }));


export default AppContainer;