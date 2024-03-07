const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'v6rvuk',
  e2e: {
    baseUrl: 'url',
    retries: 1,
    pageLoadTimeout: 100000,
    defaultCommandTimeout: 50000,

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env: {
    MAILOSAUR_API_KEY: "API-KEY",
  },
  /*env: {
    MAILDEV_PROTOCOL: "http",
    MAILDEV_HOST: "127.0.0.1",
    MAILDEV_SMTP_PORT: "1025",
    MAILDEV_API_PORT: "1080",
  },*/
});


