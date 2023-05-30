import {
  Schema,
  model as modelMongoose,
  Model,
  UpdateQuery,
} from 'mongoose';
import { IModel } from '../interfaces/IModel';

abstract class MongooseModel<T> implements IModel<T> {
  protected _model: Model<T>;

  constructor(nameModel: string, schema: Schema) {
    this._model = modelMongoose(nameModel, schema);
  }
  
  public create = async (obj: T): Promise<T> => this._model.create({ ...obj });
  public read = async (): Promise<T[]> => this._model.find();
  public readOne = async (_id: string): Promise<T | null> => this._model.findOne({ _id });
  public update = async (_id: string, obj: T): Promise<T | null> => (
    this._model.findOneAndUpdate({ _id }, { ...obj } as UpdateQuery<T>)
  );
  public delete = async (_id: string): Promise<T | null> => this._model.findOneAndDelete({ _id });
}

export default MongooseModel;