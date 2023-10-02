const readline = require('readline-sync');

const taskList = [];

function addTask() {
  const taskIndicator = readline.question('Indicador de tarea: ');
  const taskDescription = readline.question('Descripcion de la tarea: ');
  const taskStatus = 'incompleta';

  const task = {
    indicator: taskIndicator,
    description: taskDescription,
    status: taskStatus,
  };

  taskList.push(task);
  console.log('Tarea agregada con exitosamente.');
}

function deleteTask() {
  const taskIndicatorToDelete = readline.question('Indicador de tarea a eliminar: ');

  const index = taskList.findIndex(task => task.indicator === taskIndicatorToDelete);

  if (index !== -1) {
    taskList.splice(index, 1);
    console.log('Tarea eliminada con éxito.');
  } else {
    console.log('No se encontró la tarea con ese indicador.');
  }
}

function completeTask() {
  const taskIndicatorToComplete = readline.question('Indicador de tarea a completar: ');

  const task = taskList.find(task => task.indicator === taskIndicatorToComplete);

  if (task) {
    task.status = 'completa';
    console.log('Tarea marcada como completada.');
  } else {
    console.log('No se encontró la tarea con ese indicador.');
  }
}

function main() {
  while (true) {
    console.log('\n===== Lista de Tareas =====');
    taskList.forEach(task => {
      console.log(`${task.indicator} - ${task.description} - ${task.status}`);
    });

    console.log('\nSeleccione una opción:');
    console.log('1. Agregar tarea');
    console.log('2. Eliminar tarea');
    console.log('3. Completar tarea');
    console.log('4. Salir');

    const option = readline.questionInt('Opción: ');

    switch (option) {
      case 1:
        addTask();
        break;
      case 2:
        deleteTask();
        break;
      case 3:
        completeTask();
        break;
      case 4:
        return;
      default:
        console.log('Opción no válida. Inténtelo de nuevo.');
    }
  }
}

main();
