import styles from './styles';
import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { List, ListItem } from 'react-native-elements'
import ViewToggler from '../../components/ViewToggler';

class GroupsScreen extends Component {

  state = {
    groups: [{ title: 'northcoders' }, { title: 'FunRun' }],
  }
  static navigationOptions = ({ navigation }) => {
    return {
      header: null,
    }
  };
  onPress = (event, title) => {
    const { navigate } = this.props.navigation;
    const groupName = "Trackeroo - " + title
    navigate('HomeScreen', { title: 'Home', groupName })
  }

  postNewGroup = (newGroup) => {
    this.setState(currentState => {
      return { groups: [...currentState.groups, newGroup] }
    })
  }

  render() {
    const { groups } = this.state;
    console.log(groups)
    return (
      <View style={styles.container}>
        <Text>Your current groups: </Text>
        {groups.map(group => {
          return <Button key={group.title} title={group.title} onPress={(event) => this.onPress(event, group.title)} />
        })}
        <ViewToggler item='group' postNewGroup={this.postNewGroup} />
      </View>
    );
  }
}

export default GroupsScreen;