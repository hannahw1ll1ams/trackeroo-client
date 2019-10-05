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
import React, { Component } from 'react';
import { View, Button, Text, Alert } from 'react-native';


import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator, DrawerNavigatorItems } from 'react-navigation-drawer';
import SafeAreaView from 'react-native-safe-area-view';


const Group = createStackNavigator({
  HomeScreen,
  MapView
})

Group.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }
  return {
    tabBarVisible,
  };
};

const You = createStackNavigator({
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
  }, tabBarPosition: "bottom"
})

const FeedsNavigator = createMaterialTopTabNavigator({ Group, You }, {

  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#651fff',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  }, tabBarPosition: "bottom"
})

const AuthStack = createStackNavigator({ LoginScreen, RegisterScreen, PasswordResetScreen })

const GroupStack = createStackNavigator({ GroupsScreen })


const DrawerNavigator = createDrawerNavigator({
  FeedsNavigator, RewardsStack, LeaderBoardStack, UsersNavigator
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

  contentComponent: (props) => (
    <View style={{ flex: 1 }}>
      <SafeAreaView forceInset={{ top: 'always', horizontal: 'never' }}>
        <Text>TRACKEROO</Text>
        <Text>    </Text>
        <DrawerNavigatorItems {...props} />
        <Button title="logout?" onPress=
          {() =>
            Alert.alert(
              'Alert',
              'Log out?',
              [
                {
                  text: 'Cancel',
                  onPress: () => console.log('Cancel Pressed'),
                  style: 'cancel',
                },
                { text: 'OK', onPress: () => console.log('OK Pressed') }
              ],
              { cancelable: false }
            )
          }
        />
      </SafeAreaView>
    </View>
  ),
  drawerOpenRoute: 'DrawerOpen',
  drawerCloseRoute: 'DrawerClose',
  drawerToggleRoute: 'DrawerToggle'
})


// handleSignOut = async () => {
//   const { navigate } = this.props.navigation
//   try {
//     await api.logout()
//     navigate('LoginScreen', { title: 'Sign In' })
//   } catch (error) {
//     console.log(error)
//   }
// }

const AppContainer = createAppContainer(createSwitchNavigator({
  DrawerNavigator, AuthStack, GroupStack
},
  {
    initialRouteName: 'AuthStack'
  }));



export default AppContainer;