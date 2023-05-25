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

  public async readOne(req: Request, res: Response) {
    return res.status(200).json(await this._carService.readOne(req.params.id));
  }

  public async update(req: Request, res: Response) {
    const { id } = req.params;

    return res.status(200).json(await this._carService.update(id, req.body));
  }

  public async delete(req: Request, res: Response) {
    await this._carService.delete(req.params.id);
    return res.status(204).end();
  }
}

export default CarController;