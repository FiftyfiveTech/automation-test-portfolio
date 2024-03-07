import { loginFromUI } from '../pages/login.page';

export const AUTH_LOCAL_STORAGE_KEY = 'atlas-auth';

export enum UserRole {
  SUPER_ADMIN = 'superadmin',
  ADMIN = 'admin',
  AGENT = 'agent',
  ADMIN_AGENT = 'admin_agent'
}

export enum NAV_BAR_API {
  DISPOSITIONS = 'dispositions',
  TAGS = 'tags',
}

export enum SERVER_API {
  AUTH_LOGIN = 'auth/login/',
  DISPOSITION = 'disposition/',
}

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}

export const getServerRequestURL = (api: SERVER_API) => {
  return Cypress.env('backendUrl') + api;
};

export const login = (withoutUI: boolean = false, role: UserRole) => {
  const username = Cypress.env(role).username;
  if (withoutUI) {
    const password = Cypress.env(role).encryptedPassword;
    cy.loginWithoutUI(username, password).then((response) => {
      localStorage.setItem(
        AUTH_LOCAL_STORAGE_KEY,
        JSON.stringify(response.body.data.tokens)
      );
      cy.saveLocalStorage();
    });
  } else {
    const password = Cypress.env(role).password;
    loginFromUI(username, password);
  }
};
