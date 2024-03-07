import {
  clickContainingText,
  clickFilterButton,
  clickOn,
  clickOnText,
  elementWithTextExist,
  fillText
} from '../utils/cypressMethod.util';
import {
  ADD_ADMIN_PROFILE,
  ADMIN_PROFILE,
  ADMIN_PROFILES,
  MAY_NOT_BE_EMPTY_WARNING,
  ORG_LEVEL_1,
  ORG_LEVEL_3,
  ORG_LEVEL_2_CHILD_1,
  ORG_LEVEL_2_CHILD_2,
  PERMISSIONS,
  SAVE,
  TEST_ADMIN_PROFILE,
  TEST_ORG
} from '../utils/constants.util';
import {
  adminProfileHeaderShldPrsnt,
  clickAddNewAdminProfileButton,
  navigateToAdminProfilePage
} from './adminProfilePage';
import { menuSubmenuBlock } from './home.page';
import { fillPassword, fillUsername, submit, visit } from './login.page';
import { uniqueUI, uniqueUI2, uniqueUI3, uniqueUI4 } from './usersPage';

const adminProfilePermissionRow =
  'div[class=\'form-list-wrapper\']>div>div>div>div';
const allowFilterButton = 'button[role=\'switch\']';
const filterTextField =
  'div[class=\'ant-select-selection-overflow\']>div>div>input[type=\'search\']';
const filterList = 'div[class=\'rc-virtual-list\']>div';
const filterSelectedList = 'div[class=\'ant-select-selection-overflow\']';
const addAdminPorfileBlock = 'form[id=\'adminprofile_add\']';
const newAdminProfileOrgDropdown =
  'form[id=\'adminprofile_add\']>div>div>div>div>div>div>div>div:nth-of-type(2)>div>div>div>div>span>input';
const newAdminProfileTitleField =
  'form[id=\'adminprofile_add\']>div>div>div>div>div>div>div:nth-of-type(2)>div:nth-of-type(2)>div>div>input';
const newAdminProfileTileBlock =
  'form[id=\'adminprofile_add\']>div>div>div>div>div>div>div:nth-of-type(2)>div:nth-of-type(2)';

let testAdminProfile;
let testData;

export const navigateToAddAdminProfilePage = () => {
  adminProfileHeaderShldPrsnt();
  clickAddNewAdminProfileButton();
  elementWithTextExist(addAdminPorfileBlock, ADD_ADMIN_PROFILE);
};
export const addAdminProfile = () => {
  elementWithTextExist(addAdminPorfileBlock, ADD_ADMIN_PROFILE);
  clickOn(newAdminProfileOrgDropdown);
  // select organization from list
  clickOnText(TEST_ORG);
  cy.fixture('AdminProfiles').then((data) => {
    testAdminProfile = data.newAdminProfieTitle + uniqueUI;
    fillText(newAdminProfileTitleField, testAdminProfile);
  });
  clickOnText(PERMISSIONS);
  clickContainingText(addAdminPorfileBlock, SAVE);
  cy.reload();
};
export const addAdminProfileForUser = () => {
  elementWithTextExist(addAdminPorfileBlock, ADD_ADMIN_PROFILE);
  clickOn(newAdminProfileOrgDropdown);
  // select organization from list
  clickOnText(TEST_ORG);
  cy.fixture('AdminProfiles').then((data) => {
    testAdminProfile = data.newAdminProfieTitle + uniqueUI;
    fillText(newAdminProfileTitleField, testAdminProfile);
  });
  clickOnText(PERMISSIONS);
  clickContainingText(addAdminPorfileBlock, SAVE);
  cy.wait(2000);
  cy.reload();
  // navigateToAdminProfilePage();
  // validateAddAdminProfile();
};
export const addAdminProfileForUserBug14 = () => {
  elementWithTextExist(addAdminPorfileBlock, ADD_ADMIN_PROFILE);
  clickOn(newAdminProfileOrgDropdown);
  // select organization from list
  clickOnText(TEST_ORG);
  cy.fixture('AdminProfiles').then((data) => {
    testAdminProfile = data.newAdminProfieTitle + uniqueUI3;
    fillText(newAdminProfileTitleField, testAdminProfile);
  });
  clickOnText(PERMISSIONS);
  clickContainingText(addAdminPorfileBlock, SAVE);
  // cy.reload();
  navigateToAdminProfilePage();
  // validateAddAdminProfile();
};
export const addAdminProfileForUserBug34 = () => {
  elementWithTextExist(addAdminPorfileBlock, ADD_ADMIN_PROFILE);
  clickOn(newAdminProfileOrgDropdown);
  // select organization from list
  clickOnText(TEST_ORG);
  cy.fixture('AdminProfiles').then((data) => {
    testAdminProfile = data.newAdminProfieTitle + uniqueUI2;
    fillText(newAdminProfileTitleField, testAdminProfile);
  });
  clickFilterButton(
    adminProfilePermissionRow,
    ADMIN_PROFILE,
    allowFilterButton
  );
  testData = TEST_ADMIN_PROFILE;
  cy.get(adminProfilePermissionRow)
    .filter(`:contains(${ADMIN_PROFILE})`)
    .within(() => {
      cy.get(filterTextField).eq(0).click({ force: true });
    });
  cy.get(filterList).contains(testData).click({ force: true });
  cy.get(adminProfilePermissionRow)
    .filter(`:contains(${ADMIN_PROFILE})`)
    .within(() => {
      cy.get(filterSelectedList).eq(0).contains(testData).should('exist');
    });
  clickOnText(PERMISSIONS);
  clickContainingText(addAdminPorfileBlock, SAVE);
  // cy.reload();
  navigateToAdminProfilePage();
  // validateAddAdminProfile();
};
export const emptyOrgAtAddAP = () => {
  elementWithTextExist(addAdminPorfileBlock, ADD_ADMIN_PROFILE);
  cy.fixture('AdminProfiles').then((data) => {
    testAdminProfile = data.newAdminProfieTitle + uniqueUI;
    fillText(newAdminProfileTitleField, testAdminProfile);
  });
  clickOnText(PERMISSIONS);
  cy.get(addAdminPorfileBlock).contains(SAVE).should('be.disabled');
  clickContainingText(menuSubmenuBlock, ADMIN_PROFILES);
  adminProfileHeaderShldPrsnt();
};
export const emptyTitleAtAddAp = () => {
  navigateToAddAdminProfilePage();
  elementWithTextExist(addAdminPorfileBlock, ADD_ADMIN_PROFILE);
  clickOn(newAdminProfileOrgDropdown);
  clickOnText(TEST_ORG);
  cy.fixture('AdminProfiles').then((data) => {
    clickOn(newAdminProfileTitleField);
  });
  clickOnText(PERMISSIONS);
  cy.get(addAdminPorfileBlock).contains(SAVE).should('be.disabled');
  elementWithTextExist(newAdminProfileTileBlock, MAY_NOT_BE_EMPTY_WARNING);
  clickContainingText(menuSubmenuBlock, ADMIN_PROFILES);
  adminProfileHeaderShldPrsnt();
};
export const addAdminProfileForPermissionInMultilevel = () => {
  visit();
  cy.fixture('LoginCredentials').then((data) => {
    fillUsername(data.LEVEL_1_USERNAME);
    fillPassword(data.validPassword);
  });
  submit();
  cy.wait(6000);
  navigateToAdminProfilePage();
  //  for level 1
  navigateToAddAdminProfilePage();
  elementWithTextExist(addAdminPorfileBlock, ADD_ADMIN_PROFILE);
  clickOn(newAdminProfileOrgDropdown);
  // select organization from list
  clickOnText(ORG_LEVEL_1);
  cy.fixture('AdminProfiles').then((data) => {
    testAdminProfile = data.newAdminProfieTitle + uniqueUI;
    fillText(newAdminProfileTitleField, testAdminProfile);
  });
  clickOnText(PERMISSIONS);
  clickContainingText(addAdminPorfileBlock, SAVE);
  cy.reload();
  // hamburgerMenuShldPrsnt();
  // adminProfileHeaderShldPrsnt();
  // for level 2 child 1
  navigateToAdminProfilePage();
  navigateToAddAdminProfilePage();
  elementWithTextExist(addAdminPorfileBlock, ADD_ADMIN_PROFILE);
  clickOn(newAdminProfileOrgDropdown);
  // select organization from list
  clickOnText(ORG_LEVEL_2_CHILD_1);
  cy.fixture('AdminProfiles').then((data) => {
    testAdminProfile = data.newAdminProfieTitle + uniqueUI2;
    fillText(newAdminProfileTitleField, testAdminProfile);
  });
  clickOnText(PERMISSIONS);
  clickContainingText(addAdminPorfileBlock, SAVE);
  cy.reload();
  // for level 2 child 2
  navigateToAdminProfilePage();
  navigateToAddAdminProfilePage();
  elementWithTextExist(addAdminPorfileBlock, ADD_ADMIN_PROFILE);
  clickOn(newAdminProfileOrgDropdown);
  // select organization from list
  clickOnText(ORG_LEVEL_2_CHILD_2);
  cy.fixture('AdminProfiles').then((data) => {
    testAdminProfile = data.newAdminProfieTitle + uniqueUI3;
    fillText(newAdminProfileTitleField, testAdminProfile);
  });
  clickOnText(PERMISSIONS);
  clickContainingText(addAdminPorfileBlock, SAVE);
  cy.reload();
  // for level 3
  navigateToAdminProfilePage();
  navigateToAddAdminProfilePage();
  elementWithTextExist(addAdminPorfileBlock, ADD_ADMIN_PROFILE);
  clickOn(newAdminProfileOrgDropdown);
  // select organization from list
  clickOnText(ORG_LEVEL_3);
  cy.fixture('AdminProfiles').then((data) => {
    testAdminProfile = data.newAdminProfieTitle + uniqueUI4;
    fillText(newAdminProfileTitleField, testAdminProfile);
  });
  clickOnText(PERMISSIONS);
  clickContainingText(addAdminPorfileBlock, SAVE);
  cy.reload();
};
