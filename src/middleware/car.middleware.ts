import httpStatus from 'http-status';
import { NextFunction, Request, Response } from 'express';
import { isValidObjectId } from 'mongoose';
import { ZodError } from 'zod';

import CatchAllMethodsErrors from '../error/catch-all-methods-errors';
import { CarSchemaZod } from '../interface/car.interface';
import { VehicleSchemaZod } from '../interface/vehicle.interface';

const carSchema = CarSchemaZod.merge(VehicleSchemaZod);

class CarMiddleware {
  public static inputValidation(req: Request, _res: Response, nxt: NextFunction) {
    try {
      carSchema.parse(req.body);
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

export default CarMiddleware;