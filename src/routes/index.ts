import express from 'express';
import swaggerUi from 'swagger-ui-express';
import yaml from '../utils/ConvertYamlFile';
import car from './car.routes';
import motorcycle from './motorcycle.routes';
import ErrorHandler from '../middlewares/error.middleware';

const routes = express();

routes.use(
  '/docs',
  swaggerUi.serve,
  swaggerUi.setup(yaml('./public/swagger.yml')),
);
routes.use('/cars', car);
routes.use('/motorcycles', motorcycle);
routes.use(ErrorHandler);

export default routes;