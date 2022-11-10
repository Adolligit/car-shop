import CatchAllMethodsErros from '../errors/CatchAllMethodsErrors';
import { IMotorcycle } from '../interfaces/IMotorcycle';
import MotorcycleModel from '../models/motorcycle.model';

const REFATORA_ESSE_CODIGO = 'Object not found';

class MotorcycleService {
  private _motorcycleModel: MotorcycleModel;

  constructor(motorcycleModel: MotorcycleModel) { this._motorcycleModel = motorcycleModel; }

  public async create(obj: IMotorcycle) {
    const created = await this._motorcycleModel.create(obj);

    return created as IMotorcycle;
  }

  public async read() {
    const wasRead = await this._motorcycleModel.read();
    
    return wasRead;
  }

  public async readOne(id: string) {
    const wasFound = await this._motorcycleModel.readOne(id);

    if (!wasFound) throw new CatchAllMethodsErros(REFATORA_ESSE_CODIGO, 404);

    return wasFound;
  }

  public async update(id: string, payload: IMotorcycle) {
    const wasFound = await this._motorcycleModel.readOne(id);
    
    if (!wasFound) throw new CatchAllMethodsErros(REFATORA_ESSE_CODIGO, 404);
    if (!payload.model) throw new CatchAllMethodsErros(REFATORA_ESSE_CODIGO, 400);

    const updated = await this._motorcycleModel.update(id, { ...payload });
    
    return updated;
  }

  public async delete(id: string) {
    const wasFound = await this._motorcycleModel.readOne(id);
    
    if (!wasFound) throw new CatchAllMethodsErros(REFATORA_ESSE_CODIGO, 404);
    const deleted = await this._motorcycleModel.delete(id);

    return deleted;
  }
}

export default MotorcycleService;