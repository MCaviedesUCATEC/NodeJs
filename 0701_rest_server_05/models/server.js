const express = require('express')
const cors = require('cors');

class Server{

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios'

        //Middlewares
        this.middlewares();
        //Rutas de mi aplicacion
        this.routes();
    }

    middlewares(){
        //CORS
        this.app.use( cors() );
        //directorio publico express
        this.app.use( express.static('public'));
    }

    routes(){
        this.app.use( this.usuariosPath , require('../routes/usuarios.route'));
    }

    listen(){
        this.app.listen(this.port, () =>{
            console.log('Servidor corriendo en puerto', this.port); 
        });
    }

}

module.exports = Server;