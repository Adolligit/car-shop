import { Request, Response } from 'express';
import CatchAllMethodsErros from '../errors/CatchAllMethodsErrors';
import { CarSchemaZod } from '../interfaces/ICar';
import { VehicleSchemaZod } from '../interfaces/IVehicle';

const carSchema = CarSchemaZod.merge(VehicleSchemaZod);

class CarMiddleware {
  public static inputValidation(req: Request, _res: Response) {
    try {
      carSchema.parse(req.body);
    } catch ({ message }) {
      throw new CatchAllMethodsErros(message as string, 400);
    }
  }
}

export default CarMiddleware;