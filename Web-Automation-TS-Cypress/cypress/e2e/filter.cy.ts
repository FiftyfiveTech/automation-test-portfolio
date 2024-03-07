import {
  DISPOSITION,
  DISPOSITIONS,
  ORGANIZATION
} from '../utils/constants.util';
import { addDisposForMultiLevel } from '../pages/addDispositionsPage';
import { addTagMultilevel } from '../pages/addTagsPage';
import { deleteDisposForMUltiLevel } from '../pages/dispositionsPage';
import { fillPassword, fillUsername, submit, visit } from '../pages/login.page';
import {
  veifyFilterDataForLevel1,
  veifyFilterDataForLevel2child1,
  verifyFilterDataWithDisabledAllowBtn
} from '../pages/multilevel';
import {
  addDeletedModule,
  addDisposModuleAndDisallow,
  addMultipleModuleForFilter,
  clickAlloWButtonWithFilter,
  deleteModuleFromPermission,
  disableFilterButtonAtLevel1,
  disableFilterButtonAtLevel2child1,
  secondDisposFilterWithDisallow,
  secondTagsFilterWithDisallow,
  selectFiltersIntoAdminProfileForLevel1,
  selectFiltersIntoAdminProfileForLevel2child1,
  verifyDeletedModuleFromPermissions
} from '../pages/permissions';
import { deleteTagsFromMultiLevel } from '../pages/tagsPage';

describe('Atlas automation for filter at edit admin profile page', function () {
  before(() => {
    visit();
    cy.fixture('LoginCredentials').then((data) => {
      fillUsername(data.LEVEL_1_USERNAME);
      fillPassword(data.validPassword);
    });
    submit();
  });

  it('Add tags', function () {
    addTagMultilevel();
  });
  it('Add disposition', function () {
    addDisposForMultiLevel();
  });

  it('Enable filter and select item for level 1', function () {
    selectFiltersIntoAdminProfileForLevel1();
  });
  it('Verify the data for level 1 ', function () {
    veifyFilterDataForLevel1();
  });
  it('Disable allow button', function () {
    // click allow button to disable  for tags and dispositions
    clickAlloWButtonWithFilter();
  });
  it('Verify disabled allow button', function () {
    // verify selected data into filter with diabled allow button
    verifyFilterDataWithDisabledAllowBtn();
  });

  it('Disable filter and enable allow button  and check create for level 1 ', function () {
    // reseting all changes (filter and allow button)
    disableFilterButtonAtLevel1();
  });

  it('Enable filter and select item for level 2 child 1', function () {
    selectFiltersIntoAdminProfileForLevel2child1();
  });
  it('Verify the data for level 2 child 1 ', function () {
    veifyFilterDataForLevel2child1();
  });

  it('Disable filter and check create for level 2 child 1 ', function () {
    disableFilterButtonAtLevel2child1();
  });

  it('Add module for disposition and apply filter for both modue with different permissions', function () {
    // 2 disposition module with filter.
    addMultipleModuleForFilter();
  });
  it('Add disposition module disable allow button for one module and unchek read button', function () {
    // 2 disposition module 1with diabled allow and uncheck read .
    addDisposModuleAndDisallow();
  });
  it('Add disposition module disable allow button for second  module and unchek read button with selected items into filter', function () {
    // 2 disposition module 1 with default permissions and second have items into filter and disabled allow button
    secondDisposFilterWithDisallow();
  });
  it('Add tags module disable allow button for second  module and unchek read button with selected items into filter', function () {
    // 2 tags module 1 with default permissions and second have items into filter and disabled allow button
    secondTagsFilterWithDisallow();
  });

  it('Delete admin profile, tags & dispositions', function () {
    deleteTagsFromMultiLevel();
    deleteDisposForMUltiLevel();
  });
  it('Delete module for organizations', function () {
    deleteModuleFromPermission(ORGANIZATION);
    verifyDeletedModuleFromPermissions(ORGANIZATION);
    addDeletedModule(ORGANIZATION);
  });

  it('Delete module for disposition', function () {
    deleteModuleFromPermission(DISPOSITION);
    verifyDeletedModuleFromPermissions(DISPOSITIONS);
    addDeletedModule(DISPOSITION);
  });
});
