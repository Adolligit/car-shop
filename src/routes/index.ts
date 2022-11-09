import express from 'express';
import ErrorHandler from '../errors/CatchAllMethodsErrors';
import car from './car.routes';

const routes = express();

routes.use('/cars', car);
routes.use(ErrorHandler);

export default routes;