import { z } from 'zod';
import { IVehicle } from './vehicle.interface';

export const CarSchemaZod = z.object({
  doorsQty: z.number().int().min(2).max(4),
  seatsQty: z.number().int().min(2).max(7),
});

type TypeCar = z.infer<typeof CarSchemaZod>;

export interface ICar extends IVehicle, TypeCar {}