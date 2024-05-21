@Web @Regression
Feature: Login functionality on practice test automation website

    Scenario: Verify login functionality is working fine in practice testautomation page

        Given the user lauch the practice test automation website
        When the user enter "student" as username and "Password123" as passwod and click on Submit button
        Then verify home page is displayed
    
    
    Scenario: Verify invalid user name error message is displayed on practice testautomation with invalid credentials

        Given the user lauch the practice test automation website
        When the user enter "Sathish" as username and "password" as passwod and click on Submit button
        Then verify invalid username error message is displayed