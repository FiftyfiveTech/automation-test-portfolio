import { loginAsAgent, logout } from '../../pages/agent/agentHome.page';

describe('Login and logout as agent', () => {
  it('Agent is able to login successfully', () => {
    loginAsAgent();
  });
  it('Agent is able to logout successfully', () => {
    logout();
  });
});
