import styles from './styles';
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { List, ListItem } from 'react-native-elements'

class GroupsScreen extends Component {

  state = {
    groups: [{ title: 'northcoders' }, { title: 'FunRun' }]
  }


  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('title')
    }
  };

  onPressTitle = (event) => {
    console.log(event.nativeEvent)
    console.log('clicked')
  }

  handleSubmit = () => {

  }

  render() {
    const { groups } = this.state;
    return (
      <View style={styles.container}>
        <Text>Choose a group</Text>
        {<List>
          {groups.map(group => {
            <ListItem
              title={group.title}
            />
          })}
        </List>}
      </View>
    );
  }
}

export default GroupsScreen;