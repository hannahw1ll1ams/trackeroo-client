import React from 'react';
import { Text, View } from 'react-native';


const FeedCard = ({ navigation }) => {
  return (
    <View>
      <Text onPress={() => navigation.navigate('MapView')}>View John's run</Text>
    </View>
  );
};

export default FeedCard;