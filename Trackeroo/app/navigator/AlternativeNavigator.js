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
import AllUsers from '../screens/AllUsers';
import React from 'react';
import { View, Button, Text, Alert } from 'react-native';
import { Badge, Icon, withBadge } from 'react-native-elements'
import { Ionicons } from '@expo/vector-icons'; // 6.2.2

import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator, DrawerNavigatorItems } from 'react-navigation-drawer';
import SafeAreaView from 'react-native-safe-area-view';
import { withNavigation } from 'react-navigation';
// import CustomReactNavigationNavigator from './TestOneCustomReactNavigationNavigator'
// import TestTwoCustomNavigator from './TestTwoCustomNavigator'


// const MessagesIcon = ({ tintColor }) => (
//   <Icon
//     type="ionicon"
//     name="ios-chatbubbles"
//     size={24}
//     color={tintColor}
//   />
// );
// const UsersIcon = ({ tintColor }) => (
//   <Icon
//     type="material"
//     name="supervisor-account"
//     size={24}
//     color={tintColor}
//   />
// );





// const Group = createStackNavigator({
//   HomeScreen,
//   MapView
// })

// Group.navigationOptions = ({ navigation }) => {
//   let tabBarVisible = true;
//   if (navigation.state.index > 0) {
//     tabBarVisible = false;
//   }
//   return {
//     tabBarVisible,
//   };
// };

// const You = createStackNavigator({
//   PersonalProfile,
//   MapView
// })

// const RewardsStack = createStackNavigator({
//   Rewards,
//   MapView
// })

// const LeaderBoardStack = createStackNavigator({
//   LeaderBoard,
//   MapView
// })




///////

class IconWithBadge extends React.Component {
  render() {
    const { name, badgeCount, color, size } = this.props;
    return (
      <View style={{ width: 24, height: 24, margin: 5 }}>
        <Ionicons name={name} size={size} color={color} />
        {badgeCount > 0 && (
          <View
            style={{
              position: 'absolute',
              right: -6,
              top: -3,
              backgroundColor: 'red',
              borderRadius: 6,
              width: 12,
              height: 12,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{ color: 'white', fontSize: 10, fontWeight: 'bold' }}>
              {badgeCount}
            </Text>
          </View>
        )}
      </View>
    );
  }
}

const HomeIconWithBadge = props => {
  // need to pass down the badgeCount 
  return <IconWithBadge {...props} badgeCount={5} />;
};


/////


const FeedsNavigator = createMaterialTopTabNavigator({ HomeScreen: { screen: HomeScreen }, Map: { screen: MapView }, You: { screen: PersonalProfile } }, {
  tabBarPosition: "bottom",
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, horizontal, tintColor }) => {
      const { routeName } = navigation.state;
      let IconComponent = Ionicons;
      let iconName;
      if (routeName === 'Group') {
        iconName = `ios-information-circle${focused ? '' : '-outline'}`;
        IconComponent = HomeIconWithBadge;
      } else if (routeName === 'You') {
        iconName = `ios-options`;
      }
      return <IconComponent name={iconName} size={25} color={tintColor} />;
    },
  }),
  tabBarOptions: {
    activeTintColor: 'tomato',
    inactiveTintColor: 'gray',
  },
})



const AuthStack = createStackNavigator({ LoginScreen, RegisterScreen, PasswordResetScreen })

const GroupStack = createStackNavigator({ GroupsScreen })

//TEST TWO
// const DrawerNavigator = createDrawerNavigator({
//   Router: { screen: TestTwoCustomNavigator }, Rewards, LeaderBoard, Members: { screen: AllUsers }
// }, {



const DrawerNavigator = createDrawerNavigator({
  Feeds: { screen: FeedsNavigator }, Rewards, LeaderBoard, Members: { screen: AllUsers }
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
        <Button title='Time to Move?' onPress={() => props.navigation.navigate('Map')} />
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


//TEST ONE
// const AppContainer = createAppContainer(createSwitchNavigator({
//   CustomReactNavigationNavigator, AuthStack, GroupStack
// },
//   {
//     initialRouteName: 'AuthStack'
//   }));



const AppContainer = createAppContainer(createSwitchNavigator({
  DrawerNavigator, AuthStack, GroupStack
},
  {
    initialRouteName: 'AuthStack'
  }));

export default AppContainer;



