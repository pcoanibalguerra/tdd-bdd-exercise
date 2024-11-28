Feature: Convert number to Roman numeral

  Scenario: Convert 1 to Roman numeral
    Given the user enters the number
    When the user submits the form the value "1"
    Then the system should display "I"

  Scenario: Convert 2 to Roman numeral
    Given the user enters the number
    When the user submits the form the value "2"
    Then the system should display "II"

  Scenario: Convert 3 to Roman numeral
    Given the user enters the number
    When the user submits the form the value "3"
    Then the system should display "III"

  Scenario: Convert 4 to Roman numeral
    Given the user enters the number
    When the user submits the form the value "4"
    Then the system should display "IV"

  Scenario: Convert 5 to Roman numeral
    Given the user enters the number
    When the user submits the form the value "5"
    Then the system should display "V"

  Scenario: Convert 6 to Roman numeral
    Given the user enters the number
    When the user submits the form the value "6"
    Then the system should display "VI"

  Scenario: Convert 7 to Roman numeral
    Given the user enters the number
    When the user submits the form the value "7"
    Then the system should display "VII"

  Scenario: Convert 8 to Roman numeral
    Given the user enters the number
    When the user submits the form the value "8"
    Then the system should display "VIII"

  Scenario: Convert 9 to Roman numeral
    Given the user enters the number
    When the user submits the form the value "9"
    Then the system should display "IX"

  Scenario: Convert 10 to Roman numeral
    Given the user enters the number
    When the user submits the form the value "10"
    Then the system should display "X"

  Scenario: Convert 50 to Roman numeral
    Given the user enters the number
    When the user submits the form the value "50"
    Then the system should display "L"
