// import React from 'react';
// import { View } from 'react-native';
// //import Typography from '../../components/Typography';
// import UserList from '../../components/UserList';

// const FollowingScreen = () => {
//   return (
//     <View>
//       <UserList />
//     </View>
//   );
// };

// export default FollowingScreen;

import React, { Component } from 'react';
import { View, Button, Text, FlatList, StyleSheet } from 'react-native';
import { ListItem } from 'react-native-elements';
import Typography from '../../components/Typography';
import { SafeAreaView } from 'react-navigation';

class FollowingScreen extends Component {
  state = {
    users: [
      { name: 'John' },
      { name: 'Hannah' },
      { name: 'Than' },
      { name: 'Tim' }
    ],
    suggested: [
      { name: 'Rowan' },
      { name: 'Williams' },
      { name: 'Doran' },
      { name: 'Doan' }
    ]
  };

  render() {
    const { users, suggested } = this.state;
    // console.log(users);
    return (
      <View style={styles.container}>
        <Text style={styles.text}></Text>

        <FlatList
          data={users}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <ListItem
              style={styles.flatview}
              title={item.name}
              bottomDivider={true}
              rightTitle="unfollow"
            />
          )}
          keyExtractor={item => item.name}
        />
        <Text style={styles.text}>People you may know</Text>
        <FlatList
          data={suggested}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <ListItem
              style={styles.flatview}
              title={item.name}
              bottomDivider={true}
              rightTitle="follow"
            >
              <Button>+</Button>
            </ListItem>
          )}
          keyExtractor={item => item.name}
        />
      </View>
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
  },
  flatview: {
    justifyContent: 'center',
    paddingTop: 30,
    borderRadius: 2
  }
});

export default FollowingScreen;
