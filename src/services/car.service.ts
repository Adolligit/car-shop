import { ICar } from '../interfaces/ICar';
import CarModel from '../models/car.model';

class CarService {
  private _carModel: CarModel;

  constructor(carModel: CarModel) { this._carModel = carModel; }

  public async create(obj: ICar) {
    const created = await this._carModel.create(obj);

    return created as ICar;
  }

  // public async read() {
  //   const wasRead = await this._carModel.read();

  //   return wasRead;
  // }

  // public async readOne(id: string) {
  //   const wasFound = await this._carModel.readOne(id);

  //   return wasFound;
  // }

  // public async update(id: string, payload: ICar) {
  //   const updated = await this._carModel.update(id, payload);

  //   return updated;
  // }

  // public async delete(id: string) {
  //   const deleted = await this._carModel.delete(id);

  //   return deleted;
  // }
}

export default CarService;