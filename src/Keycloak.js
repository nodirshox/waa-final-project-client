import Keycloak from "keycloak-js";

const keycloak = new Keycloak({
  url: "http://localhost:8081",
  realm: "waa-property",
  clientId: "waa-property-client",
  "enable-cors": true
});

export default keycloak;