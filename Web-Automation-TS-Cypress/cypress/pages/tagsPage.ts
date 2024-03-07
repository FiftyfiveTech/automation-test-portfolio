import {
  clearSearchFeed,
  clickContainingText,
  clickOn,
  clickResetFilter,
  elementWithTextNotExist,
  elementWithTextExist,
  fillText
} from '../utils/cypressMethod.util';
import { ADD_NEW, NO, TAGS, TEST_ORG, YES } from '../utils/constants.util';
import {
  clickHamburgerMenu,
  clickTags,
  clickTools,
  hamburgerMenuShldPrsnt
} from './home.page';
import { uniqueUI, uniqueUI2, uniqueUI3, uniqueUI4 } from './usersPage';
import { fillPassword, fillUsername, submit, visit } from './login.page';
import { delIcon } from './multilevel';
import _ from 'lodash';
export const tagsBlock = 'div[class=\'admin-list-view\']';
export const tagsTable = 'div[class=\'ant-table-content\']';
const tagsEditDelIcon = 'td[class=\'ant-table-cell\']>div>div>span>svg>path';
const tagsEditIcon =
  'td[class=\'ant-table-cell\']>div>div>span>svg>path[d=\'M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z\']';
const tagsDelIcon =
  'path[d=\'M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2\']';
const searchButton =
  'body.light:nth-child(2) div.ant-dropdown.ant-dropdown-placement-bottomRight div.ant-table-filter-dropdown div:nth-child(1) div.buttons button.ant-btn.ant-btn-primary.ant-btn-sm:nth-child(1) > span:nth-child(2)';
const tagsSearchIconID =
  'thead[class=\'ant-table-thead\']>tr>th:nth-of-type(1)>div>span:nth-of-type(2)>span>svg';
const tagsIdSearchField = 'input[placeholder=\'Search ID\']';
const tagsSearchIconTitleMultiLevel =
  'thead[class=\'ant-table-thead\']>tr>th:nth-of-type(3)>div>span:nth-of-type(2)>span>svg';
const tagsSearchIconTitle =
  'thead[class=\'ant-table-thead\']>tr>th:nth-of-type(3)>div>span:nth-of-type(2)>span>svg';
const tagsTitleSearchField = 'input[placeholder=\'Search Title\']';
const tagsSearchIconGlobal =
  'thead[class=\'ant-table-thead\']>tr>th:nth-of-type(3)>div>span:nth-of-type(2)>span>svg';
const tagsSearchIconOrg =
  'thead[class=\'ant-table-thead\']>tr>th:nth-of-type(2)>div>span:nth-of-type(2)>span>svg';
const tagsOrgSearchField = 'input[placeholder=\'Search Title\']';
const tagsCheckBox = 'input[type=\'checkbox\']';
const tagsDeleteBlock = 'div[class=\'ant-modal-confirm-content\']';
const tagsTableSorting = 'div[class=\'ant-table-content\']';
const tagsTableHeader = 'thead[class=\'ant-table-thead\']>tr>th';
const tagsTableHeaderElmnt = 'thead[class=\'ant-table-thead\']>tr>th>div>span';
const tagsId = 'td:nth-child(1)';
const tagsOrgHeader =
  ':nth-child(2) > .ant-table-filter-column > :nth-child(1) > .ant-table-column-sorters > .ant-table-column-title';
const tagsOrg = 'td:nth-child(2)';
const tagsTitleHeader =
  ':nth-child(2) > .ant-table-filter-column > :nth-child(1) > .ant-table-column-sorters > .ant-table-column-title';
const tagsTitle = 'td:nth-child(2)';
const tagsCreatedHeader =
  'div[class=\'ant-table-content\']>table>thead>tr>th:nth-of-type(4)';
const tagsCreated = 'td:nth-child(4)';
const tagsPageElement =
  'ul[class=\'ant-pagination ant-table-pagination ant-table-pagination-right\']>li';
let tagsUiId;

let testTags: string;
export const navigateToTagsPage = () => {
  hamburgerMenuShldPrsnt();
  clickHamburgerMenu();
  clickTools();
  clickTags();
  tagsHeaderShldPrsnt();
};
export const tagsHeaderShldPrsnt = () => {
  elementWithTextExist(tagsBlock, TAGS);
};
export const tagAddNewButtonShldPrsnt = () => {
  elementWithTextExist(tagsBlock, ADD_NEW);
};
export const tagAddNewButtonShldNotPrsnt = () => {
  elementWithTextNotExist(tagsBlock, ADD_NEW);
};
export const tagEditIconShldPrsnt = () => {
  clearAllTagsSearchFields();
  clickOn(tagsSearchIconTitle);
  cy.fixture('Tags').then((data) => {
    testTags = data.newTagsTitle + uniqueUI;
    fillText(tagsTitleSearchField, testTags);
    cy.get(searchButton).eq(1).click({ force: true });
    elementWithTextExist(tagsBlock, testTags);
    // Verify that tag edit icon exist
    cy.get(tagsBlock)
      .filter(`:contains(${testTags})`)
      .within(() => {
        cy.get(tagsEditIcon).should('exist');
      });
  });
  clickResetFilter();
};
export const tagEditIconShldNotPrsnt = () => {
  clearAllTagsSearchFields();
  clickOn(tagsSearchIconTitle);
  cy.fixture('Tags').then((data) => {
    testTags = data.newTagsTitle + uniqueUI;
    fillText(tagsTitleSearchField, testTags);
    cy.get(searchButton).eq(1).click({ force: true });
    elementWithTextExist(tagsBlock, testTags);
    // verify that tag edit icon ont exist
    cy.get(tagsBlock)
      .filter(`:contains(${testTags})`)
      .within(() => {
        cy.get(tagsEditIcon).should('not.exist');
      });
  });
  clickResetFilter();
};
export const tagDeleteIconShldPrsnt = () => {
  clearAllTagsSearchFields();
  clickOn(tagsSearchIconTitle);
  cy.fixture('Tags').then((data) => {
    testTags = data.newTagsTitle + uniqueUI;
    fillText(tagsTitleSearchField, testTags);
    cy.get(searchButton).eq(1).click({ force: true });
    elementWithTextExist(tagsBlock, testTags);
    // verify that tag delete icon exist
    cy.get(tagsBlock)
      .filter(`:contains(${testTags})`)
      .within(() => {
        cy.get(tagsDelIcon).should('exist');
      });
  });
  clickResetFilter();
};
export const tagDeleteIconShldNotPrsnt = () => {
  clearAllTagsSearchFields();
  clickOn(tagsSearchIconTitle);
  cy.fixture('Tags').then((data) => {
    testTags = data.newTagsTitle + uniqueUI;
    fillText(tagsTitleSearchField, testTags);
    cy.get(searchButton).eq(1).click({ force: true });
    elementWithTextExist(tagsBlock, testTags);
    // verify that tag delete icon not exist
    cy.get(tagsBlock)
      .filter(`:contains(${testTags})`)
      .within(() => {
        cy.get(tagsDelIcon).should('not.exist');
      });
  });
  clickResetFilter();
};
export const clickAddNewTagsButton = () => {
  clickContainingText(tagsBlock, ADD_NEW);
};
export const clickEditTags = () => {
  clearAllTagsSearchFields();
  clickOn(tagsSearchIconTitle);
  cy.fixture('Tags').then((data) => {
    testTags = data.newTagsTitle + uniqueUI;
    fillText(tagsTitleSearchField, testTags);
    cy.get(searchButton).eq(1).click({ force: true });
    cy.wait(3000);
    elementWithTextExist(tagsBlock, testTags);
    cy.get(tagsTable)
      .filter(`:contains(${testTags})`)
      .within(() => {
        cy.get(tagsEditDelIcon).eq(0).click({ force: true });
      });
  });
};
export const deleteTags = () => {
  clearAllTagsSearchFields();
  clickOn(tagsSearchIconTitle);
  cy.fixture('Tags').then((data) => {
    testTags = data.editTagsTitle + uniqueUI;
    fillText(tagsTitleSearchField, testTags);
    cy.get(searchButton).eq(1).click({ force: true });
    elementWithTextExist(tagsBlock, testTags);
    cy.get(tagsTable)
      .filter(`:contains(${testTags})`)
      .within(() => {
        cy.get(tagsEditDelIcon).eq(1).click({ force: true });
      });
    clickContainingText(tagsDeleteBlock, YES);
  });
  clearAllTagsSearchFields();
  validateDeleteTags();
};
export const deleteTagForPermission = () => {
  clearAllTagsSearchFields();
  clickOn(tagsSearchIconTitle);
  cy.fixture('Tags').then((data) => {
    testTags = data.newTagsTitle + uniqueUI;
    fillText(tagsTitleSearchField, testTags);
    cy.get(searchButton).eq(1).click({ force: true });
    elementWithTextExist(tagsBlock, testTags);
    // click on delete icon of tag
    cy.get(tagsTable)
      .filter(`:contains(${testTags})`)
      .within(() => {
        cy.get(tagsEditDelIcon).eq(1).click({ force: true });
      });
    clickContainingText(tagsDeleteBlock, YES);
  });
  clickResetFilter();
  // clearAllTagsSearchFields();
};
export const DisplayDeletedTags = () => {
  clearAllTagsSearchFields();
  // check displaty deleted check box
  cy.get(tagsCheckBox).eq(0).check();
  clickOn(tagsSearchIconTitle);
  cy.fixture('Tags').then((data) => {
    testTags = data.editTagsTitle + uniqueUI;
    fillText(tagsTitleSearchField, testTags);
    cy.get(searchButton).eq(1).click({ force: true });
    elementWithTextExist(tagsBlock, testTags);
    // uncheck diplay deleted check box
    cy.get(tagsCheckBox).eq(0).uncheck();
    elementWithTextNotExist(tagsBlock, testTags);
  });
  clickResetFilter();
  // clearAllTagsSearchFields();
};
export const validateAddTags = () => {
  clearAllTagsSearchFields();
  clickOn(tagsSearchIconTitle);
  cy.fixture('Tags').then((data) => {
    testTags = data.newTagsTitle + uniqueUI;
    fillText(tagsTitleSearchField, testTags);
    cy.get(searchButton).eq(1).click({ force: true });
    elementWithTextExist(tagsBlock, testTags);
  });
  clickResetFilter();
  // clearAllTagsSearchFields()
};
export const validateEditTags = () => {
  clearAllTagsSearchFields();
  clickOn(tagsSearchIconTitle);
  cy.fixture('Tags').then((data) => {
    testTags = data.editTagsTitle + uniqueUI;
    fillText(tagsTitleSearchField, testTags);
    cy.get(searchButton).eq(1).click({ force: true });
    elementWithTextExist(tagsBlock, testTags);
  });
  clickResetFilter();
  // clearAllTagsSearchFields()
};
export const validateDeleteTags = () => {
  clearAllTagsSearchFields();
  clickOn(tagsSearchIconTitle);
  cy.fixture('Tags').then((data) => {
    testTags = data.editTagsTitle + uniqueUI;
    fillText(tagsTitleSearchField, testTags);
    cy.get(searchButton).eq(1).click({ force: true });
    cy.get(tagsBlock).contains(testTags).should('not.exist');
  });
  clickResetFilter();
  // clearAllTagsSearchFields()
};
export const clearAllTagsSearchFields = () => {
  clearSearchFeed(tagsSearchIconID, tagsIdSearchField, searchButton, '0');
  clearSearchFeed(tagsSearchIconTitle, tagsTitleSearchField, searchButton, '1');
  // clickOn(tagsSearchIconGlobal);
  // cy.get(tagsCheckBox).eq(1).uncheck();
  // cy.wait(300);
  // cy.get(tagsCheckBox).eq(2).uncheck();
  // cy.wait(300);
  // cy.get(searchButton).eq(2).click({ force: true });
};
export const clearAllTagsSearchFieldsForMultiLevel = () => {
  clearSearchFeed(tagsSearchIconID, tagsIdSearchField, searchButton, '0');
  clearSearchFeed(
    tagsSearchIconTitleMultiLevel,
    tagsTitleSearchField,
    searchButton,
    '1'
  );
};
export const searchTagsById = () => {
  clearAllTagsSearchFields();
  clickOn(tagsSearchIconTitle);
  cy.fixture('Tags').then((data) => {
    testTags = data.editTagsTitle + uniqueUI;
    fillText(tagsTitleSearchField, testTags);
    cy.get(searchButton).eq(1).click({ force: true });
    elementWithTextExist(tagsBlock, testTags);
  });
  cy.get(tagsId)
    .eq(0)
    .invoke('text')
    .then((textId) => {
      tagsUiId = textId;
      clickResetFilter();
      // clearAllTagsSearchFields();
      clickOn(tagsSearchIconID);
      fillText(tagsIdSearchField, tagsUiId);
      cy.get(searchButton).eq(0).click({ force: true });
      elementWithTextExist(tagsBlock, tagsUiId);
    });
  clickResetFilter();
  // clearAllTagsSearchFields();
};
export const searchTagsByTitle = () => {
  clearAllTagsSearchFields();
  clickOn(tagsSearchIconTitle);
  cy.fixture('Tags').then((data) => {
    testTags = data.editTagsTitle + uniqueUI;
    fillText(tagsTitleSearchField, testTags);
    cy.get(searchButton).eq(1).click({ force: true });
    elementWithTextExist(tagsBlock, testTags);
  });
  clickResetFilter();
  // clearAllTagsSearchFields();
};
export const searchTagsByOrg = () => {
  // clearAllTagsSearchFields();
  clickOn(tagsSearchIconOrg);
  fillText(tagsOrgSearchField, TEST_ORG);
  cy.get(searchButton).eq(1).click({ force: true });
  elementWithTextExist(tagsBlock, TEST_ORG);
  clickResetFilter();
  // clearAllTagsSearchFields();
};
export const searchTagsByGlobal = () => {
  clearAllTagsSearchFields();
  clickOn(tagsSearchIconGlobal);
  cy.get(tagsCheckBox).eq(1).uncheck();
  cy.get(tagsCheckBox).eq(2).check();
  cy.get(searchButton).eq(2).click({ force: true });
  elementWithTextNotExist(tagsBlock, YES);
  clickOn(tagsSearchIconGlobal);
  cy.get(tagsCheckBox).eq(1).check();
  cy.get(tagsCheckBox).eq(2).uncheck();
  cy.get(searchButton).eq(2).click({ force: true });
  elementWithTextNotExist(tagsBlock, NO);
  clearAllTagsSearchFields();
};
export const sortTagsByID = () => {
  // clickContainingText(menuSubmenuBlock,DISPOSITIONS);
  cy.wait(2000);
  cy.get(tagsTableSorting).get(tagsTableHeader).should('have.length', 6);
  const toStringsInit = (cells$) => _.map(cells$, 'textContent');
  const toNumbersInit = (ids) => _.map(ids, Number);
  cy.get(tagsId)
    .then(toStringsInit)
    .then(toNumbersInit)
    .then((ids) => {
      console.log(ids);
      // confirm prices are sorted
      // by sorting them ourselves
      // and comparing with the input list
      const sorted = _.sortBy(ids).reverse();
      console.log(sorted);
      expect(ids, 'cells are sorted').to.deep.equal(sorted);
    });
  // for descending
  cy.get(tagsTableHeaderElmnt).eq(0).click();
  // verify the prices in the column are indeed in sorted order
  const toStrings = (cells$) => _.map(cells$, 'textContent');
  const toNumbers = (ids) => _.map(ids, Number);
  cy.get(tagsId)
    .then(toStrings)
    .then(toNumbers)
    .then((ids) => {
      // confirm prices are sorted
      // by sorting them ourselves
      // and comparing with the input list
      console.log(ids);
      const sorted = _.sortBy(ids).reverse();
      console.log(sorted);
      expect(ids, 'cells are sorted').to.deep.equal(sorted);
      // for ascending
      cy.get(tagsTableHeaderElmnt).eq(0).click();
      const toStrings = (cells$) => _.map(cells$, 'textContent');
      const toNumbers = (ids) => _.map(ids, Number);
      cy.get(tagsId)
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
export const sortTagsByOrg = () => {
  // Verify sorting in descending
  cy.get(tagsOrgHeader).click();
  cy.get(tagsOrg).then((items) => {
    const unsortedItems = items
      .map((index, html) => Cypress.$(html).text())
      .get();
    // console.log(unsortedItems)
    const sortedItems = unsortedItems.sort().reverse();
    // console.log(sortedItems)
    expect(unsortedItems, 'Items are sorted').to.deep.equal(sortedItems);
  });
  // Verify sorting in ascending
  cy.get(tagsOrgHeader).click();
  cy.get(tagsOrg).then((items) => {
    const unsortedItems = items
      .map((index, html) => Cypress.$(html).text())
      .get();
    // console.log(unsortedItems)
    const sortedItems = unsortedItems.sort();
    // console.log(sortedItems)
    expect(unsortedItems, 'Items are sorted').to.deep.equal(sortedItems);
  });
};
export const sortTagsBytitle = () => {
  // Verify sorting in descending
  cy.get(tagsTitleHeader).click();
  cy.get(tagsTitle).then((items) => {
    const unsortedItems = items
      .map((index, html) => Cypress.$(html).text())
      .get();
    // console.log(unsortedItems)
    const sortedItems = unsortedItems.slice().sort().reverse();
    // console.log(sortedItems)
    expect(unsortedItems, 'Items are sorted').to.deep.equal(sortedItems);
  });
  // Verify sorting in ascending
  cy.get(tagsTitleHeader).click();
  cy.get(tagsTitle).then((items) => {
    const unsortedItems = items
      .map((index, html) => Cypress.$(html).text())
      .get();
    // console.log(unsortedItems)
    const sortedItems = unsortedItems.slice().sort();
    // console.log(sortedItems)
    expect(unsortedItems, 'Items are sorted').to.deep.equal(sortedItems);
  });
};
export const sortTagsByTime = () => {
  // verify sorting in decending
  cy.get(tagsCreatedHeader).click();
  cy.get(tagsCreated).then((items) => {
    const unsortedItems = items
      .map((index, html) => Cypress.$(html).text())
      .get();
    console.log('Unsorted Items : ', unsortedItems);
    const sortedItems = unsortedItems.sort(); // .reverse();
    console.log('Sorted Items : ', sortedItems);
    expect(unsortedItems, 'Items are sorted').to.deep.equal(sortedItems);
  });
  // Verify sorting in ascending
  cy.get(tagsCreatedHeader).click();
  cy.get(tagsCreated).then((items) => {
    const unsortedItems = items
      .map((index, html) => Cypress.$(html).text())
      .get();
    console.log('Unsorted item :', unsortedItems);
    const sortedItems = unsortedItems.sort().reverse();
    console.log('Sorted items :', sortedItems);
    expect(unsortedItems, 'Items are sorted').to.deep.equal(sortedItems);
  });
};
export const paginationOnTagsPage = () => {
  cy.get(tagsCheckBox).eq(0).check();
  cy.get(tagsPageElement).click({ multiple: true });
  cy.get(tagsCheckBox).eq(0).uncheck();
  cy.get(tagsPageElement).click({ multiple: true });
};
export const deleteTagsFromMultiLevel = () => {
  visit();
  cy.fixture('LoginCredentials').then((data) => {
    fillUsername(data.LEVEL_1_USERNAME);
    fillPassword(data.validPassword);
  });
  submit();
  navigateToTagsPage();
  // delete tags for level 1
  clearAllTagsSearchFieldsForMultiLevel();
  clickOn(tagsSearchIconTitleMultiLevel);
  cy.fixture('Tags').then((data) => {
    testTags = data.newTagsTitle + uniqueUI;
    fillText(tagsTitleSearchField, testTags);
    cy.get(searchButton).eq(1).click({ force: true });
    elementWithTextExist(tagsBlock, testTags);
    cy.get(tagsTable)
      .filter(`:contains(${testTags})`)
      .within(() => {
        cy.get(delIcon).click({ force: true });
      });
    clickContainingText(tagsDeleteBlock, YES);
  });
  clearAllTagsSearchFieldsForMultiLevel();
  // validateDeleteTags();
  // delete tags for level 2
  clickOn(tagsSearchIconTitleMultiLevel);
  cy.fixture('Tags').then((data) => {
    testTags = data.newTagsTitle + uniqueUI2;
    fillText(tagsTitleSearchField, testTags);
    cy.get(searchButton).eq(1).click({ force: true });
    elementWithTextExist(tagsBlock, testTags);
    cy.get(tagsTable)
      .filter(`:contains(${testTags})`)
      .within(() => {
        cy.get(delIcon).click({ force: true });
      });
    clickContainingText(tagsDeleteBlock, YES);
  });
  clearAllTagsSearchFieldsForMultiLevel();
  // delete tags level2 child 2
  clickOn(tagsSearchIconTitleMultiLevel);
  cy.fixture('Tags').then((data) => {
    testTags = data.newTagsTitle + uniqueUI3;
    fillText(tagsTitleSearchField, testTags);
    cy.get(searchButton).eq(1).click({ force: true });
    elementWithTextExist(tagsBlock, testTags);
    cy.get(tagsTable)
      .filter(`:contains(${testTags})`)
      .within(() => {
        cy.get(delIcon).click({ force: true });
      });
    clickContainingText(tagsDeleteBlock, YES);
  });
  clearAllTagsSearchFieldsForMultiLevel();
  // delete tags for level 3
  clickOn(tagsSearchIconTitleMultiLevel);
  cy.fixture('Tags').then((data) => {
    testTags = data.newTagsTitle + uniqueUI4;
    fillText(tagsTitleSearchField, testTags);
    cy.get(searchButton).eq(1).click({ force: true });
    elementWithTextExist(tagsBlock, testTags);
    cy.get(tagsTable)
      .filter(`:contains(${testTags})`)
      .within(() => {
        cy.get(delIcon).click({ force: true });
      });
    clickContainingText(tagsDeleteBlock, YES);
  });
  clearAllTagsSearchFieldsForMultiLevel();
};
