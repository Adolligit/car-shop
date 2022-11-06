import { z } from 'zod';

const VehicleSchemaZod = z.object({
  model: z.string().min(3),
  year: z.number().min(1900).max(2022),
  color: z.string().min(3),
  status: z.boolean().optional(),
  buyValue: z.number().int(),
});

type TypeVehicle = z.infer<typeof VehicleSchemaZod>;

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IVehicle extends TypeVehicle {}