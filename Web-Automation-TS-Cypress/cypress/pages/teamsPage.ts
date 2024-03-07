import { TEAMS } from '../utils/constants.util';
import {
  clickHamburgerMenu,
  clickStaff,
  clickTeams,
  hamburgerMenuShldPrsnt
} from './home.page';
const teamHeader = '.admin_page_header_header__26KN6';
export const navigationTeamsPage = () => {
  hamburgerMenuShldPrsnt();
  clickHamburgerMenu();
  clickStaff();
  clickTeams();
  teamsHeaderShldPrsnt();
};
export const teamsHeaderShldPrsnt = () => {
  cy.get(teamHeader).contains(TEAMS).should('be.visible');
};
