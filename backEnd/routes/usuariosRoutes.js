const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/usuariosController');

router.use('/', usuariosController);

module.exports =  router;