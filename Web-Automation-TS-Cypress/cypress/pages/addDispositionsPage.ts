import {
  clickContainingText,
  clickOnText,
  elementWithTextExist,
  fillText
} from '../utils/cypressMethod.util';
import {
  ADD_DISPOSITION,
  ORG_LEVEL_1,
  ORG_LEVEL_3,
  ORG_LEVEL_2_CHILD_1,
  ORG_LEVEL_2_CHILD_2,
  SAVE,
  TEST_ORG
} from '../utils/constants.util';
import {
  clickAddNewDispositionButton,
  dispositionsPageHeaderShouldPresent,
  navigateToDispositionPage
} from './dispositionsPage';
import { fillPassword, fillUsername, submit, visit } from './login.page';
import { uniqueUI, uniqueUI2, uniqueUI3, uniqueUI4 } from './usersPage';

const newDisposBlock = 'form[id=\'disposition_add\']';
const newDisposOrgDropDown = 'input[class=\'ant-select-selection-search-input\']';
const newDisposTitleField = '.ant-input'; // "input[class='ant-input ant-input-status-error forms-input']";

export let newDisposTitle;
export const navigateToAddDisposPage = () => {
  dispositionsPageHeaderShouldPresent();
  clickAddNewDispositionButton();
  elementWithTextExist(newDisposBlock, ADD_DISPOSITION);
};
export const addDisposition = () => {
  cy.get(newDisposOrgDropDown).should('exist').click();
  clickOnText(TEST_ORG);
  cy.fixture('Disposition').then((data) => {
    newDisposTitle = data.newDisposition + uniqueUI;
    fillText(newDisposTitleField, newDisposTitle);
    clickContainingText(newDisposBlock, ADD_DISPOSITION);
    cy.get(newDisposBlock).contains(SAVE).should('be.enabled');
    clickContainingText(newDisposBlock, SAVE);
    cy.wait(3000);
    cy.reload();
  });
};
export const addDispositionForBug = () => {
  cy.get(newDisposOrgDropDown).should('exist').click();
  clickOnText(TEST_ORG);
  cy.fixture('Disposition').then((data) => {
    newDisposTitle = data.newDisposition + uniqueUI;
    fillText(newDisposTitleField, newDisposTitle);
    clickContainingText(newDisposBlock, ADD_DISPOSITION);
    cy.get(newDisposBlock).contains(SAVE).should('be.enabled');
    clickContainingText(newDisposBlock, SAVE);
    cy.wait(3000);
    cy.reload();
  });
};
export const addDisposForMultiLevel = () => {
  visit();
  cy.fixture('LoginCredentials').then((data) => {
    fillUsername(data.LEVEL_1_USERNAME);
    fillPassword(data.validPassword);
  });
  submit();
  navigateToDispositionPage();
  navigateToAddDisposPage();
  // for level 1 dispositions
  cy.get(newDisposOrgDropDown).should('exist').click();
  clickOnText(ORG_LEVEL_1);
  cy.fixture('Disposition').then((data) => {
    newDisposTitle = data.newDisposition + uniqueUI;
    fillText(newDisposTitleField, newDisposTitle);
    clickContainingText(newDisposBlock, ADD_DISPOSITION);
    cy.get(newDisposBlock).contains(SAVE).should('be.enabled');
    clickContainingText(newDisposBlock, SAVE);
    cy.wait(3000);
    cy.reload();
    cy.wait(5000);
    navigateToAddDisposPage();
  });
  // level 2 dispositions
  // navigateToAddDisposPage();
  cy.get(newDisposOrgDropDown).should('exist').click();
  clickOnText(ORG_LEVEL_2_CHILD_1);
  cy.fixture('Disposition').then((data) => {
    newDisposTitle = data.newDisposition + uniqueUI2;
    fillText(newDisposTitleField, newDisposTitle);
    clickContainingText(newDisposBlock, ADD_DISPOSITION);
    cy.get(newDisposBlock).contains(SAVE).should('be.enabled');
    clickContainingText(newDisposBlock, SAVE);
    cy.wait(3000);
    cy.reload();
    cy.wait(5000);
    navigateToAddDisposPage();
  });
  // level 2 child child 2
  //  navigateToAddDisposPage();
  cy.get(newDisposOrgDropDown).should('exist').click();
  clickOnText(ORG_LEVEL_2_CHILD_2);
  cy.fixture('Disposition').then((data) => {
    newDisposTitle = data.newDisposition + uniqueUI3;
    fillText(newDisposTitleField, newDisposTitle);
    clickContainingText(newDisposBlock, ADD_DISPOSITION);
    cy.get(newDisposBlock).contains(SAVE).should('be.enabled');
    clickContainingText(newDisposBlock, SAVE);
    cy.wait(3000);
    cy.reload();
    cy.wait(5000);
    navigateToAddDisposPage();
  });
  // level 3  child of level 2 child 1 dispositions
  cy.get(newDisposOrgDropDown).should('exist').click();
  clickOnText(ORG_LEVEL_3);
  cy.fixture('Disposition').then((data) => {
    newDisposTitle = data.newDisposition + uniqueUI4;
    fillText(newDisposTitleField, newDisposTitle);
    clickContainingText(newDisposBlock, ADD_DISPOSITION);
    cy.get(newDisposBlock).contains(SAVE).should('be.enabled');
    clickContainingText(newDisposBlock, SAVE);
    cy.wait(3000);
    cy.reload();
    cy.wait(5000);
  });
};
