@todo-app
Feature: Ingrear nombre en la aplicación
  Como gerente de proyectos
  Quiero ingrear mi nombre
  Para que la aplicación me de la bienvenida y me sienta mejor

  Scenario: El usuario ingresa a la aplciación y navega la opción de To Do
    Given el usuario está en la página de inicio
    When El usuario ingresa "Alice" en el campo de nombre
    And presiona el botón enviar
    Then el usuario debe estar en la página de To Do
    And El título debe ser  "Alice's Todo List"
