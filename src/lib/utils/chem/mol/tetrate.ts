export const mol_symbols = ['n', 'm', 'M', 'V', 'c'] as const;
export type mol_symbol_type = typeof mol_symbols[number];
export type element_mol_attributes = Partial<Record<mol_symbol_type, number>>;

export default tetrate()

