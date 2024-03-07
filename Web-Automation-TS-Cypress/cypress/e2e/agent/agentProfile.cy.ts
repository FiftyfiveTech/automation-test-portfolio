import {
  agentProfileWithAssociatedQueue,
  loginAsAgent,
  verifyAgentProfile,
  verifyUserNameAndRole
} from '../../pages/agent/agentHome.page';

describe('Verify agent home page components', () => {
  let agent;
  before(() => {
    loginAsAgent();
    cy.fixture('agent/agent').then((data) => {
      agent = data;
    });
  });
  it('Agent should see its name and role', () => {
    verifyUserNameAndRole(agent.name, agent.role);
  });
  it('Agent should see its agent profile', () => {
    verifyAgentProfile(agent.agentProfiles);
  });
  it('Each agent profile is associated to its queue', () => {
    agentProfileWithAssociatedQueue(agent.agentProfiles);
  });
});
