import { Schema } from 'mongoose';
import { IMotorcycle } from '../interfaces/motorcycle.interface';
import MongooseModel from '../abstract/model.abstract';

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