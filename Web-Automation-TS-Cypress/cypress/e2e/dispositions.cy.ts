import {
  addDisposition,
  navigateToAddDisposPage
} from '../pages/addDispositionsPage';
import {
  deleteDisposition,
  displayDeletedDispos,
  navigateToDispositionPage,
  paginationOnDispositionPage,
  searchDisposByGlobal,
  searchDisposById,
  searchDisposByTitle,
  sortDisposByID,
  sortDisposByTime,
  sortDisposBytitle,
  validateAddDispos,
  validateDeleteDispo,
  validateEditDispos
} from '../pages/dispositionsPage';
import {
  editDisposition,
  navigateToEditDispositionPage
} from '../pages/editDispositionsPage';
import { fillPassword, fillUsername, submit, visit } from '../pages/login.page';

describe('Atlas automation for disposition', function () {
  before(() => {
    visit();
    cy.fixture('LoginCredentials').then((data) => {
      fillUsername(data.validUserAdmin);
      fillPassword(data.validPassword);
    });
    submit();
  });
  it('Add new disposition', function () {
    navigateToDispositionPage();
    navigateToAddDisposPage();
    addDisposition();
    validateAddDispos();
  });
  it('Edit disposition', function () {
    navigateToEditDispositionPage();
    editDisposition();
    validateEditDispos();
  });
  it('Search disposition using ID', function () {
    searchDisposById();
  });
  it('Search disposition by title', function () {
    searchDisposByTitle();
  });
  it.skip('search disposition by global', function () {
    searchDisposByGlobal();
  });
  it('Sort disposition using Id', function () {
    sortDisposByID();
  });
  it('Sort disposition using title', function () {
    sortDisposBytitle();
  });
  it('Sort dissition using time', function () {
    sortDisposByTime();
  });
  it('Pagination on disposition page', function () {
    paginationOnDispositionPage();
  });
  it('Delete disposition', function () {
    deleteDisposition();
    validateDeleteDispo();
  });
  it('Display deleted disposition', function () {
    displayDeletedDispos();
  });
});
