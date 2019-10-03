import styles from './styles';
import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { List, ListItem } from 'react-native-elements'

class GroupsScreen extends Component {

  state = {
    groups: [{ title: 'northcoders' }, { title: 'FunRun' }],
    selectedGroup: null
  }

  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('title')
    }
  };

  onPress = (event, title) => {
    console.log(this.props.navigation)
    this.setState({ selectedGroup: title })
    const { navigate } = this.props.navigation;
    const { selectedGroup } = this.state;
    navigate('HomeScreen', { title: 'Home', groupName: selectedGroup })
  }

  render() {
    const { groups } = this.state;
    return (
      <View style={styles.container}>
        <Text>Your current groups: </Text>
        {groups.map(group => {
          return <Button key={group.title} title={group.title} onPress={(event) => this.onPress(event, group.title)} />
        })}
      </View>
    );
  }
}

export default GroupsScreen;