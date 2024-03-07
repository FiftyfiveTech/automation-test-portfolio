import { clickOn, fillText } from '../utils/cypressMethod.util';
const usernameField = 'input[name=username]';
const passwordField = 'input[type=password';
const signinButtonField = 'button[type=button]';

export const visit = () => {
  cy.clearLocalStorage();
  cy.visit('login');
};
export const fillUsername = (userName) => {
  fillText(usernameField, userName);
  return this;
};
export const fillPassword = (password) => {
  fillText(passwordField, password);
  return this;
};
export const submit = () => {
  clickOn(signinButtonField);
};
export const redirectForUserLogin = () => {
  visit();
  cy.fixture('LoginCredentials').then((data) => {
    fillUsername(data.validUserAdmin);
    fillPassword(data.validPassword);
  });
  submit();
};
export const redirectForSuperAdminLogin = () => {
  visit();
  cy.fixture('LoginCredentials').then((data) => {
    fillUsername(data.validUserSuperAdmin);
    fillPassword(data.validSuperAdminPassword);
  });
  submit();
  cy.pause();
};

export const loginFromUI = (username: string, password: string) => {
  visit();
  fillUsername(username);
  fillPassword(password);
  submit();
};
