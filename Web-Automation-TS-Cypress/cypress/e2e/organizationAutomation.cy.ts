import {
  navigateToOrganizationPage,
  paginationOnOrganizationPage,
  sortOrgByID,
  sortOrgByTime,
  sortOrgBytitle
} from '../pages/organizationPage';
import { fillPassword, fillUsername, submit, visit } from '../pages/login.page';
import {
  editOrganization,
  navigateToEditOrgPage
} from '../pages/editOrganization';

describe('Atlas automation of organization', function () {
  before(() => {
    visit();
    cy.fixture('LoginCredentials').then((data) => {
      fillUsername(data.validUserAdmin);
      fillPassword(data.validPassword);
    });
    submit();
    // cy.pause();
  });
  /*  it('Add new organiztion', function () {
        navigateToOrganizationPage();
        addOrganization();
        })  // run this block of code when you are logged in
         as a super admin and also uncomment the cy.pause() command mentioned above. */
  /* it('Add organization with null string title',function(){
        addOrgWithNullStrTitle();
    }) // run this block of code when you are logged in
       as a super admin and also uncomment the cy.pause() command mentioned above. */
  it('Edit organization', function () {
    navigateToOrganizationPage();
    navigateToEditOrgPage();
    editOrganization();
  });
  // it.skip('Organization page display deleted', function () {
  //     orgDisplayDeleted();
  // })
  // it.skip('Search organization using ID', function () {
  //     searchOrgById();
  // })
  // it.skip('Search organization using title', function () {
  //     seachOrgByTitle();
  // })
  it('Sort organization using Id', function () {
    sortOrgByID();
  });
  it('Sort organization using title', function () {
    sortOrgBytitle();
  });
  it('Sort organization using time', function () {
    sortOrgByTime();
  });
  it('Pagination on organization page', function () {
    paginationOnOrganizationPage();
  });
});
