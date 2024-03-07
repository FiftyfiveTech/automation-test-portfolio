import {
  clickOnText,
  elementWithTextNotExist,
  elementWithTextExist
} from '../utils/cypressMethod.util';
import { CONNECTEL, OK, SAVE, ADD_NEW } from '../utils/constants.util';
import { navigateToAdminProfilePage } from './adminProfilePage';
import { navigateToDispositionPage } from './dispositionsPage';
import {
  clickAdminProfile,
  clickDisposition,
  clickHamburgerMenu,
  clickOrganization,
  clickStaff,
  hamburgerMenuShldPrsnt
} from './home.page';
import { fillPassword, fillUsername, submit, visit } from './login.page';
import {
  navigateToOrganizationPage,
  organizationHeaderShldPrsnt
} from './organizationPage';
import { navigateToTagsPage, tagsTable } from './tagsPage';
import {
  navigateToUserPage,
  uniqueUI,
  uniqueUI2,
  uniqueUI3,
  uniqueUI4
} from './usersPage';

export const orgProfileBlock = 'div[class=\'ant-row ant-form-item form-item ant-form-element-__organizations ant-form-element-__organizations  ant-form-item-has-success\']>div:nth-of-type(2)>div>div>div';
export const orgProfile = 'div[class=\'ant-form-list-item ant-form-element-__organizations ant-form-element-__organizations ant-form-list-item-section\']';
export const dataTable = 'div[class=\'ant-table-content\']';
export const block = 'div[class=\'content-children-wrp\']';
// edit icon locator remains same at all pages.
export const editIcon =
  'path[d=\'M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z\']';
// delete icon locator remains same at all pages.
export const delIcon =
  'path[d=\'M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2\']';
let testData: string;
export const addNewButtonShldPrsnt = () => {
  elementWithTextExist(block, ADD_NEW);
};
export const addNewButtonShldNotPrsnt = () => {
  elementWithTextNotExist(block, ADD_NEW);
};
export const editIconShldPrsnt = (testdata: string, pageBlock, editIcon) => {
  cy.get(pageBlock)
    .find('tr')
    .filter(`:contains(${testdata})`)
    .within(() => {
      cy.get(editIcon).should('exist');
    });
};
export const deleteIconShldPrsnt = (testdata: string, pageBlock, deleteIcon) => {
  cy.get(pageBlock)
    .find('tr')
    .filter(`:contains(${testdata})`)
    .within(() => {
      cy.get(deleteIcon).should('exist');
    });
};
export const editIconShldNotPrsnt = (testdata: string, pageBlock, editIcon) => {
  cy.get(pageBlock)
    .find('tr')
    .filter(`:contains(${testdata})`)
    .within(() => {
      cy.get(editIcon).should('not.exist');
    });
};
export const deletIconShldNotPrsnt = (testdata: string, pageBlock, deleteIcon) => {
  cy.get(pageBlock)
    .find('tr')
    .filter(`:contains(${testdata})`)
    .within(() => {
      cy.get(deleteIcon).should('not.exist');
    });
};
export const orgLevel1DataPresence = () => {
  visit();
  cy.fixture('LoginCredentials').then((data) => {
    fillUsername(data.LEVEL_1_USERNAME);
    fillPassword(data.validPassword);
  });
  submit();
  hamburgerMenuShldPrsnt();
  clickHamburgerMenu();
  clickStaff();
  clickOrganization();
  cy.wait(3000);
  organizationHeaderShldPrsnt();
  cy.fixture('OrgMultiLevel').then((data) => {
    const len = data.OrgLevel_1_hierarchy.length;
    cy.get('td:nth-child(2)').should('have.length', len);
    data.OrgLevel_1_hierarchy.forEach((element) => {
      cy.get('td:nth-child(2)').contains(element).should('exist');
    });
  });
};
export const orgLevel2DataPresence = () => {
  visit();
  cy.fixture('LoginCredentials').then((data) => {
    fillUsername(data.LEVEL_2_CHILD_1_USERNAME);
    fillPassword(data.validPassword);
  });
  submit();
  navigateToOrganizationPage();
  cy.fixture('OrgMultiLevel').then((data) => {
    const len = data.OrgLevel_2_hierarchy.length;
    cy.get('td:nth-child(2)').should('have.length', len);
    data.OrgLevel_2_hierarchy.forEach((element) => {
      cy.get('td:nth-child(2)').contains(element).should('exist');
    });
  });
};
export const orgLevel3DataPresence = () => {
  visit();
  cy.fixture('LoginCredentials').then((data) => {
    fillUsername(data.LEVEL_3_USERNAME);
    fillPassword(data.validPassword);
  });
  submit();
  navigateToOrganizationPage();
  cy.fixture('OrgMultiLevel').then((data) => {
    const len = data.OrgLevel_3_hierarchy.length;
    cy.get('td:nth-child(2)').should('have.length', len);
    data.OrgLevel_3_hierarchy.forEach((element) => {
      cy.get('td:nth-child(2)').contains(element).should('exist');
    });
  });
};
// validation for admin profiles
export const ApLevel1DataPresence = () => {
  visit();
  cy.fixture('LoginCredentials').then((data) => {
    fillUsername(data.LEVEL_1_USERNAME);
    fillPassword(data.validPassword);
  });
  submit();
  navigateToAdminProfilePage();
  cy.fixture('OrgMultiLevel').then((data) => {
    const len = data.ApLevel_1_hierarchy.length;
    cy.get('td:nth-child(3)').should('have.length', len);
    data.ApLevel_1_hierarchy.forEach((element) => {
      cy.get('td:nth-child(3)').contains(element).should('exist');
    });
  });
};
export const ApLevel2DataPresence = () => {
  visit();
  cy.fixture('LoginCredentials').then((data) => {
    fillUsername(data.LEVEL_2_CHILD_1_USERNAME);
    fillPassword(data.validPassword);
  });
  submit();
  navigateToAdminProfilePage();
  cy.fixture('OrgMultiLevel').then((data) => {
    const len = data.ApLevel_2_hierarchy.length;
    cy.get('td:nth-child(3)').should('have.length', len);
    data.ApLevel_2_hierarchy.forEach((element) => {
      cy.get('td:nth-child(3)').contains(element).should('exist');
    });
  });
};
export const ApLevel3DataPresence = () => {
  visit();
  cy.fixture('LoginCredentials').then((data) => {
    fillUsername(data.LEVEL_3_USERNAME);
    fillPassword(data.validPassword);
  });
  submit();
  navigateToAdminProfilePage();
  cy.fixture('OrgMultiLevel').then((data) => {
    const len = data.ApLevel_3_hierarchy.length;
    cy.get('td:nth-child(2)').should('have.length', len);
    data.ApLevel_3_hierarchy.forEach((element) => {
      cy.get('td:nth-child(2)').contains(element).should('exist');
    });
  });
};
// validation for users:
export const userLevel1DataPresence = () => {
  visit();
  cy.fixture('LoginCredentials').then((data) => {
    fillUsername(data.LEVEL_1_USERNAME);
    fillPassword(data.validPassword);
  });
  submit();
  navigateToUserPage();
  cy.fixture('OrgMultiLevel').then((data) => {
    const len = data.UserLevel_1_hierarchy.length;
    cy.get('td:nth-child(2)').should('have.length', len);
    data.UserLevel_1_hierarchy.forEach((element) => {
      cy.get('td:nth-child(2)').contains(element).should('exist');
    });
  });
};
export const userLevel2DataPresence = () => {
  visit();
  cy.fixture('LoginCredentials').then((data) => {
    fillUsername(data.LEVEL_2_CHILD_1_USERNAME);
    fillPassword(data.validPassword);
  });
  submit();
  navigateToUserPage();
  cy.fixture('OrgMultiLevel').then((data) => {
    const len = data.UserLevel_2_hierarchy.length;
    cy.get('td:nth-child(2)').should('have.length', len);
    data.UserLevel_2_hierarchy.forEach((element) => {
      cy.get('td:nth-child(2)').contains(element).should('exist');
    });
  });
};
export const userLevel3DataPresence = () => {
  visit();
  cy.fixture('LoginCredentials').then((data) => {
    fillUsername(data.LEVEL_3_USERNAME);
    fillPassword(data.validPassword);
  });
  submit();
  navigateToUserPage();
  cy.fixture('OrgMultiLevel').then((data) => {
    const len = data.OrgLevel_3_hierarchy.length;
    cy.get('td:nth-child(2)').should('have.length', len);
    data.UserLevel_3_hierarchy.forEach((element) => {
      cy.get('td:nth-child(2)').contains(element).should('exist');
    });
  });
};
// test cases for tags
export const tagsLevel1DataPresence = () => {
  visit();
  cy.fixture('LoginCredentials').then((data) => {
    fillUsername(data.LEVEL_1_USERNAME);
    fillPassword(data.validPassword);
  });
  submit();
  cy.fixture('Tags').then((data) => {
    navigateToTagsPage();
    cy.get('td:nth-child(2)').should('have.length', 4);
    elementWithTextExist(tagsTable, data.newTagsTitle + uniqueUI);
    elementWithTextExist(tagsTable, data.newTagsTitle + uniqueUI2);
    elementWithTextExist(tagsTable, data.newTagsTitle + uniqueUI3);
    elementWithTextExist(tagsTable, data.newTagsTitle + uniqueUI4);
  });
};
export const tagsLevel2DataPresence = () => {
  visit();
  cy.fixture('LoginCredentials').then((data) => {
    fillUsername(data.LEVEL_2_CHILD_1_USERNAME);
    fillPassword(data.validPassword);
  });
  submit();
  cy.fixture('Tags').then((data) => {
    navigateToTagsPage();
    cy.get('td:nth-child(2)').should('have.length', 2);
    elementWithTextExist(tagsTable, data.newTagsTitle + uniqueUI2);
    elementWithTextExist(tagsTable, data.newTagsTitle + uniqueUI4);
  });
};
export const tagsLevel3DataPresence = () => {
  visit();
  cy.fixture('LoginCredentials').then((data) => {
    fillUsername(data.LEVEL_3_USERNAME);
    fillPassword(data.validPassword);
    submit();
  });
  cy.fixture('Tags').then((data) => {
    navigateToTagsPage();
    cy.get('td:nth-child(2)').should('have.length', 1);
    elementWithTextExist(tagsTable, data.newTagsTitle + uniqueUI4);
  });
};
// test cases for dispositions
export const disposLevel1DataPresence = () => {
  visit();
  cy.fixture('LoginCredentials').then((data) => {
    fillUsername(data.LEVEL_1_USERNAME);
    fillPassword(data.validPassword);
  });
  submit();
  cy.fixture('Disposition').then((data) => {
    navigateToDispositionPage();
    cy.get('td:nth-child(2)').should('have.length', 4);
    elementWithTextExist(tagsTable, data.newDisposition + uniqueUI);
    elementWithTextExist(tagsTable, data.newDisposition + uniqueUI2);
    elementWithTextExist(tagsTable, data.newDisposition + uniqueUI3);
    elementWithTextExist(tagsTable, data.newDisposition + uniqueUI4);
  });
};
export const disposLevel2DataPresence = () => {
  visit();
  cy.fixture('LoginCredentials').then((data) => {
    fillUsername(data.LEVEL_2_CHILD_1_USERNAME);
    fillPassword(data.validPassword);
  });
  submit();
  cy.fixture('Disposition').then((data) => {
    navigateToDispositionPage();
    cy.get('td:nth-child(2)').should('have.length', 2);
    elementWithTextExist(tagsTable, data.newDisposition + uniqueUI2);
    elementWithTextExist(tagsTable, data.newDisposition + uniqueUI4);
  });
};
export const disposLevel3DataPresence = () => {
  visit();
  cy.fixture('LoginCredentials').then((data) => {
    fillUsername(data.LEVEL_3_USERNAME);
    fillPassword(data.validPassword);
    submit();
  });
  cy.fixture('Disposition').then((data) => {
    navigateToDispositionPage();
    cy.get('td:nth-child(2)').should('have.length', 1);
    elementWithTextExist(tagsTable, data.newDisposition + uniqueUI4);
  });
};
// Parent data should not present in any module
export const orgLevel1DataShldNotPrsnt = () => {
  visit();
  cy.fixture('LoginCredentials').then((data) => {
    fillUsername(data.LEVEL_3_USERNAME);
    fillPassword(data.validPassword);
    submit();
  });
  hamburgerMenuShldPrsnt();
  clickHamburgerMenu();
  clickStaff();
  clickOrganization();
  cy.wait(3000);
  organizationHeaderShldPrsnt();
  cy.fixture('OrgMultiLevel').then((data) => {
    data.OrgLevel_1_parent.forEach((element) => {
      cy.get('td:nth-child(2)').contains(element).should('not.exist');
    });
    cy.get('td:nth-child(2)').should('not.be.empty');
  });
};
export const orgLevel2DataShldNotPrsnt = () => {
  visit();
  cy.fixture('LoginCredentials').then((data) => {
    fillUsername(data.LEVEL_2_CHILD_1_USERNAME);
    fillPassword(data.validPassword);
  });
  submit();
  navigateToOrganizationPage();
  cy.fixture('OrgMultiLevel').then((data) => {
    data.OrgLevel_2_parent.forEach((element) => {
      cy.get('td:nth-child(2)').contains(element).should('not.exist');
    });
    cy.get('td:nth-child(2)').should('not.be.empty');
  });
};
export const orgLevel3DataShldNotPrsnt = () => {
  visit();
  cy.fixture('LoginCredentials').then((data) => {
    fillUsername(data.LEVEL_3_USERNAME);
    fillPassword(data.validPassword);
  });
  submit();
  navigateToOrganizationPage();
  cy.fixture('OrgMultiLevel').then((data) => {
    data.OrgLevel_3_parent.forEach((element) => {
      cy.get('td:nth-child(2)').contains(element).should('not.exist');
    });
    cy.get('td:nth-child(2)').should('not.be.empty');
  });
};
// validation for admin profiles
export const apLevel1DataShldNotPrsnt = () => {
  visit();
  cy.fixture('LoginCredentials').then((data) => {
    fillUsername(data.LEVEL_1_USERNAME);
    fillPassword(data.validPassword);
  });
  submit();
  navigateToAdminProfilePage();
  cy.fixture('OrgMultiLevel').then((data) => {
    data.OrgLevel_1_parent.forEach((element) => {
      cy.get('td:nth-child(2)').contains(element).should('not.exist');
    });
    cy.get('td:nth-child(2)').should('not.be.empty');
  });
};
export const apLevel2DataShldNotPrsnt = () => {
  visit();
  cy.fixture('LoginCredentials').then((data) => {
    fillUsername(data.LEVEL_2_CHILD_1_USERNAME);
    fillPassword(data.validPassword);
  });
  submit();
  navigateToAdminProfilePage();
  cy.fixture('OrgMultiLevel').then((data) => {
    data.OrgLevel_2_parent.forEach((element) => {
      cy.get('td:nth-child(2)').contains(element).should('not.exist');
    });
    cy.get('td:nth-child(2)').should('not.be.empty');
  });
};
export const apLevel3DataShldNotPrsnt = () => {
  visit();
  cy.fixture('LoginCredentials').then((data) => {
    fillUsername(data.LEVEL_3_USERNAME);
    fillPassword(data.validPassword);
  });
  submit();
  navigateToAdminProfilePage();
  cy.fixture('OrgMultiLevel').then((data) => {
    data.ApLevel_3_parentTitle.forEach((element) => {
      cy.get('td:nth-child(2)').contains(element).should('not.exist');
    });
    // cy.get("td:nth-child(2)").should('not.be.empty');
  });
};
// validation for users:
export const userLevel1DataShldNotPrsnt = () => {
  visit();
  cy.fixture('LoginCredentials').then((data) => {
    fillUsername(data.LEVEL_1_USERNAME);
    fillPassword(data.validPassword);
  });
  submit();
  navigateToUserPage();
  cy.fixture('OrgMultiLevel').then((data) => {
    // let len=data.UserLevel_1_hierarchy.length;
    // cy.get("td:nth-child(2)").should('have.length',len);
    data.OrgLevel_1_parent.forEach((element) => {
      cy.get('td:nth-child(3)').contains(element).should('not.exist');
    });
    cy.get('td:nth-child(3)').should('not.be.empty');
  });
};
export const userLevel2DataShldNotPrsnt = () => {
  visit();
  cy.fixture('LoginCredentials').then((data) => {
    fillUsername(data.LEVEL_2_CHILD_1_USERNAME);
    fillPassword(data.validPassword);
  });
  submit();
  navigateToUserPage();
  cy.fixture('OrgMultiLevel').then((data) => {
    data.OrgLevel_2_parent.forEach((element) => {
      cy.get('td:nth-child(3)').contains(element).should('not.exist');
    });
    cy.get('td:nth-child(3)').should('not.be.empty');
  });
};
export const userLevel3DataShldNotPrsnt = () => {
  visit();
  cy.fixture('LoginCredentials').then((data) => {
    fillUsername(data.LEVEL_3_USERNAME);
    fillPassword(data.validPassword);
  });
  submit();
  navigateToUserPage();
  cy.fixture('OrgMultiLevel').then((data) => {
    data.OrgLevel_3_parent.forEach((element) => {
      cy.get('td:nth-child(3)').contains(element).should('not.exist');
    });
    cy.get('td:nth-child(3)').should('not.be.empty');
  });
};
// test cases for tags
export const tagsLevel1DataShldNotPrsnt = () => {
  visit();
  cy.fixture('LoginCredentials').then((data) => {
    fillUsername(data.LEVEL_1_USERNAME);
    fillPassword(data.validPassword);
  });
  submit();
  navigateToTagsPage();
  cy.fixture('OrgMultiLevel').then((data) => {
    data.OrgLevel_1_parent.forEach((element) => {
      cy.get('td:nth-child(2)').contains(element).should('not.exist');
    });
    cy.get('td:nth-child(2)').should('not.be.empty');
  });
};
export const tagsLevel2DataShldNotPrsnt = () => {
  visit();
  cy.fixture('LoginCredentials').then((data) => {
    fillUsername(data.LEVEL_2_CHILD_1_USERNAME);
    fillPassword(data.validPassword);
  });
  submit();
  navigateToTagsPage();
  cy.fixture('OrgMultiLevel').then((data) => {
    data.OrgLevel_2_parent.forEach((element) => {
      cy.get('td:nth-child(2)').contains(element).should('not.exist');
    });
    cy.get('td:nth-child(2)').should('not.be.empty');
  });
};
export const tagsLevel3DataShldNotPrsnt = () => {
  visit();
  cy.fixture('LoginCredentials').then((data) => {
    fillUsername(data.LEVEL_3_USERNAME);
    fillPassword(data.validPassword);
    submit();
  });
  cy.fixture('Tags').then((data) => {
    navigateToTagsPage();
    elementWithTextNotExist(tagsTable, data.newTagsTitle + uniqueUI);
    elementWithTextNotExist(tagsTable, data.newTagsTitle + uniqueUI2);
    elementWithTextNotExist(tagsTable, data.newTagsTitle + uniqueUI3);
    elementWithTextNotExist(tagsTable, CONNECTEL);
  });
};
// test cases for dispositions
export const disposLevel1DataShldNotPrsnt = () => {
  visit();
  cy.fixture('LoginCredentials').then((data) => {
    fillUsername(data.LEVEL_1_USERNAME);
    fillPassword(data.validPassword);
  });
  submit();
  navigateToDispositionPage();
  cy.fixture('OrgMultiLevel').then((data) => {
    data.OrgLevel_1_parent.forEach((element) => {
      cy.get('td:nth-child(2)').contains(element).should('not.exist');
    });
    cy.get('td:nth-child(2)').should('not.be.empty');
  });
};
export const disposLevel2DataShldNotPrsnt = () => {
  visit();
  cy.fixture('LoginCredentials').then((data) => {
    fillUsername(data.LEVEL_2_CHILD_1_USERNAME);
    fillPassword(data.validPassword);
  });
  submit();
  navigateToDispositionPage();
  cy.fixture('OrgMultiLevel').then((data) => {
    data.OrgLevel_2_parent.forEach((element) => {
      cy.get('td:nth-child(2)').contains(element).should('not.exist');
    });
    cy.get('td:nth-child(2)').should('not.be.empty');
  });
};
export const disposLevel3DataShldNotPrsnt = () => {
  visit();
  cy.fixture('LoginCredentials').then((data) => {
    fillUsername(data.LEVEL_3_USERNAME);
    fillPassword(data.validPassword);
    submit();
  });
  cy.fixture('Disposition').then((data) => {
    navigateToDispositionPage();
    elementWithTextNotExist(tagsTable, data.newDisposition + uniqueUI);
    elementWithTextNotExist(tagsTable, data.newDisposition + uniqueUI2);
    elementWithTextNotExist(tagsTable, data.newDisposition + uniqueUI3);
    elementWithTextNotExist(tagsTable, CONNECTEL);
  });
};
//  test cases related to permissions for multilevel
export const verifyOrgLevel1permissions = () => {
  visit();
  cy.fixture('LoginCredentials').then((data) => {
    fillUsername(data.LEVEL_1_USERNAME);
    fillPassword(data.validPassword);
  });
  submit();
  navigateToUserPage();
  // for user module
  cy.fixture('OrgMultiLevel').then((data) => {
    const testData = data.ORG_LEVEL_2_CHILD_1_USER;
    editIconShldPrsnt(testData, dataTable, editIcon);
    deleteIconShldPrsnt(testData, dataTable, delIcon);
    addNewButtonShldPrsnt();
  });
  // for organization module
  clickOrganization();
  cy.wait(5000);
  cy.fixture('OrgMultiLevel').then((data) => {
    const testData = data.ORG_LEVEL_2_CHILD_1;
    editIconShldPrsnt(testData, dataTable, editIcon);
  });
  // for admin profile module
  clickAdminProfile();
  cy.wait(5000);
  cy.fixture('AdminProfiles').then((data) => {
    testData = data.newAdminProfieTitle + uniqueUI2;
    editIconShldPrsnt(testData, dataTable, editIcon);
    deleteIconShldPrsnt(testData, dataTable, delIcon);
    addNewButtonShldPrsnt();
    // for tags modules
    visit();
    cy.fixture('LoginCredentials').then((data) => {
      fillUsername(data.LEVEL_1_USERNAME);
      fillPassword(data.validPassword);
    });
    submit();
    cy.wait(5000);
    navigateToTagsPage();
    cy.wait(5000);
    cy.fixture('Tags').then((data) => {
      testData = data.newTagsTitle + uniqueUI2;
      editIconShldPrsnt(testData, dataTable, editIcon);
      deleteIconShldPrsnt(testData, dataTable, delIcon);
      addNewButtonShldPrsnt();
    });
    // for disposition module
    clickDisposition();
    cy.wait(5000);
    cy.fixture('Disposition').then((data) => {
      testData = data.newDisposition + uniqueUI2;
      editIconShldPrsnt(testData, dataTable, editIcon);
      deleteIconShldPrsnt(testData, dataTable, delIcon);
      addNewButtonShldPrsnt();
    });
  });
};
export const verifyOrgLevel2Child1permissions = () => {
  visit();
  cy.fixture('LoginCredentials').then((data) => {
    fillUsername(data.LEVEL_2_CHILD_1_USERNAME);
    fillPassword(data.validPassword);
  });
  submit();
  navigateToUserPage();
  // for user module
  cy.fixture('OrgMultiLevel').then((data) => {
    const testData = data.ORG_LEVEL_3_USER;
    editIconShldPrsnt(testData, dataTable, editIcon);
    deleteIconShldPrsnt(testData, dataTable, delIcon);
    addNewButtonShldPrsnt();
  });
  // for organization module
  clickOrganization();
  cy.wait(5000);
  cy.fixture('OrgMultiLevel').then((data) => {
    const testData = data.ORG_LEVEL_3;
    editIconShldPrsnt(testData, dataTable, editIcon);
  });
  // for admin profile module
  clickAdminProfile();
  cy.wait(5000);
  cy.fixture('AdminProfiles').then((data) => {
    testData = data.newAdminProfieTitle + uniqueUI4;
    editIconShldPrsnt(testData, dataTable, editIcon);
    deleteIconShldPrsnt(testData, dataTable, delIcon);
    addNewButtonShldPrsnt();
    // for tags modules
    visit();
    cy.fixture('LoginCredentials').then((data) => {
      fillUsername(data.LEVEL_2_CHILD_1_USERNAME);
      fillPassword(data.validPassword);
    });
    submit();
    cy.wait(5000);
    navigateToTagsPage();
    cy.wait(5000);
    cy.fixture('Tags').then((data) => {
      testData = data.newTagsTitle + uniqueUI4;
      editIconShldPrsnt(testData, dataTable, editIcon);
      deleteIconShldPrsnt(testData, dataTable, delIcon);
      addNewButtonShldPrsnt();
    });
    // for disposition module
    clickDisposition();
    cy.wait(5000);
    cy.fixture('Disposition').then((data) => {
      testData = data.newDisposition + uniqueUI4;
      editIconShldPrsnt(testData, dataTable, editIcon);
      deleteIconShldPrsnt(testData, dataTable, delIcon);
      addNewButtonShldPrsnt();
    });
  });
};
export const verifyOrgLevel2Child2permissions = () => {
  visit();
  cy.fixture('LoginCredentials').then((data) => {
    fillUsername(data.LEVEL_2_CHILD_2_USERNAME);
    fillPassword(data.validPassword);
  });
  submit();
  navigateToUserPage();
  // for user module
  cy.fixture('OrgMultiLevel').then((data) => {
    const testData = data.ORG_LEVEL_2_CHILD_1_USER;
    editIconShldNotPrsnt(testData, dataTable, editIcon);
    deletIconShldNotPrsnt(testData, dataTable, delIcon);
    addNewButtonShldPrsnt();
  });
  // for organization module
  clickOrganization();
  cy.wait(5000);
  cy.fixture('OrgMultiLevel').then((data) => {
    const testData = data.ORG_LEVEL_2_CHILD_1;
    editIconShldNotPrsnt(testData, dataTable, editIcon);
  });
  // for admin profile module
  clickAdminProfile();
  cy.wait(5000);
  cy.fixture('AdminProfiles').then((data) => {
    testData = data.newAdminProfieTitle + uniqueUI2;
    editIconShldNotPrsnt(testData, dataTable, editIcon);
    deletIconShldNotPrsnt(testData, dataTable, delIcon);
    addNewButtonShldPrsnt();
    // for tags modules
    visit();
    cy.fixture('LoginCredentials').then((data) => {
      fillUsername(data.LEVEL_2_CHILD_2_USERNAME);
      fillPassword(data.validPassword);
    });
    submit();
    cy.wait(5000);
    navigateToTagsPage();
    cy.wait(5000);
    cy.fixture('Tags').then((data) => {
      testData = data.newTagsTitle + uniqueUI2;
      editIconShldNotPrsnt(testData, dataTable, editIcon);
      deletIconShldNotPrsnt(testData, dataTable, delIcon);
      addNewButtonShldPrsnt();
    });
    // for disposition module
    clickDisposition();
    cy.wait(5000);
    cy.fixture('Disposition').then((data) => {
      testData = data.newDisposition + uniqueUI2;
      editIconShldNotPrsnt(testData, dataTable, editIcon);
      deletIconShldNotPrsnt(testData, dataTable, delIcon);
      addNewButtonShldPrsnt();
    });
  });
};
export const verifyOrgLevel3permissions = () => {
  visit();
  cy.fixture('LoginCredentials').then((data) => {
    fillUsername(data.LEVEL_3_USERNAME);
    fillPassword(data.validPassword);
  });
  submit();
  navigateToUserPage();
  // for user module
  cy.fixture('OrgMultiLevel').then((data) => {
    const testData = data.ORG_LEVEL_1_USER;
    editIconShldNotPrsnt(testData, dataTable, editIcon);
    deletIconShldNotPrsnt(testData, dataTable, delIcon);
    addNewButtonShldPrsnt();
  });
  // for organization module
  clickOrganization();
  cy.wait(5000);
  cy.fixture('OrgMultiLevel').then((data) => {
    const testData = data.ORG_LEVEL_1;
    editIconShldNotPrsnt(testData, dataTable, editIcon);
  });
  // for admin profile module
  clickAdminProfile();
  cy.wait(5000);
  cy.fixture('AdminProfiles').then((data) => {
    testData = data.newAdminProfieTitle + uniqueUI;
    editIconShldNotPrsnt(testData, dataTable, editIcon);
    deletIconShldNotPrsnt(testData, dataTable, delIcon);
    addNewButtonShldPrsnt();
    // for tags modules
    visit();
    cy.fixture('LoginCredentials').then((data) => {
      fillUsername(data.LEVEL_3_USERNAME);
      fillPassword(data.validPassword);
    });
    submit();
    cy.wait(5000);
    navigateToTagsPage();
    cy.wait(5000);
    cy.fixture('Tags').then((data) => {
      testData = data.newTagsTitle + uniqueUI;
      editIconShldNotPrsnt(testData, dataTable, editIcon);
      deletIconShldNotPrsnt(testData, dataTable, delIcon);
      addNewButtonShldPrsnt();
    });
    // for disposition module
    clickDisposition();
    cy.wait(5000);
    cy.fixture('Disposition').then((data) => {
      testData = data.newDisposition + uniqueUI;
      editIconShldNotPrsnt(testData, dataTable, editIcon);
      deletIconShldNotPrsnt(testData, dataTable, delIcon);
      addNewButtonShldPrsnt();
    });
  });
};
export const deleteOrgProfileForLevel1Multilevel = () => {
  visit();
  cy.fixture('LoginCredentials').then((data) => {
    fillUsername(data.LEVEL_1_USERNAME);
    fillPassword(data.validPassword);
  });
  submit();
  // delete org profile for level 1 user
  navigateToUserPage();
  cy.wait(3000);
  cy.fixture('OrgMultiLevel').then((data) => {
    testData = data.ORG_LEVEL_1_USER;
    cy.get(dataTable)
      .find('tr')
      .filter(`:contains(${testData})`)
      .within(() => {
        cy.get(editIcon).click({ force: true });
      });
    cy.wait(2000);
    const testData2: string = data.ORG_LEVEL_2_CHILD_1;
    cy.get(orgProfileBlock)
      .find('div')
      .filter(`:contains(${testData2})`)
      .within(() => {
        cy.get(delIcon).click({ force: true });
      });
  });
  clickOnText(SAVE);
  cy.wait(3000);
  clickOnText(OK);
  clickOnText(OK);
  cy.reload();
  cy.wait(3000);
};
export const deleteOrgProfileForLevel2child1Multilevel = () => {
  //  delete org profile for  level 2 child 1 user
  visit();
  cy.fixture('LoginCredentials').then((data) => {
    fillUsername(data.LEVEL_1_USERNAME);
    fillPassword(data.validPassword);
  });
  submit();
  navigateToUserPage();
  cy.wait(3000);
  cy.fixture('OrgMultiLevel').then((data) => {
    testData = data.ORG_LEVEL_2_CHILD_1_USER;
    cy.get(dataTable)
      .find('tr')
      .filter(`:contains(${testData})`)
      .within(() => {
        cy.get(editIcon).click({ force: true });
      });
    cy.wait(2000);
    const testData2: string = data.ORG_LEVEL_3;
    cy.get(orgProfileBlock)
      .find(orgProfile)
      .filter(`:contains(${testData2})`)
      .within(() => {
        cy.get(delIcon).click({ force: true });
      });
  });
  clickOnText(SAVE);
  cy.wait(3000);
  //   clickOnText(OK);
  //   clickOnText(OK);
  cy.reload();
  cy.wait(3000);
};
export const deleteOrgProfileForLevel2child2Multilevel = () => {
  // delete org profile for level 2 child 2
  visit();
  cy.fixture('LoginCredentials').then((data) => {
    fillUsername(data.LEVEL_1_USERNAME);
    fillPassword(data.validPassword);
  });
  submit();
  navigateToUserPage();
  cy.wait(3000);
  cy.fixture('OrgMultiLevel').then((data) => {
    testData = data.ORG_LEVEL_2_CHILD_2_USER;
    cy.get(dataTable)
      .find('tr')
      .filter(`:contains(${testData})`)
      .within(() => {
        cy.get(editIcon).click({ force: true });
      });
    cy.wait(2000);
    const testData2: string = data.ORG_LEVEL_2_CHILD_1;
    cy.get(orgProfileBlock)
      .find(orgProfile)
      .filter(`:contains(${testData2})`)
      .within(() => {
        cy.get(delIcon).click({ force: true });
      });
  });
  clickOnText(SAVE);
  cy.wait(3000);
  //   clickOnText(OK);
  //   clickOnText(OK);
  cy.reload();
  cy.wait(3000);
};
export const deleteOrgProfileForLevel3Multilevel = () => {
  // delete org profile for level 3
  visit();
  cy.fixture('LoginCredentials').then((data) => {
    fillUsername(data.LEVEL_1_USERNAME);
    fillPassword(data.validPassword);
  });
  submit();
  navigateToUserPage();
  cy.wait(3000);
  cy.fixture('OrgMultiLevel').then((data) => {
    testData = data.ORG_LEVEL_3_USER;
    cy.get(dataTable)
      .find('tr')
      .filter(`:contains(${testData})`)
      .within(() => {
        cy.get(editIcon).click({ force: true });
      });
    cy.wait(2000);
    const testData2: string = data.ORG_LEVEL_1;
    cy.get(orgProfileBlock)
      .find(orgProfile)
      .filter(`:contains(${testData2})`)
      .within(() => {
        cy.get(delIcon).click({ force: true });
      });
  });
  clickOnText(SAVE);
  cy.wait(3000);
  //   clickOnText(OK);
  //   clickOnText(OK);
  cy.reload();
  cy.wait(3000);
};
export const veifyFilterDataForLevel1 = () => {
  visit();
  cy.fixture('LoginCredentials').then((data) => {
    fillUsername(data.LEVEL_1_USERNAME);
    fillPassword(data.validPassword);
  });
  submit();
  navigateToOrganizationPage();
  cy.wait(3000);
  cy.fixture('OrgMultiLevel').then((data) => {
    editIconShldPrsnt(data.ORG_LEVEL_1, dataTable, editIcon);
    clickAdminProfile();
    cy.wait(5000);
    editIconShldPrsnt(data.ApLevel_1_hierarchy[0], dataTable, editIcon);
    deleteIconShldPrsnt(data.ApLevel_1_hierarchy[0], dataTable, delIcon);
  });
  visit();
  cy.wait(1000);
  cy.fixture('LoginCredentials').then((data) => {
    fillUsername(data.LEVEL_1_USERNAME);
    fillPassword(data.validPassword);
  });
  submit();
  navigateToTagsPage();
  cy.wait(3000);
  cy.fixture('Tags').then((data) => {
    testData = data.newTagsTitle + uniqueUI;
    editIconShldPrsnt(testData, dataTable, editIcon);
    deleteIconShldPrsnt(testData, dataTable, delIcon);
  });
  clickDisposition();
  cy.wait(5000);
  cy.fixture('Disposition').then((data) => {
    testData = data.newDisposition + uniqueUI;
    editIconShldPrsnt(testData, dataTable, editIcon);
    deleteIconShldPrsnt(testData, dataTable, delIcon);
  });
};
export const veifyFilterDataForLevel2child1 = () => {
  // verify filter data for  level 2 child 1 organization
  visit();
  cy.fixture('LoginCredentials').then((data) => {
    fillUsername(data.LEVEL_2_CHILD_1_USERNAME);
    fillPassword(data.validPassword);
  });
  submit();
  navigateToOrganizationPage();
  cy.wait(3000);
  cy.fixture('OrgMultiLevel').then((data) => {
    // verify edit  icon of the organization selected into filters at edit admin profile page
    editIconShldPrsnt(data.ORG_LEVEL_2_CHILD_1, dataTable, editIcon);
    clickAdminProfile();
    cy.wait(5000);
    // verify edit and delete icon of admin profile selected into filters at edit admin profile page
    editIconShldPrsnt(data.ApLevel_1_hierarchy[1], dataTable, editIcon);
    deleteIconShldPrsnt(data.ApLevel_1_hierarchy[1], dataTable, delIcon);
  });
  visit();
  cy.wait(1000);
  cy.fixture('LoginCredentials').then((data) => {
    fillUsername(data.LEVEL_2_CHILD_1_USERNAME);
    fillPassword(data.validPassword);
  });
  submit();
  navigateToTagsPage();
  cy.wait(3000);
  cy.fixture('Tags').then((data) => {
    testData = data.newTagsTitle + uniqueUI2;
    // verify that edit and delete icon should be present for tag(testData).
    editIconShldPrsnt(testData, dataTable, editIcon);
    deleteIconShldPrsnt(testData, dataTable, delIcon);
  });
  clickDisposition();
  cy.wait(5000);
  cy.fixture('Disposition').then((data) => {
    testData = data.newDisposition + uniqueUI2;
    // verify that edit and delete icon should be present for disposition(testData)
    editIconShldPrsnt(testData, dataTable, editIcon);
    deleteIconShldPrsnt(testData, dataTable, delIcon);
  });
};
export const verifyFilterDataWithDisabledAllowBtn = () => {
  /** Two modules for tags and dispositions have been added with applied filter and selected item into it.
     one module's allow button is enabled with all permissions, and for other one allow button is disabled
     and unchecked read checkbox */
  visit();
  cy.fixture('LoginCredentials').then((data) => {
    fillUsername(data.LEVEL_2_CHILD_1_USERNAME);
    fillPassword(data.validPassword);
  });
  submit();
  navigateToTagsPage();
  cy.wait(3000);
  // verify that (test data) tag should not present at tags page
  cy.fixture('Tags').then((data) => {
    testData = data.newTagsTitle + uniqueUI;
    elementWithTextNotExist(dataTable, testData);
  });
  clickDisposition();
  // verify that (testdata) disposition should not present at dipositions apge
  cy.fixture('Disposition').then((data) => {
    testData = data.newDisposition + uniqueUI;
    elementWithTextNotExist(dataTable, testData);
  });
};
