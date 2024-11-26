@fbonacci
Feature: El usuario ingresa a la aplicación
  Cómo matemático, cuando ingrese a la aplicación fbonacci
  Quiero ver el mensaje de bienvenida
  Para saber que estoy en la página correcta

  Scenario: Mensaje de bienvenida en la página de inicio
    Given el usuario está en la página de romanos
    Then El usuario debe ver "Bienvenido a la aplicación fibonacci"
