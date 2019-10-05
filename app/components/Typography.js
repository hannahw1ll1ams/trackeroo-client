import React, { useContext } from "react";
import { Text } from "react-native";
import FontContext from "../context/FontContext";

const fonts = {
  400: "open-sans-regular",
  600: "open-sans-semibold",
  700: "open-sans-bold"
};

const Typography = ({ fontWeight, ...rest }) => {
  const hasFontLoaded = useContext(FontContext);
  return hasFontLoaded ? (
    <Text style={{ fontFamily: fonts[fontWeight] || fonts[400] }} {...rest} />
  ) : null;
};

export default Typography;
