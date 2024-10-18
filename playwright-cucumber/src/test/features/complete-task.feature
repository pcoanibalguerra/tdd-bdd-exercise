Feature: Mark a task as completed
  As a user
  I want to mark tasks as completed
  So that I know which tasks are done

  Scenario: Mark a task as completed
    Given a task "Buy groceries" is in the task list
    When the user marks the task as completed
    Then the task state should be "COMPLETED"
