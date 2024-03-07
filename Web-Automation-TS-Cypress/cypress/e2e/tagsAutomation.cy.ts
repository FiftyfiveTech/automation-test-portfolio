import { addTags, navigateToAddNewTagsPage } from '../pages/addTagsPage';
import { editTags, navigateToEditTagsPage } from '../pages/editTagsPage';
import { fillPassword, fillUsername, submit, visit } from '../pages/login.page';
import {
  deleteTags,
  DisplayDeletedTags,
  navigateToTagsPage,
  paginationOnTagsPage,
  searchTagsByGlobal,
  searchTagsById,
  searchTagsByTitle,
  sortTagsByID,
  sortTagsByTime,
  sortTagsBytitle,
  validateAddTags,
  validateEditTags
} from '../pages/tagsPage';

describe('Atlas automation for tags', function () {
  before(() => {
    visit();
    cy.fixture('LoginCredentials').then((data) => {
      fillUsername(data.validUserAdmin);
      fillPassword(data.validPassword);
    });
    submit();
  });
  it('Add new tags', function () {
    navigateToTagsPage();
    navigateToAddNewTagsPage();
    addTags();
    validateAddTags();
  });
  it('Sort tags using id', function () {
    sortTagsByID();
  });
  // Organization sorting only be possible when you are logged in as super admin
  /* it.only('Sort tags using organizations',function(){
         navigateToTagsPage();
         sortTagsByOrg();
     }) */
  it('Sort tags using title', function () {
    sortTagsBytitle();
  });
  it('Sort tags using time', function () {
    sortTagsByTime();
  });
  it('Edit tags', function () {
    navigateToEditTagsPage();
    editTags();
    validateEditTags();
  });
  it('Search tags using id', function () {
    searchTagsById();
  });
  // this test case work only for super admin
  /* it('Search tags usnig organization',function(){
         searchTagsByOrg();
     }) */
  it('Search tags using title', function () {
    searchTagsByTitle();
  });
  it.skip('Search tags using global', function () {
    searchTagsByGlobal();
  });
  it('Delete tags', function () {
    deleteTags();
  });
  it('display deleted tags', function () {
    DisplayDeletedTags();
  });
  it('Pagination on tags page', function () {
    paginationOnTagsPage();
  });
});
