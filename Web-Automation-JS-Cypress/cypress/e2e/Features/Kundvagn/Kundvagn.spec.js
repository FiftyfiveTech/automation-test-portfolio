///<reference types='Cypress'/>
import { kundvagnShouldBeEnabled } from "../../PageObjects/HomePage";
import { addSomeItemToCart, cartShouldBeEmpty, clickDeleteItemBtn, clickKundvagn, clickTomVarukorg, ItemIsDeleted, tillVarukorgBtnShouldPrsnt, tomVarukorgShouldNotPrsnt, tomVarukorgShouldPrsnt, verifyItemInCart } from "../../PageObjects/KundvagnPage";
import { logOut } from "../../PageObjects/ProductGroupPage";
//-----------------------------------------------Background--------------------------------
Given('We log in stage url with valid credentials',()=>{
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
//-------------------------------------------------Scenario #1-------------------------------------
When('We add any item to the cart',()=>{
    addSomeItemToCart();
});
Then('The item should get added to the cart',()=>{
    verifyItemInCart();
});
And('We logout',()=>
{ 
    logOut();
});
//--------------------------------------------------Scenario #2-------------------------------------
And('Click Kundvagn icon',()=>{
    clickKundvagn();
});
Then('Till Varukorg and Tom Varukorg button should be present', ()=>{
    tillVarukorgBtnShouldPrsnt();
    tomVarukorgShouldPrsnt();
});
//--------------------------------------------------Scenario #3-------------------------------------
When('We add some item to cart',()=>{
    addSomeItemToCart();
});
And('Click Tom Varukorg',()=>{
    clickTomVarukorg();
});
Then('Cart should get empty and Tom Varukorg button should not be visible',()=>{
    cartShouldBeEmpty();
    tomVarukorgShouldNotPrsnt();
});
//--------------------------------------------------Scenario #4-------------------------------------
And('Delete that item from cart', ()=>
{ 
    clickDeleteItemBtn();
});
Then('The item should get deleted', ()=>
{
    ItemIsDeleted();
});
