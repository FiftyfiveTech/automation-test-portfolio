import {
  clickContainingText,
  elementWithTextExist,
  fillText
} from '../utils/cypressMethod.util';
import { EDIT_ADMIN_PROFILE, SAVE } from '../utils/constants.util';
import {
  adminProfileHeaderShldPrsnt,
  clickEditAdminProfile,
  clickEditApForBug14,
  clickeditApForPermission,
  clickEditApPermissionForSuperAdmin
} from './adminProfilePage';
import { uniqueUI } from './usersPage';

const editAdminProfileBlock = 'div[class=\'entity-form-edit\']';
const saveButton = 'button[type=\'submit\']';
const adminProfilePermissionRow =
  'div[class=\'form-list-wrapper\']>div>div>div>div';
const dispositionDeleteCheckBox = 'Delete';
const editAdminProfileTitleField =
  'div[class=\'entity-form-edit\']>form>div>div>div>div>div>div>div>div:nth-of-type(2)>div>div>input';
let testEditAp;
export const navigateToEditApForBug14 = () => {
  // Validation for admin profile page.
  adminProfileHeaderShldPrsnt();
  clickEditApForBug14();
  // Validation for edit admin profile page.
  elementWithTextExist(editAdminProfileBlock, EDIT_ADMIN_PROFILE);
};
export const navigateToEditAdminProfilePage = () => {
  // Validation for admin profile page.
  adminProfileHeaderShldPrsnt();
  clickEditAdminProfile();
  // Validation for edit admin profile page.
  elementWithTextExist(editAdminProfileBlock, EDIT_ADMIN_PROFILE);
};
// export const navigateToEditApFirPermissionInmultilevel=()=>{
//     adminProfileHeaderShldPrsnt(); // Validation for admin profile p
//     elementWithTextExist(editAdminProfileBlock,EDIT_ADMIN_PROFILE); // Validation for edit admin profile page.
// }
export const navigateToEditApForPermission = () => {
  adminProfileHeaderShldPrsnt(); // Validation for admin profile page.
  clickeditApForPermission();
  elementWithTextExist(editAdminProfileBlock, EDIT_ADMIN_PROFILE);
};
export const navigateToEditAppermissionForSuper = () => {
  adminProfileHeaderShldPrsnt(); // Validation for admin profile page.
  clickEditApPermissionForSuperAdmin(); // edit admin profile for super admin
  elementWithTextExist(editAdminProfileBlock, EDIT_ADMIN_PROFILE);
};
export const editAdminProfileHeaderShldPrsnt = () => {
  elementWithTextExist(editAdminProfileBlock, EDIT_ADMIN_PROFILE);
};
export const editAdminProfile = () => {
  cy.fixture('AdminProfiles').then((data) => {
    testEditAp = data.editAdminProfileTitle + uniqueUI;
    fillText(editAdminProfileTitleField, testEditAp);
  });
  clickContainingText(editAdminProfileBlock, SAVE);
  cy.wait(3000);
};
/* *****************Methods for POC *********************/
export const disableDeleteForDisposition = () => {
  cy.get(adminProfilePermissionRow)
    .filter(':contains("Disposition")')
    .contains(dispositionDeleteCheckBox)
    .click();
  cy.get(adminProfilePermissionRow)
    .filter(':contains("Disposition")')
    .contains(dispositionDeleteCheckBox)
    .should('not.be.checked'); // validation
};
export const clickSaveButtonEditAdminProfile = () => {
  cy.get(saveButton).click();
  cy.wait(3000);
};
export const enableDeleteforDisposition = () => {
  cy.get(adminProfilePermissionRow)
    .filter(':contains("Disposition")')
    .contains(dispositionDeleteCheckBox)
    .should('not.be.checked');
  cy.get(adminProfilePermissionRow)
    .filter(':contains("Disposition")')
    .contains(dispositionDeleteCheckBox)
    .click();
};
/* *************************************/
