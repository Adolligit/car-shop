import httpStatus from 'http-status';
import { NextFunction, Request, Response } from 'express';
import { isValidObjectId } from 'mongoose';
import { ZodError } from 'zod';

import CatchAllMethodsErrors from '../error/catch-all-methods-errors';
import { MotorcycleSchemaZod } from '../interface/motorcycle.interface';
import { VehicleSchemaZod } from '../interface/vehicle.interface';

const motorcycleSchema = MotorcycleSchemaZod.merge(VehicleSchemaZod);

class MotorcycleMiddleware {
  public static inputValidation(req: Request, _res: Response, nxt: NextFunction) {
    try {
      motorcycleSchema.parse(req.body);
      nxt();
    } catch (e) {
      const { issues: [{ message, path }] } = e as ZodError;

      throw new CatchAllMethodsErrors(`${path[0]}: ${message}`, httpStatus.BAD_REQUEST);
    }
  }
  
  public static idMongoValidation(req: Request, _res: Response, nxt: NextFunction) {
    if (!isValidObjectId(req.params.id)) {
      throw new CatchAllMethodsErrors(
        'Id must have 24 hexadecimal characters',
        httpStatus.BAD_REQUEST,
      );
    }
    
    nxt();
  }
}

export default MotorcycleMiddleware;