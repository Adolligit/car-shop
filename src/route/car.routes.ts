import express from 'express';
import 'express-async-errors';

import CarModel from '../model/car.model';
import CarController from '../controller/car.controller';
import CarService from '../service/car.service';
import middleware from '../middleware/car.middleware';

const model = new CarModel();
const service = new CarService(model);
const controller = new CarController(service);

const car = express();

car.route('/')
  .get((req, res) => controller.read(req, res))
  .post(
    middleware.inputValidation,
    (req, res) => controller.create(req, res),
  );

car.route('/:id')
  .all(middleware.idMongoValidation)
  .get((req, res) => controller.readOne(req, res))
  .put((req, res) => controller.update(req, res))
  .delete((req, res) => controller.delete(req, res));

export default car;