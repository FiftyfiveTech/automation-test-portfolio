import {
  clickContainingText,
  clickOn,
  clickOnText,
  fillText,
  textShouldBePresent
} from '../utils/cypressMethod.util';
import {
  ADD_NEW,
  ADD_ORGANIZATION,
  CONNECTEL,
  NULL_STRING,
  ORGANIZATIONS,
  SAVE
} from '../utils/constants.util';
import { menuSubmenuBlock } from './home.page';
import {
  clickAddNewOrgButton,
  organizationHeaderShldPrsnt
} from './organizationPage';
import { uniqueUI, uniqueUI2 } from './usersPage';

const newOrgTitleField = 'input[class=\'ant-input forms-input\']';
const newOrgParentDropdown =
  'div[class=\'ant-row ant-form-item form-item ant-form-element-organization_id ant-form-element-organization_id  ant-form-item-has-success\']>div:nth-of-type(2)';
let testOrg;
export const navigateToAddOrganizationPage = () => {
  organizationHeaderShldPrsnt(); // Validation for organization page.
  clickAddNewOrgButton();
  textShouldBePresent(ADD_ORGANIZATION); // Admin-page-wrpalidation for add new organization page.
};
export const addOrganization = () => {
  cy.fixture('Org').then((data) => {
    testOrg = data.OrganizationTitle + uniqueUI;
    fillText(newOrgTitleField, testOrg);
  });
  clickOn(newOrgParentDropdown);
  clickOnText(CONNECTEL); // Select parent for organization.
  clickOnText(SAVE); // Save button.
};
export const addOrganization2 = () => {
  cy.fixture('Org').then((data) => {
    testOrg = data.OrganizationTitle + uniqueUI2;
    fillText(newOrgTitleField, testOrg);
    clickOn(newOrgParentDropdown);
    testOrg = data.OrganizationTitle + uniqueUI;
    clickOnText(testOrg); // Select parent for organization.
    clickOnText(SAVE); // Save button.
  });
};
export const addOrgWithNullStrTitle = () => {
  clickOnText(ADD_NEW); // Add new button for adding organization.
  textShouldBePresent(ADD_ORGANIZATION); // Validation for add new organization page.
  fillText(newOrgTitleField, NULL_STRING);
  clickOn(newOrgParentDropdown);
  clickOnText(CONNECTEL); // Select parent for organization.
  cy.contains(SAVE).should('be.disabled'); // Save button should be disabled.
  clickContainingText(menuSubmenuBlock, ORGANIZATIONS);
};
export const addMultipleOrganization = () => {
  cy.fixture('Org').then((data) => {
    testOrg = data.OrganizationTitle + uniqueUI;
    fillText(newOrgTitleField, testOrg);
  });
  clickOn(newOrgParentDropdown);
  clickOnText(CONNECTEL); // Select parent for organization.
  clickOnText(SAVE); // Save button.
};
