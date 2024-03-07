import {
  clickContainingText,
  elementWithTextExist,
  fillText
} from '../utils/cypressMethod.util';
import { EDIT_TAG, SAVE } from '../utils/constants.util';
import { clickEditTags, tagsHeaderShldPrsnt } from './tagsPage';
import { uniqueUI } from './usersPage';

const editTagsBlock = 'div[class=\'content-children-wrp\']';
const editTagsTitleField =
  'input[class=\'ant-input ant-input-status-success forms-input\']';

export let editTitle;
export const navigateToEditTagsPage = () => {
  tagsHeaderShldPrsnt();
  clickEditTags();
  editTagsHeaderShldPrsnt();
};
export const editTagsHeaderShldPrsnt = () => {
  elementWithTextExist(editTagsBlock, EDIT_TAG);
};
export const editTags = () => {
  cy.fixture('Tags').then((data) => {
    editTitle = data.editTagsTitle + uniqueUI;
    fillText(editTagsTitleField, editTitle);
    clickContainingText(editTagsBlock, SAVE);
    cy.wait(3000);
    tagsHeaderShldPrsnt();
  });
};
