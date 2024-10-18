@todo-app
Feature: Add a new task
  As a user
  I want to add tasks to my Todo list
  So that I can keep track of my tasks

  Scenario: Add a task with a title
    Given the user is on the Todo app page
    When the user enters "Buy groceries" as the task title
    And clicks the add task button
    Then the task should appear in the task list
