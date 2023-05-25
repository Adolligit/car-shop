import { Request, Response } from 'express';
import MotorcycleService from '../services/motorcycle.service';

class MotorcycleController {
  private _motorcycleService: MotorcycleService;

  constructor(motorcycleService: MotorcycleService) { this._motorcycleService = motorcycleService; }

  public async create(req: Request, res: Response) {
    return res.status(201).json(await this._motorcycleService.create(req.body));
  }

  public async read(req: Request, res: Response) {
    return res.status(200).json(await this._motorcycleService.read());
  }

  public async readOne(req: Request, res: Response) {
    return res.status(200).json(await this._motorcycleService.readOne(req.params.id));
  }

  public async update(req: Request, res: Response) {
    const { id } = req.params;

    return res.status(200).json(await this._motorcycleService.update(id, req.body));
  }

  public async delete(req: Request, res: Response) {
    await this._motorcycleService.delete(req.params.id);
    return res.status(204).end();
  }
}

export default MotorcycleController;