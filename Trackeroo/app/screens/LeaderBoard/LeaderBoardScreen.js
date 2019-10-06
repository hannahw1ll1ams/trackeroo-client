import styles from './styles';
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import ToggleButton from '../../components/ToggleButton';

class LeaderBoardScreen extends Component {
  // static navigationOptions = ({ navigation }) => {
  //   return {
  //     title: navigation.getParam('title'),
  //     headerLeft: (
  //       <ToggleButton navigation={navigation} />)
  //   }
  // };
  render() {
    return (
      <View style={styles.container}>
        <ToggleButton navigation={this.props.navigation} />
        <Text>This is the LeaderBoard</Text>
      </View>
    );
  }
}

export default LeaderBoardScreen;