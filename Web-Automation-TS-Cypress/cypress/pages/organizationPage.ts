import _ from 'lodash';
import {
  clickContainingText,
  clickOnText,
  elementWithTextExist
} from '../utils/cypressMethod.util';
import { ADD_NEW, ORGANIZATIONS, TEST_ORG } from '../utils/constants.util';
import { editOrgHeaderShldPrsnt } from './editOrganization';
import {
  clickHamburgerMenu,
  clickOrganization,
  clickStaff,
  hamburgerMenuShldPrsnt,
  menuSubmenuBlock
} from './home.page';
import { editIcon } from './multilevel';

export const organizationHeader = '.admin-list-page-header';
export const organizationBlock = ' div[class=\'admin-list-view\']';

const organizationTable = 'tbody[class=\'ant-table-tbody\']>tr';
const orgTable = 'div[class=\'ant-table-content\']';
const orgTableHeader = 'thead[class=\'ant-table-thead\']>tr>th';
const orgTableHeaderElmnt = (itemNumber: number) =>
  `thead[class='ant-table-thead']>tr>th:nth-child(${itemNumber})`;
const organizationTitleHeader =
  'div[class=\'ant-table-content\']>table>thead>tr>th:nth-of-type(2)';
const organizationTitle = 'td:nth-child(2)';
const organizationCreatedHeader =
  'div[class=\'ant-table-content\']>table>thead>tr>th:nth-of-type(3)';
const organizationCreated = 'td:nth-child(3)';
const orgPageElement =
  'ul[class=\'ant-pagination ant-table-pagination ant-table-pagination-right\']>li';
let testOrganization: string;
export const navigateToOrganizationPage = () => {
  hamburgerMenuShldPrsnt();
  clickHamburgerMenu();
  clickStaff();
  clickOrganization();
  organizationHeaderShldPrsnt(); // Validation for organization page.
};
export const organizationHeaderShldPrsnt = () => {
  elementWithTextExist(organizationBlock, ORGANIZATIONS); // Validation for organization page.
};
export const clickAddNewOrgButton = () => {
  clickOnText(ADD_NEW); // Add new button for adding organization.
};
export const orgEditIconShldPrsnt = () => {
  // verify that edit icon should present
  cy.wait(5000);
  cy.fixture('Org').then((data) => {
    testOrganization = data.EditAutomationTestOrg;
    elementWithTextExist(organizationBlock, testOrganization);
    cy.get(organizationBlock)
      .find('tr')
      .filter(`:contains(${testOrganization})`)
      .within(() => {
        cy.get(editIcon).should('exist');
      });
  });
};
export const orgEditIconShldNotPrsnt = () => {
  // verify that edit icon should not present
  cy.fixture('Org').then((data) => {
    testOrganization = data.EditAutomationTestOrg;
    elementWithTextExist(organizationBlock, testOrganization);
    // locating and click  edit icon of the organization
    cy.get(organizationBlock)
      .find('tr')
      .filter(`:contains(${testOrganization})`)
      .within(() => {
        cy.get(editIcon).should('not.exist');
      });
  });
};
export const clickEditOrganization = () => {
  // click on edit icon of an organization
  cy.fixture('Org').then((data) => {
    testOrganization = data.EditAutomationTestOrg;
    cy.get(organizationTable)
      .filter(`:contains(${testOrganization})`)
      .within(() => {
        cy.get(editIcon).click({ force: true });
      });
  });
  editOrgHeaderShldPrsnt();
};
export const validateEditOrg = () => {
  // verify that organization exist
  elementWithTextExist(organizationBlock, TEST_ORG);
  // clearOrgAllSearchField();
};
// export const searchOrgById = () => {
//     clearOrgAllSearchField();
//     clickOn(orgSearchIconTitle);
//     fillText(orgTitleSeachField, TEST_ORG);
//     cy.get(searchButton).eq(1).click({ force: true });
//     elementWithTextExist(organizationBlock, TEST_ORG);
//     cy.get(organizationId).eq(0).invoke('text').then((textId) => {
//         orgUiID = textId;
//         clearOrgAllSearchField();
//         clickOn(orgSearchIconId);
//         fillText(orgIDSearchField, orgUiID)
//         cy.get(searchButton).eq(0).click({ force: true });
//         elementWithTextExist(organizationBlock, orgUiID);
//     })
// }
// export const seachOrgByTitle = () => {
//     clearOrgAllSearchField();
//     clickOn(orgSearchIconTitle);
//     fillText(orgTitleSeachField, TEST_ORG);
//     cy.get(searchButton).eq(1).click({ force: true });
//     elementWithTextExist(organizationBlock, TEST_ORG);
//     clearOrgAllSearchField();
// }
export const sortOrgByID = () => {
  clickContainingText(menuSubmenuBlock, ORGANIZATIONS);
  cy.wait(2000);
  cy.get(orgTable).get(orgTableHeader).should('have.length', 5);

  const sortIDColumn = (reverse: boolean = false) => {
    const toStrings = (cells$) => _.map(cells$, 'textContent');
    const toNumbers = (ids) => _.map(ids, Number);
    cy.get(`tr[class='ant-table-row ant-table-row-level-1']>td:nth-child(${0})`)
      .then(toStrings)
      .then(toNumbers)
      .then((ids) => {
        let sorted = _.sortBy(ids);
        if (reverse) {
          sorted = sorted.reverse();
        }
        expect(ids, 'cells are sorted').to.eql(sorted);
      });
  };
  // for ascending
  cy.get(orgTableHeaderElmnt(1)).click().click();
  sortIDColumn();
  // for descending
  cy.get(orgTableHeaderElmnt(1)).click();
  sortIDColumn(true);
};
export const sortOrgBytitle = () => {
  // Verify sorting in descending
  cy.get(organizationTitleHeader).click().click();
  cy.get(organizationTitle).then((items) => {
    const unsortedItems = items
      .map((index, html) => Cypress.$(html).text())
      .get();
    // console.log(unsortedItems)
    const sortedItems = unsortedItems.slice().sort().reverse();
    // console.log(sortedItems)
    expect(unsortedItems, 'Items are sorted').to.deep.equal(sortedItems);
  });
  // Verify sorting in ascending
  cy.get(organizationTitleHeader).click();
  cy.get(organizationTitle).then((items) => {
    const unsortedItems = items
      .map((index, html) => Cypress.$(html).text())
      .get();
    // console.log(unsortedItems)
    const sortedItems = unsortedItems.slice().sort();
    // console.log(sortedItems)
    expect(unsortedItems, 'Items are sorted').to.deep.equal(sortedItems);
  });
};
export const sortOrgByTime = () => {
  // verify sorting in decending
  cy.get(organizationCreatedHeader).click();
  cy.get(organizationCreated).then((items) => {
    const unsortedItems = items
      .map((index, html) => Cypress.$(html).text())
      .get();
    console.log('Unsorted Items : ', unsortedItems);
    const sortedItems = unsortedItems.sort(); // .reverse();
    console.log('Sorted Items : ', sortedItems);
    expect(unsortedItems, 'Items are sorted').to.deep.equal(sortedItems);
  });
  // Verify sorting in ascending
  cy.get(organizationCreatedHeader).click();
  cy.get(organizationCreated).then((items) => {
    const unsortedItems = items
      .map((index, html) => Cypress.$(html).text())
      .get();
    console.log('Unsorted item :', unsortedItems);
    const sortedItems = unsortedItems.sort().reverse();
    console.log('Sorted items :', sortedItems);
    expect(unsortedItems, 'Items are sorted').to.deep.equal(sortedItems);
  });
};
// export const orgDisplayDeleted = () => {
//     // clearOrgAllSearchField();
//     cy.get(orgDisplayDeletedCheckBox).check();
//     cy.get(orgDisplayDeletedCheckBox).uncheck();
// }
export const paginationOnOrganizationPage = () => {
  // cy.get(orgDisplayDeletedCheckBox).check();
  cy.get(orgPageElement).click({ multiple: true });
  // cy.get(orgDisplayDeletedCheckBox).uncheck();
  // cy.get(orgPageElement).click({ multiple: true });
};
