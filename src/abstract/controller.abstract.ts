import { Request, Response } from 'express';
import IController from '../interfaces/IController';
import AbstractService from './service.abstract';

abstract class AbstractController<T> implements IController<T> {
  private _service: AbstractService<T>;

  constructor(service: AbstractService<T>) {
    this._service = service;
  }

  public async create(req: Request, res: Response): Promise<Response<T>> {
    return res.status(201).json(await this._service.create(req.body));
  }

  public async read(req: Request, res: Response): Promise<Response<T[]>> {
    return res.status(200).json(await this._service.read());
  }

  public async readOne(req: Request, res: Response): Promise<Response<T>> {
    return res.status(200).json(await this._service.readOne(req.params.id));
  }

  public async update(req: Request, res: Response): Promise<Response<T>> {
    const { id } = req.params;

    return res.status(200).json(await this._service.update(id, req.body));
  }

  public async delete(req: Request, res: Response): Promise<void> {
    await this._service.delete(req.params.id);
    return res.status(204).end();
  }
}

export default AbstractController;