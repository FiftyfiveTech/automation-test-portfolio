import {
  clickContainingText,
  clickOn,
  clickOnText,
  elementWithTextExist,
  fillText,
  textShouldBePresent
} from '../utils/cypressMethod.util';
import {
  ADD_ITEM,
  ADD_USER,
  ADMIN,
  BACK,
  ERROR_MSG_DUPLICATE_EMAIL,
  ERROR_MSG_DUPLICATE_UNAME,
  MAY_NOT_BE_EMPTY_WARNING,
  MINIMUM_1_OPTION_REQUIRED_WARNING,
  NULL_STRING,
  OK,
  SAVE,
  TEST_ADMIN_PROFILE,
  TEST_ORG,
  USERS
} from '../utils/constants.util';
import {
  addAdminProfileForUser,
  addAdminProfileForUserBug14,
  addAdminProfileForUserBug34,
  navigateToAddAdminProfilePage
} from './addAdminProfilePage';
import {
  deleteAdminProfile,
  navigateToAdminProfilePage
} from './adminProfilePage';
import {
  editAdminProfile,
  navigateToEditAdminProfilePage
} from './editAdminProfilePage';
import {
  clickAdminProfile,
  clickHamburgerMenu,
  clickStaff,
  clickUser,
  hamburgerMenuShldPrsnt,
  menuSubmenuBlock
} from './home.page';
import {
  fillPassword,
  fillUsername,
  redirectForUserLogin,
  submit,
  visit
} from './login.page';
import { emailShldPrsnt, staffShldPrsnt, toolsShldPrsnt } from './menu&Submenu';
import { disableUserModule } from './permissions';
import {
  clearUserAllSearchField,
  clickAddNewUserButton,
  uniqueUI,
  uniqueUI2,
  uniqueUI3,
  userHeaderShldPrsnt,
  validateAddUser
} from './usersPage';

const addUserBlock = 'form[id=\'user_add\']';
const newUserNameField =
  'form[id=\'user_add\']>div:nth-of-type(1)>div>div>div>div>div>div:nth-of-type(1)>div:nth-of-type(2)>div:nth-of-type(1)>div>input';
const newUserEmailField =
  'form[id=\'user_add\']>div:nth-of-type(1)>div>div>div>div>div>div:nth-of-type(3)>div:nth-of-type(2)>div:nth-of-type(1)>div>input';
const newUserFirstNameField =
  'form[id=\'user_add\']>div:nth-of-type(1)>div>div>div>div>div>div:nth-of-type(6)>div:nth-of-type(2)>div:nth-of-type(1)>div>input';
const newUserLastNameField =
  'form[id=\'user_add\']>div:nth-of-type(1)>div>div>div>div>div>div:nth-of-type(7)>div:nth-of-type(2)>div:nth-of-type(1)>div>input';
const newUserPasswordField = 'input[type=\'password\']';
const newUserOrgDropdown =
  '.form-list-wrapper>div>div>div>div>div>div:nth-of-type(2)>div>div>div>div:nth-child(1)>span:nth-child(1)>input';
const newUserRoleDropdown =
  '.form-list-wrapper>div>div>div>div>div:nth-of-type(2)>div:nth-of-type(2)>div>div>div>div>div>span>input[type=\'search\']';
const newUserAdminProfileDropdown =
  '.form-list-wrapper>div>div>div>div>div:nth-of-type(3)>div:nth-of-type(2)>div>div>div>div>div>span>input';
const newUserRole =
  'div[class=\'rc-virtual-list\']>div>div>div>div:nth-of-type(2)[title=\'Admin\']';
export const errorElmnt = 'div[class=\'ant-modal-confirm-body\']>div';
const newUserNameBlock =
  'form[id=\'user_add\']>div:nth-of-type(1)>div>div>div>div>div>div:nth-of-type(1)>div:nth-of-type(2)';
const newUserEmailBlock =
  'form[id=\'user_add\']>div:nth-of-type(1)>div>div>div>div>div>div:nth-of-type(3)>div:nth-of-type(2)';
const newUserFirstNameBlock =
  'form[id=\'user_add\']>div:nth-of-type(1)>div>div>div>div>div>div:nth-of-type(6)>div:nth-of-type(2)';
const newUserLastNameBlock =
  'form[id=\'user_add\']>div:nth-of-type(1)>div>div>div>div>div>div:nth-of-type(7)>div:nth-of-type(2)';
const newUserPasswordBlock =
  'form[id=\'user_add\']>div:nth-of-type(1)>div>div>div>div>div>div:nth-of-type(8)>div:nth-of-type(2)';
const newUserOrgProfileBlock =
  'form[id=\'user_add\']>div:nth-of-type(1)>div>div>div>div>div>div:nth-of-type(14)>div:nth-of-type(2)';
const newUserOrgProfileDeleteIcon =
  'div[class=\'ant-form-list-item ant-form-element-__organizations ant-form-element-__organizations ant-form-list-item-section\']>div:nth-of-type(2)>span>svg';
let testAdminProfile, userName, password;
let userEmail;
export const navigateToAddUsersPage = () => {
  userHeaderShldPrsnt();
  clickAddNewUserButton();
  elementWithTextExist(addUserBlock, ADD_USER);
};
export const addUser = () => {
  textShouldBePresent(ADD_USER);
  cy.fixture('NewUser').then((data) => {
    userName = data.uIdUser + uniqueUI;
    fillText(newUserNameField, userName);
    userEmail = data.uEmailPre + uniqueUI + data.uEmailPost;
    fillText(newUserEmailField, userEmail);
    fillText(newUserFirstNameField, data.newUserFirstName);
    fillText(newUserLastNameField, data.newUserLastName);
    fillText(newUserPasswordField, data.newUserPassword);
  });
  addOrganizationProfileAtAddUserPage();
  cy.get(addUserBlock).contains(SAVE).should('be.enabled');
  clickContainingText(addUserBlock, SAVE);
  cy.wait(3000);
  validateAddUser();
  clearUserAllSearchField();
};
// Add/Select organization profile at the time of add new adn edit user
export const addOrganizationProfileAtAddUserPage = () => {
  clickOnText(ADD_ITEM);
  clickOn(newUserOrgDropdown);
  clickOnText(TEST_ORG); // select organization
  clickOn(newUserRoleDropdown); // click role dropdown
  clickContainingText(newUserRole, ADMIN); // select role
  clickOn(newUserAdminProfileDropdown);
  //   cy.get('.ant-form-element-__organizations_0_adminprofile_id > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .select-wrapper > .ant-select > .ant-select-selector')
  clickOnText(TEST_ADMIN_PROFILE);
};
// Validation for duplicate username at the time of add new user
export const addDuplicateUserName = () => {
  textShouldBePresent(ADD_USER);
  cy.fixture('NewUser').then((data) => {
    fillText(newUserNameField, data.existingUser);
    userEmail = data.uEmailPre + uniqueUI + data.uEmailPost;
    fillText(newUserEmailField, userEmail);
    fillText(newUserFirstNameField, data.newUserFirstName);
    fillText(newUserLastNameField, data.newUserLastName);
    fillText(newUserPasswordField, data.newUserPassword);
  });
  addOrganizationProfileAtAddUserPage();
  clickContainingText(addUserBlock, SAVE);
  elementWithTextExist(errorElmnt, ERROR_MSG_DUPLICATE_UNAME);
};
// Validation for duplicate user email at the time of add new user
export const addDuplicateUserEmail = () => {
  clickContainingText(errorElmnt, OK);
  cy.go(BACK);
  navigateToAddUsersPage();
  cy.fixture('NewUser').then((data) => {
    userName = data.uIdUser + uniqueUI2;
    cy.wait(2000);
    fillText(newUserNameField, userName);
    fillText(newUserEmailField, data.existingEmail);
    fillText(newUserFirstNameField, data.newUserFirstName);
    fillText(newUserLastNameField, data.newUserLastName);
    fillText(newUserPasswordField, data.newUserPassword);
  });
  addOrganizationProfileAtAddUserPage();
  clickContainingText(addUserBlock, SAVE);
  elementWithTextExist(errorElmnt, ERROR_MSG_DUPLICATE_EMAIL);
};
// Validation for empty userName
export const emptyUserName = () => {
  elementWithTextExist(addUserBlock, ADD_USER);
  cy.fixture('NewUser').then((data) => {
    clickOn(newUserNameField);
    userEmail = data.uEmailPre + uniqueUI + data.uEmailPost;
    fillText(newUserEmailField, userEmail);
    fillText(newUserFirstNameField, data.newUserFirstName);
    fillText(newUserLastNameField, data.newUserLastName);
    fillText(newUserPasswordField, data.newUserPassword);
  });
  addOrganizationProfileAtAddUserPage();
  cy.get(addUserBlock).contains(SAVE).should('be.disabled');
  elementWithTextExist(newUserNameBlock, MAY_NOT_BE_EMPTY_WARNING);
};
// Validation for empty email
export const emptyEmailNewUser = () => {
  clickContainingText(menuSubmenuBlock, USERS);
  userHeaderShldPrsnt();
  navigateToAddUsersPage();
  elementWithTextExist(addUserBlock, ADD_USER);
  cy.fixture('NewUser').then((data) => {
    userName = data.uIdUser + uniqueUI;
    fillText(newUserNameField, userName);
    clickOn(newUserEmailField);
    fillText(newUserFirstNameField, data.newUserFirstName);
    fillText(newUserLastNameField, data.newUserLastName);
    fillText(newUserPasswordField, data.newUserPassword);
  });
  addOrganizationProfileAtAddUserPage();
  cy.get(addUserBlock).contains(SAVE).should('be.disabled');
  elementWithTextExist(newUserEmailBlock, MAY_NOT_BE_EMPTY_WARNING);
};
// Validation for empty first name
export const emptyFirstName = () => {
  clickContainingText(menuSubmenuBlock, USERS);
  userHeaderShldPrsnt();
  navigateToAddUsersPage();
  elementWithTextExist(addUserBlock, ADD_USER);
  cy.fixture('NewUser').then((data) => {
    userName = data.uIdUser + uniqueUI;
    fillText(newUserNameField, userName);
    userEmail = data.uEmailPre + uniqueUI + data.uEmailPost;
    fillText(newUserEmailField, userEmail);
    clickOn(newUserFirstNameField);
    fillText(newUserLastNameField, data.newUserLastName);
    fillText(newUserPasswordField, data.newUserPassword);
  });
  addOrganizationProfileAtAddUserPage();
  cy.get(addUserBlock).contains(SAVE).should('be.disabled');
  elementWithTextExist(newUserFirstNameBlock, MAY_NOT_BE_EMPTY_WARNING);
};
// validation for empty last name
export const emptyLastName = () => {
  clickContainingText(menuSubmenuBlock, USERS);
  userHeaderShldPrsnt();
  navigateToAddUsersPage();
  elementWithTextExist(addUserBlock, ADD_USER);
  cy.fixture('NewUser').then((data) => {
    userName = data.uIdUser + uniqueUI;
    fillText(newUserNameField, userName);
    userEmail = data.uEmailPre + uniqueUI + data.uEmailPost;
    fillText(newUserEmailField, userEmail);
    fillText(newUserFirstNameField, data.newUserFirstName);
    clickOn(newUserLastNameField);
    fillText(newUserPasswordField, data.newUserPassword);
  });
  addOrganizationProfileAtAddUserPage();
  cy.get(addUserBlock).contains(SAVE).should('be.disabled');
  elementWithTextExist(newUserLastNameBlock, MAY_NOT_BE_EMPTY_WARNING);
};
// Validation for empty password
export const emptyPassword = () => {
  clickContainingText(menuSubmenuBlock, USERS);
  cy.wait(3000);
  userHeaderShldPrsnt();
  navigateToAddUsersPage();
  elementWithTextExist(addUserBlock, ADD_USER);
  cy.fixture('NewUser').then((data) => {
    userName = data.uIdUser + uniqueUI;
    fillText(newUserNameField, userName);
    userEmail = data.uEmailPre + uniqueUI + data.uEmailPost;
    fillText(newUserEmailField, userEmail);
    fillText(newUserFirstNameField, data.newUserFirstName);
    fillText(newUserLastNameField, data.newUserLastName);
    clickOn(newUserPasswordField);
    clickOnText(SAVE);
  });
  addOrganizationProfileAtAddUserPage();
  cy.get(addUserBlock).contains(SAVE).should('be.disabled');
  elementWithTextExist(newUserPasswordBlock, MAY_NOT_BE_EMPTY_WARNING);
  clickContainingText(menuSubmenuBlock, USERS);
  userHeaderShldPrsnt();
};
// Delete organization profile at add user page
export const deleteOrgPrfileAtAddUser = () => {
  cy.wait(3000);
  textShouldBePresent(ADD_USER);
  cy.fixture('NewUser').then((data) => {
    userName = data.uIdUser + uniqueUI;
    fillText(newUserNameField, userName);
    userEmail = data.uEmailPre + uniqueUI + data.uEmailPost;
    fillText(newUserEmailField, userEmail);
    fillText(newUserFirstNameField, data.newUserFirstName);
    fillText(newUserLastNameField, data.newUserLastName);
    fillText(newUserPasswordField, data.newUserPassword);
  });
  addOrganizationProfileAtAddUserPage();
  cy.get(newUserOrgProfileDeleteIcon).eq(0).click();
  cy.get(addUserBlock).contains(SAVE).should('be.disabled');
  elementWithTextExist(
    newUserOrgProfileBlock,
    MINIMUM_1_OPTION_REQUIRED_WARNING
  );
  clickContainingText(menuSubmenuBlock, USERS);
  userHeaderShldPrsnt();
};
export const addUserWithNullStrUName = () => {
  navigateToAddUsersPage();
  textShouldBePresent(ADD_USER);
  cy.fixture('NewUser').then((data) => {
    fillText(newUserNameField, NULL_STRING);
    userEmail = data.uEmailPre + uniqueUI + data.uEmailPost;
    fillText(newUserEmailField, userEmail);
    fillText(newUserFirstNameField, data.newUserFirstName);
    fillText(newUserLastNameField, data.newUserLastName);
    fillText(newUserPasswordField, data.newUserPassword);
  });
  addOrganizationProfileAtAddUserPage();
  cy.get(addUserBlock).contains(SAVE).should('be.disabled');
  cy.wait(3000);
};
export const deletedApShldNotBeVisibleAtAddUserPage13 = () => {
  //   navigateToAdminProfilePage();
  clickAdminProfile();
  navigateToAddAdminProfilePage();
  addAdminProfileForUser();
  cy.wait(3000);
  redirectForUserLogin(); //
  cy.wait(3000);
  navigateToAdminProfilePage();
  cy.wait(2000);
  navigateToEditAdminProfilePage();
  editAdminProfile();
  cy.wait(3000);
  deleteAdminProfile();
  clickUser();
  navigateToAddUsersPage();
  clickOnText(ADD_ITEM);
  clickOn(newUserOrgDropdown);
  clickOnText(TEST_ORG); // select organization
  clickOn(newUserRoleDropdown); // click role dropdown
  clickContainingText(newUserRole, ADMIN); // select role
  clickOn(newUserAdminProfileDropdown);
  cy.fixture('AdminProfiles').then((data) => {
    testAdminProfile = data.editAdminProfileTitle + uniqueUI;
    cy.contains(testAdminProfile).should('not.exist');
  });
};
export const seprateLoginUserBug14 = () => {
  navigateToAdminProfilePage();
  // clickAdminProfile();
  navigateToAddAdminProfilePage();
  addAdminProfileForUserBug14();
  disableUserModule();
  clickUser();
  navigateToAddUsersPage();
  textShouldBePresent(ADD_USER);
  cy.fixture('NewUser').then((data) => {
    userName = data.uIdUser + uniqueUI3;
    fillText(newUserNameField, userName);
    userEmail = data.uEmailPre + uniqueUI3 + data.uEmailPost;
    fillText(newUserEmailField, userEmail);
    fillText(newUserFirstNameField, data.newUserFirstName);
    fillText(newUserLastNameField, data.newUserLastName);
    fillText(newUserPasswordField, data.newUserPassword);
    clickOnText(ADD_ITEM);
    clickOn(newUserOrgDropdown);
    clickOnText(TEST_ORG); // select organization
    clickOn(newUserRoleDropdown); // click role dropdown
    clickContainingText(newUserRole, ADMIN); // select role
    clickOn(newUserAdminProfileDropdown);
    cy.fixture('AdminProfiles').then((data) => {
      testAdminProfile = data.newAdminProfieTitle + uniqueUI3;
      cy.wait(3000);
      clickOnText(testAdminProfile);
      cy.wait(2000);
    });
    clickContainingText(addUserBlock, SAVE);
    cy.wait(3000);
    // validateAddUser();
    clearUserAllSearchField();
    visit();
    cy.fixture('NewUser').then((data) => {
      userName = data.uIdUser + uniqueUI3;
      fillUsername(userName);
      password = data.newUserPassword;
      fillPassword(password);
    });
  });
  submit();
  hamburgerMenuShldPrsnt();
};
export const seprateLoginUserBug34 = () => {
  navigateToAdminProfilePage();
  // clickAdminProfile();
  navigateToAddAdminProfilePage();
  addAdminProfileForUserBug34();
  // filterAdminProfile();
  clickUser();
  navigateToAddUsersPage();
  textShouldBePresent(ADD_USER);
  cy.fixture('NewUser').then((data) => {
    userName = data.uIdUser + uniqueUI2;
    fillText(newUserNameField, userName);
    userEmail = data.uEmailPre + uniqueUI2 + data.uEmailPost;
    fillText(newUserEmailField, userEmail);
    fillText(newUserFirstNameField, data.newUserFirstName);
    fillText(newUserLastNameField, data.newUserLastName);
    fillText(newUserPasswordField, data.newUserPassword);
    clickOnText(ADD_ITEM);
    clickOn(newUserOrgDropdown);
    clickOnText(TEST_ORG); // select organization
    clickOn(newUserRoleDropdown); // click role dropdown
    clickContainingText(newUserRole, ADMIN); // select role
    clickOn(newUserAdminProfileDropdown);
    cy.fixture('AdminProfiles').then((data) => {
      testAdminProfile = data.newAdminProfieTitle + uniqueUI2;
      cy.wait(3000);
      clickOnText(testAdminProfile);
      cy.wait(2000);
    });
    clickContainingText(addUserBlock, SAVE);
    cy.wait(3000);
    // validateAddUser();
    clearUserAllSearchField();
    visit();
    cy.fixture('NewUser').then((data) => {
      userName = data.uIdUser + uniqueUI2;
      fillUsername(userName);
      password = data.newUserPassword;
      fillPassword(password);
    });
  });
  submit();
  hamburgerMenuShldPrsnt();
  clickHamburgerMenu();
  staffShldPrsnt();
  clickStaff();
  emailShldPrsnt();
  toolsShldPrsnt();
};
