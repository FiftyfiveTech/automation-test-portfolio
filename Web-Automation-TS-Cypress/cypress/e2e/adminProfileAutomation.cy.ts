import {
  addAdminProfile,
  emptyOrgAtAddAP,
  emptyTitleAtAddAp,
  navigateToAddAdminProfilePage
} from '../pages/addAdminProfilePage';
import {
  adminProfileDisplayDeleted,
  adminProfileHeaderShldPrsnt,
  deleteAdminProfile,
  navigateToAdminProfilePage,
  paginationOnAdminProfilePage,
  searchApById,
  searchApByTitle,
  sortApByID,
  sortApByTime,
  sortApBytitle,
  validateDeleteAdminProfile
} from '../pages/adminProfilePage';
import {
  editAdminProfile,
  navigateToEditAdminProfilePage
} from '../pages/editAdminProfilePage';
import {
  fillPassword,
  fillUsername,
  redirectForUserLogin,
  submit,
  visit
} from '../pages/login.page';
import {
  adminProfilePermission,
  deleteAllItemFromUserFilter,
  deleteSingleItemFromUserFilter,
  dispositionPermission,
  organizationPermission,
  selecteItemFromApFilter,
  selectItemFromUserFilter,
  tagPermission,
  userPermission
} from '../pages/permissions';

describe('Atlas automation of admin profile', function () {
  before(() => {
    visit();
    cy.fixture('LoginCredentials').then((data) => {
      fillUsername(data.validUserAdmin);
      fillPassword(data.validPassword);
    });
    submit();
  });
  it('Add admin profile', function () {
    navigateToAdminProfilePage();
    navigateToAddAdminProfilePage();
    addAdminProfile();
  });
  it('Edit admin profile', function () {
    redirectForUserLogin();
    navigateToAdminProfilePage();
    navigateToEditAdminProfilePage();
    editAdminProfile();
    adminProfileHeaderShldPrsnt();
  });
  it('Sort admin profile using id', function () {
    sortApByID();
  });
  /*    it('Sort admin profile using organization',function(){
        sortApByOrga();
   // login as a super admin to sort the admin profile using their organization
  }) */
  it('Sort admin profile using title', function () {
    sortApBytitle();
  });
  it('Sort admin profile using time', function () {
    sortApByTime();
  });
  it('Search admin profile using title', function () {
    searchApByTitle();
  });
  it('Search admin profile using ID', function () {
    searchApById();
  });
  // only for super admin
  /* it('Search admin profile using organization',function(){
     searchApByOrg();
   }) */
  it('Add new admin profile with empty organization', function () {
    navigateToAddAdminProfilePage();
    emptyOrgAtAddAP();
  });
  it('Add new admin profile with empty title', function () {
    emptyTitleAtAddAp();
  });
  it('Delete admin profile', function () {
    deleteAdminProfile();
    adminProfileHeaderShldPrsnt();
    validateDeleteAdminProfile();
  });
  it('Display deleted admin profile', function () {
    adminProfileDisplayDeleted();
  });
  it('User permissons', function () {
    userPermission();
  });
  it('Disposition permission', function () {
    dispositionPermission();
  });
  it('Tags permission', function () {
    tagPermission();
  });
  it('Organization permission', function () {
    organizationPermission();
  });
  it('Admin profile permission', function () {
    adminProfilePermission();
  });
  it('Pagination on admin profile page', function () {
    paginationOnAdminProfilePage();
  });
  it('Select user from user filter', function () {
    selectItemFromUserFilter();
  });
  it('Delete single user from user filter', function () {
    deleteSingleItemFromUserFilter();
  });
  it('Delete all item from user filter', function () {
    deleteAllItemFromUserFilter();
  });
  it('Select filter for admin profile and verify', function () {
    selecteItemFromApFilter();
  });
});
