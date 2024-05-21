@Api @Regression
Feature: GET & POST Request in playwright

    Scenario: GET Request in playwright

        Given the list of users GET request available in reqres.in
        When the GET request is triggered to get the list of users
        Then verify response code is 200
        And verify the response have "Michael"
    
    Scenario: POST Request in playwright

        Given the create user POST request available in reqres.in
        When the POST request is triggered with name as "Sathish" and job as "SDET"
        Then verify response code is 201
        And verify the response have "Sathish"