import {
  agentComponents,
  loginAsAgent,
  hamburgerMenuIcon,
  switchTheme
} from '../../pages/agent/agentHome.page';

describe('Verify agent home page components', () => {
  before(() => {
    loginAsAgent();
  });
  it(`Agent should be able to see 
  1. Conversation menu,
  2. Statistics menu,
  3. Search bar,
  4. Create conversation button,
  5. Available Users,
  6. Status,
  7. Notification Menu 
  8. Avatar
  on home page`, () => {
    agentComponents().forEach((element) => {
      cy.get(element).should('be.visible');
    });
  });
  it('Hamburger menu icon should not exist for agent', () => {
    cy.get(hamburgerMenuIcon).should('not.exist');
  });
  it('Theme should be toggled between light & dark on clicking Connectel logo', () => {
    switchTheme();
  });
});
