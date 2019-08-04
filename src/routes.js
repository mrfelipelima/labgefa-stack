/* eslint-disable linebreak-style */
const express = require('express');

const multer = require('multer');

const multerConfig = require('./config/multer');

const routes = express.Router();

const BoxController = require('./controllers/BoxController');

const FileController = require('./controllers/FileController');

/**
 * GET = Quando formos buscar alguma informação
 * POST = Quando formos criar alguma informação
 * PUT = Quando formos editar alguma informação
 * DELETE = Quando formos apagar alguma informação
 */

routes.post('/boxes', BoxController.store);
routes.get('/boxes/:id', BoxController.show);

routes.post(
  '/boxes/:id/files',
  multer(multerConfig).single('file'),
  FileController.store,
);


module.exports = routes;
