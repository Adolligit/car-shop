import express from 'express';
import ErrorHandler from '../middlewares/error.middleware';
import car from './car.routes';

const routes = express();

routes.use('/cars', car);
routes.use(ErrorHandler);

export default routes;