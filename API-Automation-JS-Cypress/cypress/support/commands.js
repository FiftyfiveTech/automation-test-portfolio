
// to get final token of Nibe company admin
Cypress.Commands.add("getCompanyAdminFinalToken", () => {
  const apiUrl = Cypress.env("tokenAuth");
  cy.fixture("companyAdminUserDetails").then((companyAdminUserDetails)=>{
  return cy
    .request({
      method: "POST",
      url: apiUrl,
      form: true,
      body:companyAdminUserDetails,
    })
    .then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.not.be.empty;
      expect(response.body).to.have.property("access_token");

      const accessToken = response.body.access_token; // Store the access token
      return accessToken; // Return the access token
    });
  });
});
