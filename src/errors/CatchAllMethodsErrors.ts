import { NextFunction, Request, Response } from 'express';

export default (
  { message, stack: status }: Error,
  _req: Request,
  res: Response,
  _nxt: NextFunction,
) => res
  .status(Number(status) || 500) // ai esse Number por causa do TS zzzzzz
  .json({ message }); 
