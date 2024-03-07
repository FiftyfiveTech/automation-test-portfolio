import { deletedApEditDelIconBug31 } from '../pages/adminProfilePage';
import {
  fillPassword,
  fillUsername,
  redirectForSuperAdminLogin,
  redirectForUserLogin,
  submit,
  visit
} from '../pages/login.page';
import {
  AdminUserDelIconShldNotaprsntBug08,
  deletedUserEditDelIconBug31,
  deleteUser,
  navigateToUserPage,
  searchUserByIdBug28
} from '../pages/usersPage';
import {
  deleteDisposition,
  editDisposParentBug42,
  navigateToDispositionPage,
  searchDisposIdForBug43,
  validateAddDispos,
  validateDeleteDispo,
  validateEditDispos
} from '../pages/dispositionsPage';
import {
  addUser,
  deletedApShldNotBeVisibleAtAddUserPage13,
  navigateToAddUsersPage
} from '../pages/addUserPage';
import { orgFilterBug23 } from '../pages/permissions';
import {
  addDispositionForBug,
  navigateToAddDisposPage
} from '../pages/addDispositionsPage';
import {
  editDisposition,
  navigateToEditDispositionPage
} from '../pages/editDispositionsPage';

describe('Atlas automation for bugs', function () {
  before(() => {
    visit();
    cy.fixture('LoginCredentials').then((data) => {
      fillUsername(data.validUserAdmin);
      fillPassword(data.validPassword);
    });
    submit();
  });
  it('Search user by id bug 28', function () {
    // only searched id should appear
    navigateToUserPage();
    navigateToAddUsersPage();
    addUser();
    searchUserByIdBug28();
  });
  it('Edit delete icon should not present for deleted items at users page, bug-31', function () {
    // edit and delete icon should not exist for deleted users
    deleteUser();
    deletedUserEditDelIconBug31();
  });
  it('Admin should not be able to delete him/her self bug 08', function () {
    AdminUserDelIconShldNotaprsntBug08();
  });
  it('Delete admin profile should not be exist in admin profile dropdown at users page bug 13', function () {
    deletedApShldNotBeVisibleAtAddUserPage13();
  });
  it('Edit and delete icon should not be present for deleted ap bug 31', function () {
    deletedApEditDelIconBug31();
  });
  it('Id search in dispositions TLS-43', function () {
    navigateToDispositionPage();
    navigateToAddDisposPage();
    addDispositionForBug();
    redirectForUserLogin();
    navigateToDispositionPage();
    validateAddDispos();
    navigateToEditDispositionPage();
    editDisposition();
    validateEditDispos();
    deleteDisposition();
    validateDeleteDispo();
    searchDisposIdForBug43();
  });
  it('editDisposParentBug_TLS-42', function () {
    editDisposParentBug42();
  });
  it.skip('All organization name is visible at organization filter in edit admin profile page bug 23', function () {
    redirectForSuperAdminLogin();
    orgFilterBug23();
  });
});
