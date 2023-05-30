import { Schema } from 'mongoose';
import { ICar } from '../interfaces/ICar';
import MongooseModel from '../abstract/model.abstract';

const schema = new Schema<ICar>({
  model: String,
  year: Number,
  color: String,
  status: Boolean,
  buyValue: Number,
  doorsQty: Number,
  seatsQty: Number,
}, { versionKey: false });

class Car extends MongooseModel<ICar> {
  constructor() {
    super('Car', schema);
  }
}

export default Car;