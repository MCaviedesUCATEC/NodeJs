require('colors');

const { guardarDB, leerDB  } = require('./helpers/guardarArchivo');
const { inquirerMenu, 
  pausa,
  leerInput,
  listadoTareasBorrar,
  confirmar }
  = require('./helpers/inquirer')
const Tareas = require('./models/tareas')
console.clear();

const main = async() =>{    
    //variables
    let opt = '';
    const tareas = new Tareas();
   
    const tareasDB = leerDB();

    if ( tareasDB ) { // cargar tareas
       tareas.cargarTareasFromArray( tareasDB );      
    }
   
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
              tareas.listadoCompleto();
          break;
          
          case '3': // listar completadas
              tareas.listarPendientesCompletadas(true);
          break;

          case '4': // listar pendientes
              tareas.listarPendientesCompletadas(false);
          case '5': // completado | pendiente
             
          break;
                     
          case '6': // Borrar
                const id = await listadoTareasBorrar( tareas.listadoArr );
                if ( id !== '0' ) {
                    const ok = await confirmar('¿Está seguro?');
                    if ( ok ) {
                        tareas.borrarTarea( id );
                        console.log('Tarea borrada');
                    }
                }    
          break;
      
      }     
      guardarDB( tareas.listadoArr);
      await pausa();
  } while( opt !== '0' );
   
}

main();

//instalar uuid 
//npm install uuid