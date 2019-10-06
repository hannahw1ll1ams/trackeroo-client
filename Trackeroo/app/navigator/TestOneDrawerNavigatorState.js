import { createAppContainer } from 'react-navigation';
import HomeScreen from '../screens/Home';
import MapView from '../screens/MapView';
import Rewards from '../screens/Rewards';
import PersonalProfile from '../screens/PersonalProfile';
import LeaderBoard from '../screens/LeaderBoard';
// import AuthLoadingScreen from '../screens/AuthLoading';
import AllUsers from '../screens/AllUsers';
import React from 'react';
import { View, Button, Text, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // 6.2.2

import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator, DrawerNavigatorItems } from 'react-navigation-drawer';
import SafeAreaView from 'react-native-safe-area-view';



const FeedsNavigator = createMaterialTopTabNavigator({ HomeScreen: { screen: HomeScreen }, Map: { screen: MapView }, You: { screen: PersonalProfile } }, {
  tabBarPosition: "bottom",
  // defaultNavigationOptions: ({ navigation }) => ({
  //   tabBarIcon: ({ focused, horizontal, tintColor }) => {
  //     const { routeName } = navigation.state;
  //     let IconComponent = Ionicons;
  //     let iconName;
  //     if (routeName === 'Group') {
  //       iconName = `ios-information-circle${focused ? '' : '-outline'}`;
  //       IconComponent = HomeIconWithBadge;
  //     } else if (routeName === 'You') {
  //       iconName = `ios-options`;
  //     }
  //     return <IconComponent name={iconName} size={25} color={tintColor} />;
  //   },
  // }),
  tabBarOptions: {
    activeTintColor: 'tomato',
    inactiveTintColor: 'gray',
  },
})




const DrawerNavigator = createDrawerNavigator({
  // Router: {
  Feeds: { screen: FeedsNavigator }, Rewards: { screen: Rewards }, LeaderBoard: { screen: LeaderBoard }, Members: { screen: AllUsers }

}, {

  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#651fff',
    },
    initialRouteName: 'HomeScreen',
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

export default createAppContainer(DrawerNavigator);
