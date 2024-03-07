const { publish, defineConfig  } = require('test-results-reporter');
const dotenv=require('dotenv');
dotenv.config();
console.log(process.env.NODE_ENV);
const config = defineConfig({
    "reports": [
      {
        "targets": [
          {
            "name": "teams",
            "inputs": {
              "url": process.env.TEAMS_WEBHOOK_URL,
              "publish": "failure-details",
              "title":`CUSTOMER PORTAL AUTOMATION REPORT | Environment - ${process.env.NODE_ENV}`,
              "width":"full"
            }
          }
        ],
        "results": [
          {
            "type": "junit",
            "files":  ["./cypress/reports/junit/*.xml"]         
         }
        ]
      }
    ]
  })
  publish({ config });