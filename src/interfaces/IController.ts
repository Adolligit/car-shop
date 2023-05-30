import { Request, Response } from 'express';

interface IController<T> {
  create(req: Request, res: Response): Promise<Response<T>>;
  read(req: Request, res: Response): Promise<Response<T[]>>;
  readOne(req: Request, res: Response): Promise<Response<T>>;
  update(req: Request, res: Response): Promise<Response<T>>;
  delete(req: Request, res: Response): Promise<void>;
}

export default IController;