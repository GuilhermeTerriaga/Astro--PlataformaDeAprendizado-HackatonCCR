import { Router } from 'express';
import multer from 'multer';

import authenticationMiddleware from './app/middlewares/authenticationMiddleware';

import SessionController from './app/controllers/SessionController';
import FileController from './app/controllers/FileController';
import UserController from './app/controllers/UserController';
import QuestionController from './app/controllers/QuestionController';

import multerConfig from './config/multer';

const upload = multer(multerConfig);
const routes = new Router();

// o primeiro é para cadastar-se e o segundo para fazer a autenticação
routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.use(authenticationMiddleware);

routes.put('/users', UserController.update);
routes.get('/users', UserController.index);
routes.get('/usersone', UserController.indexOne);

routes.post('/point', UserController.point);

routes.get('/questions', QuestionController.index);
routes.post('/questions', QuestionController.answerQuestion);

routes.post('/files', upload.single('file'), FileController.store);

module.exports = routes;
