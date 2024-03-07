///<reference types= 'Cypress'/>
const dotenv=require('dotenv');
dotenv.config();
import { clickOn, clickOnElementHavingText, clickOnTextWithinAnElement, clickOnVisibleText, elementHavingTextShouldExist, elementHavingTextShouldPrsnt, elementShouldNotExist, elementShouldPresent, longWait, mediumWait, multipleTextShoulPrsnt, scrollAndClickOnElement, shortWait, textShouldPrsnt, textShouldPrsntWithinAnElement, verifyMultipleTextByScrolling } from "../CommonUtils/CommonMethods";
import { ADDRESS, ADD_NEW_USER, ADMIN, ALLA_FAKTUROR, ALLA_INSTALLATIONER, ALLA_ORDRAR, BESTALLNINGAR, BJUD_IN_NY_ANVANDARE, CART_ALREADY_IN_USE, CHANGE_COMPANY, EMAIL, EPOST, ERROR_FOR_FUTURE_DATE, ERROR_FOR_NO_INVOICES, FAKTUROR, FORETAG, FORETAGET, FORFALLEN, FUKTUROR, GERMAN_COMPANY, INKOP, INKOPSLISTOR, INTERNATIONAL_COMPANY, JA, Ja, LAS_MER_OM_NLP, MIN_PROFIL, MIN_PROFILSIDA, MSG_FOR_ADDING_SHOPPING_LIST_TO_CART, MSG_FOR_DUPLICATE_USER, MSG_FOR_EMPTY_INVOICES, MSG_FOR_EMPTY_ORDERS, MSG_INFORMING_EMPTY_TEMPLATE, NAMN, NO_DATA_FOUND, ORDERS, ORGANISATION, ORGNO, PROFIL, REGISTRERA_PRODUKT, ROLL, ROLL_UPPDATERAD, SENASTE_INSTALLATIONER, SENSATE_INSTALLATIONER, SHOPPING_LIST_IS_EMPTY, SPARA, STAGE_USER, SUCCESS_MSG_FOR_DELETING_USER, TELEPHONE, UPPDATERING_ROLL, URL_FOR_INSTALLATIONS_PAGE, URL_FOR_INVOICE_PAGE, USER_IS_ADDED, VISA_ALL_BESTLLNINGAR } from "../CommonUtils/CommonVariables";
import { addSomeItemToCart } from "./KundvagnPage";
import { clickProfile, menuHeader } from "./ProductGroupPage"
import { itemsShldGetAddedToCart, verifyItemOnCart } from "./SnabborderPage";
import { createTemplate, verifyItemsIncartForUsedTemplate } from "./TemplateCart";
const firstUserDetails="table[class='MuiTable-root css-av3lu9']>tbody>tr:nth-child(1)>td:nth-child(4)>svg>path";
const firstName="div[role='dialog']>div:nth-child(2)>div:nth-child(1)";
const lastName="div[role='dialog']>div:nth-child(2)>div:nth-child(2)";
const email="div[role='dialog']>div:nth-child(2)>div:nth-child(3)";
const role="select[class='MuiNativeSelect-select MuiNativeSelect-outlined MuiInputBase-input MuiOutlinedInput-input css-h8h8y']";
const searchField="input[placeholder='Sök användare med deras namn eller e-postadress']";
export const TooltipForOrganisation="div[class='tss-36tp2q-iconDiv']>svg";
export const PageForTooltipInfoForOrganisation="div[role='dialog']";
const menuContainer="ul[class='MuiList-root MuiList-padding tss-16fabdb-list css-1ontqvh']";
const LabelForExistingRole= "table[class='MuiTable-root css-av3lu9']>tbody>tr>td:nth-child(3)>div>span";
//"div[class='MuiGrid-root MuiGrid-container tss-1kyjjis-gridContainer css-1d3bbye']>div:nth-child(1)>div>ul";
const ProfilDetailsContainer="div[class='tss-4akejq-mainDiv']>div>div:nth-child(2)";
const ForetagetDetailsContailner = "div[class='tss-4akejq-mainDiv']>div>div:nth-child(3)"
const ProfileSectionOnPage= "div[class='tss-4akejq-mainDiv']>div>div:nth-child(1)>h3";
const SideMenuContainerForProfil= "ul[class='MuiList-root MuiList-padding tss-16fabdb-list css-1ontqvh']>div:nth-child(2)>li>div:nth-child(2)>span>span>span";
const InputToEnterFirstName="div[class='MuiDialogContent-root tss-ag7nue-dialogContentStyle css-1ty026z']>div:nth-child(1)>div>input";
const InputToEnterLastName= "div[class='MuiDialogContent-root tss-ag7nue-dialogContentStyle css-1ty026z']>div:nth-child(2)>div>input";
const InputToEnterEmailId= "div[class='MuiDialogContent-root tss-ag7nue-dialogContentStyle css-1ty026z']>div:nth-child(3)>div>input";
const DropdownForUserRole ="select[class='MuiNativeSelect-select MuiNativeSelect-outlined MuiInputBase-input MuiOutlinedInput-input css-h8h8y']";
const TableForUserData = "table[class='MuiTable-root css-av3lu9']";
const EyeIconToUpdateRole = "table[class='MuiTable-root css-av3lu9']>tbody>tr>td:nth-child(4)>svg";
const IconForDeleetingUser= "table[class='MuiTable-root css-av3lu9']>tbody>tr>td:nth-child(5)>svg";
const ListOfPagesAtOrganisation="ul[class='MuiPagination-ul css-nhb8h9']";
const PagesForUserList= "ul[class='MuiPagination-ul css-nhb8h9']>li";
const NumOfRowsInUserTable="table[class='MuiTable-root css-av3lu9']>tbody>tr";
const FortagetSectionContainer="div[class='tss-4akejq-mainDiv']>div>div:nth-child(3)>div";
const SearchBar = "input[type='search']";
const SearchButtonForOrders = "div[class='tss-1tytpba-iconWrapper']>svg";
const TooltipIconForOrders ="div[class='tss-4akejq-mainDiv']>h3>div>svg";
const TooltipInfoForOrders = "div[role='dialog']";
export const OrderTable ="table[class='MuiTable-root css-av3lu9']>tbody";
const AlternateTableRow ="tr:nth-child(odd)";
const CellInTbleForStatus = "td:nth-child(5)";
const CellInTableForUserRoles = "div[class='tss-4akejq-mainDiv']>div>div:nth-child(2)>div>div>div:nth-child(6)>p";
const HeaderRowInOrderTable ="table[class='MuiTable-root css-av3lu9']>thead>tr";
const FieldForOrderMarkinhgOfLatestOrder= "table[class='MuiTable-root css-av3lu9']>tbody>tr:nth-child(1)>td:nth-child(4)";
const OrderDetailsContainer= "div[class='MuiCollapse-wrapper MuiCollapse-vertical css-hboir5']";
const InvoiceDetailsContainer="div[class='tss-4akejq-mainDiv']";
const EyeIconForLatestOrder="table[class='MuiTable-root css-av3lu9']>tbody>tr:nth-child(1)>td:nth-child(6)>div>svg:nth-child(1)";
const TableRows ="table[class='MuiTable-root css-av3lu9']>tbody>tr";
const TooltipIconForFakturor="div[class='tss-36tp2q-iconDiv']>svg";
const TooltipInfoForFakturors="div[role='dialog']";
const HeaderRowInFakturorTable= "table[class='MuiTable-root css-av3lu9']>thead>tr";
const SearchBarForFakturor="input[type='search']";
const EyeIconForLatestInvoice="table[class='MuiTable-root css-av3lu9']>tbody>tr:nth-child(1)>td:nth-child(6)>p>svg";
const FakturorLinkToGoBack="div[class='tss-4akejq-mainDiv']>div:nth-child(1)>button";
const OrderNumCellOfLatestInvoice="table[class='MuiTable-root css-av3lu9']>tbody>tr:nth-child(1)>td:nth-child(1)>p";
const CellForStatusOfLatestInvoice= "table[class='MuiTable-root css-av3lu9']>tbody>tr:nth-child(1)>td:nth-child(5)>p>span>span";
const CellForStatusOfLatestOrder= "table[class='MuiTable-root css-av3lu9']>tbody>tr:nth-child(1)>td:nth-child(5)>p>span";
const ToolTipIconForInköpslistor="svg[data-testid='ErrorOutlineOutlinedIcon']";
const TooltipInfoForInköpslistor= "div[aria-labelledby*=':r']";
const ChangeCompanyBtn=".tss-bgwk8z-headerWrapper>div>button";
const DropDownToChangeCmpny= "div[aria-labelledby*=':r']";
const ConfirmationBtn="div[role='dialog']>div>div>div:nth-child(3)>div:nth-child(1)>button";
const LanguageSelector=".tss-ez5ctd-mainDivStyle";
const CompanyNameInUserProfileIcon="div[data-testid='menu-profile-button']>span:nth-child(2)";
const DashboardDetailsPage=".tss-4akejq-mainDiv";
const DashboardContainer=".tss-1efywcm-dashboardCard";
const EyeAndTrackOrderIcon="div[style='white-space: nowrap;']";
const EyeIconForInvoice="svg[data-testid='VisibilityIcon']";
const CellForInvoiceStatusInDashboard="td:nth-child(3)>p>span";
const CellForTopViewButton='td:nth-child(3)>p>button';
const ConfirmationBtnForDeletingUser="div[role='dialog']>div>div>div>div:nth-child(1)>button";
const LinkForNLPDocument="a[class='tss-atulbr-link']";
const UrlForNLPDocument="/cp-pdfs/Lojalitetsprogrammet.pdf";
const ContainerForInstallations="div[class='MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-12 MuiGrid-grid-md-6 css-iol86l']";
const ListOfInstallations="div[class='MuiGrid-root tss-xrgodj-leftSide css-rfnosa']";
const MAP="div.gm-style";
const ImgForPinInMap="div[role='button']>img";
const TopRow='tr:nth-child(1)';
const ListOfInstalledProductNames=".tss-a2utl-row>div>div>span:nth-child(1)";
const SearchBarForInstalltions="input[id^=':r']";
const ContainerForSearchOnInstallation=".tss-4akejq-mainDiv";
const InputDateField="input[type='date']";
const CmpnyNameFieldInProductRegistration="input[placeholder='Installationsfirma']";
const ContainerForInsuranceRelatedData="form>div:nth-child(2)";
const ListOfInputFieldsForInsuranceRelatedData="div.tss-1hyegi2-inputHeadWrapper>div>input";
const ContainerForInstallationsRelatedData="form>div:nth-child(1)";
const HeadingForRegistreraProdukt=".tss-4akejq-mainDiv>h3"; 
const CmpnyNameFieldUnderUserProfileIcon="div[data-testid='menu-profile-button']>span:nth-child(2)";
const AddressOfInstallation="div>div.tss-13mnqhz-address";
export const HeadingsForDiffSectionsInDashboard=".tss-4akejq-mainDiv";
export const SelectedMenu="li[class='MuiListItem-root MuiListItem-gutters Mui-selected tss-px0rwe-listItem css-bvv5zt']";
export const DashboardInSideMenu="ul[class='MuiList-root MuiList-padding tss-16fabdb-list css-1ontqvh']>div:nth-child(1)";
const Name={sv:"NAMN",int:"NAME"};
const CreatedOn={sv:"SKAPAD VID",int:"CREATED AT"};
const CloseIcon="svg[data-testid='CloseIcon']";
let cntry=Cypress.env('COUNTRY');
console.log("Country value: " + cntry);
let UserDetails;
let OrderMarking;
let flag;
export let lastPage;
let Total_Num_Of_Orders;
let Dates=[];
let OrderNumOfFirstInvoice;
let Status;
let pos=0;
let prodName;
let userCompanyName;
export const selectMinProfil=()=>
{
    mediumWait();
    clickProfile();
    clickMinProfil();
    mediumWait();
}
export const clickMinProfil = () => {
    clickOnTextWithinAnElement(MIN_PROFIL[cntry],"div>ul[role='menu']>li:nth-child(1)");
}
export const userDashboardShldLoad=()=>
{
    cy.url().should('include','user-profile/dashboard');
}
export const selectProfileSection= () => {
    clickOnElementHavingText(SideMenuContainerForProfil,PROFIL[cntry]);
}
export const profilShldBeVisible=()=>
{
    elementHavingTextShouldPrsnt(ProfileSectionOnPage,PROFIL[cntry]);
}
export const foreTargetShldBeVisible=()=>
{
    textShouldPrsnt(FORETAGET[cntry]);
}
export const verifyProfilSection=()=>
{
    cy.fixture('MinProfile').then((data)=>{
        multipleTextShoulPrsnt(ProfilDetailsContainer,data.ProfileSection[cntry]);
    });
}
export const organisationShldBeVisible=()=>
{
    textShouldPrsnt(ORGANISATION[cntry]);
}
export const clickFirstUserDetails=()=>
{
  clickOn(firstUserDetails);
}
export const userNameShldBeVisible=()=>
{
    textShouldPrsnt(NAMN[cntry]);
}
export const userEmailShldBeVisible=()=>
{
    textShouldPrsnt(EPOST[cntry]);
}
export const userRoleShldBeVisible=()=>
{
    textShouldPrsnt(ROLL[cntry]);
}
export const clickInviteNewUser=()=>
{
    clickOnVisibleText(BJUD_IN_NY_ANVANDARE[cntry]);
}
export const firstNameShldBeVisible=()=>
{
    elementShouldPresent(firstName);
}
export const lastNameShldBeVisible=()=>
{
    elementShouldPresent(lastName);
}
export const emailShldBeVisible=()=>
{
    elementShouldPresent(email);
}
export const roleShldBeVisible=()=>
{
    elementShouldPresent(role);
}
export const enterValidUser=()=>
{
    cy.get(TableForUserData).eq(0).should("be.visible", {timeoout:20000})
    cy.fixture('CreateNewUser').then((data)=>{
        cy.get(SearchBar).type(data.userID);
    })
}
export const allSectionsShouldExist=()=>
{
    cy.fixture('MinProfile').then((data)=>{
        multipleTextShoulPrsnt(menuContainer,data.Sections[cntry]);
    });
}
export const selectProfil=()=>
{
    clickOnVisibleText(PROFIL);
}
export const verifyMinProfilSection=()=>
{
    elementHavingTextShouldExist(minProfilSectionContainer,NAMN);
    elementHavingTextShouldExist(minProfilSectionContainer,EPOST);
    elementHavingTextShouldExist(minProfilSectionContainer,ROLL);
}
export const verifyForetagetSection = () => {
    cy.fixture('MinProfile').then((data)=>{
        multipleTextShoulPrsnt(FortagetSectionContainer,data.FortargetSection[cntry]);
    });
}
export const fillDetailsToAddUser= () => {
    cy.fixture('CreateNewUser').then((data) => {
        cy.get(InputToEnterFirstName).type(data.firstName);
        cy.get(InputToEnterLastName).type(data.lastName);
        cy.get(InputToEnterEmailId).type(data.userID);
        UserDetails=[data.firstName,data.lastName,data.userID];
    });
    cy.get(DropdownForUserRole).select(INKOP[cntry]);
    clickOnVisibleText(ADD_NEW_USER[cntry]);
}
export const successMsgForCreateUser = () => {
    longWait();
    cy.contains(USER_IS_ADDED[cntry],{timeout:20000}).should('be.visible');
}
export const newUserShldGetAddded = () => {
    mediumWait();
    cy.fixture('CreateNewUser').then((data) => {
       elementHavingTextShouldExist(TableForUserData,data.userID); 
    });
    //multipleTextShoulPrsnt(TableForUserData,UserDetails);
}
export const searchedUserDetailsShldGetDisplayed = () => {
    cy.fixture('CreateNewUser').then((data)=>{
        elementHavingTextShouldPrsnt(TableForUserData,data.firstName);
        elementHavingTextShouldPrsnt(TableForUserData,data.lastName);
        elementHavingTextShouldPrsnt(TableForUserData,data.userID);
    })
}
export const updateUserRole= () => {
    scrollAndClickOnElement(EyeIconToUpdateRole);
    cy.get(DropdownForUserRole).select("Admin");
    clickOnVisibleText(UPPDATERING_ROLL[cntry]);
}
export const deleteSearchedUser= () => {
    scrollAndClickOnElement(IconForDeleetingUser);
    shortWait();
    clickOn(ConfirmationBtnForDeletingUser);
}
export const userShldGetRemoved= () => {
    getLastUserPage();
    cy.get(PagesForUserList).find("button").last().then((next) => {
        cy.fixture('CreateNewUser').then((data) => {
            for (let i=1;i<=lastPage;i++){
                cy.get(NumOfRowsInUserTable).should('not.contain.text',data.userID);
                clickOn(next);
            }
        });
    });
}
export const getLastUserPage= () => {
    cy.get("ul[class='MuiPagination-ul css-nhb8h9']>li>button").eq(-2).invoke('text').then((text) => {
        lastPage=parseInt(text,10);
        console.log(lastPage);
    });
}
export const verifyUserRoleIsAdmin= () => {
    selectProfileSection();
    cy.get(CellInTableForUserRoles).invoke('text').then((role)=>{
        expect(role).equals(ADMIN);
    });
}
export const roleShldGetUpdated= () => {
    elementHavingTextShouldPrsnt(LabelForExistingRole,ADMIN);
};

export const verifyIfPaginationExists= () => {
    cy.get("body").then((body) => {
        if(body.find(OrderTable).length>0){
            flag=1;
            elementShouldPresent(ListOfPagesAtOrganisation);
        }
        else
        {
            flag=0;
            elementShouldNotExist(ListOfPagesAtOrganisation);
        }
    });
}
export const paginationShldExist = () => {
    verifyIfPaginationExists();
}
export const verifyUserIsAtMinProfilPage= () => {
    cy.url().should('include',"/user-profile");
}
export const pagesShldHaveTenUsers= () => {
    longWait();
    verifyIfPaginationExists();
    if(flag==1)
    {
        getLastUserPage();
        cy.get(PagesForUserList).find("button").last().then((next) => {
            if(lastPage>1)
            {
                for (let i=1;i<=lastPage;i++)
                {
                    clickOn(next);
                    //cy.get(PagesForUserList).find("button").eq(i+1).should('have.attr','aria-current','true');
                    cy.get(NumOfRowsInUserTable).should('not.have.length.greaterThan',10);
                }
            }
            else 
            {
                cy.get(NumOfRowsInUserTable).should('not.have.length.greaterThan',10);
            }   
        });
    }
    else
    {
        assert.isOk("No data exists")
    }
}
export const selectBeställningar = () => {
    clickOnVisibleText(ORDERS[cntry]);
    cy.url().should('include',"user-profile/orders");
    mediumWait();
}
export const allDetailsShldPrsntForOrders= () => {
    cy.fixture('DataFieldsForOrders').then((data) => {
        multipleTextShoulPrsnt(HeaderRowInOrderTable,data.fields[cntry]);
    });
    elementShouldPresent(SearchBar);
}
export const tooltipForBeställningarsShldExist = () => {
    clickOn(TooltipIconForOrders);
    textShouldPrsntWithinAnElement(BESTALLNINGAR[cntry],TooltipInfoForOrders);
}
export const eneterStatusToSearchOrders = () => {
    cy.get('body').then(($body) => {
        if(cy.get(OrderTable).find("tr").should('have.length.greaterThan',0))
        {
        // Get the status of the latest order if table is not empty
            cy.get(CellForStatusOfLatestOrder).then(($cell)=>{
                cy.wrap($cell).invoke('text').then((status)=> {
                    Status=status;
                    cy.get(SearchBar).type(Status);
                    clickOn(SearchButtonForOrders);
                    longWait();
                })
            });
        } 
        else
        {
        // Link not found, show an error message
          cy.log('Table is empty');
        }
      });
}
export const ordersWithSearchedStatusShldVisible = () => 
{
    getLastUserPage();
    cy.get(PagesForUserList).find("button").last().then((next) => {
        if(lastPage>1)
        {
            for (let i=1;i<=lastPage;i++)
                {
                    cy.get(OrderTable).find(AlternateTableRow).each(($row)=> { 
                    cy.wrap($row).find(CellInTbleForStatus).invoke('text').should('eq',Status);
                });
                clickOn(next);
                }
        }
        else if(lastPage==1)
        {
            cy.get(OrderTable).find(AlternateTableRow).each(($row)=> { 
                cy.wrap($row).find(CellInTbleForStatus).invoke('text').should('eq',Status);
            });
        }
        else
        {
            assert.isOk('No data found','empty order table');
        }
    });
}
export const getTextOfOrderMarking = () => 
{
    cy.get(FieldForOrderMarkinhgOfLatestOrder).scrollIntoView().then(($mark) => {
        cy.wrap($mark).invoke('text').then(data => {
           OrderMarking=data;  
        });
    });
}
export const clickEyeIconToSeeOrderDetails = () => 
{
    getTextOfOrderMarking();
    scrollAndClickOnElement(EyeIconForLatestOrder);
    mediumWait();
}
export const detailsOfLatestOrderShldGetDisplayed = () =>
{
    detailsOfLatestOrder();
}
export const detailsOfLatestOrder = () => 
{
    if(OrderMarking==='') {
        console.log(OrderMarking);
        assert.isOk('No marking available','Empty');
    }
    else
    {
        console.log(OrderMarking);
        elementHavingTextShouldPrsnt(OrderDetailsContainer,OrderMarking);
    }
    cy.fixture('DataFieldsForOrders').then((data) => {
        verifyMultipleTextByScrolling(OrderDetailsContainer,data.orderInfo);
    });
}
export const clickVisaAllaBeställningarLink = () => 
{
    cy.get('body').then(($body) => {
        if ($body.text().includes(VISA_ALL_BESTLLNINGAR)) {
          // Link is found, click it
         clickOnVisibleText(VISA_ALL_BESTLLNINGAR); 
         
        } else {
          // Link not found, show an error message
          cy.log('No orders exists');
        }
      });
}
export const getTotalNumberOfOrders= () => 
{
    cy.get(TableRows).last().then(($row,index) => {
        // Get the last table row and calculate the length
        cy.wrap($row).invoke('index').then((num)=> {
            Total_Num_Of_Orders=num;
        });
    });
}
export const allOrdersShldBeAvailable = () =>
{
    
    getTotalNumberOfOrders();
    // Get the visible table rows and compare its length
    cy.get(OrderTable).within(() => 
    {
        cy.get('tr').its('length').should('equal',Total_Num_Of_Orders+1);
    })  
}
export const getTheDatesOfOredrsIntoAnArray = () =>
{
    cy.get(OrderTable).find(AlternateTableRow).each(($row) => 
    {
        // Get the date column to read the values from it
        cy.wrap($row).find('td').eq(1).each(($dateColumn) =>
        {
            cy.wrap($dateColumn).invoke('text').then((dateText)=>
            {
                Dates.push(new Date(dateText).toLocaleDateString());;
                console.log("print data: ",dateText);
            });
        });
    });
}
export const sortAndCompareTheDatesOfOrders= () =>
{ 
    // Sort the dates in array dates
    let sortedDesc=[];
    cy.wrap(sortedDesc).then(()=> {
        sortedDesc= Dates.sort(
            (objA, objB) => Number(objB.date) - Number(objA.date),
        );
        console.log("sorted array: ",sortedDesc);
        // Compare date arrayes before and after sorting
        expect(Dates).to.deep.equal(sortedDesc);
        console.log("Finished");
    }) ;
}
export const ordersShldBeSorted = () => {
    clickVisaAllaBeställningarLink();
    getTheDatesOfOredrsIntoAnArray();
    sortAndCompareTheDatesOfOrders();
}
export const selectFakturor = () => {
    clickOnVisibleText(FUKTUROR[cntry]);
    cy.url().should('include',"user-profile/invoices");
    mediumWait();
}
export const allDetailsShldPrsntForFakturor= () => {
    cy.fixture('DataFieldsForInvoices').then((data) => {
        multipleTextShoulPrsnt(HeaderRowInFakturorTable,data.fields[cntry]);
    });
    elementShouldPresent(SearchBarForFakturor);
}
export const tooltipForFakturorsShldExist = () => {
    clickOn(TooltipIconForFakturor);
    elementHavingTextShouldPrsnt(TooltipInfoForFakturors,FUKTUROR[cntry]);
}
export const eneterStatusToSearchInvoice = () => {
    
    cy.get('body').then((body) => {
        if(body.find(OrderTable).length>0)
        {
        // Get the status of the latest order if table is not empty
            cy.get(CellForStatusOfLatestInvoice).then(($cell)=>{
                cy.wrap($cell).invoke('text').then((status)=> {
                    Status=status;
                    cy.get(SearchBarForFakturor).type(Status);
                    clickOn(SearchButtonForOrders);
                    mediumWait();
                })
            });
        } 
        else
        {
        // Link not found, show an error message
        textShouldPrsnt(ERROR_FOR_NO_INVOICES);
          cy.log('Table is empty');
        }
      });
}
export const invoicesWithSearchedStatusShldVisible = () => 
{
    getLastUserPage();
    cy.get(PagesForUserList).find("button").last().then((next) => {
        if(lastPage>1)
        {
            for (let i=1;i<=lastPage;i++)
                {
                    cy.get(OrderTable).find(AlternateTableRow).each(($row)=> { 
                    cy.wrap($row).find(CellInTbleForStatus).invoke('text').should('eq',Status);
                });
                clickOn(next);
                }
        }
        else if(lastPage==1)
        {
            cy.get(OrderTable).find(AlternateTableRow).each(($row)=> { 
                cy.wrap($row).find(CellInTbleForStatus).invoke('text').should('eq',Status);
            });
        }
        else
        {
            textShouldPrsnt(NO_DATA_FOUND[cntry]);
        }
    });
}
export const clickEyeIconToSeeInvoiceDetails = () => 
{
    cy.get('body').then((body) => {
        if(body.find(OrderTable).length>0)
        {
            getTheOrderNumOfLatestInvoice();
            scrollAndClickOnElement(EyeIconForLatestInvoice);
            mediumWait();
        } 
        else
        {
        // Link not found, show an error message
            cy.log('Table is empty');
        }
      });
}
export const fukturorLinkShldPrsnt = () => {
    elementHavingTextShouldPrsnt(FakturorLinkToGoBack,FAKTUROR[cntry]);
}
export const clickFukturorLink = () => {
    clickOn(FakturorLinkToGoBack);
}
export const navigateBackToFukturorPage = () => {
    cy.url('include',"user-profile/invoices");
}
export const navigateToFukturorDetailsPage = () => {
    cy.url('include',OrderNumOfFirstInvoice);
}
export const getTheOrderNumOfLatestInvoice = () => 
{
    cy.get(OrderNumCellOfLatestInvoice,{timeout: 10000}).invoke('text').then((OrderNum)=>{
        OrderNumOfFirstInvoice = OrderNum;
    })
}
export const detailsOfLatestInvoiceShldGetDisplayed = () =>
{
    cy.fixture('DataFieldsForInvoices').then((data) => {
        verifyMultipleTextByScrolling(InvoiceDetailsContainer,data.invoiceInfo[cntry]);
    });
}
export const pagesShldHaveTenRecords= () => {
    longWait();
    getLastUserPage();
    cy.get(PagesForUserList).find("button").last().then((next) => {
        if(lastPage>1)
        {
            for (let i=1;i<=lastPage;i++)
            {
                cy.get(OrderTable).find(AlternateTableRow).should('not.have.length.greaterThan',10);
                clickOn(next);
            }
        }
        else if(lastPage==1)
        {
            cy.get(OrderTable).find(AlternateTableRow).should('not.have.length.greaterThan',10);
        }
        else{
            assert.isOk("No data found");
        }
    });
}
export const dataForInköpslistorShldPrsnt= () => {
    cy.get("body").then(($body)=> {
        if($body.find(OrderTable).length>0)
        {
            cy.get(OrderTable).find(AlternateTableRow).each(($tr)=> {
                cy.wrap($tr).find('td').each(($cell) => {
                    cy.wrap($cell).should('be.visible');
                })
            })
        }
        else
        {
            textShouldPrsnt(MSG_INFORMING_EMPTY_TEMPLATE[cntry]);
            addSomeItemToCart();
            createTemplate();
        }
        });
}
export const headerForInköpslistorShldPrsnt = () => {
    cy.get("body").then(($body)=> {
        if($body.find(OrderTable).length>0)
        {
            elementHavingTextShouldPrsnt(HeaderRowInOrderTable,Name[cntry]);
            elementHavingTextShouldPrsnt(HeaderRowInOrderTable,CreatedOn[cntry]);
        }
        else
        {
            textShouldPrsnt(MSG_INFORMING_EMPTY_TEMPLATE[cntry]);
        }
    });
}
export const clickOnToolTipIconForInköpslistor = () => {
    clickOn(ToolTipIconForInköpslistor);
}
export const tooltipInfoForInköpslistorShldPrsnt = () => {
    elementHavingTextShouldPrsnt(TooltipInfoForInköpslistor,INKOPSLISTOR[cntry]);
    shortWait();
    clickOn(CloseIcon);
}
export const selectInköpslistor= () => {
    clickOnVisibleText(INKOPSLISTOR[cntry]);
    mediumWait();
}
export const naviagateToInköpslistor = () => {
    selectMinProfil();
    selectInköpslistor();
}
export const useTopmostTemplate = () => {
    cy.get("body").then(($body)=> {
        if($body.find(OrderTable).length>0)
        {
            cy.get(OrderTable).find(TopRow ).then(($tr)=> {
                cy.wrap($tr).find(CellForTopViewButton).then((view) => {
                    clickOn(view);
                    shortWait();
                })
            })
        }
        else
        {
            textShouldPrsnt(SHOPPING_LIST_IS_EMPTY);
            cy.console("No data exists");
        }
        });
}
export const cartIsAlreadyUsedMsgShldDisplay = () => {
    textShouldPrsnt(CART_ALREADY_IN_USE[cntry]);
}
export const cartShlNotGetUpdated = () => {
    itemsShldGetAddedToCart();
}
export const changeCompanyBtnShldPrsnt = () => {
    elementHavingTextShouldPrsnt(ChangeCompanyBtn,CHANGE_COMPANY);
}
export const clickOnBytFöretag = () => {
    clickOnElementHavingText(ChangeCompanyBtn,CHANGE_COMPANY);
}
export const dropDownToChangeCmpnyShldPrsnt = () => {
    cy.get(DropDownToChangeCmpny).find("select").should('exist');
}
export const selectInternationalCmpnyFromDropDown = () => {
    cy.get(DropDownToChangeCmpny).find("select").select(INTERNATIONAL_COMPANY);
    clickOnVisibleText(SPARA);
}
export const confirmCompanySelection = () => {
    clickOn(ConfirmationBtn);
}
export const shldNavigateToInternationalCmpny = () => {
    cy.url().should('include',"/en");
    elementShouldNotExist(LanguageSelector);
    elementHavingTextShouldExist(CompanyNameInUserProfileIcon,GERMAN_COMPANY);
}
export const switchToInternationalCmpny = () => {
    selectMinProfil();
    selectProfileSection();
    clickOnBytFöretag();
    selectInternationalCmpnyFromDropDown();
    confirmCompanySelection();
    mediumWait();
    shldNavigateToInternationalCmpny();
}
export const allMenusForInternationalCmpnyShldPrsnt=() => {
    cy.fixture('SwitchCompany').then((data) =>{
        multipleTextShoulPrsnt(menuHeader,data.Menus);
    });
}
export const successMsgForAddingShoppingListToCartShldDisplay = () => {
    textShouldPrsnt(MSG_FOR_ADDING_SHOPPING_LIST_TO_CART[cntry]);
}
export const userNAmeShouldDisplayInDashboard = () => {
    textShouldPrsntWithinAnElement(STAGE_USER,DashboardDetailsPage);
}
export const verifyEnv=() => {
    if(Cypress.config().baseUrl==Cypress.config().stageUrl){
        pos=1;
    }
    else
    {
        pos=0;
    }
}
export const allSectionsOfDashboardShouldPrsnt=() => {
    cy.fixture('MinProfile').then((data) => {   
        multipleTextShoulPrsnt(HeadingsForDiffSectionsInDashboard,data.Dashboard[cntry]);
    });
};
export const detailsOfProfileInDashboardShldPrsnt = () => {
    cy.fixture('MinProfile').then((data)=> {
        cy.get(DashboardContainer).eq(pos+1).then((element) => {
            multipleTextShoulPrsnt(element,data.ProfileInDashboard[cntry]);
        });
    });
}
export const linkShldPrsntInProfile=() => {
    cy.get(DashboardContainer).eq(pos+1).then((element) => {
        textShouldPrsntWithinAnElement(MIN_PROFILSIDA[cntry],element);
    });
    
}
export const clickProfileLinkInDashboard = () =>{
    cy.get(DashboardContainer).eq(pos+1).then((element) => {
        clickOnTextWithinAnElement(MIN_PROFILSIDA[cntry],element);
    });
}
export const shldNavigateToProfilePage= () => {
    cy.url().should('include',"user-profile/profile");
}
export const detailsOfOrdersInDashboardShldPrsnt=() => { 
    cy.fixture('DataFieldsForOrders').then((data)=> {
        cy.get(DashboardContainer).eq(pos+2).then((element) => {
            multipleTextShoulPrsnt(element,data.OrderFieldsInDashboard[cntry]);
        });
    });
}
export const linkShldPrsntInOrders= () => { 
    cy.get(DashboardContainer).eq(pos+2).then((element) => {
        textShouldPrsntWithinAnElement(ALLA_ORDRAR[cntry],element);
    });
}
export const eyeAndTrackIconShldNotPrsntInDashboard=() => {
    cy.get(DashboardContainer).eq(pos+2).then((element) => {
        cy.wrap(element).find(EyeAndTrackOrderIcon).should("not.exist")
    });
}
export const maxThreeOrdersShldPrsnt = () => {
    cy.get('body').then((body) => {
        if(body.find(DashboardContainer).eq(pos+2).length>0)
        {
            cy.get(DashboardContainer).eq(pos+2).then((element) => {
                if(cy.wrap(element).find(OrderTable).should('exist'))
                {
                    cy.log("Table found");
                    cy.wrap(element).find(OrderTable).find("tr").each((row)=>{
                        cy.wrap(row).should('not.have.length.greaterThan',3);
                    });
                }
                else
                {
                    // Table data not found, show an error message
                    textShouldPrsnt(MSG_FOR_EMPTY_ORDERS[cntry]);
                    cy.log('Table is empty');
                }
            });
        } 
    });
}   
export const clickOrdersLinkInDashboard = () =>{
    cy.get(DashboardContainer).eq(pos+2).then((element) => {
        clickOnTextWithinAnElement(ALLA_ORDRAR[cntry],element);
    });
}
export const shldNavigateToOrdersPage= () => {
    cy.url().should('include',"user-profile/orders");
}
export const detailsOfInvoiceInDashboardShldPrsnt= () => {
    cy.get('body').then((body) => {
        if(body.find(DashboardContainer).eq(pos+3).length>0)
        {
            cy.get(DashboardContainer).eq(pos+3).then(($element) => {
                if($element.find(OrderTable).length>0)
                    {
                        cy.fixture('DataFieldsForInvoices').then((data)=> {
                            multipleTextShoulPrsnt($element,data.InvoiceFieldsInDashboard[cntry]);
                        });
                    }
                    else
                    {
                        // Table data not found, show an error message
                        textShouldPrsntWithinAnElement(MSG_FOR_EMPTY_INVOICES[cntry],$element);
                        cy.log('Table is empty');
                    }
                })
        }  
    })
}
export const linkShldPrsntForInvoices= () => { 
    cy.get(DashboardContainer).eq(pos+3).then((element) => {
        textShouldPrsntWithinAnElement(ALLA_FAKTUROR[cntry],element);
    });
}
export const eyeIconShldNotPrsntInDashboard= () => { 
    cy.get(DashboardContainer).eq(pos+3).then((element) => {
        cy.wrap(element).find(EyeIconForInvoice).should("not.exist");
    });
}
export const clickInvoicesLinkInDashboard = () =>{
    cy.get(DashboardContainer).eq(pos+3).then((element) => {
        clickOnTextWithinAnElement(ALLA_FAKTUROR[cntry],element);
    });
}
export const shldNavigateToInvoicesPage= () => {
    cy.url().should('include',URL_FOR_INVOICE_PAGE);
}
export const onlyFörfallenInvoicesShldPrsnt = () => {
    cy.get('body').then((body) => {
        if(body.find(DashboardContainer).eq(pos+3).length>0)
        {
            cy.get(DashboardContainer).eq(pos+3).then(($element) => {
                if($element.find(OrderTable).length>0)
                {
                    cy.log("table found");
                    cy.wrap($element).find(OrderTable).find(AlternateTableRow).each((row)=>{
                        cy.wrap(row).find(CellForInvoiceStatusInDashboard ).should('have.text',FORFALLEN[cntry]);
                    });
                }
                else
                    {
                        // Table data not found, show an error message
                        textShouldPrsntWithinAnElement(MSG_FOR_EMPTY_INVOICES[cntry],$element);
                        cy.log('Table is empty');
                    }
            });
        } 
    });
}   
export const detailsOfNLPInDashboardShldPrsnt=() => { 
     cy.fixture('NLPsection').then((data)=> {
         cy.get(DashboardContainer).eq(pos).then((element) => {
             multipleTextShoulPrsnt(element,data.FieldsForNLP[cntry]);
         });
     });
 }
 export const clickNLPpLinkInDashboard = () =>{
    cy.get(DashboardContainer).eq(pos).then((element) => {
        cy.wrap(element).within(()=>{
            cy.get(LinkForNLPDocument).invoke('removeAttr','target').click();
            mediumWait();
        });
    });
}
export const documentForNLPShldGetOpened = () =>
{
    cy.url().should('include',UrlForNLPDocument);
}
export const intallationsShldPrsntInDashboard = () => {
    cy.get(DashboardContainer).eq(pos+4).then((element) => {
        textShouldPrsntWithinAnElement( SENSATE_INSTALLATIONER[cntry],element);
        textShouldPrsntWithinAnElement(ALLA_INSTALLATIONER[cntry],element);
    });
}
export const  listAndMapShldPrsnt=() => {
    cy.get(DashboardContainer).eq(pos+4).within(() => {
       elementShouldPresent(ContainerForInstallations);
       cy.contains(SENSATE_INSTALLATIONER[cntry]).scrollIntoView();
       elementShouldPresent(MAP);
    });
}
export const maxFourInstallationsShldPrsnt= () => {
    cy.get(DashboardContainer).eq(pos+4).within(() => {
        cy.get(ListOfInstallations).should('not.have.length.greaterThan',4);
        
     });
}
export const clickInstallationsLinkInDashboard = () =>{
    cy.get(DashboardContainer).eq(pos+4).then((element) => {
        clickOnTextWithinAnElement(ALLA_INSTALLATIONER[cntry],element);
    });
}
export const shldNavigateToInstallationsPage= () => {
    cy.url().should('include',URL_FOR_INSTALLATIONS_PAGE);
}
export const clickProductFromInstallations= () => {
    //cy.contains(SENSATE_INSTALLATIONER).scrollIntoView();
        cy.get(ListOfInstallations).find(AddressOfInstallation).each((product) => {
            cy.wrap(product).invoke('text').then((txt) => {
                if(txt!='') 
                    {
                        cy.wrap(product).click();
                        pinShldVisibleInTheMap();
                    }
                    else{
                        cy.log("Address is not available!");
                    }
            })
            
        });
}
export const pinShldVisibleInTheMap= () => {
    cy.get(MAP).within(() => {
        elementShouldPresent(ImgForPinInMap);
    });
}
export const selectRegistreraProdukt=()=>
{
    clickOnVisibleText(REGISTRERA_PRODUKT[cntry]);
    shortWait();
}
export const registrationFormShldGetOpened=()=> {
    cy.url().should('include',"user-profile/product-registration");
    cy.get(HeadingForRegistreraProdukt).should('be.visible').contains(REGISTRERA_PRODUKT[cntry]);
}
export const installtionRelatedDataFieldsShldPrsnt=()=> {
    cy.get(ContainerForInstallationsRelatedData).within((form)=>{
        for(let $i=1; $i<5; $i++){
            cy.wrap(form).find(`div.tss-1hyegi2-inputHeadWrapper>div>input:nth-child(${$i})`).then(($field)=>{
                cy.fixture('ProductRegistration').then((data) => {
                    cy.log(data.installtions[$i]);
                    cy.wrap($field).should('have.attr','placeholder',data.installtions[$i]);
                });
            });
        }
    });
}
export const insuranceRelatedDataFieldsShldPrsnt=()=> {
    cy.get(ContainerForInsuranceRelatedData).within((form)=>{
        cy.get(ListOfInputFieldsForInsuranceRelatedData).should('have.length',9);
        cy.fixture('ProductRegistration').then((data) => {
            multipleTextShoulPrsnt(form,data.insurance[cntry]);
        });
    })
}
export const getCompanyName= async () => {
   // userCompanyName="swedish";
  cy.get(CmpnyNameFieldUnderUserProfileIcon).invoke('text').then((txt)=>{
        userCompanyName=txt.trim();
        cy.log("cmpny name= "+userCompanyName);
    });
}
export const companyNameFieldShldAlreadyBeFilled = ()=> {
    getCompanyName();
    cy.get(CmpnyNameFieldInProductRegistration).invoke('val').then((cmp) => {
       expect(userCompanyName).to.be.equal(cmp.trim());
    })
}
export const selectFutureDate = () => {
    var today = new Date();
    var nextDay= new Date();
    nextDay.setDate(today.getDate() + 1);
    var dd = String(nextDay.getDate()).padStart(2, "0");
    var mm = String(nextDay.getMonth() + 1).padStart(2, "0");
    var yyyy = nextDay.getFullYear();
    var postDate = yyyy + "-" + mm + "-" + dd;
    cy.get(InputDateField).type(postDate);
}
export const shldGetNotifiedToUseCorrectDate = ()=> { 
    textShouldPrsnt(ERROR_FOR_FUTURE_DATE[cntry]);
}
export const selectSenasteInstallationer = () => {
    clickOnVisibleText(SENASTE_INSTALLATIONER[cntry]);
}
export const getNameOfLatestInstalledProduct = ()=> { 
    selectSenasteInstallationer();
   
}
export const searchProductInInstallationByItsName = () => {
    cy.get(ListOfInstalledProductNames).first().invoke('text').then((txt)=>{
        prodName=txt;
        cy.get(ContainerForSearchOnInstallation).within(()=> {
            cy.get(SearchBarForInstalltions).type(prodName);
            cy.get(SearchBarForInstalltions).type(`{enter}`);
        });
    });
}
export const verifyProductNamesInSearchResult = () => {
    cy.get(ListOfInstalledProductNames).each((product)=>{
        cy.wrap(product).invoke('text').then((txt)=>{
            expect(txt).to.include(prodName);
        })
    });
}
export const shldGetResultsForSearchedProduct = () => { 
    getLastUserPage();
    cy.get(PagesForUserList).find("button").last().then((next) => {
        if(lastPage>1)
        {
            for (let i=1;i<=lastPage;i++)
            {
                verifyProductNamesInSearchResult();
                clickOn(next);
            }
        }
        else if(lastPage==1)
        {
            verifyProductNamesInSearchResult();
        }
        else
        {
            textShouldPrsnt(NO_DATA_FOUND);
        }
    });
}
export const selectOrganisation = () => {
    clickOnVisibleText(ORGANISATION[cntry]);
}
export const msgForDuplicateUserShldDisplay = () => {
    textShouldPrsnt(MSG_FOR_DUPLICATE_USER[cntry]);
}
export const msgForUpdatingroleShldDisplay=() => {
    textShouldPrsnt(ROLL_UPPDATERAD[cntry]);
}
export const toolTipInfoShldDisplay = () => { 
    elementHavingTextShouldPrsnt(PageForTooltipInfoForOrganisation,ORGANISATION[cntry]);
}
export const msgForDeletingUserShldDisplay=() => {
    textShouldPrsnt(SUCCESS_MSG_FOR_DELETING_USER[cntry]);
}