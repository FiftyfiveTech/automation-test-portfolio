///<reference types= 'Cypress'/>
import { mediumWait, shortWait } from "../../CommonUtils/CommonMethods";
import { kundvagnShouldBeEnabled } from "../../PageObjects/HomePage";
import { addSomeItemToCart, emptyTheCartIfNonEmpty } from "../../PageObjects/KundvagnPage";
import { clickKundvagn } from "../../PageObjects/KundvagnPage";
import { cartShouldBeEmpty } from "../../PageObjects/KundvagnPage";
import { cartIsAlreadyUsedMsgShldDisplay, cartShlNotGetUpdated, clickOnToolTipIconForInköpslistor, dataForInköpslistorShldPrsnt, headerForInköpslistorShldPrsnt, pagesShldHaveTenRecords, paginationShldExist, selectInköpslistor, selectMinProfil, successMsgForAddingShoppingListToCartShldDisplay, tooltipInfoForInköpslistorShldPrsnt, useTopmostTemplate } from "../../PageObjects/MinProfilPage";
import { logOut } from "../../PageObjects/ProductGroupPage";
import { itemsShldGetAddedToCart } from "../../PageObjects/SnabborderPage";
import { addNewTemplate, addTwoItemsToCart, clcikOnInköpslistorLink, clickEyeIconOfTopmostTemplate, clickMallVagn, createTemplate, createTemplateWithDuplicateName, deleteTemplate, dialogForTemplateShldGetOpened, enetrNameForTemplate, enterNameForTemplateWithLessThanThreeChars, errorMessageForDuplicateNameShldGetDisplayed,  getNameOfTopmostTemplate,  getTotalQtyOfItemsInTopmostTemplate,  go_To_Inkopslistor,  itemShldGetAddedToCartAfterUsingTemplate,  linkToGoBackToTemplateShldPrsnt,  mallVagnShldBeDisabled, mallVagnShldBeEnabled, messageForTemplateDeletionShldBeDisplayed, qtyShldGetUpdated, saveBtnForTemplateShldBeDisabled, saveTemplate, selectTemplateFromDropdown, shldNAvigateToTemplatePage, shldNavigateToItemPage, startsUpdatingTheTemplate, successMsgForTemplateShldGetDisplayed, successMsgForUpdatingTemplateShldGetDisplayed, templateNameShldPrsnt, templateShldGetUpdate, templateShouldBeDeleted, templateShouldGetSaved, verifyItemsIncartForUsedTemplate, viewTemplateToBeUpdated, viewUpdatedTemplate} from "../../PageObjects/TemplateCart";
//---------------------------------------Background----------------------------------------------
When('User navigates to stage url and provides valid credetials for login', () => {
    cy.visit(Cypress.config().baseUrl)
    .byPassLogin();
    //.redirectLogin();
});
Then('User should be able to login successfully', () =>{
    //cy.selectCompany();
    cy.visit('/');
    kundvagnShouldBeEnabled();
});
//------------------------------------------Scenario#1----------------------------------------------
When('Cart is empty', () => {
    clickKundvagn();
    cartShouldBeEmpty();
});
Then('User should not be able to create template', ()=> {
    mallVagnShldBeDisabled();
});
//-------------------------------------------Scenario #2--------------------------------------------
When('User adds some items to cart', () => {
    addSomeItemToCart();
});
Then('The items should get added in the cart', () => {
    itemsShldGetAddedToCart();
});
And('He should be able to make the cart as template', () => {
    clickKundvagn();
    mallVagnShldBeEnabled();
});
//-------------------------------------------Scenario #3----------------------------------------------
Given('Items are added in the cart', () => {
    addSomeItemToCart();
    itemsShldGetAddedToCart();
    mediumWait();
});
When('User starts creating template cart', () => {
    clickKundvagn();
    clickMallVagn();
});
Then('A dialog box should get open', () => {
    dialogForTemplateShldGetOpened();
});
When('User creates a new template', () => {
    addNewTemplate();
});
And('Provides a name to the template', () => {
    enetrNameForTemplate();
});
And('Saves the template', () => {
    saveTemplate();
    mediumWait();
});
Then('A message for successful creation of template should get displayed', () => {
    successMsgForTemplateShldGetDisplayed();
});
And('The template should get saved in the shopping list', () => {
    templateShouldGetSaved();
});
//--------------------------------------------Scenario #4----------------------------------------------
And('Tries to provide a name with less than three characters', () => {
    addNewTemplate();
    enterNameForTemplateWithLessThanThreeChars();
});
Then('He should not be able to save the the template', () => {
    saveBtnForTemplateShldBeDisabled();
});
//--------------------------------------------Scenario #5----------------------------------------------
When('User creates a template and provides a duplicate name',() => {
    createTemplateWithDuplicateName();
});
Then('An error message should get displayed', () => {
    errorMessageForDuplicateNameShldGetDisplayed();
});
And('Logout', () => {
    logOut();
});
//--------------------------------------Scenario #6----------------------------------------
When('User adds a spare part to the cart', () => {
    viewTemplateToBeUpdated();
    addTwoItemsToCart();
});
And('Wants to add that spare part to a template', () => {
    startsUpdatingTheTemplate();
});
Then('Selects a template from the dropdown list', () => {
    selectTemplateFromDropdown();
});
Then('Proper message for updation should be displayed', () => {
    successMsgForUpdatingTemplateShldGetDisplayed();
});
When('User goes to Shopping list to see the template after updation',() => {
    go_To_Inkopslistor();
    viewUpdatedTemplate();
});
Then('That template should get updated with added items', () =>{
    mediumWait();
    templateShldGetUpdate();
});
And('Quantity of duplicate items should be updated', () => {
    qtyShldGetUpdated();
});
//--------------------------------------Scenario #7----------------------------------------
When('User navigates to Inköpslistor', () => {
    go_To_Inkopslistor();
});
And('Deletes a template from the list', () => {
    deleteTemplate();
});
Then('Proper message should be displayed', () => {
    messageForTemplateDeletionShldBeDisplayed();
});
And('That template should be deleted',() => {
    templateShouldBeDeleted();
});
//-----------------------------------------------Scenario #8-----------------------------------------
Given('User is at Min Profil page', () => {
    selectMinProfil();
});
When('User selects Inköpslistor option from side menu',() => {
    selectInköpslistor();
});
Then('He should able to see list of Inköpslistor if exists',() => {
    dataForInköpslistorShldPrsnt();    
});    
And('Proper headers for Inköpslistor table should exist', ()=>{
    headerForInköpslistorShldPrsnt();
});
//-----------------------------------------------Scenario #9-----------------------------------------
Then('He should be able to see pages for shopping lists',() => {
    paginationShldExist();
});
And('Each page should have maximum ten shopping lists',() => {
    pagesShldHaveTenRecords();
});
//-----------------------------------------------Scenario #10-----------------------------------------
And('Clicks on the tooltip icon for Inköpslistor',() => {
    clickOnToolTipIconForInköpslistor();
}); 
Then('He should be able to see the information for Inköpslistor',() => {
    tooltipInfoForInköpslistorShldPrsnt();
});
//-----------------------------------------------Scenario #11-----------------------------------------
Given('Some items are added to the cart',() => {
    addSomeItemToCart();
    shortWait();
});
And('Clicks Use button to use the template',() => {
    useTopmostTemplate();
});
Then('An error message should be displayed',() => {
    cartIsAlreadyUsedMsgShldDisplay();
});
And('He should not be able to add the template items to the cart', () => {
    cartShlNotGetUpdated();
});
//-----------------------------------------------Scenario #12-----------------------------------------
Given('Cart is empty',() => {
    emptyTheCartIfNonEmpty();
});
Then('A success message for using shopping list should get displayed',() => {
    successMsgForAddingShoppingListToCartShldDisplay();
    getTotalQtyOfItemsInTopmostTemplate();
});
And('Items of shopping list should get added to the cart successfully',() => {
    verifyItemsIncartForUsedTemplate();
});
When('User adds more items to the cart',() => {
    addSomeItemToCart();
});
Then('Items should append to already added shopping cart', () => {
   itemShldGetAddedToCartAfterUsingTemplate();
});
//-----------------------------------------------Scenario #13-----------------------------------------
And('Clicks the eye icon of topmost template',() => {
    getNameOfTopmostTemplate();
    clickEyeIconOfTopmostTemplate();
});
Then('User should navigate to item page to see items in the template',() => {
    shldNavigateToItemPage();
});
And('Should able to see the name of selected template at the top',() => {
    templateNameShldPrsnt();
});
//-----------------------------------------------Scenario #14-----------------------------------------
Then('A link to go back should be available for him',() => {
    linkToGoBackToTemplateShldPrsnt();
});
When('User clicks on the link',() =>{
    clcikOnInköpslistorLink();
});
Then('He should navigate back to template page to see shopping list',() => {
    shldNAvigateToTemplatePage();
});