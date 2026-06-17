export const FUEL_TYPES_NAMES = [
    'HFO (Heavy Fuel Oil)',
    'MDO (Marine Diesel Oil)',
    'LNG (Gás Natural Liquefeito)'
]

export const FUEL_TYPES = FUEL_TYPES_NAMES.map(fuel => fuel.split(" ")[0].toUpperCase())