import React from "react";

const RunsContext = React.createContext({ runs: [], addRuns: () => {} });

export const RunsProvider = RunsContext.Provider;
export const RunsConsumer = RunsContext.Consumer;
export default RunsContext;
