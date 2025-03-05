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

//yarm paquetes dentro de npm
//https://www.npmjs.com/package/colors


//ver los datos del proyecto
    //npm init
//crea el archivo de package.json con datos de configuracion del proyecto
//se coloca los comandos que sirven para utilizar el proyecto
// "base 3": "node app --base=3" dentro de script es un comando propio de ejecucion
// instalar el paquete de colors
//comando: npm install colors
//----------------------------------------------
//instalar solo paquetes en tiempo de desarrollo
//npm install nodemon --save-dev
//-----------------------------------------------
//desinstalar
//npm install unnodemon --save-dev
//------------------------------------------------
//instalar una version especifica
//npm i colors@1.0.0
//---------------------------------
//actualizar dependencias
//npm update