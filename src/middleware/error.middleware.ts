import httpStatus from 'http-status';
import { NextFunction, Request, Response } from 'express';
import CatchAllMethodsErrors from '../error/catch-all-methods-errors';

export default (
  err: CatchAllMethodsErrors, // não consigo desestruturar getStatus, pois da erro ZZZZZ TS
  _req: Request,
  res: Response,
  _nxt: NextFunction,
) => res
  .status(err.getStatus() || httpStatus.INTERNAL_SERVER_ERROR) // ai esse Number por causa do TS zzzzzz
  .json({ error: err.message }); 
