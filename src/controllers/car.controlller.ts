import { Request, Response } from 'express';
import CarService from '../services/car.service';

class CarController {
  private _carService: CarService;

  constructor(carService: CarService) { this._carService = carService; }

  public async create(req: Request, res: Response) {
    return res.status(201).json(await this._carService.create(req.body));
  }

  public async read(req: Request, res: Response) {
    return res.status(200).json(await this._carService.read());
  }
}

export default CarController;