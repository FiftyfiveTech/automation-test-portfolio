import {
  clickOn,
  clickOnText,
  shortWaitMs
} from '../utils/cypressMethod.util';
import {
  ADMIN_PROFILES,
  AGENT_PROFILES,
  CANNED_ANSWERS,
  CONTACT_MANAGEMENT,
  DISPOSITIONS,
  EMAIL,
  FIELDS,
  FORMS,
  FORM_CHANNEL,
  FORM_WEBSITES,
  JOURNEY_DRAFTS,
  LISTS,
  MAIL_ACCOUNTS,
  MAIL_JOURNEYS,
  MAIL_QUEUES,
  OPERATIONAL_HOURS,
  ORGANIZATIONS,
  PAUSES,
  SIGNATURES,
  SLA_POLICIES,
  STAFF,
  TAGS,
  TEAMS,
  TIME_INTERVALS,
  TOOLS,
  USERS
} from '../utils/constants.util';

export const hamburgerMenu = 'div[id=\'menu-icon\']';
export const menuSubmenuBlock = 'div[class=\'content-master-wrp\']>div>ul';
export const navContentArea = 'div.content-children-wrp';

export const hamburgerMenuShldPrsnt = () => {
  cy.wait(3000);
  cy.get(hamburgerMenu).should('exist', { timeout: shortWaitMs });
};
export const clickHamburgerMenu = () => {
  cy.wait(1000);
  clickOn(hamburgerMenu);
};
export const clickStaff = () => {
  clickOnText(STAFF);
};
export const clickUser = () => {
  clickStaff();
  clickOnText(USERS);
};
export const clickAgentProfile = () => {
  clickOnText(AGENT_PROFILES);
};
export const clickAdminProfile = () => {
  clickOnText(ADMIN_PROFILES);
};
export const clickOrganization = () => {
  clickOnText(ORGANIZATIONS);
};
export const clickTeams = () => {
  clickOnText(TEAMS);
};
export const clickEmail = () => {
  clickOnText(EMAIL);
};
export const clickMailQueues = () => {
  clickOnText(MAIL_QUEUES);
};
export const clickMailAccounts = () => {
  clickOnText(MAIL_ACCOUNTS);
};
export const clickMailJourneys = () => {
  clickOnText(MAIL_JOURNEYS);
};
export const clickJourneyDrafts = () => {
  clickOnText(JOURNEY_DRAFTS);
};
export const clickContactManagement = () => {
  clickOnText(CONTACT_MANAGEMENT);
};
export const clickLists = () => {
  clickOnText(LISTS);
};
export const clickFormChannel = () => {
  clickOnText(FORM_CHANNEL);
};
export const clickFormWebsites = () => {
  clickOnText(FORM_WEBSITES);
};
export const clickTools = () => {
  clickOnText(TOOLS);
};
export const clickDisposition = () => {
  clickOnText(DISPOSITIONS);
};
export const clickTags = () => {
  clickOnText(TAGS);
};
export const clickPauses = () => {
  clickOnText(PAUSES);
};
export const clickFields = () => {
  clickOnText(FIELDS);
};
export const clickForms = () => {
  clickOnText(FORMS);
};
export const clickTimeIntervals = () => {
  clickOnText(TIME_INTERVALS);
};
export const clickOperationalHours = () => {
  clickOnText(OPERATIONAL_HOURS);
};
export const clickSlaPolicies = () => {
  clickOnText(SLA_POLICIES);
};
export const clickCannedAnswers = () => {
  clickOnText(CANNED_ANSWERS);
};
export const clickSignatures = () => {
  clickOnText(SIGNATURES);
};
