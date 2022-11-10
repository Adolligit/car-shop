import CatchAllMethodsErros from '../errors/CatchAllMethodsErrors';
import { ICar } from '../interfaces/ICar';
import CarModel from '../models/car.model';

const REFATORA_ESSE_CODIGO = 'Object not found';

class CarService {
  private _carModel: CarModel;

  constructor(carModel: CarModel) { this._carModel = carModel; }

  public async create(obj: ICar) {
    const created = await this._carModel.create(obj);

    return created as ICar;
  }

  public async read() {
    const wasRead = await this._carModel.read();
    
    return wasRead;
  }

  public async readOne(id: string) {
    const wasFound = await this._carModel.readOne(id);

    if (!wasFound) throw new CatchAllMethodsErros(REFATORA_ESSE_CODIGO, 404);

    return wasFound;
  }

  public async update(id: string, payload: ICar) {
    const wasFound = await this._carModel.readOne(id);
    
    if (!wasFound) throw new CatchAllMethodsErros(REFATORA_ESSE_CODIGO, 404);
    if (!payload.model) throw new CatchAllMethodsErros(REFATORA_ESSE_CODIGO, 400);

    const updated = await this._carModel.update(id, { ...payload });
    
    return updated;
  }

  public async delete(id: string) {
    const deleted = await this._carModel.delete(id);

    return deleted;
  }
}

export default CarService;