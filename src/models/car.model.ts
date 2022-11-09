import { ICar } from '../interfaces/ICar';
import MongooseModel from './odm/mongoose.model';

class Car extends MongooseModel<ICar> {}

export default Car;