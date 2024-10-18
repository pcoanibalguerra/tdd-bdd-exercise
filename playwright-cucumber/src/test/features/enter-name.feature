@todo-app
Feature: Entering a name on the home page
  As a user
  I want to enter my name
  So that it is used in the Todo list title

  Scenario: User enters a name and navigates to the Todo list
    Given the user is on the home page
    When the user enters "Alice" in the name input
    And clicks the submit button
    Then the user should be on the Todo app page
    And the title should be "Alice's Todo List"
