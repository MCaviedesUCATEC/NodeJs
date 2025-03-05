const fs = require('fs');



const guardarDB = ( data ) => {

    //const archivo = './db/data.txt'
    //cambiar a JSON
    const archivo = './db/data.json'

    fs.writeFileSync( archivo, JSON.stringify(data) );
}


module.exports = {
    guardarDB
}