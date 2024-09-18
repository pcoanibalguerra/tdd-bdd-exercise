Feature: Angular example homepage

  Scenario: User navigates to homepage
    Given the user is on the  homepage
    Then page title must be 'Hello BDD'
