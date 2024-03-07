Feature: Template cart feature

Background: User logins to stage 
When User navigates to stage url and provides valid credetials for login
Then User should be able to login successfully

#Scenario #1
Scenario: Verify that user should not be able to create template for empty cart
When Cart is empty
Then User should not be able to create template
And Logout

#Scenario #2
Scenario: Verify that user is able to create a template if it has some items in cart
When User adds some items to cart
Then The items should get added in the cart
And He should be able to make the cart as template
And Logout

#Scenario #3
Scenario: Verify that user is able to create a new template and save it in the shopping list
Given Items are added in the cart
When User starts creating template cart
Then A dialog box should get open
When User creates a new template
And Provides a name to the template
And Saves the template
Then A message for successful creation of template should get displayed
And The template should get saved in the shopping list
And Logout

#Scenario #4
Scenario: Verify that user should not be able to save the template if he provides a name with less than three characters
Given Items are added in the cart
When User starts creating template cart
And Tries to provide a name with less than three characters
Then He should not be able to save the the template
And Logout

#Scenario #5
Scenario: Verify that user should not be able to save template with duplicate name
Given Items are added in the cart
When User creates a template and provides a duplicate name
Then An error message should get displayed
And Logout

#Scenario #6
Scenario: Verify that user is able to update template
When User adds a spare part to the cart
And Wants to add that spare part to a template
Then Selects a template from the dropdown list
And Proper message for updation should be displayed
When User goes to Shopping list to see the template after updation
Then That template should get updated with added items
And Quantity of duplicate items should be updated
And Logout

#Scenario #7
Scenario: Verify that user is able to delete the template from Inköpslistor
When User navigates to Inköpslistor
And Deletes a template from the list
Then Proper message should be displayed
And That template should be deleted
And Logout

#Scenario #8
Scenario: Verify Inköpslistor section in min profil
Given User is at Min Profil page
When User selects Inköpslistor option from side menu
Then He should able to see list of Inköpslistor if exists
And Proper headers for Inköpslistor table should exist
And Logout

#Scenario #9
Scenario: Verify existance of pagination for Inköpslistor
Given User is at Min Profil page
When User selects Inköpslistor option from side menu
Then He should be able to see pages for shopping lists
And Each page should have maximum ten shopping lists
And Logout

#Scenario #10
Scenario: Verify tooltip for Inköpslistor
Given User is at Min Profil page
When User navigates to Inköpslistor
And Clicks on the tooltip icon for Inköpslistor
Then He should be able to see the information for Inköpslistor
And Logout

#Scenario #11
Scenario: Verify that user cannot use template if cart already in use
Given Some items are added to the cart
When User navigates to Inköpslistor
And Clicks Use button to use the template
Then An error message should be displayed
And He should not be able to add the template items to the cart
And Logout

#Scenario #12
Scenario: Verify that user is able to add more items after adding template to the cart
Given Cart is empty
When User navigates to Inköpslistor
And Clicks Use button to use the template
Then A success message for using shopping list should get displayed
And Items of shopping list should get added to the cart successfully
When User adds more items to the cart
Then Items should append to already added shopping cart
And Logout

#Scenario #13
Scenario: Verify working of eye icon for Inköpslistor
Given User is at Min Profil page
When User navigates to Inköpslistor
And Clicks the eye icon of topmost template
Then User should navigate to item page to see items in the template
And Should able to see the name of selected template at the top
And Logout

#Scenario #14
Scenario: Verify working of Inköpslistor link to go back to template page
Given User is at Min Profil page
When User navigates to Inköpslistor
And Clicks the eye icon of topmost template
Then A link to go back should be available for him
When User clicks on the link
Then He should navigate back to template page to see shopping list
And Logout