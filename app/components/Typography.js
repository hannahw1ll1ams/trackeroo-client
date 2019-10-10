import React, { useContext } from "react";
import { Text } from "react-native";
import FontContext from "../context/FontContext";

const colors = {
  primary: "rgba(255,255,255,1)",
  secondary: "rgba(255,255,255,0.7)",
  tertiary: "rgba(255,255,255,0.5)",
  accent: "#ce93d8",
  error: "#ff8c00"
};

const fonts = {
  400: "open-sans-regular",
  600: "open-sans-semibold",
  700: "open-sans-bold"
};

const Typography = ({
  fontWeight,
  color,
  fontSize,
  letterSpacing,
  mb,
  ...rest
}) => {
  const hasFontLoaded = useContext(FontContext);
  return hasFontLoaded ? (
    <Text
      style={{
        fontSize: fontSize || 14,
        color: colors[color] || colors.primary,
        fontFamily: fonts[fontWeight] || fonts[400]
      }}
      {...rest}
    />
  ) : null;
};

export default Typography;
