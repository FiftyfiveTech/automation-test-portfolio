// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
require('cy-verify-downloads').addCustomCommand();
const dotenv=require('dotenv');
dotenv.config();
let cachedTokenExpiryTime = new Date().getTime();
let cachedTokenResponse = null;
let cntry=Cypress.env('COUNTRY');
console.log("Country value: " + cntry);
const SPARA={sv:"Spara",int:"Save"};
Cypress.Commands.add("login", () => {
  // Clear our cache if tokens are expired
  if (cachedTokenExpiryTime <= new Date().getTime()) {
    cachedTokenResponse = null;
  }

  return login(cachedTokenResponse).then((tokenResponse) => {
    cachedTokenResponse = tokenResponse;
    // Set expiry time to 50 minutes from now
    cachedTokenExpiryTime = new Date().getTime() + 50 * 60 * 1000;
  });
});

const tenant = "nibeb2c.onmicrosoft.com";
const signInPolicy = "B2C_1_Nibe_ROPC_TestAuthenticationUserFlow";
const applicationID = "5f276e51-763a-40df-a7c7-66995e9b9825";
const tenantSubdomain = tenant.split('.')[0];
const instance = `https://${tenantSubdomain}.b2clogin.com/`;
const signInAuthority = `${instance}${tenant}/${signInPolicy}`;

const randomFunction = (body) => {
  return new Promise(async (resolve, reject) => {
    const hasElement = async (element) => {
      const signInField = await body.find('[data-testid="menu-profile-button"]')
      if (signInField.length > 0) {
        return true;
      }
      return false;
    };

    if (await hasElement('#signInName')) {
      resolve();
    } else {
      return resolve(cy.wait(1000));
    }
  })
}
Cypress.Commands.add("getRetry", (element) => {
  // this needs to be rewritten in some reasonable,
  // should just be 10 tries during 10 seconds
  return cy.get("body").then((body) => {
    return randomFunction(body);
  })
    .get("body").then((body) => {
      return randomFunction(body);
    })
    .get("body").then((body) => {
      return randomFunction(body);
    })
  //.get("body").then((body) => {
  // return randomFunction(body);
  //})
  // .get("body").then((body) => {
  //   return randomFunction(body);
  // })
  // .get("body").then((body) => {
  //  return randomFunction(body);
  // })
  // .get("body").then((body) => {
  //   return randomFunction(body);
  // })
  //.get("body").then((body) => {
  //  return randomFunction(body);
  //})
  //.get("body").then((body) => {
  //  return randomFunction(body);
  //})
  //.get("body").then((body) => {
  // return randomFunction(body);
  //});
});

Cypress.Commands.add("redirectLogin", () => {
    cy.get("button[id='onetrust-accept-btn-handler']",{timeout: 10000})
    .click({force: true})
    .get('[data-testid="menu-login-button"]',{timeout: 20000})
    .click({force: true})
    .getRetry('#signInName')
    .get("body").then((body) => {
      return new Promise(async (resolve, reject) => {
        const signInField = await body.find('#signInName', { timeout: 20000 })
        if (signInField.length > 0) {
          resolve(cy.get('#signInName').wait(2000)
            .type(Cypress.env('USER_USERNAME'), { force: true })
            .get('#password').wait(2000)
            .type(Cypress.env('USER_PASSWORD'))
            .get('#next')
            .click().wait(10000));
            //for dev env uncomment following actions
            //cy.get("#termsApproved_true").click();
            //cy.get("button#continue").click({force: true});
        } 
        else {
          return resolve();
        }
      })
    })
    .getRetry('[data-testid="menu-profile-button"]');
});

Cypress.Commands.add("byPassLogin",() => {
  const User =Cypress.env('USER_USERNAME');
  const Pwd = Cypress.env('USER_PASSWORD');
  cy.session([User,Pwd],() => { 
    cy.visit('/')
    .get("button[id='onetrust-accept-btn-handler']",{timeout: 5000})
    .click({force: true})
    .get('[data-testid="menu-login-button"]',{timeout: 20000})
    .click({force: true})
      .get('[data-testid="menu-login-button"]',{timeout: 5000})
    .click({force: true})
    .getRetry('#signInName')
    .get("body").then((body) => {
      return new Promise(async (resolve, reject) => {
        const signInField = await body.find('#signInName', { timeout: 5000 })
        if (signInField.length > 0) {
          resolve(cy.get('#signInName').wait(2000)
            .type(User)
            .get('#password').wait(2000)
            .type(Pwd)
            .get('#next')
            .click().wait(5000));
            //for dev env uncomment following actions
            //cy.get("#termsApproved_true").click();
          //cy.get("button#continue").click({force: true});
        } 
        else {
          return resolve();
        }
      })
    })
    .getRetry('[data-testid="menu-profile-button"]');
  cy.selectCompany();
  
  });
  
});
const findOrWait = async (element, wait, maxWait) => {
  return cy.wrap(cy.get("body").then(body => {
    return new Promise(async (resolve, reject) => {
      if (wait > maxWait) {
        reject();
      } else {
        const signInField = await body.find('#signInName', { timeout: 5000 })
        if (signInField.length > 0) {
          resolve();
        } else {
          cy.wait(1000).then(() => {
            findOrWait(element, wait + 1000, maxWait)
          });
        }
      }
    })
  }));
}

const testfix = async (element, wait, resolve, reject) => {
  cy.get("body").then(body => {
    body.find(element).then(signInField => {
      if (signInField.length > 0) {
        resolve();
      } else {
        setTimeout(function () {
          testfix(element, wait + 1000, resolve, reject);
        }, 1000);
      }
    })
  })
}

Cypress.Commands.add("getWithRetry", (element, maxWait) => {
  return new Cypress.Promise((resolve, reject) => {
    testfix(element, 0, resolve, reject);
  })
})
Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})

Cypress.Commands.add("loginAzureB2C", () => {
  cy.request({
    method: "POST",
    url: `${signInAuthority}/oauth2/v2.0/token`,
    form: true,
    body: {
      grant_type: "password",
      client_id: applicationID,
      username: Cypress.env('USER_USERNAME'),
      password: Cypress.env('USER_PASSWORD'),
      scope: "https://nibeb2c.onmicrosoft.com/jpidev-api/demo.read https://nibeb2c.onmicrosoft.com/jpidev-api/demo.write"
    },
  }).then(response => {
    const ADALToken = response.body.access_token;
    const expiresIn = response.body.expires_in;
    localStorage.setItem("adal.token.keys", `${applicationID}|`);
    localStorage.setItem(`adal.access.token.key${applicationID}`, ADALToken);
    localStorage.setItem(`adal.expiration.key${applicationID}`, expiresIn);
    localStorage.setItem("adal.idtoken", ADALToken);
  });
});
Cypress.Commands.add("selectCompany",() => {
  cy.wait(10000);
  cy.get("body", { timeout: 10000 }).then(($body) => {
    if (
      $body.find("div[class='MuiFormControl-root tss-1yvdr2s-formControl css-13sljp9']>div>select", {
        timeout: 10000,
      }).length > 0
    ) {
      //evaluates as true if button exists at all
      cy.get("div[class='MuiFormControl-root tss-1yvdr2s-formControl css-13sljp9']>div>select",{timeout:5000}).then(
        ($header) => {
          if ($header.is(":visible")) {
           // cy.get("select").select("UTESÄLJARE Test                    ");
            //cy.get("select").select("NIBE SYSTEMTECHNIK GMBH            ");
            // when using dev env uncomment next line
            cy.get("select").select("UTESÄLJARE NES                    ");
            cy.contains(SPARA[cntry]).should("be.visible").click();
          }
        });
      }
        else {
           //you get here if the button DOESN'T EXIST
           assert.isOk('everything','everything is OK');
        }
        cy.wait(5000);
    });
});

