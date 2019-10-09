import styles from './styles';
import React, { Component } from 'react';
import { View, Text, Button, Image } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import ViewToggler from '../../components/ViewToggler';

class GroupsScreen extends Component {
  state = {
    groups: [
      {
        title: 'Northcoders',
        img:
          'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg'
      },
      {
        title: 'FunRun',
        img: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'
      }
    ]
  };
  static navigationOptions = ({ navigation }) => {
    return {
      header: null
    };
  };
  onPress = (event, title) => {
    const { navigate } = this.props.navigation;
    const groupName = 'Trackeroo - ' + title;
    navigate('HomeScreen', { title: 'Home', groupName });
  };

  postNewGroup = newGroup => {
    this.setState(currentState => {
      return { groups: [...currentState.groups, newGroup] };
    });
  };

  render() {
    const { groups } = this.state;
    console.log(groups);
    return (
      <View style={styles.groups}>
        <Image source={require('./fabio.jpg')} style={styles.backgroundImage} />
        <Text style={styles.text}>Your current groups: </Text>
        {groups.map(group => {
          return (
            <ListItem
              key={group.title}
              title={group.title}
              bottomDivider
              rightTitle="View Group"
              onPress={event => this.onPress(event, group.title)}
              leftAvatar={{ source: { uri: group.img } }}
            />
            // <Button
            //   key={group.title}
            //   title={group.title}
            //   onPress={event => this.onPress(event, group.title)}
            // />
          );
        })}
        <ViewToggler item="group" postNewGroup={this.postNewGroup} />
      </View>
    );
  }
}

export default GroupsScreen;
