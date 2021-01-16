import { Router } from 'express';
import multer from 'multer';

import multerConfig from './config/multer';

const routes = new Router();

routes.get('/testezada', (req, res) => {
  return res.json({ ok: true });
});

module.exports = routes;
