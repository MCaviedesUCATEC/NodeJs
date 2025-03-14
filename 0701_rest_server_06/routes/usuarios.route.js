
const { Router } = require('express');
const { usuariosGet, usuariosPut, usuariosPost, usuariosDelete } = require('../controllers/usuarios.controller');

const router = Router();

router.get('/', usuariosGet);

router.put('/', usuariosPut);

router.post('/', usuariosPost);

router.delete('/', usuariosDelete);

module.exports = router;