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
import { ListItem, ButtonGroup } from 'react-native-elements';
import Typography from '../../components/Typography';
import { SafeAreaView } from 'react-navigation';
import { Avatar, Badge, Icon, withBadge } from 'react-native-elements'

class FollowingScreen extends Component {
  state = {
    users: [
      { name: 'John', followers: "10" },
      { name: 'Hannah', followers: "100000" },
      { name: 'Than', followers: "75" },
      { name: 'Tim', followers: "-30" }
    ],
    suggested: [
      { name: 'Rowan', followers: "67" },
      { name: 'Williams', followers: "3" },
      { name: 'Doran', followers: "76" },
      { name: 'Doan', followers: "100" }
    ], selectedIndex: 0
  };


  updateIndex = (selectedIndex) => {
    this.setState({ selectedIndex })
  }

  handlePress = () => {
    console.log('pressed')
  }

  render() {
    const { users, selectedIndex, suggested } = this.state;
    const buttons = ["Current Members", "Suggested"]
    // console.log(users);
    return (
      <View style={styles.container}>
        <ButtonGroup
          onPress={this.updateIndex}
          selectedIndex={selectedIndex}
          buttons={buttons}
          containerStyle={{ height: 100 }}
        />
        {selectedIndex === 1 && <Typography>People you might know to invite to group</Typography>
        }
        {selectedIndex === 0 && <FlatList
          data={users}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <ListItem
              style={styles.flatview}
              title={item.name}
              bottomDivider={true}
              rightTitle="wave to"
              subtitle={`${item.followers} followers`}
              badge={{ value: 'wave to', textStyle: { color: 'orange' }, containerStyle: { marginTop: -20 } }}
              onPress={this.handlePress}
              checkmark={true}
            />
          )}
          keyExtractor={item => item.name}
        />}

        {selectedIndex === 1 &&
          <FlatList
            data={suggested}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <ListItem
                style={styles.flatview}
                title={item.name}
                bottomDivider={true}
                rightTitle="invite"
                subtitle={item.followers}
                badge={{ value: 'invite', textStyle: { color: 'orange' }, containerStyle: { marginTop: -20 } }}
              />
            )}
            keyExtractor={item => item.name}
          />}
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
    color: 'purple',
    marginLeft: 7
  },
  flatview: {
    justifyContent: 'center',
    paddingTop: 30,
    borderRadius: 2
  }
});

export default FollowingScreen;
