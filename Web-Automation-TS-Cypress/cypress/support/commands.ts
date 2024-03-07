import { SERVER_API, getServerRequestURL } from '../utils/global.util';

Cypress.Commands.add('loginWithoutUI', (username: string, password: string) => {
  return cy.request({
    url: getServerRequestURL(SERVER_API.AUTH_LOGIN),
    body: { username, password },
    method: 'POST'
  });
});
