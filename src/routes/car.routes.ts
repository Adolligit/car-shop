import express from 'express';
import 'express-async-errors';

import CarModel from '../models/car.model';
import CarController from '../controllers/car.controlller';
import CarService from '../services/car.service';
import middleware from '../middlewares/car.middleware';

const model = new CarModel();
const service = new CarService(model);
const controller = new CarController(service);

const car = express();

car.post(
  '/',
  (req, res, nxt) => middleware.inputValidation(req, res, nxt), 
  (req, res) => controller.create(req, res),
);
car.get(
  '/:id',
  (req, res, nxt) => middleware.idMongoValidation(req, res, nxt),
  (req, res) => controller.readOne(req, res),
);
car.get('/', (req, res) => controller.read(req, res));
car.put(
  '/:id',
  (req, res, nxt) => middleware.idMongoValidation(req, res, nxt),
  (req, res) => controller.update(req, res),
);
car.delete(
  '/:id',
  (req, res, nxt) => middleware.idMongoValidation(req, res, nxt),
  (req, res) => controller.delete(req, res),
);

export default car;