import Keycloak from "keycloak-js";

const keycloak = new Keycloak(

  {
    "realm": "penale-realm",
    "auth-server-url": "http://192.168.100.218:8080/auth/",
    "ssl-required": "external",
    "clientId": "penale-app",
    "credentials": {
      "clientSecret": "G92uLXt3EYbxZL0Kf57wHLQ2mlJnPLOp"
    },
    "confidential-port": 0
  }


);

export default keycloak;