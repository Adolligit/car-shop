import { Request, Response } from 'express';

const all = (_req: Request, res: Response<{ message: string }>) => res
  .status(200).send({ message: 'tamo on!' });

export default { all };