import Keycloak from 'keycloak-js'

const keycloakConfig = {
   url: 'http://localhost:18080/auth', 
   realm: 'MyProject', 
   clientId: 'my-app-client'
}
const keycloak = new Keycloak(keycloakConfig);
export default keycloak