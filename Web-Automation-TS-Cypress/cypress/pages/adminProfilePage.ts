import {
  clearSearchFeed,
  clickContainingText,
  clickOn,
  elementWithTextNotExist,
  elementWithTextExist,
  fillText
} from '../utils/cypressMethod.util';
import {
  ADD_NEW,
  ADMIN_PROFILES,
  TEST_ADMIN_PROFILE,
  TEST_ORG,
  YES
} from '../utils/constants.util';
import {
  clickAdminProfile,
  clickHamburgerMenu,
  clickStaff,
  hamburgerMenuShldPrsnt
} from './home.page';
import { uniqueUI, uniqueUI2, uniqueUI3, uniqueUI4 } from './usersPage';
import { fillPassword, fillUsername, submit, visit } from './login.page';
import { delIcon, editIcon } from './multilevel';
import _ from 'lodash';
// import { data } from "cypress/types/jquery";

export const adminProfileBlock = 'div[class=\'admin-list-view\']';
export const adminProfileTable = 'div[class=\'ant-table-content\']';
const adminProfileTableHeader = 'thead[class=\'ant-table-thead\']>tr>th';
const adminProfileTableHeaderElmnt =
  'thead[class=\'ant-table-thead\']>tr>th>div>span';
const adminProfileId = 'td:nth-child(1)';
const adminProfileOrgHeader =
  ':nth-child(2) > .ant-table-filter-column > :nth-child(1) > .ant-table-column-sorters > .ant-table-column-title';
const adminProfileOrg = 'td:nth-child(2)';
const adminProfileTitleHeader =
  ':nth-child(2) > .ant-table-filter-column > :nth-child(1) > .ant-table-column-sorters > .ant-table-column-title';
const adminProfileTitle = 'td:nth-child(2)';
const adminProfileCreatedHeder =
  'div[class=\'ant-table-content\']>table>thead>tr>th:nth-of-type(3)';
const adminProfileCreated = 'td:nth-child(3)';
const deleteYesButton = 'div[class=\'ant-modal-confirm-content\']';
const apSearchIconOrgSuperAdmin =
  'thead[class=\'ant-table-thead\']>tr>th:nth-of-type(2)>div>span:nth-of-type(2)>span>svg';
const apSearchIconID =
  'thead[class=\'ant-table-thead\']>tr>th:nth-of-type(1)>div>span:nth-of-type(2)>span>svg';
const apSearchIconTitleSuperAdmin =
  'thead[class=\'ant-table-thead\']>tr>th:nth-of-type(3)>div>span:nth-of-type(2)>span>svg';
const apSearchIconTitle =
  'thead[class=\'ant-table-thead\']>tr>th:nth-of-type(3)>div>span:nth-of-type(2)>span>svg';
const apIdSearchField = 'input[placeholder=\'Search ID\']';
const apTitleSearchField = 'input[placeholder=\'Search Title\']';
const searchButton =
  'body.light:nth-child(2) div.ant-dropdown.ant-dropdown-placement-bottomRight div.ant-table-filter-dropdown div:nth-child(1) div.buttons button.ant-btn.ant-btn-primary.ant-btn-sm:nth-child(1) > span:nth-child(2)';
const apDisplayDeletedCheckBox = 'input[type=\'checkbox\']';
const apPageElement =
  'ul[class=\'ant-pagination ant-table-pagination ant-table-pagination-right\']>li';
let apUiId, testAdminProfile: string;
let testEditAdminProfile: string;
let testDelAdminProfile: string;
export const navigateToAdminProfilePage = () => {
  // validation for home page.
  hamburgerMenuShldPrsnt();
  clickHamburgerMenu();
  clickStaff();
  clickAdminProfile();
  // validation for admin profile page.
  adminProfileHeaderShldPrsnt();
};
export const clickAddNewAdminProfileButton = () => {
  // click on add new button to navigate to add admin profile page
  clickContainingText(adminProfileBlock, ADD_NEW);
};
export const adminProfileHeaderShldPrsnt = () => {
  // verify that admin profile header should present
  cy.wait(3000);
  elementWithTextExist(adminProfileBlock, ADMIN_PROFILES);
};
export const apAddNewButtonShldPrsnt = () => {
  // verify that add new button should exist
  elementWithTextExist(adminProfileBlock, ADD_NEW);
};
export const apAddNewButtonShldNotPrsnt = () => {
  // verify that add new button should not exist
  elementWithTextNotExist(adminProfileBlock, ADD_NEW);
};
export const apEditIconShldPrsnt = () => {
  // search admin profile and verify edit icon
  clearApAllSearchField();
  // search admin profile(title search)
  clickOn(apSearchIconTitle);
  cy.fixture('AdminProfiles').then((data) => {
    testAdminProfile = data.newAdminProfieTitle + uniqueUI;
    fillText(apTitleSearchField, testAdminProfile);
    cy.get(searchButton).eq(1).click({ force: true });
    // verify that admin profile should exist
    elementWithTextExist(adminProfileBlock, testAdminProfile);
    // verify that edit icon should esit
    cy.get(adminProfileBlock)
      .find('tr')
      .filter(`:contains(${testAdminProfile})`)
      .within(() => {
        cy.get(editIcon).should('exist');
      });
  });
};
export const apEditIconShldNotPrsnt = () => {
  // search admin profile and verify edit icon
  clearApAllSearchField();
  // search admin profile(title search)
  clickOn(apSearchIconTitle);
  cy.fixture('AdminProfiles').then((data) => {
    testAdminProfile = data.newAdminProfieTitle + uniqueUI;
    fillText(apTitleSearchField, testAdminProfile);
    cy.get(searchButton).eq(1).click({ force: true });
    // verify that admin profile should exist
    elementWithTextExist(adminProfileBlock, testAdminProfile);
    // verify that edit icon should not exist
    cy.get(adminProfileBlock)
      .find('tr')
      .filter(`:contains(${testAdminProfile})`)
      .within(() => {
        cy.get(editIcon).should('not.exist');
      });
  });
};
export const apDeleteIconShldPrsnt = () => {
  clearApAllSearchField();
  clickOn(apSearchIconTitle);
  cy.fixture('AdminProfiles').then((data) => {
    testAdminProfile = data.newAdminProfieTitle + uniqueUI;
    fillText(apTitleSearchField, testAdminProfile);
    cy.get(searchButton).eq(1).click({ force: true });
    elementWithTextExist(adminProfileBlock, testAdminProfile);
    cy.get(adminProfileBlock)
      .find('tr')
      .filter(`:contains(${testAdminProfile})`)
      .within(() => {
        cy.get(delIcon).should('exist');
      });
  });
};
export const apDeleteIconShldNotPrsnt = () => {
  clearApAllSearchField();
  clickOn(apSearchIconTitle);
  cy.fixture('AdminProfiles').then((data) => {
    testAdminProfile = data.newAdminProfieTitle + uniqueUI;
    fillText(apTitleSearchField, testAdminProfile);
    cy.get(searchButton).eq(1).click({ force: true });
    elementWithTextExist(adminProfileBlock, testAdminProfile);
    cy.get(adminProfileBlock)
      .find('tr')
      .filter(`:contains(${testAdminProfile})`)
      .within(() => {
        cy.get(delIcon).should('not.exist');
      });
  });
};
export const clickEditApForBug14 = () => {
  clearApAllSearchField();
  clickOn(apSearchIconTitle);
  cy.fixture('AdminProfiles').then((data) => {
    testAdminProfile = data.newAdminProfieTitle + uniqueUI3;
    fillText(apTitleSearchField, testAdminProfile);
    cy.get(searchButton).eq(1).click({ force: true });
    elementWithTextExist(adminProfileBlock, testAdminProfile);
    cy.get(adminProfileTable)
      .find('tr')
      .filter(`:contains(${testAdminProfile})`)
      .within(() => {
        cy.get(editIcon).click({ force: true });
      });
  });
};
export const clickEditAdminProfile = () => {
  clearApAllSearchField();
  clickOn(apSearchIconTitle);
  cy.fixture('AdminProfiles').then((data) => {
    testAdminProfile = data.newAdminProfieTitle + uniqueUI;
    fillText(apTitleSearchField, testAdminProfile);
    cy.get(searchButton).eq(1).click({ force: true });
    elementWithTextExist(adminProfileBlock, testAdminProfile);
    cy.get(adminProfileTable)
      .find('tr')
      .filter(`:contains(${testAdminProfile})`)
      .within(() => {
        cy.get(editIcon).click({ force: true });
      });
  });
};
export const clickEditApForPermissionInMultilevel = (uniqueUI) => {
  clearApAllSearchFieldforMultilevel();
  clickOn(apSearchIconTitleSuperAdmin);
  cy.fixture('AdminProfiles').then((data) => {
    testAdminProfile = data.newAdminProfieTitle + uniqueUI;
    fillText(apTitleSearchField, testAdminProfile);
    cy.get(searchButton).eq(1).click({ force: true });
    elementWithTextExist(adminProfileBlock, testAdminProfile);
    cy.get(adminProfileTable)
      .find('tr')
      .filter(`:contains(${testAdminProfile})`)
      .within(() => {
        cy.get(editIcon).click({ force: true });
      });
  });
};
export const clickEditApPermissionForSuperAdmin = () => {
  clearApAllSearchField();
  clickOn(apSearchIconTitle);
  fillText(apTitleSearchField, TEST_ADMIN_PROFILE);
  cy.get(searchButton).eq(2).click({ force: true });
  elementWithTextExist(adminProfileBlock, TEST_ADMIN_PROFILE);
  cy.get(adminProfileTable)
    .find('tr')
    .filter(`:contains(${TEST_ADMIN_PROFILE})`)
    .within(() => {
      cy.get(editIcon).click({ force: true });
    });
};
export const clickeditApForPermission = () => {
  clearApAllSearchField();
  clickOn(apSearchIconTitle);
  fillText(apTitleSearchField, TEST_ADMIN_PROFILE);
  cy.get(searchButton).eq(1).click({ force: true });
  elementWithTextExist(adminProfileBlock, TEST_ADMIN_PROFILE);
  cy.get(adminProfileTable)
    .find('tr')
    .filter(`:contains(${TEST_ADMIN_PROFILE})`)
    .within(() => {
      cy.get(editIcon).click({ force: true });
    });
};
export const clickEditAdminProfileForPOC = () => {
  clearApAllSearchField();
  clickOn(apSearchIconTitle);
  cy.fixture('AdminProfiles').then((data) => {
    fillText(apTitleSearchField, data.adminProfilePOC);
  });
  cy.get(searchButton).eq(1).click({ force: true });
  cy.fixture('AdminProfiles').then((data) => {
    elementWithTextExist(adminProfileBlock, data.adminProfilePOC);
  });
  cy.fixture('AdminProfiles').then((data) => {
    testEditAdminProfile = data.adminProfilePOC;
    cy.get(adminProfileTable)
      .find('tr')
      .filter(`:contains(${testEditAdminProfile})`)
      .within(() => {
        cy.get(editIcon).click({ force: true });
      });
  });
};
export const deleteAdminProfileForPermission = () => {
  clearApAllSearchField();
  clickOn(apSearchIconTitle);
  cy.fixture('AdminProfiles').then((data) => {
    testDelAdminProfile = data.newAdminProfieTitle + uniqueUI;
    fillText(apTitleSearchField, testDelAdminProfile);
    cy.get(searchButton).eq(1).click({ force: true });
    elementWithTextExist(adminProfileBlock, testDelAdminProfile);
    cy.get(adminProfileTable)
      .find('tr')
      .filter(`:contains(${testDelAdminProfile})`)
      .within(() => {
        cy.get(delIcon).click({ force: true });
      });
    clickContainingText(deleteYesButton, YES);
  });
  clearApAllSearchField();
};
export const deleteAdminProfile = () => {
  clearApAllSearchField();
  clickOn(apSearchIconTitle);
  cy.fixture('AdminProfiles').then((data) => {
    testDelAdminProfile = data.editAdminProfileTitle + uniqueUI;
    fillText(apTitleSearchField, testDelAdminProfile);
    cy.get(searchButton).eq(1).click({ force: true });
    elementWithTextExist(adminProfileBlock, testDelAdminProfile);
    cy.get(adminProfileTable)
      .find('tr')
      .filter(`:contains(${testDelAdminProfile})`)
      .within(() => {
        cy.get(delIcon).click({ force: true });
      });
    clickContainingText(deleteYesButton, YES);
  });
  clearApAllSearchField();
};
export const clearApAllSearchField = () => {
  clearSearchFeed(apSearchIconID, apIdSearchField, searchButton, '0');
  clearSearchFeed(apSearchIconTitle, apTitleSearchField, searchButton, '1'); // for admin only
  /*
    clearSearchFeed(apSearchIconTitleSuperAdmin,apTitleSearchField,searchButton,'2');
    clickOn(apSearchIconOrgSuperAdmin);
     cy.fixture('AdminProfiles').then((data)=>{
     cy.contains(data.searchOrg).uncheck();
     })
     cy.get(searchButton).eq(1).click({force:true}); */ // for super admin only
};
export const searchApById = () => {
  clearApAllSearchField();
  clickOn(apSearchIconTitle);
  cy.fixture('AdminProfiles').then((data) => {
    testAdminProfile = data.editAdminProfileTitle + uniqueUI;
    fillText(apTitleSearchField, testAdminProfile);
    cy.get(searchButton).eq(1).click({ force: true });
    elementWithTextExist(adminProfileBlock, testAdminProfile);
  });
  cy.get(adminProfileId)
    .eq(0)
    .invoke('text')
    .then((textId) => {
      apUiId = textId;
      clearApAllSearchField();
      clickOn(apSearchIconID);
      fillText(apIdSearchField, apUiId);
      cy.get(searchButton).eq(0).click({ force: true });
      elementWithTextExist(adminProfileBlock, apUiId);
    });
  clearApAllSearchField();
};
export const searchApByTitle = () => {
  clearApAllSearchField();
  clickOn(apSearchIconTitle);
  cy.fixture('AdminProfiles').then((data) => {
    testAdminProfile = data.editAdminProfileTitle + uniqueUI;
    fillText(apTitleSearchField, testAdminProfile);
    cy.get(searchButton).eq(1).click({ force: true });
    elementWithTextExist(adminProfileBlock, testAdminProfile);
  });
  clearApAllSearchField();
};
export const searchApByOrg = () => {
  clearApAllSearchField();
  clickOn(apSearchIconOrgSuperAdmin);
  // check box from dropdown
  cy.contains(TEST_ORG).check();
  cy.get(searchButton).eq(1).click({ force: true });
  elementWithTextExist(adminProfileBlock, TEST_ORG);
};
export const validateAddAdminProfile = () => {
  clearApAllSearchField();
  clickOn(apSearchIconTitle);
  cy.fixture('AdminProfiles').then((data) => {
    testAdminProfile = data.newAdminProfieTitle + uniqueUI;
    fillText(apTitleSearchField, testAdminProfile);
    cy.get(searchButton).eq(1).click({ force: true });
    elementWithTextExist(adminProfileBlock, testAdminProfile);
  });
  clearApAllSearchField();
};
export const validateEditAdminProfile = () => {
  clearApAllSearchField();
  clickOn(apSearchIconTitle);
  cy.fixture('AdminProfiles').then((data) => {
    testAdminProfile = data.editAdminProfileTitle + uniqueUI;
    fillText(apTitleSearchField, testAdminProfile);
    cy.get(searchButton).eq(1).click({ force: true });
    elementWithTextExist(adminProfileBlock, testAdminProfile);
  });
  clearApAllSearchField();
};
export const validateDeleteAdminProfile = () => {
  clearApAllSearchField();
  clickOn(apSearchIconTitle);
  cy.fixture('AdminProfiles').then((data) => {
    testAdminProfile = data.editAdminProfileTitle + uniqueUI;
    fillText(apTitleSearchField, testAdminProfile);
    cy.get(searchButton).eq(1).click({ force: true });
    elementWithTextNotExist(adminProfileBlock, testAdminProfile);
  });
  clearApAllSearchField();
};
export const adminProfileDisplayDeleted = () => {
  clearApAllSearchField();
  cy.get(apDisplayDeletedCheckBox).check();
  clickOn(apSearchIconTitle);
  cy.fixture('AdminProfiles').then((data) => {
    testAdminProfile = data.editAdminProfileTitle + uniqueUI;
    fillText(apTitleSearchField, testAdminProfile);
    cy.get(searchButton).eq(1).click({ force: true });
    elementWithTextExist(adminProfileBlock, testAdminProfile);
    cy.get(apDisplayDeletedCheckBox).uncheck();
    cy.get(searchButton).eq(1).click({ force: true });
    elementWithTextNotExist(adminProfileBlock, testAdminProfile);
  });
  clearApAllSearchField();
};
// edit and delete icon should not be present for deleted items.
export const deletedApEditDelIconBug31 = () => {
  clickAdminProfile();
  cy.wait(3000);
  adminProfileHeaderShldPrsnt();
  clearApAllSearchField();
  cy.get(apDisplayDeletedCheckBox).check();
  clickOn(apSearchIconTitle);
  cy.fixture('AdminProfiles').then((data) => {
    testAdminProfile = data.editAdminProfileTitle + uniqueUI;
    fillText(apTitleSearchField, testAdminProfile);
    cy.get(searchButton).eq(1).click({ force: true });
    elementWithTextExist(adminProfileBlock, testAdminProfile);
    apEditIconShldNotPrsnt();
    apDeleteIconShldNotPrsnt();
  });
};
export const sortApByID = () => {
  cy.get(adminProfileTable)
    .get(adminProfileTableHeader)
    .should('have.length', 5);
  const toStringsInit = (cells$) => _.map(cells$, 'textContent');
  const toNumbersInit = (ids) => _.map(ids, Number);
  cy.get(adminProfileId)
    .then(toStringsInit)
    .then(toNumbersInit)
    .then((ids) => {
      console.log(ids);
      // confirm prices are sorted
      // by sorting them ourselves
      // and comparing with the input list
      const sorted = _.sortBy(ids).reverse();
      expect(ids, 'cells are sorted').to.deep.equal(sorted);
    });
  // for descending
  cy.get(adminProfileTableHeaderElmnt).eq(0).click();
  // verify the prices in the column are indeed in sorted order
  // const toStrings = (cells$) => _.map(cells$, 'textContent')
  // const toNumbers = (ids) => _.map(ids, Number)
  const toStrings = (cells$) => _.map(cells$, 'textContent');
  const toNumbers = (ids) => _.map(ids, Number);
  cy.get(adminProfileId)
    .then(toStrings)
    .then(toNumbers)
    .then((ids) => {
      // confirm prices are sorted
      // by sorting them ourselves
      // and comparing with the input list
      const sorted = _.sortBy(ids).reverse();
      expect(ids, 'cells are sorted').to.deep.equal(sorted);
      // for ascending
      cy.get(adminProfileTableHeaderElmnt).eq(0).click();
      const toStrings = (cells$) => _.map(cells$, 'textContent');
      const toNumbers = (ids) => _.map(ids, Number);
      cy.get(adminProfileId)
        .then(toStrings)
        .then(toNumbers)
        .then((ids) => {
          // confirm prices are sorted
          // by sorting them ourselves
          // and comparing with the input list
          const sorted = _.sortBy(ids);
          expect(ids, 'cells are sorted').to.deep.equal(sorted);
        });
    });
};
export const sortApByOrga = () => {
  // Verify sorting in descending
  cy.get(adminProfileOrgHeader).click();
  cy.get(adminProfileOrg).then((items) => {
    const unsortedItems = items
      .map((index, html) => Cypress.$(html).text())
      .get();
    // console.log(unsortedItems)
    const sortedItems = unsortedItems.sort().reverse();
    // console.log(sortedItems)
    expect(unsortedItems, 'Items are sorted').to.deep.equal(sortedItems);
  });
  // Verify sorting in ascending
  cy.get(adminProfileOrgHeader).click();
  cy.get(adminProfileOrg).then((items) => {
    const unsortedItems = items
      .map((index, html) => Cypress.$(html).text())
      .get();
    // console.log(unsortedItems)
    const sortedItems = unsortedItems.sort();
    // console.log(sortedItems)
    expect(unsortedItems, 'Items are sorted').to.deep.equal(sortedItems);
  });
};
export const sortApBytitle = () => {
  // Verify sorting in descending
  cy.get(adminProfileTitleHeader).click();
  cy.get(adminProfileTitle).then((items) => {
    const unsortedItems = items
      .map((index, html) => Cypress.$(html).text())
      .get();
    console.log(unsortedItems);
    const sortedItems = unsortedItems.sort(); // .reverse();
    console.log(sortedItems);
    expect(unsortedItems, 'Items are sorted').to.deep.equal(sortedItems);
  });
  // Verify sorting in ascending
  cy.get(adminProfileTitleHeader).click();
  cy.get(adminProfileTitle).then((items) => {
    const unsortedItems = items
      .map((index, html) => Cypress.$(html).text())
      .get();
    // console.log(unsortedItems)
    const sortedItems = unsortedItems.sort();
    // console.log(sortedItems)
    expect(unsortedItems, 'Items are sorted').to.deep.equal(sortedItems);
  });
};
export const sortApByTime = () => {
  // verify sorting in decending
  cy.get(adminProfileCreatedHeder).click();
  cy.get(adminProfileCreated).then((items) => {
    const unsortedItems = items
      .map((index, html) => Cypress.$(html).text())
      .get();
    console.log('Unsorted Items : ', unsortedItems);
    const sortedItems = unsortedItems.sort(); // .reverse();
    console.log('Sorted Items : ', sortedItems);
    expect(unsortedItems, 'Items are sorted').to.deep.equal(sortedItems);
  });
  // Verify sorting in ascending
  cy.get(adminProfileCreatedHeder).click();
  cy.get(adminProfileCreated).then((items) => {
    const unsortedItems = items
      .map((index, html) => Cypress.$(html).text())
      .get();
    console.log('Unsorted item :', unsortedItems);
    const sortedItems = unsortedItems.sort().reverse();
    console.log('Sorted items :', sortedItems);
    expect(unsortedItems, 'Items are sorted').to.deep.equal(sortedItems);
  });
};
export const paginationOnAdminProfilePage = () => {
  cy.get(apDisplayDeletedCheckBox).check();
  cy.get(apPageElement).click({ multiple: true });
  cy.get(apDisplayDeletedCheckBox).uncheck();
  cy.get(apPageElement).click({ multiple: true });
};
export const clearApAllSearchFieldforMultilevel = () => {
  clearSearchFeed(apSearchIconID, apIdSearchField, searchButton, '0');
  // clearSearchFeed(apSearchIconTitle,apTitleSearchField,searchButton,'1'); // for admin only
  cy.get(apSearchIconTitleSuperAdmin, { timeout: 10000 }).click({
    force: true
  });
  cy.get(apTitleSearchField, { timeout: 10000 })
    .clear({ force: true })
    .type('{enter}');
  //    clearSearchFeed(apSearchIconTitleSuperAdmin,apTitleSearchField,searchButton,'2');
  //    clickOn(apSearchIconOrgSuperAdmin);
};
export const deleteAdminProfileForPermissionInMultilevel = () => {
  visit();
  cy.fixture('LoginCredentials').then((data) => {
    fillUsername(data.LEVEL_1_USERNAME);
    fillPassword(data.validPassword);
  });
  submit();
  cy.wait(5000);
  navigateToAdminProfilePage();
  clearApAllSearchFieldforMultilevel();
  // Delete ap for level1
  clickOn(apSearchIconTitleSuperAdmin);
  cy.fixture('AdminProfiles').then((data) => {
    testDelAdminProfile = data.newAdminProfieTitle + uniqueUI;
    fillText(apTitleSearchField, testDelAdminProfile);
    cy.get(searchButton).eq(1).click({ force: true });
    elementWithTextExist(adminProfileBlock, testDelAdminProfile);
    cy.get(adminProfileTable)
      .find('tr')
      .filter(`:contains(${testDelAdminProfile})`)
      .within(() => {
        cy.get(delIcon).click({ force: true });
      });
    clickContainingText(deleteYesButton, YES);
  });
  clearApAllSearchFieldforMultilevel();
  // Delete ap for level2 child 1
  clickOn(apSearchIconTitleSuperAdmin);
  cy.fixture('AdminProfiles').then((data) => {
    testDelAdminProfile = data.newAdminProfieTitle + uniqueUI2;
    fillText(apTitleSearchField, testDelAdminProfile);
    cy.get(searchButton).eq(1).click({ force: true });
    elementWithTextExist(adminProfileBlock, testDelAdminProfile);
    cy.get(adminProfileTable)
      .find('tr')
      .filter(`:contains(${testDelAdminProfile})`)
      .within(() => {
        cy.get(delIcon).click({ force: true });
      });
    clickContainingText(deleteYesButton, YES);
  });
  clearApAllSearchFieldforMultilevel();
  // Delete ap for level 2 child 2
  clickOn(apSearchIconTitleSuperAdmin);
  cy.fixture('AdminProfiles').then((data) => {
    testDelAdminProfile = data.newAdminProfieTitle + uniqueUI3;
    fillText(apTitleSearchField, testDelAdminProfile);
    cy.get(searchButton).eq(1).click({ force: true });
    elementWithTextExist(adminProfileBlock, testDelAdminProfile);
    cy.get(adminProfileTable)
      .find('tr')
      .filter(`:contains(${testDelAdminProfile})`)
      .within(() => {
        cy.get(delIcon).click({ force: true });
      });
    clickContainingText(deleteYesButton, YES);
  });
  clearApAllSearchFieldforMultilevel();
  // Delete ap for level 3
  clickOn(apSearchIconTitleSuperAdmin);
  cy.fixture('AdminProfiles').then((data) => {
    testDelAdminProfile = data.newAdminProfieTitle + uniqueUI4;
    fillText(apTitleSearchField, testDelAdminProfile);
    cy.get(searchButton).eq(1).click({ force: true });
    elementWithTextExist(adminProfileBlock, testDelAdminProfile);
    cy.get(adminProfileTable)
      .find('tr')
      .filter(`:contains(${testDelAdminProfile})`)
      .within(() => {
        cy.get(delIcon).click({ force: true });
      });
    clickContainingText(deleteYesButton, YES);
  });
  clearApAllSearchFieldforMultilevel();
};
