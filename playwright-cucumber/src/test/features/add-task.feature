@todo-app
Feature: Agregar una nueva tarea
  Como gerente de proyectos
  quiero agregar una tarea a mi lista de pendientes
  para poder hacerle seguimiento

  Scenario: Add a task with a title
    Given the user is on the Todo app page
    When the user enters "Buy groceries" as the task title
    And clicks the add task button
    Then the task should appear in the task list
