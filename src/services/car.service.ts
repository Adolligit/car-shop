import { ICar } from '../interfaces/ICar';
import Car from '../models/car.model';

class CarService {
  private static _carModel: Car = new Car('Car');

  public static async create(obj: ICar) {
    const created = await this._carModel.create(obj);

    return { _id: created._id, ...obj } as ICar;
  }

  public static async read() {
    const created = await this._carModel.read();

    return created;
  }
}

export default CarService;