import { Theme, UserRole, login } from '../../utils/global.util';
import { clickOn } from '../../utils/cypressMethod.util';

export const hamburgerMenuIcon = '#menu-icon';
const profileAvatar = '.header-auth-user > .avatar-wrapper > .avatar';
const agentProfiles = 'div[class=\'agentprofiles\']>.agentprofile';
const profileHeader = 'div[class=\'header\']';
const profileHeaderIcons = 'div[class=\'header\']>div[class=\'right\'] svg';
const conversationMenu = '[data-title="Conversations"]';
const statisticsMenu = '[data-title="Statistics"]';
const searchBar = '.search-content';
const createConversationButton = '.create-conversation';
const userMenu = '.header-user-presence';
const userStatusMenu = '.header-user-status';
const notificationMenu = '.header-notifications';
const themeButton = '#logo';

export const agentComponents = () => {
  return [
    conversationMenu,
    statisticsMenu,
    searchBar,
    createConversationButton,
    userMenu,
    userStatusMenu,
    notificationMenu,
    profileAvatar
  ];
};

export const showAgentDetailsDropdown = () => {
  clickOn(profileAvatar);
};

export const getAgentProfileElement = (index: number, callback: any) => {
  cy.get(agentProfiles)
    .eq(index)
    .within(() => {
      callback();
    });
};

export const verifyAgentProfile = (profiles: any[]) => {
  showAgentDetailsDropdown();
  profiles.forEach((profile, index: number) => {
    getAgentProfileElement(index, () => {
      cy.get('.text>.title').should('have.text', profile.title);
    });
  });
};

export const agentProfileWithAssociatedQueue = (profiles: any[]) => {
  showAgentDetailsDropdown();
  profiles.forEach((profile, index: number) => {
    getAgentProfileElement(index, () => {
      cy.contains(profile.title)
        .parent()
        .get('.subtitle')
        .should(
          'have.text',
          profile.queues
            .reduce((text: string, queue: { title: string }) => {
              return text + queue.title + ', ';
            }, '')
            .slice(0, -2)
        );
    });
  });
};

export const verifyUserNameAndRole = (name: string, role: string) => {
  showAgentDetailsDropdown();
  cy.get(profileHeader).within(() => {
    cy.get('.title>.name').should('have.text', name);
    cy.get('.title>.roles').should('include.text', role);
  });
};

export const loginAsAgent = () => {
  login(false, UserRole.AGENT);
};

export const logout = () => {
  showAgentDetailsDropdown();
  cy.get(profileHeaderIcons).eq(0).click();
};

export const switchTheme = () => {
  cy.get(themeButton).should('be.visible');
  cy.get('body').then(($el) => {
    if ($el[0].className.includes(Theme.LIGHT)) {
      cy.get(themeButton).click();
      cy.get('body').should('have.class', Theme.DARK);
    } else {
      cy.get(themeButton).click();
      cy.get('body').should('have.class', Theme.LIGHT);
    }
  });
};
