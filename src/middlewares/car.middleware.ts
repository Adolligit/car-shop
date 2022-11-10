import { NextFunction, Request, Response } from 'express';
import { isValidObjectId } from 'mongoose';
import { ZodError } from 'zod';

import CatchAllMethodsErros from '../errors/CatchAllMethodsErrors';
import { CarSchemaZod } from '../interfaces/ICar';
import { VehicleSchemaZod } from '../interfaces/IVehicle';

const carSchema = CarSchemaZod.merge(VehicleSchemaZod);

class CarMiddleware {
  public static inputValidation(req: Request, _res: Response, nxt: NextFunction) {
    try {
      carSchema.parse(req.body);
      nxt();
    } catch (e) {
      const { issues: [{ message, path }] } = e as ZodError;

      throw new CatchAllMethodsErros(`${path[0]}: ${message}`, 400);
    }
  }
  
  public static idMongoValidation(req: Request, _res: Response, nxt: NextFunction) {
    if (!isValidObjectId(req.params.id)) {
      throw new CatchAllMethodsErros('Id must have 24 hexadecimal characters', 400);
    }
    
    nxt();
  }
}

export default CarMiddleware;