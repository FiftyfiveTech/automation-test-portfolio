///<reference types='cypress'/>

import { mediumWait } from "../../CommonUtils/CommonMethods";
import { clickAcceptCookies, kundvagnShouldbeDisabled, snabborderBtnShouldNotExist, verifyMenusAtHomePage, verifySubmenusForProdukter } from "../../PageObjects/ProductGroupPage";
import { allAccessoriesForVVMS325ShldPrsnt, allProductsOfElpannorShldPrsnt, allTheProductsForLVVshldPrsnt, allTheSubmenusOfProducterShldBeLinked, clickElpannorImg, clickProduktbladBtn, clickTillbehörTab, detailsForEVC13ShldPrsnt, filterTabsForTillbehörShldPrsnt, navigateToSubgrpLVV, navigateToSubgrpPageOfElpannor, productPageForEvc13ShldOpen, resultsOfFilterForProduktblad, selectDocumentTab, selectEVC13FromDropdwn, selectElpannor, selectLuftVattenvärmepumpar, selectProdukterMenu, selectVVM225, selectVVMS325, selectVärmepumpar, shldNaviageteToElpannorPage, shldNaviageteToVVMS325, shldNaviageteToVVMS325ProductPage, shldNavigateToProductVVM225, shldNavigateToSubgrpOfElpannor, shldNavigateToSubgrpOfVärmepumpar, shldNavigateToSubgrpPageOfLVV, typesOfVärmepumparShldPrsnt, verifyDetailsForVVM225, verifyDetailsForVVMS325, visaAllaShldBeSelected } from "../../PageObjects/ProductPages";

//------------------------------------Background--------------------------------
Given('User has navigated to stage url',() => {
    cy.visit(Cypress.config().baseUrl);
    clickAcceptCookies();
    mediumWait();
});
//------------------------------------Scenario #1--------------------------------
When('User is at the home page',() => {
    snabborderBtnShouldNotExist();
    kundvagnShouldbeDisabled();
});
Then('All the menus should be available for the him',() => {
    verifyMenusAtHomePage();
});
//------------------------------------Scenario #2--------------------------------
When('User hovers on Produkter menu',() => {
    selectProdukterMenu();
});
Then('He should be at able to see all the sub menus for Produkter',() => {
    verifySubmenusForProdukter();
});
And('All the submenus should be linked to their respective pages',() => {
    allTheSubmenusOfProducterShldBeLinked();
});
//------------------------------------Scenario #3--------------------------------
When('User selects Elpanor submenu',() => {
    selectElpannor();
});
Then('He should navigate to 15506 page',() => {
    shldNaviageteToElpannorPage();
});
When('User clicks image of Elpanor', () => {

    clickElpannorImg();
});
Then('He should navigate to its subgroup page', () => {
    shldNavigateToSubgrpOfElpannor();
});
And('All associated products should be there', () => {
    allProductsOfElpannorShldPrsnt();
});
//------------------------------------Scenario #4--------------------------------
Given('User has navigated to subgroup page of Elpannor', () => {
   navigateToSubgrpPageOfElpannor();
});
When('User selects VVM 225', () => {
    selectVVM225();
});
Then('He should navigate to its product page', () => {
    shldNavigateToProductVVM225();
});
And('He should able to see model table and all required tabs', () => {
    verifyDetailsForVVM225();
});
//------------------------------------Scenario #5--------------------------------
Given('User has navigated to VVM225 product page', () => {
    navigateToSubgrpPageOfElpannor();
    selectVVM225();
});
When('User selects document tab', () => {
    selectDocumentTab();
});
Then('He should be able to see all the documents at first', () => {
    visaAllaShldBeSelected();
});
When('User clicks Produktblad tab for document filtration', () => {
    clickProduktbladBtn();
});
Then('He should get the results as all Produktblad documents',() => {
    resultsOfFilterForProduktblad();
});
//------------------------------------Scenario #6--------------------------------
When('User selects EVC 13 from the dropdown available on the product page', ()=>{
    selectEVC13FromDropdwn();
});
Then('The product page for EVC 13 should get opened',() => {
    productPageForEvc13ShldOpen();
});
And('User should able to see all the details of EVC 13',() => {
    detailsForEVC13ShldPrsnt();
})
//------------------------------------Scenario #7--------------------------------
When('User selects Värmepumpar submenu', () => {
    selectVärmepumpar();
});
Then('Three different type of heat pumps should be available on product goup page', () => {
    shldNavigateToSubgrpOfVärmepumpar();
    typesOfVärmepumparShldPrsnt();
});
When('User selects LuftVattenvärmepumpar',() => {
    selectLuftVattenvärmepumpar();
});
Then('He should navigate to subgroup page of LuftVattenvärmepumpar',() => {
    shldNavigateToSubgrpPageOfLVV();
});
And('All associated products should be there for LuftVattenvärmepumpar',() => {
    allTheProductsForLVVshldPrsnt();
});
//------------------------------------Scenario #8--------------------------------
Given('User has navigated to subgroup page of LuftVattenvärmepumpar', () => {
    navigateToSubgrpLVV();
})
When('User selects VVM S325', () => {
    selectVVMS325();
})
Then('He should navigate to the product page of VVM S325', () => {
    shldNaviageteToVVMS325ProductPage();
});
And('He should able to see model table and all required tabs along with Kombinationer', () => {
    verifyDetailsForVVMS325();
});
//------------------------------------Scenario #9--------------------------------
Given('User has navigated to VVM S325 product page', () => {
    navigateToSubgrpLVV();
    selectVVMS325();
});
When('User clicks Tillbehör tab of VVM S325', () => {
    clickTillbehörTab();
});
Then('He should be able to see filter tabs as VVM S325 and Visa alla', () => {
    filterTabsForTillbehörShldPrsnt();
});
And('All the accessories related to VVM S325 should be visible', () => {
    allAccessoriesForVVMS325ShldPrsnt();
});