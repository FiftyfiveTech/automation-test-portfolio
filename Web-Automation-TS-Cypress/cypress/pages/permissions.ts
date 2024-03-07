import {
  checkPermission,
  clickAllowButton,
  clickContainingText,
  clickFilterButton,
  clickOnText,
  elementWithTextNotExist,
  elementWithTextExist,
  uncheckPermission
} from '../utils/cypressMethod.util';
import {
  ADD_ITEM,
  ADMIN_PROFILE,
  CONNECTEL,
  CREATE,
  DELETE,
  DISPOSITION,
  DISPOSITIONS,
  EDIT,
  EDIT_ADMIN_PROFILE,
  ORGANIZATION,
  ORGANIZATIONS,
  READ,
  SAVE,
  TAG,
  TAGS,
  TEST_ADMIN_PROFILE,
  USER,
  USERS
} from '../utils/constants.util';
import {
  addAdminProfile,
  navigateToAddAdminProfilePage
} from './addAdminProfilePage';
import { addDisposition, navigateToAddDisposPage } from './addDispositionsPage';
import { addTags, navigateToAddNewTagsPage } from './addTagsPage';
import { addUser, navigateToAddUsersPage } from './addUserPage';
import {
  adminProfileBlock,
  apAddNewButtonShldNotPrsnt,
  apAddNewButtonShldPrsnt,
  apDeleteIconShldNotPrsnt,
  apDeleteIconShldPrsnt,
  apEditIconShldPrsnt,
  clickEditApForPermissionInMultilevel,
  deleteAdminProfileForPermission,
  navigateToAdminProfilePage
} from './adminProfilePage';
import {
  deleteDisposForPermission,
  disposAddNewButtonShldNotPrsnt,
  disposAddNewButtonShldPrsnt,
  disposDeleteIconShldNotPrsnt,
  disposDeleteIconShldPrsnt,
  disposEditIconShldNotPrsnt,
  disposEditIconShldPrsnt,
  navigateToDispositionPage
} from './dispositionsPage';
import {
  editAdminProfileHeaderShldPrsnt,
  navigateToEditAdminProfilePage,
  navigateToEditApForBug14,
  navigateToEditApForPermission,
  navigateToEditAppermissionForSuper
} from './editAdminProfilePage';
import {
  clickAdminProfile,
  clickDisposition,
  clickHamburgerMenu,
  clickOrganization,
  clickStaff,
  clickTags,
  clickTools,
  clickUser,
  menuSubmenuBlock
} from './home.page';
import {
  fillPassword,
  fillUsername,
  redirectForUserLogin,
  submit,
  visit
} from './login.page';
import {
  dataTable,
  deletIconShldNotPrsnt,
  deleteIconShldPrsnt,
  delIcon,
  editIcon,
  editIconShldNotPrsnt,
  editIconShldPrsnt
} from './multilevel';
import {
  orgEditIconShldNotPrsnt,
  orgEditIconShldPrsnt
} from './organizationPage';
import {
  deleteTagForPermission,
  navigateToTagsPage,
  tagAddNewButtonShldNotPrsnt,
  tagAddNewButtonShldPrsnt,
  tagDeleteIconShldNotPrsnt,
  tagDeleteIconShldPrsnt,
  tagEditIconShldNotPrsnt,
  tagEditIconShldPrsnt
} from './tagsPage';
import {
  deleteUser,
  navigateToUserPage,
  uniqueUI,
  uniqueUI2,
  uniqueUI3,
  uniqueUI4,
  userAddNewButtonShldNotPrsnt,
  userAddNewButtonShldPrsnt,
  userDeleteIconShldNotPrsnt,
  userDeleteIconShldPrsnt,
  userEditIconShldNotPrsnt,
  userEditIconShldPrsnt,
  userHeaderShldPrsnt
} from './usersPage';

const adminProfilePermissionRow =
  'div[class=\'form-list-wrapper\']>div>div>div>div';
const permissionCheckBox = 'input[type=\'checkbox\']';
const editAdminProfileBlock = 'div[class=\'entity-form-edit\']';
const allowFilterButton = 'button[role=\'switch\']';
const filterTextField =
  'div[class=\'ant-select-selection-overflow\']>div>div>input[type=\'search\']';
const userFilterList = 'div[class=\'rc-virtual-list\']>div';
const filterList = 'div[class=\'rc-virtual-list\']>div';
const filterSelectedList = 'div[class=\'ant-select-selection-overflow\']';
const filterAllDelIcon =
  'path[d=\'M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4-66.1.3c-4.4 0-8-3.5-8-8 0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 01-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4 66-.3c4.4 0 8 3.5 8 8 0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z\']';

let testData;
export const disableUserModule = () => {
  navigateToEditApForBug14();
  checkPermission(adminProfilePermissionRow, USER, permissionCheckBox, EDIT);
  checkPermission(adminProfilePermissionRow, USER, permissionCheckBox, DELETE);
  checkPermission(adminProfilePermissionRow, USER, permissionCheckBox, CREATE);
  clickAllowButton(adminProfilePermissionRow, USER, allowFilterButton); // dsiable allow button
  clickContainingText(editAdminProfileBlock, SAVE);
  cy.wait(3000);
  // elementHavingTextShldNotPrsnt(menuSubmenuBlock,USER);
};
export const filterAdminProfile = () => {
  navigateToEditAdminProfilePage();
  clickFilterButton(
    adminProfilePermissionRow,
    ADMIN_PROFILE,
    allowFilterButton
  );
  testData = TEST_ADMIN_PROFILE;
  cy.get(adminProfilePermissionRow)
    .filter(`:contains(${ADMIN_PROFILE})`)
    .within(() => {
      cy.get(filterTextField).eq(0).click({ force: true });
    });
  cy.get(filterList).contains(testData).click({ force: true });
  cy.get(adminProfilePermissionRow)
    .filter(`:contains(${ADMIN_PROFILE})`)
    .within(() => {
      cy
        .get(filterSelectedList)
        .eq(0)
        .contains(testData)
        .should('exist');
    });
  clickContainingText(editAdminProfileBlock, SAVE);
  cy.wait(3000);
};
export const userPermission = () => {
  navigateToUserPage();
  navigateToAddUsersPage();
  addUser();
  clickAdminProfile();
  navigateToEditApForPermission();
  checkPermission(adminProfilePermissionRow, USER, permissionCheckBox, EDIT);
  checkPermission(adminProfilePermissionRow, USER, permissionCheckBox, DELETE);
  checkPermission(adminProfilePermissionRow, USER, permissionCheckBox, CREATE);
  clickContainingText(editAdminProfileBlock, SAVE);
  cy.wait(3000);
  clickUser();
  userEditIconShldPrsnt();
  userDeleteIconShldPrsnt();
  userAddNewButtonShldPrsnt();
  // uncheck for edit
  clickAdminProfile();
  navigateToEditApForPermission();
  cy.wait(3000);
  uncheckPermission(adminProfilePermissionRow, USER, permissionCheckBox, EDIT);
  checkPermission(adminProfilePermissionRow, USER, permissionCheckBox, DELETE);
  checkPermission(adminProfilePermissionRow, USER, permissionCheckBox, CREATE);
  clickContainingText(editAdminProfileBlock, SAVE);
  cy.wait(3000);
  clickUser();
  userEditIconShldNotPrsnt();
  userDeleteIconShldPrsnt();
  userAddNewButtonShldPrsnt();
  // unchek for delete
  clickAdminProfile();
  navigateToEditApForPermission();
  cy.wait(3000);
  checkPermission(adminProfilePermissionRow, USER, permissionCheckBox, EDIT);
  uncheckPermission(
    adminProfilePermissionRow,
    USER,
    permissionCheckBox,
    DELETE
  );
  checkPermission(adminProfilePermissionRow, USER, permissionCheckBox, CREATE);
  clickContainingText(editAdminProfileBlock, SAVE);
  cy.wait(3000);
  clickUser();
  userEditIconShldPrsnt();
  userDeleteIconShldNotPrsnt();
  userAddNewButtonShldPrsnt();
  // unchek for create
  clickAdminProfile();
  navigateToEditApForPermission();
  cy.wait(3000);
  checkPermission(adminProfilePermissionRow, USER, permissionCheckBox, EDIT);
  checkPermission(adminProfilePermissionRow, USER, permissionCheckBox, DELETE);
  uncheckPermission(
    adminProfilePermissionRow,
    USER,
    permissionCheckBox,
    CREATE
  );
  clickContainingText(editAdminProfileBlock, SAVE);
  cy.wait(3000);
  clickUser();
  userEditIconShldPrsnt();
  userDeleteIconShldPrsnt();
  userAddNewButtonShldNotPrsnt();
  // unchek for edit, delete & create
  clickAdminProfile();
  navigateToEditApForPermission();
  cy.wait(3000);
  uncheckPermission(adminProfilePermissionRow, USER, permissionCheckBox, EDIT);
  uncheckPermission(
    adminProfilePermissionRow,
    USER,
    permissionCheckBox,
    DELETE
  );
  uncheckPermission(
    adminProfilePermissionRow,
    USER,
    permissionCheckBox,
    CREATE
  );
  clickContainingText(editAdminProfileBlock, SAVE);
  cy.wait(3000);
  clickUser();
  userEditIconShldNotPrsnt();
  userDeleteIconShldNotPrsnt();
  userAddNewButtonShldNotPrsnt();
  // DisAable allow button
  clickAdminProfile();
  navigateToEditApForPermission();
  cy.wait(3000);
  checkPermission(adminProfilePermissionRow, USER, permissionCheckBox, EDIT);
  checkPermission(adminProfilePermissionRow, USER, permissionCheckBox, DELETE);
  checkPermission(adminProfilePermissionRow, USER, permissionCheckBox, CREATE);
  clickAllowButton(adminProfilePermissionRow, USER, allowFilterButton); // dsiable allow button
  clickContainingText(editAdminProfileBlock, SAVE);
  cy.wait(3000);
  redirectForUserLogin();
  cy.wait(3000);
  elementWithTextNotExist(menuSubmenuBlock, USERS);
  // undo all changes.
  navigateToAdminProfilePage();
  navigateToEditApForPermission();
  cy.wait(3000);
  checkPermission(adminProfilePermissionRow, USER, permissionCheckBox, EDIT);
  checkPermission(adminProfilePermissionRow, USER, permissionCheckBox, DELETE);
  checkPermission(adminProfilePermissionRow, USER, permissionCheckBox, CREATE);
  clickAllowButton(adminProfilePermissionRow, USER, allowFilterButton); // enable allow button
  clickContainingText(editAdminProfileBlock, SAVE);
  cy.wait(3000);
  redirectForUserLogin();
  cy.wait(3000);
  navigateToUserPage();
  // deleteUser();
};
export const dispositionPermission = () => {
  navigateToDispositionPage();
  navigateToAddDisposPage();
  addDisposition();
  // add dispositon return to blank page that and reload redirect us for login
  redirectForUserLogin();
  clickStaff();
  clickAdminProfile();
  navigateToEditApForPermission();
  cy.wait(3000);
  checkPermission(
    adminProfilePermissionRow,
    DISPOSITION,
    permissionCheckBox,
    EDIT
  );
  checkPermission(
    adminProfilePermissionRow,
    DISPOSITION,
    permissionCheckBox,
    DELETE
  );
  checkPermission(
    adminProfilePermissionRow,
    DISPOSITION,
    permissionCheckBox,
    CREATE
  );
  clickContainingText(editAdminProfileBlock, SAVE);
  cy.wait(3000);
  clickTools();
  clickDisposition();
  disposEditIconShldPrsnt();
  disposDeleteIconShldPrsnt();
  disposAddNewButtonShldPrsnt();
  // uncheck for edit
  clickAdminProfile();
  navigateToEditApForPermission();
  cy.wait(3000);
  uncheckPermission(
    adminProfilePermissionRow,
    DISPOSITION,
    permissionCheckBox,
    EDIT
  );
  checkPermission(
    adminProfilePermissionRow,
    DISPOSITION,
    permissionCheckBox,
    DELETE
  );
  checkPermission(
    adminProfilePermissionRow,
    DISPOSITION,
    permissionCheckBox,
    CREATE
  );
  clickContainingText(editAdminProfileBlock, SAVE);
  cy.wait(3000);
  clickDisposition();
  disposEditIconShldNotPrsnt();
  disposDeleteIconShldPrsnt();
  disposAddNewButtonShldPrsnt();
  // unchek for delete
  clickAdminProfile();
  navigateToEditApForPermission();
  cy.wait(3000);
  checkPermission(
    adminProfilePermissionRow,
    DISPOSITION,
    permissionCheckBox,
    EDIT
  );
  uncheckPermission(
    adminProfilePermissionRow,
    DISPOSITION,
    permissionCheckBox,
    DELETE
  );
  checkPermission(
    adminProfilePermissionRow,
    DISPOSITION,
    permissionCheckBox,
    CREATE
  );
  clickContainingText(editAdminProfileBlock, SAVE);
  cy.wait(3000);
  clickDisposition();
  disposEditIconShldPrsnt();
  disposDeleteIconShldNotPrsnt();
  disposAddNewButtonShldPrsnt();
  // unchek for create
  clickAdminProfile();
  navigateToEditApForPermission();
  cy.wait(3000);
  checkPermission(
    adminProfilePermissionRow,
    DISPOSITION,
    permissionCheckBox,
    EDIT
  );
  checkPermission(
    adminProfilePermissionRow,
    DISPOSITION,
    permissionCheckBox,
    DELETE
  );
  uncheckPermission(
    adminProfilePermissionRow,
    DISPOSITION,
    permissionCheckBox,
    CREATE
  );
  clickContainingText(editAdminProfileBlock, SAVE);
  cy.wait(3000);
  clickDisposition();
  disposEditIconShldPrsnt();
  disposDeleteIconShldPrsnt();
  disposAddNewButtonShldNotPrsnt();
  // unchek for edit, delete & create
  clickAdminProfile();
  navigateToEditApForPermission();
  cy.wait(3000);
  uncheckPermission(
    adminProfilePermissionRow,
    DISPOSITION,
    permissionCheckBox,
    EDIT
  );
  uncheckPermission(
    adminProfilePermissionRow,
    DISPOSITION,
    permissionCheckBox,
    DELETE
  );
  uncheckPermission(
    adminProfilePermissionRow,
    DISPOSITION,
    permissionCheckBox,
    CREATE
  );
  clickContainingText(editAdminProfileBlock, SAVE);
  cy.wait(3000);
  clickDisposition();
  disposEditIconShldNotPrsnt();
  disposDeleteIconShldNotPrsnt();
  disposAddNewButtonShldNotPrsnt();
  // DisAable allow button
  clickAdminProfile();
  navigateToEditApForPermission();
  cy.wait(3000);
  checkPermission(
    adminProfilePermissionRow,
    DISPOSITION,
    permissionCheckBox,
    EDIT
  );
  checkPermission(
    adminProfilePermissionRow,
    DISPOSITION,
    permissionCheckBox,
    DELETE
  );
  checkPermission(
    adminProfilePermissionRow,
    DISPOSITION,
    permissionCheckBox,
    CREATE
  );
  clickAllowButton(adminProfilePermissionRow, DISPOSITION, allowFilterButton); // siable allow button
  clickContainingText(editAdminProfileBlock, SAVE);
  cy.wait(3000);
  redirectForUserLogin();
  clickHamburgerMenu();
  clickStaff();
  clickTools();
  cy.wait(3000);
  elementWithTextNotExist(menuSubmenuBlock, DISPOSITIONS);
  // undo all changes.
  clickAdminProfile();
  navigateToEditApForPermission();
  checkPermission(
    adminProfilePermissionRow,
    DISPOSITION,
    permissionCheckBox,
    EDIT
  );
  checkPermission(
    adminProfilePermissionRow,
    DISPOSITION,
    permissionCheckBox,
    DELETE
  );
  checkPermission(
    adminProfilePermissionRow,
    DISPOSITION,
    permissionCheckBox,
    CREATE
  );
  clickAllowButton(adminProfilePermissionRow, DISPOSITION, allowFilterButton); // enable allow button
  clickContainingText(editAdminProfileBlock, SAVE);
  cy.wait(3000);
  redirectForUserLogin();
  navigateToDispositionPage();
  cy.wait(3000);
  clickDisposition();
  deleteDisposForPermission();
};
export const tagPermission = () => {
  redirectForUserLogin();
  navigateToTagsPage();
  navigateToAddNewTagsPage();
  addTags();
  clickStaff();
  clickAdminProfile();
  navigateToEditApForPermission();
  cy.wait(3000);
  checkPermission(adminProfilePermissionRow, TAG, permissionCheckBox, EDIT);
  checkPermission(adminProfilePermissionRow, TAG, permissionCheckBox, DELETE);
  checkPermission(adminProfilePermissionRow, TAG, permissionCheckBox, CREATE);
  clickContainingText(editAdminProfileBlock, SAVE);
  cy.wait(3000);
  clickTools();
  clickTags();
  tagEditIconShldPrsnt();
  tagDeleteIconShldPrsnt();
  tagAddNewButtonShldPrsnt();
  // uncheck for edit
  clickAdminProfile();
  navigateToEditApForPermission();
  cy.wait(3000);
  uncheckPermission(adminProfilePermissionRow, TAG, permissionCheckBox, EDIT);
  checkPermission(adminProfilePermissionRow, TAG, permissionCheckBox, DELETE);
  checkPermission(adminProfilePermissionRow, TAG, permissionCheckBox, CREATE);
  clickContainingText(editAdminProfileBlock, SAVE);
  cy.wait(3000);
  clickTags();
  tagEditIconShldNotPrsnt();
  tagDeleteIconShldPrsnt();
  tagAddNewButtonShldPrsnt();
  // unchek for delete
  clickAdminProfile();
  navigateToEditApForPermission();
  cy.wait(3000);
  checkPermission(adminProfilePermissionRow, TAG, permissionCheckBox, EDIT);
  uncheckPermission(adminProfilePermissionRow, TAG, permissionCheckBox, DELETE);
  checkPermission(adminProfilePermissionRow, TAG, permissionCheckBox, CREATE);
  clickContainingText(editAdminProfileBlock, SAVE);
  cy.wait(3000);
  clickTags();
  tagEditIconShldPrsnt();
  tagDeleteIconShldNotPrsnt();
  tagAddNewButtonShldPrsnt();
  // unchek for create
  clickAdminProfile();
  navigateToEditApForPermission();
  cy.wait(3000);
  checkPermission(adminProfilePermissionRow, TAG, permissionCheckBox, EDIT);
  checkPermission(adminProfilePermissionRow, TAG, permissionCheckBox, DELETE);
  uncheckPermission(adminProfilePermissionRow, TAG, permissionCheckBox, CREATE);
  clickContainingText(editAdminProfileBlock, SAVE);
  cy.wait(3000);
  clickTags();
  tagEditIconShldPrsnt();
  tagDeleteIconShldPrsnt();
  tagAddNewButtonShldNotPrsnt();
  // unchek for edit, delete & create
  clickAdminProfile();
  navigateToEditApForPermission();
  cy.wait(3000);
  uncheckPermission(adminProfilePermissionRow, TAG, permissionCheckBox, EDIT);
  uncheckPermission(adminProfilePermissionRow, TAG, permissionCheckBox, DELETE);
  uncheckPermission(adminProfilePermissionRow, TAG, permissionCheckBox, CREATE);
  clickContainingText(editAdminProfileBlock, SAVE);
  cy.wait(3000);
  clickTags();
  tagEditIconShldNotPrsnt();
  tagDeleteIconShldNotPrsnt();
  tagAddNewButtonShldNotPrsnt();
  // Disable allow button
  clickAdminProfile();
  navigateToEditApForPermission();
  cy.wait(3000);
  checkPermission(adminProfilePermissionRow, TAG, permissionCheckBox, EDIT);
  checkPermission(adminProfilePermissionRow, TAG, permissionCheckBox, DELETE);
  checkPermission(adminProfilePermissionRow, TAG, permissionCheckBox, CREATE);
  clickAllowButton(adminProfilePermissionRow, TAG, allowFilterButton); // siable allow button
  clickContainingText(editAdminProfileBlock, SAVE);
  cy.wait(3000);
  redirectForUserLogin();
  clickHamburgerMenu();
  clickStaff();
  clickTools();
  cy.wait(3000);
  elementWithTextNotExist(menuSubmenuBlock, TAGS);
  // undo all changes.
  clickAdminProfile();
  navigateToEditApForPermission();
  cy.wait(3000);
  checkPermission(adminProfilePermissionRow, TAG, permissionCheckBox, EDIT);
  checkPermission(adminProfilePermissionRow, TAG, permissionCheckBox, DELETE);
  checkPermission(adminProfilePermissionRow, TAG, permissionCheckBox, CREATE);
  clickAllowButton(adminProfilePermissionRow, TAG, allowFilterButton); // enable allow button
  clickContainingText(editAdminProfileBlock, SAVE);
  cy.wait(3000);
  redirectForUserLogin();
  navigateToTagsPage();
  // clickTags();
  deleteTagForPermission();
};
export const organizationPermission = () => {
  navigateToAdminProfilePage();
  navigateToEditApForPermission();
  cy.wait(3000);
  checkPermission(
    adminProfilePermissionRow,
    ORGANIZATION,
    permissionCheckBox,
    EDIT
  );
  clickContainingText(editAdminProfileBlock, SAVE);
  cy.wait(3000);
  clickOrganization();
  // organizationHeaderShldPrsnt();
  orgEditIconShldPrsnt();
  // uncheck for edit
  clickAdminProfile();
  navigateToEditApForPermission();
  cy.wait(3000);
  uncheckPermission(
    adminProfilePermissionRow,
    ORGANIZATION,
    permissionCheckBox,
    EDIT
  );
  clickContainingText(editAdminProfileBlock, SAVE);
  cy.wait(3000);
  clickOrganization();
  orgEditIconShldNotPrsnt();
  // disable allow button
  clickAdminProfile();
  navigateToEditApForPermission();
  cy.wait(3000);
  checkPermission(
    adminProfilePermissionRow,
    ORGANIZATION,
    permissionCheckBox,
    EDIT
  );
  clickAllowButton(adminProfilePermissionRow, ORGANIZATION, allowFilterButton); // siable allow button
  clickContainingText(editAdminProfileBlock, SAVE);
  cy.wait(3000);
  redirectForUserLogin();
  cy.wait(3000);
  clickHamburgerMenu();
  clickStaff();
  elementWithTextNotExist(menuSubmenuBlock, ORGANIZATIONS);
  // undo
  clickAdminProfile();
  navigateToEditApForPermission();
  cy.wait(3000);
  checkPermission(
    adminProfilePermissionRow,
    ORGANIZATION,
    permissionCheckBox,
    EDIT
  );
  clickAllowButton(adminProfilePermissionRow, ORGANIZATION, allowFilterButton); // enable allow button
  clickContainingText(editAdminProfileBlock, SAVE);
  redirectForUserLogin();
  cy.wait(3000);
  clickHamburgerMenu();
  clickStaff();
  elementWithTextExist(menuSubmenuBlock, ORGANIZATIONS);
};
// Admin perofile permission test
export const adminProfilePermission = () => {
  navigateToAdminProfilePage();
  navigateToAddAdminProfilePage();
  addAdminProfile();
  redirectForUserLogin();
  navigateToAdminProfilePage();
  navigateToEditApForPermission();
  cy.wait(3000);
  checkPermission(
    adminProfilePermissionRow,
    ADMIN_PROFILE,
    permissionCheckBox,
    EDIT
  );
  checkPermission(
    adminProfilePermissionRow,
    ADMIN_PROFILE,
    permissionCheckBox,
    DELETE
  );
  checkPermission(
    adminProfilePermissionRow,
    ADMIN_PROFILE,
    permissionCheckBox,
    CREATE
  );
  clickContainingText(editAdminProfileBlock, SAVE);
  cy.wait(3000);
  apEditIconShldPrsnt();
  apDeleteIconShldPrsnt();
  apAddNewButtonShldPrsnt();
  // unchek for delete
  cy.wait(3000);
  navigateToEditApForPermission();
  cy.wait(3000);
  checkPermission(
    adminProfilePermissionRow,
    ADMIN_PROFILE,
    permissionCheckBox,
    EDIT
  );
  uncheckPermission(
    adminProfilePermissionRow,
    ADMIN_PROFILE,
    permissionCheckBox,
    DELETE
  );
  checkPermission(
    adminProfilePermissionRow,
    ADMIN_PROFILE,
    permissionCheckBox,
    CREATE
  );
  clickContainingText(editAdminProfileBlock, SAVE);
  cy.wait(3000);
  apEditIconShldPrsnt();
  apDeleteIconShldNotPrsnt();
  apAddNewButtonShldPrsnt();
  // unchek for create
  cy.wait(3000);
  navigateToEditApForPermission();
  cy.wait(3000);
  checkPermission(
    adminProfilePermissionRow,
    ADMIN_PROFILE,
    permissionCheckBox,
    EDIT
  );
  checkPermission(
    adminProfilePermissionRow,
    ADMIN_PROFILE,
    permissionCheckBox,
    DELETE
  );
  uncheckPermission(
    adminProfilePermissionRow,
    ADMIN_PROFILE,
    permissionCheckBox,
    CREATE
  );
  clickContainingText(editAdminProfileBlock, SAVE);
  cy.wait(3000);
  apEditIconShldPrsnt();
  apDeleteIconShldPrsnt();
  apAddNewButtonShldNotPrsnt();
  // undo all changes.
  navigateToEditApForPermission();
  cy.wait(3000);
  checkPermission(
    adminProfilePermissionRow,
    ADMIN_PROFILE,
    permissionCheckBox,
    EDIT
  );
  checkPermission(
    adminProfilePermissionRow,
    ADMIN_PROFILE,
    permissionCheckBox,
    DELETE
  );
  checkPermission(
    adminProfilePermissionRow,
    ADMIN_PROFILE,
    permissionCheckBox,
    CREATE
  );
  // clickAllowButton(adminProfilePermissionRow,ADMIN_PROFILE,allowFilterButton); // enable allow button
  clickContainingText(editAdminProfileBlock, SAVE);
  cy.wait(3000);
  deleteAdminProfileForPermission();
};
export const selectItemFromUserFilter = () => {
  // navigateToUserPage();
  // navigateToAddUsersPage();
  // addUser();
  clickAdminProfile();
  navigateToEditApForPermission();
  // enable filter
  clickFilterButton(adminProfilePermissionRow, USER, allowFilterButton);
  // select itom into filter
  cy.fixture('NewUser').then((data) => {
    // username to select into filter
    testData = data.uIdUser + uniqueUI;
    // click on filter text field
    cy.get(adminProfilePermissionRow)
      .filter(`:contains(${USER})`)
      .within(() => {
        cy.get(filterTextField).eq(0).click({ force: true });
      });
    // click on item(username)
    cy.get(userFilterList).contains(testData).click({ force: true });
    // verified that item (username) is selected successfully
    cy.get(adminProfilePermissionRow)
      .filter(`:contains(${USER})`)
      .within(() => {
        cy
          .get(filterSelectedList)
          .eq(0)
          .contains(testData)
          .should('exist');
      });
  });
  // uncheck the permission for edit and delete
  uncheckPermission(adminProfilePermissionRow, USER, permissionCheckBox, EDIT);
  uncheckPermission(
    adminProfilePermissionRow,
    USER,
    permissionCheckBox,
    DELETE
  );
  clickContainingText(editAdminProfileBlock, SAVE);
  // verify data and permissions
  cy.wait(2000);
  clickUser();
  userHeaderShldPrsnt();
  cy.wait(3000);
  userEditIconShldNotPrsnt();
  userDeleteIconShldNotPrsnt();
  clickAdminProfile();
  cy.wait(3000);
  navigateToEditApForPermission();
  // disable filter
  clickFilterButton(adminProfilePermissionRow, USER, allowFilterButton);
  // cy.fixture('NewUser').then((data) => {
  //     testData = data.uIdUser + uniqueUI;
  //     cy.get(adminProfilePermissionRow).filter(`:contains(${USER})`).within(() => {
  //         return cy.get(filterTextField).eq(0).click({ force: true })
  //     });
  //     cy.get(userFilterList).contains(testData).click({ force: true });
  //     cy.get(adminProfilePermissionRow).filter(`:contains(${USER})`).within(() => {
  //         return cy.get(filterSelectedList).eq(0).contains(testData).should('exist')
  //     });
  //     clickContainingText(editAdminProfileBlock, EDIT_ADMIN_PROFILE);
  //     cy.get(adminProfilePermissionRow).filter(`:contains(${USER})`).within(() => {
  //         return cy.get(filterAllDelIcon).click();
  //     })
  // })
  // reset all the change made above
  checkPermission(adminProfilePermissionRow, USER, permissionCheckBox, EDIT);
  checkPermission(adminProfilePermissionRow, USER, permissionCheckBox, DELETE);
  checkPermission(adminProfilePermissionRow, USER, permissionCheckBox, CREATE);
  clickContainingText(editAdminProfileBlock, SAVE);
  clickUser();
  cy.wait(3000);
  // deleteUser();
  clickAdminProfile();
  // deleteAdminProfile();
};
export const deleteSingleItemFromUserFilter = () => {
  // navigateToUserPage();
  // navigateToAddUsersPage();
  // addUser();
  clickAdminProfile();
  navigateToEditApForPermission();
  cy.wait(2000);
  // enable filter button
  clickFilterButton(adminProfilePermissionRow, USER, allowFilterButton);
  cy.fixture('NewUser').then((data) => {
    // username to selecet into filter
    testData = data.uIdUser + uniqueUI;
    // click on filter text field
    cy.wait(2000);
    cy.get(adminProfilePermissionRow)
      .filter(`:contains(${USER})`)
      .within(() => {
        cy.get(filterTextField).eq(0).click({ force: true });
      });
    // select item(username) into filter
    cy.get(userFilterList).contains(testData).click({ force: true });
    // verified that item(username) selected successfully
    cy.get(adminProfilePermissionRow)
      .filter(`:contains(${USER})`)
      .within(() => {
        cy
          .get(filterSelectedList)
          .eq(0)
          .contains(testData)
          .should('exist');
      });
    clickContainingText(editAdminProfileBlock, EDIT_ADMIN_PROFILE);
    // delete selected item(username)
    cy.get(adminProfilePermissionRow)
      .filter(`:contains(${USER})`)
      .within(() => {
        cy
          .get(filterSelectedList)
          .eq(0)
          .should('be.visible')
          .type('{backspace}');
      });
  });
  clickContainingText(menuSubmenuBlock, USERS);
  // deleteUser();
};
export const deleteAllItemFromUserFilter = () => {
  // navigateToUserPage();
  // navigateToAddUsersPage();
  // addUser();
  clickAdminProfile();
  navigateToEditApForPermission();
  cy.wait(2000);
  // enable filter
  clickFilterButton(adminProfilePermissionRow, USER, allowFilterButton);
  cy.fixture('NewUser').then((data) => {
    // data for selection
    testData = data.uIdUser + uniqueUI;
    // click on filter text field
    cy.wait(2000);
    cy.get(adminProfilePermissionRow)
      .filter(`:contains(${USER})`)
      .within(() => {
        cy.get(filterTextField).eq(0).click({ force: true });
      });
    // select item(username)
    cy.get(userFilterList).contains(testData).click({ force: true });
    // verified that item(username is selected successfully)
    cy.get(adminProfilePermissionRow)
      .filter(`:contains(${USER})`)
      .within(() => {
        cy
          .get(filterSelectedList)
          .eq(0)
          .contains(testData)
          .should('exist');
      });
    clickContainingText(editAdminProfileBlock, EDIT_ADMIN_PROFILE);
    // click on delete icon into filter for all item(users)
    cy.get(adminProfilePermissionRow)
      .filter(`:contains(${USER})`)
      .within(() => {
        cy.get(filterAllDelIcon).click({ force: true });
      });
  });
  clickContainingText(menuSubmenuBlock, USERS);
  cy.wait(2000);
  // delete the added  user
  deleteUser();
};
export const selecteItemFromApFilter = () => {
  cy.wait(2000);
  clickAdminProfile();
  // navigateToAdminProfilePage();
  navigateToEditApForPermission();
  // enable filter for admin profile
  clickFilterButton(
    adminProfilePermissionRow,
    ADMIN_PROFILE,
    allowFilterButton
  );
  testData = TEST_ADMIN_PROFILE;
  // click on filter text field
  cy.get(adminProfilePermissionRow)
    .filter(`:contains(${ADMIN_PROFILE})`)
    .within(() => {
      cy.get(filterTextField).eq(0).click({ force: true });
    });
  // select item into filter
  cy.get(filterList).contains(testData).click({ force: true });
  // verify that item is selected into filter successfully
  cy.get(adminProfilePermissionRow)
    .filter(`:contains(${ADMIN_PROFILE})`)
    .within(() => {
      cy
        .get(filterSelectedList)
        .eq(0)
        .contains(testData)
        .should('exist');
    });
  // save changes
  clickContainingText(editAdminProfileBlock, SAVE);
  cy.wait(3000);
  cy.get(adminProfileBlock)
    .find('tr')
    .filter(`:contains(${testData as string})`)
    .within(() => {
      cy.get(editIcon).should('exist');
    });
  cy.get(adminProfileBlock)
    .find('tr')
    .filter(`:contains(${testData as string})`)
    .within(() => {
      cy.get(delIcon).should('exist');
    });
  apAddNewButtonShldNotPrsnt();
  navigateToEditApForPermission();
  // reset all changes to default
  clickFilterButton(
    adminProfilePermissionRow,
    ADMIN_PROFILE,
    allowFilterButton
  );
  cy.wait(2000);
  // check create check box
  checkPermission(
    adminProfilePermissionRow,
    ADMIN_PROFILE,
    permissionCheckBox,
    CREATE
  );
  clickContainingText(editAdminProfileBlock, SAVE);
};
// for super admin login
export const orgFilterBug23 = () => {
  navigateToAdminProfilePage();
  navigateToEditAppermissionForSuper();
  clickFilterButton(adminProfilePermissionRow, ORGANIZATION, allowFilterButton);
  cy.get(adminProfilePermissionRow)
    .filter(`:contains(${ORGANIZATION})`)
    .within(() => {
      cy.get(filterTextField).eq(0).click({ force: true });
    });
  cy.get(filterList).contains(CONNECTEL).should('not.exist');
};
export const undoAllChanges = () => {};
export const editApForPermissionInMultilevel = () => {
  visit();
  cy.fixture('LoginCredentials').then((data) => {
    fillUsername(data.LEVEL_1_USERNAME);
    fillPassword(data.validPassword);
  });
  submit();
  navigateToAdminProfilePage();
  // for level 1 Admin profile
  clickEditApForPermissionInMultilevel(uniqueUI);
  cy.wait(2000);
  editAdminProfileHeaderShldPrsnt();
  uncheckPermission(adminProfilePermissionRow, USER, permissionCheckBox, EDIT);
  uncheckPermission(
    adminProfilePermissionRow,
    USER,
    permissionCheckBox,
    DELETE
  );
  uncheckPermission(
    adminProfilePermissionRow,
    USER,
    permissionCheckBox,
    CREATE
  );
  cy.wait(2000);
  uncheckPermission(
    adminProfilePermissionRow,
    ADMIN_PROFILE,
    permissionCheckBox,
    EDIT
  );
  uncheckPermission(
    adminProfilePermissionRow,
    ADMIN_PROFILE,
    permissionCheckBox,
    DELETE
  );
  uncheckPermission(
    adminProfilePermissionRow,
    ADMIN_PROFILE,
    permissionCheckBox,
    CREATE
  );
  cy.wait(2000);
  uncheckPermission(
    adminProfilePermissionRow,
    ORGANIZATION,
    permissionCheckBox,
    EDIT
  );
  cy.wait(2000);
  uncheckPermission(adminProfilePermissionRow, TAG, permissionCheckBox, EDIT);
  uncheckPermission(adminProfilePermissionRow, TAG, permissionCheckBox, DELETE);
  uncheckPermission(adminProfilePermissionRow, TAG, permissionCheckBox, CREATE);
  cy.wait(2000);
  uncheckPermission(
    adminProfilePermissionRow,
    DISPOSITION,
    permissionCheckBox,
    EDIT
  );
  uncheckPermission(
    adminProfilePermissionRow,
    DISPOSITION,
    permissionCheckBox,
    DELETE
  );
  uncheckPermission(
    adminProfilePermissionRow,
    DISPOSITION,
    permissionCheckBox,
    CREATE
  );
  clickContainingText(editAdminProfileBlock, SAVE);
  cy.wait(3000);
  // for level 2 child 1 Admin profile
  clickEditApForPermissionInMultilevel(uniqueUI2);
  cy.wait(2000);
  editAdminProfileHeaderShldPrsnt();
  uncheckPermission(adminProfilePermissionRow, USER, permissionCheckBox, EDIT);
  uncheckPermission(
    adminProfilePermissionRow,
    USER,
    permissionCheckBox,
    DELETE
  );
  uncheckPermission(
    adminProfilePermissionRow,
    USER,
    permissionCheckBox,
    CREATE
  );
  cy.wait(2000);
  uncheckPermission(
    adminProfilePermissionRow,
    ADMIN_PROFILE,
    permissionCheckBox,
    EDIT
  );
  uncheckPermission(
    adminProfilePermissionRow,
    ADMIN_PROFILE,
    permissionCheckBox,
    DELETE
  );
  uncheckPermission(
    adminProfilePermissionRow,
    ADMIN_PROFILE,
    permissionCheckBox,
    CREATE
  );
  cy.wait(2000);
  uncheckPermission(
    adminProfilePermissionRow,
    ORGANIZATION,
    permissionCheckBox,
    EDIT
  );
  cy.wait(2000);
  uncheckPermission(adminProfilePermissionRow, TAG, permissionCheckBox, EDIT);
  uncheckPermission(adminProfilePermissionRow, TAG, permissionCheckBox, DELETE);
  uncheckPermission(adminProfilePermissionRow, TAG, permissionCheckBox, CREATE);
  cy.wait(2000);
  uncheckPermission(
    adminProfilePermissionRow,
    DISPOSITION,
    permissionCheckBox,
    EDIT
  );
  uncheckPermission(
    adminProfilePermissionRow,
    DISPOSITION,
    permissionCheckBox,
    DELETE
  );
  uncheckPermission(
    adminProfilePermissionRow,
    DISPOSITION,
    permissionCheckBox,
    CREATE
  );
  clickContainingText(editAdminProfileBlock, SAVE);
  cy.wait(3000);
  // for level 2 child 2 Admin profile
  clickEditApForPermissionInMultilevel(uniqueUI3);
  cy.wait(2000);
  editAdminProfileHeaderShldPrsnt();
  uncheckPermission(adminProfilePermissionRow, USER, permissionCheckBox, EDIT);
  uncheckPermission(
    adminProfilePermissionRow,
    USER,
    permissionCheckBox,
    DELETE
  );
  uncheckPermission(
    adminProfilePermissionRow,
    USER,
    permissionCheckBox,
    CREATE
  );
  cy.wait(2000);
  uncheckPermission(
    adminProfilePermissionRow,
    ADMIN_PROFILE,
    permissionCheckBox,
    EDIT
  );
  uncheckPermission(
    adminProfilePermissionRow,
    ADMIN_PROFILE,
    permissionCheckBox,
    DELETE
  );
  uncheckPermission(
    adminProfilePermissionRow,
    ADMIN_PROFILE,
    permissionCheckBox,
    CREATE
  );
  cy.wait(2000);
  uncheckPermission(
    adminProfilePermissionRow,
    ORGANIZATION,
    permissionCheckBox,
    EDIT
  );
  cy.wait(2000);
  uncheckPermission(adminProfilePermissionRow, TAG, permissionCheckBox, EDIT);
  uncheckPermission(adminProfilePermissionRow, TAG, permissionCheckBox, DELETE);
  uncheckPermission(adminProfilePermissionRow, TAG, permissionCheckBox, CREATE);
  cy.wait(2000);
  uncheckPermission(
    adminProfilePermissionRow,
    DISPOSITION,
    permissionCheckBox,
    EDIT
  );
  uncheckPermission(
    adminProfilePermissionRow,
    DISPOSITION,
    permissionCheckBox,
    DELETE
  );
  uncheckPermission(
    adminProfilePermissionRow,
    DISPOSITION,
    permissionCheckBox,
    CREATE
  );
  clickContainingText(editAdminProfileBlock, SAVE);
  cy.wait(3000);
  // for level 3 Admin profile
  clickEditApForPermissionInMultilevel(uniqueUI4);
  cy.wait(2000);
  editAdminProfileHeaderShldPrsnt();
  uncheckPermission(adminProfilePermissionRow, USER, permissionCheckBox, EDIT);
  uncheckPermission(
    adminProfilePermissionRow,
    USER,
    permissionCheckBox,
    DELETE
  );
  uncheckPermission(
    adminProfilePermissionRow,
    USER,
    permissionCheckBox,
    CREATE
  );
  cy.wait(2000);
  uncheckPermission(
    adminProfilePermissionRow,
    ADMIN_PROFILE,
    permissionCheckBox,
    EDIT
  );
  uncheckPermission(
    adminProfilePermissionRow,
    ADMIN_PROFILE,
    permissionCheckBox,
    DELETE
  );
  uncheckPermission(
    adminProfilePermissionRow,
    ADMIN_PROFILE,
    permissionCheckBox,
    CREATE
  );
  cy.wait(2000);
  uncheckPermission(
    adminProfilePermissionRow,
    ORGANIZATION,
    permissionCheckBox,
    EDIT
  );
  cy.wait(2000);
  uncheckPermission(adminProfilePermissionRow, TAG, permissionCheckBox, EDIT);
  uncheckPermission(adminProfilePermissionRow, TAG, permissionCheckBox, DELETE);
  uncheckPermission(adminProfilePermissionRow, TAG, permissionCheckBox, CREATE);
  cy.wait(2000);
  uncheckPermission(
    adminProfilePermissionRow,
    DISPOSITION,
    permissionCheckBox,
    EDIT
  );
  uncheckPermission(
    adminProfilePermissionRow,
    DISPOSITION,
    permissionCheckBox,
    DELETE
  );
  uncheckPermission(
    adminProfilePermissionRow,
    DISPOSITION,
    permissionCheckBox,
    CREATE
  );
  clickContainingText(editAdminProfileBlock, SAVE);
  cy.wait(3000);
};
export const selectFiltersIntoAdminProfileForLevel1 = () => {
  visit();
  cy.fixture('LoginCredentials').then((data) => {
    fillUsername(data.LEVEL_1_USERNAME);
    fillPassword(data.validPassword);
  });
  submit();
  navigateToAdminProfilePage();
  // for level 1 Admin profile
  cy.fixture('OrgMultiLevel').then((data) => {
    cy.get(dataTable)
      .find('tr')
      .filter(`:contains(${data.ApLevel_1_hierarchy[0] as string})`)
      .within(() => {
        cy.get(editIcon).click({ force: true });
      });
  });
  cy.wait(3000);
  editAdminProfileHeaderShldPrsnt();
  // for organization
  clickFilterButton(adminProfilePermissionRow, ORGANIZATION, allowFilterButton);
  cy.fixture('OrgMultiLevel').then((data) => {
    testData = data.ORG_LEVEL_1;
    cy.get(adminProfilePermissionRow)
      .filter(`:contains(${ORGANIZATION})`)
      .within(() => {
        cy.get(filterTextField).eq(0).click({ force: true });
      });
    cy.get(filterList).contains(testData).click({ force: true });
    cy.get(adminProfilePermissionRow)
      .filter(`:contains(${ORGANIZATION})`)
      .within(() => {
        cy
          .get(filterSelectedList)
          .eq(0)
          .contains(testData)
          .should('exist');
      });
    // for admin profile
    clickFilterButton(
      adminProfilePermissionRow,
      ADMIN_PROFILE,
      allowFilterButton
    );
    const testData1 = data.ApLevel_1_hierarchy[0];
    cy.get(adminProfilePermissionRow)
      .filter(`:contains(${ADMIN_PROFILE})`)
      .within(() => {
        cy.get(filterTextField).eq(0).click({ force: true });
      });
    cy.get(filterList).contains(testData1).click({ force: true });
    cy.get(adminProfilePermissionRow)
      .filter(`:contains(${ADMIN_PROFILE})`)
      .within(() => {
        cy
          .get(filterSelectedList)
          .eq(0)
          .contains(testData1)
          .should('exist');
      });
  });
  // for tags
  clickFilterButton(adminProfilePermissionRow, TAG, allowFilterButton);
  cy.fixture('Tags').then((data) => {
    const testData = data.newTagsTitle + uniqueUI;
    cy.get(adminProfilePermissionRow)
      .filter(`:contains(${TAG})`)
      .within(() => {
        cy.get(filterTextField).eq(0).click({ force: true });
      });
    cy.get(filterList).contains(testData).click({ force: true });
    cy.get(adminProfilePermissionRow)
      .filter(`:contains(${TAG})`)
      .within(() => {
        cy
          .get(filterSelectedList)
          .eq(0)
          .contains(testData)
          .should('exist');
      });
  });
  // for dispositions
  clickFilterButton(adminProfilePermissionRow, DISPOSITION, allowFilterButton);
  cy.fixture('Disposition').then((data) => {
    const testData = data.newDisposition + uniqueUI;
    cy.get(adminProfilePermissionRow)
      .filter(`:contains(${DISPOSITION})`)
      .within(() => {
        cy.get(filterTextField).eq(0).click({ force: true });
      });
    cy.get(filterList).contains(testData).click({ force: true });
    cy.get(adminProfilePermissionRow)
      .filter(`:contains(${DISPOSITION})`)
      .within(() => {
        cy
          .get(filterSelectedList)
          .eq(0)
          .contains(testData)
          .should('exist');
      });
  });
  clickContainingText(editAdminProfileBlock, SAVE);
  cy.wait(3000);
};
export const disableFilterButtonAtLevel1 = () => {
  visit();
  cy.fixture('LoginCredentials').then((data) => {
    fillUsername(data.LEVEL_1_USERNAME);
    fillPassword(data.validPassword);
  });
  submit();
  navigateToAdminProfilePage();
  // for level 1 Admin profile
  cy.fixture('OrgMultiLevel').then((data) => {
    cy.get(dataTable)
      .find('tr')
      .filter(`:contains(${data.ApLevel_1_hierarchy[0] as string})`)
      .within(() => {
        cy.get(editIcon).click({ force: true });
      });
  });
  cy.wait(3000);
  editAdminProfileHeaderShldPrsnt();
  clickFilterButton(adminProfilePermissionRow, ORGANIZATION, allowFilterButton);
  clickFilterButton(
    adminProfilePermissionRow,
    ADMIN_PROFILE,
    allowFilterButton
  );
  checkPermission(
    adminProfilePermissionRow,
    ADMIN_PROFILE,
    permissionCheckBox,
    CREATE
  );
  clickFilterButton(adminProfilePermissionRow, TAG, allowFilterButton);
  // enable allow button for tags
  cy.wait(5000);
  clickAllowButton(adminProfilePermissionRow, TAG, allowFilterButton);
  checkPermission(adminProfilePermissionRow, TAG, permissionCheckBox, CREATE);
  // enable allow button for disposition
  cy.wait(5000);
  clickAllowButton(adminProfilePermissionRow, DISPOSITION, allowFilterButton);
  clickFilterButton(adminProfilePermissionRow, DISPOSITION, allowFilterButton);
  checkPermission(
    adminProfilePermissionRow,
    DISPOSITION,
    permissionCheckBox,
    CREATE
  );
  clickContainingText(editAdminProfileBlock, SAVE);
  cy.wait(3000);
};
export const selectFiltersIntoAdminProfileForLevel2child1 = () => {
  visit();
  cy.fixture('LoginCredentials').then((data) => {
    fillUsername(data.LEVEL_1_USERNAME);
    fillPassword(data.validPassword);
  });
  submit();
  navigateToAdminProfilePage();
  // for level 1 Admin profile
  cy.fixture('OrgMultiLevel').then((data) => {
    cy.get(dataTable)
      .find('tr')
      .filter(`:contains(${data.ApLevel_1_hierarchy[1] as string})`)
      .within(() => {
        cy.get(editIcon).click({ force: true });
      });
  });
  cy.wait(3000);
  editAdminProfileHeaderShldPrsnt();
  // for organization
  clickFilterButton(adminProfilePermissionRow, ORGANIZATION, allowFilterButton);
  cy.fixture('OrgMultiLevel').then((data) => {
    testData = data.ORG_LEVEL_2_CHILD_1;
    cy.get(adminProfilePermissionRow)
      .filter(`:contains(${ORGANIZATION})`)
      .within(() => {
        cy.get(filterTextField).eq(0).click({ force: true });
      });
    cy.get(filterList).contains(testData).click({ force: true });
    cy.get(adminProfilePermissionRow)
      .filter(`:contains(${ORGANIZATION})`)
      .within(() => {
        cy
          .get(filterSelectedList)
          .eq(0)
          .contains(testData)
          .should('exist');
      });
    // for admin profile
    clickFilterButton(
      adminProfilePermissionRow,
      ADMIN_PROFILE,
      allowFilterButton
    );
    const testData1 = data.ApLevel_1_hierarchy[1];
    cy.get(adminProfilePermissionRow)
      .filter(`:contains(${ADMIN_PROFILE})`)
      .within(() => {
        cy.get(filterTextField).eq(0).click({ force: true });
      });
    cy.get(filterList).contains(testData1).click({ force: true });
    cy.get(adminProfilePermissionRow)
      .filter(`:contains(${ADMIN_PROFILE})`)
      .within(() => {
        cy
          .get(filterSelectedList)
          .eq(0)
          .contains(testData1)
          .should('exist');
      });
  });
  // for tags
  clickFilterButton(adminProfilePermissionRow, TAG, allowFilterButton);
  cy.fixture('Tags').then((data) => {
    const testData = data.newTagsTitle + uniqueUI2;
    cy.get(adminProfilePermissionRow)
      .filter(`:contains(${TAG})`)
      .within(() => {
        cy.get(filterTextField).eq(0).click({ force: true });
      });
    cy.get(filterList).contains(testData).click({ force: true });
    cy.get(adminProfilePermissionRow)
      .filter(`:contains(${TAG})`)
      .within(() => {
        cy
          .get(filterSelectedList)
          .eq(0)
          .contains(testData)
          .should('exist');
      });
  });
  // for dispositions
  clickFilterButton(adminProfilePermissionRow, DISPOSITION, allowFilterButton);
  cy.fixture('Disposition').then((data) => {
    const testData = data.newDisposition + uniqueUI2;
    cy.get(adminProfilePermissionRow)
      .filter(`:contains(${DISPOSITION})`)
      .within(() => {
        cy.get(filterTextField).eq(0).click({ force: true });
      });
    cy.get(filterList).contains(testData).click({ force: true });
    cy.get(adminProfilePermissionRow)
      .filter(`:contains(${DISPOSITION})`)
      .within(() => {
        cy
          .get(filterSelectedList)
          .eq(0)
          .contains(testData)
          .should('exist');
      });
  });
  clickContainingText(editAdminProfileBlock, SAVE);
  cy.wait(3000);
};
export const disableFilterButtonAtLevel2child1 = () => {
  visit();
  cy.fixture('LoginCredentials').then((data) => {
    fillUsername(data.LEVEL_1_USERNAME);
    fillPassword(data.validPassword);
  });
  submit();
  navigateToAdminProfilePage();
  // for level 1 Admin profile
  cy.fixture('OrgMultiLevel').then((data) => {
    cy.get(dataTable)
      .find('tr')
      .filter(`:contains(${data.ApLevel_1_hierarchy[1] as string})`)
      .within(() => {
        cy.get(editIcon).click({ force: true });
      });
  });
  cy.wait(3000);
  editAdminProfileHeaderShldPrsnt();
  clickFilterButton(adminProfilePermissionRow, ORGANIZATION, allowFilterButton);
  clickFilterButton(
    adminProfilePermissionRow,
    ADMIN_PROFILE,
    allowFilterButton
  );
  checkPermission(
    adminProfilePermissionRow,
    ADMIN_PROFILE,
    permissionCheckBox,
    CREATE
  );
  clickFilterButton(adminProfilePermissionRow, TAG, allowFilterButton);
  checkPermission(adminProfilePermissionRow, TAG, permissionCheckBox, CREATE);
  clickFilterButton(adminProfilePermissionRow, DISPOSITION, allowFilterButton);
  checkPermission(
    adminProfilePermissionRow,
    DISPOSITION,
    permissionCheckBox,
    CREATE
  );
  clickContainingText(editAdminProfileBlock, SAVE);
  cy.wait(3000);
};
export const clickAlloWButtonWithFilter = () => {
  // Cick on allow button to disalbe , with items in filter dispositions & tags.
  visit();
  cy.fixture('LoginCredentials').then((data) => {
    fillUsername(data.LEVEL_1_USERNAME);
    fillPassword(data.validPassword);
  });
  submit();
  navigateToAdminProfilePage();
  cy.wait(5000);
  // for level 1 Admin profile
  cy.fixture('OrgMultiLevel').then((data) => {
    //  click on edit admin profile
    cy.get(dataTable)
      .find('tr')
      .filter(`:contains(${data.ApLevel_1_hierarchy[0] as string})`)
      .within(() => {
        cy.get(editIcon).click({ force: true });
      });
  });
  cy.wait(3000);
  editAdminProfileHeaderShldPrsnt();
  // Disable allow button for tags
  clickAllowButton(adminProfilePermissionRow, TAG, allowFilterButton);
  // unchek read check box of tag
  cy.wait(5000);
  uncheckPermission(adminProfilePermissionRow, TAG, permissionCheckBox, READ);
  // Disable allow button for dispositions
  clickAllowButton(adminProfilePermissionRow, DISPOSITION, allowFilterButton);
  // uncheck read check box of disposition
  uncheckPermission(
    adminProfilePermissionRow,
    DISPOSITION,
    permissionCheckBox,
    READ
  );
  clickContainingText(editAdminProfileBlock, SAVE);
  cy.wait(3000);
};
export const addMultipleModuleForFilter = () => {
  //  add one more disposition module allow filter for both and select disposition in both filter
  // removing permission of edit in one and delete in another. Verify the data and undo all the changes
  visit();
  cy.fixture('LoginCredentials').then((data) => {
    fillUsername(data.LEVEL_1_USERNAME);
    fillPassword(data.validPassword);
  });
  submit();
  navigateToAdminProfilePage();
  // for level 1 Admin profile
  // click edit icon of admin profile(Asia)
  cy.fixture('OrgMultiLevel').then((data) => {
    cy.get(dataTable)
      .find('tr')
      .filter(`:contains(${data.ApLevel_1_hierarchy[0] as string})`)
      .within(() => {
        cy.get(editIcon).click({ force: true });
      });
  });
  cy.wait(3000);
  editAdminProfileHeaderShldPrsnt();
  // for dispositions
  // uncheckk edit icon
  cy.get(adminProfilePermissionRow)
    .filter(`:contains(${DISPOSITION})`)
    .within(() => {
      cy.get(permissionCheckBox).eq(EDIT).uncheck({ force: true });
    });
  // enable filter button
  clickFilterButton(adminProfilePermissionRow, DISPOSITION, allowFilterButton);
  cy.fixture('Disposition').then((data) => {
    const testData = data.newDisposition + uniqueUI;
    // click on filter text field
    cy.get(adminProfilePermissionRow)
      .filter(`:contains(${DISPOSITION})`)
      .within(() => {
        cy.get(filterTextField).eq(0).click({ force: true });
      });
    // select item from list
    cy.get(filterList).contains(testData).click({ force: true });
    // varify selected item into filter
    cy.get(adminProfilePermissionRow)
      .filter(`:contains(${DISPOSITION})`)
      .within(() => {
        cy
          .get(filterSelectedList)
          .eq(0)
          .contains(testData)
          .should('exist');
      });
  });
  cy.scrollTo(0, 1000);
  clickOnText(ADD_ITEM);
  cy.wait(3000);
  // click on empty dropdown to select disposition
  cy.get('.ant-select-selection-placeholder').eq(1).click({ force: true });
  cy.wait(3000);
  // select disposition from dropdown
  cy.get('div[class=\'rc-virtual-list-holder\']')
    .contains(DISPOSITION)
    .click({ force: true });
  cy.wait(3000);
  // enable filter button
  cy.get(adminProfilePermissionRow)
    .filter(`:contains(${DISPOSITION})`)
    .eq(1)
    .within(() => {
      cy.get(allowFilterButton).eq(1).click({ force: true });
    });
  cy.fixture('Disposition').then((data) => {
    const testData = data.newDisposition + uniqueUI2;
    // click on filter text field
    cy.get(adminProfilePermissionRow)
      .filter(`:contains(${DISPOSITION})`)
      .eq(1)
      .within(() => {
        cy.get(filterTextField).eq(0).click({ force: true });
      });
    // select item from list
    cy.wait(3000);
    cy.get(filterList).eq(2).contains(testData).click({ force: true });
    // clickOnText(testData);
    // verify item into filter
    cy.get(adminProfilePermissionRow)
      .filter(`:contains(${DISPOSITION})`)
      .eq(1)
      .within(() => {
        cy
          .get(filterSelectedList)
          .eq(0)
          .contains(testData)
          .should('exist');
      });
  });
  // uncheck delete check box
  cy.get(adminProfilePermissionRow)
    .filter(`:contains(${DISPOSITION})`)
    .eq(1)
    .within(() => {
      cy.get(permissionCheckBox).eq(DELETE).uncheck({ force: true });
    });
  // click on save button
  clickContainingText(editAdminProfileBlock, SAVE);
  cy.wait(3000);
  // verify data at disposition page
  visit();
  cy.fixture('LoginCredentials').then((data) => {
    fillUsername(data.LEVEL_1_USERNAME);
    fillPassword(data.validPassword);
  });
  submit();
  navigateToDispositionPage();
  cy.fixture('Disposition').then((data) => {
    testData = data.newDisposition + uniqueUI;
    const testData1 = data.newDisposition + uniqueUI2;
    // verify data
    editIconShldNotPrsnt(testData, dataTable, editIcon);
    deletIconShldNotPrsnt(testData1, dataTable, delIcon);
  });
  // reset to default permiisions. (1001-1032)
  clickStaff();
  clickAdminProfile();
  cy.wait(5000);
  cy.fixture('OrgMultiLevel').then((data) => {
    // click edit icon of admin profile(Asia)
    cy.get(dataTable)
      .find('tr')
      .filter(`:contains(${data.ApLevel_1_hierarchy[0] as string})`)
      .within(() => {
        cy.get(editIcon).click({ force: true });
      });
  });
  cy.wait(3000);
  editAdminProfileHeaderShldPrsnt();
  // disable filter for first dispositons  module
  cy.get(adminProfilePermissionRow)
    .filter(`:contains(${DISPOSITION})`)
    .eq(0)
    .within(() => {
      cy.get(allowFilterButton).eq(1).click({ force: true });
    });
  // check create button
  cy.get(adminProfilePermissionRow)
    .filter(`:contains(${DISPOSITION})`)
    .eq(0)
    .within(() => {
      cy.get(permissionCheckBox).eq(CREATE).check({ force: true });
    });
  // check edit button
  cy.get(adminProfilePermissionRow)
    .filter(`:contains(${DISPOSITION})`)
    .eq(0)
    .within(() => {
      cy.get(permissionCheckBox).eq(EDIT).uncheck({ force: true });
    });
  // delete extra(2nd) disposition
  cy.get('div[class=\'form-list-wrapper\']>div')
    .filter(`:contains(${DISPOSITION})`)
    .eq(1)
    .within(() => {
      cy.get(delIcon).click({ force: true });
    });
  cy.wait(5000);
  checkPermission(
    adminProfilePermissionRow,
    DISPOSITION,
    permissionCheckBox,
    EDIT
  );
  clickContainingText(editAdminProfileBlock, SAVE);
  cy.wait(3000);
};
export const addDisposModuleAndDisallow = () => {
  /** Add another ,module for disposition and disable allow button for second module and verify the data */
  visit();
  cy.fixture('LoginCredentials').then((data) => {
    fillUsername(data.LEVEL_1_USERNAME);
    fillPassword(data.validPassword);
  });
  submit();
  navigateToAdminProfilePage();
  // for level 1 Admin profile
  // click edit icon of admin profile(Asia)
  cy.fixture('OrgMultiLevel').then((data) => {
    cy.get(dataTable)
      .find('tr')
      .filter(`:contains(${data.ApLevel_1_hierarchy[0] as string})`)
      .within(() => {
        cy.get(editIcon).click({ force: true });
      });
  });
  cy.wait(3000);
  editAdminProfileHeaderShldPrsnt();
  // click add new item button at edit admin profile page to add module
  clickOnText(ADD_ITEM);
  cy.wait(3000);
  // click on empty dropdown to select disposition
  cy.get('.ant-select-selection-placeholder').eq(0).click({ force: true });
  cy.wait(3000);
  // select disposition from dropdown
  cy.get('div[class=\'rc-virtual-list-holder\']')
    .eq(0)
    .contains(DISPOSITION)
    .click({ force: true });
  cy.wait(3000);
  // disable allow button for second disposition
  cy.get(adminProfilePermissionRow)
    .filter(`:contains(${DISPOSITION})`)
    .eq(1)
    .within(() => {
      cy.get(allowFilterButton).eq(0).click({ force: true });
    });
  // uncheck read cheak box for disposition(2nd) with disabled allow button
  cy.get(adminProfilePermissionRow)
    .filter(`:contains(${DISPOSITION})`)
    .eq(1)
    .within(() => {
      cy.get(permissionCheckBox).eq(READ).uncheck({ force: true });
    });
  // click on save button
  clickContainingText(editAdminProfileBlock, SAVE);
  cy.wait(3000);
  // verify the data that edit, delte and add new button  should not present
  visit();
  cy.fixture('LoginCredentials').then((data) => {
    fillUsername(data.LEVEL_1_USERNAME);
    fillPassword(data.validPassword);
  });
  submit();
  navigateToDispositionPage();
  cy.fixture('Disposition').then((data) => {
    testData = data.newDisposition + uniqueUI;
    const testData1 = data.newDisposition + uniqueUI2;
    // verify data of disposition for asia and india.
    editIconShldNotPrsnt(testData, dataTable, editIcon);
    // Edit icon for this particuler disposition should not be exist
    deletIconShldNotPrsnt(testData, dataTable, delIcon);
    // Delete icon for this particuler disposition should not be exist
    editIconShldNotPrsnt(testData1, dataTable, editIcon);
    // Edit icon for this particuler disposition should not be exist
    deletIconShldNotPrsnt(testData1, dataTable, delIcon);
    // Delete icon for this particuler disposition should not be exist
    disposAddNewButtonShldNotPrsnt();
  });
  // Reset all the changes (1110-1130)
  // navigate to admin profile page
  clickStaff();
  clickAdminProfile();
  cy.wait(5000);
  cy.fixture('OrgMultiLevel').then((data) => {
    // click edit icon of admin profile(level 1)
    cy.get(dataTable)
      .find('tr')
      .filter(`:contains(${data.ApLevel_1_hierarchy[0] as string})`)
      .within(() => {
        cy.get(editIcon).click({ force: true });
      });
  });
  cy.wait(3000);
  // verification for user should be on edit admin profile page.
  editAdminProfileHeaderShldPrsnt();
  cy.wait(3000);
  // delete extra(2nd) disposition
  cy.get('div[class=\'form-list-wrapper\']>div')
    .filter(`:contains(${DISPOSITION})`)
    .eq(1)
    .within(() => {
      cy.get(delIcon).click({ force: true });
    });
  cy.wait(5000);
  // click on save button
  clickContainingText(editAdminProfileBlock, SAVE);
  cy.wait(3000);
};
export const deleteModuleFromPermission = (module) => {
  // delete a module from the edit admin profile page and verify that it should not to exist.
  // login with level 1 admin user
  visit();
  cy.fixture('LoginCredentials').then((data) => {
    fillUsername(data.LEVEL_1_USERNAME);
    fillPassword(data.validPassword);
  });
  submit();
  navigateToAdminProfilePage();
  // click on edit icon of level 1 admin profile
  cy.fixture('OrgMultiLevel').then((data) => {
    // click edit icon of admin profile(Level 1)
    cy.get(dataTable)
      .find('tr')
      .filter(`:contains(${data.ApLevel_1_hierarchy[0] as string})`)
      .within(() => {
        cy.get(editIcon).click({ force: true });
      });
  });
  cy.wait(3000);
  editAdminProfileHeaderShldPrsnt();
  cy.wait(3000);
  // delete  module
  cy.get('div[class=\'form-list-wrapper\']>div')
    .filter(`:contains(${module as string})`)
    .within(() => {
      cy.get(delIcon).click({ force: true });
    });
  cy.wait(5000);
  // click on save button
  clickContainingText(editAdminProfileBlock, SAVE);
  cy.wait(3000);
};
export const verifyDeletedModuleFromPermissions = (subMenu) => {
  /* verify that deleted module should not present in menu and sub-menu section */
  // login with level 1
  cy.reload();
  visit();
  cy.wait(1000);
  cy.fixture('LoginCredentials').then((data) => {
    fillUsername(data.LEVEL_1_USERNAME);
    fillPassword(data.validPassword);
  });
  submit();
  // click on hamburger menu button
  clickHamburgerMenu();
  // click on staff button to open up all sub-menu section
  clickStaff();
  // click on tools button to open up all sub-menu section
  clickTools();
  // verifying that module should not be present.
  elementWithTextNotExist(menuSubmenuBlock, subMenu);
};
export const addDeletedModule = (module) => {
  // Add deleted  module at edit admin profile page:
  // login with level 1 admin user
  visit();
  cy.fixture('LoginCredentials').then((data) => {
    fillUsername(data.LEVEL_1_USERNAME);
    fillPassword(data.validPassword);
  });
  submit();
  navigateToAdminProfilePage();
  // click on edit icon of level 1 admin profile
  cy.fixture('OrgMultiLevel').then((data) => {
    // click edit icon of admin profile(Level 1)
    cy.get(dataTable)
      .find('tr')
      .filter(`:contains(${data.ApLevel_1_hierarchy[0] as string})`)
      .within(() => {
        cy.get(editIcon).click({ force: true });
      });
  });
  cy.wait(3000);
  editAdminProfileHeaderShldPrsnt();
  cy.wait(3000);
  clickOnText(ADD_ITEM);
  cy.wait(3000);
  // click on empty dropdown to select disposition
  cy.get('.ant-select-selection-placeholder').eq(0).click({ force: true });
  cy.wait(3000);
  // select disposition from dropdown
  cy.get('div[class=\'rc-virtual-list-holder\']')
    .contains(module)
    .click({ force: true });
  cy.wait(5000);
  // click on save button
  clickContainingText(editAdminProfileBlock, SAVE);
  cy.wait(3000);
};
export const secondDisposFilterWithDisallow = () => {
  /** Add another ,module for disposition  add item into filter
      and disable allow button for second module and verify the data */
  visit();
  cy.fixture('LoginCredentials').then((data) => {
    fillUsername(data.LEVEL_1_USERNAME);
    fillPassword(data.validPassword);
  });
  submit();
  navigateToAdminProfilePage();
  // for level 1 Admin profile
  // click edit icon of admin profile(level 1)
  cy.fixture('OrgMultiLevel').then((data) => {
    cy.get(dataTable)
      .find('tr')
      .filter(`:contains(${data.ApLevel_1_hierarchy[0] as string})`)
      .within(() => {
        cy.get(editIcon).click({ force: true });
      });
  });
  cy.wait(3000);
  editAdminProfileHeaderShldPrsnt();
  // click add new item button at edit admin profile page to add module
  clickOnText(ADD_ITEM);
  cy.wait(3000);
  // click on empty dropdown to select disposition
  cy.get('.ant-select-selection-placeholder').eq(0).click({ force: true });
  cy.wait(3000);
  // select disposition from dropdown
  cy.get('div[class=\'rc-virtual-list-holder\']')
    .contains(DISPOSITION)
    .click({ force: true });
  cy.wait(3000);
  // disable allow button for second disposition
  cy.get(adminProfilePermissionRow)
    .filter(`:contains(${DISPOSITION})`)
    .eq(1)
    .within(() => {
      cy.get(allowFilterButton).eq(0).click({ force: true });
    });
  // uncheck read cheak box for disposition(2nd) with disabled allow button
  cy.get(adminProfilePermissionRow)
    .filter(`:contains(${DISPOSITION})`)
    .eq(1)
    .within(() => {
      cy.get(permissionCheckBox).eq(READ).uncheck({ force: true });
    });
  // click on filter
  cy.get(adminProfilePermissionRow)
    .filter(`:contains(${DISPOSITION})`)
    .eq(1)
    .within(() => {
      cy.get(allowFilterButton).eq(1).click({ force: true });
    });
  cy.fixture('Disposition').then((data) => {
    const testData = data.newDisposition + uniqueUI;
    // click on filter text field
    cy.get(adminProfilePermissionRow)
      .filter(`:contains(${DISPOSITION})`)
      .eq(1)
      .within(() => {
        cy.get(filterTextField).eq(0).click({ force: true });
      });
    // select item from list
    cy.wait(3000);
    cy.get(filterList).contains(testData).click({ force: true });
    // clickOnText(testData);
    // verify item into filter
    cy.get(adminProfilePermissionRow)
      .filter(`:contains(${DISPOSITION})`)
      .eq(1)
      .within(() => {
        cy
          .get(filterSelectedList)
          .eq(0)
          .contains(testData)
          .should('exist');
      });
  });
  // click on save button
  clickContainingText(editAdminProfileBlock, SAVE);
  cy.wait(3000);
  // verify the data that edit, delte and add new button  should not present
  visit();
  cy.fixture('LoginCredentials').then((data) => {
    fillUsername(data.LEVEL_1_USERNAME);
    fillPassword(data.validPassword);
  });
  submit();
  navigateToDispositionPage();
  cy.fixture('Disposition').then((data) => {
    testData = data.newDisposition + uniqueUI;
    const testData1 = data.newDisposition + uniqueUI2;
    // verify data of disposition for level 1  and level 2 child 1.
    editIconShldNotPrsnt(testData, dataTable, editIcon);
    // Edit icon for this particuler disposition should not be exist
    deletIconShldNotPrsnt(testData, dataTable, delIcon);
    // Delete icon for this particuler disposition should not be exist
    editIconShldPrsnt(testData1, dataTable, editIcon);
    // Edit icon for this particuler disposition should not be exist
    deleteIconShldPrsnt(testData1, dataTable, delIcon);
    // Delete icon for this particuler disposition should not be exist
    disposAddNewButtonShldPrsnt();
  });
  // Reset all the changes (1330-1353)
  // navigate to admin profile page
  clickStaff();
  clickAdminProfile();
  cy.wait(5000);
  cy.fixture('OrgMultiLevel').then((data) => {
    // click edit icon of admin profile(level 1)
    cy.get(dataTable)
      .find('tr')
      .filter(`:contains(${data.ApLevel_1_hierarchy[0] as string})`)
      .within(() => {
        cy.get(editIcon).click({ force: true });
      });
  });
  cy.wait(3000);
  // verification for user should be on edit admin profile page.
  editAdminProfileHeaderShldPrsnt();
  cy.wait(3000);
  // delete extra(2nd) disposition
  cy.get('div[class=\'form-list-wrapper\']>div')
    .filter(`:contains(${DISPOSITION})`)
    .eq(1)
    .within(() => {
      cy.get(delIcon).click({ force: true });
    });
  cy.wait(5000);
  // click on save button
  clickContainingText(editAdminProfileBlock, SAVE);
  cy.wait(3000);
};
export const secondTagsFilterWithDisallow = () => {
  /** Add another ,module for tags  add item into filter
      and disable allow button for second module and verify the data */
  visit();
  cy.fixture('LoginCredentials').then((data) => {
    fillUsername(data.LEVEL_1_USERNAME);
    fillPassword(data.validPassword);
  });
  submit();
  navigateToAdminProfilePage();
  // for level 1 Admin profile
  // click edit icon of admin profile(level 1)
  cy.fixture('OrgMultiLevel').then((data) => {
    cy.get(dataTable)
      .find('tr')
      .filter(`:contains(${data.ApLevel_1_hierarchy[0] as string})`)
      .within(() => {
        cy.get(editIcon).click({ force: true });
      });
  });
  cy.wait(3000);
  editAdminProfileHeaderShldPrsnt();
  // click add new item button at edit admin profile page to add module
  clickOnText(ADD_ITEM);
  cy.wait(3000);
  // click on empty dropdown to select tag
  cy.get('.ant-select-selection-placeholder').eq(0).click({ force: true });
  cy.wait(3000);
  // select tag from dropdown
  cy.get('div[class=\'rc-virtual-list-holder\']')
    .contains(TAG)
    .click({ force: true });
  cy.wait(3000);
  // disable allow button for second tag
  cy.get(adminProfilePermissionRow)
    .filter(`:contains(${TAG})`)
    .eq(1)
    .within(() => {
      cy.get(allowFilterButton).eq(0).click({ force: true });
    });
  // uncheck read cheak box for tags(2nd) with disabled allow button
  cy.get(adminProfilePermissionRow)
    .filter(`:contains(${TAG})`)
    .eq(1)
    .within(() => {
      cy.get(permissionCheckBox).eq(READ).uncheck({ force: true });
    });
  // click on filter
  cy.get(adminProfilePermissionRow)
    .filter(`:contains(${TAG})`)
    .eq(1)
    .within(() => {
      cy.get(allowFilterButton).eq(1).click({ force: true });
    });
  cy.fixture('Tags').then((data) => {
    const testData = data.newTagsTitle + uniqueUI;
    // click on filter text field
    cy.get(adminProfilePermissionRow)
      .filter(`:contains(${TAG})`)
      .eq(1)
      .within(() => {
        cy.get(filterTextField).eq(0).click({ force: true });
      });
    // select item from list
    cy.wait(3000);
    cy.get(filterList).contains(testData).click({ force: true });
    // clickOnText(testData);
    // verify item into filter
    cy.get(adminProfilePermissionRow)
      .filter(`:contains(${TAG})`)
      .eq(1)
      .within(() => {
        cy
          .get(filterSelectedList)
          .eq(0)
          .contains(testData)
          .should('exist');
      });
  });
  // click on save button
  clickContainingText(editAdminProfileBlock, SAVE);
  cy.wait(3000);
  // verify the data that edit, delte and add new button
  visit();
  cy.fixture('LoginCredentials').then((data) => {
    fillUsername(data.LEVEL_1_USERNAME);
    fillPassword(data.validPassword);
  });
  submit();
  navigateToTagsPage();
  cy.fixture('Tags').then((data) => {
    testData = data.newTagsTitle + uniqueUI;
    const testData1 = data.newTagsTitle + uniqueUI2;
    // verify data of tags for level 1 and level 2 child 1.
    editIconShldNotPrsnt(testData, dataTable, editIcon);
    // Edit icon for this particuler tags should not be exist
    deletIconShldNotPrsnt(testData, dataTable, delIcon);
    // Delete icon for this particuler tags should not be exist
    editIconShldPrsnt(testData1, dataTable, editIcon);
    // Edit icon for this particuler tags should not be exist
    deleteIconShldPrsnt(testData1, dataTable, delIcon);
    // Delete icon for this particuler tags should not be exist
    tagAddNewButtonShldPrsnt();
  });
  // Reset all the changes (1450-1472)
  // navigate to admin profile page
  clickStaff();
  clickAdminProfile();
  cy.wait(5000);
  cy.fixture('OrgMultiLevel').then((data) => {
    // click edit icon of admin profile(level 1)
    cy.get(dataTable)
      .find('tr')
      .filter(`:contains(${data.ApLevel_1_hierarchy[0] as string})`)
      .within(() => {
        cy.get(editIcon).click({ force: true });
      });
  });
  cy.wait(3000);
  // verification for user should be on edit admin profile page.
  editAdminProfileHeaderShldPrsnt();
  cy.wait(3000);
  // delete extra(2nd) tags
  cy.get('div[class=\'form-list-wrapper\']>div')
    .filter(`:contains(${TAG})`)
    .eq(1)
    .within(() => {
      cy.get(delIcon).click({ force: true });
    });
  cy.wait(5000);
  // click on save button
  clickContainingText(editAdminProfileBlock, SAVE);
  cy.wait(3000);
};
