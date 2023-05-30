import express from 'express';
import 'express-async-errors';

import MotorcycleModel from '../model/motorcycle.model';
import MotorcycleController from '../controller/motorcycle.controller';
import MotorcycleService from '../service/motorcycle.service';
import middleware from '../middleware/motorcycle.middleware';

const model = new MotorcycleModel();
const service = new MotorcycleService(model);
const controller = new MotorcycleController(service);

const motorcycle = express();

motorcycle.route('/')
  .get((req, res) => controller.read(req, res))
  .post(
    middleware.inputValidation,
    (req, res) => controller.create(req, res),
  );

motorcycle.route('/:id')  
  .all(middleware.idMongoValidation)
  .get((req, res) => controller.readOne(req, res))
  .put((req, res) => controller.update(req, res))
  .delete((req, res) => controller.delete(req, res));

export default motorcycle;