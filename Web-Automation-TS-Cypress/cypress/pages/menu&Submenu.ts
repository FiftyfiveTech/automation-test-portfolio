import {
  elementShouldBePresent,
  textShouldExist,
  textShouldBePresent
} from '../utils/cypressMethod.util';
import {
  ADMIN_PROFILES,
  AGENT_PROFILES,
  CANNED_ANSWERS,
  CONTACTS,
  CONTACT_MANAGEMENT,
  CONVERSATIONS,
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
  STATISTICS,
  TAGS,
  TEAMS,
  TIME_INTERVALS,
  TOOLS,
  USERS
} from '../utils/constants.util';

const connectelLogo = 'div[class=\'logo-wrp col\']>img';
const searchFieldConversationsContacts =
  'input[placeholder=\'Search conversations & contacts\']';
const searchAgentsDropdown = 'div[class=\'users-wrp\']';
const notification = 'div[class=\'auth-user-wrp header-notifications\']';
const userProfile = 'figure[class=\'avatar user-menu-popup\']';

export const logoShldPrsnt = () => {
  elementShouldBePresent(connectelLogo);
};
export const conversationsShldPrsnt = () => {
  textShouldBePresent(CONVERSATIONS);
};
export const contactsShldPrsnt = () => {
  textShouldBePresent(CONTACTS);
};
export const statisticsShldPrsnt = () => {
  textShouldBePresent(STATISTICS);
};
export const searchFieldConversationsContactsShldPrsnt = () => {
  elementShouldBePresent(searchFieldConversationsContacts);
};
export const searchAgentsDropdownShldPrsnt = () => {
  elementShouldBePresent(searchAgentsDropdown);
};
export const notificationShldPrsnt = () => {
  elementShouldBePresent(notification);
};
export const userProfileShldPrsnt = () => {
  elementShouldBePresent(userProfile);
};
export const staffShldPrsnt = () => {
  textShouldBePresent(STAFF);
};
export const emailShldPrsnt = () => {
  textShouldBePresent(EMAIL);
};
export const contactManagementShldPrsnt = () => {
  textShouldBePresent(CONTACT_MANAGEMENT);
};
export const formChannelShldPrsnt = () => {
  textShouldBePresent(FORM_CHANNEL);
};
export const toolsShldPrsnt = () => {
  textShouldBePresent(TOOLS);
};
export const usersShldPrsnt = () => {
  textShouldBePresent(USERS);
};
export const agentProfilesShldPrsnt = () => {
  textShouldBePresent(AGENT_PROFILES);
};
export const adminProfilesShldPrsnt = () => {
  textShouldBePresent(ADMIN_PROFILES);
};
export const organiztionShldPrsnt = () => {
  textShouldBePresent(ORGANIZATIONS);
};
export const teamsShldPrsnt = () => {
  textShouldBePresent(TEAMS);
};
export const mailQueuesShldPrsnt = () => {
  textShouldBePresent(MAIL_QUEUES);
};
export const mailAccountsShldPrsnt = () => {
  textShouldBePresent(MAIL_ACCOUNTS);
};
export const mailJourneysShldPrsnt = () => {
  textShouldBePresent(MAIL_JOURNEYS);
};
export const journeyDraftsShldPrsnt = () => {
  textShouldBePresent(JOURNEY_DRAFTS);
};
export const listsShldPrsnt = () => {
  textShouldExist(LISTS);
};
export const formWebsitesShldPrsnt = () => {
  textShouldExist(FORM_WEBSITES);
};
export const dispositionsShldPrnst = () => {
  textShouldExist(DISPOSITIONS);
};
export const tagsShldPrsnt = () => {
  textShouldExist(TAGS);
};
export const pausesShldPrsnt = () => {
  textShouldExist(PAUSES);
};
export const fieldsShldPrsnt = () => {
  textShouldExist(FIELDS);
};
export const formsShldPrsnt = () => {
  textShouldExist(FORMS);
};
export const timeIntervalsShldPrsnt = () => {
  textShouldExist(TIME_INTERVALS);
};
export const operationalHoursShldPrsnt = () => {
  textShouldExist(OPERATIONAL_HOURS);
};
export const slaPoliciesShldPrsnt = () => {
  textShouldExist(SLA_POLICIES);
};
export const cannedAnswersShldPrsnt = () => {
  textShouldExist(CANNED_ANSWERS);
};
export const signaturesShldPrsnt = () => {
  textShouldExist(SIGNATURES);
};
