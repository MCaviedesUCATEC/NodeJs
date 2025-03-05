require('colors');
const { inquirerMenu, 
  pausa,
  leerInput }
  = require('./helpers/inquirer')
const Tareas = require('./models/tareas')
console.clear();

const main = async() =>{    
    //variables
    let opt = '';
    const tareas = new Tareas();

    do {
      // Imprimir el menú
      opt = await inquirerMenu();

      switch (opt) {
          case '1':
              // crear opcion
              const desc = await leerInput('Descripción:');
              tareas.crearTarea( desc );
          break;

          case '2':
              console.log(tareas._listado);
          break;
          
          case '3': // listar completadas
              
          break;

          case '4': // listar pendientes
             
          case '5': // completado | pendiente
             
          break;
                     
          case '6': // Borrar
              
          break;
      
      }     
      await pausa();
  } while( opt !== '0' );
   
}

main();

//instalar uuid 
//npm install uuid