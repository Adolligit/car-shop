import express from 'express';
import ErrorHandler from '../middlewares/error.middleware';
import car from './car.routes';
import motorcycle from './motorcycle.routes';

const routes = express();

routes.use('/cars', car);
routes.use('/motorcycles', motorcycle);
routes.use(ErrorHandler);

export default routes;