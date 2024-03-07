import {
  clickContainingText,
  clickOn,
  clickOnText,
  elementWithTextExist,
  fillText
} from '../utils/cypressMethod.util';
import {
  ADD_ITEM,
  ADMIN,
  CONNECTEL,
  EDIT_USER,
  ERROR_MSG,
  MINIMUM_1_OPTION_REQUIRED_WARNING,
  SAVE,
  TEST_ADMIN_PROFILE,
  TEST_ORG,
  USERS
} from '../utils/constants.util';
import { menuSubmenuBlock } from './home.page';
import { fillPassword, fillUsername, submit, visit } from './login.page';
import {
  clearUserAllSearchField,
  clickEditUser,
  clickEditUserForPermissionInMultilevel,
  navigateToUserPage,
  uniqueUI,
  uniqueUI2,
  uniqueUI4,
  userHeaderShldPrsnt
} from './usersPage';

const editUserBlock = 'div[class=\'entity-form-edit\']';
const editUserEmailField =
  'div[class=\'ant-row ant-form-item form-item ant-form-element-email ant-form-element-email  ant-form-item-has-success\']>div:nth-of-type(2)>div>div>input';
const editUserFirstNameField =
  'div[class=\'ant-row ant-form-item form-item ant-form-element-first_name ant-form-element-first_name  ant-form-item-has-success\']>div:nth-of-type(2)>div>div>input';
const editUserLastNameField =
  'div[class=\'ant-row ant-form-item form-item ant-form-element-last_name ant-form-element-last_name  ant-form-item-has-success\']>div:nth-of-type(2)>div>div>input';
const editUserOrgDropdown =
  '.form-list-wrapper>div>div>div>div>div>div:nth-of-type(2)>div>div>div>div:nth-child(1)>span:nth-child(1)>input';
const editUserRoleDropdown =
  '.form-list-wrapper>div>div>div>div>div:nth-of-type(2)>div:nth-of-type(2)>div>div>div>div>div>span>input[type=\'search\']';
const editUserAdminProfileDropdown =
  '.form-list-wrapper>div>div>div>div>div:nth-of-type(3)>div:nth-of-type(2)>div>div>div>div>div>span>input';
const editUserRole =
  'div[class=\'rc-virtual-list\']>div>div>div>div:nth-of-type(2)[title=\'Admin\']';
const editUserOrgProfileBlock =
  'div[class=\'ant-row ant-form-item form-item ant-form-element-__organizations ant-form-element-__organizations  ant-form-item-has-success]';
const editUserOrgProfileDeleteIcon =
  'path[d=\'M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2\']';
let editUserEmail;

export const navigateToEditUserPage = () => {
  userHeaderShldPrsnt();
  clickEditUser();
  editUserHeaderShldPrsnt();
};

export const editUserHeaderShldPrsnt = () => {
  // elementWithTextExist(editUserBlock,EDIT_USER);
  elementWithTextExist(editUserBlock, EDIT_USER);
};
export const editUser = () => {
  cy.fixture('NewUser').then((data) => {
    editUserEmail = data.editEmailPre + uniqueUI + data.uEmailPost;
    fillText(editUserEmailField, editUserEmail);
    cy.wait(2000);
    fillText(editUserFirstNameField, data.editUserFirstName);
    fillText(editUserLastNameField, data.editUserLastName);
  });
  clickContainingText(editUserBlock, SAVE);
  cy.wait(3000);
  clearUserAllSearchField();
};
export const addOrgProfileAtEditUserPage = () => {
  clickOn(editUserOrgDropdown);
  clickOnText(TEST_ORG); // select organization
  clickOn(editUserRoleDropdown); // click role dropdown
  clickContainingText(editUserRole, ADMIN); // select role
  clickOn(editUserAdminProfileDropdown);
  clickOnText(TEST_ADMIN_PROFILE);
};

export const addOrgProfileForLevel1Multilevel = () => {
  // levle 1 user
  visit();
  cy.fixture('LoginCredentials').then((data) => {
    fillUsername(data.LEVEL_1_USERNAME);
    fillPassword(data.validPassword);
  });
  submit();
  navigateToUserPage();
  cy.wait(5000);
  cy.fixture('OrgMultiLevel').then((data) => {
    clickEditUserForPermissionInMultilevel(data.ORG_LEVEL_1_USER);
    clickOnText(ADD_ITEM);
    cy.get(editUserOrgDropdown).eq(1).click({ force: true });

    clickOnText(data.ORG_LEVEL_2_CHILD_1); // select organization india (level2 child 1)
  });

  cy.get(editUserRoleDropdown).eq(1).click({ force: true }); // click role dropdown
  cy.get(editUserRole).contains(ADMIN).click({ force: true }); // select role admin
  cy.fixture('AdminProfiles').then((data) => {
    cy.get(
      '.ant-form-element-__organizations_1_adminprofile_id > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .select-wrapper > .ant-select > .ant-select-selector'
    ).click({ force: true });
    cy.contains(data.newAdminProfieTitle + uniqueUI2).click({ force: true });
  });
  clickContainingText(editUserBlock, SAVE);
  cy.wait(5000);
};
export const addOrgProfileForLevel2child1Multilevel = () => {
  // level 2 child 1 user
  visit();
  cy.fixture('LoginCredentials').then((data) => {
    fillUsername(data.LEVEL_1_USERNAME);
    fillPassword(data.validPassword);
  });
  submit();
  navigateToUserPage();
  cy.wait(5000);
  cy.fixture('OrgMultiLevel').then((data) => {
    clickEditUserForPermissionInMultilevel(data.ORG_LEVEL_2_CHILD_1_USER);
    clickOnText(ADD_ITEM);
    cy.get(editUserOrgDropdown).eq(1).click({ force: true });

    clickOnText(data.ORG_LEVEL_3); // select organization india (level2 child 1)
  });

  cy.get(editUserRoleDropdown).eq(1).click({ force: true }); // click role dropdown
  cy.get(editUserRole).contains(ADMIN).click({ force: true }); // select role admin
  cy.fixture('AdminProfiles').then((data) => {
    cy.get(
      '.ant-form-element-__organizations_1_adminprofile_id > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .select-wrapper > .ant-select > .ant-select-selector'
    ).click({ force: true });
    cy.contains(data.newAdminProfieTitle + uniqueUI4).click({ force: true });
  });
  clickContainingText(editUserBlock, SAVE);
  cy.wait(5000);
};
export const addOrgProfileForLevel2child2Multilevel = () => {
  // level 2 child 2
  visit();
  cy.fixture('LoginCredentials').then((data) => {
    fillUsername(data.LEVEL_1_USERNAME);
    fillPassword(data.validPassword);
  });
  submit();
  navigateToUserPage();
  cy.wait(5000);
  cy.fixture('OrgMultiLevel').then((data) => {
    clickEditUserForPermissionInMultilevel(data.ORG_LEVEL_2_CHILD_2_USER);
    clickOnText(ADD_ITEM);
    cy.get(editUserOrgDropdown).eq(1).click({ force: true });

    clickOnText(data.ORG_LEVEL_2_CHILD_1); // select organization india (level2 child 1)
  });

  cy.get(editUserRoleDropdown).eq(1).click({ force: true }); // click role dropdown
  cy.get(editUserRole).contains(ADMIN).click({ force: true }); // select role admin
  cy.fixture('AdminProfiles').then((data) => {
    cy.get(
      '.ant-form-element-__organizations_1_adminprofile_id > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .select-wrapper > .ant-select > .ant-select-selector'
    ).click({ force: true });
    cy.contains(data.newAdminProfieTitle + uniqueUI2).click({ force: true });
  });
  clickContainingText(editUserBlock, SAVE);
  cy.wait(5000);
};
export const addOrgProfileForLevel3Multilevel = () => {
  // level 3
  visit();
  cy.fixture('LoginCredentials').then((data) => {
    fillUsername(data.LEVEL_1_USERNAME);
    fillPassword(data.validPassword);
  });
  submit();
  navigateToUserPage();
  cy.wait(5000);
  cy.fixture('OrgMultiLevel').then((data) => {
    clickEditUserForPermissionInMultilevel(data.ORG_LEVEL_3_USER);
    clickOnText(ADD_ITEM);
    cy.get(editUserOrgDropdown).eq(1).click({ force: true });

    clickOnText(data.ORG_LEVEL_1); // select organization (level 1)
  });

  cy.get(editUserRoleDropdown).eq(1).click({ force: true }); // click role dropdown
  cy.get(editUserRole).contains(ADMIN).click({ force: true }); // select role admin
  cy.fixture('AdminProfiles').then((data) => {
    cy.get(
      '.ant-form-element-__organizations_1_adminprofile_id > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .select-wrapper > .ant-select > .ant-select-selector'
    ).click({ force: true });
    cy.contains(data.newAdminProfieTitle + uniqueUI).click({ force: true });
  });
  clickContainingText(editUserBlock, SAVE);
  cy.wait(5000);
};

export const deleteOrgProfileAtEditUser = () => {
  cy.fixture('NewUser').then((data) => {
    editUserEmail = data.editEmailPre + uniqueUI + data.uEmailPost;
    fillText(editUserEmailField, editUserEmail);
    cy.wait(2000);
    fillText(editUserFirstNameField, data.editUserFirstName);
    fillText(editUserLastNameField, data.editUserLastName);
  });
  cy.get(editUserOrgProfileDeleteIcon).eq(0).click({ force: true });
  cy.get(editUserBlock).contains(SAVE).should('be.disabled');
  elementWithTextExist(editUserBlock, MINIMUM_1_OPTION_REQUIRED_WARNING);
  clickContainingText(menuSubmenuBlock, USERS);
  cy.wait(3000);
  userHeaderShldPrsnt();
};
export const editOrgNameAtEditUser = () => {
  clickOn(editUserOrgDropdown);
  clickOnText(CONNECTEL); // select organization
  clickContainingText(editUserBlock, SAVE);
  elementWithTextExist(editUserOrgProfileBlock, ERROR_MSG);
};
