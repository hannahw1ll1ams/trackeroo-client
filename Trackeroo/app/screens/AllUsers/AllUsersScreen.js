import styles from './styles';
import React, { Component } from 'react';
import { Text, View, StatusBar } from 'react-native';
import ToggleButton from '../../components/ToggleButton';
import { SafeAreaView } from "react-navigation";

class AllUsersScreen extends Component {
  // static navigationOptions = ({ navigation }) => {
  //   return {
  //     title: navigation.getParam('title'),
  //     headerLeft: (
  //       <ToggleButton navigation={navigation} />)
  //   }
  // };
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor="#3b5998" barStyle="light-content" />
        <ToggleButton navigation={this.props.navigation} />
        <Text>This screen is empty.</Text>
      </SafeAreaView>
    );
  }
}

export default AllUsersScreen;