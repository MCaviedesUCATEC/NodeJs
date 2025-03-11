const { Router } = require('express');
const { check } = require('express-validator');


const { login } = require('../controllers/auth.controller');
const { validarCampos } = require('../middlewares/validar_campos_md');

const router = Router();

router.post('/login',[
    check('correo', 'El correo es obligatorio').isEmail(),
    check('password', 'la contraseña es obligatoria').isEmpty(),
    validarCampos

], login );



module.exports = router;