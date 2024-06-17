const express = require('express');
const router = express.Router();
const disciplinasController = require('../controllers/disciplinasController');

router.use('/', disciplinasController);

module.exports =  router;