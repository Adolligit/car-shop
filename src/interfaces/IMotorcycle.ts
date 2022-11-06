import { z } from 'zod';
import { IVehicle } from './IVehicle';

const MotorcycleSchemaZod = z.object({
  category: z.enum(['Street', 'Custom', 'Trail']),
  engineCapacity: z.number().min(2500),
});

type TypeMotorcycle = z.infer<typeof MotorcycleSchemaZod>;

export interface IMotorcycle extends IVehicle, TypeMotorcycle {}