import { Schema, model as modelMongoose, Model, UpdateQuery } from 'mongoose';
import { IModel } from '../../interfaces/IModel';

abstract class MongooseModel<T> implements IModel<T> {
  protected _model: Model<T>;

  constructor(nameModel: string) {
    this._model = modelMongoose(nameModel, new Schema<T>());
  }
  
  public create = async (obj: T): Promise<T> => this._model.create({ ...obj });
  public read = async (): Promise<T[]> => this._model.find();
  public readOne = async (_id: string): Promise<T | null> => this._model.findOne({ _id });
  public update = async (id: string, obj: T): Promise<T | null> => (
    this._model.findOneAndUpdate({ id }, { ...obj } as UpdateQuery<T>)
  );
  public delete = async (id: string): Promise<T | null> => this._model.findOneAndDelete({ id });
}

export default MongooseModel;