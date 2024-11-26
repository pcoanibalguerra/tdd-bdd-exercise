@todo-app
Feature: Ingrear nombre en la aplicación romanos
  Como historiador 
  Quiero ingrear mi nombre
  Para que la aplicación me de la bienvenida y me sienta mejor

  Scenario: El usuario ingresa a la aplciación romaanos e ingresa su nombre
    Given el usuario está en la página de romanos
    When El usuario ingresa "Alice" en el campo de nombre
    And presiona el botón enviar
    Then el usuario debe estar en la página de convertidor de romanos
    And El usuario debe ver el menaje "Bienvenida Alice"

Scenario: El usuario ingresa a la aplciación romaanos e intenta ingresar sin escribir el nombre
    Given el usuario está en la página de romanos
    When presiona el botón enviar
    Then el usuario debe ver un mensaje de error
    
