import {
  clickContainingText,
  clickOn,
  clickOnText,
  elementWithTextExist,
  fillText
} from '../utils/cypressMethod.util';
import {
  ADD_TAG,
  ORG_LEVEL_1,
  ORG_LEVEL_3,
  ORG_LEVEL_2_CHILD_1,
  ORG_LEVEL_2_CHILD_2,
  SAVE,
  TEST_ORG
} from '../utils/constants.util';
import { hamburgerMenuShldPrsnt } from './home.page';
import { fillPassword, fillUsername, submit, visit } from './login.page';
import {
  clearAllTagsSearchFields,
  clickAddNewTagsButton,
  navigateToTagsPage,
  tagsHeaderShldPrsnt
} from './tagsPage';
import { uniqueUI, uniqueUI2, uniqueUI3, uniqueUI4 } from './usersPage';

export const addTagsBlock = 'div[class=\'entity-form-add\']';
export const newTagsOrgDropDown = 'input[type=\'search\']';
export const newTagsTitleField = '.ant-input'; // "input[class='ant-input ant-input-status-error forms-input']";
export const newTagsTitleBlock =
  'div[class=\'ant-col ant-form-item-control\']>div>div>div>div>div:nth-of-type(2)>div:nth-of-type(2)';
let testTags, testData;
export const navigateToAddNewTagsPage = () => {
  clearAllTagsSearchFields();
  clickAddNewTagsButton();
  addTagsHeaderShldPrsnt();
};
export const addTagsHeaderShldPrsnt = () => {
  elementWithTextExist(addTagsBlock, ADD_TAG);
};
export const addTags = () => {
  addTagsHeaderShldPrsnt();
  clickOn(newTagsOrgDropDown);
  clickOnText(TEST_ORG); // Select organization from dropdown
  cy.fixture('Tags').then((data) => {
    testTags = data.newTagsTitle + uniqueUI;
    fillText(newTagsTitleField, testTags);
  });
  clickContainingText(addTagsBlock, ADD_TAG);
  clickContainingText(addTagsBlock, SAVE);
  cy.wait(3000);
  cy.reload();
  hamburgerMenuShldPrsnt();
  tagsHeaderShldPrsnt();
};
export const addTagMultilevel = () => {
  visit();
  cy.fixture('LoginCredentials').then((data) => {
    fillUsername(data.LEVEL_1_USERNAME);
    fillPassword(data.validPassword);
  });
  submit();

  navigateToTagsPage();
  navigateToAddNewTagsPage();
  addTagsHeaderShldPrsnt();
  clickOn(newTagsOrgDropDown);
  clickOnText(ORG_LEVEL_1); // Select level 1 organization from dropdown
  cy.fixture('Tags').then((data) => {
    testData = data.newTagsTitle + uniqueUI;
    fillText(newTagsTitleField, testData);
  });
  clickContainingText(addTagsBlock, ADD_TAG);
  clickContainingText(addTagsBlock, SAVE);
  cy.wait(3000);
  cy.reload();
  hamburgerMenuShldPrsnt();
  tagsHeaderShldPrsnt();
  // Add tags for level 2 child 1 organizations
  navigateToAddNewTagsPage();
  addTagsHeaderShldPrsnt();
  clickOn(newTagsOrgDropDown);
  clickOnText(ORG_LEVEL_2_CHILD_1); // Select level 2 organization from dropdown
  cy.fixture('Tags').then((data) => {
    testData = data.newTagsTitle + uniqueUI2;
    fillText(newTagsTitleField, testData);
  });
  clickContainingText(addTagsBlock, ADD_TAG);
  clickContainingText(addTagsBlock, SAVE);
  cy.wait(3000);
  cy.reload();
  hamburgerMenuShldPrsnt();
  tagsHeaderShldPrsnt();
  // Level 2 child 2()
  navigateToAddNewTagsPage();
  addTagsHeaderShldPrsnt();
  clickOn(newTagsOrgDropDown);
  clickOnText(ORG_LEVEL_2_CHILD_2); // Select level 2 organization from dropdown
  cy.fixture('Tags').then((data) => {
    testData = data.newTagsTitle + uniqueUI3;
    fillText(newTagsTitleField, testData);
  });
  clickContainingText(addTagsBlock, ADD_TAG);
  clickContainingText(addTagsBlock, SAVE);
  cy.wait(3000);
  cy.reload();
  hamburgerMenuShldPrsnt();
  tagsHeaderShldPrsnt();
  // Add tags for level 3 child of level 2 child 1 organizations
  navigateToAddNewTagsPage();
  addTagsHeaderShldPrsnt();
  clickOn(newTagsOrgDropDown);
  clickOnText(ORG_LEVEL_3); // Select level 2 organization from dropdown
  cy.fixture('Tags').then((data) => {
    testData = data.newTagsTitle + uniqueUI4;
    fillText(newTagsTitleField, testData);
  });
  clickContainingText(addTagsBlock, ADD_TAG);
  clickContainingText(addTagsBlock, SAVE);
  cy.wait(3000);
  cy.reload();
  hamburgerMenuShldPrsnt();
  tagsHeaderShldPrsnt();
};
