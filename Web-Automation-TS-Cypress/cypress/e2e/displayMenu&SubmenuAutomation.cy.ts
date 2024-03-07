import {
  clickContactManagement,
  clickEmail,
  clickFormChannel,
  clickHamburgerMenu,
  clickStaff,
  clickTools,
  hamburgerMenuShldPrsnt
} from '../pages/home.page';
import { fillPassword, fillUsername, submit, visit } from '../pages/login.page';
import {
  adminProfilesShldPrsnt,
  agentProfilesShldPrsnt,
  cannedAnswersShldPrsnt,
  contactManagementShldPrsnt,
  dispositionsShldPrnst,
  emailShldPrsnt,
  fieldsShldPrsnt,
  formChannelShldPrsnt,
  formsShldPrsnt,
  formWebsitesShldPrsnt,
  listsShldPrsnt,
  mailAccountsShldPrsnt,
  operationalHoursShldPrsnt,
  organiztionShldPrsnt,
  pausesShldPrsnt,
  signaturesShldPrsnt,
  slaPoliciesShldPrsnt,
  staffShldPrsnt,
  tagsShldPrsnt,
  teamsShldPrsnt,
  timeIntervalsShldPrsnt,
  toolsShldPrsnt,
  usersShldPrsnt
} from '../pages/menu&Submenu';

describe('Automation test for menu and submenu section at home page -TLS-TC-2', function () {
  before(() => {
    visit();
    cy.fixture('LoginCredentials').then((data) => {
      fillUsername(data.validUserAdmin);
      fillPassword(data.validPassword);
    });
    submit();
  });
  it('Home page menu', function () {
    hamburgerMenuShldPrsnt();
    // logoShldPrsnt();
    // conversationsShldPrsnt();
    // contactsShldPrsnt();
    // statisticsShldPrsnt();
    // searchFieldConversationsContactsShldPrsnt();
    // searchAgentsDropdownShldPrsnt();
    // notificationShldPrsnt();
    // userProfileShldPrsnt();
  });
  it('Menu under hamburger', function () {
    clickHamburgerMenu();
    staffShldPrsnt();
    emailShldPrsnt();
    contactManagementShldPrsnt();
    formChannelShldPrsnt();
    toolsShldPrsnt();
  });
  it(' Staff dropdown submenu', function () {
    clickStaff();
    usersShldPrsnt();
    agentProfilesShldPrsnt();
    adminProfilesShldPrsnt();
    organiztionShldPrsnt();
    teamsShldPrsnt();
  });
  it(' Email dropdown submenu', function () {
    clickEmail();
    // mailQueuesShldPrsnt();
    mailAccountsShldPrsnt();
    // mailJourneysShldPrsnt();
    // journeyDraftsShldPrsnt();
  });
  it('Contact management dropdown submenu', function () {
    clickContactManagement();
    listsShldPrsnt();
  });
  it('Channel dropdown submenu', function () {
    clickFormChannel();
    formWebsitesShldPrsnt();
  });
  it('Tools dropdown submenu', function () {
    clickTools();
    dispositionsShldPrnst();
    tagsShldPrsnt();
    pausesShldPrsnt();
    fieldsShldPrsnt();
    formsShldPrsnt();
    timeIntervalsShldPrsnt();
    operationalHoursShldPrsnt();
    slaPoliciesShldPrsnt();
    cannedAnswersShldPrsnt();
    signaturesShldPrsnt();
  });
});
