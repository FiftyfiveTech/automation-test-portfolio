import './commands';
import 'cypress-localstorage-commands';

afterEach(() => {
  cy.restoreLocalStorage();
});
