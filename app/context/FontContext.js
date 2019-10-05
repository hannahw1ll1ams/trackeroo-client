import React from "react";

const FontContext = React.createContext();

export const FontProvider = FontContext.Provider;
export const FontConsumer = FontContext.Consumer;
export default FontContext;
