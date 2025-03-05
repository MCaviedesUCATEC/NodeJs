//importar la nueva funcion de crear archivo
//const { crearArchivo -> nombre de la funcion que se importa
const {crearArchivo } = require('./helpers/multiplicar');

console.clear();

console.log(process.argv);
//desetructura la entrada del arreglo process
const[, , arg3 = 'base =1'] = process.argv;
//console.log(arg3);
const[, base = 1] = arg3.split('=');
console.log(base);



crearArchivo(base)
    .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch(err => console.log(err));


//escribir en consola 
//node app.js --base=5