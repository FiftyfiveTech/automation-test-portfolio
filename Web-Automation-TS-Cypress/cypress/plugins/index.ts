/**
 * @type {Cypress.PluginConfig}
 */
module.exports = (on) => {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  require('cypress-mochawesome-reporter/plugin')(on);
};
