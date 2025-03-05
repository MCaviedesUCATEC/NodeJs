const { options } = require('yargs');
const {crearArchivo } = require('./helpers/multiplicar');
//llamar a la libreria yargs
const argv = require('yargs')
.options('b',{
    alias: 'base',
    type:'number',
    demandOption: true
})
.options('l',{
    alias: 'listar',
    type:'boolean',
    demandOption: true,
    default: false
})
.check( (argv, options) =>{
    if( isNaN(argv.b) ){
        throw 'La base tiene que ser un número'
    }
    return true
})
.argv;

//option('l')
//listar
//boolean
//default: false

console.clear();
console.log(argv);

crearArchivo(argv.b, argv.l)
    .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch(err => console.log(err));


//---------------------------------------
//node app --base=5
//node app --b=5

//node app -b 8
//node app -b 8 -l
