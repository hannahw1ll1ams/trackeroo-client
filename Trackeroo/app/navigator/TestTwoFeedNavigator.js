import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import HomeScreen from '../screens/Home';
import MapView from '../screens/MapView';
import PersonalProfile from '../screens/PersonalProfile';
import { createAppContainer } from 'react-navigation';



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

export default createAppContainer(FeedsNavigator);
