require('colors');

const { guardarDB, leerDB } = require('./helpers/guardarArchivo');
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
   
    const tareasDB = leerDB();

    if ( tareasDB ) { // cargar tareas
       // tareas.cargarTareasFromArray( tareasDB );
       console.log(tareasDB);
    }
    await pausa();
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
              console.log(tareas.listadoArr);
          break;
          
          case '3': // listar completadas
              
          break;

          case '4': // listar pendientes
             
          case '5': // completado | pendiente
             
          break;
                     
          case '6': // Borrar
              
          break;
      
      }     
      guardarDB( tareas.listadoArr);
      await pausa();
  } while( opt !== '0' );
   
}

main();

//instalar uuid 
//npm install uuid