///<reference types= 'Cypress'/>
const dotenv=require('dotenv');
dotenv.config();
let cntry=Cypress.env('COUNTRY');
console.log("Country value: " + cntry);
import { clickOn, clickOnElementHavingText, clickOnVisibleText,  elementHavingTextShouldNotExist,  elementHavingTextShouldNotPrsnt,  elementHavingTextShouldPrsnt,  elementShouldBeDisabled,  elementShouldBeEnabled,  elementShouldNotExist, elementShouldNotHaveText, longWait, mediumWait, shortWait, textShouldNotExist,textShouldNotPrsnt,textShouldPrsnt } from "../CommonUtils/CommonMethods";
import { ADD_TO_CART, BETALNING, DELIVERY_ADDRESS, ELPATRON, FAST_ORDER, FORETAGS_ADRESS, FORTSATT_SHOPPA, JA, LABEL_TO_ADD_ITEMS_FROM_PRIVATE_TO_JOINTCART, LAGG_I_KUNDVAGN, LAGG_ORDER, LEBEL_ON_JOINT_CART_BUTTON, MEDIUM_WAIT, MSG_INDICATING_EMPTY_CART, MSG_IN_JOINT_CART_BANNER, MSG_TO_INDICATE_PRIVATE_CART_IN_USE, ORDERMARKING, ORDERMARKING_FOR_JOINTCART, ORDERMARKING_FOR_PRIVATE_ADDRESS, ORDER_CONFIRMATION_MESSAGE, PARTIAL_DELIVERY_MESSAGE, POSTNORD, POST_NUMBER_ERROR, PRIVATPERSON, PRIVAT_ADRESS, SCHENKER, SHOPIFY_URL, SLUTFOR_ORDER, SNABBORDER, SPARA, SUCCESS_MSG_FOR_CREATE_JOINT_CART, SUCCESS_MSG_FOR_DELETING_AN_ITEM_FROM_JOINT_CART, SUCCESS_MSG_FOR_DELETING_JOINT_CART, TILL_RESERVDELAR, TILL_VARUKORG, TOM_VARUKORG, TO_ORDER_LIST, URL_FOR_ORDER_CONFIRMATION, USE_COMMON_SHOPPING_CART, USE_PRIVATE_CART } from "../CommonUtils/CommonVariables";
import { clickAddtoCartBtnAtFinalPage } from "./FinalSparePartPage";
import { select_066083_Article } from "./ModelNumberPage";
import { clickNibe } from "./ProductGroupPage";
import { addItemsToCartForIntCmpny, cartQuantity, clickCart, enterInvalidArticleInSnabborder, enterPositiveQuantity, enterValidArticleNum, selectFastOrder, selectSnabborder, verifyItemOnCart } from "./SnabborderPage";
import { clickGaTillArtikelsida, selectElpatronSparePart } from "./SparePartPage";
export const kundVagnIcon = ".container-fluid>div:nth-child(2)>header>div:nth-child(1)>div>div:nth-child(5)>div>button";
export const itemOnCart = "div[class='jss20']>div:nth-of-type(1)>div";
const NameField = {sv:"input[placeholder='Namn']",int:"input[placeholder='Name']"};
const AddressField = {sv:"input[placeholder='Adress']",int:"input[placeholder='Address']"};
const AcceptTermsChkBox="div[class='tss-1ph4det-buttonDiv']>div>div>div>div";
const PostNumField = {sv:"input[placeholder='Postnummer']",int: "input[placeholder='ZIP code']"};
const StadField={sv:"input[placeholder='Stad']",int:"input[placeholder='City']"};
const orgNameField ={sv:"input[placeholder='Organisations Namn']",int:"input[placeholder='Organisation Name']"};
export const itemsListInKundvagn = "#demo-popup-popover>div>div>div>div:nth-of-type(1)>div";
const delItemBtn = "div[class='tss-938rp0-mainDivStyle']>div:nth-child(2)>div:nth-child(2)>div>svg";
const mottagareField = {sv:"input[placeholder='Mottagare']",int:"input[placeholder='Recipient']"};
export const sparePartForArticle_418122 ={sv:"VIPPBRYTARE ON/OFF DUBB.P",int: "TUMBLE SWITCH ON/OFF"};
const partialDeliveryInfo = "div[class='tss-11d4iuk-iconDiv']>svg";
const anyItemOnCart = "div[class='MuiPaper-root MuiPopover-paper MuiPaper-elevation8 MuiPaper-rounded']>div>div>div:nth-of-type(1)>div>p";
const delleveransContainer = "div[class='tss-1ekucs0-modal']";
const DropDownForBefintligAdress = "div[class='tss-1mm4gl9-dropdown']";
const OptionToBeSelectedFromDropdown = "div[class='tss-19sx4y7-dropdownMenu']>div:nth-child(2)>p";
export const BEFINTLING_ADRESS ={sv:"Befintlig adress",int:"Existing Addressess"};
const OrderMarkingFieldOnConfirmationPage=".tss-dyn6in-orderMarking>input[data-testid='orderMarkingField']";
const OrderMarkingOnConfirmationPageForJC=".tss-1gczuu9-orderMarking>input[data-testid='orderMarkingField']";
const LAGG_TILL ={sv:"Lägg till",int:"Add"};
const InputFieldForRowMarkening = "div[class='tss-g8ygwt-markingDiv']>p>input";
const Lagg_till_Link_For_Row_Marking="a[class='tss-1jfxe4w-addMarkingButton']";
const Lägg_till_Link_For_OrderMarkening = "a[class='tss-40ig43-editOrderRowMarkingButton']";
const InputFieldForOrderMarkening = "div[class='tss-1gczuu9-orderMarking']>input";
const ButtonToCreateJointCart= ".tss-9j1cfb-buttonDivCenter>div:nth-child(1)>button";
const JointCartBanner ="div[class='tss-5v3bph-jointCartBannerWrapper']>div>p>span";
const DeleteBtnToRemoveAnItem = "div[class='tss-938rp0-mainDivStyle']>div:nth-child(2)>div:nth-child(2)>div>svg";
const DeleteJointCartBtn= "div[class='tss-auwt1a-jointCartbtnDiv']>div:nth-child(2)>button";
const ConfirmationBtnToDeleteJointCart="div[class='tss-1doy12e-buttonStyle']>div:nth-child(1)>button";
const BtnToUseJointCart= ".tss-1qmchnl-checkoutCartImgDiv>div>button";
const BtnToUsePrivateCart=".tss-auwt1a-jointCartbtnDiv>div:nth-child(1)>button";
const ContainerForListOfItemsOnCheckout=".tss-qafaxm-cartWrapper";
const RowMarkingInputToVerify="input.tss-4bvay-orderMarking";
const BtnToAddFromPrivateToJointCart=".tss-auwt1a-jointCartbtnDiv>div:nth-child(2)>button";
let productInPrivateCart;
let ShippingAddress=[];
export const clickKundvagn = () => {
    clickOn(kundVagnIcon);
}
export const tillVarukorgBtnShouldPrsnt = () => {
    textShouldPrsnt(TILL_VARUKORG[cntry]);
}
export const tomVarukorgShouldPrsnt = () => {
    textShouldPrsnt(TOM_VARUKORG[cntry]);
}
export const clickTillVarukorgBtn = () => {
    clickOnVisibleText(TILL_VARUKORG[cntry]);
}
export const clickTomVarukorg = () => {
    mediumWait();
    clickOnVisibleText(TOM_VARUKORG[cntry]);
    shortWait();
}
export const tomVarukorgShouldNotPrsnt = () => {
    textShouldNotExist(TOM_VARUKORG[cntry]);
}
export const emptyTheCartIfNonEmpty = () => {
    cy.get("body").then((body) => {
        if(body.find(itemOnCart).length > 0) {
            clickKundvagn();
            clickTomVarukorg();
        }
       });
       cartShouldBeEmpty();
}
export const cartShouldBeEmpty = () => {
    elementShouldNotExist(itemOnCart);
}
export const clickBetalningDrpDwn = () => {
    cy.scrollTo(0,1000);
    clickOnVisibleText(BETALNING);
}
export const selectPrivatperson = () => {
    clickOnVisibleText(PRIVATPERSON);
}
export const enterName = (name) => {
    cy.get(NameField[cntry]).type(name);
}
export const enterAdress = (adress) => {
    cy.get(AddressField[cntry]).type(adress);
}
export const allPrivateAddressFieldsShldBEEmpty = () => {
    cy.get(NameField[cntry]).should('be.empty');
    cy.get(AddressField[cntry]).should('be.empty');
    cy.get(PostNumField[cntry]).should('be.empty');
    cy.get(StadField[cntry]).should('be.empty');
}
export const allCompanyAddressFieldsShldBEEmpty = () => {
    cy.get(orgNameField[cntry]).should('be.empty');
    cy.get(mottagareField[cntry]).should('be.empty');
    cy.get(AddressField[cntry]).should('be.empty');
    cy.get(PostNumField[cntry]).should('be.empty');
    cy.get(StadField[cntry]).should('be.empty');
}
export const acceptTermsAndConditions= () => {
    cy.get(AcceptTermsChkBox).scrollIntoView().click();
}
export const acceptTermsAndPlaceOrder = () => {
    cy.get(AcceptTermsChkBox).scrollIntoView().click();
    clickOnVisibleText(LAGG_ORDER[cntry]);
    mediumWait();
}
export const enterPostnummer = (postNummer) => {
    cy.get(PostNumField[cntry]).type(postNummer);
}
export const enterStad = (stad) => {
    cy.get(StadField[cntry]).type(stad);
}
export const clickSparaBtn = () => {
    clickOnVisibleText(SPARA);
    shortWait();
}
export const clickPostNordDelivery = () => {
    clickOnVisibleText(POSTNORD);
}
export const clickSchenkerDelivery = () => {
    clickOnVisibleText(SCHENKER);
}
export const enterOrgName = (orgName) => {
    cy.get(orgNameField[cntry]).should("be.visible").type(orgName);
}
export const enterMottagare = (mottagare) => {
    cy.get(mottagareField[cntry]).should("be.visible").type(mottagare);
}
export const clickPartialDeliveryInfoIcon= () => {
    clickOn(partialDeliveryInfo);
    shortWait();
}
export const partialDeliveryMsgShouldPrsnt = () => {
    textShouldPrsnt(PARTIAL_DELIVERY_MESSAGE[cntry]);
}
export const clickDeleteItemBtn = () => {
    clickOn(delItemBtn);
}
export const ItemIsDeleted = () => {
   elementShouldNotHaveText(itemsListInKundvagn,sparePartForArticle_418122[cntry]);
}
export const postNumErrorShldDisplay = () => {
    textShouldPrsnt(POST_NUMBER_ERROR[cntry]);
}
export const addSomeItemToCart = () => {
    clickOnVisibleText(SNABBORDER[cntry]);
    cy.fixture('articleNumbers').then((data) => {
        enterValidArticleNum(data.validArticlenum4);
    });
    cy.fixture('Quantities').then((data) => {
        enterPositiveQuantity(data.positiveQuantity1);
    });
    clickOnVisibleText(LAGG_I_KUNDVAGN[cntry]);
    mediumWait();
    cy.fixture('articleNumbers').then((data) => {
        enterValidArticleNum(data.validArticlenum2);
    });
    cy.fixture('Quantities').then((data) => {
        enterPositiveQuantity(data.positiveQuantity1);
    });
    clickOnVisibleText(LAGG_I_KUNDVAGN[cntry]);
    shortWait();
}
export const verifyItemInCart = () => {
    cy.fixture('Quantities').then((data) => {
        verifyItemOnCart(data.positiveQuantity);
    });
}
export const navigateToCheckoutPage = () => {
    clickKundvagn();
    clickTillVarukorgBtn();
    mediumWait();
}
export const fillAddressDetailsByFöretagsMethod = () => {
    mediumWait();
    cy.contains(DELIVERY_ADDRESS[cntry]).scrollIntoView();
    clickOnVisibleText(FORETAGS_ADRESS[cntry]);
    shortWait();
    addFortagAddressDetails();
    longWait();
    addMarkingToOrder();
};
export const selectAdressFromDropDown = () => {
    clickOn(DropDownForBefintligAdress);
    cy.get(OptionToBeSelectedFromDropdown).invoke('text').then((text)=> {
        cy.log("text address= "+text);
        ShippingAddress=text.split(', ');
        clickOn(OptionToBeSelectedFromDropdown);
        cy.log("value in address" + ShippingAddress);
    });
    shortWait();
}
export const fillAddressUsingBefintligAdress = () => {
    clickKundvagn();
    clickTillVarukorgBtn();
    mediumWait();
    scrollTo(0,1000);
    clickOnVisibleText(BEFINTLING_ADRESS[cntry]);
    shortWait();
    selectAdressFromDropDown();
    addMarkingToOrder();
    clickSchenkerDelivery();
    acceptTermsAndPlaceOrder();
};
export const fillAddressUsingPrivatAdress = () => {
    clickKundvagn();
    clickTillVarukorgBtn();
    mediumWait();
    scrollTo(0,1000);
    clickOnVisibleText(PRIVAT_ADRESS[cntry]);
    fillAddressDetails();
    shortWait();
    giveRowAndOrderMarkening();
    acceptTermsAndPlaceOrder();
}
export const fillAddressDetailsForJointCart = () => {
    mediumWait();
    scrollTo(0,1000);
    clickOnVisibleText(PRIVAT_ADRESS[cntry]);
    fillAddressDetails();
    shortWait();
    addOrderMarkingToJointCart();
}
export const verifyOrderConfirmationForJointCart = () => {
    verifyNavigateToOrderConfirmationPage();
    cy.get(OrderMarkingOnConfirmationPageForJC).scrollIntoView().should('have.value',ORDERMARKING_FOR_JOINTCART+Cypress.env('STAGE_ENV'));
    ShippingAddress.forEach((address) => {
        textShouldPrsnt(address);
    });
}
export const verifyNavigateToOrderConfirmationPage = async () => {
    console.log('Verified order confirmation page\n-----------------------');
    cy.url().should('include',URL_FOR_ORDER_CONFIRMATION,{timeout: 10000});
    textShouldPrsnt(TILL_RESERVDELAR[cntry]);
    textShouldPrsnt(ORDER_CONFIRMATION_MESSAGE[cntry]);
}
export const verifyOrderConfirmationForBefintligAddress = () => {
    verifyNavigateToOrderConfirmationPage();
    cy.get(OrderMarkingFieldOnConfirmationPage).should('have.value',ORDERMARKING+cntry);
    for(let i=2; i<ShippingAddress.length; i++) {
        textShouldPrsnt(ShippingAddress[i]);
    }
}
export const verifyOrderConfirmationForForetagAddress = () => {
    verifyNavigateToOrderConfirmationPage();
    //clickOn(".css-19d19d2>div>button");
    cy.get(OrderMarkingFieldOnConfirmationPage).should('have.value',ORDERMARKING+cntry);
    ShippingAddress.forEach((address) => {
        textShouldPrsnt(address);
    });
}
export const verifyOrderConfirmationForPrivateAddress=() => {
    verifyNavigateToOrderConfirmationPage();
    cy.get(OrderMarkingFieldOnConfirmationPage).should('have.value',ORDERMARKING_FOR_PRIVATE_ADDRESS+cntry);
    ShippingAddress.forEach((address) => {
        textShouldPrsnt(address);
    });
}
export const fillDetailsWithSchenkerDelMethod = () => {
    clickKundvagn();
    clickTillVarukorgBtn();
    mediumWait();
    scrollTo(0,1000);
    clickOnVisibleText(BEFINTLING_ADRESS);
    shortWait();
    addFortagAddressDetails();
    addMarkingToOrder();
    acceptTermsAndPlaceOrder();
}
export const navigateToFinalPageAndAddItemToCart = () => {
    select_066083_Article();
    selectElpatronSparePart();
    clickGaTillArtikelsida();
    clickAddtoCartBtnAtFinalPage();
}
export const fillKundvagnDetailsWithLessThanFiveDigitsPostcode = () => {
    mediumWait();
    scrollTo(0,1000);
    clickOnVisibleText(PRIVAT_ADRESS[cntry]);
    cy.fixture('Address').then((data) => {
        enterName(data.receiverName);
        enterAdress(data.address);
        enterPostnummer(data.lesserPostNum);
    });
}
export const fillKundvagnDetailsWithMoreThanFiveDigitsPostcode = () => {
    mediumWait();
    scrollTo(0,1000);
    clickOnVisibleText(PRIVAT_ADRESS[cntry]);
    cy.fixture('Address').then((data) => {
        enterName(data.receiverName);
        enterAdress(data.address);
        enterPostnummer(data.greaterPostNum);
    });
}
export const selectPartialDelivery = () => {
    scrollTo(0,1500);
    clickPartialDeliveryInfoIcon();
}
export const giveRowAndOrderMarkening = () => {
    cy.scrollTo(0,-500);
    clickOn(Lagg_till_Link_For_Row_Marking)
    cy.get(InputFieldForRowMarkening).type('Test');
    clickOnVisibleText(SPARA[cntry]);
    clickOn(Lägg_till_Link_For_OrderMarkening);
    cy.get(InputFieldForOrderMarkening).type("Automation/Test Privat adress"+cntry);
    clickOnVisibleText(SPARA[cntry]);
}
export const addOrderMarkingToJointCart= () => {
    clickOn(Lägg_till_Link_For_OrderMarkening);
    cy.get(InputFieldForOrderMarkening).type("Testing joint cart/Do not deliver"+Cypress.env('STAGE_ENV'));
    clickOnVisibleText(SPARA[cntry]);
}
export const addMarkingToOrder= () => {
    clickOn(Lägg_till_Link_For_OrderMarkening);
    cy.get(InputFieldForOrderMarkening).type('Automation/Do not deliver'+cntry);
    clickOnVisibleText(SPARA[cntry]);
}
export const shldNotNavigateToShopifyPage = () => {
    cy.url().should('not.include',URL_FOR_ORDER_CONFIRMATION);
}
export const fillAddressDetails = () => {
    cy.fixture('Address').then((data) => {
        enterName(data.receiverName);
        enterAdress(data.address);
        enterPostnummer(data.postNum);
        enterStad(data.stad);
        ShippingAddress=[data.address,data.postNum,data.stad];
        cy.log("value in address"+ShippingAddress);
    });
}
export const addFortagAddressDetails = () => {
    cy.fixture('Address').then((data) => {
        enterOrgName(data.orgName);
        enterMottagare(data.receiverName);
        enterAdress(data.address);
        enterPostnummer(data.postNum);
        enterStad(data.stad);
        ShippingAddress=[data.orgName,data.receiverName,data.address,data.postNum,data.stad]; 
        cy.log("Values in address: " + ShippingAddress); 
    });
}
//-------------------------------------------------Joint Cart--------------------------------------------------------
export const makeJointCartBtnShldBeDisabled = () => {
    clickKundvagn();
    elementShouldBeDisabled(ButtonToCreateJointCart);
}
export const makeJointCartBtnShldBeEnabled = () => {
    elementShouldBeEnabled(ButtonToCreateJointCart);
}
export const makeJointCartBtnShldNotExist= () => {
    elementShouldNotExist(ButtonToCreateJointCart);
}
export const clickMakeJointCartBtn = () => {
    clickKundvagn();
    clickOn(ButtonToCreateJointCart);
}
export const successMsgForCreationOfJointCartShldBeDisplayed = () => { 
    textShouldPrsnt(SUCCESS_MSG_FOR_CREATE_JOINT_CART[cntry]);
}
export const jointCartBannerShldAppear = () => {
    elementHavingTextShouldPrsnt(JointCartBanner,MSG_IN_JOINT_CART_BANNER[cntry]);
}
export const jointCartBannerShlNotdAppear = () => {
    elementShouldNotExist(JointCartBanner);
}
export const verifyItemInJointCart = () => { 
    cy.fixture('Quantities').then((data) => {
        cy.get(cartQuantity,{timeout:5000}).should("have.text",data.qtyInJointCart);
    });
}
export const removeAnItemFromJointCart= () => {
    clickKundvagn();
    clickOn(DeleteBtnToRemoveAnItem);
}
export const successMsgOnRemovingAnItemFromJointCart = () => {
    textShouldPrsnt(SUCCESS_MSG_FOR_DELETING_AN_ITEM_FROM_JOINT_CART[cntry]);
}
export const deleteJointCart= () => {
    clickOnElementHavingText(DeleteJointCartBtn,LEBEL_ON_JOINT_CART_BUTTON[cntry]);
    clickOnElementHavingText(ConfirmationBtnToDeleteJointCart,JA[cntry]);
}
export const jointCartShldGetDeleted= () => {
    textShouldPrsnt(MSG_INDICATING_EMPTY_CART[cntry]);
}
export const successMsgForDeletingJointCartShldPrsnt = () => { 
    textShouldPrsnt(SUCCESS_MSG_FOR_DELETING_JOINT_CART[cntry]);
}
export const jointCartShouldExist = () => {
    cy.get("body").then (($body) => {
        if(cy.get(JointCartBanner).should('have.length.greaterThan',0))
        {
            makeJointCartBtnShldNotExist();
        }
        else 
        {
            navigateToCheckoutPage();
            elementHavingTextShouldPrsnt(BtnToUseJointCart,USE_COMMON_SHOPPING_CART);
        }
    });
}
export const switchToPrivateCartBtnShldPrsnt = () => {
    elementHavingTextShouldPrsnt(BtnToUsePrivateCart,USE_PRIVATE_CART[cntry]);
}
export const deleteJointCartBtnShldPrsnt = () => { 

    elementHavingTextShouldPrsnt(DeleteJointCartBtn,LEBEL_ON_JOINT_CART_BUTTON[cntry]);
}
export const privateCartShouldBeActive = () => {
        makeJointCartBtnShldNotExist();
        navigateToCheckoutPage();
        mediumWait();
        elementHavingTextShouldPrsnt(BtnToUseJointCart,USE_COMMON_SHOPPING_CART[cntry]);
}
export const addAnItemToPrivateCart = () => {
    selectSnabborder();
    cy.fixture('articleNumbers').then((data) => {
      productInPrivateCart=data.validArticlenum3;
        enterValidArticleNum(productInPrivateCart);
    });
    cy.fixture('Quantities').then((data) => {
        enterPositiveQuantity(data.positiveQuantity1);
    });
    clickOnVisibleText(LAGG_I_KUNDVAGN[cntry]);
}
export const switchToJointCartFromPrivateCart = () => {
    //navigateToCheckoutPage();
    clickOnElementHavingText(BtnToUseJointCart,USE_COMMON_SHOPPING_CART[cntry]);
}
export const clickOnSwitchToPrivateCart = () => {
    clickOnElementHavingText(BtnToUsePrivateCart,USE_PRIVATE_CART[cntry]);
}
export const shldSwitchToPrivateCart = () => {
    textShouldPrsnt(MSG_TO_INDICATE_PRIVATE_CART_IN_USE[cntry]);
    jointCartBannerShlNotdAppear();
    elementHavingTextShouldPrsnt(BtnToUseJointCart,USE_COMMON_SHOPPING_CART[cntry]);
}
export const jointCartShldNotGetAffected = () => {
    textShouldNotExist(ELPATRON);
    cy.get(cartQuantity,{timeout:5000}).should("have.text",'2');
}
export const makePrivateCartActive = () => {
   mediumWait();
    cy.get("body").then (($body) => {
        if($body.find(JointCartBanner,{timeout:10000}).length>0)
        {
            cy.get(JointCartBanner).then(($banner) => {
                if($banner.is(':visible')) 
                {
                    navigateToCheckoutPage();
                    clickOnElementHavingText(BtnToUsePrivateCart,USE_PRIVATE_CART[cntry]);
                }
            });
        }
        else 
        {
            //navigateToCheckoutPage();
            
            navigateToCheckoutPage();
            if($body.find(BtnToUseJointCart).length > 0)
            {
                switchToJointCartFromPrivateCart();
            }
            else
            {
                //clickNibe();
                clickOn(".tss-1qmchnl-checkoutCartImgDiv>div>button");
                switchToJointCartFromPrivateCart();
            }
        }
    });   
}
export const addItemToJointCartFromPrivateBtnShldPrsnt= () => {
    elementHavingTextShouldPrsnt(BtnToAddFromPrivateToJointCart,LABEL_TO_ADD_ITEMS_FROM_PRIVATE_TO_JOINTCART[cntry]);
}
export const clickOnAddToJointCartFromPrivateCartBtn = () => {
    clickOnElementHavingText(BtnToAddFromPrivateToJointCart,LABEL_TO_ADD_ITEMS_FROM_PRIVATE_TO_JOINTCART[cntry]);
}
export const shldSwitchToJointCart= () => {
    jointCartBannerShldAppear();
    switchToPrivateCartBtnShldPrsnt();
}
export const itemShldGetAddedToJointCartFromPrivateCar = () => {
    textShouldPrsnt(ELPATRON);
    cy.get(cartQuantity,{timeout:5000}).should("have.text",'3');
}
export const privateCartShldGetEmpty= () => {
    clickOnSwitchToPrivateCart();
    elementHavingTextShouldPrsnt(BtnToUseJointCart,USE_COMMON_SHOPPING_CART[cntry]);
    cartShouldBeEmpty();
}
export const createJointCart = () => {
    addSomeItemToCart();
    clickNibe();
    clickMakeJointCartBtn();
    successMsgForCreationOfJointCartShldBeDisplayed();
    jointCartBannerShldAppear();
}
export const useJointCartIfExists = () => {
    mediumWait();
    cy.get("body").then (($body) => {
        if($body.find(JointCartBanner,{timeout:10000}).length>0)
        {
            cy.get(JointCartBanner).then(($banner) => {
                if($banner.is(':visible')) 
                {
                    makeJointCartBtnShldNotExist();
                    navigateToCheckoutPage();
                }
            });
        }
        else 
        {
            navigateToCheckoutPage();
            if($body.find(BtnToUseJointCart).length > 0)
            {
                switchToJointCartFromPrivateCart();
            }
            else
            {
                //clickNibe();
                createJointCart();
                navigateToCheckoutPage();
            }
        }
    });   
}
export const addMarkingInJointCart = () => {
    cy.scrollTo(0,-500);
    cy.get(ContainerForListOfItemsOnCheckout).contains(LAGG_TILL[cntry]).first().click();
    cy.get(InputFieldForRowMarkening).first().type('Test');
    clickOnVisibleText(SPARA[cntry]);
}
export const rowMarkingShldPersist = () => {
    cy.get(RowMarkingInputToVerify).should('have.value',"Test");
}
export const switchToJointCartToDeleteIt= () => {
    //
    clickOn(".tss-1qmchnl-checkoutCartImgDiv>div>button");
    clickOnElementHavingText(DeleteJointCartBtn,LEBEL_ON_JOINT_CART_BUTTON[cntry]);
    clickOnElementHavingText(ConfirmationBtnToDeleteJointCart,JA[cntry]);
    jointCartShldGetDeleted();
    successMsgForDeletingJointCartShldPrsnt();
}
export const clickOrderlistBtn= () => {
    clickOnVisibleText(TO_ORDER_LIST);
}
export const orderlistBtnShldPrsnt= () => {
    clickCart();
    textShouldPrsnt(TO_ORDER_LIST);
}
//---------------------------------------------------International Language--------------------------------------------------------
export const addSparePartsUsingFastOrder = () => {
    clickOnVisibleText(FAST_ORDER);
    cy.fixture('articleNumbers').then((data) => {
        enterValidArticleNum(data.validArticlenum4);
    });
    cy.fixture('Quantities').then((data) => {
        enterPositiveQuantity(data.positiveQuantity1);
    });
    clickOnVisibleText(ADD_TO_CART);
    mediumWait();
    cy.fixture('articleNumbers').then((data) => {
        enterValidArticleNum(data.validArticlenum2);
    });
    cy.fixture('Quantities').then((data) => {
        enterPositiveQuantity(data.positiveQuantity1);
    });
    clickOnVisibleText(ADD_TO_CART);
    shortWait();
}
