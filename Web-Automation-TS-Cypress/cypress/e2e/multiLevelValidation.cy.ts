import { addDisposForMultiLevel } from '../pages/addDispositionsPage';
import { addTagMultilevel } from '../pages/addTagsPage';
import { deleteDisposForMUltiLevel } from '../pages/dispositionsPage';
import { fillPassword, fillUsername, submit, visit } from '../pages/login.page';
import {
  ApLevel1DataPresence,
  apLevel1DataShldNotPrsnt,
  ApLevel2DataPresence,
  apLevel2DataShldNotPrsnt,
  ApLevel3DataPresence,
  apLevel3DataShldNotPrsnt,
  disposLevel1DataPresence,
  disposLevel1DataShldNotPrsnt,
  disposLevel2DataPresence,
  disposLevel2DataShldNotPrsnt,
  disposLevel3DataPresence,
  disposLevel3DataShldNotPrsnt,
  orgLevel1DataPresence,
  orgLevel1DataShldNotPrsnt,
  orgLevel2DataPresence,
  orgLevel2DataShldNotPrsnt,
  orgLevel3DataPresence,
  orgLevel3DataShldNotPrsnt,
  tagsLevel1DataPresence,
  tagsLevel1DataShldNotPrsnt,
  tagsLevel2DataPresence,
  tagsLevel2DataShldNotPrsnt,
  tagsLevel3DataPresence,
  tagsLevel3DataShldNotPrsnt,
  userLevel1DataPresence,
  userLevel1DataShldNotPrsnt,
  userLevel2DataPresence,
  userLevel2DataShldNotPrsnt,
  userLevel3DataPresence,
  userLevel3DataShldNotPrsnt
} from '../pages/multilevel';
import { deleteTagsFromMultiLevel } from '../pages/tagsPage';

describe('Atlas automation for multilevl validation', function () {
  before(() => {
    visit();
    cy.fixture('LoginCredentials').then((data) => {
      fillUsername(data.LEVEL_1_USERNAME);
      fillPassword(data.validPassword);
    });
    submit();
    //  cy.pause();
  });
  // validation for organization
  it('Add tags ', function () {
    addTagMultilevel();
  });
  it('Add dispositions ', function () {
    addDisposForMultiLevel();
  });
  it('(level-1)-Verify that admin of an organization is only able to see its organization data and its sub organization data ', function () {
    //  navigateToOrganizationPage();
    orgLevel1DataPresence();
  });
  it('(level-2, child-1)-Verify that admin of an organization is only able to see its organization data and its sub organization data', function () {
    orgLevel2DataPresence();
  });
  it('(level-3)-Verify that admin of an organization is only able to see its organization data and its sub organization data', function () {
    orgLevel3DataPresence();
  });
  // validation for admin profiles
  it('(level-1)-Verify that admin of an organization is only able to see its admin profiles data and its sub admin profiles data ', function () {
    ApLevel1DataPresence();
  });
  it('(level-2, child-1)-Verify that admin of an organization is only able to see its organization admin profile data and its sub organization admin profile data', function () {
    ApLevel2DataPresence();
  });
  it('(level-3)-Verify that admin of an organization is only able to see its organization admin profile data and its sub organization admin profile data', function () {
    ApLevel3DataPresence();
  });
  // validation for users:
  it('(level-1)-Verify that admin of an organization is  able to see its all users  data and its sub organizations users data ', function () {
    userLevel1DataPresence();
  });
  it('(level-2, child-1)-Verify that admin of an organization is  able to see its all users  data and its sub organizations users data ', function () {
    userLevel2DataPresence();
  });
  it('(level-3)-Verify that admin of an organization is  able to see its all users  data and its sub organizations users data ', function () {
    userLevel3DataPresence();
  });
  // test cases for tags
  it('(level-1)-Verify that admin of an organization is  able to see its all tags  data and its sub organizations tags data ', function () {
    tagsLevel1DataPresence();
  });
  it('(level-2, child-1)-Verify that admin of an organization is  able to see its all tags  data and its sub organizations tags data ', function () {
    tagsLevel2DataPresence();
  });
  it('(level-3)-Verify that admin of an organization is  able to see its all tags  data and its sub organizations tags data ', function () {
    tagsLevel3DataPresence();
  });
  // test cases for dispositions
  it('(level-1)-Verify that admin of an organization is  able to see its all dispositions  data and its sub organizations dispositions data ', function () {
    disposLevel1DataPresence();
  });
  it('(level-2, child-1)-Verify that admin of an organization is  able to see its all dispositions  data and its sub organizations dispositions data ', function () {
    disposLevel2DataPresence();
  });
  it('(level-3)-Verify that admin of an organization is  able to see its all dispositions  data and its sub organizations dispositions data ', function () {
    disposLevel3DataPresence();
  });
  // Parent data should not present **********************************************************************
  it('(level-1-org)-Verify that admin of an organization is not able to see its parent organization data ', function () {
    //  navigateToOrganizationPage();
    orgLevel1DataShldNotPrsnt();
  });
  it('(level-2, child-1 - org)-Verify that admin of an organization is not able to see its parent organization data', function () {
    orgLevel2DataShldNotPrsnt();
  });
  it('(level-3-org)-Verify that admin of an organization is not able to see its parent organization data', function () {
    orgLevel3DataShldNotPrsnt();
  });
  // validation for admin profiles
  it('(level-1-AP)-Verify that admin of an organization is not able to see its parent organization data', function () {
    apLevel1DataShldNotPrsnt();
  });
  it('(level-2, child-1-AP)-Verify that admin of an organization is not able to see its parent organization data', function () {
    apLevel2DataShldNotPrsnt();
  });
  it('(level-3-AP)-Verify that admin of an organization is not able to see its parent organization data', function () {
    apLevel3DataShldNotPrsnt();
  });
  // validation for users:
  it('(level-1-Users)-Verify that admin of an organization is not able to see its parent organization data ', function () {
    userLevel1DataShldNotPrsnt();
  });
  it('(level-2, child-1-User)-Verify that admin of an organization is not able to see its parent organization data', function () {
    userLevel2DataShldNotPrsnt();
  });
  it('(level-3-User)-Verify that admin of an organization is not able to see its parent organization data ', function () {
    userLevel3DataShldNotPrsnt();
  });
  // test cases for tags
  it('(level-1-Tags)-Verify that admin of an organization is not able to see its parent organization data ', function () {
    tagsLevel1DataShldNotPrsnt();
  });
  it('(level-2, child-1-Tags)-Verify that admin of an organization is not able to see its parent organization data ', function () {
    tagsLevel2DataShldNotPrsnt();
  });
  it('(level-3--Tags)-Verify that admin of an organization is not able to see its parent organization data ', function () {
    tagsLevel3DataShldNotPrsnt();
  });
  it('(level-1-Dispos)-Verify that admin of an organization is not able to see its parent organization data ', function () {
    disposLevel1DataShldNotPrsnt();
  });
  it('(level-2, child-1-Dispos)-Verify that admin of an organization is not able to see its parent organization data ', function () {
    disposLevel2DataShldNotPrsnt();
  });
  it('(level-3)-Verify that admin of an organization is not able to see its parent organization data ', function () {
    disposLevel3DataShldNotPrsnt();
  });
  it('Delete admin profile, tags & dispositions', function () {
    // deleteAdminProfileForPermissionInMultilevel();
    deleteTagsFromMultiLevel();
    deleteDisposForMUltiLevel();
  });
});
