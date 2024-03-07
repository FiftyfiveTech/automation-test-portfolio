Feature: Features for Min Profil page

Background: User Login
Given We log in stage url with valid credentials
Then User should be able to login successfully
And Navigates to Min Profil page

#Scenario 1
Scenario: Verify that all different sections are available at user profile page
When I am on Min Profil page and I am Admin
Then User should see Översikt, Profil, Organisation, Bestallningar, Fakturor and Inköpslistor section
And Logout

#Scenario 2
Scenario: Verify Profil section at user profile page
When I am on Min Profil page and I am Admin
And I select Profil 
Then I should see profil section and Foretarget section
And Profil section should have name, epost and roll
And Foretarget section should have Foretag, Org nr, Adress, epost and Tele
And Logout

#Scenario 3
Scenario: Verify that for Admin user Min organisation section should be available
Given User is at Min Profil page
When User role is an Admin
Then Organisation section should be available for him
And Logout

#Scenario 4
Scenario: Verify that in organisation section user should be able to see the name, email and role
Given User is at Min Profil page
When User selects Organisation section
And Selects any user to see details by clicking on eye icon
Then He should see name, email and role 
And Logout

#Scenario 5
Scenario: Verify availability of fields to fill required details for inviting new user 
Given User is at Organisation section of Min Profil page
When User selects invite new user option
Then He should see firstname, lastname, email and role
And Logout

#Scenario 6
Scenario: Verify that a new user gets invited successfully
Given User is at Organisation section of Min Profil page
When User selects invite new user option
And Fills all required details and adds user to the organisation
Then That new user should get added successfully
And Logout

#Scenario 7
Scenario: Verify that user get notified if he alredy exists in the organisation
Given User is at Organisation section of Min Profil page
When User selects invite new user option
And Enters user details which already exists in the organisation
Then User should get notified that user alredy exists in the organisation
And Logout

#Scenario 8
Scenario: Verify that user should able to update the role in the organisation
Given User is at Organisation section of Min Profil page
When User searches for a user name
And Updates the role of the user
Then A success message for updated role should get displayed
And The role should get updated successfully
And Logout

#Scenario 9
Scenario: Verify the tooltip for Organisation section
Given User is at Organisation section of Min Profil page
When User clicks on the icon for tooltip
Then User should able to see the information about Organisation section
And Logout

#Scenario 10
Scenario: Verify searching user name at Min profil page using valid user name
Given User is at Organisation section
When User search with a valid user name
Then User should see the searched user name in the table
And Logout

#Scenario 11
Scenario: Verify that pagination exists on organisation section
Given User is at Organisation section of Min Profil page
Then He should able to see pages for users in the organisation
And Logout

#Scenario 12
Scenario: Verify that user can delete a user in the organisation
Given User is at Organisation section of Min Profil page
When User searches for a user name
And Deletes that user
Then A success message for deletion should get displayed
And Deleted user should get removed successfully
And Logout

#Scenario 13
Scenario: Verify that each page contains maximum ten users at the organisation section
Given User is at Min Profil page
When User selects Organization section from side menu
Then Each page of users in organisation should have maximum ten users
And Logout

#Scenario 14
Scenario: Verify that all the neccessary details are available for Beställningars
Given User is at Min Profil page
When User selects Beställningar option from side menu
Then A search bar along with a table with proper headers is available
And A tooltip for Beställningars should be available
And Logout

#Scenario 15
Scenario: Verify that orders can be filtered by its status
Given User is at Min Profil page
When User selects Beställningar option from side menu
And Enters a status in the search bar to filter orders by its status
Then All the orders with searched status should get listed in the orders table
And Logout

#Scenario 16
Scenario: Verify that user is able to see order details
Given User is at Min Profil page
When User selects Beställningar option from side menu
And Clicks eye icon to see order details of the latest order
Then All the details of that order should get displayed
And Logout

#Scenario 17
Scenario: Verify that pagination exists for orders
Given User is at Min Profil page
When User selects Beställningar option from side menu
Then He should be able to see pages for orders
And Logout

#Scenario 18
Scenario: Verify that each page contains maximum ten orders
Given User is at Min Profil page
When User selects Beställningar option from side menu
Then Each page should have maximum ten orders
And Logout

#Scenario 19
Scenario: Verify that all the neccessary details are available for Fakturor
Given User is at Min Profil page
When User selects Fakturor option from side menu
Then A search bar along with a table with proper headers is available for Fakturor
And A tooltip for Fakturor should be available
And Logout

#Scenario 20
Scenario: Verify that Invoices can be filtered by its status
Given User is at Min Profil page
When User selects Fakturor option from side menu
And Enters a status in the search bar to filter Invoice by its status
Then All the Invoices with searched status should get listed in the Invoice table
And Logout

#Scenario 21
Scenario: Verify the working of Fukturor link in invoice details
Given User is at Min Profil page
When User selects Fakturor option from side menu
And Clicks eye icon to see Invoice details of the latest Invoice
Then A Fukturor link should be available to go back to Fakturor page
When User clicks the link
Then He should navigate back to Fakturor page
And Logout

#Scenario 22
Scenario: Verify all the invoice  details should present at Fukturor details page
Given User is at Min Profil page
When User selects Fakturor option from side menu
And Clicks eye icon to see Invoice details of the latest Invoice
Then He should navigate to Fakturor details page for the latest Invoice
And All the details of that Invoice should get displayed
And Logout

#Scenario 23
Scenario: Verify that pagination exists for Invoices
Given User is at Min Profil page
When User selects Fakturor option from side menu
Then He should be able to see pages of invoices
And Logout

#Scenario 24
Scenario: Verify that each page contains maximum ten records in Fakturor table
Given User is at Min Profil page
When User selects Fakturor option from side menu
Then Each page should have maximum ten invoices
And Logout

#Scenario 25
#Scenario: Verify that clicking products in installations pins addresses in the map
#Given User is at latest installations page
#And User clicks any product from the list in installtions
#Then Pin to the address of the installed product should be visible in the map
#And Logout

#Scenario 26
Scenario: Verify the working of search at installations page
Given User is at latest installations page
When User searches for a product by its name
Then He he should get the results for searched product
And Logout

#Scenario 27
#Scenario: Verify that all required fields are available in Product Registration form
#When User is at Dashbord page
#And Selects Product registration option from side menu bar
#Then The form should get opened
#And He should be able to see Installationsfirma,Organisationsnummer,E-postadress,Serienummer and Installationsdatum fields
#And Insurance information for users should also be visible

#Scenario 28
#Scenario: Verify that installtion company name field is filled by default and verify the valodation for installation date
#When User is at Product registration page
#Then User can see the installtion company name field is filled by default
#When User selects a future date in date field
#Then He should be notified with a warning to use correct date
#And Logout



