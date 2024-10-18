Feature: User visits the home page
  As a user
  I want to see a welcome message
  So that I know I'm on the correct page

  Scenario: Display welcome message on the home page
    Given the user is on the home page
    Then the user should see "Welcome to the Todo App"
