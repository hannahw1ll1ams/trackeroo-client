import React from 'react';
import { Text, View, StyleSheet } from 'react-native';


const FeedCard = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text} onPress={() => navigation.navigate('MapView')}>View John's run</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: { borderColor: 'black', borderWidth: 1, width: 400, textAlign: 'center' }
});

export default FeedCard;