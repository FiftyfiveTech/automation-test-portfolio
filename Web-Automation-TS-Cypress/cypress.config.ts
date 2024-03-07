import { defineConfig } from 'cypress';

export default defineConfig({
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports',
    charts: true,
    reportPageTitle: 'Atlas Report',
    embeddedScreenshots: true,
    inlineAssets: true,
    overwrite: false,
    html: true,
    json: false
  },
  video: false,
  requestTimeout: 30000,
  responseTimeout: 50000,
  numTestsKeptInMemory: 50,
  pageLoadTimeout: 100000,
  defaultCommandTimeout: 60000,
  e2e: {
    baseUrl: 'https://atlas-dev-ec2-b.connectel.io/'
  },
  env: {
    backendUrl: 'https://atlas-dev-ec2-b.connectel.io:8001/',
    superadmin: {
      username: 'sushma.goswami',
      password: '49z!Pww%F9W7RQs^',
      encryptedPassword: '5f52114a3b1c1c4e2d523c5c393a1835'
    },
    admin: {
      username: 'john.doe.admin',
      password: '1234567890',
      encryptedPassword: '5a59585f5e5d5c53525b'
    },
    agent: {
      username: 'john.doe',
      password: '1234567890',
      encryptedPassword: '5a59585f5e5d5c53525b'
    }
  }
});
