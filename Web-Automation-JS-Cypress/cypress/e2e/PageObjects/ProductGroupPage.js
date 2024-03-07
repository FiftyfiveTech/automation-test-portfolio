///<reference types= 'Cypress'/>
const dotenv=require('dotenv');
dotenv.config();
import {
  clickOn,
  clickOnElementHavingText,
  clickOnTextWithinAnElement,
  clickOnVisibleText,
  elementHavingTextShouldExist,
  elementHavingTextShouldPrsnt,
  elementShouldBeDisabled,
  elementShouldNotExist,
  elementShouldPresent,
  longWait,
  mediumWait,
  shortWait,
  textShouldBeDisabled,
  textShouldExist,
  textShouldNotExist,
  textShouldNotPrsnt,
  textShouldPrsnt,
} from "../CommonUtils/CommonMethods";
import { ACCEPT_ALL_COOKIES, ANOSK_OM_KONTO, BERGVARMEPUMPAR, FILE_NAME, FRANLUFTSVARMEPUMPAR, KUNDVAGN, LOGGA_UT, PRODUKTEXPORT_CSV, PRODUKTEXPORT_EXCEL, RESERVDELAR, RESERVDELSSOK, SERIAL_NUMBER_NOT_PRESENT, SNABBORDER, STAGE_USER, VILLAPANNOR } from "../CommonUtils/CommonVariables";
import { KundvagnBtn } from "./HomePage";
import { select_066083_Article } from "./ModelNumberPage";
import { select_F110_Model } from "./ModelPage";
import { clickGaTillArtikelsida, selectElpatron } from "./SparePartPage";
const firstSparePart ="div[class='tss-zmd1ms-mainDiv']>ul>div:nth-child(1)>li>div:nth-child(3)>svg"
const articleNumField =
  "div[role='presentation']>div:nth-child(3)>div>div>div>div>div:nth-child(1)>div>div>input";
const topSearchButton = "div[class='tss-1nylyf5-searchBarStyle']>div:nth-child(2)>button";
export const topSearchField ="div[class='MuiAutocomplete-root css-18nc3u2']>div>div>input";
const nibeIcon = "img[alt='logo']";
export const menuHeader = "div[class='tss-4xvdw-wrapper']>ul";
export const subMenuList = ".MuiList-root.MuiList-padding.tss-1yrqgzh-subMenuListWrapper.css-1ontqvh";
const addToCartBtn =
  ".jss392 > :nth-child(2) > .MuiButtonBase-root > .MuiButton-label";
export const searchSerialNoInHeroComp =
  "div[class='tss-k0pyco-serialInputStyle']>div>div>input";
export const sokBtnContainer =
  ".container-fluid>div:nth-child(3)>div>div:nth-child(2)>div";
export const serialNoLink =
 "div[class='tss-1qlbozq-labelSecondStyle']>span"
const serialNoLinkPage = "div[class='MuiDialogContent-root css-1ty026z']>div>h2";
const SelectReservdelar = "div[class='tss-okhobw-autoMargin tss-1gpo1yi-grid']>div:nth-child(1)>div>div>div:nth-child(2)>a"
const profileOption ="div[class='MuiGrid-root MuiGrid-container tss-15d123q-profileMainGrid css-1d3bbye']";
const F1105_Hitt_Producter = "div[id='0']>div>div:nth-child(2)>div>svg";
const f1105_VISA_RESERVDELAR="div[class='MuiGrid-root css-rfnosa']>div>button"
const commonLocatorForAllLinks = "a[class='MuiTypography-root MuiTypography-inherit tss-90arel-footerLeftInfoText css-z48z1h']";
const CartContainer=".tss-1n2kwfz-contentWrapper>div>div:nth-child(5)>div>button";
let pos;
let cntry=Cypress.env('COUNTRY');
console.log("Country value: " + cntry);
export const snabborderBtnShouldExist = () => {
  textShouldPrsnt(SNABBORDER[cntry]);
};
export const verifyEnv=() => {
  if(Cypress.config().baseUrl==Cypress.config().stageUrl){
      pos=1;
   }
  else
  {
      pos=0;
  }
}
export const clickAcceptCookies = () => {
  clickOnVisibleText(ACCEPT_ALL_COOKIES);
  console.log("clicked cookies");
};
export const kundvagnShouldExist = () => {
  textShouldExist(KUNDVAGN[cntry]);
};
export const selectBergvermepumparProduct = () => {
  selectReservdelar();
  clickOnVisibleText(BERGVARMEPUMPAR);
};
export const selectFirstSparePart = () => {
  clickOn(firstSparePart);
};
export const selectReservdelar = () => {
  clickOnTextWithinAnElement(RESERVDELSSOK[cntry],menuHeader);
  clickOnTextWithinAnElement(RESERVDELSSOK[cntry],subMenuList);
  shortWait();
}
export const selectfrånluftsvärmepumparProductfGrp = () => {
  selectReservdelar();
  clickOnVisibleText(FRANLUFTSVARMEPUMPAR[cntry]);
};
export const selectVillPannorProductGrp = () => {
  clickOnVisibleText(VILLAPANNOR[cntry]);
};
export const enterValidArticleNum = (validArticleNum) => {
  cy.get(topSearchField).type(validArticleNum);
};
export const clickTopSearchBtn = () => {
  clickOn(topSearchButton);
};
export const clearTopSearch = () => {
  cy.get(topSearchField).clear();
};
export const clickNibe = () => {
  clickOn(nibeIcon);
};
export const addToCartBtnShldNotPrsnt = () => {
  elementShouldNotExist(addToCartBtn);
};
export const clickReservdelar = () => {
  //cy.reload();
  clickOnTextWithinAnElement(RESERVDELSSOK[cntry],menuHeader);
  return this;
};
export const clickProduktExportCsv = () => {
  clickOnVisibleText(PRODUKTEXPORT_CSV[cntry])
  return this;
};
export const clickProduktExportExcel = () => {
  clickOnVisibleText(PRODUKTEXPORT_EXCEL[cntry]);
  return this;
};
export const readDownloadedSpareCsv = () => {
  longWait();
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0");
  var yyyy = today.getFullYear();
  today = dd + "_" + mm + "_" + yyyy;
  var finalName = FILE_NAME[cntry] + "_" + today + ".csv";
  cy.readFile(`./cypress/downloads/${finalName}`).should('exist',{timeout: 20000});
};
export const readDownloadedSpareExcel = (lang) => {
  longWait();
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0");
  var yyyy = today.getFullYear();
  today = dd + "_" + mm + "_" + yyyy;
  if(lang=="en") {
    var initName = "NIBE_Spareparts";
  }
  else
  {
    var initName = "NIBE_Reservdelar";
  }
  var finalName = initName + "_" + today + ".xlsx";
  cy.readFile(`./cypress/downloads/${finalName}`,).should('exist',{timeout: 20000});
  };
export const enterValidSerialInHeroComp = (validSerialNum) => {
  selectReservdelar();
  cy.get(searchSerialNoInHeroComp).type(validSerialNum);
  cy.wait(2000);
};
export const enterInvalidSerialInHeroComp = (invalidSerialNum) => {
  selectReservdelar();
  cy.scrollTo(0,1000);
  cy.get(searchSerialNoInHeroComp).type(invalidSerialNum);
};
export const clickSOK = () => {
  cy.get(sokBtnContainer).find("button").click();
};
export const serialNoNotprsntshldDisplay = () => {
    textShouldPrsnt(SERIAL_NUMBER_NOT_PRESENT[cntry]);
};
export const clickSerialNumLink = () => {
  selectReservdelar();
  clickOn(serialNoLink);
};
export const serialNoLinkPageShldDisply = () => {
  elementShouldPresent(serialNoLinkPage);
};
export const serialNoLinkPageForIntLangShld=()=> {
  elementHavingTextShouldExist(serialNoLinkPage,"Where is the serial number of my NIBE product?");
}
export const clickProfile = () => {
  cy.get(profileOption,{timeout: 5000}).scrollIntoView().filter(`:contains(${STAGE_USER})`).click({force: true});
};
export const clickLogout = () => {
  clickOnVisibleText(LOGGA_UT[cntry]);
};
export const snabborderBtnShouldNotBeVisible= () => {
  textShouldNotPrsnt(SNABBORDER);
};
export const snabborderBtnShouldNotExist= () => {
    textShouldNotExist(SNABBORDER);
};
export const kundvagnShouldbeDisabled = () => {
    elementShouldBeDisabled(KundvagnBtn);
};
export const ansokOmKontoShouldPresent = () => {
  textShouldPrsnt(ANOSK_OM_KONTO);
};
export const clickAnsokOmKonto = () => {
  clickOnVisibleText(ANOSK_OM_KONTO);
};
export const checkAllFooterLinks = () => {
  cy.get(commonLocatorForAllLinks).each(page => {
    console.log("page name: ", page);
    const link = page.prop('href');
    cy.request(link).then(response => {
      Cypress.log({
      name: link,
      message: response.status
      })
    })
  });
};
export const logOut = () => {
  clickProfile();
  clickOnVisibleText(LOGGA_UT[cntry]);
  mediumWait();
  kundvagnShouldbeDisabled();
};
export const logoutFromInernationalCompany = () => {
  clickProfile();
  clickOnVisibleText("Logout");
  mediumWait();
  elementShouldBeDisabled(CartContainer);
}
export const verifyMenusAtHomePage = () => {
  elementHavingTextShouldExist(menuHeader, "Produkter");
  elementHavingTextShouldExist(menuHeader, "Proffshjälp");
  elementHavingTextShouldPrsnt(menuHeader,"Nedladdning");
  elementHavingTextShouldPrsnt(menuHeader,"Kontakt");
  elementHavingTextShouldExist(menuHeader, "Reservdelssök");
};
export const verifySubmenusForProdukter = () => { 
  cy.get(menuHeader).contains("Produkter").click();
  elementHavingTextShouldPrsnt(subMenuList, "Pannor");
  elementHavingTextShouldPrsnt(subMenuList, "Värmepumpar");
  elementHavingTextShouldPrsnt(subMenuList, "Solenergi");
  elementHavingTextShouldPrsnt(subMenuList, "Ventilation");
  elementHavingTextShouldPrsnt(subMenuList,"VARMVATTENBEREDARE OCH ACKUMULATORTANKAR");
  elementHavingTextShouldPrsnt(subMenuList, "Tillbehör");
  elementHavingTextShouldPrsnt(subMenuList,"Smarta hem-tillbehör");
  elementHavingTextShouldPrsnt(subMenuList,"NIBE Uplink");
  elementHavingTextShouldPrsnt(subMenuList,"myUplink");
  elementHavingTextShouldPrsnt(subMenuList,"Digital produktkatalog");
  elementHavingTextShouldPrsnt(subMenuList,"Guide för byte av frånluftsvärmepump");
}
export const verifySubmenusforProffshjälp =() => {
  cy.get(menuHeader).contains("Proffshjälp").click();
  elementHavingTextShouldExist(subMenuList,"Webbshop för marknadsföringsmaterial");
  elementHavingTextShouldExist(subMenuList, "Dimensionering");
  elementHavingTextShouldPrsnt(subMenuList,"Dockningsprinciper");
  elementHavingTextShouldExist(subMenuList, "Information för din kund");
  elementHavingTextShouldExist(subMenuList, "Kommunikation");
  elementHavingTextShouldExist(subMenuList, "NIBE Training");
  elementHavingTextShouldPrsnt(subMenuList,"Proffsnytt");
  elementHavingTextShouldPrsnt(subMenuList,"Ärende- och returhantering");
  elementHavingTextShouldPrsnt(subMenuList,"Larmsök");
}
export const verifySubmenusForReservdelssök = () => {
  cy.get(menuHeader).contains("Reservdelssök").click();
  elementHavingTextShouldExist(subMenuList, "Reservdelssök");
  elementHavingTextShouldExist(subMenuList, "Produktexport CSV");
  elementHavingTextShouldExist(subMenuList, "Produktexport Excel");
}
export const verifySubmenusForNedladdning = () => {
  cy.get(menuHeader).contains("Nedladdning").click();
  elementHavingTextShouldPrsnt(subMenuList,"Sök Dokument");
  elementHavingTextShouldPrsnt(subMenuList,"Dokumentbeställning");
  elementHavingTextShouldPrsnt(subMenuList,"Bildbank");
}
export const verifySubmenusForKontakt= () => {
  cy.get(menuHeader).contains("Kontakt").click();
  elementHavingTextShouldPrsnt(subMenuList,"För Proffs");
  elementHavingTextShouldPrsnt(subMenuList,"Innesäljare");
  elementHavingTextShouldPrsnt(subMenuList,"Fastighetsteam");
  elementHavingTextShouldPrsnt(subMenuList,"Distriktsäljare");
}
export const verifyAllSubMenus = () => {
    verifySubmenusForProdukter();
    verifySubmenusforProffshjälp();
    verifySubmenusForNedladdning();
    verifySubmenusForKontakt();
    verifySubmenusForReservdelssök(); 
};
export const naviagteToFinalSparePartPage = () => {
  select_F110_Model();
  select_066083_Article();
  selectElpatron();
  clickGaTillArtikelsida();
};
export const searchSerialNoInHero = () => {
  cy.fixture("serialNumbers").then((data) => {
    enterValidSerialInHeroComp(data.validSerialnum1);
  });
  clickSOK();
}
export const productDetailsForSerialNum = () => {
  cy.fixture('serialNumbers').then((data) => {
    var serialNo = data.validSerialnum1;
    var expectedSnoOnPage = serialNo.slice(0, 6);
    mediumWait();
    cy.contains(expectedSnoOnPage).should("be.visible", { timeout: 5000 });
  });
}
export const searchInvalidSerialNumInHero = () => {
  cy.fixture("serialNumbers").then((data) => {
    enterInvalidSerialInHeroComp(data.invalidSerialnum);
  });
  clickSOK();
}
export const navigateTillFinalSparePartPage = () => {
  clickOn(F1105_Hitt_Producter);
  clickOn(f1105_VISA_RESERVDELAR);
  mediumWait();
  clickOn(firstSparePart);
  shortWait();
  cy.scrollTo(0,-1000);
}
export const clickSerialNumLinkForIntLang = () => {
  
  clickOnElementHavingText(serialNoLink,"Where is the serial number?");
}
