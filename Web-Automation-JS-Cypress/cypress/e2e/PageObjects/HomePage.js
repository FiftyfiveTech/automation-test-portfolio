const dotenv=require('dotenv');
dotenv.config();
import { clickOnVisibleText, elementHavingTextShouldPrsnt, elementShouldBeEnabled, elementShouldPresent, mediumWait, shortWait, textShouldBeEnabled, textShouldNotPrsnt, textShouldPrsnt, textShouldPrsntWithinAnElement } from "../CommonUtils/CommonMethods";
import { FAST_ORDER, F_SERIEN, INGEN_INFO_HITTADES, INGET_RESULTAT, INTERNATIONAL, KUNDVAGN, LARMNUMMER, LARMSOK, NO_RESULT, PROFFSHHALP, SKICKA, S_SERIEN } from "../CommonUtils/CommonVariables";
import { addressLine1DeliveryaddrShldPrsnt, addressLine1InvoiceaddrShldPrsnt, addressLine1PostaladdrShldPrsnt, addressLine2DeliveryaddrShldPrsnt, addressLine2InvoiceaddrShldPrsnt, addressLine2PostaladdrShldPrsnt, cityDeliveryaddrShldPrsnt, cityInvoiceaddrShldPrsnt, cityPostaladdrShldPrsnt, companyInfoHeaderShldPrsnt, companyNameShldExist, contactInfoHdrShldPrsnt, deliveryAddressHeaderShldPrsnt, invoiceAddressHeaderShldPrsnt, landDeliveryAddrShldPrsnt, landInvoiceAddrShldPrsnt, landPostalAddrShldPrsnt, orgNoShldExist, postalAddressHeaderShldPrsnt, sameAsDeliveryAddressShldPrsnt, sameAsPostalAddressShldPrsnt, saveBtnShldPrsnt, zipCodeDeliveryaddrShldPrsnt, zipCodeInvoiceaddrShldPrsnt, zipCodePostaladdrShldPrsnt } from "./NewUserFormPage";
import { clickNibe, clickProduktExportCsv, clickProduktExportExcel, clickTopSearchBtn, enterValidArticleNum, menuHeader, readDownloadedSpareCsv, readDownloadedSpareExcel, subMenuList, topSearchField } from "./ProductGroupPage";
import { ContainerToShowSelectedLang, clickProductExportCsv, clickProductExportExcel } from "./InternationalLang";
import { addSomeItemToCart } from "./KundvagnPage";
import { enterPositiveQuantity, itemsShldGetAddedToCart } from "./SnabborderPage";
const HeadingForAlarmSearch=".tss-1mw3d0f-contentStyles";
const ProductType="div[data-testid='dropdown']";
const InputToEnertCode="input[placeholder='Fyll i larmnummer']";
const SearchAlarmButton=".tss-5191s5-buttonDiv>button>span";
const SideMenuBar=".tss-mh2t33-mainDiv>ul";
const InfoContainer=".tss-fd5pk6-root>div[class='tss-1ijp8js-textStyle']";
const AlarmSearchInSideMenu=".tss-mh2t33-mainDiv>ul>div>li";
export const KundvagnBtn=".tss-1n2kwfz-contentWrapper>div>div:nth-child(5)>div>button";
let lang;
let cntry=Cypress.env('COUNTRY');
console.log("Country value: " + cntry);
export const snabborderShouldAvailable =() => {
    cy.contains("Snabborder",{timeout: 5000}).should("exist");
}
export const kundvagnShouldBeEnabled =  () => {
    cy.log("country value= "+cntry);
    cy.log("text=" + KUNDVAGN[cntry]);
    elementShouldBeEnabled(KundvagnBtn);
}
export const searchInvalidArticleNum = (datatable) => {
    datatable.hashes().forEach((element) => {
        cy.reload();
        enterValidArticleNum(element.invalidArticleNum);
        clickTopSearchBtn();
        cy.contains("Inget resultat").should("be.visible", { timeout: 5000 });
      });
}
export const searchValidSerialNum = () => {
    cy.fixture("articleNumbers").then((data) => {
        enterValidArticleNum(data.validArticlenum3);
    });
    clickTopSearchBtn();
    mediumWait();
}
export const searchByValidArticleForNonLoggedInUser = () => {

    cy.fixture('articleNumbers').then((data) => {
        cy.get(topSearchField).type(data.validArticlenum);
    })
    clickTopSearchBtn();
}
export const searchByInvalidArticleForNonLoggedInUser = () => {
    cy.fixture('articleNumbers').then((data) => {
        cy.get(topSearchField).type(data.invalidArticlenum);
    })
    clickTopSearchBtn();
}
export const errorMessageForInvalidSearchShldDisplay = () => {
    textShouldPrsnt(INGET_RESULTAT[cntry]);
}
export const verifyUserIsAtHomePage = () => {
    shortWait();
    cy.url().should("include", Cypress.config().baseUrl);
    //kundvagnShouldbeDisabled();
}
export const verifySelectedLang=() => {
    cy.get(ContainerToShowSelectedLang).invoke('text').then((text) => {
        if(text==INTERNATIONAL)
        {
            lang="en";
        }
        else
        {
            lang="sv";
        }
    });
}
export const filesShldGetDownloaded = () => {
   /* if(lang=="en")
    {
        clickProductExportCsv();
        clickProductExportExcel();
    }
    else
    {*/
        clickProduktExportCsv();
        clickProduktExportExcel();
    //}
    readDownloadedSpareCsv();
    readDownloadedSpareExcel();
}
export const searchForMultipleValidArticleNum= (datatable) =>{
    datatable.hashes().forEach((element) => {
    clickNibe();
    enterValidArticleNum(element.validArticleNum);
    clickTopSearchBtn();
    cy.contains(element.validArticleNum).should("be.visible", {timeout: 10000,});
    });
}
export const searchForMultipleInvalidArticleNum = (datatable) => {
    datatable.hashes().forEach((element) => {
    cy.reload();
    enterValidArticleNum(element.invalidArticleNum);
    clickTopSearchBtn();
    cy.get(ContainerToShowSelectedLang).invoke('text').then((text) => {
        textShouldPrsnt(INGET_RESULTAT[cntry]);
    });
    });
}
export const searchByValidRskNumForNonLoggedInUser = () => {
    cy.fixture('RskNumbers').then((data) => {
        cy.get(topSearchField).type(data.RSKnum1);
        clickTopSearchBtn();
    })
}
export const productDetailsForRskNumForNonLoggedInUser = () => {
    cy.fixture('RskNumbers').then((data) => {
        cy.url().should('include',data.ArticleNum1)
        textShouldPrsnt(data.ArticleNum1);
    });
}
export const searchByInvalidRskNum = () => {
    cy.fixture('RskNumbers').then((data) => {
        cy.get(topSearchField).type(data.invalidRSKnum);
        clickTopSearchBtn();
    })
}
export const searchByValidRskNumForLoggedInUser = () => {
    cy.fixture('RskNumbers').then((data) => {
        cy.get(topSearchField).type(data.RSKnum2);
        clickTopSearchBtn();
    })
}
export const productDetailsForRskNumForLoggedInUser = () => {
    cy.fixture('RskNumbers').then((data) => {
        cy.url().should('include',data.ArticleNum2)
        textShouldPrsnt(data.ArticleNum2);
    });
}
export const allMenusForInternationalCmpnyShldPrsnt = () => {
    cy.fixture('SwitchCompany').then((data) => {
        multipleTextShoulPrsnt(menuHeader,data.Menus);
    });
}
export const searchValidArticleNumInTopSearchBar = () => { 
    cy.fixture('articleNumbers').then((data) => {
        cy.get(topSearchField).type(data.validArticlenum2);
    });
    clickTopSearchBtn();
    mediumWait();
}
//--------------------------------------------------------- Alarm Search --------------------------------------------------------
export const proffshjälpShldPrsnt = () => { 
    textShouldPrsntWithinAnElement(PROFFSHHALP,menuHeader);
}
export const selectProffshjälp = () => {
    cy.get(menuHeader).contains(PROFFSHHALP).click();
}
export const larmsökShldPrsnt = () => { 
elementHavingTextShouldPrsnt(subMenuList,LARMSOK);
}
export const clickLarmsök = () => { 
    clickOnVisibleText(LARMSOK);
}
export const larmsökShldGetOpened = () => {
    cy.url().should('include',"proffshjalp/larmsok");
    sideMenuBarShldPrsnt();
    larmsökShldPrsntInSideMenu();
    textShouldPrsntWithinAnElement(LARMSOK,HeadingForAlarmSearch)
    inputFieldsShldPrsnt();
}
export const inputFieldsShldPrsnt = () => {
    elementShouldPresent(ProductType);
    elementShouldPresent(InputToEnertCode);
    elementHavingTextShouldPrsnt(SearchAlarmButton,SKICKA);
}
export const S_SerienShldBeSelected= () => {
    cy.get(ProductType).contains(S_SERIEN).should('be.visible');
}
export const sideMenuBarShldPrsnt = () => {
    elementShouldPresent(SideMenuBar);
}
export const larmsökShldPrsntInSideMenu = () => {
    textShouldPrsntWithinAnElement(LARMSOK,SideMenuBar);
}
export const searchAlarmCode=(datatable) => {
    datatable.hashes().forEach((element) => {
        const searchTerm1 = element["S_Series"];
        cy.log("input num: "+searchTerm1);
        cy.get(InputToEnertCode).clear().type(searchTerm1);
        clickSearchAlarmCodeBtn();
        informationShldDispalay();
        textShouldPrsnt(LARMNUMMER,searchTerm1);
    });
    datatable.hashes().forEach((element) => {
        const searchTerm2 = element["F_Series"];
        selectF_SerienType();
        cy.get(InputToEnertCode).clear().type(searchTerm2);
        clickSearchAlarmCodeBtn();
        informationShldDispalay();
        textShouldPrsnt(LARMNUMMER,searchTerm2);
    });
}
export const clickSearchAlarmCodeBtn = () => {
    clickOnVisibleText(SKICKA);
}
export const informationShldDispalay = () => {
    //cy.get(InfoContainer).should("be.visible");
    elementShouldPresent(InfoContainer);
}
export const codeDetailsShldGetDisplayed = () => {
    cy.get(AlarmSearchInSideMenu).last().find("div:nth-child(1)").then((text)=>{
        cy.wrap(text).should('have.css','color');
    });
} 
export const selectF_SerienType = () => {
    cy.get(ProductType).click();
    clickOnVisibleText(F_SERIEN);
}
export const searchInvalidAlarmCode=(datatable) => {
    datatable.hashes().forEach((element) => {
        const searchTerm1 = element.S_Series;
        cy.get(InputToEnertCode).clear().type(searchTerm1);
        clickOnVisibleText(SKICKA); 
        textShouldPrsnt(LARMNUMMER,searchTerm1);
        textShouldPrsnt(INGEN_INFO_HITTADES);
    });
    datatable.hashes().forEach((element) => {
        const searchTerm2=element.F_Series;
        selectF_SerienType();
        cy.get(InputToEnertCode).clear().type(searchTerm2);
        clickOnVisibleText(SKICKA); 
        textShouldPrsnt(LARMNUMMER,searchTerm2);
        textShouldPrsnt(INGEN_INFO_HITTADES);
    });
}
//------------------------------------International Language--------------------------------

