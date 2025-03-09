const { response } = require('express');

const usuariosGet= (req, res = response) =>{
    res.json({                
        msg: 'get API - controller'
    });
}

const usuariosPut= (req, res = response) =>{
    res.json({                
        msg: 'put API - controller'
    });
}

const usuariosPost= (req, res = response) =>{

    //const body = req.body;
    const {nombre, edad } = req.body;

    res.json({                
        msg: 'post API - controller',
    //    body
        nombre,
        edad
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