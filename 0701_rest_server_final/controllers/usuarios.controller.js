const { response, request } = require('express');

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