import {
  clickContainingText,
  clickOn,
  elementWithTextNotExist,
  elementWithTextExist,
  fillText
} from '../utils/cypressMethod.util';
import { EDIT_DISPOSITION, SAVE } from '../utils/constants.util';
import {
  clickEditDisposition,
  dispositionsPageHeaderShouldPresent
} from './dispositionsPage';
import { uniqueUI } from './usersPage';

const editDisposBlock = 'div[class=\'content-children-wrp\']';
const editDisposTitleField =
  'input[class=\'ant-input ant-input-status-success forms-input\']';
const disposParentRow =
  'div[class=\'ant-row ant-form-item form-item ant-form-element-disposition_id ant-form-element-disposition_id form-nullable ant-form-item-has-success\']';
const disposParentSwitch = 'button[class=\'ant-switch forms-switch\']';
const disposGlobslSwitch =
  'button[class=\'ant-switch forms-switch ant-switch-checked\']';
const disposParentDropDown = '.ant-select-selection-item'; // "div[class='ant-select ant-tree-select forms-input ant-select-single ant-select-show-arrow']"//"path[d='M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z']";
const disposParentList = 'div[class=\'ant-select-tree-list-holder-inner\']';

export let editDisposTitle, testDispos;
export const navigateToEditDispositionPage = () => {
  dispositionsPageHeaderShouldPresent();
  clickEditDisposition();
  editDispositionHeaderShldPrsnt();
};
export const editDispositionHeaderShldPrsnt = () => {
  elementWithTextExist(editDisposBlock, EDIT_DISPOSITION);
};
export const editDisposition = () => {
  cy.fixture('Disposition').then((data) => {
    editDisposTitle = data.editDisposition + uniqueUI;
    fillText(editDisposTitleField, editDisposTitle);
    clickContainingText(editDisposBlock, SAVE);
    cy.wait(3000);
    dispositionsPageHeaderShouldPresent();
  });
};
export const selectParentForDispos = () => {
  // disable global switch
  clickOn(disposGlobslSwitch);
  // enable parent switch
  cy.get(disposParentRow)
    .filter(`:contains(${'Parent'})`)
    .within(() => {
      cy.get(disposParentSwitch).click({ force: true });
    });
  // clicked on parent deopdown
  cy.get(disposParentDropDown).type('{enter}');
  cy.wait(3000);
  cy.fixture('Disposition').then((data) => {
    testDispos = data.disposBug42;
    // select prdefiend disposition for bug 42( at parent dropdown edited disposition should not exist)
    const testDispos2 = data.newDisposition + uniqueUI;
    elementWithTextNotExist(disposParentList, testDispos2);
    clickContainingText(disposParentList, testDispos);
  });
  // click on save
  clickContainingText(editDisposBlock, SAVE);
  cy.wait(3000);
  dispositionsPageHeaderShouldPresent();
};
