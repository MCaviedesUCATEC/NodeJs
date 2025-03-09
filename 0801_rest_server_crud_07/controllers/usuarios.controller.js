const { response, request } = require('express');
const bcryptjs = require('bcryptjs');

const Usuario = require('../models/usuario');
const { validationResult } = require('express-validator');

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
    const {nombre, correo, password, rol} = req.body;    
    const usuario = new Usuario({nombre, correo, password, rol});   
    //Encriptar la contraseña
    const salt = bcryptjs.genSaltSync();
    usuario.password = bcryptjs.hashSync(password, salt);
    //Guardar en base de datos
    await usuario.save();

    res.json({                        
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