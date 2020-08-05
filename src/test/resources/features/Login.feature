@web


  Feature: Login page feature

    Background:
      Given I am on login page

      @login
      Scenario: Verify invalid from login page
        When I enter sebahattin@hotmail.com into email field on the login page
        And I enter test1234567 into password field on the login page
        And I click on lobing button on login page
        Then I verify invalid login message on sign in page
