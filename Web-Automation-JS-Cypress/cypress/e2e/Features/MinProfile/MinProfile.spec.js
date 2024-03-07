///<reference types='Cypress'/>
import { clickOn, clickOnVisibleText, elementHavingTextShouldPrsnt, multipleTextShoulPrsnt, shortWait, textShouldPrsnt } from "../../CommonUtils/CommonMethods";
import {  MSG_FOR_DUPLICATE_USER, ORGANISATION, ROLL_UPPDATERAD, SUCCESS_MSG_FOR_DELETING_USER } from "../../CommonUtils/CommonVariables";
import { kundvagnShouldBeEnabled } from "../../PageObjects/HomePage";
import { addSomeItemToCart, emptyTheCartIfNonEmpty } from "../../PageObjects/KundvagnPage";
import { PageForTooltipInfoForOrganisation, TooltipForOrganisation, allDetailsShldPrsntForFakturor, allDetailsShldPrsntForOrders, allSectionsShouldExist, cartIsAlreadyUsedMsgShldDisplay, cartShlNotGetUpdated, clickEyeIconToSeeInvoiceDetails, clickEyeIconToSeeOrderDetails, clickFirstUserDetails, clickFukturorLink, clickInstallationsLinkInDashboard, clickInviteNewUser, clickInvoicesLinkInDashboard, clickNLPpLinkInDashboard, clickOnToolTipIconForInköpslistor, clickOrdersLinkInDashboard, clickProductFromInstallations, clickProfileLinkInDashboard, companyNameFieldShldAlreadyBeFilled, dataForInköpslistorShldPrsnt, deleteSearchedUser,  detailsOfInvoiceInDashboardShldPrsnt, detailsOfLatestInvoiceShldGetDisplayed, detailsOfLatestOrderShldGetDisplayed, detailsOfNLPInDashboardShldPrsnt, detailsOfOrdersInDashboardShldPrsnt, detailsOfProfileInDashboardShldPrsnt, documentForNLPShldGetOpened, emailShldBeVisible, eneterStatusToSearchInvoice, eneterStatusToSearchOrders, enterValidUser,  eyeIconShldNotPrsntInDashboard, fillDetailsToAddUser, firstNameShldBeVisible, foreTargetShldBeVisible, fukturorLinkShldPrsnt, getNameOfLatestInstalledProduct, headerForInköpslistorShldPrsnt, installtionRelatedDataFieldsShldPrsnt, insuranceRelatedDataFieldsShldPrsnt, intallationsShldPrsntInDashboard, invoicesWithSearchedStatusShldVisible, lastNameShldBeVisible, linkShldPrsntForInvoices, linkShldPrsntInOrders, linkShldPrsntInProfile, listAndMapShldPrsnt, maxFourInstallationsShldPrsnt, maxThreeOrdersShldPrsnt, msgForDeletingUserShldDisplay, msgForUpdatingroleShldDisplay, navigateBackToFukturorPage, navigateToFukturorDetailsPage, onlyFörfallenInvoicesShldPrsnt, ordersWithSearchedStatusShldVisible, organisationShldBeVisible, pagesShldHaveTenRecords, pagesShldHaveTenUsers, paginationShldExist, pinShldVisibleInTheMap, profilShldBeVisible, registrationFormShldGetOpened, roleShldBeVisible, roleShldGetUpdated, searchProductInInstallationByItsName, searchProductInInstallations, searchedUserDetailsShldGetDisplayed, selectBeställningar, selectFakturor, selectFutureDate, selectInköpslistor, selectMinProfil, selectOrganisation, selectProfileSection, selectRegistreraProdukt, selectSenasteInstallationer, shldGetNotifiedToUseCorrectDate, shldGetResultsForSearchedProduct, shldNavigateToInstallationsPage, shldNavigateToInvoicesPage, shldNavigateToOrdersPage, shldNavigateToProfilePage, successMsgForAddingShoppingListToCartShldDisplay, successMsgForCreateUser, toolTipInfoShldDisplay, tooltipForBeställningarsShldExist, tooltipForFakturorsShldExist, tooltipInfoForInköpslistorShldPrsnt, updateUserRole, useTopmostTemplate, userDashboardShldLoad, userEmailShldBeVisible, userNAmeShouldDisplayInDashboard, userNameShldBeVisible, userRoleShldBeVisible, userShldGetRemoved, verifyForetagetSection, verifyProfilSection, verifyUserIsAtMinProfilPage, verifyUserRoleIsAdmin } from "../../PageObjects/MinProfilPage";
import { companyInfoHeaderShldPrsnt } from "../../PageObjects/NewUserFormPage";
import { logOut } from "../../PageObjects/ProductGroupPage";
import { getTotalQtyOfItemsInTopmostTemplate, verifyItemsIncartForUsedTemplate, itemShldGetAddedToCartAfterUsingTemplate, clickEyeIconOfTopmostTemplate, shldNavigateToItemPage, templateNameShldPrsnt, linkToGoBackToTemplateShldPrsnt, clcikOnInköpslistorLink, shldNAvigateToTemplatePage, getNameOfTopmostTemplate, errorMessageForDuplicateNameShldGetDisplayed } from "../../PageObjects/TemplateCart";
//-------------------------------------Background-----------------------------------
Given('We log in stage url with valid credentials',()=>
{
    cy.visit(Cypress.config().baseUrl)
    .byPassLogin();
    //.redirectLogin();
});
Then('User should be able to login successfully', ()=>
{
    //cy.selectCompany();
    cy.visit('/');
    kundvagnShouldBeEnabled();
});
And('Navigates to Min Profil page',()=>
{
    selectMinProfil();
});
//-------------------------------------Scenario #1-----------------------------------
When('I am on Min Profil page and I am Admin',()=>
{
    selectProfileSection();
});
Then('User should see Översikt, Profil, Organisation, Bestallningar, Fakturor and Inköpslistor section',()=>{
    allSectionsShouldExist();
});
And('Logout',()=>{
    logOut();
});
//-------------------------------------Scenario #2-----------------------------------
And('I select Profil',()=>{
    selectProfileSection();
 });
Then('I should see profil section and Foretarget section',()=>{
    profilShldBeVisible();
    foreTargetShldBeVisible();
});
And('Profil section should have name, epost and roll',()=>{
    verifyProfilSection();
});
And('Foretarget section should have Foretag, Org nr, Adress, epost and Tele', () => {
    verifyForetagetSection();
});

Then('Min organisation section should be available for me',()=>
{
    organisationShldBeVisible();
});
And('I select any user to see details by clicking on eye icon',()=>
{ 
    clickFirstUserDetails();
});
Then('I should see name, email and role', ()=>
{
    userNameShldBeVisible();
    userEmailShldBeVisible();
    userRoleShldBeVisible();
});
And('I select create new user option',()=>
{
    clickInviteNewUser();
});
Then('I should see firstname, lastname, email and role',()=>
{
    firstNameShldBeVisible();
    lastNameShldBeVisible();
    emailShldBeVisible();
    roleShldBeVisible();
});
When('User search with a valid user name',()=>
{
    enterValidUser();
});
And('Logout',()=>
{
    logOut();
});
//-------------------------------------Scenario#3-----------------------------------
Given('User is at Min Profil page', () => {
    cy.url().should('include',"user-profile/dashboard");
});
When('User role is an Admin', () => {
   verifyUserRoleIsAdmin();
});
Then('Organisation section should be available for him',()=>
{
    organisationShldBeVisible();
});
//-------------------------------------Scenario#4-----------------------------------
When('User selects Organisation section',() => {
   selectOrganisation();
});
And('Selects any user to see details by clicking on eye icon',()=>
{ 
    clickFirstUserDetails();
});
Then('He should see name, email and role', ()=>
{
    userNameShldBeVisible();
    userEmailShldBeVisible();
    userRoleShldBeVisible();
});
//-----------------------------------------------Scenario #5----------------------------------------
Given('User is at Organisation section of Min Profil page',() => {
    selectOrganisation();
});
When('User selects invite new user option',()=>
{
    clickInviteNewUser();
});
Then('He should see firstname, lastname, email and role',()=>
{
    firstNameShldBeVisible();
    lastNameShldBeVisible();
    emailShldBeVisible();
    roleShldBeVisible();
});
//-----------------------------------------------Scenario #6-----------------------------------------
And('Fills all required details and adds user to the organisation',() => {
    fillDetailsToAddUser();
});
Then('That new user should get added successfully',() => {
    successMsgForCreateUser();
});
//-----------------------------------------------Scenario #7-----------------------------------------
And('Enters user details which already exists in the organisation',() => {
   fillDetailsToAddUser();
   shortWait();
});
Then('User should get notified that user alredy exists in the organisation',() => {
    errorMessageForDuplicateNameShldGetDisplayed();
});
//-----------------------------------------------Scenario #8-----------------------------------------
When('User searches for a user name',() =>{
    enterValidUser();
});
And('Updates the role of the user',() =>{
    updateUserRole();
});
Then('A success message for updated role should get displayed',() => {
   msgForUpdatingroleShldDisplay();
});
And('The role should get updated successfully',()=>{
    roleShldGetUpdated();
});
//-----------------------------------------------Scenario #9-----------------------------------------
When('User clicks on the icon for tooltip',() => {
    clickOn(TooltipForOrganisation);
});
Then('User should able to see the information about Organisation section',() => {
    toolTipInfoShldDisplay();
});
//-----------------------------------------------Scenario #10-----------------------------------------
Given('User is at Organisation section',() => {
    selectOrganisation();
});
When('User search with a valid user name',()=>
{
    enterValidUser();
});
Then('User should see the searched user name in the table',()=>{
    searchedUserDetailsShldGetDisplayed();
});
//-----------------------------------------------Scenario #11-----------------------------------------
Then('He should able to see pages for users in the organisation',() => {
    paginationShldExist();
});
//-----------------------------------------------Scenario #12-----------------------------------------
And('Deletes that user',() => {
    deleteSearchedUser();
});
Then('A success message for deletion should get displayed',() => {
   msgForDeletingUserShldDisplay();    
});
And('Deleted user should get removed successfully',() => {
    userShldGetRemoved();
});
//-----------------------------------------------Scenario #13-----------------------------------------
Given('User is at Min Profil page',() => {
    verifyUserIsAtMinProfilPage();
});
When('User selects Organization section from side menu',() => {
    selectOrganisation();
});
Then('Each page of users in organisation should have maximum ten users',() => {
    pagesShldHaveTenUsers();
});
//-----------------------------------------------Scenario #14-----------------------------------------
When('User selects Beställningar option from side menu',() => {
    selectBeställningar();
});
Then('A search bar along with a table with proper headers is available',() => {
    allDetailsShldPrsntForOrders();
});
And('A tooltip for Beställningars should be available',() => {
    tooltipForBeställningarsShldExist();
});
//-----------------------------------------------Scenario #15-----------------------------------------
And('Enters a status in the search bar to filter orders by its status',() => {
    //getNameOfLatestInstalledProduct();
    eneterStatusToSearchOrders();
});
Then('All the orders with searched status should get listed in the orders table',() => {
    ordersWithSearchedStatusShldVisible();
});
//-----------------------------------------------Scenario #16-----------------------------------------
And('Clicks eye icon to see order details of the latest order',() => {
   clickEyeIconToSeeOrderDetails();  
});
Then('All the details of that order should get displayed',() => {
    detailsOfLatestOrderShldGetDisplayed();
});
//-----------------------------------------------Scenario #17-----------------------------------------
Then('He should be able to see pages for orders',() => {
    paginationShldExist();
});
//-----------------------------------------------Scenario #18-----------------------------------------
Then('Each page should have maximum ten orders',() => {
    pagesShldHaveTenRecords();
});
//-----------------------------------------------Scenario #19-----------------------------------------
When('User selects Fakturor option from side menu',() => {
    selectFakturor();
});
Then('A search bar along with a table with proper headers is available for Fakturor',() => {
    allDetailsShldPrsntForFakturor();
});
And('A tooltip for Fakturor should be available',() => {
    tooltipForFakturorsShldExist();
});
//-----------------------------------------------Scenario #20-----------------------------------------
And('Enters a status in the search bar to filter Invoice by its status',() => {
    eneterStatusToSearchInvoice();
});
Then('All the Invoices with searched status should get listed in the Invoice table', () => {
    invoicesWithSearchedStatusShldVisible();
});
//-----------------------------------------------Scenario #21-----------------------------------------
And('Clicks eye icon to see Invoice details of the latest Invoice',() => {
    clickEyeIconToSeeInvoiceDetails();
});
Then('A Fukturor link should be available to go back to Fakturor page',() => {
    fukturorLinkShldPrsnt();
});
When('User clicks the link',() => {
    clickFukturorLink();
});
Then('He should navigate back to Fakturor page',() => {
    navigateBackToFukturorPage();
});
//-----------------------------------------------Scenario #22-----------------------------------------
Then('He should navigate to Fakturor details page for the latest Invoice',() => {
    navigateToFukturorDetailsPage();
});
And('All the details of that Invoice should get displayed', () => {
    detailsOfLatestInvoiceShldGetDisplayed();
});
//-----------------------------------------------Scenario #23-----------------------------------------
Then('He should be able to see pages of invoices',() => {
    paginationShldExist();
});
//-----------------------------------------------Scenario #24-----------------------------------------
Then('Each page should have maximum ten invoices',() => {
    pagesShldHaveTenRecords();
});
//-------------------------------------------------Scenario #25------------------------------------------------
And('User clicks any product from the list in installtions', ()=> {
    clickProductFromInstallations();
});
Then('Pin to the address of the installed product should be visible in the map', () => {
    pinShldVisibleInTheMap();
});
//-------------------------------------------------Scenario #26------------------------------------------------
And('Selects Product registration option from side menu bar', () => {
    selectRegistreraProdukt();
});
Then('The form should get opened',() => {
    registrationFormShldGetOpened();
});
And('He should be able to see Installationsfirma,Organisationsnummer,E-postadress,Serienummer and Installationsdatum fields', () => {
    installtionRelatedDataFieldsShldPrsnt();
});
And('Insurance information for users should also be visible', () => {
    insuranceRelatedDataFieldsShldPrsnt();
});
//-------------------------------------------------Scenario #27------------------------------------------------
When('User is at Product registration page', () => {
    selectRegistreraProdukt();
});
Then('User can see the installtion company name field is filled by default',() => {
    companyNameFieldShldAlreadyBeFilled();
});
When('User selects a future date in date field', () => {
    selectFutureDate();
});
Then('He should be notified with a warning to use correct date', () => {
    shldGetNotifiedToUseCorrectDate();
});
//-------------------------------------------------Scenario #28--------------------------------
Given('User is at latest installations page', () => {
    verifyUserIsAtMinProfilPage();
    selectSenasteInstallationer();
});
When('User searches for a product by its name', () => {
    searchProductInInstallationByItsName();
});
Then('He he should get the results for searched product', () => {
    shldGetResultsForSearchedProduct();
});