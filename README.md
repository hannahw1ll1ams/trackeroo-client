# trackeroo-client

### Setting up Environment Variables

In the root of the project, create an `environment.js` file and add the following:

```
import Constants from "expo-constants";

const apiUrl = "https://t7yfejrlg9.execute-api.eu-west-1.amazonaws.com/api";
const webSocketUrl =
  "wss://gm0t9l8xo2.execute-api.eu-west-1.amazonaws.com/api/";

const ENV = {
  dev: {
    apiUrl,
    webSocketUrl
  },
  prod: {
    apiUrl,
    webSocketUrl
  }
};

const getEnvVars = (env = Constants.manifest.releaseChannel) => {
  if (__DEV__) {
    return ENV.dev;
  } else if (env === "staging") {
    return ENV.staging;
  } else if (env === "prod") {
    return ENV.prod;
  }
};

export default getEnvVars;


```
