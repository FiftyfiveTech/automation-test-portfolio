Feature: Features for Kudvagn

Background: User login
Given  We log in stage url with valid credentials
Then User should be able to login successfully

#Scenario 1
Scenario: As a user whenever I add item to the cart then the item should get added to the cart
When We add any item to the cart
Then The item should get added to the cart
And We logout

#Scenario 2
Scenario: Verify that when some item is added to cart Kundvagn should have Tom varukorg and till varukorg button
When We add any item to the cart
And Click Kundvagn icon
Then Till Varukorg and Tom Varukorg button should be present
And We logout

#Scenario 3
Scenario: Verify when we click Tom Varukorg button the cart get emptied
When We add some item to cart
And Click Kundvagn icon
And Click Tom Varukorg 
Then Cart should get empty and Tom Varukorg button should not be visible
And We logout

#Scenario 4
Scenario: Verify that when we delete item then the item gets deleted from cart
When We add any item to the cart
And Click Kundvagn icon
And Delete that item from cart
Then The item should get deleted
And We logout
