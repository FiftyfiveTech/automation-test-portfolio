import {
  adminProfileHeaderShldPrsnt,
  clickEditAdminProfileForPOC,
  navigateToAdminProfilePage
} from '../pages/adminProfilePage';
import {
  deleIconShouldNotPrsnt,
  deleteIconShouldPrsnt
} from '../pages/dispositionsPage';
import {
  clickSaveButtonEditAdminProfile,
  disableDeleteForDisposition,
  editAdminProfileHeaderShldPrsnt,
  enableDeleteforDisposition
} from '../pages/editAdminProfilePage';
import {
  clickAdminProfile,
  clickDisposition,
  clickTools
} from '../pages/home.page';
import { fillPassword, fillUsername, submit } from '../pages/login.page';

describe('Verify enabling and disabling delete permission for dispositon', function () {
  before(() => {
    cy.visit('/');
    cy.fixture('LoginCredentials').then((data) => {
      fillUsername(data.validUserAdmin);
      fillPassword(data.validPassword);
    });
    submit();
  });

  it('Disable delete permission for dispostions', function () {
    navigateToAdminProfilePage();
    clickEditAdminProfileForPOC();
    editAdminProfileHeaderShldPrsnt();
    disableDeleteForDisposition();
    clickSaveButtonEditAdminProfile();
    clickTools();
    clickDisposition();
    deleIconShouldNotPrsnt();
  });
  it('Enable delete permission for dispositions', function () {
    clickAdminProfile();
    adminProfileHeaderShldPrsnt();
    clickEditAdminProfileForPOC();
    editAdminProfileHeaderShldPrsnt();
    enableDeleteforDisposition();
    clickSaveButtonEditAdminProfile();
    clickDisposition();
    deleteIconShouldPrsnt();
  });
});
