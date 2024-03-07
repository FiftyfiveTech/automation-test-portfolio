import _ from 'lodash';
import {
  clearSearchFeed,
  clickContainingText,
  clickOn,
  clickResetFilter,
  elementWithTextNotExist,
  elementWithTextExist,
  fillText
} from '../utils/cypressMethod.util';
import { ADD_NEW, DISPOSITIONS, NO, YES } from '../utils/constants.util';
import {
  addDispositionForBug,
  navigateToAddDisposPage
} from './addDispositionsPage';
import {
  navigateToEditDispositionPage,
  selectParentForDispos
} from './editDispositionsPage';
import {
  clickDisposition,
  clickHamburgerMenu,
  clickTools,
  hamburgerMenuShldPrsnt as hamburgerMenuShouldBePresent
} from './home.page';
import {
  fillPassword,
  fillUsername,
  redirectForUserLogin,
  submit,
  visit
} from './login.page';
import { delIcon } from './multilevel';
import { uniqueUI, uniqueUI2, uniqueUI3, uniqueUI4 } from './usersPage';

const dispositionBlock = 'div[class=\'content-children-wrp\']';
const disposTableSorting = 'div[class=\'ant-table-content\']';
const disposTableHeader = 'thead[class=\'ant-table-thead\']>tr>th';
const disposTableHeaderElmnt = 'thead[class=\'ant-table-thead\']>tr>th>div>span';
const dispositionId = 'td:nth-child(1)';
const dispositionTitleHeader =
  ':nth-child(2) > .ant-table-filter-column > :nth-child(1) > .ant-table-column-sorters > .ant-table-column-title';
const dispositionTitle = 'td:nth-child(2)';
const dispositionCreatedHeader =
  'div[class=\'ant-table-content\']>table>thead>tr>th:nth-of-type(4)';
const dispositionCreated = 'td:nth-child(4)';
const deleteIcon =
  'tbody[class=\'ant-table-tbody\']>tr>td:nth-of-type(6)>div>div:nth-of-type(2)>span>svg';
const dispositionTable = 'table[style=\'table-layout: auto;\']';
const dispositionEditDelIcon =
  'td[class=\'ant-table-cell\']>div>div>span>svg>path';
const disposEditIcon =
  'td[class=\'ant-table-cell\']>div>div>span>svg>path[d=\'M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z\']';
const disposDelIcon =
  'td[class=\'ant-table-cell\']>div>div>span>svg>path[d=\'M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2\']';
const disposDeleteBlock = 'div[class=\'ant-modal-confirm-body-wrapper\']';
const disposSearchIconId =
  'thead[class=\'ant-table-thead\']>tr>th:nth-of-type(1)>div>span:nth-of-type(2)>span>svg';
const disposSearchIconTitleMultiLevel =
  'thead[class=\'ant-table-thead\']>tr>th:nth-of-type(3)>div>span:nth-of-type(2)>span>svg';
const disposSearchIconTitle =
  'thead[class=\'ant-table-thead\']>tr>th:nth-of-type(3)>div>span:nth-of-type(2)>span>svg';
const disposSearchIconGlobal =
  'thead[class=\'ant-table-thead\']>tr>th:nth-of-type(3)>div>span:nth-of-type(2)>span>svg';
const disposIdSearchField = 'input[placeholder=\'Search ID\']';
const disposTitleSearchField = 'input[placeholder=\'Search Title\']';
// const disposGlobalSearch=""
const checkBox = 'input[type=\'checkbox\']';
const disposPageElement =
  'ul[class=\'ant-pagination ant-table-pagination ant-table-pagination-right\']>li';
const searchButton =
  'body.light:nth-child(2) div.ant-dropdown.ant-dropdown-placement-bottomRight div.ant-table-filter-dropdown div:nth-child(1) div.buttons button.ant-btn.ant-btn-primary.ant-btn-sm:nth-child(1) > span:nth-child(2)';
const noDataLabel = 'td:nth-child(1)>div>div:nth-child(2)';
export let testDisposition: string,
  titleSearchDispos: string,
  disposUiId: string;
export const navigateToDispositionPage = (): void => {
  hamburgerMenuShouldBePresent();
  clickHamburgerMenu();
  clickTools();
  clickDisposition();
  dispositionsPageHeaderShouldPresent();
};
export const dispositionsPageHeaderShouldPresent = () => {
  elementWithTextExist(dispositionBlock, DISPOSITIONS);
};
export const disposAddNewButtonShldPrsnt = () => {
  elementWithTextExist(dispositionBlock, ADD_NEW);
};
export const disposAddNewButtonShldNotPrsnt = () => {
  elementWithTextNotExist(dispositionBlock, ADD_NEW);
};
export const disposEditIconShldPrsnt = () => {
  cy.fixture('Disposition').then((data) => {
    testDisposition = data.newDisposition + uniqueUI;
    cy.get(dispositionBlock)
      .filter(`:contains(${testDisposition})`)
      .within(() => {
        cy.get(disposEditIcon).should('exist');
      });
  });
};
export const disposEditIconShldNotPrsnt = () => {
  clearDisposAllSearchField();
  clickOn(disposSearchIconTitle);
  cy.fixture('Disposition').then((data) => {
    testDisposition = data.newDisposition + uniqueUI;
    fillText(disposTitleSearchField, testDisposition);
    cy.get(searchButton).eq(1).click({ force: true });
    elementWithTextExist(dispositionBlock, testDisposition);
    cy.get(dispositionBlock)
      .filter(`:contains(${testDisposition})`)
      .within(() => {
        cy.get(disposEditIcon).should('not.exist');
      });
  });
};
export const disposDeleteIconShldPrsnt = () => {
  cy.fixture('Disposition').then((data) => {
    testDisposition = data.newDisposition + uniqueUI;
    cy.get(dispositionBlock)
      .filter(`:contains(${testDisposition})`)
      .within(() => {
        cy.get(disposDelIcon).should('exist');
      });
  });
};
export const disposDeleteIconShldNotPrsnt = () => {
  cy.fixture('Disposition').then((data) => {
    testDisposition = data.newDisposition + uniqueUI;
    cy.get(dispositionBlock)
      .filter(`:contains(${testDisposition})`)
      .within(() => {
        cy.get(disposDelIcon).should('not.exist');
      });
  });
};
export const clickAddNewDispositionButton = () => {
  clickContainingText(dispositionBlock, ADD_NEW);
};
export const clickEditDisposition = () => {
  clearDisposAllSearchField();
  clickOn(disposSearchIconTitle);
  cy.fixture('Disposition').then((data) => {
    testDisposition = data.newDisposition + uniqueUI;
    fillText(disposTitleSearchField, testDisposition);
    cy.get(searchButton).eq(1).click({ force: true });
    cy.wait(3000);
    elementWithTextExist(dispositionBlock, testDisposition);
    cy.get(dispositionTable)
      .filter(`:contains(${testDisposition})`)
      .within(() => {
        cy.get(dispositionEditDelIcon).eq(0).click({ force: true });
      });
  });
  // clearDisposAllSearchField();
};
export const deleteDisposition = () => {
  clearDisposAllSearchField();
  clickOn(disposSearchIconTitle);
  cy.fixture('Disposition').then((data) => {
    testDisposition = data.editDisposition + uniqueUI;
    fillText(disposTitleSearchField, testDisposition);
    cy.get(searchButton).eq(1).click({ force: true });
    elementWithTextExist(dispositionBlock, testDisposition);
    cy.get(dispositionTable)
      .filter(`:contains(${testDisposition})`)
      .within(() => {
        cy.get(dispositionEditDelIcon).eq(1).click({ force: true });
      });
    clickContainingText(disposDeleteBlock, YES);
  });
  clearDisposAllSearchField();
};
export const deleteDisposForPermission = () => {
  clearDisposAllSearchField();
  clickOn(disposSearchIconTitle);
  cy.fixture('Disposition').then((data) => {
    testDisposition = data.newDisposition + uniqueUI;
    fillText(disposTitleSearchField, testDisposition);
    cy.get(searchButton).eq(1).click({ force: true });
    elementWithTextExist(dispositionBlock, testDisposition);
    cy.get(dispositionTable)
      .filter(`:contains(${testDisposition})`)
      .within(() => {
        cy.get(dispositionEditDelIcon).eq(1).click({ force: true });
      });
    clickContainingText(disposDeleteBlock, YES);
  });
  clearDisposAllSearchField();
};
export const displayDeletedDispos = () => {
  clearDisposAllSearchField();
  cy.get(checkBox).eq(0).check();
  clickOn(disposSearchIconTitle);
  cy.fixture('Disposition').then((data) => {
    testDisposition = data.editDisposition + uniqueUI;
    fillText(disposTitleSearchField, testDisposition);
    cy.get(searchButton).eq(1).click({ force: true });
    elementWithTextExist(dispositionBlock, testDisposition);
    cy.get(checkBox).eq(0).uncheck();
    elementWithTextNotExist(dispositionBlock, testDisposition);
  });
  clearDisposAllSearchField();
};
export const clearDisposAllSearchField = () => {
  clearSearchFeed(disposSearchIconId, disposIdSearchField, searchButton, '0');
  clearSearchFeed(
    disposSearchIconTitle,
    disposTitleSearchField,
    searchButton,
    '1'
  );
  // clickOn(disposSearchIconGlobal);
  // cy.get(checkBox).eq(1).uncheck();
  // cy.get(checkBox).eq(2).uncheck();
  // cy.get(searchButton).eq(2).click({force:true});
};
export const clearDisposAllSearchFieldForMultiLevel = () => {
  clearSearchFeed(disposSearchIconId, disposIdSearchField, searchButton, '0');
  clearSearchFeed(
    disposSearchIconTitleMultiLevel,
    disposTitleSearchField,
    searchButton,
    '1'
  );
};
export const searchDisposById = () => {
  clearDisposAllSearchField();
  clickOn(disposSearchIconTitle);
  cy.fixture('Disposition').then((data) => {
    testDisposition = data.editDisposition + uniqueUI;
    fillText(disposTitleSearchField, testDisposition);
    cy.get(searchButton).eq(1).click({ force: true });
    elementWithTextExist(dispositionBlock, testDisposition);
  });
  cy.get(dispositionId)
    .eq(0)
    .invoke('text')
    .then((textId) => {
      disposUiId = textId;
      clearDisposAllSearchField();
      clickOn(disposSearchIconId);
      fillText(disposIdSearchField, disposUiId);
      cy.get(searchButton).eq(0).click({ force: true });
      elementWithTextExist(dispositionBlock, disposUiId);
    });
  clearDisposAllSearchField();
};
export const searchDisposByTitle = () => {
  clearDisposAllSearchField();
  clickOn(disposSearchIconTitle);
  cy.fixture('Disposition').then((data) => {
    testDisposition = data.editDisposition + uniqueUI;
    fillText(disposTitleSearchField, testDisposition);
    cy.get(searchButton).eq(1).click({ force: true });
    elementWithTextExist(dispositionBlock, testDisposition);
  });
  clearDisposAllSearchField();
};
export const searchDisposByGlobal = () => {
  clearDisposAllSearchField();
  clickOn(disposSearchIconGlobal);
  cy.get(checkBox).eq(1).uncheck({ force: true });
  cy.get(checkBox).eq(2).check({ force: true });
  cy.get(searchButton).eq(2).click({ force: true });
  elementWithTextNotExist(dispositionBlock, YES);
  clickOn(disposSearchIconGlobal);
  cy.get(checkBox).eq(1).check();
  cy.get(checkBox).eq(2).uncheck({ force: true });
  cy.get(searchButton).eq(2).click({ force: true });
  elementWithTextNotExist(dispositionBlock, NO);
  cy.get(checkBox).eq(1).uncheck({ force: true });
  cy.get(checkBox).eq(2).uncheck({ force: true });
  cy.get(searchButton).eq(2).click({ force: true });
  clearDisposAllSearchField();
};
export const validateAddDispos = () => {
  // verify that disposition has been added successfully
  clearDisposAllSearchField();
  // search disposition( title search) by clicking search icon
  clickOn(disposSearchIconTitle);
  cy.fixture('Disposition').then((data) => {
    titleSearchDispos = data.newDisposition + uniqueUI;
    fillText(disposTitleSearchField, titleSearchDispos);
    // click on search button( all search button traced by positioning)
    cy.get(searchButton).eq(1).click({ force: true });
    titleSearchDispos = data.newDisposition + uniqueUI;
    // search validation
    elementWithTextExist(dispositionBlock, titleSearchDispos);
  });
  // clear all search filter
  clickResetFilter();
};
export const validateEditDispos = () => {
  // verify that disposition has been edited successfully
  clearDisposAllSearchField();
  // search disposition( title search) by clicking search icon
  clickOn(disposSearchIconTitle);
  cy.fixture('Disposition').then((data) => {
    titleSearchDispos = data.editDisposition + uniqueUI;
    fillText(disposTitleSearchField, titleSearchDispos);
    // click on search button( all search button traced by positioning)
    cy.get(searchButton).eq(1).click({ force: true });
    titleSearchDispos = data.editDisposition + uniqueUI;
    // search validation
    elementWithTextExist(dispositionBlock, titleSearchDispos);
  });
  // clear all search filter
  clickResetFilter();
};
export const validateDeleteDispo = () => {
  // verify that disposition has been deleted successfully
  clearDisposAllSearchField();
  // search disposition( title search) by clicking search icon
  clickOn(disposSearchIconTitle);
  cy.fixture('Disposition').then((data) => {
    titleSearchDispos = data.editDisposition + uniqueUI;
    fillText(disposTitleSearchField, titleSearchDispos);
  });
  // click on search button( all search button traced by positioning)
  cy.get(searchButton).eq(1).click({ force: true });
  cy.fixture('Disposition').then((data) => {
    titleSearchDispos = data.editDisposition + uniqueUI;
    // search validation
    cy.get(dispositionBlock).contains(titleSearchDispos).should('not.exist');
  });
  // clear all search filter
  clickResetFilter();
};
export const sortDisposByID = () => {
  // clickContainingText(menuSubmenuBlock,DISPOSITIONS);
  cy.wait(2000);
  cy.get(disposTableSorting).get(disposTableHeader).should('have.length', 5);
  const toStringsInit = (cells$) => _.map(cells$, 'textContent');
  const toNumbersInit = (ids) => _.map(ids, Number);
  cy.get(dispositionId)
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
  cy.get(disposTableHeaderElmnt).eq(0).click();
  // verify the prices in the column are indeed in sorted order
  const toStrings = (cells$) => _.map(cells$, 'textContent');
  const toNumbers = (ids) => _.map(ids, Number);
  cy.get(dispositionId)
    .then(toStrings)
    .then(toNumbers)
    .then((ids) => {
      // confirm prices are sorted
      // by sorting them ourselves
      // and comparing with the input list
      console.log(ids);
      const sorted = _.sortBy(ids).reverse();
      expect(ids, 'cells are sorted').to.deep.equal(sorted);
      // for ascending
      cy.get(disposTableHeaderElmnt).eq(0).click();
      const toStrings = (cells$) => _.map(cells$, 'textContent');
      const toNumbers = (ids) => _.map(ids, Number);
      cy.get(dispositionId)
        .then(toStrings)
        .then(toNumbers)
        .then((ids) => {
          console.log(ids);
          // confirm prices are sorted
          // by sorting them ourselves
          // and comparing with the input list
          const sorted = _.sortBy(ids);
          console.log(sorted);
          expect(ids, 'cells are sorted').to.deep.equal(sorted);
        });
    });
};
export const sortDisposBytitle = () => {
  // Verify sorting in descending
  cy.get(dispositionTitleHeader).click();
  cy.get(dispositionTitle).then((items) => {
    const unsortedItems = items
      .map((index, html) => Cypress.$(html).text())
      .get();
    console.log(unsortedItems);
    const sortedItems = unsortedItems.sort().reverse();
    console.log(sortedItems);
    expect(unsortedItems, 'Items are sorted').to.deep.equal(sortedItems);
  });
  // Verify sorting in ascending
  cy.get(dispositionTitleHeader).click();
  cy.get(dispositionTitle).then((items) => {
    const unsortedItems = items
      .map((index, html) => Cypress.$(html).text())
      .get();
    console.log(unsortedItems);
    const sortedItems = unsortedItems.sort();
    console.log(sortedItems);
    expect(unsortedItems, 'Items are sorted').to.deep.equal(sortedItems);
  });
};
export const sortDisposByTime = () => {
  // verify sorting in decending
  cy.get(dispositionCreatedHeader).click();
  cy.get(dispositionCreated).then((items) => {
    const unsortedItems = items
      .map((index, html) => Cypress.$(html).text())
      .get();
    console.log('Unsorted Items : ', unsortedItems);
    const sortedItems = unsortedItems.sort(); // .reverse();
    console.log('Sorted Items : ', sortedItems);
    expect(unsortedItems, 'Items are sorted').to.deep.equal(sortedItems);
  });
  // Verify sorting in ascending
  cy.get(dispositionCreatedHeader).click();
  cy.get(dispositionCreated).then((items) => {
    const unsortedItems = items
      .map((index, html) => Cypress.$(html).text())
      .get();
    console.log('Unsorted item :', unsortedItems);
    const sortedItems = unsortedItems.sort().reverse();
    console.log('Sorted items :', sortedItems);
    expect(unsortedItems, 'Items are sorted').to.deep.equal(sortedItems);
  });
};
export const paginationOnDispositionPage = () => {
  // cy.get(checkBox).eq(0).check();
  cy.get(disposPageElement).click({ multiple: true });
};
export const searchDisposIdForBug43 = () => {
  clearDisposAllSearchField();
  // display deleted check box
  cy.get(checkBox).eq(0).check();
  // search disposition (title search)
  clickOn(disposSearchIconTitle);
  cy.fixture('Disposition').then((data) => {
    testDisposition = data.editDisposition + uniqueUI;
    fillText(disposTitleSearchField, testDisposition);
    cy.get(searchButton).eq(1).click({ force: true });
    // search validation
    elementWithTextExist(dispositionBlock, testDisposition);
  });
  // get id from search disposition by invoking id text
  cy.get(dispositionId)
    .eq(0)
    .invoke('text')
    .then((textId) => {
      // assign it with a veriable myId
      const myId = textId;
      clearDisposAllSearchField();
      // search disposition (id search)
      clickOn(disposSearchIconId);
      // pass the variable (myId) assign with id
      fillText(disposIdSearchField, myId);
      cy.get(searchButton).eq(0).click({ force: true });
      // validate that only item should exist after search
      cy.get(dispositionId).should('have.length.below', 2);
      cy.get('body', { timeout: 20000 }).then(($body) => {
        if (($body.find(noDataLabel).length === 1)) {
          // evaluates as true if button exists at all
        } else {
          cy.get(dispositionId).should('have.text', myId);
        }
      });
      // divide above id by 10 to get a different id and search it
      let subId = +myId / 10;
      // lowest near iteger value
      subId = Math.floor(subId);
      clearDisposAllSearchField();
      clickOn(disposSearchIconId);
      // search disposition by id
      fillText(disposIdSearchField, subId);
      cy.get(searchButton).eq(0).click({ force: true });
      // varify that searched id should be one or none(dispositionId always have one value, so we validated it with 2 )
      cy.get(dispositionId).should('have.length.below', 2);
      cy.get('body', { timeout: 20000 }).then(($body) => {
        if ($body.find(noDataLabel).length === 1) {
          // evaluates as true if button exists at all
        } else {
          expect(dispositionId).to.be.eq(subId);
        }
      });
    });
  clearDisposAllSearchField();
};
export const editDisposParentBug42 = () => {
  redirectForUserLogin();
  navigateToDispositionPage();
  navigateToAddDisposPage();
  addDispositionForBug();
  cy.reload();
  redirectForUserLogin();
  // edit disposition to select parent
  navigateToDispositionPage();
  navigateToEditDispositionPage();
  selectParentForDispos();
  // verify that disposition had been edited succesfully and exist at disposition page
  clearDisposAllSearchField();
  clickOn(disposSearchIconTitle);
  cy.fixture('Disposition').then((data) => {
    testDisposition = data.newDisposition + uniqueUI;
    fillText(disposTitleSearchField, testDisposition);
    cy.get(searchButton).eq(1).click({ force: true });
    elementWithTextExist(dispositionBlock, testDisposition);
    // delete added disposition
    cy.get(dispositionTable)
      .find('tr')
      .filter(`:contains(${testDisposition})`)
      .within(() => {
        cy.get(delIcon).click({ force: true });
      });
    clickContainingText(disposDeleteBlock, YES);
  });
  // click on reset filter
  clickResetFilter();
};
export const deleteDisposForMUltiLevel = () => {
  cy.reload();
  visit();
  cy.wait(1000);
  cy.fixture('LoginCredentials').then((data) => {
    fillUsername(data.LEVEL_1_USERNAME);
    fillPassword(data.validPassword);
  });
  submit();
  navigateToDispositionPage();
  // level 1 organization
  clearDisposAllSearchFieldForMultiLevel();
  // search disposition( title search)
  clickOn(disposSearchIconTitleMultiLevel);
  cy.fixture('Disposition').then((data) => {
    testDisposition = data.newDisposition + uniqueUI;
    fillText(disposTitleSearchField, testDisposition);
    cy.get(searchButton).eq(1).click({ force: true });
    // search validation
    elementWithTextExist(dispositionBlock, testDisposition);
    // delete disposition
    cy.get(dispositionTable)
      .filter(`:contains(${testDisposition})`)
      .within(() => {
        cy.get(delIcon).click({ force: true });
      });
    clickContainingText(disposDeleteBlock, YES);
  });
  clickResetFilter();
  // Level 2 dispositions
  // Search disposition (title search)
  clickOn(disposSearchIconTitleMultiLevel);
  cy.fixture('Disposition').then((data) => {
    testDisposition = data.newDisposition + uniqueUI2;
    fillText(disposTitleSearchField, testDisposition);
    cy.get(searchButton).eq(1).click({ force: true });
    // Search validation
    elementWithTextExist(dispositionBlock, testDisposition);
    // Delete disposition
    cy.get(dispositionTable)
      .filter(`:contains(${testDisposition})`)
      .within(() => {
        cy.get(delIcon).click({ force: true });
      });
    clickContainingText(disposDeleteBlock, YES);
  });
  clickResetFilter();
  // level2 child 2
  clickOn(disposSearchIconTitleMultiLevel);
  cy.fixture('Disposition').then((data) => {
    testDisposition = data.newDisposition + uniqueUI3;
    fillText(disposTitleSearchField, testDisposition);
    cy.get(searchButton).eq(1).click({ force: true });
    elementWithTextExist(dispositionBlock, testDisposition);
    cy.get(dispositionTable)
      .filter(`:contains(${testDisposition})`)
      .within(() => {
        cy.get(delIcon).click({ force: true });
      });
    clickContainingText(disposDeleteBlock, YES);
  });
  clearDisposAllSearchFieldForMultiLevel();
  // Level 3 dispositions
  clickOn(disposSearchIconTitleMultiLevel);
  cy.fixture('Disposition').then((data) => {
    testDisposition = data.newDisposition + uniqueUI4;
    fillText(disposTitleSearchField, testDisposition);
    cy.get(searchButton).eq(1).click({ force: true });
    elementWithTextExist(dispositionBlock, testDisposition);
    cy.get(dispositionTable)
      .filter(`:contains(${testDisposition})`)
      .within(() => {
        cy.get(delIcon).click({ force: true });
      });
    clickContainingText(disposDeleteBlock, YES);
  });
  clearDisposAllSearchFieldForMultiLevel();
};
/** ************************POC WORK****************************************************** */
export const deleIconShouldNotPrsnt = () => {
  cy.get(deleteIcon).should('not.exist');
};
export const deleteIconShouldPrsnt = () => {
  cy.get(deleteIcon).should('exist');
};
