import {
  clearSearchFeed,
  clickContainingText,
  clickOn,
  clickResetFilter,
  elementWithTextNotExist,
  elementWithTextExist,
  fillText
} from '../utils/cypressMethod.util';
import { ADD_NEW, BACK, OK, USERS, YES } from '../utils/constants.util';
import { errorElmnt } from './addUserPage';
import {
  clickHamburgerMenu,
  clickStaff,
  clickUser,
  hamburgerMenuShldPrsnt,
  menuSubmenuBlock
} from './home.page';
import { dataTable, delIcon, editIcon } from './multilevel';
export const table = 'tbody[class=\'ant-table-tbody\']';
export const userBlock = 'div[class=\'content-children-wrp\']'; //
export const userTable = 'div[class=\'ant-table-content\']';
const userTableHeader = 'thead[class=\'ant-table-thead\']>tr>th';
const userTableHeaderElmnt = 'thead[class=\'ant-table-thead\']>tr>th>div>span';
const userId = 'td:nth-child(1)';
const userUserNameHeader =
  'thead[class=\'ant-table-thead\']>tr>th:nth-of-type(2)>div>span[class=\'ant-table-column-title\']';
const userUserName = 'td:nth-child(3)';
const userOrganizationHeader =
  'thead[class=\'ant-table-thead\']>tr>th:nth-of-type(3)>div>span[class=\'ant-table-column-title\']';
export const userOrganization = 'td:nth-child(3)';
const userFirstNameHeader =
  ':nth-child(5) > .ant-table-filter-column > :nth-child(1) > .ant-table-column-sorters > .ant-table-column-title';
const userFirstName = 'td:nth-child(5)';
const userLastNameHeader =
  ':nth-child(6) > .ant-table-filter-column > :nth-child(1) > .ant-table-column-sorters > .ant-table-column-title';
const userLastName = 'td:nth-child(6)';
const userDelIcon =
  'path[d=\'M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2\']';
const userSearchIconID =
  'thead[class=\'ant-table-thead\']>tr>th:nth-of-type(1)>div>span:nth-of-type(2)>span>svg';
export const userSearchIconUserName =
  'thead[class=\'ant-table-thead\']>tr>th:nth-of-type(2)>div>span:nth-of-type(2)>span>svg';
const userSearchIconFirstName =
  'thead[class=\'ant-table-thead\']>tr>th:nth-of-type(5)>div>span:nth-of-type(2)>span>svg';
const userSearchIconLastName =
  'thead[class=\'ant-table-thead\']>tr>th:nth-of-type(6)>div>span:nth-of-type(2)>span>svg';
const userIdSearchField = 'input[placeholder=\'Search ID\']';
export const userNameSearchField = 'input[placeholder=\'Search Username\']';
const userFirstNameSearchField = 'input[placeholder=\'Search First name\']';
const userLastNameSearchField = 'input[placeholder=\'Search Last name\']';
export const searchButton =
  'body.light:nth-child(2) div.ant-dropdown.ant-dropdown-placement-bottomRight div.ant-table-filter-dropdown div:nth-child(1) div.buttons button.ant-btn.ant-btn-primary.ant-btn-sm:nth-child(1) > span:nth-child(2)';
const userDisplayDeletedCheckBox = 'input[type=\'checkbox\']';
const userPageElement =
  'ul[class=\'ant-pagination ant-table-pagination ant-table-pagination-right\']>li';
const noDataLabel = 'td:nth-child(1)>div>div:nth-child(2)';
let testUser: string, userNameSearch: string, userUiId: string;

// unique vale is the current time stamp
export const uniqueUI = Date.now();
// second unique no.
export const uniqueUI2 = uniqueUI + 1;
// third unique no.
export const uniqueUI3 = uniqueUI + 2;
// fourth unique no.
export const uniqueUI4 = uniqueUI + 3;
export const navigateToUserPage = () => {
  // method to navigate user from home page to user page
  hamburgerMenuShldPrsnt();
  clickHamburgerMenu();
  clickStaff();
  clickUser();
  userHeaderShldPrsnt();
};
export const userAddNewButtonShldPrsnt = () => {
  // validation that add new button to add user should be present at users page
  elementWithTextExist(userBlock, ADD_NEW);
};
export const userAddNewButtonShldNotPrsnt = () => {
  // validation that add new button to add user should not be present at users page
  elementWithTextNotExist(userBlock, ADD_NEW);
};
export const userEditIconShldPrsnt = () => {
  // Validation that edit icon should present
  cy.fixture('NewUser').then((data) => {
    // test user is the  new user added with current time stamp (uniqueUI)
    testUser = data.uIdUser + uniqueUI;
    /* sequence of command to locate edit icon,where each command takes output of
        previous cammand as an input */
    cy.get(dataTable)
      .find('tr')
      .filter(`:contains(${testUser})`)
      .within(() => {
        cy.get(editIcon).should('exist');
      });
  });
};
export const userEditIconShldNotPrsnt = () => {
  // Validation that edit icon should present
  // clear all search field of user
  clearUserAllSearchField();
  // click on username search icon
  clickOn(userSearchIconUserName);
  cy.fixture('NewUser').then((data) => {
    testUser = data.uIdUser + uniqueUI;
    // fill text into search text field and click on search button
    fillText(userNameSearchField, testUser);
    cy.get(searchButton).eq(1).click({ force: true });
    // validation for user and its edit icon
    elementWithTextExist(userBlock, testUser);
    cy.get(userBlock)
      .find('tr')
      .filter(`:contains(${testUser})`)
      .within(() => {
        cy.get(editIcon).should('not.exist');
      });
  });
};
export const userDeleteIconShldPrsnt = () => {
  // validation that  delete icon should exist
  cy.fixture('NewUser').then((data) => {
    testUser = data.uIdUser + uniqueUI;
    cy.get(userBlock)
      .find('tr')
      .filter(`:contains(${testUser})`)
      .within(() => {
        cy.get(delIcon).should('exist');
      });
  });
};
export const userDeleteIconShldNotPrsnt = () => {
  // validation that delete icon should not exist
  cy.fixture('NewUser').then((data) => {
    testUser = data.uIdUser + uniqueUI;
    cy.get(userBlock)
      .find('tr')
      .filter(`:contains(${testUser})`)
      .within(() => {
        cy.get(delIcon).should('not.exist');
      });
  });
};
export const userHeaderShldPrsnt = () => {
  // validation for successfull navigation of users page.
  elementWithTextExist(userBlock, USERS);
};
export const clickAddNewUserButton = () => {
  // click on add new button at users page to add new user
  clickContainingText(userBlock, ADD_NEW);
};
export const validateAddUser = () => {
  // verify that user has been added successfully
  // search the added username through username search option and verify that it exist
  clearUserAllSearchField();
  clickOn(userSearchIconUserName);
  cy.fixture('NewUser').then((data) => {
    userNameSearch = data.uIdUser + uniqueUI;
    fillText(userNameSearchField, userNameSearch);
    cy.get(searchButton).eq(1).click({ force: true });
    userNameSearch = data.uIdUser + uniqueUI;
    elementWithTextExist(userBlock, userNameSearch);
  });
  // clear all search field after search
  clearUserAllSearchField();
};
export const validateEditedUser = () => {
  // verify that user has been edited succesfully
  // search user and verify
  clearUserAllSearchField();
  // search edited user
  clickOn(userSearchIconUserName);
  cy.fixture('NewUser').then((data) => {
    userNameSearch = data.uIdUser + uniqueUI;
    fillText(userNameSearchField, userNameSearch);
    cy.get(searchButton).eq(1).click({ force: true });
    userNameSearch = data.uIdUser + uniqueUI;
    elementWithTextExist(userBlock, userNameSearch);
  });
  clearUserAllSearchField();
};
export const validateDeletedUser = () => {
  // verify that user has been deleted succssfully
  // user should not exist
  clearUserAllSearchField();
  // search deleted user
  clickOn(userSearchIconUserName);
  cy.fixture('NewUser').then((data) => {
    userNameSearch = data.uIdUser + uniqueUI;
    fillText(userNameSearchField, userNameSearch);
    // click on search button of user name search
    cy.get(searchButton).eq(1).click({ force: true });
    // verify user name
    userNameSearch = data.uIdUser + uniqueUI;
    elementWithTextNotExist(userBlock, userNameSearch);
  });
  clearUserAllSearchField();
};
export const clickEditUser = () => {
  //  click on edit icon of serched user to edit
  clearUserAllSearchField();
  // search user from username
  clickOn(userSearchIconUserName);
  cy.fixture('NewUser').then((data) => {
    testUser = data.uIdUser + uniqueUI;
    fillText(userNameSearchField, testUser);
  });
  cy.get(searchButton).eq(1).click({ force: true });
  cy.fixture('NewUser').then((data) => {
    testUser = data.uIdUser + uniqueUI;
    elementWithTextExist(userBlock, testUser);
    // click on edit icon of user
    cy.get(userBlock)
      .find('tr')
      .filter(`:contains(${testUser})`)
      .within(() => {
        cy.get(editIcon).click({ force: true });
      });
  });
};
export const clickEditUserForPermissionInMultilevel = (UserName: string) => {
  /* it is developed specially for a single test case , username used as a
    parameter to pass the value of an user */
  clearUserAllSearchField();
  clickOn(userSearchIconUserName);
  fillText(userNameSearchField, UserName);
  cy.get(searchButton).eq(1).click({ force: true });
  elementWithTextExist(userBlock, UserName);
  //  click on edit icon of user
  cy.get(userBlock)
    .find('tr')
    .filter(`:contains(${UserName})`)
    .within(() => {
      cy.get(editIcon).click({ force: true });
    });
};
export const deleteUser = () => {
  // To delete an user first search it , click on delete icon and click on YES
  clearUserAllSearchField();
  clickOn(userSearchIconUserName);
  cy.fixture('NewUser').then((data) => {
    testUser = data.uIdUser + uniqueUI;
    fillText(userNameSearchField, testUser);
  });
  // click on serch button of search option
  cy.get(searchButton).eq(1).click({ force: true });
  cy.fixture('NewUser').then((data) => {
    testUser = data.uIdUser + uniqueUI;
    elementWithTextExist(userBlock, testUser);
    // click on delete icon of the user
    cy.get(userBlock)
      .find('tr')
      .filter(`:contains(${testUser})`)
      .within(() => {
        cy.get(delIcon).click({ force: true });
      });
    // click on pop-up
    cy.wait(2000);
    cy.get('div[role=\'dialog\']').contains(YES).click({ force: true });
    // clickOnText(YES);
    cy.wait(2000);
    clearUserAllSearchField();
  });
};
export const userDisplayDeleted = () => {
  clearUserAllSearchField();
  cy.get(userDisplayDeletedCheckBox).check();
  clickOn(userSearchIconUserName);
  cy.fixture('NewUser').then((data) => {
    testUser = data.uIdUser + uniqueUI;
    fillText(userNameSearchField, testUser);
  });
  cy.get(searchButton).eq(1).click({ force: true });
  cy.fixture('NewUser').then((data) => {
    testUser = data.uIdUser + uniqueUI;
    elementWithTextExist(userBlock, testUser);
  });
  cy.get(userDisplayDeletedCheckBox).uncheck();
  cy.fixture('NewUser').then((data) => {
    testUser = data.uIdUser + uniqueUI;
    elementWithTextNotExist(userBlock, testUser);
  });
  cy.wait(2000);
  clearUserAllSearchField();
};
export const deletedUserEditDelIconBug31 = () => {
  clearUserAllSearchField();
  // check display deleted check box
  cy.get(userDisplayDeletedCheckBox).check();
  // click on userName search icon
  clickOn(userSearchIconUserName);
  cy.fixture('NewUser').then((data) => {
    testUser = data.uIdUser + uniqueUI;
    // fill userName into search field
    fillText(userNameSearchField, testUser);
  });
  // click on search button
  cy.get(searchButton).eq(1).click({ force: true });
  cy.fixture('NewUser').then((data) => {
    testUser = data.uIdUser + uniqueUI;
    // verification that user is present
    elementWithTextExist(userBlock, testUser);
  });
  // verify edit icon
  userEditIconShldNotPrsnt();
  // verify delete icpn
  userDeleteIconShldNotPrsnt();
  cy.wait(2000);
  clearUserAllSearchField();
};
export const clearUserAllSearchField = () => {
  // clear all search field (id, userName, first name, last name)
  // clear id search field
  clearSearchFeed(userSearchIconID, userIdSearchField, searchButton, '0');
  // clear userName search field
  clearSearchFeed(
    userSearchIconUserName,
    userNameSearchField,
    searchButton,
    '1'
  );
  // clear first name search field
  clearSearchFeed(
    userSearchIconFirstName,
    userFirstNameSearchField,
    searchButton,
    '2'
  );
  // clear last name search field
  clearSearchFeed(
    userSearchIconLastName,
    userLastNameSearchField,
    searchButton,
    '3'
  );
};
export const searchUserByID = () => {
  // search user by using their id
  // click on ok button of error msg for duplicate email.
  clickContainingText(errorElmnt, OK);
  cy.go(BACK);
  clearUserAllSearchField();
  // first search userName to get userId
  // we used user name for first search
  clickOn(userSearchIconUserName);
  cy.fixture('NewUser').then((data) => {
    testUser = data.uIdUser + uniqueUI;
    // fill text into user name search field
    fillText(userNameSearchField, testUser);
    cy.get(searchButton).eq(1).click({ force: true });
    elementWithTextExist(userBlock, testUser);
  });
  // get user id by invoking the text
  cy.get(userId)
    .eq(0)
    .invoke('text')
    .then((testId) => {
      //  use userUiId variable to store user id
      userUiId = testId;
      // Clear all search field
      clearUserAllSearchField();
      // now sear user id by id search functionality
      clickOn(userSearchIconID);
      fillText(userIdSearchField, userUiId);
      cy.get(searchButton).eq(0).click({ force: true });
      // verify that search user id should exist
      elementWithTextExist(userBlock, userUiId);
    });
  clearUserAllSearchField();
};
export const searchUserByUsername = () => {
  clearUserAllSearchField();
  clickOn(userSearchIconUserName);
  cy.fixture('NewUser').then((data) => {
    testUser = data.uIdUser + uniqueUI;
    fillText(userNameSearchField, testUser);
    cy.get(searchButton).eq(1).click({ force: true });
    elementWithTextExist(userBlock, testUser);
  });
  clearUserAllSearchField();
};
export const searchUserByFirstName = () => {
  clearUserAllSearchField();
  clickOn(userSearchIconFirstName);
  cy.fixture('NewUser').then((data) => {
    fillText(userFirstNameSearchField, data.searchFirtName);
  });
  cy.get(searchButton).eq(2).click({ force: true });
  cy.fixture('NewUser').then((data) => {
    elementWithTextExist(userBlock, data.searchFirtName);
  });
};
export const searchUserByLastName = () => {
  clearUserAllSearchField();
  clickOn(userSearchIconLastName);
  cy.fixture('NewUser').then((data) => {
    fillText(userLastNameSearchField, data.newUserLastName);
  });
  cy.get(searchButton).eq(3).click({ force: true });
  cy.fixture('NewUser').then((data) => {
    elementWithTextExist(userBlock, data.newUserLastName);
  });
  clearUserAllSearchField();
};
export const sortUserByID = () => {
  clickContainingText(menuSubmenuBlock, USERS);
  cy.wait(2000);
  cy.get(userTable).get(userTableHeader).should('have.length', 7);
  const isSorted = (reverse: boolean = false) => {
    cy.get(userId).then((items) => {
      const unsortedItems = items
        .map((index, html) => +Cypress.$(html).text())
        .get();
      console.log(unsortedItems);
      // eslint-disable-next-line @typescript-eslint/require-array-sort-compare
      let sortedItems = unsortedItems.sort(); // .reverse();
      if (reverse) {
        sortedItems = sortedItems.reverse();
      }
      console.log(sortedItems);
      expect(unsortedItems, 'Items are sorted').to.deep.equal(sortedItems);
    });
  };
  // Verify sorting in descending
  isSorted();
  cy.get(userTableHeaderElmnt).eq(0).click();
  // Verify sorting in ascending
  isSorted(true);
};
export const sortUserByUserName = () => {
  // Verify sorting in descending
  cy.get(userUserNameHeader).click();
  cy.get(userUserName).then((items) => {
    const unsortedItems = items
      .map((index, html) => Cypress.$(html).text())
      .get();
    console.log(unsortedItems);
    const sortedItems = unsortedItems.sort(); // .reverse();
    console.log(sortedItems);
    expect(unsortedItems, 'Items are sorted').to.deep.equal(sortedItems);
  });
  // Verify sorting in ascending
  cy.get(userUserNameHeader).click();
  cy.get(userUserName).then((items) => {
    const unsortedItems = items
      .map((index, html) => Cypress.$(html).text())
      .get();
    const sortedItems = unsortedItems.sort();
    expect(unsortedItems, 'Items are sorted').to.deep.equal(sortedItems);
  });
};
export const sortUserByOrga = () => {
  // Verify sorting in descending
  cy.get(userOrganizationHeader).click();
  cy.get(userOrganization).then((items) => {
    const unsortedItems = items
      .map((index, html) => Cypress.$(html).text())
      .get();
    const sortedItems = unsortedItems.sort().reverse();
    expect(unsortedItems, 'Items are sorted').to.deep.equal(sortedItems);
  });
  // Verify sorting in ascending
  cy.get(userOrganizationHeader).click();
  cy.get(userOrganization).then((items) => {
    const unsortedItems = items
      .map((index, html) => Cypress.$(html).text())
      .get();
    const sortedItems = unsortedItems.sort();
    expect(unsortedItems, 'Items are sorted').to.deep.equal(sortedItems);
  });
};
export const sortUserByFirstName = () => {
  // Verify sorting in descending
  cy.get(userFirstNameHeader).click();
  cy.get(userFirstName).then((items) => {
    const unsortedItems = items
      .map((index, html) => Cypress.$(html).text())
      .get();
    const sortedItems = unsortedItems.sort().reverse();
    expect(unsortedItems, 'Items are sorted').to.deep.equal(sortedItems);
  });
  // Verify sorting in ascending
  cy.get(userFirstNameHeader).click();
  cy.get(userFirstName).then((items) => {
    const unsortedItems = items
      .map((index, html) => Cypress.$(html).text())
      .get();
    const sortedItems = unsortedItems.sort();
    expect(unsortedItems, 'Items are sorted').to.deep.equal(sortedItems);
  });
};
export const sortUserByLastName = () => {
  // Verify sorting in descending
  cy.get(userLastNameHeader).click();
  cy.get(userLastName).then((items) => {
    const unsortedItems = items
      .map((index, html) => Cypress.$(html).text())
      .get();
    const sortedItems = unsortedItems.sort().reverse();
    expect(unsortedItems, 'Items are sorted').to.deep.equal(sortedItems);
  });
  // Verify sorting in ascending
  cy.get(userLastNameHeader).click();
  cy.get(userLastName).then((items) => {
    const unsortedItems = items
      .map((index, html) => Cypress.$(html).text())
      .get();
    const sortedItems = unsortedItems.sort();
    expect(unsortedItems, 'Items are sorted').to.deep.equal(sortedItems);
  });
};
export const paginationOnUserPage = () => {
  cy.get(userDisplayDeletedCheckBox).check();
  cy.get(userPageElement).click({ multiple: true });
  cy.get(userDisplayDeletedCheckBox).uncheck();
  cy.get(userPageElement).click({ multiple: true });
};
export const searchUserByIdBug28 = () => {
  clearUserAllSearchField();
  // cy.get(userDisplayDeletedCheckBox).eq(0).check();
  clickOn(userSearchIconUserName);
  cy.fixture('NewUser').then((data) => {
    testUser = data.uIdUser + uniqueUI;
    fillText(userNameSearchField, testUser);
    cy.get(searchButton).eq(1).click({ force: true });
    elementWithTextExist(userBlock, testUser);
  });
  cy.get(userId)
    .eq(0)
    .invoke('text')
    .then((textId) => {
      const myId = textId;
      clearUserAllSearchField();
      clickOn(userSearchIconID);
      fillText(userIdSearchField, myId);
      cy.get(searchButton).eq(0).click({ force: true });
      cy.get(userId).should('have.length.below', 2);
      cy.get('body', { timeout: 20000 }).then(($body) => {
        if ($body.find(noDataLabel).length === 1) {
          // evaluates as true if button exists at all
          console.log('test passed');
        } else {
          // expect(userId).to.be.eq(myId);
          cy.get(userId).should('have.text', myId);
        }
      });
      let subId = +myId / 10;
      subId = Math.floor(subId);
      clearUserAllSearchField();
      clickOn(userSearchIconID);
      fillText(userIdSearchField, subId);
      cy.get(searchButton).eq(0).click({ force: true });
      cy.get(userId).should('have.length.below', 2);
      cy.get('body', { timeout: 20000 }).then(($body) => {
        if ($body.find(noDataLabel).length === 1) {
          // evaluates as true if button exists at all
          console.log('test passed');
        } else {
          expect(userId).to.be.eq(subId);
          cy.get(userId).should('have.text', subId);
        }
      });
    });
  clearUserAllSearchField();
};
export const AdminUserDelIconShldNotaprsntBug08 = () => {
  // navigateToUserPage();
  clearUserAllSearchField();
  clickOn(userSearchIconUserName);
  cy.fixture('LoginCredentials').then((data) => {
    testUser = data.validUserAdmin;
    fillText(userNameSearchField, testUser);
    cy.get(searchButton).eq(1).click({ force: true });
    elementWithTextExist(userBlock, testUser);
    cy.get(userBlock)
      .filter(`:contains(${testUser})`)
      .within(() => {
        cy.get(userDelIcon).should('not.exist');
      });
  });
  clearUserAllSearchField();
};
// Parent (connectel) user should not be visible
export const verifyParentUser = () => {
  navigateToUserPage();
  // parent user's organization name appear as an empty string
  // So we verify it by checking it should not be empty
  cy.get(userOrganization).should('not.be.empty');
};
export const verifyResetFilter = () => {
  // verify the working of reset filter button
  // find the number of row and assign it with a variable
  cy.get(table)
    .find('tr')
    .then((row) => {
      const num1 = row.length;
      // clear all search field
      clearUserAllSearchField();
      // apply filter by search user name
      clickOn(userSearchIconUserName);
      cy.fixture('NewUser').then((data) => {
        testUser = data.uIdUser + uniqueUI;
        fillText(userNameSearchField, testUser);
        cy.get(searchButton).eq(1).click({ force: true });
        // verify that user exist at page
        elementWithTextExist(userBlock, testUser);
      });
      // click on reset filter button
      clickResetFilter();
      // verify the number of rows from num1
      cy.get(table).find('tr').should('have.length', num1);
    });
};
