const {crearArchivo } = require('./helpers/multiplicar');
//llamar a la libreria yargs
const argv = require('yargs').argv;

console.clear();

console.log(process.argv);
console.log(argv);

/*

crearArchivo(base)
    .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch(err => console.log(err));
*/

//---------------------------------------
//instalar yargs
//npm i yargs
//llamar al modulo yargs
//ejecutar el comando de ejecucion del programa
//node .\app.js
//ejecutar con un argumento mas
//node .\app.js --base=5
//node .\app.js --base 5
//node .\app.js --base 5 --lista
//node app --help
