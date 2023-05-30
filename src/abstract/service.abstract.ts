import httpStatus from 'http-status';
import CatchAllMethodsErrors from '../errors/CatchAllMethodsErrors';
import { IModel } from '../interfaces/IModel';

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
    await this._model.readOne(id);

    const updated = await this._model.update(id, { ...obj });
    
    return updated;
  }
  
  public async delete(id: string): Promise<T | null> {
    await this._model.readOne(id);
    
    const deleted = await this._model.delete(id);

    return deleted;
  }
}

export default AbstractService;