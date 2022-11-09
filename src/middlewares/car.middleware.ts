import { NextFunction, Request, Response } from 'express';
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
}

export default CarMiddleware;