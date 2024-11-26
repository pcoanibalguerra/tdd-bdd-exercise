@todo-app
Feature: El usuario ingresa a la aplicación
  Cómo gerente de proyecto, cuando ingrese a la aplicación 
  Quiero ver el mensaje de bienvenida
  Para saber que estoy en la página correcta

  Scenario: Mensaje de bienvenida en la página de inicio
    Given el usuario está en la página de inicio
    Then El usuario debe ver "Bienvenido a la aplicación ToDo"
