import { NextFunction, Request, Response } from 'express';
import CatchAllMethodsErros from '../errors/CatchAllMethodsErrors';

export default (
  err: CatchAllMethodsErros, // não consigo desestruturar getStatus, pois da erro ZZZZZ TS
  _req: Request,
  res: Response,
  _nxt: NextFunction,
) => res
  .status(err.getStatus() || 500) // ai esse Number por causa do TS zzzzzz
  .json({ messag: err.message }); 
