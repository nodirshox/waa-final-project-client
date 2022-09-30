import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/App';
import { BrowserRouter } from 'react-router-dom';
import keycloak from './Keycloak';
import { ReactKeycloakProvider } from '@react-keycloak/web';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ReactKeycloakProvider authClient={keycloak} initOptions={{ onLoad: "sso", promiseType: "native" }}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ReactKeycloakProvider>
);

