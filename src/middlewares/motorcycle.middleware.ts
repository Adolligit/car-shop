import { NextFunction, Request, Response } from 'express';
import { isValidObjectId } from 'mongoose';
import { ZodError } from 'zod';

import CatchAllMethodsErros from '../errors/CatchAllMethodsErrors';
import { MotorcycleSchemaZod } from '../interfaces/IMotorcycle';
import { VehicleSchemaZod } from '../interfaces/IVehicle';

const motorcycleSchema = MotorcycleSchemaZod.merge(VehicleSchemaZod);

class MotorcycleMiddleware {
  public static inputValidation(req: Request, _res: Response, nxt: NextFunction) {
    try {
      motorcycleSchema.parse(req.body);
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

export default MotorcycleMiddleware;