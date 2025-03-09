const { response, request } = require('express');

const Usuario = require('../models/usuario');

const usuariosGet= (req = request, res = response) =>{

    //const query = req.query;
    const {q, nombre ='noName', apikey } = req.query;

    res.json({                
        msg: 'get API - controller',
       // query
       q,
       nombre,
       apikey
    });
}

const usuariosPut= (req, res = response) =>{

    const {id} = req.params;

    res.json({                
        msg: 'put API - controller',
        id
    });
}

const usuariosPost= async (req, res = response) =>{

    //const body = req.body;
    //const {nombre, edad } = req.body;

    const body = req.body;
    const usuario = new Usuario( body );   
    
    await usuario.save();

    res.json({                
        msg: 'post API - controller',
    //    body
    //    nombre,
    //    edad
        usuario
    });
}
const usuariosDelete= (req, res = response) =>{
    res.json({                
        msg: 'delete API - controller'
    });
}


module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete
}