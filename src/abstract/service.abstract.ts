import httpStatus from 'http-status';
import CatchAllMethodsErrors from '../errors/catch-all-methods-errors';
import { IModel } from '../interfaces/model.interface';

abstract class AbstractService<T> implements IModel<T> {
  private _model: IModel<T>;

  constructor(model: IModel<T>) {
    this._model = model;
  }
  
  public async create(obj: T): Promise<T> {
    const created = await this._model.create(obj);

    return created as T;
  }
  
  public async read(): Promise<T[]> {
    const wasRead = await this._model.read();
    
    return wasRead;
  }
  
  public async readOne(id: string): Promise<T | null> {
    const wasFound = await this._model.readOne(id);

    if (!wasFound) throw new CatchAllMethodsErrors('Object not found', httpStatus.NOT_FOUND);

    return wasFound;
  }
  
  public async update(id: string, obj: T): Promise<T | null> {
    await this.readOne(id);
    await this._model.update(id, { ...obj });
    
    return this.readOne(id);
  }
  
  public async delete(id: string): Promise<T | null> {
    await this.readOne(id);
    
    const deleted = await this._model.delete(id);

    return deleted;
  }
}

export default AbstractService;