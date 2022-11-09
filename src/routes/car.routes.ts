import express from 'express';
import 'express-async-errors';

import CarController from '../controllers/car.controlller';
import CarMiddleware from '../middlewares/car.middleware';

const car = express();

car.post('/', CarMiddleware.inputValidation, CarController.create);

export default car;