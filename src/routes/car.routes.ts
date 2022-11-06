import express from 'express';

import CarController from '../controllers/car.controlller';

const car = express();

car.get('/', CarController.all);

export default car;