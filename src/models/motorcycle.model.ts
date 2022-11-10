import { Schema } from 'mongoose';
import { IMotorcycle } from '../interfaces/IMotorcycle';
import MongooseModel from './odm/mongoose.model';

const schema = new Schema<IMotorcycle>({
  model: String,
  year: Number,
  color: String,
  buyValue: Number,
  category: String,
  engineCapacity: Number,
}, { versionKey: false });

class Motorcycle extends MongooseModel<IMotorcycle> {
  constructor() {
    super('Motorcycle', schema);
  }
}

export default Motorcycle;