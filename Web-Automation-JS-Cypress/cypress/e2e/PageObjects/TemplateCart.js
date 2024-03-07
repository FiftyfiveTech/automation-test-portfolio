const dotenv=require('dotenv');
dotenv.config();
import {
  clickOn,
  clickOnElementHavingText,
  clickOnTextWithinAnElement,
  clickOnVisibleText,
  createTemplateCartName,
  elementHavingTextShouldNotPrsnt,
  elementHavingTextShouldPrsnt,
  elementShouldBeDisabled,
  elementShouldBeEnabled,
  elementShouldPresent,
  mediumWait,
  shortWait,
  textShouldPrsnt,
} from "../CommonUtils/CommonMethods";
import {
  INKOPSLISTOR,
  SPARA,
  LAGG_TILL_I_INKOPSLISTA,
  SKAPA_INKOPSLISTA,
  LAGG_I_KUNDVAGN,
  UPPDATERA_INKOPSLISTA,
  Msg_For_Updating_TEMPLATE,
  MSG_FOR_DELETING_TEMPLATE,
  MSG_INFORMING_EMPTY_TEMPLATE
} from "../CommonUtils/CommonVariables";
import { clickKundvagn} from "./KundvagnPage";
import { OrderTable, clickMinProfil } from "./MinProfilPage";
import { clickProfile } from "./ProductGroupPage";
import { enterPositiveQuantity, enterValidArticleNum, selectSnabborder, verifyItemOnCart } from "./SnabborderPage";
let Final1;
const MALL_HAR_SKAPATS = {sv:"Inköpslista har skapats",int:"The shopping list has been created"};
const DialogBoxForTemplate = "div[role='dialog']";
const Mall_Vagn_Btn = ".tss-9j1cfb-buttonDivCenter>div:nth-child(2)>button";
const SkapaInköpslistaBtn ="div[class='tss-27jmq5-buttonStyle']>div:nth-child(1)>button";
const NameFieldForTemplate =
  "div[class='MuiDialogContent-root css-1ty026z']>div>div[class='MuiFormControl-root MuiTextField-root tss-nxmw2a-textFieldStyle css-i44wyl']>div>input";
const SaveBtnForTemplate = "div[class='tss-10qekl8-buttonStyle']>div:nth-child(1)>button";
const Inkopslistor_Container ="div[class='tss-1eu4247-mainDivStyle']>div>table>tbody>tr:nth-child(1)";
const Topmost_Template_In_The_Table = "div[class='tss-1ttnzgb-tableDiv']>div>div>table>tbody>tr:nth-child(1)>td:nth-child(1)";
const ERROR_MESSAGE_FOR_DUPLICATE_NAME={sv:"Det uppstod ett fel när inköpslistan skapades",int:"There has been error while creating a shopping List"};
const DeleteTemplateButton ="div[class='tss-1ttnzgb-tableDiv']>div>div>table>tbody>tr:nth-child(1)>td:nth-child(5)";
const ConfirmButtonForDeletion = "div[role='dialog']>div>div>div>div:nth-child(1)>button";
const DropdownForTemplate = "div[class='MuiFormControl-root tss-1f1lt26-formControl css-13sljp9']>div>select"
const ViewTemplateButton = "table[class='MuiTable-root css-av3lu9']>tbody>tr:nth-child(1)>td:nth-child(4)>p>svg>path";
const ArticlesListInTemplate = "div[class='tss-6jq34a-quantityDiv']>p";
const QtyListInTemplate="div[class='tss-6jq34a-quantityDiv']>p:nth-of-type(even)";
const TemplateDetailsContainer =  "div[class='MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-8 MuiGrid-grid-lg-8 tss-iq8fab-gridItem2 css-efwuvd']";
const NameOfTopmostTemplateInTable = "table[class='MuiTable-root css-av3lu9']>tbody>tr:nth-child(1)>td:nth-child(1)>p";
let Name_Of_Created_Template;
let Added_Article_Number_1;
let Added_Article_Number_2;
let Original_Quantity;
let Updated_Quantity;
let arrayBeforeUpdation=[];
let arrayAfterUpdation=[];
let TotalQtyOfItemsInTemplate=0;
let TotalQtyInCart=0;
let NameOfTopmostTemplate;
let cntry=Cypress.env('COUNTRY');
console.log("Country value: " + cntry);
//----------------------------------------Scenario #1-----------------------------------------
export const mallVagnShldBeDisabled = () => {
  elementShouldBeDisabled(Mall_Vagn_Btn);
};
//----------------------------------------Scenarrio #2----------------------------------------
export const mallVagnShldBeEnabled = () => {
  elementShouldBeEnabled(Mall_Vagn_Btn);
};
/*----------------------------------------Scenario #3-----------------------------------------*/
export const clickMallVagn = () => {
  clickOnVisibleText(LAGG_TILL_I_INKOPSLISTA[cntry]);
};
export const dialogForTemplateShldGetOpened = () => {
  elementShouldPresent(DialogBoxForTemplate);
};
export const addNewTemplate = () => {
  clickOnVisibleText(SKAPA_INKOPSLISTA[cntry]);
};
export const enetrNameForTemplate = () => {
    Name_Of_Created_Template=createTemplateCartName();
    cy.get(NameFieldForTemplate).should("be.visible").type(Name_Of_Created_Template);
};
export const saveTemplate = () => {
  clickOnElementHavingText(SaveBtnForTemplate, SPARA[cntry]);
};
export const successMsgForTemplateShldGetDisplayed = () => {
  textShouldPrsnt(MALL_HAR_SKAPATS[cntry]);
};
/*-------------------------------------------Scenario #4---------------------------------------*/
export const enterNameForTemplateWithLessThanThreeChars = () => {
    cy.fixture("TemplateNames").then((data) =>{
        cy.get(NameFieldForTemplate).should("be.visible").type(data.invalidName);  
    });
};
export const saveBtnForTemplateShldBeDisabled = () => {
  cy.get(SaveBtnForTemplate).should("be.disabled");
}; 
//------------------------------------------Scenario #5-----------------------------------------
export const createTemplate = () => {
  clickKundvagn();
  clickMallVagn();
  addNewTemplate();
  enetrNameForTemplate();
  saveTemplate();
  mediumWait();
};
export const selectInkopslistor = () => {
    clickOnVisibleText(INKOPSLISTOR[cntry]);
};
export const templateShouldPresentInTheList = () => {
    elementHavingTextShouldPrsnt(Inkopslistor_Container,Name_Of_Created_Template);
};
export const go_To_Inkopslistor = () => {
  clickProfile();
  clickMinProfil();
  selectInkopslistor();
  mediumWait();
}
export const templateShouldGetSaved = () => {
  go_To_Inkopslistor();
  templateShouldPresentInTheList();
};
/*-----------------------------------Scenario #6--------------------------------*/
export const enterDuplicateNameForTemplate = () => {
  clickKundvagn();
  clickMallVagn();
  addNewTemplate();
  cy.get(NameFieldForTemplate).should('be.visible').type(Name_Of_Created_Template);
}
export const createTemplateWithDuplicateName = () => {
  enterDuplicateNameForTemplate();
  saveTemplate();
}
export const errorMessageForDuplicateNameShldGetDisplayed = () => { 
    textShouldPrsnt(ERROR_MESSAGE_FOR_DUPLICATE_NAME[cntry]);
}
/*-------------------------------------Scenario #7--------------------------------*/
export const addTwoItemsToCart = () => {
  selectSnabborder();
  cy.fixture('articleNumbers').then((data) => {
      Added_Article_Number_1 = data.validArticlenum2;
      console.log("Added article number 1 = " ,Added_Article_Number_1);
      enterValidArticleNum(Added_Article_Number_1);
  });
  cy.fixture('Quantities').then((data) => {
      enterPositiveQuantity(data.positiveQuantity1);
  });
  clickOnVisibleText(LAGG_I_KUNDVAGN[cntry]);
  shortWait();
  cy.fixture('articleNumbers').then((data) => {
    Added_Article_Number_2 = data.validArticlenum3;
    console.log("Added article number 2 = " ,Added_Article_Number_2);
    enterValidArticleNum(Added_Article_Number_2);
});
cy.fixture('Quantities').then((data) => {
    enterPositiveQuantity(data.positiveQuantity1);
});

  clickOnVisibleText(LAGG_I_KUNDVAGN[cntry]);
}
export const viewTemplateToBeUpdated = () => { 
    go_To_Inkopslistor();
    clickOn(ViewTemplateButton);
    mediumWait();
    // Store the template into arrayBeforeUpdation, before updating the template
    cy.get(ArticlesListInTemplate).each((element) => {
      cy.wrap(element).invoke('text').then((text) => {
        arrayBeforeUpdation.push(text);
      });
    }); 
}
export const click_Uppdatera_inköpslista = () => {
  clickOnVisibleText(UPPDATERA_INKOPSLISTA[cntry]);
}
export const startsUpdatingTheTemplate = () => {
  clickKundvagn();
  clickMallVagn();
  click_Uppdatera_inköpslista();
}
export const selectTemplateFromDropdown = () => {
  cy.get(DropdownForTemplate).select(Name_Of_Created_Template);
  saveTemplate(); 
}
export const viewUpdatedTemplate = () => {
    clickOn(ViewTemplateButton);
    //Store the updated template into arrayAfterUpdation
    cy.get(ArticlesListInTemplate).each((element) => {
      cy.wrap(element).invoke('text').then((text) => {
        arrayAfterUpdation.push(text);
      });
    });
}
export const qtyShldGetUpdated= () => {
 // mediumWait();
  let index=0;
  let flag=0;
  let ele;
  for(let i = 0; i <arrayBeforeUpdation.length; i=i+2) {
    let element = arrayBeforeUpdation[i];
    let numericValue = element.match(/\d+/)[0];
    if(numericValue==Added_Article_Number_1)
    {
        index=i;
        Original_Quantity= arrayBeforeUpdation[i+1];
        flag=1;
        break;
    }
  }
    if(flag==1)
    {
      for(let i = 0; i <arrayAfterUpdation.length; i=i+2) {
        let element = arrayAfterUpdation[i];
        let numericValue = element.match(/\d+/)[0];
        if(numericValue==Added_Article_Number_1)
        {
          index=i;
          Updated_Quantity = Original_Quantity.match(/\d+/)[0];
          Updated_Quantity = Updated_Quantity*1+1;
          ele= arrayAfterUpdation[i+1];
          let qtyToBeUpdated =ele.match(/\d+/)[0];
          qtyToBeUpdated = parseInt(qtyToBeUpdated);
          expect(qtyToBeUpdated).to.equal(Updated_Quantity);
          break;
        }
      }      
    }
}
export const templateShldGetUpdate = () => { 
  for(let i = 0; i <arrayBeforeUpdation.length; i=i+2) {
    cy.get(TemplateDetailsContainer).should('contain',arrayBeforeUpdation[i]);
  }
  cy.get(TemplateDetailsContainer).should('contain', Added_Article_Number_2);
}
export const successMsgForUpdatingTemplateShldGetDisplayed = () => {
  textShouldPrsnt(Msg_For_Updating_TEMPLATE[cntry]);
  mediumWait();
}
/*---------------------------------------Scenario #8--------------------------------*/
export const deleteTemplate = () => {
  cy.get(DeleteTemplateButton).should('be.visible').click();
  cy.get(ConfirmButtonForDeletion).click();
  mediumWait();
}
export const messageForTemplateDeletionShldBeDisplayed = () => { 
  textShouldPrsnt(MSG_FOR_DELETING_TEMPLATE[cntry]);
  mediumWait();
}
export const templateShouldBeDeleted = () => {
  mediumWait();
  cy.get("body").then(($body)=> {
    if($body.find(OrderTable).length>0)
    {
      elementHavingTextShouldNotPrsnt(Topmost_Template_In_The_Table, Name_Of_Created_Template);
    }
    else
    {
        textShouldPrsnt(MSG_INFORMING_EMPTY_TEMPLATE[cntry]);
    }
  });
}
export const getTotalQtyOfItemsInTopmostTemplate = () => {
  TotalQtyOfItemsInTemplate=0;
  cy.get("body").then(($body)=> {
      if($body.find(OrderTable).length>0)
      {
          clickEyeIconOfTopmostTemplate();
          mediumWait();
          cy.get(QtyListInTemplate).each((element) => {
            cy.wrap(element).invoke('text').then((text) => {
              let qty =text.match(/\d+/)[0];
              qty = parseInt(qty);
              TotalQtyOfItemsInTemplate+=qty;
            });
          });  
      }
      else
      {
          textShouldPrsnt(MSG_INFORMING_EMPTY_TEMPLATE[cntry]);
      }
  })
}
export const verifyItemsIncartForUsedTemplate = () => {
  verifyItemOnCart(TotalQtyOfItemsInTemplate);
}
export const itemShldGetAddedToCartAfterUsingTemplate = () => { 
  TotalQtyInCart=TotalQtyOfItemsInTemplate+2;
  verifyItemOnCart(TotalQtyInCart);
}
export const clickEyeIconOfTopmostTemplate = () => {
  clickOn(ViewTemplateButton);
}
export const shldNavigateToItemPage = () => { 
  cy.url().should('include',"template/items");
}
export const getNameOfTopmostTemplate = () => {
  cy.get(NameOfTopmostTemplateInTable).invoke('text').then((name) => {
     NameOfTopmostTemplate = name;
  });
}
export const templateNameShldPrsnt = () =>{
  
    elementHavingTextShouldPrsnt(".tss-4akejq-mainDiv",NameOfTopmostTemplate);

}
export const linkToGoBackToTemplateShldPrsnt = () => {
  elementHavingTextShouldPrsnt(".tss-4akejq-mainDiv",INKOPSLISTOR[cntry]);
}
export const clcikOnInköpslistorLink = () => {
  clickOnTextWithinAnElement(INKOPSLISTOR[cntry],".tss-4akejq-mainDiv");
}
export const shldNAvigateToTemplatePage = () => {
  cy.url().should('include',"templates");
  elementHavingTextShouldPrsnt("h3>span",INKOPSLISTOR[cntry]);
}