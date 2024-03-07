export const longWaitMs = 30000;
export const shortWaitMs = 20000;
export const resetFilter = 'span[class=\'filters\']';

export const clickOn = (element: string) => {
  cy.get(element).click({ force: true });
};
export const clickOnText = (text: string) => {
  cy.contains(text, { timeout: longWaitMs }).click({ force: true });
};
export const fillText = (element, data) => {
  cy.get(element, { timeout: shortWaitMs }).clear({ force: true }).type(data);
};
export const clickContainingText = (selector: string, text: string) => {
  cy.get(selector)
    .contains(text, { timeout: longWaitMs })
    .click({ force: true });
};
export const elementWithTextExist = (element, text) => {
  cy.get(element).contains(text, { timeout: longWaitMs }).should('exist');
};
export const elementWithTextNotExist = (element, text) => {
  cy.get(element).contains(text, { timeout: longWaitMs }).should('not.exist');
};
export const elementShouldBePresent = (element) => {
  cy.get(element, { timeout: longWaitMs }).should('be.visible');
};
export const textShouldBePresent = (text) => {
  cy.contains(text, { timeout: longWaitMs }).should('be.visible');
};
export const textShouldExist = (text) => {
  cy.contains(text, { timeout: shortWaitMs }).should('exist');
};
export const clearSearchFeed = (
  searchIcon,
  searchField,
  searchButton,
  eqValue
) => {
  cy.get(searchIcon, { timeout: shortWaitMs }).click({ force: true });
  cy.get(searchField, { timeout: shortWaitMs }).clear({ force: true });
  cy.get(searchButton).eq(eqValue).click({ force: true });
};

export const checkPermission = (
  permissionRow,
  module: string,
  checkBox,
  permission
) => {
  cy.get(permissionRow)
    .filter(`:contains(${module})`)
    .within(() => {
      cy.get(checkBox).eq(permission).check({ force: true });
    });
};
export const uncheckPermission = (
  permissionRow,
  module: string,
  checkBox,
  permission
) => {
  cy.get(permissionRow)
    .filter(`:contains(${module})`)
    .within(() => {
      cy.get(checkBox).eq(permission).uncheck({ force: true });
    });
};
export const clickAllowButton = (
  permissionRow,
  module: string,
  allowButton
) => {
  cy.get(permissionRow)
    .filter(`:contains(${module})`)
    .within(() => {
      cy.get(allowButton).eq(0).click({ force: true });
    });
};
export const clickFilterButton = (
  permissionRow,
  module: string,
  filterButton
) => {
  cy.get(permissionRow)
    .filter(`:contains(${module})`)
    .within(() => {
      cy.get(filterButton).eq(1).click({ force: true });
    });
};

export const getRandomNumber = (min: number, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
export const clickResetFilter = () => {
  cy.get(resetFilter).click({ force: true });
};
