import { UserRole } from '../global.util';

export const Rest = (role: UserRole) => {
  const username = Cypress.env(role).username;
  const password = Cypress.env(role).encryptedPassword;
  return cy.loginWithoutUI(username, password).then((response) => {
    return response.body.data.tokens.access_token;
  });
};
