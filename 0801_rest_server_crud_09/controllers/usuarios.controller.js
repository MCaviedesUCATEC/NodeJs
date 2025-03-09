const { response, request } = require('express');
const bcryptjs = require('bcryptjs');

const Usuario = require('../models/usuario');
const { validationResult } = require('express-validator');

const usuariosGet= async (req = request, res = response) =>{
    const {limite = 5, desde = 0 } = req.query;
    const usuarios = await Usuario.find()
        .skip(Number( desde ))
        .limit(Number( limite ));
    res.json({                
        usuarios
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

const usuariosPut= async (req, res = response) =>{

    const {id} = req.params;
    const {_id, password, google, correo, ...resto} = req.body;

    //TODO validar contra la base de datos
    if(password){
         //Encriptar la contraseña
        const salt = bcryptjs.genSaltSync();
        resto.password = bcryptjs.hashSync(password, salt);
    }

    const usuario = await Usuario.findByIdAndUpdate(id, resto);

    res.json(usuario);
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