import React, { Component } from "react";
import { FlatList, Platform, StatusBar, StyleSheet } from "react-native";
import { SafeAreaView } from "react-navigation";
import { data } from "../../config/fixtures";
import { ListItem, Icon } from "react-native-elements";

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  padLeft: {
    paddingLeft: 16
  },
  padRight: {
    paddingRight: 16
  }
});

export class PersonalProfileScreen extends Component {
  static navigationOptions = {
    headerLeft: (
      <Icon
        name={`${Platform.OS === "ios" ? "ios" : "md"}-menu`}
        type="ionicon"
        color="white"
        containerStyle={styles.padLeft}
      />
    ),
    headerTitle: "List",
    headerRight: (
      <React.Fragment>
        <Icon
          name={`${Platform.OS === "ios" ? "ios" : "md"}-chatbubbles`}
          type="ionicon"
          color="white"
          containerStyle={styles.padRight}
        />
        <Icon
          name={`${Platform.OS === "ios" ? "ios" : "md"}-more`}
          type="ionicon"
          color="white"
          containerStyle={styles.padRight}
        />
      </React.Fragment>
    )
  };

  keyExtractor = item => String(item.id);

  renderItem = ({ item }) => (
    <ListItem
      title={`${item.firstName} ${item.lastName}`}
      subtitle={item.job}
      leftAvatar={{ source: { uri: item.avatar } }}
      bottomDivider={true}
    />
  );

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor="#3b5998" barStyle="light-content" />
        <FlatList data={data} keyExtractor={this.keyExtractor} renderItem={this.renderItem} />
      </SafeAreaView>
    );
  }
}

export default PersonalProfileScreen;