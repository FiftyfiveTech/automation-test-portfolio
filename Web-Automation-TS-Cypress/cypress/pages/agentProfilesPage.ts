import { AGENT_PROFILES } from '../utils/constants.util';

const agentProfileHeader = '.admin_page_header_header__26KN6';
export const agentProfileHeaderShldPrsnt = () => {
  cy.get(agentProfileHeader).contains(AGENT_PROFILES).should('be.visible');
};
