import Keycloak from "keycloak-js";

const keycloak = new Keycloak({
  url: "http://localhost:8081",
  realm: "master",
  clientId: "spring-boot",
  "enable-cors": true
});

export default keycloak;