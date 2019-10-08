import React, { Component } from 'react';
import {
  View,
  Button,
  Text,
  FlatList,
  StyleSheet,
  SafeAreaView
} from 'react-native';
import { ListItem } from 'react-native-elements';
//import Typography from './Typography';

class UserList extends Component {
  state = {
    users: [
      { name: 'John' },
      { name: 'Hannah' },
      { name: 'Than' },
      { name: 'Tim' }
    ]
  };
  keyExtractor = item => String(item.name);

  renderItem = ({ item }) => <ListItem title={item.name} />;
  render() {
    const { users } = this.state;
    // console.log(users);

    return (
      <SafeAreaView style={styles.container}>
        <Text>This is UserList Screen</Text>
        <FlatList
          data={users.name}
          keyExtractor={this.keyExtractor}
          renderItem={this.renderItem}
        />
        <Button title="+" />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1
  },
  text: {
    fontSize: 25,
    color: 'red',
    marginLeft: 7
  }
});

export default UserList;
