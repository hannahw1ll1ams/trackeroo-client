import React from "react";
import * as Animatable from "react-native-animatable";

const TransitionView = props => {
  const { ...rest } = props;
  return (
    <Animatable.View
      {...rest}
      useNativeDriver
      duration={500}
      animation="fadeIn"
    />
  );
};

export default TransitionView;
