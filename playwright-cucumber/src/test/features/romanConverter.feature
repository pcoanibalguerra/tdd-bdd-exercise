@roman
Feature: Roman Converter

  Scenario: User navigates to roman conveter
    Given the user is on the roman converter
    Then Roman converter page title must be 'Roman Converter'
    And Header title must be 'Welcome to Roman Converter'
    And the foother must have copyright 'Roman Number Converter © 2024'