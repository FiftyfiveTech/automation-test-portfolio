/// <reference types= "cypress"/>

import { LONG_WAIT, MEDIUM_WAIT, SHORT_WAIT } from "./CommonVariables";
//Methods for visible text
export const textShouldPrsnt=(text)=>
{
  cy.contains(text).should("be.visible");
}
export const textShouldNotPrsnt = (text)=>  {
  cy.contains(text, {timeout: `${LONG_WAIT}`}).should("not.be.visible");
}
export const textShouldExist=(text)=>
{
  cy.contains(text,{timeout: 50000}).should("exist");
}
export const textShouldNotExist=(text)=>
{
  cy.contains(text,{timeout: `${MEDIUM_WAIT}`}).should("not.exist");
}
export const clickOnVisibleText = (text) => {
  cy.contains(text,{timeout: `${MEDIUM_WAIT}`}).should("be.visible").click({force: true});
}
export const clickOnTextWithinAnElement = (text,element) =>{
  cy.get(element,{timeout: `${MEDIUM_WAIT}`}).contains(text).click({force: true});
}
export const textShouldPrsntWithinAnElement = (text,element) =>{
  cy.get(element,{timeout:`${MEDIUM_WAIT}`}).contains(text).should("be.visible");
}
export const elementShouldNotHaveText = (element,text) => {
  cy.get(element,{timeout: `${MEDIUM_WAIT}`}).should("not.have.text",text);
}
export const elementHavingTextShouldExist = (element,text) => {
  cy.get(element,{timeout: `${MEDIUM_WAIT}`}).contains(text).should("exist");
}
export const elementHavingTextShouldPrsnt = (element,text) => {
  cy.get(element,{timeout: `${MEDIUM_WAIT}`}).contains(text).should("be.visible");
}
export const textShouldBeEnabled = (text) => {
  cy.contains(text, {timeout: `${MEDIUM_WAIT}`}).should("be.enabled");
}
export const textShouldBeDisabled = (text) => {
  cy.contains(text, {timeout: `${MEDIUM_WAIT}`}).should("be.disabled");
}
export const multipleTextShoulPrsnt= (element,array) => {
    array.forEach(text => {
      cy.get(element, {timeout: `${MEDIUM_WAIT}`}).contains(text).should('be.visible');
  });
}
export const verifyMultipleTextByScrolling = (element,array) => { 
  array.forEach(text => {
    cy.contains(text, {timeout: `${MEDIUM_WAIT}`}).scrollIntoView();
    cy.get(element, {timeout: `${MEDIUM_WAIT}`}).contains(text).should('be.visible');
  });
}

//Methods for web elements
export const elementShouldPresent = (element) => {
  cy.get(element,{timeout: `${MEDIUM_WAIT}`}).should("be.visible");
}
export const elementShouldNotPresent = (element) => {
  cy.get(element,{timeout: `${MEDIUM_WAIT}`}).should("be.not.visible");
}
export const elementShouldExist = (element) => {
  cy.get(element,{timeout: `${MEDIUM_WAIT}`}).should("exist");
}
export const elementShouldNotExist = (element) => {
  cy.get(element,{timeout: `${MEDIUM_WAIT}`}).should("not.exist");
}
export const clickOn = (element)=>
{
  cy.get(element,{timeout: `${MEDIUM_WAIT}`}).should('be.visible').click({force: true});
}
export const elementShouldBeDisabled = (element) => {
  cy.get(element,{timeout: `${MEDIUM_WAIT}`}).should('be.disabled');
}
export const elementShouldBeEnabled = (element) => {
  cy.get(element,{timeout: `${MEDIUM_WAIT}`}).should('be.enabled');
};
export const clickOnElementHavingText = (element,text) => {
  cy.get(element,{timeout: `${MEDIUM_WAIT}`}).should('have.text',text).click({force: true});
}
export const elementHavingTextShouldNotPrsnt = (element,text) => {
  cy.get(element,{timeout: `${MEDIUM_WAIT}`}).should('not.have.text',text);
}
export const scrollAndClickOnElement= (element) => {
  cy.get(element,{timeout: `${MEDIUM_WAIT}`}).scrollIntoView().click();
}
export const scrollAndClickOnElementHavingText=(element,text) => {
  cy.get(element,{timeout: `${MEDIUM_WAIT}`}).should('have.text',text).scrollIntoView().click();
}
// Methods for wait
export const shortWait = () => {
  cy.wait(SHORT_WAIT);
}
export const mediumWait = () => {
  cy.wait(MEDIUM_WAIT);
}
export const longWait = () => {
  cy.wait(LONG_WAIT);
}
// Method to create a template
export var tempName="";
export const createTemplateCartName = () => {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0");
  var yyyy = today.getFullYear();
  var hourTime = today.getHours();
  var minuteTime = today.getMinutes();
  var secondTime = today.getSeconds();
  var finalTime = hourTime + ":" + minuteTime + ":" + secondTime;
  var finalName = dd + "_" + mm + "_" + yyyy + " " + finalTime;
  tempName = "TC_" + finalName; 
  return tempName;
}