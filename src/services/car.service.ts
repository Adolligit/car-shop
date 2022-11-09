import { ICar } from '../interfaces/ICar';
import Car from '../models/car.model';

class CarService {
  private static _carModel: Car = new Car('Car');

  public static async create(obj: ICar) {
    const created = await this._carModel.create(obj);

    return { _id: created._id, ...obj } as ICar;
  }

  public static async read() {
    const wasRead = await this._carModel.read();

    return wasRead;
  }

  public static async readOne(id: string) {
    const wasFound = await this._carModel.readOne(id);

    return wasFound;
  }

  public static async update(id: string, payload: ICar) {
    const updated = await this._carModel.update(id, payload);

    return updated;
  }

  public static async delete(id: string) {
    const deleted = await this._carModel.delete(id);

    return deleted;
  }
}

export default CarService;