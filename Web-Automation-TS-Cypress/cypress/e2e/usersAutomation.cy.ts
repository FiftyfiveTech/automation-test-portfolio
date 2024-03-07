import {
  addDuplicateUserEmail,
  addDuplicateUserName,
  addUser,
  addUserWithNullStrUName,
  deleteOrgPrfileAtAddUser,
  emptyEmailNewUser,
  emptyFirstName,
  emptyLastName,
  emptyPassword,
  emptyUserName,
  navigateToAddUsersPage,
  seprateLoginUserBug14,
  seprateLoginUserBug34
} from '../pages/addUserPage';
import {
  deleteOrgProfileAtEditUser,
  editUser,
  navigateToEditUserPage
} from '../pages/editUserPage';
import {
  fillPassword,
  fillUsername,
  redirectForUserLogin,
  submit,
  visit
} from '../pages/login.page';
import {
  deleteUser,
  navigateToUserPage,
  paginationOnUserPage,
  searchUserByFirstName,
  searchUserByID,
  searchUserByLastName,
  searchUserByUsername,
  sortUserByFirstName,
  sortUserByID,
  sortUserByLastName,
  sortUserByOrga,
  sortUserByUserName,
  userDisplayDeleted,
  userHeaderShldPrsnt,
  validateDeletedUser,
  validateEditedUser,
  verifyParentUser,
  verifyResetFilter
} from '../pages/usersPage';

describe('Atlas automation of users ', function () {
  before(() => {
    visit();
    cy.fixture('LoginCredentials').then((data) => {
      fillUsername(data.validUserAdmin);
      fillPassword(data.validPassword);
    });
    submit();
  });
  it('Parent organization data should not be visible  bug-5', function () {
    verifyParentUser();
  });
  it('Add new user', function () {
    // add new user
    navigateToAddUsersPage();
    addUser();
  });
  /* // only when one or more organization is listed in this organization or logged in as super admin
    it('change only organization at edit user page',function(){
        navigateToEditUserPage();
        editOrgNameAtEditUser();
    }) */
  it('Delete organization proile at edit user page', function () {
    navigateToEditUserPage();
    deleteOrgProfileAtEditUser();
  });
  it('Edit user', function () {
    navigateToEditUserPage();
    editUser();
    userHeaderShldPrsnt();
    validateEditedUser();
  });
  it('Add new user with duplicate userName', function () {
    navigateToAddUsersPage();
    addDuplicateUserName();
  });
  it('Add new user with duplicate email', function () {
    addDuplicateUserEmail();
  });
  it('Search user using ID', function () {
    searchUserByID();
  });
  it('Search user using username', function () {
    searchUserByUsername();
  });
  it('Search user using first name', function () {
    searchUserByFirstName();
  });
  it('Search user using last name', function () {
    searchUserByLastName();
  });
  it('Reset filter at users page - TLS-TC-137 ', function () {
    verifyResetFilter();
  });
  it('Add new user with empty userName', function () {
    navigateToAddUsersPage();
    emptyUserName();
  });
  it('Add new user with empty email', function () {
    emptyEmailNewUser();
  });
  it('Add new user with empty first name', function () {
    emptyFirstName();
  });
  it('Add new user with empty last name', function () {
    emptyLastName();
  });
  it('Add new user with empty password', function () {
    emptyPassword();
  });
  it('Delete organization profile at time of adding new user', function () {
    navigateToAddUsersPage();
    deleteOrgPrfileAtAddUser();
  });
  it('Add user with null string user name', function () {
    addUserWithNullStrUName();
  });
  it('Sort user using id', function () {
    sortUserByID();
  });
  it('Sort user by user name', function () {
    navigateToUserPage();
    sortUserByUserName();
  });
  it.skip('Sort user using organization', function () {
    sortUserByOrga();
  });
  it('Sort user using first name', function () {
    sortUserByFirstName();
  });
  it('Sort user using last name', function () {
    sortUserByLastName();
  });
  it('Pagination on user page', function () {
    paginationOnUserPage();
  });
  it('Delete user', function () {
    deleteUser();
    validateDeletedUser();
  });
  it('User page display deleted', function () {
    userDisplayDeleted();
  });
  it('Only admin profiles page is visible after applying filter on admin profile module bug_34', function () {
    redirectForUserLogin();
    seprateLoginUserBug34();
  });
  it('Admin is not able to login if at admin profiles page allow radio button is disabled for users bug_14', function () {
    redirectForUserLogin();
    seprateLoginUserBug14();
  });
});
