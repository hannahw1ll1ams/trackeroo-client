import styles from './styles';
import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import Feed from '../../components/Feed';
import { DrawerActions } from 'react-navigation-drawer';
import Header from '../../components/Header';
import ToggleButton from '../../components/ToggleButton';



class HomeScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('groupName'),
      headerLeft: (
        <ToggleButton navigation={navigation} />),
      // headerRight: (
      //   <Button
      //     onPress={() => alert('This is a button!')}
      //     title="GO"
      //   />)
    }
  };

  state = {
    isLoading: true,
    events: [{ typeOfEvent: 'run', eventText: "View John's run" }]
  }

  postNewEvent = (newEvent) => {
    this.setState(currentState => {
      [newEvent, ...currentState.events]
    })
  }

  render() {
    const { getParam } = this.props.navigation;
    const { events } = this.state;
    // const { isLoading } = this.state;
    // if (isLoading) return <ActivityIndicator size="small" color="#00ff00" />
    return (
      <View style={styles.container}>
        <ToggleButton navigation={this.props.navigation} />
        {/* <Header navigation={this.props.navigation} /> */}
        {/* <Text>Username : {JSON.stringify(this.props.navigation.getParam('username', 'NO-username'))}</Text>
        <Text>Password : {JSON.stringify(this.props.navigation.getParam('password', 'NO-password'))}</Text> */}
        {/* <Text>GroupName : {JSON.stringify(this.props.navigation.getParam('groupName', 'no-group'))}</Text> */}

        <Feed navigation={this.props.navigation} groupName={getParam('groupName', 'no-group')} events={events} />
      </View>
    );
  }
}

export default HomeScreen;