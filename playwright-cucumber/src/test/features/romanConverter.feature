@roman
Feature: Roman Converter

  Scenario: User navigates to roman conveter
    Given the user is on the roman converter
    Then Roman converter page title must be 'Roman Converter'
    And Header title must be 'Welcome to Roman Converter'
    And the foother must have copyright 'Roman Number Converter © 2024'


Scenario: User convert an 1 to I
    Given the user is on the roman converter
    When the user input '1'
    Then the result should be 'The result of converting 1 to roman is I.'