@todo-app
Feature: Marcar la tarea como completada
  Como gestor de proyectos
  Quiero marcar las tareas como completadas
  Para poder saber que tareas están listas y cuales tengo pendientes

  Scenario: Marcar la tarea como completada
    Given la tarea "Buy groceries" está en la lista de pendientes
    When el usuario la marca como completada
    Then la tarea debe estar "COMPLETED"
