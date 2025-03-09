
const { Router } = require('express');
const { check } = require('express-validator');
const Role = require('../models/role');


const { usuariosGet, usuariosPut, usuariosPost, usuariosDelete } = require('../controllers/usuarios.controller');
const { validarCampos } = require('../middlewares/validar_campos_md');

const router = Router();

router.get('/', usuariosGet);

router.put('/:id', usuariosPut);

router.post('/',[
    check('nombre','El nombre no es obligatorio').not().isEmpty(),
    check('password','EL password debe de ser de más de 6 caracteres').isLength({min: 6}),
    check('correo','El nombre no es válido').isEmail(),
    //check('rol','No es un rol válido').isIn(['ADMIN_ROLE','USER_ROLE']),
    check('rol').custom( async(rol = '') => {
        const existeRol = await Role.findOne({ rol });
        if( !existeRol){
            throw new Error(`El rol ${ rol } no esta registrado en la BD`)
        }
    }),
    validarCampos
], usuariosPost);

router.delete('/', usuariosDelete);

module.exports = router;