# trackeroo-client

### Setting up Environment Variables

In the root of the project, create an `environment.js` file and add the following:

```
import Constants from "expo-constants";

const apiUrl = "your-api-url";
const webSocketUrl =
  "your-websocket-url";

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
