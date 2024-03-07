/// <reference types='Cypress'/>

import { kiloByte, maxFileSize } from "../../e2e/commonUtils/commonVariables";

const apiUrl = "/v3/images";

// Extract the image file name from the image path
export const extractFileName = (imagePath) => {
  const filePath = imagePath;
  // Find the index of the last occurrence of the directory separator (\ or /)
  const lastSlashIndex = filePath.lastIndexOf("/");
  // Extract the file name including the extension
  const imageFileName = filePath.substring(lastSlashIndex + 1);

  return imageFileName;
};

// this method required three arguments imagePath,bodyDataFixture,responseDataFixture
export const uploadImage = (
  imagePath,
  bodyDataFixture,
  responseDataFixture
) => {
  const imageFileName = extractFileName(imagePath);
  // get company admin bearer token
  cy.getCompanyAdminFinalToken().then((bearerToken) => {
    // Read the content of the image file
    return cy.readFile(imagePath, "binary").then((fileContent) => {
      // Convert the binary content to a Blob
      const blob = Cypress.Blob.binaryStringToBlob(fileContent);
      //get the file size 
      const fileSize=((fileContent.length)/kiloByte).toFixed(2);
      

      cy.log("file size=",fileSize);
      //expect(fileSize).to.below(2048);
      expect(parseFloat(fileSize)).to.below(maxFileSize);
      // Create a FormData object
      const formData = new FormData();
      // Read the JSON fixture file
      return cy.fixture(bodyDataFixture).then((Data) => {
        // Append the data from the fixture file to the FormData object
        Object.keys(Data).forEach((key) => {
          formData.append(key, Data[key]);
        });
        //append image file to the FormData
        formData.append("File", blob, imageFileName); // Append the file content as a Blob

        // Configure the request options
        return cy
          .request({
            url: apiUrl,
            method: "POST",
            body: formData,
            headers: {
              Authorization: `Bearer ${bearerToken}`,
              accept: "application/json; charset=utf-8", // Adjust based on the API requirements
              "Content-Type": "multipart/form-data",
            },
          
          })
          .then((response) => {
            console.log("response body=", response.body);

            const responseBodyString = new TextDecoder().decode(response.body);
            cy.log("Response Body=", responseBodyString);
            const resopnseBodyInJSON = JSON.parse(responseBodyString);

           expect(response.status).to.eq(201);
           expect(resopnseBodyInJSON).to.have.property("size").to.be.eq(fileSize+" KB");
            return cy.fixture(responseDataFixture).then((Data) => {
              Object.keys(Data).forEach((key) => {
                expect(resopnseBodyInJSON)
                  .to.have.property(key)
                  .to.be.eq(Data[key]);
              });
              return resopnseBodyInJSON; // Return the response data for further assertions
            });

          });
      });
   
    });
  });
};

// nagative test cases for Image type and format
export const uploadWrongFormatImageTypeTest = (
  imagePath,
  ImageType, 
  Format 
) => {
  const incorrectImageTypeFormat = "IncorrectRequestBodyData/imageType_Format";
  const typeFormatErrorMsg = "ErrorMsg/imageType_Format";

 
  const filePath = imagePath;
  // Extract the file name including the extension
  const fileName = extractFileName(filePath);

  console.log(fileName); 

  // get company admin bearer token
  cy.getCompanyAdminFinalToken().then((bearerToken) => {
    // Read the content of the image file
    return cy.readFile(imagePath, "binary").then((fileContent) => {
      // Convert the binary content to a Blob
      const blob = Cypress.Blob.binaryStringToBlob(fileContent);

      // Create a FormData object
      const formData = new FormData();
      return cy.fixture(incorrectImageTypeFormat).then((Data) => {
        formData.append("ImageType", ImageType);
        formData.append("Format", Format);
        formData.append("File", blob, fileName); // Append the file content as a Blob

        // Append the required fields to the FormData object
        Object.keys(Data).forEach((key) => {
          formData.append(key, Data[key]);
        });

        //formData.append('UploadedByUserId', 'cb07560d-6155-4ddb-bfc4-08db3a9a9ab4');

        // Configure the request options
        
          return cy
          .request({
            url: apiUrl,
            method: "POST",
            body: formData,
            headers: {
              Authorization: `Bearer ${bearerToken}`,
              accept: "text/plain", // Adjust based on the API requirements
              "Content-Type": "multipart/form-data",
            },
            failOnStatusCode: false, // Don't fail the test on non-2xx status code
          })
          .then((response) => {
            // Assert that the response status is 400
            expect(response.status).to.eq(400);
            const responseBodyString = new TextDecoder().decode(response.body);
            const resopnseBodyInJSON = JSON.parse(responseBodyString);
            cy.log("error msg ", responseBodyString);
            return cy.fixture(typeFormatErrorMsg).then((imageType_Format) => {
              const jsonKey="errorMsg"+ImageType+Format;
              expect(resopnseBodyInJSON.internal_error).to.include(imageType_Format[jsonKey]);
            })
        
          });
    
    });
  });
});
};

