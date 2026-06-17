import z from "zod";

import { createVesselSchema } from '../schemas';

export type CreateVesselFormDataType = z.infer<typeof createVesselSchema>;