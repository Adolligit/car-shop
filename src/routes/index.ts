import express from 'express';
import car from './car.routes';

const routes = express();

routes.use(car);

export default routes;