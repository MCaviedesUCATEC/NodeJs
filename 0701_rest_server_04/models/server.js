const express = require('express')
const cors = require('cors');

class Server{

    constructor(){
        this.app = express();
        this.port = process.env.PORT;

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
        this.app.get('/api', (req, res) =>{
            //res.json('Hello World');
            res.json({                
                msg: 'get API'
            });
        });

        this.app.put('/api', (req, res) =>{
            //res.json('Hello World');
            res.json({                
                msg: 'put API'
            });
        });

        this.app.post('/api', (req, res) =>{
            //res.json('Hello World');
            res.json({                
                msg: 'post API'
            });
        });

        this.app.delete('/api', (req, res) =>{
            //res.json('Hello World');
            res.json({                
                msg: 'delete API'
            });
        });
    }

    listen(){
        this.app.listen(this.port, () =>{
            console.log('Servidor corriendo en puerto', this.port); 
        });
    }

}

module.exports = Server;