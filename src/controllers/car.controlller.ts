import { Request, Response } from 'express';
import CarService from '../services/car.service';

class CarController {
  public static async create(req: Request, res: Response) {
    return res.status(201).json(await CarService.create(req.body));
  }
}

export default CarController;