import { FUEL_TYPES, VESSEL_TYPES } from '@shared/ships/constants'
import { z } from 'zod'

export const createVesselSchema = z.object({
    name: z.string()
        .min(6, 'O nome do navio deve possuir pelo menos 6 letras.')
        .max(255, 'O nome do navio deve ter menos de 255 letras.'),
    type: z.enum(VESSEL_TYPES, { error: 'Tipo de embarcação inválido.' }),
    capacity: z.number().positive('A capacidade deve ser maior que zero.'),
    fuelType: z.enum(FUEL_TYPES, { error: 'Tipo de combustível inválido.' }),
    averageConsumption: z.number().positive('O consumo médio deve ser maior que zero.')
})