import { z } from 'zod';

export const VehicleSchemaZod = z.object({
  _id: z.string().optional(),
  model: z.string().min(3),
  year: z.number().min(1900).max(2022),
  color: z.string().min(3),
  status: z.boolean().optional(),
  buyValue: z.number().int(),
});

export type IVehicle = z.infer<typeof VehicleSchemaZod>;