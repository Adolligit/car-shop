import express from 'express';
import 'express-async-errors';

import MotorcycleModel from '../models/motorcycle.model';
import MotorcycleController from '../controllers/motorcycle.controlller';
import MotorcycleService from '../services/motorcycle.service';
import middleware from '../middlewares/motorcycle.middleware';

const model = new MotorcycleModel();
const service = new MotorcycleService(model);
const controller = new MotorcycleController(service);

const motorcycle = express();

motorcycle.post(
  '/',
  (req, res, nxt) => middleware.inputValidation(req, res, nxt), 
  (req, res) => controller.create(req, res),
);
motorcycle.get(
  '/:id',
  (req, res, nxt) => middleware.idMongoValidation(req, res, nxt),
  (req, res) => controller.readOne(req, res),
);
motorcycle.get('/', (req, res) => controller.read(req, res));
motorcycle.put(
  '/:id',
  (req, res, nxt) => middleware.idMongoValidation(req, res, nxt),
  (req, res) => controller.update(req, res),
);
motorcycle.delete(
  '/:id',
  (req, res, nxt) => middleware.idMongoValidation(req, res, nxt),
  (req, res) => controller.delete(req, res),
);

export default motorcycle;