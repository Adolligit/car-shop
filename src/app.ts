import express from 'express';
import routes from './route';

const app = express();

app.use(express.json());
app.use('/v1', routes);

export default app;
