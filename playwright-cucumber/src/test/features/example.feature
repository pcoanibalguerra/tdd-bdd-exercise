@google
Feature: Search functionality on a website

  Scenario: User searches for a term in a search engine
    Given the user is on the search engine homepage
    When the user searches for "Playwright"
    Then search results for "Playwright" should be displayed
