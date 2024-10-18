@todo-app
Feature: Validar que la tarea tenga títilo
  Como gerente de proyectos
  quiero ver un mensaje de error cuando intente crear una tarea sin títilo
  Para no agregar tareas que después no me acuerde que son.

  Scenario: Display error for empty task title
    Given el usuario está en la página de pendientes
    When el usuario de click en el botón de agregar tarea sin ingresar un título
    Then debe mostrar un mensaje de error que diga "Title is required to add a task." 
    
