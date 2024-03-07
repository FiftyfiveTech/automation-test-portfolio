import { addAdminProfileForPermissionInMultilevel } from '../pages/addAdminProfilePage';
import { addDisposForMultiLevel } from '../pages/addDispositionsPage';
import { addTagMultilevel } from '../pages/addTagsPage';
import { deleteAdminProfileForPermissionInMultilevel } from '../pages/adminProfilePage';
import { deleteDisposForMUltiLevel } from '../pages/dispositionsPage';
import {
  addOrgProfileForLevel1Multilevel,
  addOrgProfileForLevel2child1Multilevel,
  addOrgProfileForLevel2child2Multilevel,
  addOrgProfileForLevel3Multilevel
} from '../pages/editUserPage';
import { fillPassword, fillUsername, submit, visit } from '../pages/login.page';
import {
  deleteOrgProfileForLevel1Multilevel,
  deleteOrgProfileForLevel2child1Multilevel,
  deleteOrgProfileForLevel2child2Multilevel,
  deleteOrgProfileForLevel3Multilevel,
  verifyOrgLevel1permissions,
  verifyOrgLevel2Child1permissions,
  verifyOrgLevel2Child2permissions,
  verifyOrgLevel3permissions
} from '../pages/multilevel';

import { editApForPermissionInMultilevel } from '../pages/permissions';
import { deleteTagsFromMultiLevel } from '../pages/tagsPage';

describe('Atlas automation for multilevel permissions', function () {
  before(() => {
    visit();
    cy.fixture('LoginCredentials').then((data) => {
      fillUsername(data.LEVEL_1_USERNAME);
      fillPassword(data.validPassword);
    })
    submit();
    //  cy.pause();
  })
  // validation for organization
  it('Add tags', function () {
    addTagMultilevel();
  })
  it('Add disposition', function () {
    addDisposForMultiLevel();
  })

  // test cases for permissions of multilevel
  it('Add and edit admin profile for all the organizations', function () {
    addAdminProfileForPermissionInMultilevel();
    editApForPermissionInMultilevel();
  })

  it.skip('Add org profile for level 1', function () {
    addOrgProfileForLevel1Multilevel();
  })

  it.skip('veryfiy org level 1 data permissions', function () {
    verifyOrgLevel1permissions();
  })
  it.skip('Delete org profile from level 1', function () {
    deleteOrgProfileForLevel1Multilevel();
  })
  it('Add org profile for level 2 child 1', function () {
    addOrgProfileForLevel2child1Multilevel();
  })
  it('veryfiy org level 2 child 1 data permissions', function () {
    verifyOrgLevel2Child1permissions();
  })
  it('Delete org profile from level 2 child 1', function () {
    deleteOrgProfileForLevel2child1Multilevel();
  })
  it('Add org profile for level 2 child 2', function () {
    addOrgProfileForLevel2child2Multilevel();
  })
  it('veryfiy org level 2 child 2 data permissions', function () {
    verifyOrgLevel2Child2permissions();
  })
  it('Delete org profile from level 2 child 2', function () {
    deleteOrgProfileForLevel2child2Multilevel();
  })
  it('Add org profile for level 3', function () {
    addOrgProfileForLevel3Multilevel();
  })
  it('veryfiy org level 3 data permissions', function () {
    verifyOrgLevel3permissions();
  })
  it('Delete org profile from level 3', function () {
    deleteOrgProfileForLevel3Multilevel();
  })

  it('Delete admin profile, tags & dispositions', function () {
    deleteTagsFromMultiLevel();
    deleteDisposForMUltiLevel();
    deleteAdminProfileForPermissionInMultilevel();
  })
});
