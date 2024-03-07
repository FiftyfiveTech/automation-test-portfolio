import {
  clickContainingText,
  elementWithTextExist,
  fillText
} from '../utils/cypressMethod.util';
import { EDIT_ORGANIZATION, SAVE, TEST_ORG } from '../utils/constants.util';
import {
  clickEditOrganization,
  organizationHeaderShldPrsnt,
  validateEditOrg
} from './organizationPage';

const editOrganizationBlock = 'div[class=\'entity-form-edit\']';
const editOrgTitleField =
  'div[class=\'entity-form-edit\']>form>div>div>div>div>div>div>div>div:nth-of-type(2)>div>div>input';

export const navigateToEditOrgPage = () => {
  organizationHeaderShldPrsnt();
  clickEditOrganization();
};
export const editOrgHeaderShldPrsnt = () => {
  elementWithTextExist(editOrganizationBlock, EDIT_ORGANIZATION);
};
export const editOrganization = () => {
  // cy.fixture('Org').then((data)=>{
  fillText(editOrgTitleField, TEST_ORG);
  // })
  clickContainingText(editOrganizationBlock, SAVE);
  cy.wait(3000);
  validateEditOrg();
};
