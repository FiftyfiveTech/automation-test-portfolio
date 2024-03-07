import './commands';
import 'cypress-mochawesome-reporter/register';

declare global {
  namespace Cypress {
    interface Chainable {
      loginWithoutUI(
        username: string, password: string
      )
    }
  }
}

Cypress.on('uncaught:exception', () => {
  return false;
});
