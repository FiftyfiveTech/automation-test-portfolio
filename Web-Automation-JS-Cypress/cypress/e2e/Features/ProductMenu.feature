Feature: Featutes for Product menu

Background: User should be at the home page
Given User has navigated to stage url

#Scenario 1
Scenario: All the menus should be available for the user
When User is at the home page
Then All the menus should be available for the him

#Scenario 2
Scenario: All the submenus for Produkter menu should be available
When User hovers on Produkter menu
Then He should be at able to see all the sub menus for Produkter
And All the submenus should be linked to their respective pages

#Scenario 3
Scenario: Verify Elpanor submenu
When User selects Elpanor submenu
Then He should navigate to 15506 page
When User clicks image of Elpanor
Then He should navigate to its subgroup page 
And All associated products should be there

#Scenario 4
Scenario: Verify Product pages for Elpannor
Given User has navigated to subgroup page of Elpannor
When User selects VVM 225
Then He should navigate to its product page
And He should able to see model table and all required tabs

#Scenario 5
Scenario: Verify Document tab for VVM225
Given User has navigated to VVM225 product page
When User selects document tab
Then He should be able to see all the documents at first
When User clicks Produktblad tab for document filtration
Then He should get the results as all Produktblad documents

#Scenario 6
Scenario: Verify working of dropdown for deifferent models at product page
Given User has navigated to VVM225 product page
When User selects EVC 13 from the dropdown available on the product page
Then The product page for EVC 13 should get opened
And User should able to see all the details of EVC 13

#Scenario 7
Scenario: Verify Värmepumpar submenu
When User selects Värmepumpar submenu
Then Three different type of heat pumps should be available on product goup page
When User selects LuftVattenvärmepumpar
Then He should navigate to subgroup page of LuftVattenvärmepumpar
And All associated products should be there for LuftVattenvärmepumpar

#Scenario 8
Scenario: Verify Product page for Värmepumpar
Given User has navigated to subgroup page of LuftVattenvärmepumpar
When User selects VVM S325
Then He should navigate to the product page of VVM S325
And He should able to see model table and all required tabs along with Kombinationer

#Scenario 9
Scenario: Verify Tillbehör tab on Product page of VVM S325
Given User has navigated to VVM S325 product page
When User clicks Tillbehör tab of VVM S325
Then He should be able to see filter tabs as VVM S325 and Visa alla
And All the accessories related to VVM S325 should be visible