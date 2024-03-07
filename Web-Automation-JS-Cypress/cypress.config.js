const { defineConfig } = require('cypress')
const dotenv = require('dotenv');
dotenv.config();


module.exports = defineConfig({
  chromeWebSecurity: false,
  video: false,
  env: {
    USER_USERNAME: process.env.LOGIN_USERNAME,
    USER_PASSWORD: process.env.LOGIN_PASSWORD,
    STAGE_ENV:process.env.STAGE_ENV,
    PROD_ENV: process.env.PROD_ENV,
    COUNTRY:process.env.COUNTRY
  },
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    reporterEnabled: 'cypress-mochawesome-reporter,mocha-junit-reporter',
    cypressMochawesomeReporterReporterOptions: {
      reportDir: 'cypress/reports',
      charts: true,
      reportPageTitle: 'My Test Suite',
      embeddedScreenshots: true,
      inlineAssets: true,
    },
    mochaJunitReporterReporterOptions: {
      mochaFile: 'cypress/reports/junit/results-[hash].xml',
    },
  },
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    specPattern: 'cypress/e2e/**/*.feature',
    baseUrl: process.env.BASE_URL,
    stageUrl:process.env.STAGE_URL,
    //experimentalSessionAndOrigin: true,
    // following steps will prevent tests from being encountered by 'out of memory' error/ from browser crash
    downloadsFolder: 'cypress/downloads',
    "defaultCommandTimeout": 10000, // in milliseconds
    "defaultCommandRetryTimeout": 5000, // in milliseconds
    "requestTimeout" : 50000,
    //"numTestsKeptInMemory": 0,
    "responseTimeout" : 50000,
    "pageLoadTimeout": 100000,
  },
})
